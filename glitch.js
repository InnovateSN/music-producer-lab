const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

function createCanvas() {
  const canvas = document.createElement("canvas");
  canvas.className = "glitch-overlay-canvas";
  canvas.setAttribute("aria-hidden", "true");
  canvas.setAttribute("role", "presentation");
  return canvas;
}

function drawVerticalSlices(ctx, width, height, palette) {
  const slices = Math.max(12, Math.floor(width / 120));
  for (let i = 0; i < slices; i++) {
    const x = Math.random() * width;
    const lineWidth = 1 + Math.random() * 8;
    const gradient = ctx.createLinearGradient(x, 0, x, height);
    gradient.addColorStop(0, `${palette.cyan}00`);
    gradient.addColorStop(0.18, `${palette.cyan}33`);
    gradient.addColorStop(0.5, `${palette.magenta}66`);
    gradient.addColorStop(0.82, `${palette.amber}44`);
    gradient.addColorStop(1, `${palette.amber}00`);
    ctx.fillStyle = gradient;
    ctx.fillRect(x, 0, lineWidth, height);
  }
}

function drawScanline(ctx, width, height, time) {
  const y = (time * 0.35) % height;
  ctx.fillStyle = "rgba(255,255,255,0.07)";
  ctx.fillRect(0, y, width, 2);
  ctx.fillStyle = "rgba(0,0,0,0.22)";
  ctx.fillRect(0, Math.max(0, y - 2), width, 1);
}

export function initGlitchOverlay(options = {}) {
  const palette = {
    cyan: "#4EF3FF",
    magenta: "#FF3AD4",
    amber: "#FFC46B",
    ...options.palette
  };

  const canvas = createCanvas();
  const ctx = canvas.getContext("2d", { alpha: true });
  let rafId = null;
  let width = 0;
  let height = 0;
  let dpr = window.devicePixelRatio || 1;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function drawFrame(time = 0) {
    if (motionQuery.matches) return;
    ctx.clearRect(0, 0, width, height);
    drawVerticalSlices(ctx, width, height, palette);
    drawScanline(ctx, width, height, time);
    rafId = requestAnimationFrame(drawFrame);
  }

  function start() {
    if (!motionQuery.matches && rafId === null) {
      rafId = requestAnimationFrame(drawFrame);
    }
  }

  function stop() {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    ctx.clearRect(0, 0, width, height);
  }

  resize();
  document.body.appendChild(canvas);
  start();

  const handleMotionChange = (event) => {
    if (event.matches) {
      stop();
    } else {
      start();
    }
  };

  window.addEventListener("resize", resize);
  motionQuery.addEventListener("change", handleMotionChange);

  return () => {
    stop();
    motionQuery.removeEventListener("change", handleMotionChange);
    window.removeEventListener("resize", resize);
    canvas.remove();
  };
}
