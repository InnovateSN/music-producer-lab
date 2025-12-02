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

    const logoutTriggers = document.querySelectorAll(
      '[data-mpl-action="logout"]'
    );
    
    // Collect lesson links to force auth/guest selection
    const lessonLinks = [
        document.getElementById("lesson-1-link"),
        document.getElementById("lesson-2-link"),
        document.getElementById("lesson-3-link"),
        document.getElementById("lesson-4-link"),
        document.getElementById("lesson-5-link"),
    ].filter(Boolean);

    let targetLessonUrl = null;

    const AUTH_ENDPOINTS = {
      signup: "/api/auth/signup",
      login: "/api/auth/login",
      reset: "/api/auth/reset"
    };

    const AUTH_USER_KEY = "mpl_auth_user";
    const AUTH_TOKEN_COOKIE = "mpl_auth_token";

    const authState = {
      user: null,
      token: null
    };

    hydrateAuthFromStorage();

    function hydrateAuthFromStorage() {
      try {
        const storedUser = localStorage.getItem(AUTH_USER_KEY);
        if (storedUser) {
          authState.user = JSON.parse(storedUser);
        }
      } catch (err) {
        console.warn("Unable to read auth from storage", err);
      }
      window.mplAuthState = authState;
    }

    function persistToken(token) {
      if (token) {
        document.cookie = `${AUTH_TOKEN_COOKIE}=${token}; path=/; secure; samesite=strict`;
      } else {
        document.cookie = `${AUTH_TOKEN_COOKIE}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`; // expire
      }
    }

    function persistUser(user) {
      if (!user) {
        localStorage.removeItem(AUTH_USER_KEY);
        return;
      }
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
    }

    function setAuthState({ user, token }) {
      authState.user = user || null;
      authState.token = token || null;
      window.mplAuthState = authState;
      persistToken(token || null);
      persistUser(user || null);
    }

    function clearAuthState() {
      setAuthState({ user: null, token: null });
    }


    // Helper: switch between signup / login / forgot views
    function setMode(mode) {
      // Reset tab states
      tabSignup.classList.remove("mpl-auth-tab-active");
      tabLogin.classList.remove("mpl-auth-tab-active");

      // Hide all forms by default
      formSignup.classList.add("mpl-auth-hidden");
      formLogin.classList.add("mpl-auth-hidden");
      formForgot.classList.add("mpl-auth-hidden");
      clearStatus(formSignup);
      clearStatus(formLogin);
      clearStatus(formForgot);

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

    function getStatusEl(form) {
      let el = form.querySelector(".mpl-auth-status");
      if (!el) {
        el = document.createElement("div");
        el.className = "mpl-auth-status mpl-auth-hidden";
        form.appendChild(el);
      }
      return el;
    }

    function setStatus(form, type, message) {
      const statusEl = getStatusEl(form);
      statusEl.textContent = message;
      statusEl.dataset.state = type;
      statusEl.classList.remove("mpl-auth-hidden");
    }

    function clearStatus(form) {
      const statusEl = form.querySelector(".mpl-auth-status");
      if (statusEl) {
        statusEl.textContent = "";
        statusEl.classList.add("mpl-auth-hidden");
        delete statusEl.dataset.state;
      }
    }

    function setButtonLoading(button, isLoading, loadingText = "Working…") {
      if (!button) return;
      const label = button.querySelector("span") || button;
      if (isLoading) {
        button.dataset.originalText = label.textContent;
        label.textContent = loadingText;
        button.disabled = true;
      } else {
        label.textContent = button.dataset.originalText || label.textContent;
        button.disabled = false;
        delete button.dataset.originalText;
      }
    }

    function validateEmail(email) {
      if (!email) return "Email is required.";
      const emailRegex = /.+@.+\..+/;
      if (!emailRegex.test(email)) return "Enter a valid email address.";
      return "";
    }

    function validatePassword(password) {
      if (!password) return "Password is required.";
      if (password.length < 8)
        return "Password must be at least 8 characters long.";
      return "";
    }

    function validateName(name) {
      if (!name) return "Name is required.";
      if (name.length < 2) return "Please enter your full name.";
      return "";
    }

    async function callAuth(endpoint, payload) {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(payload)
      });

      const data = await response
        .clone()
        .json()
        .catch(() => ({}));

      if (!response.ok) {
        const message = data?.message || "Unable to complete the request.";
        throw new Error(message);
      }

      return data;
    }

    function handleAuthSuccess({ user, token, message }) {
      setAuthState({ user: user || authState.user, token: token || authState.token });
      if (message) {
        setStatus(formLogin, "success", message);
      }
      closeAuth();
      const redirectUrl = targetLessonUrl || "lesson-drums-1.html";
      if (redirectUrl) {
        window.location.href = redirectUrl;
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

    logoutTriggers.forEach((btn) => {
      btn.addEventListener("click", () => {
        const redirect =
          btn.getAttribute("data-mpl-logout-redirect") || "index.html";
        clearAuthState();
        window.location.href = redirect;
      });
    });

    // ---------------- BACKEND INTEGRATION HOOKS ----------------
    formSignup.addEventListener("submit", async (e) => {
      e.preventDefault();
      clearStatus(formSignup);
      const payload = {
        name: e.target.name.value.trim(),
        email: e.target.email.value.trim(),
        password: e.target.password.value
      };

      const nameError = validateName(payload.name);
      const emailError = validateEmail(payload.email);
      const passwordError = validatePassword(payload.password);
      const errors = [nameError, emailError, passwordError].filter(Boolean);

      if (errors.length) {
        setStatus(formSignup, "error", errors[0]);
        return;
      }

      const submitBtn = formSignup.querySelector(".mpl-auth-submit");

      try {
        setButtonLoading(submitBtn, true, "Creating account…");
        const data = await callAuth(AUTH_ENDPOINTS.signup, payload);
        handleAuthSuccess({
          user: data.user || { name: payload.name, email: payload.email },
          token: data.token,
          message: data.message || "Account created."
        });
      } catch (err) {
        setStatus(formSignup, "error", err.message || "Signup failed.");
      } finally {
        setButtonLoading(submitBtn, false);
      }
    });

    formLogin.addEventListener("submit", async (e) => {
      e.preventDefault();
      clearStatus(formLogin);
      const payload = {
        email: e.target.email.value.trim(),
        password: e.target.password.value
      };

      const emailError = validateEmail(payload.email);
      const passwordError = validatePassword(payload.password);
      const errors = [emailError, passwordError].filter(Boolean);

      if (errors.length) {
        setStatus(formLogin, "error", errors[0]);
        return;
      }

      const submitBtn = formLogin.querySelector(".mpl-auth-submit");

      try {
        setButtonLoading(submitBtn, true, "Logging in…");
        const data = await callAuth(AUTH_ENDPOINTS.login, payload);
        handleAuthSuccess({
          user: data.user || authState.user || { email: payload.email },
          token: data.token,
          message: data.message || "Logged in successfully."
        });
      } catch (err) {
        setStatus(formLogin, "error", err.message || "Login failed.");
      } finally {
        setButtonLoading(submitBtn, false);
      }
    });

    formForgot.addEventListener("submit", async (e) => {
      e.preventDefault();
      clearStatus(formForgot);
      const payload = {
        email: e.target.email.value.trim()
      };

      const emailError = validateEmail(payload.email);
      if (emailError) {
        setStatus(formForgot, "error", emailError);
        return;
      }

      const submitBtn = formForgot.querySelector(".mpl-auth-submit");

      try {
        setButtonLoading(submitBtn, true, "Sending reset…");
        const data = await callAuth(AUTH_ENDPOINTS.reset, payload);
        setStatus(
          formForgot,
          "success",
          data.message || "Check your email for reset instructions."
        );
      } catch (err) {
        setStatus(formForgot, "error", err.message || "Reset failed.");
      } finally {
        setButtonLoading(submitBtn, false);
      }
    });
  }