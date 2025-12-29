# Audio Samples

This folder contains custom audio samples for the Music Producer Lab sequencer.

## 📁 Structure

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

## 🎵 How to Add Your Samples

### 1. Supported Formats
- **WAV** (recommended - best quality, no compression)
- **MP3** (supported - smaller files)
- **OGG** (supported - MP3 alternative)

### 2. Naming Convention
Files must follow this schema:

```
{instrument}.{ext}
```

**Examples:**
- `kick.wav` → Main kick sample
- `snare.wav` → Main snare sample
- `hihat.wav` → Main hi-hat sample
- `clap.wav` → Clap sample
- `tom.wav` → Tom sample
- `rim.wav` → Rimshot sample

### 3. Where to Put Files

Copy your samples into their respective folders:

```bash
# Example: add a kick sample
cp my-kick.wav samples/drums/kick/kick.wav

# Example: add a snare sample
cp my-snare.wav samples/drums/snare/snare.wav

# Example: add a hi-hat sample
cp my-hihat.wav samples/drums/hihat/hihat.wav
```

### 4. Multiple Samples (Optional)

You can add multiple variations:

```
kick/
  ├── kick.wav          ← Main sample (used by default)
  ├── kick-heavy.wav    ← Heavy variation
  └── kick-sub.wav      ← Sub bass variation

snare/
  ├── snare.wav         ← Main sample
  ├── snare-tight.wav   ← Tight variation
  └── snare-loose.wav   ← Loose variation
```

The system will load the main sample (`{instrument}.wav`) automatically. Variations can be used in future implementations.

## 🔧 Recommended Technical Specifications

### Audio Quality
- **Sample Rate**: 44.1 kHz or 48 kHz
- **Bit Depth**: 16-bit or 24-bit
- **Channels**: Mono or Stereo (mono recommended for drum one-shots)

### Duration
- **Kick**: 0.5 - 2 seconds
- **Snare**: 0.3 - 1.5 seconds
- **Hi-Hat**: 0.1 - 0.5 seconds
- **Clap**: 0.2 - 0.8 seconds
- **Tom**: 0.5 - 2 seconds
- **Rim**: 0.1 - 0.5 seconds

### Normalization
- Normalize your samples to **-3dB** or **-6dB** to avoid clipping
- Ensure peaks don't exceed 0dB
- Remove silence at the beginning and end

## 🎚️ How It Works

1. **Automatic Loading**: When you load a lesson, the sequencer automatically looks for samples in `samples/drums/{instrument}/{instrument}.wav`

2. **Synthetic Fallback**: If a sample isn't found, the system uses synthetic sounds generated with the Web Audio API (the current ones)

3. **Velocity Sensitivity**: Samples are played with gain proportional to velocity (0-127):
   - Velocity 0 = silence
   - Velocity 64 = 50% volume
   - Velocity 127 = 100% volume

4. **Performance**: Samples are preloaded at startup to ensure immediate playback without latency

## 📥 Where to Find Free Samples

### Recommended Sites
- **[freesound.org](https://freesound.org)** - Huge library of CC0/Creative Commons sounds
- **[sampleswap.org](https://sampleswap.org)** - Free samples for producers
- **[99sounds.org](https://99sounds.org)** - High-quality free sample packs
- **[bedroom-producers-blog.com](https://bedroomproducersblog.com/free-samples/)** - Reviews and links to free sample packs

### Freesound Search
Recommended search terms:
- "808 kick one shot"
- "acoustic snare one shot"
- "closed hihat"
- "909 clap"
- "acoustic tom"
- "rimshot"

**Recommended filters:**
- License: CC0 (Public Domain)
- Format: WAV
- Channels: Mono
- Sample Rate: 44100 Hz

## 🚀 Quick Start Example

```bash
# 1. Download some samples from freesound.org
# 2. Rename and place them in the correct folders:

mv ~/Downloads/my-kick-sample.wav samples/drums/kick/kick.wav
mv ~/Downloads/my-snare-sample.wav samples/drums/snare/snare.wav
mv ~/Downloads/my-hihat-sample.wav samples/drums/hihat/hihat.wav

# 3. Reload the lesson page - the new samples will load automatically!
```

## 🎛️ Current Status

The system is configured to:
- ✅ Load samples from this folder
- ✅ Apply velocity dynamically
- ✅ Automatically fallback to synthetic sounds
- ✅ Support all formats (WAV, MP3, OGG)
- ✅ Preload for zero latency

## 📝 Notes

- Samples completely replace synthetic sounds when present
- If you want to return to synthetic sounds, just remove or rename the sample files
- Samples are in `.gitignore` so they won't be committed to the repo (copyright respect)
- You can add a `.sample-list.txt` file to keep track of your sample sources

## ⚖️ Licenses and Copyright

**IMPORTANT**:
- Make sure you have the rights to use the samples you load
- Only use samples with free licenses (CC0, Creative Commons, Royalty-Free) for public projects
- If you use commercial samples, respect the license terms
- Don't commit copyright-protected samples to the repository

---

**Questions?** Open an issue in the repository or consult the main documentation.
