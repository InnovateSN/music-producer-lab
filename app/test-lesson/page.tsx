'use client';

import { useEffect, useRef } from 'react';

// Configurazione (Identica a prima)
const lessonConfig = {
  lessonKey: "mpl-lesson1-progress",
  lessonNumber: 1,
  lessonCategory: "Drum pattern",
  nextLessonUrl: "lesson-drums-2.html",
  prevLessonUrl: "lesson-drums-0.html",
  overviewUrl: "labs.html",
  hero: {
    eyebrow: "Lesson 1 · Drum pattern",
    title: "4 on the Floor:",
    titleHighlight: "Your First Full Beat",
    subtitle: "Build the most important rhythm pattern in electronic music. You'll create a repeating rhythm that feels stable, danceable, and easy to recognize."
  },
  sequencer: {
    tempo: 120,
    stepCount: 16,
    swing: 0,
    requiredTempo: 120
  },
  exercise: {
    title: "Build the 4-on-the-Floor Kick Pattern",
    description: "<strong>\"4 on the floor\"</strong> means a kick drum on every beat of the bar (steps 1, 5, 9, 13). This creates the steady pulse that drives house and techno music.",
    tip: "Count \"one-two-three-four\" out loud. The kick should hit exactly on the count.",
    steps: [
      { text: "Set tempo to <strong>120 BPM</strong> (Slider below)." },
      { text: "Activate Kick on steps <strong>1, 5, 9, and 13</strong>." },
      { text: "Press <strong>Play</strong> and listen to the pulse." },
      { text: "Click <strong>Check Exercise</strong> to verify." }
    ]
  },
  instruments: [
    {
      id: "kick",
      label: "Kick",
      color: "linear-gradient(135deg,#ff5a3d,#ffb28a)",
      targetSteps: [0, 4, 8, 12],
      instructionText: "Place kicks on beats 1, 5, 9, 13.",
      patternHint: { label: "Kick" }
    }
  ],
  patternHint: {
    enabled: true,
    note: "Target: Kick on steps 1, 5, 9, 13"
  },
  messages: {
    initial: "Ready to produce.",
    success: "Perfect! That's the foundation of dance music.",
    error: "Check the pattern. You need kicks on 1, 5, 9, 13.",
    alreadyCompleted: "Exercise completed. Feel free to experiment!"
  },
  validation: {
    type: "drum_pattern",
    requiredInstruments: [{ id: "kick", targetSteps: [0, 4, 8, 12], tolerance: 0, minHitsRequired: 4 }],
    requiredTempo: 120,
    tempoTolerance: 0
  },
  theory: {
    sections: [
      {
        title: "Deep Dive: The 4-on-the-Floor",
        content: `
The "4 on the floor" pattern is the heartbeat of modern dance music. Originating from 1970s disco, it creates a hypnotic, steady pulse that humans naturally want to move to.

**Why it works:**
By placing a heavy bass drum on every quarter note (1, 2, 3, 4), you create a predictable, grounding rhythm. This leaves the "off-beats" (the spaces between the kicks) open for hi-hats, basslines, and melodies to create groove.

**Genre Tempos:**
- **House:** 120-125 BPM
- **Techno:** 125-145+ BPM
- **Trance:** 135-145 BPM
        `
      }
    ]
  },
  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: false,
    enableExport: false,
    sequencerType: 'drums'
  }
};

