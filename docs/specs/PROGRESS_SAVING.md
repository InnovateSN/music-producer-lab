# Feature Spec: Progress Saving & Project Export

**Version**: 1.0
**Status**: Draft
**Target PR**: #4
**Owner**: Engineering
**Last Updated**: 2026-01-21

## Problem Statement

Currently, Music Producer Lab saves user data to localStorage:
- Lesson progress tracking
- Sequencer patterns and presets
- User preferences (theme, selected samples)

### Limitations of localStorage

1. **Size limit**: ~5-10 MB total per origin
   - User with 50 patterns × 2 KB each = 100 KB
   - User with 100 lessons completed × 1 KB = 100 KB
   - Total: Approaching limit with heavy usage

2. **No structured queries**: Can't efficiently list all patterns or filter by date
3. **No backup/export**: Users lose data if they clear browser data
4. **No cross-device sync**: Can't access patterns from phone and desktop
5. **Synchronous API**: Blocks main thread for large read/writes

### User Impact
- Users lose hours of work if localStorage is cleared
- Can't share patterns with friends
- Can't back up their projects
- Risk hitting storage quota errors

## Current State

### localStorage Usage

**Progress Tracking** (`progress-tracker.js`):
```javascript
// Keys:
// - 'mpl-completed-lessons': JSON array of lesson IDs
// - 'mpl-lesson-scores': JSON object { lessonId: score }
```

**Sequencer Patterns** (`sequencer.js`):
```javascript
// Keys:
// - 'mpl-drum-pattern': Current pattern state
// - 'mpl-saved-patterns': JSON array of saved patterns
// - 'mpl-mixer-settings': Mixer state (volume, pan, etc.)
// - 'mpl-sample-{instrument}': Selected sample for each instrument
```

**User Preferences** (`navbar.js`, etc.):
```javascript
// Keys:
// - 'mpl-theme': Current theme ID
// - 'debug': Debug mode enabled
```

**Total localStorage usage**: Estimated 200-500 KB for active user

### Current Save/Load Flow

**Auto-save in Drum Playground**:
1. User edits pattern
2. On every change, save to localStorage
3. On page load, restore from localStorage

**Manual Save/Load**:
1. User clicks "Save Pattern"
2. Pattern added to `mpl-saved-patterns` array
3. Pattern list updated in UI
4. User can load pattern later

**No export/import** currently available.

## Proposed Solution

### Phase 1: IndexedDB Adapter (This PR)

#### Why IndexedDB?
- **Much larger quota**: Typically 50%+ of available disk space
- **Asynchronous**: Doesn't block main thread
- **Structured data**: Can query, filter, index
- **Transactional**: Atomic operations
- **Better performance**: Optimized for large datasets

#### Architecture: Storage Adapter Pattern

Create an abstraction layer that supports both localStorage (for backward compatibility) and IndexedDB (for new data).

```javascript
// storage-adapter.js

class StorageAdapter {
  async get(key) { /* ... */ }
  async set(key, value) { /* ... */ }
  async remove(key) { /* ... */ }
  async clear() { /* ... */ }
  async keys() { /* ... */ }
}

class LocalStorageAdapter extends StorageAdapter {
  async get(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  async set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // ... other methods
}

class IndexedDBAdapter extends StorageAdapter {
  constructor(dbName = 'MusicProducerLab', version = 1) {
    super();
    this.dbName = dbName;
    this.version = version;
    this.db = null;
  }

  async init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = event.target.result;

        // Create object stores
        if (!db.objectStoreNames.contains('settings')) {
          db.createObjectStore('settings', { keyPath: 'key' });
        }

        if (!db.objectStoreNames.contains('patterns')) {
          const patternStore = db.createObjectStore('patterns', {
            keyPath: 'id',
            autoIncrement: true
          });
          patternStore.createIndex('name', 'name', { unique: false });
          patternStore.createIndex('createdAt', 'createdAt', { unique: false });
          patternStore.createIndex('updatedAt', 'updatedAt', { unique: false });
        }

        if (!db.objectStoreNames.contains('progress')) {
          const progressStore = db.createObjectStore('progress', {
            keyPath: 'lessonId'
          });
          progressStore.createIndex('completedAt', 'completedAt', { unique: false });
          progressStore.createIndex('score', 'score', { unique: false });
        }
      };
    });
  }

  async get(key) {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['settings'], 'readonly');
      const store = transaction.objectStore('settings');
      const request = store.get(key);

      request.onsuccess = () => {
        resolve(request.result?.value);
      };
      request.onerror = () => reject(request.error);
    });
  }

  async set(key, value) {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['settings'], 'readwrite');
      const store = transaction.objectStore('settings');
      const request = store.put({ key, value });

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  // ... other methods
}
```

