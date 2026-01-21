# Feature Spec: Backend Architecture (Future)

**Version**: 1.0
**Status**: Draft - Architecture Only
**Target PR**: #7 (Interfaces & Stubs)
**Owner**: Engineering
**Last Updated**: 2026-01-21

## Important Note

**This spec defines architecture and interfaces for future backend services. PR #7 will implement ONLY the interface definitions and stub implementations—no real authentication, payment processing, or cloud infrastructure.**

The goal is to design the system architecture now so that future PRs can add real implementations without refactoring the frontend.

## Problem Statement

Currently, Music Producer Lab is entirely client-side:
- All data stored in browser (localStorage/IndexedDB)
- No user accounts or authentication
- No cloud sync across devices
- No payment processing for premium features
- No social features (sharing, comments)
- No admin dashboard for content management

### Limitations of Client-Only Architecture
1. **No cross-device sync**: Users can't access patterns from phone and desktop
2. **No collaboration**: Can't share patterns or work together
3. **No monetization**: Can't offer premium features or subscriptions
4. **No content management**: Admins can't add lessons without code deployment
5. **Limited analytics**: Can't aggregate usage across all users

### Why Design Now?
- Easier to build frontend with backend in mind
- Avoid major refactoring later
- Clear interfaces = parallel development
- Testable with stubs before backend exists

## Current State

### Authentication
**Current**: Clerk.dev integration exists for teacher dashboard

**Files**:
- `/js/clerk-integration.js`
- `/app/teacher/` - Teacher-specific pages

**Scope**: Limited to teacher features; not used for students

### Data Storage
**Current**: 100% client-side
- localStorage: Small data (theme, settings)
- IndexedDB: Large data (patterns, progress)

**Limitations**: No sync, no backup to cloud, no collaboration

### Content Management
**Current**: Lessons are static HTML + JS config files
- 175 lesson config files in `/configs/`
- Hardcoded in `curriculum.js`

**To add lesson**: Requires code changes + deployment

## Proposed Solution

### Architecture: API Client Pattern

**Philosophy**:
- Frontend talks to abstract API client
- API client has multiple implementations:
  - **Stub** (MVP): Returns fake data, works offline
  - **Real** (Future): Calls actual backend
- Easy to swap implementations without changing frontend

### Phase 1: Interface Definitions (This PR)

**Goal**: Define TypeScript-like interfaces in JSDoc for all backend services.

#### Service Interfaces

**1. Authentication Service**

```javascript
/**
 * @typedef {Object} User
 * @property {string} id - Unique user identifier
 * @property {string} email
 * @property {string} displayName
 * @property {string} avatarUrl
 * @property {string} tier - 'free' | 'premium' | 'teacher'
 * @property {Date} createdAt
 */

/**
 * @typedef {Object} AuthState
 * @property {boolean} isAuthenticated
 * @property {User|null} user
 * @property {string|null} token - JWT token for API requests
 */

/**
 * @interface IAuthService
 */
class IAuthService {
  /**
   * Initialize authentication (check for existing session)
   * @returns {Promise<AuthState>}
   */
  async init() {
    throw new Error('Not implemented');
  }

  /**
   * Sign in with email/password
   * @param {string} email
   * @param {string} password
   * @returns {Promise<AuthState>}
   */
  async signIn(email, password) {
    throw new Error('Not implemented');
  }

  /**
   * Sign up new user
   * @param {string} email
   * @param {string} password
   * @param {string} displayName
   * @returns {Promise<AuthState>}
   */
  async signUp(email, password, displayName) {
    throw new Error('Not implemented');
  }

  /**
   * Sign out current user
   * @returns {Promise<void>}
   */
  async signOut() {
    throw new Error('Not implemented');
  }

  /**
   * Get current auth state
   * @returns {AuthState}
   */
  getAuthState() {
    throw new Error('Not implemented');
  }

  /**
   * Listen for auth state changes
   * @param {function(AuthState): void} callback
   * @returns {function(): void} Unsubscribe function
   */
  onAuthStateChanged(callback) {
    throw new Error('Not implemented');
  }
}
```

