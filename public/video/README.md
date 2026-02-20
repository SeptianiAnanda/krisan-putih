# Hero background video

Place your hero background video file(s) in this folder.

## File names (used by the site)

- **`hero-bg.webm`** – preferred (WebM, VP9). Use this if you have one format only.
- **`hero-bg.mp4`** – fallback (MP4, H.264). Needed for Safari and some older browsers.

The hero uses `<video>` with `<source>` in this order: WebM first, then MP4.  
If only one file is present, use that one; the code already points to both paths.

## Format and size (so the site stays fast)

| Format | Use for | Typical size |
|--------|--------|---------------|
| **WebM (VP9)** | Primary source. Best compression, smaller file. | Aim for &lt; 2–3 MB for a short loop |
| **MP4 (H.264)** | Fallback for Safari / older browsers. | Same length, often 1.5×–2× WebM size |

**Recommendations:**

1. **Length** – Short loop (e.g. **10–20 seconds**). Seamless loop works best.
2. **Resolution** – **1280×720 (720p)** or **1920×1080 (1080p)**. Avoid 4K for background.
3. **Bitrate** – About **1–2 Mbps** for 1080p, **0.5–1 Mbps** for 720p.
4. **No audio** – Hero video is muted; stripping audio reduces file size.

## Example (FFmpeg)

Create WebM and MP4 from a source file `raw.mp4`:

```bash
# WebM (VP9), ~1 Mbps, 720p
ffmpeg -i raw.mp4 -c:v libvpx-vp9 -b:v 1M -vf scale=-2:720 -an -t 15 hero-bg.webm

# MP4 (H.264), ~1.5 Mbps, 720p
ffmpeg -i raw.mp4 -c:v libx264 -b:v 1.5M -vf scale=-2:720 -an -t 15 hero-bg.mp4
```

Copy `hero-bg.webm` and `hero-bg.mp4` into this folder: **`public/video/`**.
