#!/bin/bash

# Create lesson-theory-1.html
cat > lesson-theory-1.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title id="mpl-page-title">Lesson 1 · Music Theory Fundamentals · Intervals & Half Steps | Music Producer Lab</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <meta name="description" id="mpl-meta-description" content="Learn the building blocks of all music: intervals. Understand half steps, whole steps, and how to measure distance between notes." />
    <meta name="theme-color" content="#030508">
    <link rel="icon" type="image/svg+xml" href="mpl-favicon.svg">
    <link rel="manifest" href="manifest.json">
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div id="navbar-placeholder"></div>
    <main class="main-content container">
      <section class="hero" id="mpl-hero" aria-label="Lesson hero">
        <div class="hero-copy">
          <div class="hero-copy-eyebrow" id="mpl-hero-eyebrow">Loading...</div>
          <h1 class="hero-title" id="mpl-hero-title">
            <span id="mpl-hero-title-main">Lesson</span>
            <span id="mpl-hero-title-highlight"></span>
          </h1>
          <p class="hero-subtitle" id="mpl-hero-subtitle"></p>
        </div>
      </section>

      <section class="theory-content" id="mpl-theory-section" style="margin-top: var(--space-2xl); margin-bottom: var(--space-2xl);"></section>
      <section class="exercise-instructions" id="mpl-exercise-section" style="margin-top: var(--space-2xl);"></section>
      <section class="learning-objectives-section" id="mpl-learning-objectives-section" style="margin-top: var(--space-2xl);"></section>
      <section style="margin-top: var(--space-2xl); margin-bottom: var(--space-2xl);">
        <div style="display: flex; gap: var(--space-md); justify-content: space-between; flex-wrap: wrap;">
          <a href="labs.html" class="btn btn-secondary">&larr; Back to Labs</a>
          <a href="lesson-theory-2.html" class="btn btn-primary">Next Lesson: Major & Minor Scales &rarr;</a>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-grid">
        <p class="copyright">© <span id="mpl-year">2025</span> Music Producer Lab</p>
        <nav class="footer-nav">
          <a href="labs.html">Labs</a>
          <a href="index.html">Home</a>
        </nav>
      </div>
    </footer>

    <script type="module">
      import { lessonConfig } from './configs/lesson-theory-1.config.js';
      import { initLessonFromConfig } from './lesson-engine.js';
      initLessonFromConfig(lessonConfig);
      document.getElementById("mpl-year").textContent = new Date().getFullYear();
    </script>
    <script src="navbar.js"></script>
  </body>
</html>
EOF

# Create lesson-theory-2.html
cat > lesson-theory-2.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title id="mpl-page-title">Lesson 2 · Music Theory Fundamentals · Major & Minor Scales | Music Producer Lab</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <meta name="description" id="mpl-meta-description" content="Build major and minor scales from scratch using interval formulas. Understand the W-W-H-W-W-W-H pattern that creates every major scale." />
    <meta name="theme-color" content="#030508">
    <link rel="icon" type="image/svg+xml" href="mpl-favicon.svg">
    <link rel="manifest" href="manifest.json">
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div id="navbar-placeholder"></div>
    <main class="main-content container">
      <section class="hero" id="mpl-hero" aria-label="Lesson hero">
        <div class="hero-copy">
          <div class="hero-copy-eyebrow" id="mpl-hero-eyebrow">Loading...</div>
          <h1 class="hero-title" id="mpl-hero-title">
            <span id="mpl-hero-title-main">Lesson</span>
            <span id="mpl-hero-title-highlight"></span>
          </h1>
          <p class="hero-subtitle" id="mpl-hero-subtitle"></p>
        </div>
      </section>

      <section class="theory-content" id="mpl-theory-section" style="margin-top: var(--space-2xl); margin-bottom: var(--space-2xl);"></section>
      <section class="exercise-instructions" id="mpl-exercise-section" style="margin-top: var(--space-2xl);"></section>
      <section class="learning-objectives-section" id="mpl-learning-objectives-section" style="margin-top: var(--space-2xl);"></section>
      <section style="margin-top: var(--space-2xl); margin-bottom: var(--space-2xl);">
        <div style="display: flex; gap: var(--space-md); justify-content: space-between; flex-wrap: wrap;">
          <a href="lesson-theory-1.html" class="btn btn-secondary">&larr; Previous Lesson</a>
          <a href="lesson-theory-3.html" class="btn btn-primary">Next Lesson: Note Names & Staff Reading &rarr;</a>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-grid">
        <p class="copyright">© <span id="mpl-year">2025</span> Music Producer Lab</p>
        <nav class="footer-nav">
          <a href="labs.html">Labs</a>
          <a href="index.html">Home</a>
        </nav>
      </div>
    </footer>

    <script type="module">
      import { lessonConfig } from './configs/lesson-theory-2.config.js';
      import { initLessonFromConfig } from './lesson-engine.js';
      initLessonFromConfig(lessonConfig);
      document.getElementById("mpl-year").textContent = new Date().getFullYear();
    </script>
    <script src="navbar.js"></script>
  </body>