export default function TestLessonPage() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const loadEngine = async () => {
      try {
        const lessonEngineModule = await import(/* webpackIgnore: true */ '/lesson-engine.js');
        if (lessonEngineModule && lessonEngineModule.initLessonFromConfig) {
          module.initLessonFromConfig(lessonConfig);
          // Load styles
          await import(/* webpackIgnore: true */ '/theme-registry.js');
          await import(/* webpackIgnore: true */ '/theme-manager.js');
        }
      } catch (err) {
        console.error("Failed to load lesson engine:", err);
      }
    };
    loadEngine();
  }, []);

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
        body { margin: 0; padding: 0; overflow: hidden; }
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
          <div id="mpl-hero-eyebrow" style={{fontSize: '0.85rem', color: '#888'}}>Loading...</div>
        </div>
        
        <div style={{display: 'flex', gap: '1rem'}}>
           <a href="/labs.html" style={{color: '#888', textDecoration: 'none', fontSize: '0.9rem'}}>Exit Studio</a>
        </div>
      </header>

      {/* --- MAIN WORKSPACE --- */}
      <div style={{flex: 1, display: 'flex', overflow: 'hidden'}}>
        
        {/* --- LEFT PANEL: GUIDE (Scrollable) --- */}
        <aside style={{
          width: '400px',
          minWidth: '350px',
          background: '#0f1115',
          borderRight: '1px solid #2a2d35',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto'
        }}>
          
          <div style={{padding: '2rem'}}>
            {/* VIDEO TUTORIAL SECTION */}
            <div style={{
              width: '100%',
              aspectRatio: '16/9',
              background: '#000',
              borderRadius: '8px',
              border: '1px solid #333',
              marginBottom: '1.5rem',
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

            {/* Hero Title Area with Image */}
            <div style={{marginBottom: '1.5rem'}}>
              <h1 id="mpl-hero-title" style={{fontSize: '1.6rem', fontWeight: 800, margin: '0 0 0.5rem 0', lineHeight: 1.2, textAlign: 'left'}}>
                <span id="mpl-hero-title-main">Lesson</span>
                <span id="mpl-hero-title-highlight" style={{color: '#00d4ff'}}></span>
              </h1>
              <p id="mpl-hero-subtitle" style={{fontSize: '0.9rem', color: '#888', lineHeight: 1.5, textAlign: 'left'}}></p>
            </div>

            {/* RICH CONTENT: Key Concepts Grid (Restored) */}
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '1.5rem'}}>
               {/* Concept 1 */}
               <div style={{background: '#1a1d26', padding: '10px', borderRadius: '8px', borderLeft: '3px solid #00d4ff'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '5px'}}>
                    <img src="/images/drum.png" width="20" height="20" alt="Kick" />
                    <span style={{fontSize: '0.8rem', fontWeight: 700, color: '#fff'}}>The Pattern</span>
                  </div>
                  <div style={{fontSize: '0.75rem', color: '#888'}}>Kick on 1, 5, 9, 13. The heartbeat of house music.</div>
               </div>
               
               {/* Concept 2 */}
               <div style={{background: '#1a1d26', padding: '10px', borderRadius: '8px', borderLeft: '3px solid #a855f7'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '5px'}}>
                    <img src="/images/orologio.png" width="20" height="20" alt="Tempo" />
                    <span style={{fontSize: '0.8rem', fontWeight: 700, color: '#fff'}}>120 BPM</span>
                  </div>
                  <div style={{fontSize: '0.75rem', color: '#888'}}>The sweet spot. Not too fast, not too slow.</div>
               </div>
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
              <h3 id="mpl-exercise-title" style={{margin: '0 0 1rem 0', fontSize: '1.2rem'}}>Loading...</h3>
              <div id="mpl-exercise-description" style={{fontSize: '0.9rem', color: '#ccc', marginBottom: '1rem', lineHeight: 1.6}}></div>
              
              <div id="mpl-exercise-steps-wrap">
                <div style={{fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: '#fff'}}>Checklist:</div>
                <ol id="mpl-exercise-steps" style={{margin: 0, paddingLeft: '1.2rem', fontSize: '0.9rem', color: '#aaa', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}></ol>
              </div>
            </div>

            {/* Theory Section (Appears below) */}
            <div id="mpl-theory-section" style={{marginTop: '2rem', fontSize: '0.9rem', color: '#999', lineHeight: 1.7}}></div>
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
                  <button id="mpl-prev-lesson" style={{background: 'transparent', border: 'none', color: '#666', cursor: 'pointer'}}>
                     &larr; Prev
                  </button>
               </div>
               <div id="mpl-seq-next-lesson-wrap">
                  <button id="mpl-next-lesson" style={{
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
