# Audit didattico del repository `music-producer-lab`

## Stato implementazione (2026-02-19)
- ✅ Inseriti `assessmentRubric` e `reviewMetadata` nei 9 lesson config del campione audit iniziale.
- ✅ Completato il rollout **Fase 1** su tutte le categorie `Drums` (0-22) e `Bass` (1-20).
- ✅ Completato il rollout **Fase 2** su `Harmony` (1-28), `Theory` (1-8), `Ear` (1-10).
- ✅ Coverage attuale da crosscheck: `reviewMetadata` **91/174**, `assessmentRubric` **91/174**, `sourceReferences` **174/174**.
- ✅ Rafforzato lo script `scripts/content-source-crosscheck.js` per verificare anche:
  - `reviewMetadata`
  - `sourceReferences`
  - `assessmentRubric`
- ⏭️ Prossimo step: estendere il rollout per categoria su `Arrangement`, `Mixing`, `Sound Design`, `Vocals`, `Mastering`.

## Scopo
Questa versione migliora l’audit precedente rendendolo più **verificabile** e **operativo**:
- collega esplicitamente i contenuti delle lezioni a evidenze nel repository;
- usa riferimenti in tre classi: **AES**, **Wikipedia**, **Ableton (Manual/Knowledge Base)**;
- propone interventi concreti applicabili ai file lezione.

## Metodo di verifica
1. Revisione delle lezioni target nei file `public/configs/*.config.js`.
2. Confronto dei concetti con fonti autorevoli (AES/Wikipedia/Ableton).
3. Valutazione con 3 criteri:
   - accuratezza teorica;
   - trasferibilità pratica in DAW;
   - qualità didattica (chiarezza + progressione).

---

## Mappatura lezioni verificate (evidenza repository)
Le seguenti lezioni sono state verificate direttamente nei config:
- Ear Training: `lesson-ear-6`, `lesson-ear-2`
- Theory: `lesson-theory-1`, `lesson-theory-6`
- Harmony: `lesson-harmony-2`
- Bass/Drums: `lesson-bass-2`, `lesson-drums-0`
- Mixing: `lesson-mixing-1`
- Arrangement: `lesson-arrangement-2`

> Nota: la struttura delle lezioni è coerente (hero/exercise/theory/validation), utile per standardizzare fonti e rubriche di valutazione.

---

## Esito per area

### 1) Ear Training

#### Ear-6 — Perfect vs Relative Pitch
**Cosa c’è nella lezione**
- Distingue correttamente **relative pitch** e **perfect pitch**.
- Sottolinea la priorità didattica dell’orecchio relativo.
- Include programma pratico (12 settimane), tono di riferimento (A440), esercizi di dettato/intonazione.

**Confronto fonti**
- **Wikipedia (Absolute pitch / Ear training)**: allineato su definizioni e rarità del perfect pitch.
- **Ableton**: coerente con pratica in produzione (reference note, pitch matching, training contestuale in progetto).
- **AES (critical listening)**: approccio compatibile con didattica di ascolto analitico.

**Miglioria consigliata**
- Inserire KPI minimi (es. accuratezza identificazione scale degree a settimana 1/6/12).

#### Ear-2 — Intervalli armonici
**Cosa c’è nella lezione**
- Consonanze/dissonanze, intervalli simultanei, roughness/beating.

**Confronto fonti**
- **Wikipedia (Consonance and dissonance)**: classificazione coerente.
- **AES/psicoacustica**: coerente l’uso dei concetti di roughness e percezione intervallare.

**Miglioria consigliata**
- Aggiungere esempi audio A/B “stesso intervallo in registri diversi” per evidenziare percezione e battimenti.

---

### 2) Theory

#### Theory-1 — Intervalli e semitoni
**Cosa c’è nella lezione**
- Semitono/tono, qualità intervallari, mapping semitoni↔intervalli.

**Confronto fonti**
- **Wikipedia (Semitone / Major second)**: contenuti corretti.
- **Ableton**: applicazione immediata in MIDI editor (trasposizione, controllo intervalli).

**Miglioria consigliata**
- Esercizio doppio: “intervallo scritto → cantato → verificato in DAW”.

#### Theory-6 — Circle of Fifths / Key signatures
**Cosa c’è nella lezione**
- Ordine diesis/bemolli e relazione maggiore ↔ relativa minore.

**Confronto fonti**
- **Wikipedia + letteratura didattica**: impianto corretto.
- **Ableton**: utile per modulazioni e trasposizioni operative nel progetto.

**Miglioria consigliata**
- Compito guidato: modulazione tra tonalità adiacenti sul cerchio (A/B comparativo).

---

### 3) Harmony

#### Harmony-2 — Accordi maggiori vs minori
**Cosa c’è nella lezione**
- Focus corretto sulla terza (maggiore/minore) come discriminante primaria.

