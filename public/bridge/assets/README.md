# Assets Directory

This directory will contain:

- `icon.png` - Main application icon (256x256 or larger)
- `tray-icon.png` - System tray icon (16x16 or 22x22 for normal displays, 32x32 or 44x44 for retina)
- `tray-icon-active.png` - Active state tray icon (same dimensions)

**Note**: Placeholder icons needed. The app will fail to create a system tray without an icon file.

## Temporary Workaround

For development, you can:
1. Use any PNG file renamed to `icon.png`
2. Or modify `electron.js` to handle missing icon gracefully
3. Or provide proper icon assets

## Recommended Icon Specifications

- Format: PNG with transparency
- Main icon: 512x512px minimum
- Tray icon: 22x22px for normal DPI, 44x44px for retina
- Style: Simple, monochromatic for tray icons
