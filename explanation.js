export function initExplanationPage() {
    // Simple dynamic year in footer
    document.getElementById("mpl-year").textContent =
      new Date().getFullYear();

    // ---------------- AUTH MODAL LOGIC (frontend scaffold) ----------------
    const backdrop = document.getElementById("mpl-auth-backdrop");
    const closeBtn = document.getElementById("mpl-auth-close");
    const tabSignup = document.getElementById("mpl-auth-tab-signup");
    const tabLogin = document.getElementById("mpl-auth-tab-login");
    const pill = document.getElementById("mpl-auth-mode-pill");
    const title = document.getElementById("mpl-auth-title");
    const subtitle = document.getElementById("mpl-auth-subtitle");

    const formSignup = document.getElementById("mpl-auth-form-signup");
    const formLogin = document.getElementById("mpl-auth-form-login");
    const formForgot = document.getElementById("mpl-auth-form-forgot");

    const forgotTrigger = document.getElementById(
      "mpl-auth-forgot-trigger"
    );
    const backToLogin = document.getElementById("mpl-auth-back-to-login");

    const navStripeCta = document.getElementById("mpl-nav-stripe-cta");
    const heroPrimaryCta = document.getElementById(
      "mpl-hero-stripe-primary"
    );
    const heroSecondaryCta = document.getElementById(
      "mpl-hero-stripe-secondary"
    );
    const howItWorksSection = document.getElementById("mpl-how-it-works");

    const guestBtn = document.getElementById("mpl-auth-guest");
    
    // Collect lesson links to force auth/guest selection
    const lessonLinks = [
        document.getElementById("lesson-1-link"),
        document.getElementById("lesson-2-link"),
        document.getElementById("lesson-3-link"),
        document.getElementById("lesson-4-link"),
        document.getElementById("lesson-5-link"),
    ].filter(Boolean);

    let targetLessonUrl = null;


    // Helper: switch between signup / login / forgot views
    function setMode(mode) {
      // Reset tab states
      tabSignup.classList.remove("mpl-auth-tab-active");
      tabLogin.classList.remove("mpl-auth-tab-active");

      // Hide all forms by default
      formSignup.classList.add("mpl-auth-hidden");
      formLogin.classList.add("mpl-auth-hidden");
      formForgot.classList.add("mpl-auth-hidden");

      if (mode === "signup") {
        tabSignup.classList.add("mpl-auth-tab-active");
        formSignup.classList.remove("mpl-auth-hidden");
        pill.textContent = "Create your account";
        title.textContent = "Welcome to Music Producer Lab";
        subtitle.textContent =
          "Create a free account to save your progress and access upcoming labs.";
      } else if (mode === "login") {
        tabLogin.classList.add("mpl-auth-tab-active");
        formLogin.classList.remove("mpl-auth-hidden");
        pill.textContent = "Log into your account";
        title.textContent = "Welcome back, producer";
        subtitle.textContent =
          "Log in to continue your labs and pick up exactly where you left off.";
      } else if (mode === "forgot") {
        // Forgot password uses the login tab as visual context
        tabLogin.classList.add("mpl-auth-tab-active");
        formForgot.classList.remove("mpl-auth-hidden");
        pill.textContent = "Reset your password";
        title.textContent = "Reset your password";
        subtitle.textContent =
          "Enter your email and we'll send you a link to reset your password.";
      }
    }

    // Helper: open modal with initial mode
    function openAuth(initialMode = "signup", targetUrl = null) {
      targetLessonUrl = targetUrl;
      backdrop.classList.remove("mpl-auth-hidden");
      backdrop.setAttribute("aria-hidden", "false");
      
      if (targetLessonUrl) {
          guestBtn.querySelector('span').textContent = "Continue as guest";
      } else {
          guestBtn.querySelector('span').textContent = "Enter as guest";
      }

      setMode(initialMode);
    }

    // Helper: close modal
    function closeAuth() {
      backdrop.classList.add("mpl-auth-hidden");
      backdrop.setAttribute("aria-hidden", "true");
    }

    // Open modal from main CTAs (default to signup)
    const ctas = [navStripeCta, heroPrimaryCta].filter(Boolean);
    ctas.forEach((el) => {
      el.addEventListener("click", () => openAuth("signup"));
    });

    // Intercept Lesson Links to require Auth/Guest selection
    lessonLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const url = link.getAttribute('href');
            openAuth("signup", url);
        });
    });

    // "See how it works" scrolls to the explanation section
    if (heroSecondaryCta && howItWorksSection) {
      heroSecondaryCta.addEventListener("click", () => {
        howItWorksSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    }

    // Tabs
    tabSignup.addEventListener("click", () => setMode("signup"));
    tabLogin.addEventListener("click", () => setMode("login"));

    // Forgot password flow
    forgotTrigger.addEventListener("click", () => setMode("forgot"));
    backToLogin.addEventListener("click", () => setMode("login"));

    // Close behavior
    closeBtn.addEventListener("click", closeAuth);
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeAuth();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeAuth();
    });

    // Guest entry goes directly to lesson page
    if (guestBtn) {
      guestBtn.addEventListener("click", () => {
        closeAuth();
        // Always send guests to Lesson 1 regardless of which lesson link opened the modal
        // (prevents guests from jumping directly to later lessons)
        window.location.href = "lesson-drums-1.html";
      });
    }

    // ---------------- BACKEND INTEGRATION HOOKS ----------------
    formSignup.addEventListener("submit", (e) => {
      e.preventDefault();
      const payload = {
        name: e.target.name.value.trim(),
        email: e.target.email.value.trim(),
        password: e.target.password.value
      };
      console.log("[AUTH] Signup payload (wire this to backend):", payload);
      // TODO: call your signup endpoint here
      closeAuth();
    });

    formLogin.addEventListener("submit", (e) => {
      e.preventDefault();
      const payload = {
        email: e.target.email.value.trim(),
        password: e.target.password.value
      };
      console.log("[AUTH] Login payload (wire this to backend):", payload);
      // TODO: call your login endpoint here
      closeAuth();
    });

    formForgot.addEventListener("submit", (e) => {
      e.preventDefault();
      const payload = {
        email: e.target.email.value.trim()
      };
      console.log(
        "[AUTH] Forgot-password payload (wire this to backend):",
        payload
      );
      // TODO: call your password-reset endpoint here
      closeAuth();
    });
}