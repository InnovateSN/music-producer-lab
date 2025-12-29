# Audio Samples

Questa cartella contiene i sample audio personalizzati per il Music Producer Lab sequencer.

## 📁 Struttura

```
samples/
└── drums/
    ├── kick/
    ├── snare/
    ├── hihat/
    ├── clap/
    ├── tom/
    └── rim/
```

## 🎵 Come Aggiungere i Tuoi Samples

### 1. Formati Supportati
- **WAV** (consigliato - qualità migliore, nessuna compressione)
- **MP3** (supportato - file più piccoli)
- **OGG** (supportato - alternativa a MP3)

### 2. Naming Convention
I file devono seguire questo schema:

```
{instrument}.{ext}
```

**Esempi:**
- `kick.wav` → Sample principale per kick
- `snare.wav` → Sample principale per snare
- `hihat.wav` → Sample principale per hi-hat
- `clap.wav` → Sample per clap
- `tom.wav` → Sample per tom
- `rim.wav` → Sample per rimshot

### 3. Dove Mettere i File

Copia i tuoi samples nelle rispettive cartelle:

```bash
# Esempio: aggiungere un kick sample
cp mio-kick.wav samples/drums/kick/kick.wav

# Esempio: aggiungere un snare sample
cp mio-snare.wav samples/drums/snare/snare.wav

# Esempio: aggiungere un hi-hat sample
cp mio-hihat.wav samples/drums/hihat/hihat.wav
```

### 4. Sample Multipli (Opzionale)

Puoi aggiungere variazioni multiple:

```
kick/
  ├── kick.wav          ← Sample principale (usato di default)
  ├── kick-heavy.wav    ← Variazione pesante
  └── kick-sub.wav      ← Variazione sub bass

snare/
  ├── snare.wav         ← Sample principale
  ├── snare-tight.wav   ← Variazione tight
  └── snare-loose.wav   ← Variazione loose
```

Il sistema caricherà il sample principale (`{instrument}.wav`) automaticamente. Le variazioni possono essere utilizzate in future implementazioni.

## 🔧 Specifiche Tecniche Consigliate

### Qualità Audio
- **Sample Rate**: 44.1 kHz o 48 kHz
- **Bit Depth**: 16-bit o 24-bit
- **Channels**: Mono o Stereo (mono consigliato per drum one-shots)

### Durata
- **Kick**: 0.5 - 2 secondi
- **Snare**: 0.3 - 1.5 secondi
- **Hi-Hat**: 0.1 - 0.5 secondi
- **Clap**: 0.2 - 0.8 secondi
- **Tom**: 0.5 - 2 secondi
- **Rim**: 0.1 - 0.5 secondi

### Normalizzazione
- Normalizza i tuoi samples a **-3dB** o **-6dB** per evitare clipping
- Assicurati che il picco non superi 0dB
- Rimuovi silenzio all'inizio e alla fine

## 🎚️ Come Funziona

1. **Caricamento Automatico**: Quando carichi una lezione, il sequencer cerca automaticamente i samples in `samples/drums/{instrument}/{instrument}.wav`

2. **Fallback Sintetico**: Se un sample non viene trovato, il sistema usa i suoni sintetici generati con Web Audio API (quelli attuali)

3. **Velocity Sensitivity**: I samples vengono riprodotti con gain proporzionale alla velocity (0-127):
   - Velocity 0 = silenzio
   - Velocity 64 = 50% volume
   - Velocity 127 = 100% volume

4. **Performance**: I samples vengono precaricati all'avvio per garantire playback immediato senza latenza

## 📥 Dove Trovare Samples Gratuiti

### Siti Consigliati
- **[freesound.org](https://freesound.org)** - Enorme libreria di suoni CC0/Creative Commons
- **[sampleswap.org](https://sampleswap.org)** - Samples gratuiti per produttori
- **[99sounds.org](https://99sounds.org)** - Sample packs gratuiti di alta qualità
- **[bedroom-producers-blog.com](https://bedroomproducersblog.com/free-samples/)** - Recensioni e link a free sample packs

### Ricerca su Freesound
Termini di ricerca consigliati:
- "808 kick one shot"
- "acoustic snare one shot"
- "closed hihat"
- "909 clap"
- "acoustic tom"
- "rimshot"

**Filtri consigliati:**
- License: CC0 (Public Domain)
- Format: WAV
- Channels: Mono
- Sample Rate: 44100 Hz

## 🚀 Esempio Quick Start

```bash
# 1. Scarica alcuni samples da freesound.org
# 2. Rinominali e mettili nelle cartelle giuste:

mv ~/Downloads/my-kick-sample.wav samples/drums/kick/kick.wav
mv ~/Downloads/my-snare-sample.wav samples/drums/snare/snare.wav
mv ~/Downloads/my-hihat-sample.wav samples/drums/hihat/hihat.wav

# 3. Ricarica la pagina della lezione - i nuovi samples verranno caricati automaticamente!
```

## 🎛️ Stato Attuale

Il sistema è configurato per:
- ✅ Caricare samples da questa cartella
- ✅ Applicare velocity dinamicamente
- ✅ Fallback automatico ai suoni sintetici
- ✅ Supporto per tutti i formati (WAV, MP3, OGG)
- ✅ Preloading per zero latenza

## 📝 Note

- I samples sostituiscono completamente i suoni sintetici quando presenti
- Se vuoi tornare ai suoni sintetici, basta rimuovere o rinominare i file sample
- I samples sono in `.gitignore` quindi non verranno committati nel repo (rispetto copyright)
- Puoi aggiungere un file `.sample-list.txt` per tenere traccia della fonte dei tuoi samples

## ⚖️ Licenze e Copyright

**IMPORTANTE**:
- Assicurati di avere i diritti per usare i samples che carichi
- Usa solo samples con licenza libera (CC0, Creative Commons, Royalty-Free) per progetti pubblici
- Se usi samples commerciali, rispetta i termini della licenza
- Non committare samples protetti da copyright nel repository

---

**Domande?** Apri una issue nel repository o consulta la documentazione principale.
