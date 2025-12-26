# Music Producer Lab

Interactive music production education platform. Learn to produce music through hands-on practice, not videos or theory.

**Live Site:** https://music-producer-lab.vercel.app

---

## Tech Stack

- **Frontend:** Vanilla JavaScript (ES6 modules), HTML5, CSS3
- **Audio:** Web Audio API (synthesized drum sounds)
- **Storage:** LocalStorage for progress tracking
- **Deployment:** Vercel (static site)
- **Dependencies:** None (zero npm packages)

---

## Curriculum Status

### Drums & Rhythm (20 Lessons)

| Level | Lessons | Status |
|-------|---------|--------|
| Beginner (1-6) | Kick, Snare, Hi-hats, 16ths, Fills, Syncopation | Complete |
| Intermediate (7-12) | Ghost Notes, House/Techno, Hip-Hop, Trap, DnB, Rock | Complete |
| Advanced (13-16) | Humanization, Polyrhythms, World Rhythms, Sound Design | Complete |
| Expert (17-20) | Odd Time, Genre Fusion, Mixing, Masterclass | Complete |

### Arrangement & Songwriting (20 Lessons)

| Level | Lessons | Status |
|-------|---------|--------|
| Beginner (1-4) | Song Structure, Transitions, Complete Track, 5 Elements | Complete |
| Intermediate (5-10) | Pop/Rock, EDM, Hip-Hop, Intro/Outro, Tension, Automation | Complete |
| Advanced (11-14) | Key Changes, Dynamic Arcs, Instrumental, Countermelody | Complete |
| Expert (15-20) | Reference Analysis, Extended Forms, Sync, Live, Remix, Masterclass | Complete |

### Other Categories

| Category | Status |
|----------|--------|
| Sound Design | 1 lesson (placeholder) |
| Mixing | 1 lesson (placeholder) |
| Vocals | 1 lesson (placeholder) |
| Mastering | 1 lesson (placeholder) |

**Total: 44 lessons**

---

## Project Structure

```
/music-producer-lab/
├── Core Files
│   ├── index.html              # Landing page
│   ├── labs.html               # Lessons dashboard
│   ├── sequencer.js            # Drum sequencer with Web Audio
│   ├── curriculum.js           # All 44 lessons data
│   ├── lesson-engine.js        # Modular lesson system
│   └── styles.css              # Design system
│
├── Lessons (40 interactive)
│   ├── lesson-drums-[1-20].html
│   └── lesson-arrangement-[1-20].html
│
├── Configs (40 files)
│   └── configs/*.config.js
│
└── Docs
    ├── README.md
    ├── LESSON-SYSTEM-README.md
    └── HANDOFF_REPORT_26_DECEMBER_2025.md
```

---

## Quick Start

```bash
# Serve locally
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

---

## Developer Notes

See [`HANDOFF_REPORT_26_DECEMBER_2025.md`](./HANDOFF_REPORT_26_DECEMBER_2025.md) for:
- Codebase architecture details
- Known issues and solutions
- Development continuation guide

See [`LESSON-SYSTEM-README.md`](./LESSON-SYSTEM-README.md) for:
- How to create new lessons
- Configuration options
- Sequencer API

---

## License

All rights reserved.