</html>
EOF

# Create lesson-theory-3.html
cat > lesson-theory-3.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title id="mpl-page-title">Lesson 3 · Music Theory Fundamentals · Note Names & Staff Reading | Music Producer Lab</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <meta name="description" id="mpl-meta-description" content="Master note names on the treble and bass clef. Learn how to read and write music notation efficiently." />
    <meta name="theme-color" content="#030508">
    <link rel="icon" type="image/svg+xml" href="mpl-favicon.svg">
    <link rel="manifest" href="manifest.json">
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div id="navbar-placeholder"></div>
    <main class="main-content container">
      <section class="hero" id="mpl-hero" aria-label="Lesson hero">
        <div class="hero-copy">
          <div class="hero-copy-eyebrow" id="mpl-hero-eyebrow">Loading...</div>
          <h1 class="hero-title" id="mpl-hero-title">
            <span id="mpl-hero-title-main">Lesson</span>
            <span id="mpl-hero-title-highlight"></span>
          </h1>
          <p class="hero-subtitle" id="mpl-hero-subtitle"></p>
        </div>
      </section>

      <section class="theory-content" id="mpl-theory-section" style="margin-top: var(--space-2xl); margin-bottom: var(--space-2xl);"></section>
      <section class="exercise-instructions" id="mpl-exercise-section" style="margin-top: var(--space-2xl);"></section>
      <section class="learning-objectives-section" id="mpl-learning-objectives-section" style="margin-top: var(--space-2xl);"></section>
      <section style="margin-top: var(--space-2xl); margin-bottom: var(--space-2xl);">
        <div style="display: flex; gap: var(--space-md); justify-content: space-between; flex-wrap: wrap;">
          <a href="lesson-theory-2.html" class="btn btn-secondary">&larr; Previous Lesson</a>
          <a href="lesson-theory-4.html" class="btn btn-primary">Next Lesson: The 7 Modes &rarr;</a>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-grid">
        <p class="copyright">© <span id="mpl-year">2025</span> Music Producer Lab</p>
        <nav class="footer-nav">
          <a href="labs.html">Labs</a>
          <a href="index.html">Home</a>
        </nav>
      </div>
    </footer>

    <script type="module">
      import { lessonConfig } from './configs/lesson-theory-3.config.js';
      import { initLessonFromConfig } from './lesson-engine.js';
      initLessonFromConfig(lessonConfig);
      document.getElementById("mpl-year").textContent = new Date().getFullYear();
    </script>
    <script src="navbar.js"></script>
  </body>
</html>
EOF