**2. Data Sync Service**

```javascript
/**
 * @typedef {Object} Pattern
 * @property {string} id
 * @property {string} userId
 * @property {string} name
 * @property {number} tempo
 * @property {Array} tracks
 * @property {Object} mixer
 * @property {Date} createdAt
 * @property {Date} updatedAt
 * @property {boolean} isPublic
 */

/**
 * @typedef {Object} Progress
 * @property {string} userId
 * @property {string} lessonId
 * @property {boolean} completed
 * @property {number} score
 * @property {Date} completedAt
 */

/**
 * @interface IDataSyncService
 */
class IDataSyncService {
  /**
   * Sync local patterns to cloud
   * @returns {Promise<{uploaded: number, downloaded: number}>}
   */
  async syncPatterns() {
    throw new Error('Not implemented');
  }

  /**
   * Save pattern to cloud
   * @param {Pattern} pattern
   * @returns {Promise<Pattern>}
   */
  async savePattern(pattern) {
    throw new Error('Not implemented');
  }

  /**
   * Load all patterns for current user
   * @returns {Promise<Pattern[]>}
   */
  async loadPatterns() {
    throw new Error('Not implemented');
  }

  /**
   * Delete pattern from cloud
   * @param {string} patternId
   * @returns {Promise<void>}
   */
  async deletePattern(patternId) {
    throw new Error('Not implemented');
  }

  /**
   * Sync progress to cloud
   * @returns {Promise<{uploaded: number, downloaded: number}>}
   */
  async syncProgress() {
    throw new Error('Not implemented');
  }

  /**
   * Save progress record
   * @param {Progress} progress
   * @returns {Promise<Progress>}
   */
  async saveProgress(progress) {
    throw new Error('Not implemented');
  }

  /**
   * Load all progress for current user
   * @returns {Promise<Progress[]>}
   */
  async loadProgress() {
    throw new Error('Not implemented');
  }
}
```

**3. Sharing Service**

```javascript
/**
 * @typedef {Object} SharedPattern
 * @property {string} shareId - Short unique ID for sharing
 * @property {string} patternId
 * @property {string} userId
 * @property {string} url - Full shareable URL
 * @property {number} views
 * @property {Date} createdAt
 * @property {Date} expiresAt - null if no expiration
 */

/**
 * @interface ISharingService
 */
class ISharingService {
  /**
   * Create shareable link for pattern
   * @param {string} patternId
   * @param {Object} options
   * @param {boolean} options.public - Allow anyone to view
   * @param {number} options.expiresIn - Milliseconds until expiration (null = never)
   * @returns {Promise<SharedPattern>}
   */
  async createShareLink(patternId, options = {}) {
    throw new Error('Not implemented');
  }

  /**
   * Load pattern by share ID
   * @param {string} shareId
   * @returns {Promise<Pattern>}
   */
  async loadSharedPattern(shareId) {
    throw new Error('Not implemented');
  }

  /**
   * Revoke share link
   * @param {string} shareId
   * @returns {Promise<void>}
   */
  async revokeShareLink(shareId) {
    throw new Error('Not implemented');
  }

  /**
   * List all shares for current user
   * @returns {Promise<SharedPattern[]>}
   */
  async listShares() {
    throw new Error('Not implemented');
  }
}
```

**4. Payment Service**

