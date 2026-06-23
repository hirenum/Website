"""
Generate all favicon variants from a source image.
Uses LANCZOS resampling for the sharpest, distortion-free downscaling.
"""
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Pillow not found. Installing...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

# Paths
SCRIPT_DIR = Path(__file__).parent
PROJECT_ROOT = SCRIPT_DIR.parent
SOURCE = PROJECT_ROOT / "scripts" / "source-logo.png"
PUBLIC = PROJECT_ROOT / "public"
FAVICON_DIR = PUBLIC / "favicon"
APP_DIR = PROJECT_ROOT / "app"

def generate():
    # Open source image
    src = Image.open(SOURCE).convert("RGBA")
    print(f"Source image: {src.size[0]}x{src.size[1]}")

    # --- PNG favicons (for /public/favicon/) ---
    png_targets = {
        "favicon-96x96.png": 96,
        "apple-touch-icon.png": 180,
        "web-app-manifest-192x192.png": 192,
        "web-app-manifest-512x512.png": 512,
    }

    for filename, size in png_targets.items():
        out = src.resize((size, size), Image.LANCZOS)
        dest = FAVICON_DIR / filename
        out.save(dest, "PNG", optimize=True)
        print(f"  [OK] {dest.relative_to(PROJECT_ROOT)} ({size}x{size})")

    # --- Root-level PNGs (for /public/) ---
    root_png_targets = {
        "favicon.png": 512,
        "icon-192x192.png": 192,
        "icon-512x512.png": 512,
        "apple-touch-icon.png": 180,
    }

    for filename, size in root_png_targets.items():
        out = src.resize((size, size), Image.LANCZOS)
        dest = PUBLIC / filename
        out.save(dest, "PNG", optimize=True)
        print(f"  [OK] {dest.relative_to(PROJECT_ROOT)} ({size}x{size})")

    # --- Next.js app directory icons ---
    # app/icon.png (used by Next.js metadata API)
    out = src.resize((512, 512), Image.LANCZOS)
    dest = APP_DIR / "icon.png"
    out.save(dest, "PNG", optimize=True)
    print(f"  [OK] {dest.relative_to(PROJECT_ROOT)} (512x512)")

    # app/apple-icon.png
    out = src.resize((180, 180), Image.LANCZOS)
    dest = APP_DIR / "apple-icon.png"
    out.save(dest, "PNG", optimize=True)
    print(f"  [OK] {dest.relative_to(PROJECT_ROOT)} (180x180)")

    # --- ICO file (multi-resolution, includes 16, 32, 48) ---
    ico_sizes = [16, 32, 48]
    ico_images = []
    for size in ico_sizes:
        ico_img = src.resize((size, size), Image.LANCZOS)
        ico_images.append(ico_img)

    # Save to both locations
    for ico_path in [FAVICON_DIR / "favicon.ico", APP_DIR / "favicon.ico"]:
        ico_images[0].save(
            ico_path,
            format="ICO",
            sizes=[(s, s) for s in ico_sizes],
            append_images=ico_images[1:],
        )
        print(f"  [OK] {ico_path.relative_to(PROJECT_ROOT)} ({', '.join(f'{s}x{s}' for s in ico_sizes)})")

    # --- SVG wrapper (embeds the 96x96 PNG as base64 for perfect scaling) ---
    import base64
    svg_png = src.resize((96, 96), Image.LANCZOS)
    from io import BytesIO
    buffer = BytesIO()
    svg_png.save(buffer, "PNG", optimize=True)
    b64 = base64.b64encode(buffer.getvalue()).decode("utf-8")

    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="96" height="96">
  <image href="data:image/png;base64,{b64}" width="96" height="96" image-rendering="optimizeQuality"/>
</svg>'''

    svg_path = FAVICON_DIR / "favicon.svg"
    svg_path.write_text(svg_content, encoding="utf-8")
    print(f"  [OK] {svg_path.relative_to(PROJECT_ROOT)} (SVG with embedded PNG)")

    print("\n[DONE] All favicons generated successfully!")

if __name__ == "__main__":
    generate()