#### Pattern Storage API

```javascript
// pattern-storage.js

import { IndexedDBAdapter } from './storage-adapter.js';

class PatternStorage {
  constructor() {
    this.adapter = new IndexedDBAdapter();
  }

  async init() {
    await this.adapter.init();
  }

  async savePattern(pattern) {
    const patternData = {
      name: pattern.name,
      tempo: pattern.tempo,
      steps: pattern.steps,
      tracks: pattern.tracks,
      mixer: pattern.mixer,
      createdAt: pattern.createdAt || Date.now(),
      updatedAt: Date.now()
    };

    return this.adapter.savePattern(patternData);
  }

  async loadPattern(id) {
    return this.adapter.loadPattern(id);
  }

  async listPatterns(options = {}) {
    // options: { sortBy: 'createdAt' | 'updatedAt' | 'name', limit: 50 }
    return this.adapter.listPatterns(options);
  }

  async deletePattern(id) {
    return this.adapter.deletePattern(id);
  }

  async exportPattern(id) {
    const pattern = await this.loadPattern(id);
    return JSON.stringify(pattern, null, 2);
  }

  async exportAllPatterns() {
    const patterns = await this.listPatterns();
    return JSON.stringify(patterns, null, 2);
  }
}
```

### Phase 2: Export/Import System

#### Export Format: JSON

**Single Pattern Export**:
```json
{
  "version": "1.0",
  "type": "pattern",
  "data": {
    "id": 123,
    "name": "Funky Groove",
    "tempo": 120,
    "steps": 16,
    "tracks": [
      {
        "instrument": "kick",
        "sample": "kick-punchy",
        "pattern": [
          { "step": 0, "velocity": 0.8, "enabled": true },
          { "step": 4, "velocity": 0.7, "enabled": true },
          // ...
        ]
      }
    ],
    "mixer": {
      "kick": { "volume": 0.8, "pan": 0, "mute": false, "solo": false },
      // ...
    },
    "createdAt": 1705843200000,
    "updatedAt": 1705843200000
  }
}
```

**Project Export (All Data)**:
```json
{
  "version": "1.0",
  "type": "project",
  "exportedAt": 1705843200000,
  "data": {
    "patterns": [ /* array of patterns */ ],
    "progress": {
      "completedLessons": ["lesson-drums-1", "lesson-drums-2"],
      "lessonScores": { "lesson-drums-1": 85 }
    },
    "settings": {
      "theme": "dark-cyberpunk",
      "selectedSamples": { "kick": "kick-punchy" }
    }
  }
}
```

#### Export/Import UI

**Location**: Add to Drum Playground and settings page

**Export Button**:
```html
<button class="btn-export" id="exportPatternBtn">
  <svg><!-- download icon --></svg>
  Export Pattern
</button>

<button class="btn-export" id="exportAllBtn">
  <svg><!-- download icon --></svg>
  Export All Data
</button>
```

**Behavior**:
1. Click "Export Pattern" → Download `pattern-name.json`
2. Click "Export All Data" → Download `mpl-project-2026-01-21.json`
3. File downloads via `<a>` tag with `download` attribute

