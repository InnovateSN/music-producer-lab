import {
  clearPendingLesson,
  consumePendingLesson,
  markPendingLesson,
  persistPremiumEntitlement,
  clearPremiumEntitlement
} from "./lesson-access.js";
import { LABS } from "./lessons-data.js";

export function initExplanationPage() {
    const PAYMENTS_CONFIG = {
      gumroadProduct: "beatvault-premium",
      productUrl: "https://beatvault.gumroad.com/l/beatvault-premium",
      endpoints: {
        entitlement: "/api/payments/entitlement"
      }
    };

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

    const navPurchaseCta = document.getElementById("mpl-nav-stripe-cta");
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

    const billingBanner = document.getElementById("mpl-billing-banner");
    const paymentStatusEl = document.getElementById("mpl-payment-status");

    const labCardsContainer = document.getElementById("mpl-lab-cards");

    let lessonLinks = [];

    let targetLessonUrl = consumePendingLesson(null);
    let entitlementTracked = false;

    const billingState = {
      hasPremiumAccess: false,
      checked: false,
      error: null,
      plan: null,
      entitlementToken: null
    };

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

    const toastState = {
      stack: null,
    };

    hydrateAuthFromStorage();
    renderLabCards();
    lessonLinks = Array.from(
      document.querySelectorAll("[data-mpl-lesson-link]")
    );
    checkEntitlement();

    function renderLabCards() {
      if (!labCardsContainer) return;

      labCardsContainer.innerHTML = "";

      LABS.forEach((lab) => {
        const card = document.createElement("div");
        card.className = "lab-card";
        card.innerHTML = `
          <div class="lab-tags">
            <span class="lab-tag ${lab.access === "premium" ? "premium" : ""}">${lab.access === "premium" ? "Premium" : "Free"}</span>
            <span class="lab-tag">${lab.hero.focus}</span>
          </div>
          <h3>${lab.title}</h3>
          <div class="lab-meta">
            <span>${lab.level}</span>
            <span>·</span>
            <span>${lab.duration}</span>
          </div>
          <p class="section-body" style="margin:0;">${lab.hero.subhead}</p>
        `;

        const actions = document.createElement("div");
        actions.className = "lab-actions";

        const openBtn = document.createElement("a");
        openBtn.className = lab.access === "premium" ? "btn btn-outline" : "btn btn-primary";
        openBtn.href = lab.lessonUrl;
        openBtn.setAttribute("data-mpl-lesson-link", "");
        if (lab.access === "premium") {
          openBtn.setAttribute("data-mpl-access", "premium");
        }
        openBtn.innerHTML = `<span>Open lab</span>`;

        const flowNote = document.createElement("div");
        flowNote.className = "section-body";
        flowNote.style.margin = "0";
        flowNote.style.fontSize = "0.95rem";
        const nextLesson = lab.nextSlug && LABS.find((item) => item.slug === lab.nextSlug);
        flowNote.textContent = nextLesson
          ? `Next: ${nextLesson.title}`
          : "Final step before release-ready.";

        actions.appendChild(openBtn);
        actions.appendChild(flowNote);

        card.appendChild(actions);
        labCardsContainer.appendChild(card);
      });
    }

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

      if (authState.user?.isGuest) {
        setBillingBanner(
          "info",
          "Guest session active. Create a free account to save progress and unlock more lessons."
        );
      }
    }

    function clearAuthState() {
      setAuthState({ user: null, token: null });
      clearPremiumEntitlement();
      billingState.hasPremiumAccess = false;
      billingState.checked = false;
      billingState.plan = null;
      billingState.entitlementToken = null;
      billingState.error = null;
    }

    function setBillingBanner(type, message) {
      if (!billingBanner) return;
      if (!message) {
        billingBanner.classList.add("mpl-auth-hidden");
        delete billingBanner.dataset.state;
        billingBanner.textContent = "";
        return;
      }
      billingBanner.textContent = message;
      billingBanner.dataset.state = type;
      billingBanner.classList.remove("mpl-auth-hidden");
    }

    function trackEvent(eventName, detail = {}) {
      try {
        if (window.dataLayer) {
          window.dataLayer.push({ event: eventName, ...detail });
        }
        if (typeof window.mplAnalytics === "function") {
          window.mplAnalytics(eventName, detail);
        }
      } catch (err) {
        console.warn("Analytics hook failed", err);
      }
      console.info(`[analytics] ${eventName}`, detail);
    }

    function getToastStack() {
      if (toastState.stack) return toastState.stack;
      const stack = document.createElement("div");
      stack.className = "mpl-toast-stack";
      document.body.appendChild(stack);
      toastState.stack = stack;
      return stack;
    }

    function showToast(type, message, duration = 4200) {
      if (!message) return;
      const stack = getToastStack();
      const toast = document.createElement("div");
      toast.className = "mpl-toast";
      toast.dataset.state = type;
      toast.textContent = message;
      stack.appendChild(toast);

      setTimeout(() => {
        toast.classList.add("mpl-auth-hidden");
        setTimeout(() => toast.remove(), 400);
      }, duration);
    }

    function setPaymentStatus(type, message) {
      if (!paymentStatusEl || !message) return;
      paymentStatusEl.textContent = message;
      paymentStatusEl.dataset.state = type;
      paymentStatusEl.classList.remove("mpl-auth-hidden");

      clearTimeout(paymentStatusEl.dismissTimer);
      paymentStatusEl.dismissTimer = setTimeout(() => {
        paymentStatusEl.classList.add("mpl-auth-hidden");
      }, type === "error" ? 7000 : 4500);
    }

    function clearPaymentStatus() {
      if (!paymentStatusEl) return;
      paymentStatusEl.textContent = "";
      paymentStatusEl.classList.add("mpl-auth-hidden");
      delete paymentStatusEl.dataset.state;
      clearTimeout(paymentStatusEl.dismissTimer);
    }

    function parseBillingStatusFromQuery() {
      const params = new URLSearchParams(window.location.search);
      const billingStatus = params.get("billing");
      const billingMessage = params.get("billing_message");
      if (!billingStatus) return;

      if (billingStatus === "success") {
        setBillingBanner(
          "success",
          billingMessage || "Gumroad payment confirmed. BeatVault Premium unlocked."
        );
        showToast("success", billingMessage || "Gumroad payment confirmed. BeatVault Premium unlocked.");
        trackEvent("payment_completion", { status: "success", source: "query" });
      } else if (billingStatus === "waitlist") {
        setBillingBanner("success", billingMessage || "You're on the priority list.");
        showToast("success", billingMessage || "You're on the priority list.");
        trackEvent("payment_waitlist", { status: "waitlist", source: "query" });
      } else if (billingStatus === "cancel") {
        setBillingBanner(
          "info",
          billingMessage || "Gumroad checkout canceled. You can try again anytime."
        );
        setPaymentStatus("info", billingMessage || "Gumroad checkout canceled. You can try again anytime.");
      } else if (billingStatus === "error") {
        setBillingBanner(
          "error",
          billingMessage || "We couldn't verify your payment status."
        );
        setPaymentStatus("error", billingMessage || "We couldn't verify your payment status.");
        trackEvent("payment_completion", { status: "error", source: "query" });
      }
    }

    async function callBilling(endpoint, payload = null, method = "POST") {
      const opts = {
        method,
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      };

      if (payload && method !== "GET") {
        opts.body = JSON.stringify(payload);
      }

      const response = await fetch(endpoint, opts);
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

    async function checkEntitlement(force = false) {
      if (billingState.checked && !force) return billingState;
      try {
        const data = await callBilling(PAYMENTS_CONFIG.endpoints.entitlement, null, "GET");
        billingState.hasPremiumAccess = !!data?.hasAccess;
        billingState.plan = data?.plan || null;
        billingState.entitlementToken = data?.accessToken || data?.token || null;
        billingState.error = null;
        billingState.checked = true;

        persistPremiumEntitlement({
          token: billingState.entitlementToken,
          status: {
            hasAccess: billingState.hasPremiumAccess,
            plan: billingState.plan,
            checkedAt: Date.now(),
            entitlementToken: billingState.entitlementToken
          }
        });

        if (billingState.hasPremiumAccess) {
          setBillingBanner(
            "success",
            data?.message || "Gumroad purchase verified. BeatVault Premium is active."
          );
          setPaymentStatus("success", data?.message || "Gumroad purchase verified. BeatVault Premium is active.");
          if (!entitlementTracked) {
            trackEvent("payment_entitlement_confirmed", {
              plan: billingState.plan || "unknown",
            });
            showToast(
              "success",
              data?.message || "BeatVault Premium active. Enjoy the full curriculum."
            );
            entitlementTracked = true;
          }
        }
      } catch (err) {
        billingState.error = err.message;
        clearPremiumEntitlement();
        setPaymentStatus("error", err.message || "Unable to verify premium access.");
      }
      return billingState;
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
        title.textContent = "Welcome to BeatVault";
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
        button.classList.add("is-loading");
        if (!button.querySelector(".btn-spinner")) {
          const spinner = document.createElement("span");
          spinner.className = "btn-spinner";
          spinner.setAttribute("aria-hidden", "true");
          button.insertBefore(spinner, label);
        }
      } else {
        label.textContent = button.dataset.originalText || label.textContent;
        button.disabled = false;
        button.classList.remove("is-loading");
        const spinner = button.querySelector(".btn-spinner");
        if (spinner) {
          spinner.remove();
        }
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

    function openGumroadProduct(source = "hero") {
      const button = source === "nav" ? navPurchaseCta : heroPrimaryCta;
      if (!button) return;

      try {
        setBillingBanner("info", "Opening Gumroad checkout…");
        setPaymentStatus("info", "Opening Gumroad checkout…");
        setButtonLoading(button, true, "Opening Gumroad…");
        trackEvent("payment_checkout_started", { source, provider: "gumroad" });

        const url = PAYMENTS_CONFIG.productUrl;
        if (window.GumroadOverlay && PAYMENTS_CONFIG.gumroadProduct) {
          window.GumroadOverlay.open(PAYMENTS_CONFIG.gumroadProduct);
        } else if (url) {
          window.open(url, "_blank", "noopener,noreferrer");
        } else {
          throw new Error("Gumroad product link unavailable.");
        }

        setPaymentStatus(
          "success",
          "Checkout opened. Complete your Gumroad unlock to access BeatVault."
        );
      } catch (err) {
        setBillingBanner("error", err.message || "Unable to open Gumroad checkout.");
        setPaymentStatus("error", err.message || "Unable to open Gumroad checkout.");
        trackEvent("payment_checkout_failed", {
          source,
          message: err.message,
          provider: "gumroad",
        });
      } finally {
        setButtonLoading(button, false);
      }
    }

    async function handlePremiumLesson(link, targetHref) {
      const status = await checkEntitlement();
      if (status?.hasPremiumAccess) {
        window.location.href = targetHref;
        return;
      }

      if (status?.error) {
        setBillingBanner(
          "error",
          `Unable to verify your premium access (${status.error}). Please try again.`
        );
        setPaymentStatus(
          "error",
          `Unable to verify your premium access (${status.error}). Please try again.`
        );
      } else {
        setBillingBanner(
          "error",
          "BeatVault Premium required. Complete your Gumroad unlock to enter this lab."
        );
        setPaymentStatus(
          "error",
          "BeatVault Premium required. Complete your Gumroad unlock to enter this lab."
        );
      }
      openAuth("signup", targetHref);
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

    function handleAuthSuccess({ user, token, message, mode, form }) {
      setAuthState({ user: user || authState.user, token: token || authState.token });
      const successMessage = message || "Logged in successfully.";
      const targetForm = form || formLogin;
      setStatus(targetForm, "success", successMessage);
      showToast("success", successMessage);
      trackEvent("auth_conversion", { mode: mode || "unknown", email: user?.email });

      // Refresh entitlement with the authenticated session to capture premium tokens
      checkEntitlement(true).catch(() => {
        /* Silent refresh */
      });

      closeAuth();
      const redirectUrl = consumePendingLesson(targetLessonUrl || "lesson-drums-1.html");
      targetLessonUrl = null;
      if (redirectUrl) {
        window.location.href = redirectUrl;
      }
    }

    // Helper: open modal with initial mode
    function openAuth(initialMode = "signup", targetUrl = null) {
      targetLessonUrl = targetUrl;
      if (targetLessonUrl) {
        markPendingLesson(targetLessonUrl);
      }
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

    parseBillingStatusFromQuery();

    // Gumroad CTA hooks
    if (navPurchaseCta) {
      navPurchaseCta.addEventListener("click", () => openGumroadProduct("nav"));
    }

    if (heroPrimaryCta) {
      heroPrimaryCta.addEventListener("click", () => openGumroadProduct("hero"));
    }

    // Intercept Lesson Links to require Auth/Guest selection + premium gating
    lessonLinks.forEach((link) => {
      const targetHref = link.getAttribute("href");
      const requiresPremium = link.dataset.mplAccess === "premium";

      link.addEventListener("click", async (e) => {
        if (requiresPremium) {
          e.preventDefault();
          await handlePremiumLesson(link, targetHref);
          return;
        }

        if (!authState.user) {
          e.preventDefault();
          openAuth("signup", targetHref);
        }
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
        setAuthState({
          user: {
            name: "Guest session",
            email: null,
            isGuest: true
          },
          token: null
        });
        showToast("success", "Guest session started. Progress won't be saved.");
        trackEvent("auth_conversion", { mode: "guest" });
        closeAuth();
        const redirectUrl = consumePendingLesson(targetLessonUrl || "lesson-drums-1.html");
        targetLessonUrl = null;
        window.location.href = redirectUrl;
      });
    }

    logoutTriggers.forEach((btn) => {
      btn.addEventListener("click", () => {
        const redirect =
          btn.getAttribute("data-mpl-logout-redirect") || "index.html";
        clearAuthState();
        clearPendingLesson();
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
          message: data.message || "Account created.",
          mode: "signup",
          form: formSignup
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
          message: data.message || "Logged in successfully.",
          mode: "login",
          form: formLogin
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
        showToast("success", data.message || "Reset link sent to your inbox.");
      } catch (err) {
        setStatus(formForgot, "error", err.message || "Reset failed.");
      } finally {
        setButtonLoading(submitBtn, false);
      }
    });
  }
