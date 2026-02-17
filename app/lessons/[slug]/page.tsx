'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
// Import the database directly (in a real app this might be an API call)
import lessonsDb from '@/lib/lessons-db.json';

// --- HELPER FUNCTIONS FOR LEGACY CONFIG COMPATIBILITY ---
// These mimic the helper functions used in the old config files
// so we can execute the config code without errors.
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

// --- METADATA GENERATION ---
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const lesson = lessonsDb.find((l: any) => l.slug === params.slug);
  if (!lesson) return { title: 'Lesson Not Found | Music Producer Lab' };
  
  return {
    title: `${lesson.title} | MPL Studio`,
    description: lesson.subtitle || `Interactive music production lesson: ${lesson.title}`,
  };
}

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [config, setConfig] = useState<any>(null);
  const [isStudioMode, setIsStudioMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // --- AUTH / PAYMENT STATE (Simulated for now) ---
  const [isPremiumUser, setIsPremiumUser] = useState(false); // Default: Not paid
  const [showPaywall, setShowPaywall] = useState(false);

  const initializedRef = useRef(false);

  // Toggle function
  const toggleLayout = () => {
    setIsStudioMode(!isStudioMode);
  };
  
  // Group lessons by category
  const lessonsByCategory = lessonsDb.reduce((acc: any, lesson: any) => {
    const cat = lesson.category || 'Other';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(lesson);
    return acc;
  }, {});

  // 1. LOAD DATA
  useEffect(() => {
    if (!slug) return;

    // Find lesson in DB
    const lessonData = lessonsDb.find((l: any) => l.slug === slug);

    if (!lessonData) {
      setError("Lesson not found");
      setLoading(false);
      return;
    }

    // --- PAYWALL CHECK ---
    // If lesson is PAID and user is NOT premium -> BLOCK
    if (lessonData.access === 'paid' && !isPremiumUser) {
       setShowPaywall(true);
       setLoading(false);
       return; // Stop loading content
    }
    setShowPaywall(false);

    try {
      // --- THE MAGIC PARSER ---
      // We need to extract the config object from the raw JS string.
      // The raw string looks like: "import ...; export const lessonConfig = { ... };"
      
      let rawContent = lessonData.content;
      
      // 1. Remove imports
      rawContent = rawContent.replace(/import .*?;/g, '');
      
      // 2. Extract the object after "export const lessonConfig ="
      // We look for the start of the object
      const startMarker = "export const lessonConfig =";
      const startIndex = rawContent.indexOf(startMarker);
      
      if (startIndex === -1) {
        throw new Error("Invalid config format");
      }
      
      let objectString = rawContent.substring(startIndex + startMarker.length);
      
      // 3. Remove trailing semicolon if present
      objectString = objectString.trim();
      if (objectString.endsWith(';')) {
        objectString = objectString.slice(0, -1);
      }

      // 4. Evaluate safely-ish
      // We wrap it in a function that returns the object, including helpers
      const evaluator = new Function(`
        ${CONFIG_HELPERS}
        return ${objectString};
      `);
      
      const configObject = evaluator();
      
      // Add navigation URLs dynamically based on DB order
      const currentIndex = lessonsDb.findIndex((l: any) => l.slug === slug);
      const prevLesson = lessonsDb[currentIndex - 1];
      const nextLesson = lessonsDb[currentIndex + 1];
      
      configObject.prevLessonUrl = prevLesson ? `/lessons/${prevLesson.slug}` : null;
      configObject.nextLessonUrl = nextLesson ? `/lessons/${nextLesson.slug}` : null;
      configObject.overviewUrl = "/labs.html"; // Keep for now, or change to /lessons

      setConfig(configObject);
      
    } catch (err) {
      console.error("Error parsing lesson config:", err);
      setError("Failed to load lesson content.");
    } finally {
      setLoading(false);
    }
  }, [slug]);

  // 2. INITIALIZE ENGINE
  useEffect(() => {
    if (!config || initializedRef.current) return;
    
    const initEngine = async () => {
      try {
        // Load engine and styles dynamically
        // Using webpackIgnore to ensure we load from public folder
        const module = await import(/* webpackIgnore: true */ '/lesson-engine.js');
        
        if (module && module.initLessonFromConfig) {
          console.log("Initializing Lesson Engine for:", slug);
          
          // Clear previous instances if any (naive cleanup)
          const sequencerContainer = document.getElementById('mpl-sequencer-collection');
          if (sequencerContainer) sequencerContainer.innerHTML = '';
          
          module.initLessonFromConfig(config);
          initializedRef.current = true;
          
          // Load themes
          await import(/* webpackIgnore: true */ '/theme-registry.js');
          await import(/* webpackIgnore: true */ '/theme-manager.js');
        }
      } catch (err) {
        console.error("Failed to initialize engine:", err);
      }
    };

    initEngine();
    
    // Cleanup function
    return () => {
      initializedRef.current = false;
    };
  }, [config, slug]);

  // --- RENDER ---

  if (loading) {
    return (
      <div style={{height: '100vh', width: '100vw', background: '#0a0b0d', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00d4ff', fontFamily: 'monospace'}}>
        LOADING STUDIO...
      </div>
    );
  }

  if (error || !config) {
    return (
      <div style={{height: '100vh', width: '100vw', background: '#0a0b0d', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff5a3d', flexDirection: 'column'}}>
        <h2>ERROR LOADING STUDIO</h2>
        <p>{error}</p>
        <button onClick={() => router.push('/labs.html')} style={{marginTop: '1rem', padding: '10px 20px', background: 'transparent', border: '1px solid #fff', color: '#fff', cursor: 'pointer'}}>Back to Labs</button>
      </div>
    );
  }

  return (
    <div className="studio-app" style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      background: '#0a0b0d',
      color: '#e0e0e0',
      fontFamily: 'Inter, system-ui, sans-serif',
      overflow: 'hidden'
    }}>
      <style jsx global>{`
        body { margin: 0; padding: 0; overflow: hidden; background: #0a0b0d; }
        /* Override styles.css container limits */
        .container { max-width: 100% !important; padding: 0 !important; margin: 0 !important; }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #111; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #555; }

        /* Sequencer Tweaks for Full Screen */
        .sequencer { 
             display: flex; 
             flex-direction: column; 
             gap: 8px; 
             width: 100%;
        }
        .instrument-row {
             flex: 1;
             min-height: 60px;
        }
        .step-btn {
             height: 100% !important;
             width: 100% !important;
             min-height: 40px;
        }
        
        /* Fix link colors in dark mode */
        a { color: #00d4ff; }
      `}</style>

      {/* --- TOP BAR (NAV) --- */}
      <header style={{
        height: '50px',
        background: '#14161b',
        borderBottom: '1px solid #2a2d35',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.5rem',
        flexShrink: 0
      }}>
        <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
          <div style={{fontWeight: 700, color: '#fff', letterSpacing: '-0.02em'}}>Music Producer Lab</div>
          <div style={{height: '20px', width: '1px', background: '#333'}}></div>
          <div id="mpl-hero-eyebrow" style={{fontSize: '0.85rem', color: '#888'}}>
            {config.hero?.eyebrow || `Lesson ${config.lessonNumber}`}
          </div>
        </div>
        
        <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
           <button 
             onClick={toggleLayout}
             style={{
               background: 'transparent',
               border: '1px solid #333',
               borderRadius: '4px',
               color: isStudioMode ? '#00d4ff' : '#888',
               padding: '5px 12px',
               cursor: 'pointer',
               fontSize: '0.8rem',
               fontWeight: 600,
               display: 'flex', alignItems: 'center', gap: '8px',
               transition: 'all 0.2s'
             }}
           >
             {isStudioMode ? (
               <>
                 <img src="/images/mixer.png" alt="" style={{width: '16px', height: '16px', objectFit: 'contain'}} />
                 STUDIO MODE
               </>
             ) : (
               <>
                 <img src="/images/notamusicale.png" alt="" style={{width: '16px', height: '16px', objectFit: 'contain', filter: 'grayscale(1)'}} />
                 READING MODE
               </>
             )}
           </button>
           <a href="/labs.html" style={{color: '#888', textDecoration: 'none', fontSize: '0.9rem'}}>Exit</a>
        </div>
      </header>

      {/* --- SIDEBAR MENU OVERLAY --- */}
      {isMenuOpen && (
        <div style={{position: 'fixed', inset: 0, zIndex: 100, display: 'flex'}}>
          <div style={{position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.8)'}} onClick={() => setIsMenuOpen(false)}></div>
          <div style={{
            width: '300px', 
            background: '#1a1d26', 
            height: '100%', 
            position: 'relative', 
            borderRight: '1px solid #333',
            display: 'flex', flexDirection: 'column'
          }}>
            <div style={{padding: '1.5rem', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <h2 style={{margin: 0, fontSize: '1.2rem', color: '#fff'}}>Lessons</h2>
              <button onClick={() => setIsMenuOpen(false)} style={{background:'none', border:'none', color:'#888', cursor:'pointer', fontSize:'1.5rem'}}>×</button>
            </div>
            <div style={{flex: 1, overflowY: 'auto', padding: '1rem'}}>
              {Object.entries(lessonsByCategory).map(([category, lessons]: [string, any]) => (
                <div key={category} style={{marginBottom: '1.5rem'}}>
                  <h3 style={{
                    color: '#00d4ff', 
                    fontSize: '0.8rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.1em',
                    marginBottom: '0.8rem',
                    borderBottom: '1px solid #333',
                    paddingBottom: '0.5rem'
                  }}>
                    {category}
                  </h3>
                  <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                    {lessons.map((l: any) => (
                      <li key={l.slug} style={{marginBottom: '0.5rem'}}>
                        <button 
                          onClick={() => { router.push(`/lessons/${l.slug}`); setIsMenuOpen(false); }}
                          style={{
                            background: 'none', 
                            border: 'none', 
                            color: l.slug === slug ? '#fff' : '#888', 
                            textAlign: 'left', 
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            padding: '5px 0',
                            width: '100%',
                            fontWeight: l.slug === slug ? 600 : 400
                          }}
                        >
                          {l.lessonNumber}. {l.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* --- MAIN WORKSPACE --- */}
      <div style={{
        flex: 1, 
        display: 'flex', 
        overflow: isStudioMode ? 'hidden' : 'auto',
        flexDirection: isStudioMode ? 'row' : 'column' // KEY CHANGE: Row vs Column
      }}>
        
        {/* --- LEFT PANEL: GUIDE --- */}
        <aside style={{
          width: isStudioMode ? '400px' : '100%', // Full width in Reading Mode
          minWidth: '350px',
          maxWidth: isStudioMode ? 'none' : '800px', // Limit width for readability in Reading Mode
          margin: isStudioMode ? '0' : '0 auto',
          background: '#0f1115',
          borderRight: isStudioMode ? '1px solid #2a2d35' : 'none',
          display: 'flex',
          flexDirection: 'column',
          overflowY: isStudioMode ? 'auto' : 'visible',
          height: isStudioMode ? '100%' : 'auto'
        }}>
          
          <div style={{padding: '2rem'}}>
            
            {/* VIDEO TUTORIAL SECTION (Placeholder for now) */}
            <div style={{
              width: '100%',
              aspectRatio: '16/9',
              background: '#000',
              borderRadius: '8px',
              border: '1px solid #333',
              marginBottom: '1rem',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
            }}>
              {/* This is where the AI Video would go */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                background: 'linear-gradient(45deg, #1a1d26, #0f1115)'
              }}>
                <div style={{
                  width: '60px', height: '60px', 
                  borderRadius: '50%', 
                  background: 'rgba(0, 212, 255, 0.2)',
                  border: '2px solid #00d4ff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '10px',
                  cursor: 'pointer'
                }}>
                  <div style={{
                    width: 0, height: 0, 
                    borderTop: '10px solid transparent',
                    borderBottom: '10px solid transparent',
                    borderLeft: '18px solid #fff',
                    marginLeft: '4px'
                  }}></div>
                </div>
                <div style={{color: '#888', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em'}}>WATCH TUTORIAL</div>
              </div>
            </div>

            {/* AUDIO INTRO PLAYER */}
            <div style={{marginBottom: '1.5rem'}}>
               <audio 
                 controls 
                 src={`/audio/lessons/${slug}.mp3`}
                 style={{width: '100%', height: '36px', filter: 'invert(0.9)'}}
                 onError={(e) => (e.currentTarget.style.display = 'none')}
               />
            </div>

            {/* Hero Title Area with Image */}
            <div style={{marginBottom: '1.5rem'}}>
              <h1 id="mpl-hero-title" style={{fontSize: '1.6rem', fontWeight: 800, margin: '0 0 0.5rem 0', lineHeight: 1.2, textAlign: 'left', color: '#fff'}}>
                <span id="mpl-hero-title-main">{config.hero?.title}</span>
                <span id="mpl-hero-title-highlight" style={{color: '#00d4ff', marginLeft: '0.5rem'}}>{config.hero?.titleHighlight}</span>
              </h1>
              <div id="mpl-hero-subtitle" style={{fontSize: '0.9rem', color: '#888', lineHeight: 1.5, textAlign: 'left', marginTop: '0.5rem'}} 
                   dangerouslySetInnerHTML={{__html: config.hero?.subtitle}}></div>
            </div>

            {/* Exercise Card */}
            <div style={{
              background: '#1a1d26',
              borderRadius: '12px',
              padding: '1.5rem',
              border: '1px solid #333',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
            }}>
              <div style={{
                textTransform: 'uppercase', 
                fontSize: '0.7rem', 
                fontWeight: 700, 
                letterSpacing: '0.1em', 
                color: '#00d4ff',
                marginBottom: '0.5rem'
              }}>
                Current Mission
              </div>
              <h3 id="mpl-exercise-title" style={{margin: '0 0 1rem 0', fontSize: '1.2rem', color: '#fff'}}>{config.exercise?.title}</h3>
              <div id="mpl-exercise-description" style={{fontSize: '0.9rem', color: '#ccc', marginBottom: '1rem', lineHeight: 1.6}}
                   dangerouslySetInnerHTML={{__html: config.exercise?.description}}></div>
              
              <div id="mpl-exercise-steps-wrap">
                <div style={{fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#fff'}}>Checklist:</div>
                <ol id="mpl-exercise-steps" style={{margin: 0, paddingLeft: '1.2rem', fontSize: '0.9rem', color: '#aaa', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                  {/* Populated by engine or we can map here */}
                  {config.exercise?.steps?.map((step: any, i: number) => (
                    <li key={i} dangerouslySetInnerHTML={{__html: step.text || step}}></li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Theory Section (Appears below) */}
            <div id="mpl-theory-section" style={{marginTop: '2rem', fontSize: '0.9rem', color: '#999', lineHeight: 1.7}}>
               {/* Engine populates this, but we can also render it here if we want react control */}
            </div>
          </div>
        </aside>

        {/* --- RIGHT PANEL: STUDIO (Fixed) --- */}
        <main style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          background: '#12141a',
          position: 'relative'
        }}>
          
          {/* Studio Header / Visualizer Area */}
          <div style={{
            padding: '1.5rem', 
            borderBottom: '1px solid #2a2d35',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: '#161920'
          }}>
             <div>
                <div style={{fontSize: '0.8rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Visual Target</div>
                <div id="mpl-pattern-hint" style={{marginTop: '0.5rem'}}>
                   <div id="mpl-pattern-hint-grid"></div>
                   <div id="mpl-pattern-hint-note" style={{fontSize: '0.8rem', color: '#00d4ff', marginTop: '4px'}}></div>
                </div>
             </div>

             <div className="status-display" style={{textAlign: 'right'}}>
                <div id="mpl-seq-status" style={{
                  background: 'rgba(0, 212, 255, 0.1)', 
                  color: '#00d4ff', 
                  padding: '6px 12px', 
                  borderRadius: '100px',
                  fontSize: '0.85rem',
                  fontWeight: 600
                }}>
                  Initialize...
                </div>
             </div>
          </div>

          {/* SEQUENCER AREA (Fills remaining space) */}
          <div style={{
            flex: 1,
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            overflowY: 'auto'
          }}>
             <h2 style={{fontSize: '0.9rem', color: '#555', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em'}}>
                <span id="mpl-step-count-label">16</span>-Step Sequencer
             </h2>
             
             {/* The Engine renders here */}
             <div id="mpl-sequencer-collection" style={{width: '100%'}}></div>

             {/* Advanced Controls (Tempo) */}
             <div id="mpl-advanced-controls" style={{
               marginTop: '2rem',
               display: 'flex',
               gap: '2rem',
               padding: '1rem',
               background: '#1a1d26',
               borderRadius: '8px',
               alignSelf: 'flex-start'
             }}>
                <div style={{display:'flex', alignItems:'center', gap:'0.8rem'}}>
                    <label htmlFor="mpl-tempo-slider" style={{fontSize:'0.8rem', color:'#888', fontWeight: 600}}>BPM</label>
                    <input type="range" id="mpl-tempo-slider" min="60" max="180" defaultValue="120" />
                    <span id="mpl-tempo-value" style={{fontFamily:'monospace', color: '#00d4ff'}}>120</span>
                </div>
                <div style={{display:'flex', alignItems:'center', gap:'0.8rem'}}>
                    <label htmlFor="mpl-swing-slider" style={{fontSize:'0.8rem', color:'#888', fontWeight: 600}}>SWING</label>
                    <input type="range" id="mpl-swing-slider" min="0" max="100" defaultValue="0" />
                    <span id="mpl-swing-value" style={{fontFamily:'monospace', color: '#00d4ff'}}>0%</span>
                </div>
             </div>
          </div>

          {/* TRANSPORT BAR (Bottom Fixed) */}
          <div style={{
            height: '80px',
            background: '#0a0b0d',
            borderTop: '1px solid #00d4ff',
            display: 'flex',
            alignItems: 'center',
            padding: '0 2rem',
            gap: '1rem',
            flexShrink: 0,
            boxShadow: '0 -10px 40px rgba(0,0,0,0.5)',
            zIndex: 10
          }}>
            {/* Playback Controls */}
            <div style={{display: 'flex', gap: '0.5rem'}}>
               <button id="mpl-seq-play-all" className="btn-studio" style={{
                 background: '#00d4ff', 
                 color: '#000', 
                 border: 'none',
                 padding: '0 2rem',
                 height: '44px',
                 borderRadius: '6px',
                 fontWeight: 700,
                 fontSize: '1rem',
                 cursor: 'pointer',
                 display: 'flex', alignItems: 'center', gap: '8px'
               }}>
                 PLAY
               </button>
               
               <button id="mpl-seq-stop-all" className="btn-studio" style={{
                 background: '#2a2d35', 
                 color: '#fff', 
                 border: '1px solid #444',
                 height: '44px',
                 width: '44px',
                 borderRadius: '6px',
                 cursor: 'pointer',
                 display: 'flex', alignItems: 'center', justifyContent: 'center'
               }}>
                 ■
               </button>
            </div>

            <div style={{width: '1px', height: '30px', background: '#333', margin: '0 1rem'}}></div>

            {/* Action Buttons */}
            <button id="mpl-seq-check-all" style={{
                 background: 'transparent', 
                 color: '#fff', 
                 border: '2px solid #00d4ff',
                 padding: '0 1.5rem',
                 height: '44px',
                 borderRadius: '6px',
                 fontWeight: 600,
                 cursor: 'pointer',
                 fontSize: '0.9rem'
            }}>
              CHECK EXERCISE
            </button>

            {/* Navigation (Right Aligned) */}
            <div style={{marginLeft: 'auto', display: 'flex', gap: '1rem'}}>
               <div id="mpl-seq-prev-lesson-wrap">
                  {config.prevLessonUrl ? (
                    <button id="mpl-prev-lesson" 
                      onClick={() => router.push(config.prevLessonUrl)}
                      style={{background: 'transparent', border: 'none', color: '#666', cursor: 'pointer', fontSize: '0.9rem'}}>
                       &larr; Prev
                    </button>
                  ) : null}
               </div>
               <div id="mpl-seq-next-lesson-wrap">
                  {config.nextLessonUrl ? (
                    <button id="mpl-next-lesson" 
                      onClick={() => router.push(config.nextLessonUrl)}
                      style={{
                        background: '#28a745', 
                        color: '#fff', 
                        border: 'none', 
                        padding: '0 1.5rem', 
                        height: '44px', 
                        borderRadius: '6px', 
                        fontWeight: 700,
                        opacity: 0.5,
                        cursor: 'not-allowed'
                      }}>
                       NEXT LESSON &rarr;
                    </button>
                  ) : null}
               </div>
            </div>

          </div>

        </main>
      </div>

      {/* Hidden elements needed by engine but not shown in this UI */}
      <div style={{display: 'none'}}>
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
 padding: '0 1.5rem',
                 height: '44px',
                 borderRadius: '6px',
                 fontWeight: 600,
                 cursor: 'pointer',
                 fontSize: '0.9rem'
            }}>
              CHECK EXERCISE
            </button>

            {/* Navigation (Right Aligned) */}
            <div style={{marginLeft: 'auto', display: 'flex', gap: '1rem'}}>
               <div id="mpl-seq-prev-lesson-wrap">
                  {config.prevLessonUrl ? (
                    <button id="mpl-prev-lesson" 
                      onClick={() => router.push(config.prevLessonUrl)}
                      style={{background: 'transparent', border: 'none', color: '#666', cursor: 'pointer', fontSize: '0.9rem'}}>
                       &larr; Prev
                    </button>
                  ) : null}
               </div>
               <div id="mpl-seq-next-lesson-wrap">
                  {config.nextLessonUrl ? (
                    <button id="mpl-next-lesson" 
                      onClick={() => router.push(config.nextLessonUrl)}
                      style={{
                        background: '#28a745', 
                        color: '#fff', 
                        border: 'none', 
                        padding: '0 1.5rem', 
                        height: '44px', 
                        borderRadius: '6px', 
                        fontWeight: 700,
                        opacity: 0.5,
                        cursor: 'not-allowed'
                      }}>
                       NEXT LESSON &rarr;
                    </button>
                  ) : null}
               </div>
            </div>

          </div>

        </main>
      </div>

      {/* Hidden elements needed by engine but not shown in this UI */}
      <div style={{display: 'none'}}>
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
 
