const backImg = document.getElementById("bg-back");
const frontImg = document.getElementById("bg-front");
const bgBackLayer = document.querySelector(".bg-layer-back");
const bgFrontLayer = document.querySelector(".bg-layer-front");
const logo = document.querySelector(".logo");
const loadingOverlay = document.getElementById("loadingOverlay");
const logoButton = document.getElementById("logoButton");

let centerX = window.innerWidth / 2;
let centerY = window.innerHeight / 2;
let pointerX = centerX;
let pointerY = centerY;

// Parallax strength
const depthBack = 0.04;
const depthFront = 0.09;
const depthLogo = 0.03;

// Simple interpolation for smooth motion
let curBackX = 0,
  curBackY = 0;
let curFrontX = 0,
  curFrontY = 0;
let curLogoX = 0,
  curLogoY = 0;

function handleMove(x, y) {
  pointerX = x;
  pointerY = y;
}

window.addEventListener("resize", () => {
  centerX = window.innerWidth / 2;
  centerY = window.innerHeight / 2;
});

window.addEventListener("pointermove", (e) => {
  handleMove(e.clientX, e.clientY);
});

// Basic tilt for mobile using device orientation if available
if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", (e) => {
    const tiltX = (e.gamma || 0) / 45; // left/right
    const tiltY = (e.beta || 0 - 45) / 45; // forward/back, centered around ~45
    const x = centerX + tiltX * centerX;
    const y = centerY + tiltY * centerY;
    handleMove(x, y);
  });
}

function animate() {
  const relX = (pointerX - centerX) / centerX;
  const relY = (pointerY - centerY) / centerY;

  const targetBackX = -relX * depthBack * 100;
  const targetBackY = -relY * depthBack * 100;
  const targetFrontX = -relX * depthFront * 140;
  const targetFrontY = -relY * depthFront * 140;
  const targetLogoX = relX * depthLogo * 80;
  const targetLogoY = relY * depthLogo * 80;

  const ease = 0.06;
  curBackX += (targetBackX - curBackX) * ease;
  curBackY += (targetBackY - curBackY) * ease;
  curFrontX += (targetFrontX - curFrontX) * ease;
  curFrontY += (targetFrontY - curFrontY) * ease;
  curLogoX += (targetLogoX - curLogoX) * ease;
  curLogoY += (targetLogoY - curLogoY) * ease;

  bgBackLayer.style.transform = `translate3d(${curBackX}px, ${curBackY}px, 0) scale(1.05)`;
  bgFrontLayer.style.transform = `translate3d(${curFrontX}px, ${curFrontY}px, 0) scale(1.08)`;
  logo.style.transform = `translate3d(${curLogoX}px, ${curLogoY}px, 0)`;

  // Subtle blur variation with movement intensity
  const intensity = Math.min(
    1,
    Math.hypot(relX, relY) * 1.4
  );
  const baseBackBlur = 16;
  const baseFrontBlur = 6;

  bgBackLayer.style.filter = `blur(${baseBackBlur + intensity * 6}px)`;
  bgFrontLayer.style.filter = `blur(${baseFrontBlur + intensity * 4}px)`;

  requestAnimationFrame(animate);
}

animate();

// Click logo -> explanation page
logoButton.addEventListener("click", () => {
  window.location.href = "explanation.html";
});

// AI image generation

async function generateBackgrounds() {
  try {
    // Show loading overlay
    loadingOverlay.classList.remove("hidden");

    const [backResult, frontResult] = await Promise.all([
      websim.imageGen({
        prompt:
          "Ultra realistic futuristic music production laboratory, wide cinematic shot, warm tungsten and subtle red lighting, advanced mixing consoles, holographic sound interfaces, depth of field, filmic, 4K",
        aspect_ratio: "9:16"
      }),
      websim.imageGen({
        prompt:
          "Ultra realistic futuristic detail of a music producer workstation, close-up of mixing desk, glowing pads, holographic waveforms, cinematic lighting, shallow depth of field, 4K",
        aspect_ratio: "9:16"
      })
    ]);

    backImg.src = backResult.url;
    frontImg.src = frontResult.url;

    // Give a moment for images to render before hiding overlay
    setTimeout(() => {
      loadingOverlay.classList.add("hidden");
    }, 400);
  } catch (err) {
    console.error("Error generating background images:", err);
    // If something fails, still hide overlay after a delay
    setTimeout(() => {
      loadingOverlay.classList.add("hidden");
    }, 800);
  }
}

// Start generation immediately
generateBackgrounds();