# Create lesson-theory-4.html
cat > lesson-theory-4.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title id="mpl-page-title">Lesson 4 · Music Theory Fundamentals · The 7 Modes | Music Producer Lab</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <meta name="description" id="mpl-meta-description" content="Master all 7 modes derived from the major scale: Ionian, Dorian, Phrygian, Lydian, Mixolydian, Aeolian, and Locrian." />
    <meta name="theme-color" content="#030508">
    <link rel="icon" type="image/svg+xml" href="mpl-favicon.svg">
    <link rel="manifest" href="manifest.json">
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div id="navbar-placeholder"></div>
    <main class="main-content container">
      <section class="hero" id="mpl-hero" aria-label="Lesson hero">
        <div class="hero-copy">
          <div class="hero-copy-eyebrow" id="mpl-hero-eyebrow">Loading...</div>
          <h1 class="hero-title" id="mpl-hero-title">
            <span id="mpl-hero-title-main">Lesson</span>
            <span id="mpl-hero-title-highlight"></span>
          </h1>
          <p class="hero-subtitle" id="mpl-hero-subtitle"></p>
        </div>
      </section>

      <section class="theory-content" id="mpl-theory-section" style="margin-top: var(--space-2xl); margin-bottom: var(--space-2xl);"></section>
      <section class="exercise-instructions" id="mpl-exercise-section" style="margin-top: var(--space-2xl);"></section>
      <section class="learning-objectives-section" id="mpl-learning-objectives-section" style="margin-top: var(--space-2xl);"></section>
      <section style="margin-top: var(--space-2xl); margin-bottom: var(--space-2xl);">
        <div style="display: flex; gap: var(--space-md); justify-content: space-between; flex-wrap: wrap;">
          <a href="lesson-theory-3.html" class="btn btn-secondary">&larr; Previous Lesson</a>
          <a href="lesson-theory-5.html" class="btn btn-primary">Next Lesson: Rhythm Notation &rarr;</a>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-grid">
        <p class="copyright">© <span id="mpl-year">2025</span> Music Producer Lab</p>
        <nav class="footer-nav">
          <a href="labs.html">Labs</a>
          <a href="index.html">Home</a>
        </nav>
      </div>
    </footer>

    <script type="module">
      import { lessonConfig } from './configs/lesson-theory-4.config.js';
      import { initLessonFromConfig } from './lesson-engine.js';
      initLessonFromConfig(lessonConfig);
      document.getElementById("mpl-year").textContent = new Date().getFullYear();
    </script>
    <script src="navbar.js"></script>
  </body>
</html>
EOF

# Create lesson-theory-5.html
cat > lesson-theory-5.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title id="mpl-page-title">Lesson 5 · Music Theory Fundamentals · Rhythm Notation | Music Producer Lab</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <meta name="description" id="mpl-meta-description" content="Learn to read and write rhythms. Master note values, rests, ties, dots, and how time signatures organize music." />
    <meta name="theme-color" content="#030508">
    <link rel="icon" type="image/svg+xml" href="mpl-favicon.svg">
    <link rel="manifest" href="manifest.json">
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div id="navbar-placeholder"></div>
    <main class="main-content container">
      <section class="hero" id="mpl-hero" aria-label="Lesson hero">
        <div class="hero-copy">
          <div class="hero-copy-eyebrow" id="mpl-hero-eyebrow">Loading...</div>
          <h1 class="hero-title" id="mpl-hero-title">
            <span id="mpl-hero-title-main">Lesson</span>
            <span id="mpl-hero-title-highlight"></span>
          </h1>
          <p class="hero-subtitle" id="mpl-hero-subtitle"></p>
        </div>
      </section>

      <section class="theory-content" id="mpl-theory-section" style="margin-top: var(--space-2xl); margin-bottom: var(--space-2xl);"></section>
      <section class="exercise-instructions" id="mpl-exercise-section" style="margin-top: var(--space-2xl);"></section>
      <section class="learning-objectives-section" id="mpl-learning-objectives-section" style="margin-top: var(--space-2xl);"></section>
      <section style="margin-top: var(--space-2xl); margin-bottom: var(--space-2xl);">
        <div style="display: flex; gap: var(--space-md); justify-content: space-between; flex-wrap: wrap;">
          <a href="lesson-theory-4.html" class="btn btn-secondary">&larr; Previous Lesson</a>
          <a href="lesson-theory-6.html" class="btn btn-primary">Next Lesson: Key Signatures &rarr;</a>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-grid">
        <p class="copyright">© <span id="mpl-year">2025</span> Music Producer Lab</p>
        <nav class="footer-nav">
          <a href="labs.html">Labs</a>
          <a href="index.html">Home</a>
        </nav>
      </div>
    </footer>

    <script type="module">
      import { lessonConfig } from './configs/lesson-theory-5.config.js';
      import { initLessonFromConfig } from './lesson-engine.js';
      initLessonFromConfig(lessonConfig);
      document.getElementById("mpl-year").textContent = new Date().getFullYear();
    </script>
    <script src="navbar.js"></script>
  </body>
