# 🚀 Quick Start - Add Your Drum Samples

## TL;DR - In 3 Steps

1. **Get samples** (WAV, MP3, or OGG files)
2. **Put them here:**
   ```
   samples/drums/kick/kick.wav
   samples/drums/snare/snare.wav
   samples/drums/hihat/hihat.wav
   samples/drums/clap/clap.wav
   samples/drums/tom/tom.wav
   samples/drums/rim/rim.wav
   ```
3. **Reload any lesson** - samples will load automatically! 🎉

## ✅ Expected File Names

| Instrument | File Location                        |
|------------|--------------------------------------|
| Kick       | `samples/drums/kick/kick.wav`        |
| Snare      | `samples/drums/snare/snare.wav`      |
| Hi-Hat     | `samples/drums/hihat/hihat.wav`      |
| Clap       | `samples/drums/clap/clap.wav`        |
| Tom        | `samples/drums/tom/tom.wav`          |
| Rimshot    | `samples/drums/rim/rim.wav`          |

*Replace `.wav` with `.mp3` or `.ogg` if using those formats*

## 📥 Where to Get Free Samples

**Recommended:**
- [freesound.org](https://freesound.org) - Search for "808 kick", "acoustic snare", etc.
- Filter by: **CC0 License** + **WAV format**

**Quick Links:**
- [808 Kick Samples](https://freesound.org/search/?q=808+kick+one+shot)
- [Acoustic Snare](https://freesound.org/search/?q=acoustic+snare+one+shot)
- [Hi-Hat Closed](https://freesound.org/search/?q=hihat+closed+one+shot)

## 🎛️ How It Works

1. **Auto-detect**: When you open a lesson, the sequencer tries to load samples from `samples/drums/`
2. **Multi-format**: Tries WAV first, then MP3, then OGG
3. **Smart fallback**: If a sample is missing, uses the built-in synthetic sound
4. **Mix & match**: You can have some samples and some synthetic sounds

## 💡 Tips

- **Normalize your samples** to -3dB or -6dB to avoid clipping
- **Keep samples short** (< 2 seconds) - they're one-shots, not loops
- **Mono is better** than stereo for individual drum hits
- **44.1kHz / 16-bit** is perfect quality for web playback

## 🔍 Check Console

Open DevTools (F12) → Console to see:
```
✓ Loaded sample: kick
✓ Loaded sample: snare
→ Using synthetic sound for: hihat
→ Using synthetic sound for: clap
→ Using synthetic sound for: tom
→ Using synthetic sound for: rim
Sample loading complete. Loaded 2/6 samples.
```

This tells you exactly which samples loaded and which are using synthetic sounds.

## ❓ Troubleshooting

**"No samples loading"**
- Check file paths and names (case-sensitive!)
- Make sure files are in the right folders
- Check browser console for errors

**"Samples sound quiet"**
- Normalize your samples louder
- Check the velocity settings in the sequencer

**"Want to go back to synthetic sounds"**
- Just delete or rename the sample files
- Refresh the page

---

**Full documentation:** See [README.md](./README.md) for complete details.
