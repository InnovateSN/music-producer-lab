const existingReady = window.websimReady;
const currentScript = document.currentScript;
const configuredSrc = currentScript?.dataset?.websimSrc;

function loadWebsimScript(src) {
  return new Promise((resolve, reject) => {
    if (!src) {
      resolve(null);
      return;
    }

    const scriptEl = document.createElement("script");
    scriptEl.src = src;
    scriptEl.async = true;
    scriptEl.onload = () => resolve(window.websim || null);
    scriptEl.onerror = () =>
      reject(new Error(`Unable to load websim image generator from ${src}`));
    document.head.appendChild(scriptEl);
  });
}

if (!existingReady) {
  window.websimReady = (async () => {
    if (window.websim && typeof window.websim.imageGen === "function") {
      return window.websim;
    }

    try {
      return await loadWebsimScript(configuredSrc);
    } catch (error) {
      console.warn(error);
      return null;
    }
  })();
}