**Import Button**:
```html
<button class="btn-import" id="importBtn">
  <svg><!-- upload icon --></svg>
  Import
</button>
<input type="file" accept=".json" id="importFileInput" style="display: none;">
```

**Behavior**:
1. Click "Import" → Opens file picker
2. User selects `.json` file
3. Validate JSON structure
4. Show preview: "This will import 5 patterns. Continue?"
5. User confirms → Import data
6. Show success toast: "Imported 5 patterns"

#### Import Validation

```javascript
async function importProject(jsonString) {
  let data;

  try {
    data = JSON.parse(jsonString);
  } catch (error) {
    throw new Error('Invalid JSON file');
  }

  // Validate version
  if (!data.version) {
    throw new Error('Missing version field');
  }

  if (data.version !== '1.0') {
    throw new Error(`Unsupported version: ${data.version}`);
  }

  // Validate type
  if (!['pattern', 'project'].includes(data.type)) {
    throw new Error('Invalid type (must be "pattern" or "project")');
  }

  // Validate data structure
  if (!data.data) {
    throw new Error('Missing data field');
  }

  // Type-specific validation
  if (data.type === 'pattern') {
    validatePattern(data.data);
  } else if (data.type === 'project') {
    validateProject(data.data);
  }

  return data;
}

function validatePattern(pattern) {
  const required = ['name', 'tempo', 'tracks'];
  for (const field of required) {
    if (!(field in pattern)) {
      throw new Error(`Missing required field: ${field}`);
    }
  }

  if (!Array.isArray(pattern.tracks)) {
    throw new Error('tracks must be an array');
  }

  // Additional validation...
}
```

### Phase 3: Migration from localStorage

**Auto-migration on first load**:

```javascript
// migration.js

async function migrateFromLocalStorage() {
  const migrationKey = 'mpl-migrated-to-indexeddb';

  // Check if already migrated
  if (localStorage.getItem(migrationKey)) {
    return;
  }

  console.log('Migrating data from localStorage to IndexedDB...');

  const adapter = new IndexedDBAdapter();
  await adapter.init();

  // Migrate patterns
  const savedPatternsJson = localStorage.getItem('mpl-saved-patterns');
  if (savedPatternsJson) {
    const patterns = JSON.parse(savedPatternsJson);
    for (const pattern of patterns) {
      await adapter.savePattern(pattern);
    }
    console.log(`Migrated ${patterns.length} patterns`);
  }

  // Migrate progress
  const completedLessons = localStorage.getItem('mpl-completed-lessons');
  if (completedLessons) {
    const lessons = JSON.parse(completedLessons);
    for (const lessonId of lessons) {
      await adapter.saveProgress({
        lessonId,
        completed: true,
        completedAt: Date.now()
      });
    }
    console.log(`Migrated ${lessons.length} completed lessons`);
  }

  // Migrate settings (theme, samples, etc.)
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('mpl-') && key !== 'mpl-migrated-to-indexeddb') {
      const value = localStorage.getItem(key);
      await adapter.set(key, value);
    }
  }

  // Mark migration complete
  localStorage.setItem(migrationKey, 'true');

  console.log('Migration complete!');
}

// Run on app init
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', migrateFromLocalStorage);
} else {
  migrateFromLocalStorage();
}
```

**Backward compatibility**: Keep localStorage writes for 2-3 releases, then deprecate.

## Acceptance Criteria

### Must Have (MVP)
- ✅ IndexedDB adapter implemented with proper error handling
- ✅ Pattern storage API (save, load, list, delete)
- ✅ Export single pattern as JSON file
- ✅ Export all data (patterns + progress + settings) as JSON file
- ✅ Import pattern from JSON file
- ✅ Import project from JSON file
- ✅ Import validation (reject invalid JSON)
- ✅ Auto-migration from localStorage to IndexedDB on first load
- ✅ No data loss during migration
- ✅ Works on Chrome, Firefox, Safari, iOS Safari
- ✅ UI for export/import in Drum Playground