</html>
EOF

# Create lesson-theory-6.html
cat > lesson-theory-6.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title id="mpl-page-title">Lesson 6 · Music Theory Fundamentals · Key Signatures & Circle of Fifths | Music Producer Lab</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <meta name="description" id="mpl-meta-description" content="Understand key signatures and how the circle of fifths organizes all 12 keys. Learn sharps, flats, and relative major/minor relationships." />
    <meta name="theme-color" content="#030508">
    <link rel="icon" type="image/svg+xml" href="mpl-favicon.svg">
    <link rel="manifest" href="manifest.json">
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div id="navbar-placeholder"></div>
    <main class="main-content container">
      <section class="hero" id="mpl-hero" aria-label="Lesson hero">
        <div class="hero-copy">
          <div class="hero-copy-eyebrow" id="mpl-hero-eyebrow">Loading...</div>
          <h1 class="hero-title" id="mpl-hero-title">
            <span id="mpl-hero-title-main">Lesson</span>
            <span id="mpl-hero-title-highlight"></span>
          </h1>
          <p class="hero-subtitle" id="mpl-hero-subtitle"></p>
        </div>
      </section>

      <section class="theory-content" id="mpl-theory-section" style="margin-top: var(--space-2xl); margin-bottom: var(--space-2xl);"></section>
      <section class="exercise-instructions" id="mpl-exercise-section" style="margin-top: var(--space-2xl);"></section>
      <section class="learning-objectives-section" id="mpl-learning-objectives-section" style="margin-top: var(--space-2xl);"></section>
      <section style="margin-top: var(--space-2xl); margin-bottom: var(--space-2xl);">
        <div style="display: flex; gap: var(--space-md); justify-content: space-between; flex-wrap: wrap;">
          <a href="lesson-theory-5.html" class="btn btn-secondary">&larr; Previous Lesson</a>
          <a href="lesson-theory-7.html" class="btn btn-primary">Next Lesson: Chord Construction &rarr;</a>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-grid">
        <p class="copyright">© <span id="mpl-year">2025</span> Music Producer Lab</p>
        <nav class="footer-nav">
          <a href="labs.html">Labs</a>
          <a href="index.html">Home</a>
        </nav>
      </div>
    </footer>

    <script type="module">
      import { lessonConfig } from './configs/lesson-theory-6.config.js';
      import { initLessonFromConfig } from './lesson-engine.js';
      initLessonFromConfig(lessonConfig);
      document.getElementById("mpl-year").textContent = new Date().getFullYear();
    </script>
    <script src="navbar.js"></script>
  </body>
</html>
EOF

