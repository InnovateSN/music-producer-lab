'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import lessonsDb from '@/lib/lessons-db.json';
import styles from './lesson-page.module.css';

const CONFIG_HELPERS = `
  function applyMessagePreset(type, overrides) {
    return {
      initial: "Ready to start.",
      success: "Great job!",
      error: "Try again.",
      ...overrides
    };
  }
  function buildHeroEyebrow(params) {
    return "Lesson " + (params.lessonNumber || "");
  }
  function buildHero(params) {
    return params;
  }
`;

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [config, setConfig] = useState<any>(null);
  const [lessonData, setLessonData] = useState<any>(null);
  const [isStudioMode, setIsStudioMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPremiumUser] = useState(false); // simulated flag for freemium logic
  const [hasAudioTrack, setHasAudioTrack] = useState(false);

  const initializedRef = useRef(false);

  const lessonsByCategory = useMemo(
    () =>
      lessonsDb.reduce((acc: any, lesson: any) => {
        const category = lesson.category || 'Other';
        if (!acc[category]) acc[category] = [];
        acc[category].push(lesson);
        return acc;
      }, {}),
    []
  );

  useEffect(() => {
    if (!slug) return;

    const lesson = lessonsDb.find((item: any) => item.slug === slug);
    if (!lesson) {
      setError('Lesson not found');
      setLoading(false);
      return;
    }

    setLessonData(lesson);

    try {
      let rawContent = lesson.content;
      rawContent = rawContent.replace(/import .*?;/g, '');

      const startMarker = 'export const lessonConfig =';
      const startIndex = rawContent.indexOf(startMarker);
      if (startIndex === -1) {
        throw new Error('Invalid config format');
      }

      let objectString = rawContent.substring(startIndex + startMarker.length).trim();
      if (objectString.endsWith(';')) {
        objectString = objectString.slice(0, -1);
      }

      const evaluator = new Function(`
        ${CONFIG_HELPERS}
        return ${objectString};
      `);

      const parsedConfig = evaluator();
      const currentIndex = lessonsDb.findIndex((l: any) => l.slug === slug);
      const prevLesson = lessonsDb[currentIndex - 1];
      const nextLesson = lessonsDb[currentIndex + 1];

      parsedConfig.prevLessonUrl = prevLesson ? `/lessons/${prevLesson.slug}` : null;
      parsedConfig.nextLessonUrl = nextLesson ? `/lessons/${nextLesson.slug}` : null;
      parsedConfig.overviewUrl = '/labs.html';

      setConfig(parsedConfig);
    } catch (err) {
      console.error('Error parsing lesson config:', err);
      setError('Failed to load lesson content.');
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    if (!config || initializedRef.current) return;

    const initEngine = async () => {
      try {
        const module = await import(/* webpackIgnore: true */ '/lesson-engine.js');
        if (module && module.initLessonFromConfig) {
          const sequencerContainer = document.getElementById('mpl-sequencer-collection');
          if (sequencerContainer) sequencerContainer.innerHTML = '';

          module.initLessonFromConfig(config);
          initializedRef.current = true;

          await import(/* webpackIgnore: true */ '/theme-registry.js');
          // @ts-expect-error runtime script served from public
          await import(/* webpackIgnore: true */ '/theme-manager.js');
        }
      } catch (err) {
        console.error('Failed to initialize engine:', err);
      }
    };

    initEngine();

    return () => {
      initializedRef.current = false;
    };
  }, [config, slug]);

  useEffect(() => {
    if (!slug) return;

    const audioUrl = `/audio/lessons/${slug}.mp3`;
    const audio = new Audio();

    const onCanPlay = () => setHasAudioTrack(true);
    const onError = () => setHasAudioTrack(false);

    audio.addEventListener('canplaythrough', onCanPlay);
    audio.addEventListener('error', onError);
    audio.src = audioUrl;

    return () => {
      audio.removeEventListener('canplaythrough', onCanPlay);
      audio.removeEventListener('error', onError);
      audio.pause();
    };
  }, [slug]);

  const lessonNumber = Number(config?.lessonNumber || lessonData?.lessonNumber || 0);
  const showPaywall = lessonNumber > 3 && !isPremiumUser;

  const lessonVideoUrl =
    lessonData?.videoUrl ||
    lessonData?.video_url ||
    config?.videoUrl ||
    config?.video_url ||
    null;

  if (loading) {
    return <div className={styles.screenState}>LOADING STUDIO...</div>;
  }

  if (error || !config) {
    return (
      <div className={styles.errorState}>
        <h2>ERROR LOADING STUDIO</h2>
        <p>{error}</p>
        <button onClick={() => router.push('/labs.html')}>Back to Labs</button>
      </div>
    );
  }

  return (
    <div className={styles.appShell}>
      <header className={styles.header}>
        <div className={styles.brandArea}>
          <strong>Music Producer Lab</strong>
          <span>{config.hero?.eyebrow || `Lesson ${config.lessonNumber}`}</span>
        </div>

        <div className={styles.headerActions}>
          <button onClick={() => setIsMenuOpen(true)}>Lessons</button>
          <button onClick={() => setIsStudioMode((prev) => !prev)}>
            Switch View: {isStudioMode ? 'Studio' : 'Reading'}
          </button>
          <a href="/labs.html">Exit</a>
        </div>
      </header>

      {isMenuOpen && (
        <div className={styles.menuOverlay}>
          <button className={styles.menuBackdrop} onClick={() => setIsMenuOpen(false)} aria-label="Close" />
          <aside className={styles.menuPanel}>
            <div className={styles.menuHeader}>
              <h3>Lessons</h3>
              <button onClick={() => setIsMenuOpen(false)}>×</button>
            </div>
            <div className={styles.menuContent}>
              {Object.entries(lessonsByCategory).map(([category, lessons]: [string, any]) => (
                <section key={category}>
                  <h4>{category}</h4>
                  <ul>
                    {lessons.map((item: any) => (
                      <li key={item.slug}>
                        <button
                          className={item.slug === slug ? styles.activeLesson : ''}
                          onClick={() => {
                            router.push(`/lessons/${item.slug}`);
                            setIsMenuOpen(false);
                          }}
                        >
                          {item.lessonNumber}. {item.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </aside>
        </div>
      )}

      <div className={`${styles.contentArea} ${isStudioMode ? styles.contentStudio : styles.contentReading}`}>
        <aside className={styles.leftPanel}>
          <div className={styles.mediaCard}>
            {lessonVideoUrl ? (
              <video controls preload="metadata" src={lessonVideoUrl} className={styles.videoPlayer} />
            ) : (
              <div className={styles.videoPlaceholder}>
                <img src="/images/playbutton.png" alt="Video placeholder" />
                <p>Video Coming Soon</p>
              </div>
            )}
          </div>

          <div className={styles.audioCard}>
            {hasAudioTrack ? (
              <audio controls preload="none" src={`/audio/lessons/${slug}.mp3`} className={styles.audioPlayer} />
            ) : (
              <p>Voice-over not available yet for this lesson.</p>
            )}
          </div>

          <div className={styles.lessonText}>
            <h1 id="mpl-hero-title">{config.hero?.title || config.title}</h1>
            <p id="mpl-hero-subtitle">{config.hero?.subtitle || config.subtitle}</p>

            <section>
              <h3>{config.exercise?.title}</h3>
              <div id="mpl-exercise-description" dangerouslySetInnerHTML={{ __html: config.exercise?.description }} />
              <ol id="mpl-exercise-steps">
                {config.exercise?.steps?.map((step: any, i: number) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: step.text || step }} />
                ))}
              </ol>
            </section>

            <div id="mpl-theory-section" />
          </div>
        </aside>

        <main className={styles.rightPanel}>
          <div className={styles.workspaceTop}>
            <div>
              <small>Visual Target</small>
              <div id="mpl-pattern-hint">
                <div id="mpl-pattern-hint-grid" />
                <div id="mpl-pattern-hint-note" />
              </div>
            </div>
            <div id="mpl-seq-status">Initialize...</div>
          </div>

          <div className={styles.workspaceMain}>
            <h2>
              <span id="mpl-step-count-label">16</span>-Step Sequencer
            </h2>
            <div id="mpl-sequencer-collection" />

            <div id="mpl-advanced-controls" className={styles.advancedControls}>
              <div>
                <label htmlFor="mpl-tempo-slider">BPM</label>
                <input type="range" id="mpl-tempo-slider" min="60" max="180" defaultValue="120" />
                <span id="mpl-tempo-value">120</span>
              </div>
              <div>
                <label htmlFor="mpl-swing-slider">SWING</label>
                <input type="range" id="mpl-swing-slider" min="0" max="100" defaultValue="0" />
                <span id="mpl-swing-value">0%</span>
              </div>
            </div>
          </div>

          <div className={styles.transportBar}>
            <div className={styles.transportControls}>
              <button id="mpl-seq-play-all" className={styles.playBtn}>PLAY</button>
              <button id="mpl-seq-stop-all" className={styles.stopBtn}>■</button>
              <button id="mpl-seq-check-all" className={styles.checkBtn}>CHECK EXERCISE</button>
            </div>
            <div className={styles.lessonNav}>
              {config.prevLessonUrl ? (
                <button id="mpl-prev-lesson" onClick={() => router.push(config.prevLessonUrl)}>← Prev</button>
              ) : null}
              {config.nextLessonUrl ? (
                <button id="mpl-next-lesson" onClick={() => router.push(config.nextLessonUrl)}>Next →</button>
              ) : null}
            </div>
          </div>

          {showPaywall && (
            <div className={styles.paywallOverlay}>
              <div className={styles.paywallCard}>
                <h3>Premium Content</h3>
                <p>This lesson is part of Studio Premium. Unlock lessons 4+ to continue.</p>
                <button onClick={() => router.push('/pricing.html')}>Upgrade to Premium</button>
              </div>
            </div>
          )}
        </main>
      </div>

      <div className={styles.hiddenEngineNodes}>
        <div id="navbar-placeholder"></div>
        <div id="mpl-exercise-tip"></div>
        <div id="mpl-exercise-tip-text"></div>
        <div id="mpl-seq-clear-all"></div>
        <div id="mpl-hero-nav-btns"></div>
        <div id="mpl-footer"></div>
        <div id="mpl-footer-overview-link"></div>
        <div id="mpl-preset-controls"></div>
        <div id="mpl-preset-save"></div>
        <div id="mpl-preset-load"></div>
      </div>
    </div>
  );
}