### Should Have
- ✅ Import preview ("This will import 5 patterns. Continue?")
- ✅ Success/error toasts for export/import
- ✅ Duplicate pattern name handling (append " (copy)")
- ✅ Export includes metadata (exportedAt, version)

### Nice to Have (Future)
- ⏳ Cloud sync (requires backend)
- ⏳ Pattern sharing (public URLs)
- ⏳ Conflict resolution (multiple devices)
- ⏳ Pattern versioning (undo/redo history)

## Test Plan

### Test 1: IndexedDB Storage
**Browsers**: Chrome, Firefox, Safari

1. Open Drum Playground
2. Create a pattern (add some steps)
3. Save pattern as "Test Pattern 1"
4. Open browser DevTools → Application → IndexedDB
5. Expand "MusicProducerLab" database
6. Check "patterns" object store
7. **Expected**: Pattern saved with ID, name, tracks, etc.
8. Refresh page
9. Load "Test Pattern 1"
10. **Expected**: Pattern loads correctly with all data intact

### Test 2: Export Single Pattern
**Browsers**: Chrome, Firefox, Safari

1. Create and save a pattern
2. Click "Export Pattern"
3. **Expected**: File downloads as `pattern-name.json`
4. Open downloaded file in text editor
5. **Expected**:
   - Valid JSON format
   - Contains version, type, data fields
   - Data includes pattern name, tempo, tracks, mixer
6. File size: Should be <10 KB for typical pattern

### Test 3: Export All Data
**Browsers**: Chrome

1. Create 3 patterns
2. Complete 2 lessons
3. Change theme to "Light"
4. Click "Export All Data"
5. **Expected**: File downloads as `mpl-project-YYYY-MM-DD.json`
6. Open file in text editor
7. **Expected**:
   - Contains "patterns" array with 3 items
   - Contains "progress" with 2 completed lessons
   - Contains "settings" with theme: "light"
8. File size: Should be <50 KB

### Test 4: Import Single Pattern
**Browsers**: Chrome, Firefox, Safari

1. Export a pattern (from Test 2)
2. Delete pattern from app
3. Click "Import"
4. Select exported JSON file
5. **Expected**:
   - Import success toast appears
   - Pattern appears in pattern list
6. Load imported pattern
7. **Expected**: Pattern identical to original

### Test 5: Import Validation (Invalid Files)
**Browsers**: Chrome

**Test 5a: Invalid JSON**
1. Create text file with invalid JSON: `{ "broken`
2. Try to import
3. **Expected**: Error toast: "Invalid JSON file"

**Test 5b: Missing version**
1. Create JSON file: `{ "type": "pattern", "data": {} }`
2. Try to import
3. **Expected**: Error toast: "Missing version field"

**Test 5c: Wrong type**
1. Create JSON file: `{ "version": "1.0", "type": "invalid", "data": {} }`
2. Try to import
3. **Expected**: Error toast: "Invalid type"

**Test 5d: Missing required fields**
1. Create JSON file with pattern missing "name" field
2. Try to import
3. **Expected**: Error toast: "Missing required field: name"

### Test 6: Migration from localStorage
**Browsers**: Chrome

1. Clear IndexedDB (DevTools → Application → IndexedDB → Delete)
2. Add data to localStorage manually:
   ```javascript
   localStorage.setItem('mpl-saved-patterns', JSON.stringify([
     { name: 'Old Pattern', tempo: 120, tracks: [] }
   ]));
   localStorage.setItem('mpl-completed-lessons', JSON.stringify(['lesson-drums-1']));
   localStorage.setItem('mpl-theme', 'light');
   ```
3. Refresh page
4. Wait 2 seconds
5. Check console for "Migration complete!"
6. Check IndexedDB
7. **Expected**:
   - "Old Pattern" saved in patterns store
   - lesson-drums-1 in progress store
   - mpl-theme in settings store
8. Check localStorage for 'mpl-migrated-to-indexeddb'
9. **Expected**: Key exists with value 'true'
10. Refresh page again
11. **Expected**: No migration messages (already migrated)

