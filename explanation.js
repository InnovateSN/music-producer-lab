import { ensureLessonAccess, getStoredUser, isLessonProtected } from "./lesson-access.js";
import { LABS } from "./lessons-data.js";

function updateYear() {
  const yearEl = document.getElementById("mpl-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

function buildLessonCard(lab) {
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
  openBtn.dataset.mplAccess = lab.access;
  openBtn.innerHTML = `<span>Open lab</span>`;

  const nextLesson = lab.nextSlug && LABS.find((item) => item.slug === lab.nextSlug);
  const flowNote = document.createElement("div");
  flowNote.className = "section-body";
  flowNote.style.margin = "0";
  flowNote.style.fontSize = "0.95rem";
  flowNote.textContent = nextLesson
    ? `Next: ${nextLesson.title}`
    : "Final step before release-ready.";

  actions.appendChild(openBtn);
  actions.appendChild(flowNote);
  card.appendChild(actions);

  return card;
}

function renderLabCards() {
  const container = document.getElementById("mpl-lab-cards");
  if (!container) return;

  container.innerHTML = "";
  LABS.forEach((lab) => container.appendChild(buildLessonCard(lab)));
}

function handleLessonLinkClick(link) {
  const targetHref = link.getAttribute("href");
  const requiresPaid =
    link.dataset.mplAccess === "premium" || isLessonProtected(targetHref);

  link.addEventListener("click", (e) => {
    if (!requiresPaid) return;

    const gate = ensureLessonAccess({ lessonUrl: targetHref, requiresPaid: true });
    if (!gate.allowed) {
      e.preventDefault();
    }
  });
}

function hydrateNavigation() {
  const lessonLinks = Array.from(
    document.querySelectorAll("[data-mpl-lesson-link]")
  );

  lessonLinks.forEach(handleLessonLinkClick);
}

function hydrateAuthUi() {
  const user = getStoredUser();
  const navLogin = document.getElementById("mpl-nav-login");

  if (navLogin) {
    navLogin.textContent = user ? "Account" : "Log in";
    navLogin.addEventListener("click", () => {
      window.location.href = user ? "/account" : "/signup";
    });
  }
}

export function initExplanationPage() {
  updateYear();
  renderLabCards();
  hydrateNavigation();
  hydrateAuthUi();
}
