import {
  clearPendingLesson,
  consumePendingLesson,
  markPendingLesson,
  getStoredPremiumStatus,
  persistPremiumEntitlement,
  clearPremiumEntitlement
} from "./lesson-access.js";
import { LABS } from "./lessons-data.js";

export function initExplanationPage() {
    const API_BASE_URL = (window.mplApiBaseUrl || "").replace(/\/$/, "");
    const ENTITLEMENT_MAX_AGE_MS = 1000 * 60 * 30;
    const OFFLINE_ENTITLEMENT_TOKEN =
      window.__MPL_OFFLINE_ENTITLEMENT_TOKEN__ ||
      window.__MPL_OFFLINE_PREMIUM_TOKEN__ ||
      window.mplOfflineEntitlementToken ||
      null;
    const OFFLINE_PREMIUM_PLAN =
      window.__MPL_OFFLINE_PREMIUM_PLAN__ || "offline-demo";
    const OFFLINE_PREMIUM_TTL_MS = Number(
      window.__MPL_OFFLINE_PREMIUM_TTL_MS__
    );
    const OFFLINE_PREMIUM_EXPIRES_AT = Number(
      window.__MPL_OFFLINE_PREMIUM_EXPIRES_AT__
    );
    const OFFLINE_PREMIUM_ENABLED = Boolean(
      window.__MPL_OFFLINE_PREMIUM__ ?? OFFLINE_ENTITLEMENT_TOKEN
    );
    const BACKEND_AVAILABLE = Boolean(
      window.mplBackendAvailable ??
        window.__MPL_BACKEND_ENABLED__ ??
        (API_BASE_URL && API_BASE_URL.length > 0)
    );

    const PAYMENTS_CONFIG = {
      gumroadProduct: "tekpsy",
      productUrl: "https://innovatesol.gumroad.com/l/tekpsy?wanted=true",
      endpoints: {
        entitlement: `${API_BASE_URL}/api/payments/entitlement`,
        redeem: `${API_BASE_URL}/api/payments/redeem`,
        callback: `${API_BASE_URL}/api/payments/gumroad/return`,
      },
    };

    let gumroadOverlayFailed = false;

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

    const cachedEntitlement = getStoredPremiumStatus();
    if (cachedEntitlement?.hasAccess) {
      billingState.hasPremiumAccess = true;
      billingState.plan = cachedEntitlement.plan || null;
      billingState.entitlementToken = cachedEntitlement.entitlementToken || null;
      billingState.checked = true;
    }

    const AUTH_ENDPOINTS = {
      signup: `${API_BASE_URL}/api/auth/signup`,
      login: `${API_BASE_URL}/api/auth/login`,
      reset: `${API_BASE_URL}/api/auth/reset`
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

    if (!BACKEND_AVAILABLE) {
      if (backdrop) {
        backdrop.classList.add("mpl-auth-hidden");
        backdrop.setAttribute("aria-hidden", "true");
      }

      [tabSignup, tabLogin, forgotTrigger, backToLogin, guestBtn, closeBtn]
        .filter(Boolean)
        .forEach((el) => el.setAttribute("hidden", "true"));
    }

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

    function getOfflineEntitlementExpiry() {
      if (Number.isFinite(OFFLINE_PREMIUM_EXPIRES_AT)) {
        return OFFLINE_PREMIUM_EXPIRES_AT;
      }

      if (Number.isFinite(OFFLINE_PREMIUM_TTL_MS)) {
        return Date.now() + Math.max(0, OFFLINE_PREMIUM_TTL_MS);
      }

      if (OFFLINE_ENTITLEMENT_TOKEN) {
        // Default to a 30-day offline token window unless overridden
        return Date.now() + 1000 * 60 * 60 * 24 * 30;
      }

      return null;
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
      const entitlementToken =
        params.get("entitlement_token") || params.get("access_token");
      const plan = params.get("plan") || "gumroad";
      const entitlementExpiresAt = parseInt(
        params.get("entitlement_expires_at") || params.get("expires_at"),
        10
      );
      const entitlementRevoked =
        params.get("entitlement_revoked") === "true";
      if (!billingStatus) return;

      if (billingStatus === "success") {
        setBillingBanner(
          "success",
          billingMessage || "Gumroad payment confirmed. Music Producer Lab Premium unlocked."
        );
        showToast("success", billingMessage || "Gumroad payment confirmed. Music Producer Lab Premium unlocked.");
        trackEvent("payment_completion", { status: "success", source: "query" });

        billingState.hasPremiumAccess = true;
        billingState.plan = plan;
        billingState.entitlementToken = entitlementToken;
        billingState.checked = true;
        billingState.error = null;

        persistPremiumEntitlement({
          token: billingState.entitlementToken,
          status: {
            hasAccess: billingState.hasPremiumAccess,
            plan: billingState.plan,
            checkedAt: Date.now(),
            entitlementToken: billingState.entitlementToken,
            expiresAt: Number.isFinite(entitlementExpiresAt)
              ? entitlementExpiresAt
              : null,
            revoked: entitlementRevoked
          }
        });
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
      if (!BACKEND_AVAILABLE) {
        return {
          hasAccess: false,
          plan: null,
          message: "Billing services are unavailable in this demo environment.",
        };
      }

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
      const stored = getStoredPremiumStatus();
      const now = Date.now();
      const storedFresh = Boolean(
        stored?.hasAccess &&
          stored?.checkedAt &&
          now - stored.checkedAt < ENTITLEMENT_MAX_AGE_MS &&
          (!stored?.expiresAt || now < stored.expiresAt) &&
          !stored?.revoked
      );

      if (!force && (billingState.checked || (storedFresh && stored?.hasAccess))) {
        if (storedFresh && stored?.hasAccess) {
          billingState.hasPremiumAccess = true;
          billingState.plan = stored.plan || billingState.plan;
          billingState.entitlementToken =
            stored.entitlementToken || billingState.entitlementToken;
        }
        billingState.checked = true;
        return billingState;
      }

      if (!BACKEND_AVAILABLE) {
        const offlineToken =
          OFFLINE_ENTITLEMENT_TOKEN || stored?.entitlementToken || null;

        if (OFFLINE_PREMIUM_ENABLED || (stored?.hasAccess && storedFresh)) {
          billingState.hasPremiumAccess = true;
          billingState.plan = stored?.plan || OFFLINE_PREMIUM_PLAN;
          billingState.entitlementToken = offlineToken;
          billingState.error = null;
          billingState.checked = true;

          persistPremiumEntitlement({
            token: offlineToken,
            status: {
              hasAccess: true,
              plan: billingState.plan,
              checkedAt: Date.now(),
              entitlementToken: offlineToken,
              expiresAt: stored?.expiresAt || getOfflineEntitlementExpiry(),
              revoked: stored?.revoked || false,
            },
          });
          return billingState;
        }

        billingState.checked = true;
        billingState.hasPremiumAccess = Boolean(stored?.hasAccess);
        billingState.plan = stored?.plan || null;
        billingState.entitlementToken = stored?.entitlementToken || null;
        billingState.error = stored?.revoked
          ? "Entitlement revoked"
          : stored?.expiresAt && now > stored.expiresAt
            ? "Entitlement expired"
            : null;
        return billingState;
      }
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
            entitlementToken: billingState.entitlementToken,
            expiresAt: data?.expiresAt || null,
            revoked: data?.revoked === true
          }
        });

        if (billingState.hasPremiumAccess) {
          setBillingBanner(
            "success",
            data?.message || "Gumroad purchase verified. Music Producer Lab Premium is active."
          );
          setPaymentStatus("success", data?.message || "Gumroad purchase verified. Music Producer Lab Premium is active.");
          if (!entitlementTracked) {
            trackEvent("payment_entitlement_confirmed", {
              plan: billingState.plan || "unknown",
            });
            showToast(
              "success",
              data?.message || "Music Producer Lab Premium active. Enjoy the full curriculum."
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

    function openGumroadProduct(source = "hero", event = null) {
      const button = source === "nav" ? navPurchaseCta : heroPrimaryCta;
      const { gumroadProduct, productUrl } = PAYMENTS_CONFIG;
      const overlayAvailable = Boolean(
        window.GumroadOverlay && (productUrl || gumroadProduct)
      );
      const overlayReady = overlayAvailable && !gumroadOverlayFailed;

      const hasNativeHref = Boolean(
        event?.currentTarget?.getAttribute?.("href")
      );

      if (!overlayReady && hasNativeHref && event) {
        return;
      }

      if (!button) return;

      if (event && overlayReady) {
        event.preventDefault();
      }

      const fallbackMessage =
        "Opening Gumroad checkout in a new tab automatically…";

      const openFallbackTab = () => {
        setBillingBanner("info", fallbackMessage);
        setPaymentStatus("info", fallbackMessage);
        setButtonLoading(button, false);

        if (productUrl) {
          window.open(productUrl, "_blank", "noopener,noreferrer");
          setPaymentStatus(
            "success",
            "Checkout opened in a new tab. Complete your Gumroad unlock to access Music Producer Lab Premium."
          );
        } else {
          const errorMessage = "Gumroad product link unavailable.";
          setBillingBanner("error", errorMessage);
          setPaymentStatus("error", errorMessage);
        }
      };

      setBillingBanner(
        "info",
        overlayReady ? "Opening Gumroad checkout…" : fallbackMessage
      );
      setPaymentStatus(
        "info",
        overlayReady ? "Opening Gumroad checkout…" : fallbackMessage
      );
      setButtonLoading(
        button,
        true,
        overlayReady ? "Opening Gumroad…" : "Opening new tab…"
      );
      trackEvent("payment_checkout_started", { source, provider: "gumroad" });

      if (!overlayReady) {
        openFallbackTab();
        return;
      }

      try {
        window.GumroadOverlay.open(productUrl || gumroadProduct);
        setPaymentStatus(
          "success",
          "Checkout opened. Complete your Gumroad unlock to access Music Producer Lab Premium."
        );
      } catch (err) {
        gumroadOverlayFailed = true;
        setButtonLoading(button, false);
        const errorMessage =
          err?.message || "Unable to open Gumroad checkout with overlay.";
        setBillingBanner("error", errorMessage);
        setPaymentStatus("info", fallbackMessage);
        trackEvent("payment_checkout_failed", {
          source,
          message: errorMessage,
          provider: "gumroad",
        });

        if (productUrl) {
          window.open(productUrl, "_blank", "noopener,noreferrer");
          setPaymentStatus(
            "success",
            "Checkout opened in a new tab. Complete your Gumroad unlock to access Music Producer Lab Premium."
          );
        } else {
          setPaymentStatus("error", errorMessage);
        }
        return;
      }

      setButtonLoading(button, false);
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
          "Music Producer Lab Premium required. Complete your Gumroad unlock to enter this lab."
        );
        setPaymentStatus(
          "error",
          "Music Producer Lab Premium required. Complete your Gumroad unlock to enter this lab."
        );
      }
      openGumroadProduct("lesson");
    }

    async function callAuth(endpoint, payload) {
      if (!BACKEND_AVAILABLE) {
        throw new Error(
          "Account sync is disabled in this demo. Continue as a guest or open Gumroad checkout."
        );
      }

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
      if (!BACKEND_AVAILABLE) {
        setBillingBanner(
          "info",
          "Account creation is disabled in this demo. Use the Gumroad checkout to unlock full access."
        );
        openGumroadProduct("auth");
        return;
      }

      targetLessonUrl = targetUrl;
      if (targetLessonUrl) {
        markPendingLesson(targetLessonUrl);
      }
      backdrop.classList.remove("mpl-auth-hidden");
      backdrop.setAttribute("aria-hidden", "false");

      if (targetLessonUrl) {
        guestBtn?.querySelector("span").textContent = "Continue as guest";
      } else {
        guestBtn?.querySelector("span").textContent = "Enter as guest";
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
      navPurchaseCta.addEventListener("click", (event) =>
        openGumroadProduct("nav", event)
      );
    }

    if (heroPrimaryCta) {
      heroPrimaryCta.addEventListener("click", (event) =>
        openGumroadProduct("hero", event)
      );
    }

    // Intercept Lesson Links to handle premium gating
    lessonLinks.forEach((link) => {
      const targetHref = link.getAttribute("href");
      const requiresPremium = link.dataset.mplAccess === "premium";

      link.addEventListener("click", async (e) => {
        if (!requiresPremium) return;

        e.preventDefault();
        await handlePremiumLesson(link, targetHref);
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

    if (BACKEND_AVAILABLE) {
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
  }