### Test 7: Large Data Handling
**Browsers**: Chrome

1. Create 50 patterns (use script if needed)
2. Export all data
3. **Expected**:
   - Export completes in <5 seconds
   - File size <500 KB
4. Import exported file into fresh browser profile
5. **Expected**:
   - Import completes in <10 seconds
   - All 50 patterns imported
   - No errors

### Test 8: IndexedDB Not Available (Fallback)
**Browsers**: Chrome

1. Open DevTools → Console
2. Run: `delete window.indexedDB`
3. Refresh page
4. Try to save a pattern
5. **Expected**:
   - Fallback to localStorage (or show error)
   - Pattern still saves (degraded mode)
   - Warning logged to console

### Test 9: Import Duplicate Names
**Browsers**: Chrome

1. Save pattern named "Cool Beat"
2. Export pattern
3. Import same pattern again
4. **Expected**:
   - Pattern imported as "Cool Beat (copy)"
   - No overwrite without confirmation
5. Import again
6. **Expected**: "Cool Beat (copy 2)"

### Browser Test Matrix

| Test Case | Chrome | Firefox | Safari | iOS Safari |
|-----------|--------|---------|--------|-----------|
| Test 1: IndexedDB Storage | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |
| Test 2: Export Single | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |
| Test 3: Export All | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |
| Test 4: Import Single | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |
| Test 5: Import Validation | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |
| Test 6: Migration | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |
| Test 7: Large Data | ⬜ Pass | ⬜ Pass | ⬜ Skip | ⬜ Skip |
| Test 8: Fallback | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |
| Test 9: Duplicate Names | ⬜ Pass | ⬜ Pass | ⬜ Pass | ⬜ Pass |

## Technical Considerations

### Performance
- **IndexedDB**: Asynchronous, doesn't block UI
- **Migration**: One-time cost (~1-2 seconds for typical user)
- **Export**: Serialization is fast (<100ms for 50 patterns)
- **Import**: Parsing + validation (~200ms for 50 patterns)

### Security
- **No XSS risk**: JSON data is validated before use
- **No code execution**: JSON.parse is safe
- **File access**: User-initiated (file picker)

### Accessibility
- **Screen readers**: Export/import buttons have aria-labels
- **Keyboard nav**: All buttons keyboard-accessible

### Browser Compatibility
- **IndexedDB**: Supported in all target browsers
- **File downloads**: `<a download>` works in all browsers
- **File picker**: `<input type="file">` universal support

### iOS Safari Specific
- **IndexedDB quota**: iOS has lower quota (~50 MB typical)
  - Mitigation: Monitor usage, warn user at 80%
- **File downloads**: Works, but UI is different (share sheet)
- **File picker**: Works via `<input type="file">`

### Private/Incognito Mode
- **IndexedDB**: Available but cleared on close
- **localStorage**: Cleared on close
- **Mitigation**: Detect private mode, show warning, encourage export

## Files to Create/Modify

### New Files
1. `/storage-adapter.js` - Abstract storage interface
2. `/indexeddb-adapter.js` - IndexedDB implementation
3. `/pattern-storage.js` - Pattern-specific storage API
4. `/migration.js` - localStorage → IndexedDB migration
5. `/export-import.js` - Export/import functionality
6. `/docs/STORAGE_ARCHITECTURE.md` (optional) - Technical docs

### Modified Files
1. `/sequencer.js` - Use new storage API instead of localStorage
2. `/progress-tracker.js` - Use new storage API for progress
3. `/drum-playground.html` - Add export/import UI
4. `/styles.css` - Add export/import button styles

### No Changes Needed
- Lesson files (migration handles progress automatically)
- Harmony playground (can adopt same system later)

## Migration Strategy

### Phase 1: Add IndexedDB Alongside localStorage (This PR)
- New storage adapter available
- Old localStorage code still works
- No breaking changes

### Phase 2: Migrate Sequencer (This PR)
- Sequencer uses new storage API
- localStorage kept as fallback
- Auto-migration runs on first load

