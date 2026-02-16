#!/usr/bin/env python3
"""
Migration script for Music Producer Lab lessons
Converts standalone lessons to modular architecture
"""

import re
import sys

def extract_hero_visual(html_content):
    """Extract the custom hero-visual section from original lesson"""
    pattern = r'<aside class="hero-visual"[^>]*>.*?</aside>'
    match = re.search(pattern, html_content, re.DOTALL)
    if match:
        return match.group(0)
    return None

def generate_migrated_lesson(lesson_number, lesson_type="drums", hero_visual=None):
    """Generate migrated lesson HTML"""

    config_path = f"./configs/lesson-{lesson_type}-{lesson_number}.config.js"

    template = f'''<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title id="mpl-page-title">Lesson {lesson_number} | Music Producer Lab</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <meta name="description" id="mpl-meta-description" content="Interactive music production lesson from Music Producer Lab." />
    <meta name="theme-color" content="#030508">
    <link rel="icon" type="image/svg+xml" href="mpl-favicon.svg">
    <link rel="manifest" href="manifest.json">
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <!-- HEADER -->
    <header class="site-header glass">
      <div class="header-inner container">
        <a href="index.html" class="brand">
          <span class="brand-icon"><svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="14" fill="var(--accent-coral)"/><rect x="10" y="10" width="5" height="12" rx="1" fill="#fff"/><rect x="17" y="6" width="5" height="16" rx="1" fill="#fff"/></svg></span>
          <span class="brand-text">Music Producer Lab</span>
        </a>
        <nav class="header-nav">
          <a href="labs.html" class="nav-link">Labs</a>
        </nav>
      </div>
    </header>

    <main class="main-content container">

        <!-- HERO SECTION (populated by JS) -->
        <section class="hero" id="mpl-hero" aria-label="Lesson hero">
          <div class="hero-copy">
            <div class="hero-copy-eyebrow" id="mpl-hero-eyebrow">Loading...</div>
            <h1 class="hero-title" id="mpl-hero-title">
              <span id="mpl-hero-title-main">Lesson</span>
              <span id="mpl-hero-title-highlight"></span>
            </h1>
            <p class="hero-subtitle" id="mpl-hero-subtitle"></p>
          </div>

          {hero_visual if hero_visual else "<!-- Hero visual section -->"}
        </section>

        <!-- EXERCISE INSTRUCTIONS (populated by JS) -->
        <section class="exercise-instructions" id="mpl-exercise-section" style="margin-top: var(--space-2xl);">
          <div class="exercise-box">
            <div class="section-eyebrow">Exercise</div>
            <h2 class="section-title" id="mpl-exercise-title">Loading exercise...</h2>
            <p class="section-body" id="mpl-exercise-description"></p>

            <div class="exercise-steps" id="mpl-exercise-steps-wrap">
              <h3>What to do:</h3>
              <ol class="exercise-checklist" id="mpl-exercise-steps"></ol>
            </div>

            <div class="exercise-tip" id="mpl-exercise-tip" style="display:none;">
              <strong>Tip:</strong> <span id="mpl-exercise-tip-text"></span>
            </div>

            <!-- PATTERN HINT (populated by JS) -->
            <div class="pattern-hint" id="mpl-pattern-hint" style="display:none;">
              <div class="pattern-hint-label">Target Pattern:</div>
              <div id="mpl-pattern-hint-grid"></div>
              <div class="pattern-note" id="mpl-pattern-hint-note"></div>
            </div>
          </div>
        </section>

        <!-- SEQUENCER SECTION -->
        <section class="sequencer-section" id="mpl-sequencer-section" style="margin-top: var(--space-xl);">
          <div class="section-eyebrow" style="margin-bottom: var(--space-sm);">Interactive Sequencer</div>
          <h2 class="section-title" style="margin-bottom: var(--space-lg);"><span id="mpl-step-count-label">16</span>-Step Grid</h2>

          <div class="sequencer" id="mpl-sequencer-collection">
            <!-- Sequencer will be created by JS -->
          </div>

          <!-- CONTROLS -->
          <div class="sequencer-controls" style="display:flex;gap:0.75rem;margin-top:1.5rem;flex-wrap:wrap;align-items:center;">
            <button type="button" class="btn btn-outline" id="mpl-seq-play-all">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="margin-right:4px;"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              Play
            </button>
            <button type="button" class="btn btn-outline" id="mpl-seq-stop-all">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="margin-right:4px;"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
              Stop
            </button>
            <button type="button" class="btn btn-outline" id="mpl-seq-clear-all">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:4px;"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
              Clear
            </button>
            <button type="button" class="btn btn-primary" id="mpl-seq-check-all">
              Check Exercise
            </button>

            <div id="mpl-seq-next-lesson-wrap" style="margin-left:auto;">
              <button class="btn btn-primary" id="mpl-next-lesson" disabled title="Complete exercise to unlock">
                Next Lesson &rarr;
              </button>
            </div>
          </div>

          <div class="sequencer-status" id="mpl-seq-status" aria-live="polite" style="margin-top:1rem;">
            Complete the exercise to unlock the next lesson.
          </div>
        </section>

    </main>

    <!-- FOOTER -->
    <footer class="site-footer">
      <div class="container footer-grid">
        <p class="copyright">© <span id="mpl-year">2025</span> Music Producer Lab</p>
        <nav class="footer-nav">
          <a href="labs.html">Labs</a>
          <a href="index.html">Home</a>
        </nav>
      </div>
    </footer>

    <!-- MODULAR LESSON ENGINE -->
    <script type="module">
      // Import lesson config and engine
      import {{ lessonConfig }} from '{config_path}';
      import {{ initLessonFromConfig }} from './lesson-engine.js';

      // Initialize lesson from config
      initLessonFromConfig(lessonConfig);

      // Set year in footer
      document.getElementById("mpl-year").textContent = new Date().getFullYear();
    </script>
  </body>
</html>
'''

    return template

def migrate_lesson_file(input_file, output_file, lesson_number, lesson_type="drums"):
    """Migrate a single lesson file"""
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            original_content = f.read()

        # Extract hero-visual section
        hero_visual = extract_hero_visual(original_content)

        # Generate migrated content
        migrated_content = generate_migrated_lesson(lesson_number, lesson_type, hero_visual)

        # Write to output file
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(migrated_content)

        print(f"✅ Migrated: {input_file} → {output_file}")
        return True

    except Exception as e:
        print(f"❌ Error migrating {input_file}: {e}")
        return False

def main():
    if len(sys.argv) < 3:
        print("Usage: python3 migrate-lesson.py <lesson_number> <lesson_type>")
        print("Example: python3 migrate-lesson.py 2 drums")
        sys.exit(1)

    lesson_number = sys.argv[1]
    lesson_type = sys.argv[2] if len(sys.argv) > 2 else "drums"

    input_file = f"lesson-{lesson_type}-{lesson_number}.html"
    output_file = f"lesson-{lesson_type}-{lesson_number}.html"
    backup_file = f"lesson-{lesson_type}-{lesson_number}-BACKUP.html"

    # Create backup
    import shutil
    try:
        shutil.copy(input_file, backup_file)
        print(f"📦 Backup created: {backup_file}")
    except:
        print(f"⚠️  Could not create backup")

    # Migrate
    success = migrate_lesson_file(input_file, output_file, lesson_number, lesson_type)

    if success:
        print(f"✨ Migration complete!")
    else:
        print(f"❌ Migration failed")
        sys.exit(1)

if __name__ == "__main__":
    main()