```javascript
/**
 * @typedef {Object} Subscription
 * @property {string} id
 * @property {string} userId
 * @property {string} tier - 'free' | 'premium'
 * @property {string} status - 'active' | 'canceled' | 'past_due'
 * @property {Date} currentPeriodStart
 * @property {Date} currentPeriodEnd
 * @property {boolean} cancelAtPeriodEnd
 */

/**
 * @typedef {Object} CheckoutSession
 * @property {string} id
 * @property {string} url - Stripe checkout URL
 */

/**
 * @interface IPaymentService
 */
class IPaymentService {
  /**
   * Create checkout session for subscription
   * @param {string} priceId - Stripe price ID
   * @returns {Promise<CheckoutSession>}
   */
  async createCheckoutSession(priceId) {
    throw new Error('Not implemented');
  }

  /**
   * Get current user's subscription
   * @returns {Promise<Subscription|null>}
   */
  async getSubscription() {
    throw new Error('Not implemented');
  }

  /**
   * Cancel subscription
   * @returns {Promise<Subscription>}
   */
  async cancelSubscription() {
    throw new Error('Not implemented');
  }

  /**
   * Create customer portal session
   * @returns {Promise<{url: string}>}
   */
  async createPortalSession() {
    throw new Error('Not implemented');
  }
}
```

**5. Content Management Service**

```javascript
/**
 * @typedef {Object} Lesson
 * @property {string} id
 * @property {string} title
 * @property {string} category
 * @property {string} difficulty - 'beginner' | 'intermediate' | 'advanced'
 * @property {Object} config - Lesson configuration
 * @property {boolean} isPremium
 * @property {Date} publishedAt
 */

/**
 * @interface IContentService
 */
class IContentService {
  /**
   * Load curriculum (all lessons)
   * @returns {Promise<Lesson[]>}
   */
  async loadCurriculum() {
    throw new Error('Not implemented');
  }

  /**
   * Load single lesson config
   * @param {string} lessonId
   * @returns {Promise<Lesson>}
   */
  async loadLesson(lessonId) {
    throw new Error('Not implemented');
  }

  /**
   * Create new lesson (admin only)
   * @param {Lesson} lesson
   * @returns {Promise<Lesson>}
   */
  async createLesson(lesson) {
    throw new Error('Not implemented');
  }

  /**
   * Update lesson (admin only)
   * @param {string} lessonId
   * @param {Partial<Lesson>} updates
   * @returns {Promise<Lesson>}
   */
  async updateLesson(lessonId, updates) {
    throw new Error('Not implemented');
  }

  /**
   * Delete lesson (admin only)
   * @param {string} lessonId
   * @returns {Promise<void>}
   */
  async deleteLesson(lessonId) {
    throw new Error('Not implemented');
  }
}
```

### Phase 2: Stub Implementations (This PR)

**Goal**: Implement stub versions that return fake data for testing frontend.

**Example: Stub Auth Service**