# Create lesson-theory-7.html
cat > lesson-theory-7.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title id="mpl-page-title">Lesson 7 · Music Theory Fundamentals · Chord Construction | Music Producer Lab</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <meta name="description" id="mpl-meta-description" content="Build chords from intervals: triads, seventh chords, extensions (9ths, 11ths, 13ths), and alterations. Master the theoretical foundation of harmony." />
    <meta name="theme-color" content="#030508">
    <link rel="icon" type="image/svg+xml" href="mpl-favicon.svg">
    <link rel="manifest" href="manifest.json">
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div id="navbar-placeholder"></div>
    <main class="main-content container">
      <section class="hero" id="mpl-hero" aria-label="Lesson hero">
        <div class="hero-copy">
          <div class="hero-copy-eyebrow" id="mpl-hero-eyebrow">Loading...</div>
          <h1 class="hero-title" id="mpl-hero-title">
            <span id="mpl-hero-title-main">Lesson</span>
            <span id="mpl-hero-title-highlight"></span>
          </h1>
          <p class="hero-subtitle" id="mpl-hero-subtitle"></p>
        </div>
      </section>

      <section class="theory-content" id="mpl-theory-section" style="margin-top: var(--space-2xl); margin-bottom: var(--space-2xl);"></section>
      <section class="exercise-instructions" id="mpl-exercise-section" style="margin-top: var(--space-2xl);"></section>
      <section class="learning-objectives-section" id="mpl-learning-objectives-section" style="margin-top: var(--space-2xl);"></section>
      <section style="margin-top: var(--space-2xl); margin-bottom: var(--space-2xl);">
        <div style="display: flex; gap: var(--space-md); justify-content: space-between; flex-wrap: wrap;">
          <a href="lesson-theory-6.html" class="btn btn-secondary">&larr; Previous Lesson</a>
          <a href="lesson-theory-8.html" class="btn btn-primary">Next Lesson: Functional Harmony &rarr;</a>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-grid">
        <p class="copyright">© <span id="mpl-year">2025</span> Music Producer Lab</p>
        <nav class="footer-nav">
          <a href="labs.html">Labs</a>
          <a href="index.html">Home</a>
        </nav>
      </div>
    </footer>

    <script type="module">
      import { lessonConfig } from './configs/lesson-theory-7.config.js';
      import { initLessonFromConfig } from './lesson-engine.js';
      initLessonFromConfig(lessonConfig);
      document.getElementById("mpl-year").textContent = new Date().getFullYear();
    </script>
    <script src="navbar.js"></script>
  </body>
</html>
EOF

# Create lesson-theory-8.html
cat > lesson-theory-8.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title id="mpl-page-title">Lesson 8 · Music Theory Fundamentals · Functional Harmony | Music Producer Lab</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <meta name="description" id="mpl-meta-description" content="Understand chord function: tonic, subdominant, dominant. Learn Roman numeral analysis and how chords create tension and resolution." />
    <meta name="theme-color" content="#030508">
    <link rel="icon" type="image/svg+xml" href="mpl-favicon.svg">
    <link rel="manifest" href="manifest.json">
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div id="navbar-placeholder"></div>
    <main class="main-content container">
      <section class="hero" id="mpl-hero" aria-label="Lesson hero">
        <div class="hero-copy">
          <div class="hero-copy-eyebrow" id="mpl-hero-eyebrow">Loading...</div>
          <h1 class="hero-title" id="mpl-hero-title">
            <span id="mpl-hero-title-main">Lesson</span>
            <span id="mpl-hero-title-highlight"></span>
          </h1>
          <p class="hero-subtitle" id="mpl-hero-subtitle"></p>
        </div>
      </section>

      <section class="theory-content" id="mpl-theory-section" style="margin-top: var(--space-2xl); margin-bottom: var(--space-2xl);"></section>
      <section class="exercise-instructions" id="mpl-exercise-section" style="margin-top: var(--space-2xl);"></section>
      <section class="learning-objectives-section" id="mpl-learning-objectives-section" style="margin-top: var(--space-2xl);"></section>
      <section style="margin-top: var(--space-2xl); margin-bottom: var(--space-2xl);">
        <div style="display: flex; gap: var(--space-md); justify-content: space-between; flex-wrap: wrap;">
          <a href="lesson-theory-7.html" class="btn btn-secondary">&larr; Previous Lesson</a>
          <a href="labs.html" class="btn btn-primary">Back to Labs &rarr;</a>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-grid">
        <p class="copyright">© <span id="mpl-year">2025</span> Music Producer Lab</p>
        <nav class="footer-nav">
          <a href="labs.html">Labs</a>
          <a href="index.html">Home</a>
        </nav>
      </div>
    </footer>

    <script type="module">
      import { lessonConfig } from './configs/lesson-theory-8.config.js';
      import { initLessonFromConfig } from './lesson-engine.js';
      initLessonFromConfig(lessonConfig);
      document.getElementById("mpl-year").textContent = new Date().getFullYear();
    </script>
    <script src="navbar.js"></script>
  </body>
</html>
EOF

echo "All 8 Music Theory HTML files created successfully!"