### Phase 3: Migrate Progress Tracker (Future PR)
- Update progress-tracker.js
- Migrate lesson completion data
- Keep localStorage sync for 2 releases

### Phase 4: Deprecate localStorage (Future PR)
- Remove localStorage writes
- Keep reads for fallback
- Announce to users

## Rollout Plan

### Week 1: Development
- Implement storage-adapter.js
- Implement indexeddb-adapter.js
- Local testing

### Week 2: Integration
- Update sequencer.js
- Implement export/import UI
- Test migration logic

### Week 3: Testing
- Test on all browsers
- Test on iOS devices
- Test with large datasets

### Week 4: Production Release
- Deploy to production
- Monitor error logs for storage failures
- Collect user feedback on export/import

## Success Metrics

### Technical Metrics
- **Migration success rate**: >99% of users
- **Storage quota errors**: Decrease by 90%
- **Export/import success rate**: >95%

### User Metrics
- **Pattern export adoption**: >20% of active users within 30 days
- **Support tickets for lost data**: Decrease by 80%
- **Average patterns per user**: Increase by 50% (less fear of data loss)

## Open Questions

1. **Should we support exporting to MIDI/WAV along with JSON?**
   - Pro: Users can open in DAWs
   - Con: Already have MIDI/WAV export; JSON is for backup
   - **Decision**: JSON only for this PR; MIDI/WAV separate

2. **Should we auto-export as backup periodically?**
   - Pro: Extra safety net
   - Con: Could be annoying; uses storage
   - **Decision**: Not in MVP; add "Export All" button prominently

3. **Should import overwrite existing data or merge?**
   - Pro (overwrite): Simple, clear behavior
   - Pro (merge): Doesn't lose existing data
   - **Decision**: Merge by default; add option to "Clear all data first"

4. **Should we compress export JSON?**
   - Pro: Smaller files
   - Con: Not human-readable; adds complexity
   - **Decision**: No compression in MVP; uncompressed JSON is fine (<1 MB)

## Risks & Mitigations

### Risk 1: Migration fails for some users
**Mitigation**: Extensive testing; keep localStorage intact; add fallback

### Risk 2: IndexedDB quota exceeded
**Mitigation**: Monitor usage; show warning at 80%; encourage export

### Risk 3: Import corrupts data
**Mitigation**: Validate before writing; add "Undo import" button

### Risk 4: Users don't discover export feature
**Mitigation**: Add onboarding tooltip; link from settings; promote in changelog

## Appendix

### IndexedDB vs localStorage Comparison

| Feature | localStorage | IndexedDB |
|---------|--------------|-----------|
| Storage limit | ~5-10 MB | ~50% of disk (GBs) |
| API type | Synchronous | Asynchronous |
| Data structure | Key-value (string) | Structured objects |
| Indexes | None | Yes |
| Transactions | None | Yes |
| Performance | Fast for small data | Fast for all data |
| Browser support | Universal | Universal (modern) |

### Export JSON Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Music Producer Lab Project Export",
  "type": "object",
  "required": ["version", "type", "data"],
  "properties": {
    "version": {
      "type": "string",
      "enum": ["1.0"]
    },
    "type": {
      "type": "string",
      "enum": ["pattern", "project"]
    },
    "exportedAt": {
      "type": "number",
      "description": "Unix timestamp"
    },
    "data": {
      "type": "object"
    }
  }
}
```

### Resources
- [MDN: IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- [IndexedDB Best Practices](https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/indexeddb-best-practices)
- [Storage for the Web](https://web.dev/storage-for-the-web/)

---

**Next Steps After Spec Approval**:
1. Create feature branch: `claude/progress-saving-{sessionId}`
2. Implement storage-adapter.js
3. Implement indexeddb-adapter.js
4. Implement pattern-storage.js
5. Implement migration.js
6. Implement export-import.js
7. Update sequencer.js
8. Add export/import UI
9. Test migration with real data
10. Create PR with this spec linked