**Confronto fonti**
- **Wikipedia/teoria armonica standard**: pienamente coerente.
- **Ableton**: traducibile in esercizi di voicing su clip MIDI.

**Miglioria consigliata**
- Estendere con confronto percettivo su 3 voicing a parità di triade.

---

### 4) Bass & Drums

#### Bass-2 — Relazione kick/bass
**Cosa c’è nella lezione**
- Problema di sovrapposizione low-end, timing, sidechain e chiarezza del mix.

**Confronto fonti**
- **Ableton Manual/KB**: coerente con workflow sidechain, EQ complementare e gain staging.
- **AES (pratica di mix)**: allineato ai principi di intelligibilità e separazione spettrale.

**Miglioria consigliata**
- Checklist obbligatoria: fase/polarità, overlap envelope, mono compatibility del low-end.

#### Drums-0 — Intro batteria elettronica
**Cosa c’è nella lezione**
- DAW, BPM, 4/4, loop, differenza audio/MIDI, pattern 16-step.

**Confronto fonti**
- **Wikipedia (DAW)**: definizioni corrette.
- **Ableton**: aderenza completa al workflow base (clip, griglia, step sequencing).

**Miglioria consigliata**
- Richiedere 3 varianti groove con vincolo di backbeat costante (misura della competenza).

---

### 5) Mixing

#### Mixing-1 — Introduzione al mixing
**Cosa c’è nella lezione**
- Template sessione, bus/return, flusso segnale, strumenti base, 0 dBFS e pan law.

**Confronto fonti**
- **Wikipedia (dBFS)**: corretto sul limite digitale.
- **Ableton**: corretto su routing, return tracks, metering e headroom operativa.
- **AES17**: consigliato citarlo esplicitamente nella lezione per rinforzare standard metrologico.

**Miglioria consigliata**
- Inserire target pratico iniziale (es. headroom di lavoro pre-limiter e controllo picchi).

---

### 6) Arrangement

#### Arrangement-2 — Transizioni ed energia
**Cosa c’è nella lezione**
- Tecniche chiave: riser, fall/downlifter, filter sweep, drum fill, silence gap.

**Confronto fonti**
- **Ableton**: perfettamente implementabile via automazioni, clip envelopes, FX return.
- **Prassi didattica consolidata**: tecniche standard del linguaggio EDM/pop production.

**Miglioria consigliata**
- Matrice di controllo per transizione: `sezione A→B / tecnica / effetto atteso / risultato percepito`.

---

## Azioni raccomandate nel repository
1. **Fonti obbligatorie per lezione**
   - Aggiungere campo `sources` con almeno:
     - 1 fonte teorica (Wikipedia o equivalente accademico);
     - 1 fonte operativa Ableton (Manual/KB);
     - opzionale 1 riferimento AES.
2. **Metadato di revisione**
   - Aggiungere `lastReviewed` e `reviewVersion` in ogni config lezione.
3. **Rubrica valutativa standard**
   - Aggiungere KPI minimi (`accuracy`, `timing`, `mix clarity`, `arrangement flow`).
4. **Asset pratici**
   - Allegare mini progetto `.als` o export audio breve per le lezioni fondamentali.
5. **Glossario unico**
   - Uniformare terminologia (gain/level/loudness/headroom/peak/RMS/LUFS) in tutte le lezioni.

---

## Conclusione
Le lezioni analizzate risultano complessivamente **accurate e didatticamente valide**. Il miglioramento prioritario non è la correzione teorica, ma la **tracciabilità delle fonti** e la **misurabilità dell’apprendimento**. Integrare riferimenti espliciti ad AES, Wikipedia e Ableton direttamente nelle lezioni aumenterà qualità, manutenzione e credibilità del percorso.

---

## Fonti consigliate (riferimenti base)
### Wikipedia
- Absolute pitch — https://en.wikipedia.org/wiki/Absolute_pitch
- Ear training — https://en.wikipedia.org/wiki/Ear_training
- Consonance and dissonance — https://en.wikipedia.org/wiki/Consonance_and_dissonance
- Semitone — https://en.wikipedia.org/wiki/Semitone
- Major second — https://en.wikipedia.org/wiki/Major_second
- dBFS — https://en.wikipedia.org/wiki/DBFS
- Digital audio workstation — https://en.wikipedia.org/wiki/Digital_audio_workstation

### Ableton
- Live Manual (indice generale) — https://www.ableton.com/en/live-manual/
- Help/Knowledge Base (indice) — https://help.ableton.com/

### AES
- AES Standards index — https://aes2.org/publications/standards/
- Riferimento utile per misura digitale: AES17 (metodi di misura per apparecchiature audio digitali)