```javascript
// auth-service-stub.js

import { IAuthService } from './interfaces.js';

export class AuthServiceStub extends IAuthService {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      user: null,
      token: null
    };
    this.listeners = [];
  }

  async init() {
    // Check localStorage for fake session
    const savedUser = localStorage.getItem('stub-user');
    if (savedUser) {
      this.state = {
        isAuthenticated: true,
        user: JSON.parse(savedUser),
        token: 'stub-token-' + Math.random().toString(36).substr(2)
      };
    }
    return this.state;
  }

  async signIn(email, password) {
    // Fake sign in (always succeeds)
    await this.delay(500); // Simulate network

    const user = {
      id: 'stub-user-' + Date.now(),
      email,
      displayName: email.split('@')[0],
      avatarUrl: `https://ui-avatars.com/api/?name=${email}`,
      tier: 'free',
      createdAt: new Date()
    };

    this.state = {
      isAuthenticated: true,
      user,
      token: 'stub-token-' + Math.random().toString(36).substr(2)
    };

    localStorage.setItem('stub-user', JSON.stringify(user));
    this.notifyListeners();

    return this.state;
  }

  async signUp(email, password, displayName) {
    // Same as sign in for stub
    return this.signIn(email, password);
  }

  async signOut() {
    await this.delay(200);

    this.state = {
      isAuthenticated: false,
      user: null,
      token: null
    };

    localStorage.removeItem('stub-user');
    this.notifyListeners();
  }

  getAuthState() {
    return this.state;
  }

  onAuthStateChanged(callback) {
    this.listeners.push(callback);
    return () => {
      const index = this.listeners.indexOf(callback);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  notifyListeners() {
    this.listeners.forEach(callback => callback(this.state));
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
```

### Phase 3: Service Factory (This PR)

**Goal**: Single place to get service implementations.

```javascript
// service-factory.js

import { AuthServiceStub } from './auth-service-stub.js';
import { DataSyncServiceStub } from './data-sync-service-stub.js';
import { SharingServiceStub } from './sharing-service-stub.js';
import { PaymentServiceStub } from './payment-service-stub.js';
import { ContentServiceStub } from './content-service-stub.js';

// Future: Import real implementations
// import { AuthServiceReal } from './auth-service-real.js';

class ServiceFactory {
  constructor() {
    this.mode = this.detectMode();
    this.services = {};
  }

  detectMode() {
    // Check environment variable or URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('backend') === 'real') {
      return 'real';
    }

    // Check if backend is available
    if (window.BACKEND_AVAILABLE) {
      return 'real';
    }

    // Default to stub
    return 'stub';
  }

  getAuthService() {
    if (!this.services.auth) {
      if (this.mode === 'real') {
        // this.services.auth = new AuthServiceReal();
        throw new Error('Real auth service not implemented yet');
      } else {
        this.services.auth = new AuthServiceStub();
      }
    }
    return this.services.auth;
  }

  getDataSyncService() {
    if (!this.services.dataSync) {
      if (this.mode === 'real') {
        throw new Error('Real data sync service not implemented yet');
      } else {
        this.services.dataSync = new DataSyncServiceStub();
      }
    }
    return this.services.dataSync;
  }

  getSharingService() {
    if (!this.services.sharing) {
      if (this.mode === 'real') {
        throw new Error('Real sharing service not implemented yet');
      } else {
        this.services.sharing = new SharingServiceStub();
      }
    }
    return this.services.sharing;
  }

  getPaymentService() {
    if (!this.services.payment) {
      if (this.mode === 'real') {
        throw new Error('Real payment service not implemented yet');
      } else {
        this.services.payment = new PaymentServiceStub();
      }
    }
    return this.services.payment;
  }

  getContentService() {
    if (!this.services.content) {
      if (this.mode === 'real') {
        throw new Error('Real content service not implemented yet');
      } else {
        this.services.content = new ContentServiceStub();
      }
    }
    return this.services.content;
  }

  setMode(mode) {
    this.mode = mode;
    this.services = {}; // Clear cached services
  }
}

export const serviceFactory = new ServiceFactory();
```

### Phase 4: Frontend Integration (This PR)

**Goal**: Update frontend to use service factory.

**Example: Sequencer Save with Cloud Sync**

```javascript
// sequencer.js

import { serviceFactory } from './service-factory.js';

async function savePattern(pattern) {
  // Save locally first (always works)
  await patternStorage.savePattern(pattern);

  // Try to sync to cloud (if authenticated)
  const authService = serviceFactory.getAuthService();
  const authState = authService.getAuthState();

  if (authState.isAuthenticated) {
    try {
      const dataSyncService = serviceFactory.getDataSyncService();
      await dataSyncService.savePattern(pattern);
      console.log('Pattern saved to cloud');
    } catch (error) {
      console.warn('Failed to sync to cloud, saved locally only:', error);
      // Don't fail - local save is enough
    }
  }
}
```

**Example: Sharing a Pattern**

```javascript
// share-pattern.js

import { serviceFactory } from './service-factory.js';

async function sharePattern(patternId) {
  const sharingService = serviceFactory.getSharingService();

  try {
    const share = await sharingService.createShareLink(patternId, {
      public: true,
      expiresIn: null // Never expires
    });

    // Show shareable URL
    showToast({
      type: 'success',
      message: 'Pattern shared!',
      actions: [
        {
          label: 'Copy link',
          onClick: () => {
            navigator.clipboard.writeText(share.url);
            showToast({ type: 'success', message: 'Link copied!' });
          }
        }
      ]
    });

    return share;
  } catch (error) {
    showToast({
      type: 'error',
      message: 'Failed to share pattern: ' + error.message
    });
  }
}
```

## Acceptance Criteria

### Must Have (MVP - This PR)
- ✅ Interface definitions for all 5 services
- ✅ Stub implementations for all 5 services
- ✅ Service factory with mode detection
- ✅ Frontend integration in 2-3 key places (demo purposes)
- ✅ Documentation of architecture
- ✅ JSDoc type annotations
- ✅ Works without real backend (stub mode)
- ✅ No breaking changes to existing features

### Should Have
- ✅ Unit tests for stub services
- ✅ Example usage documentation
- ✅ Migration guide for adding real backend

### Nice to Have (Future PRs)
- ⏳ Real auth service implementation
- ⏳ Real data sync service implementation
- ⏳ Real API backend (Node.js/Python)
- ⏳ Database (PostgreSQL/MongoDB)
- ⏳ Cloud storage (S3/GCS)

## Test Plan

### Test 1: Stub Auth Service
**Browser**: Chrome

1. Get auth service from factory
2. Call `signIn('test@example.com', 'password')`
3. **Expected**:
   - Returns auth state with user object
   - User email is 'test@example.com'
   - Token generated
   - localStorage has 'stub-user' key
4. Call `getAuthState()`
5. **Expected**: isAuthenticated = true
6. Refresh page
7. Call `init()`
8. **Expected**: Auth state restored from localStorage
9. Call `signOut()`
10. **Expected**:
    - isAuthenticated = false
    - localStorage 'stub-user' removed

### Test 2: Stub Data Sync Service
**Browser**: Chrome

1. Sign in with stub auth
2. Get data sync service
3. Create pattern object
4. Call `savePattern(pattern)`
5. **Expected**:
   - Returns pattern with ID
   - Saved to localStorage (stub stores locally)
6. Call `loadPatterns()`
7. **Expected**: Returns array with saved pattern
8. Call `deletePattern(patternId)`
9. **Expected**: Pattern removed
10. Call `loadPatterns()`
11. **Expected**: Empty array

### Test 3: Service Factory Mode Detection
**Browser**: Chrome

1. Load page normally
2. Check `serviceFactory.mode`
3. **Expected**: 'stub'
4. Add URL parameter: `?backend=real`
5. Reload page
6. **Expected**: serviceFactory.mode = 'real'
7. Try to get auth service
8. **Expected**: Throws error (real not implemented)
9. Call `serviceFactory.setMode('stub')`
10. Get auth service
11. **Expected**: Returns stub service (works)

### Test 4: Frontend Integration (Sequencer Save)
**Browser**: Chrome

1. Sign out (not authenticated)
2. Create drum pattern
3. Save pattern
4. **Expected**:
   - Pattern saved locally
   - No error (cloud sync skipped)
5. Sign in with stub auth
6. Save another pattern
7. **Expected**:
   - Pattern saved locally
   - Cloud sync attempted (stub service)
   - Console log: "Pattern saved to cloud"

### Test 5: Sharing Service (Stub)
**Browser**: Chrome

1. Sign in
2. Create and save pattern
3. Click "Share" button
4. **Expected**:
   - Share link created
   - Toast shows "Pattern shared!"
   - "Copy link" action button
5. Click "Copy link"
6. **Expected**:
   - Link copied to clipboard
   - Toast: "Link copied!"
7. Get sharing service
8. Call `listShares()`
9. **Expected**: Returns array with 1 share

### Test 6: Payment Service (Stub)
**Browser**: Chrome

1. Sign in
2. Get payment service
3. Call `getSubscription()`
4. **Expected**:
   - Returns null (no subscription in stub)
5. Call `createCheckoutSession('price_123')`
6. **Expected**:
   - Returns checkout session with URL
   - URL is stub URL (not real Stripe)

### Test 7: Auth State Listeners
**Browser**: Chrome

1. Get auth service
2. Register listener:
   ```javascript
   authService.onAuthStateChanged((state) => {
     console.log('Auth state changed:', state);
   });
   ```
3. Sign in
4. **Expected**: Listener called with isAuthenticated = true
5. Sign out
6. **Expected**: Listener called with isAuthenticated = false

### Test 8: JSDoc Type Checking (VSCode)
**Tool**: VSCode with TypeScript checking enabled

1. Open service-factory.js in VSCode
2. Get auth service:
   ```javascript
   const authService = serviceFactory.getAuthService();
   ```
3. Type `authService.` and trigger autocomplete (Ctrl+Space)
4. **Expected**: See all methods (signIn, signOut, etc.)
5. Call method with wrong params:
   ```javascript
   authService.signIn(123, 456); // Should be strings
   ```
6. **Expected**: VSCode shows type error warning

### Browser Test Matrix

| Test Case | Chrome | Firefox | Safari | Notes |
|-----------|--------|---------|--------|-------|
| Test 1: Stub Auth | ⬜ Pass | ⬜ Pass | ⬜ Pass | Core functionality |
| Test 2: Stub Data Sync | ⬜ Pass | ⬜ Pass | ⬜ Pass | Core functionality |
| Test 3: Mode Detection | ⬜ Pass | ⬜ Pass | ⬜ Pass | Config-based |
| Test 4: Sequencer Integration | ⬜ Pass | ⬜ Pass | ⬜ Pass | Example integration |
| Test 5: Sharing Service | ⬜ Pass | ⬜ Pass | ⬜ Pass | Stub feature |
| Test 6: Payment Service | ⬜ Pass | ⬜ Pass | ⬜ Pass | Stub feature |
| Test 7: Auth Listeners | ⬜ Pass | ⬜ Pass | ⬜ Pass | Event system |
| Test 8: JSDoc Types | ⬜ Pass | ⬜ N/A | ⬜ N/A | IDE feature |

## Technical Considerations

### Performance
- **Stub services**: Return data synchronously (with fake delay)
- **No network requests**: All stub data is local
- **Minimal overhead**: Service factory is lightweight

### Security
- **No real tokens**: Stub auth tokens are fake
- **No real payments**: Stub payment service doesn't charge
- **Clear separation**: Stub vs. real clearly marked

### Architecture
- **Loose coupling**: Frontend doesn't know if backend is real or stub
- **Testability**: Easy to test frontend without backend
- **Parallel development**: Frontend and backend can be built simultaneously

### Future Considerations
- **API versioning**: Plan for API v1, v2, etc.
- **Error handling**: Standardize error responses
- **Rate limiting**: Handle 429 responses
- **Caching**: Cache responses to reduce API calls

## Files to Create/Modify

### New Files (This PR)
1. `/services/interfaces.js` - Interface definitions
2. `/services/auth-service-stub.js` - Stub auth implementation
3. `/services/data-sync-service-stub.js` - Stub data sync
4. `/services/sharing-service-stub.js` - Stub sharing
5. `/services/payment-service-stub.js` - Stub payments
6. `/services/content-service-stub.js` - Stub content
7. `/services/service-factory.js` - Service factory
8. `/docs/BACKEND_ARCHITECTURE.md` - Architecture documentation

### Modified Files (This PR)
1. `/sequencer.js` - Demo integration: save with cloud sync
2. `/drum-playground.html` - Add "Share" button (demo)
3. `/styles.css` - Styling for share button

### Future Files (Not This PR)
- `/services/auth-service-real.js`
- `/services/api-client.js`
- `/backend/` - Backend codebase (Node.js/Python)

## Migration Strategy

**No migration needed** (new feature).

### Development Plan
1. **PR #7**: Interfaces + stubs (this spec)
2. **PR #8**: Real auth service (Clerk or custom)
3. **PR #9**: Real data sync service + API endpoints
4. **PR #10**: Real sharing service
5. **PR #11**: Real payment service (Stripe)
6. **PR #12**: Real content service + admin dashboard

## Success Metrics

### Technical Metrics
- **Code reusability**: 0 frontend changes when swapping stub → real
- **Test coverage**: >80% for stub services
- **Documentation**: 100% of interfaces documented

### Development Metrics
- **Parallel development**: Frontend and backend PRs can merge independently
- **Refactoring**: <10% code change when adding real backend

## Open Questions

1. **Which backend framework to use?**
   - Option A: Node.js + Express
   - Option B: Python + FastAPI
   - Option C: Serverless (AWS Lambda, Vercel Functions)
   - **Decision**: TBD in future PR; interfaces support any

2. **Which database to use?**
   - Option A: PostgreSQL (relational, battle-tested)
   - Option B: MongoDB (document store, flexible)
   - Option C: Firebase (managed, real-time)
   - **Decision**: TBD; interfaces are database-agnostic

3. **How to handle authentication?**
   - Option A: Continue with Clerk
   - Option B: Build custom auth (JWT)
   - Option C: Auth0 or similar
   - **Decision**: Lean toward Clerk (already integrated)

4. **Where to host backend?**
   - Option A: Vercel (same as frontend)
   - Option B: AWS/GCP (more control)
   - Option C: Heroku (easy deployment)
   - **Decision**: TBD; start with Vercel for simplicity

## Risks & Mitigations

### Risk 1: Stub behavior diverges from real backend
**Mitigation**: Keep stubs simple; mirror real API structure; integration tests

### Risk 2: Over-engineering architecture too early
**Mitigation**: Start simple; only 5 services; can refactor later

### Risk 3: Real backend implementation differs from interfaces
**Mitigation**: Write interfaces with real use cases in mind; collaborate with backend dev

### Risk 4: Performance of real backend worse than stubs
**Mitigation**: Add caching layer; optimize API calls; measure and monitor

## Appendix

### Example Backend API Structure (Future)

```
POST   /api/auth/signup
POST   /api/auth/signin
POST   /api/auth/signout
GET    /api/auth/me

GET    /api/patterns
POST   /api/patterns
GET    /api/patterns/:id
PUT    /api/patterns/:id
DELETE /api/patterns/:id

GET    /api/progress
POST   /api/progress
GET    /api/progress/:lessonId

POST   /api/shares
GET    /api/shares/:shareId
DELETE /api/shares/:shareId

GET    /api/subscription
POST   /api/subscription/checkout
POST   /api/subscription/cancel
POST   /api/subscription/portal

GET    /api/lessons
GET    /api/lessons/:id
POST   /api/lessons (admin)
PUT    /api/lessons/:id (admin)
DELETE /api/lessons/:id (admin)
```

### Technology Stack (Suggested)

**Backend**:
- Runtime: Node.js 20+
- Framework: Express or Fastify
- Database: PostgreSQL + Prisma ORM
- Auth: Clerk or JWT
- Payments: Stripe
- Hosting: Vercel or Railway

**Frontend** (existing):
- Vanilla JavaScript
- No build step
- ES6 modules

### Resources
- [Stripe API Docs](https://stripe.com/docs/api)
- [Clerk Docs](https://clerk.dev/docs)
- [Prisma ORM](https://www.prisma.io/)
- [JWT.io](https://jwt.io/)

---

**Next Steps After Spec Approval**:
1. Create feature branch: `claude/backend-architecture-{sessionId}`
2. Create `/services/` directory
3. Write interface definitions (interfaces.js)
4. Implement stub services (5 files)
5. Implement service factory
6. Add demo integration in sequencer
7. Write architecture documentation
8. Test stub services
9. Create PR with this spec linked

**Future PRs**:
- Start with Auth service (easiest)
- Then Data Sync (most valuable)
- Then others based on priority
