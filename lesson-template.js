import { ensureLessonAccess, renderLessonLock } from "./lesson-access.js";
import { syncSupabasePremiumStatus } from "./supabase-access.js";
import { LABS } from "./lessons-data.js";

function findLesson(slug) {
  return LABS.find((lesson) => lesson.slug === slug);
}

function createList(items = []) {
  const ul = document.createElement("ul");
  ul.className = "section-list";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
  return ul;
}

function renderHero(container, lesson) {
  if (!container) return;
  container.innerHTML = `
    <div class="hero-copy">
      <div class="hero-copy-eyebrow">${lesson.hero.eyebrow}</div>
      <h1 class="hero-title">
        ${lesson.hero.headline}
        <span>${lesson.title.replace(/^[^·]+·\s*/, "")}</span>.
      </h1>
      <p class="hero-subtitle">${lesson.hero.subhead}</p>
      <div class="hero-badges">
        <div class="hero-badge">${lesson.level} track</div>
        <div class="hero-badge">${lesson.duration}</div>
        <div class="hero-badge">${lesson.hero.focus}</div>
      </div>
    </div>
    <aside class="hero-visual" aria-hidden="true">
      <div class="hero-visual-header">
        <div class="hero-visual-title">${lesson.hero.pill}</div>
        <div class="hero-visual-pill">${lesson.access === "premium" ? "Premium" : "Free"} lab</div>
      </div>
      <div class="hero-visual-grid">
        <div class="hero-visual-main">
          <div class="hero-visual-main-title">${lesson.hero.takeaway}</div>
          <div class="hero-visual-waves">
            <div class="hero-visual-wave"></div>
            <div class="hero-visual-wave"></div>
            <div class="hero-visual-wave"></div>
            <div class="hero-visual-wave"></div>
            <div class="hero-visual-wave"></div>
          </div>
          <div class="hero-visual-metrics">
            <div class="hero-visual-metric">
              <span>Focus</span>
              <strong>${lesson.hero.focus}</strong>
            </div>
            <div class="hero-visual-metric">
              <span>Time</span>
              <strong>${lesson.duration}</strong>
            </div>
          </div>
        </div>
        <div class="hero-visual-side-card">
          <div class="hero-visual-side-label">Highlights</div>
          <div class="hero-visual-pill-list">
            ${lesson.highlights
              .map(
                (item) => `
                <div class="hero-visual-pill-tag">${item}</div>
              `
              )
              .join("")}
          </div>
          <div class="hero-visual-footer">
            <span>${lesson.hero.eyebrow}</span>
            <span>${lesson.level} · ${lesson.access === "premium" ? "Premium" : "Free"}</span>
          </div>
        </div>
      </div>
    </aside>
  `;
}

function renderOverview(container, lesson) {
  if (!container) return;
  const prevLesson = lesson.prevSlug && findLesson(lesson.prevSlug);
  const nextLesson = lesson.nextSlug && findLesson(lesson.nextSlug);
  const overview = document.createElement("article");
  overview.className = "section";
  overview.innerHTML = `
    <div class="section-eyebrow">What you'll practice</div>
    <h2 class="section-title">${lesson.title}</h2>
    <p class="section-body">${lesson.hero.subhead}</p>
  `;
  overview.appendChild(createList(lesson.highlights));

  const sequencing = document.createElement("article");
  sequencing.className = "section";
  sequencing.innerHTML = `
    <div class="section-eyebrow">Module flow</div>
    <h2 class="section-title">Stay in sequence.</h2>
    <p class="section-body">
      Move smoothly between labs using the handoff buttons below. Each module builds on the previous one, so complete them in order.
    </p>
    <ul class="section-list">
      <li>${prevLesson ? `Previous: ${prevLesson.title}` : "Start here after the drum mini-course."}</li>
      <li>${nextLesson ? `Next: ${nextLesson.title}` : "Final core lab before release."}</li>
      <li>Use the footer navigation to jump without losing context.</li>
    </ul>
  `;

  container.innerHTML = "";
  container.appendChild(overview);
  container.appendChild(sequencing);
}

function renderSteps(container, lesson) {
  if (!container) return;
  container.innerHTML = "";
  lesson.steps.forEach((step, idx) => {
    const section = document.createElement("article");
    section.className = "section";
    section.innerHTML = `
      <div class="section-eyebrow">Step ${idx + 1}</div>
      <h2 class="section-title">${step.title}</h2>
      <p class="section-body">${step.body}</p>
    `;
    section.appendChild(createList(step.bullets));
    container.appendChild(section);
  });
}

function renderOutcomes(container, lesson) {
  if (!container) return;
  const outcomes = document.createElement("article");
  outcomes.className = "section";
  outcomes.innerHTML = `
    <div class="section-eyebrow">Outcomes</div>
    <h2 class="section-title">What you'll leave with.</h2>
    <p class="section-body">Ship the lab and carry these into any DAW.</p>
  `;
  outcomes.appendChild(createList(lesson.outcomes));

  const checklist = document.createElement("article");
  checklist.className = "section";
  checklist.innerHTML = `
    <div class="section-eyebrow">Next steps</div>
    <h2 class="section-title">Keep momentum.</h2>
    <p class="section-body">
      Download your DAW session, save a preset for each chain, and take a five-minute break before starting the next module.
    </p>
    <ul class="section-list">
      <li>Print a quick bounce to compare against the next lab.</li>
      <li>Drop questions for the community/coach while details are fresh.</li>
      <li>Label stems clearly: tempo, key, and version.</li>
    </ul>
  `;

  container.innerHTML = "";
  container.appendChild(outcomes);
  container.appendChild(checklist);
}

function renderNavigation(container, lesson) {
  if (!container) return;
  const prevLesson = lesson.prevSlug && findLesson(lesson.prevSlug);
  const nextLesson = lesson.nextSlug && findLesson(lesson.nextSlug);

  const nav = document.createElement("div");
  nav.className = "lesson-nav";
  nav.innerHTML = `
    ${
      prevLesson
        ? `<a class="btn btn-outline" href="${prevLesson.lessonUrl}" data-mpl-lesson-link ${
            prevLesson.access === "premium" ? 'data-mpl-access="premium"' : ""
          }><span>← ${prevLesson.title}</span></a>`
        : ""
    }
    ${
      nextLesson
        ? `<a class="btn btn-primary" href="${nextLesson.lessonUrl}" data-mpl-lesson-link ${
            nextLesson.access === "premium" ? 'data-mpl-access="premium"' : ""
          }><span>${nextLesson.title} →</span></a>`
        : ""
    }
  `;

  container.innerHTML = "";
  container.appendChild(nav);
}

export async function renderLessonPage(slug) {
  const lesson = findLesson(slug);
  if (!lesson) {
    console.error(`Lesson not found for slug: ${slug}`);
    return;
  }

  // If Supabase credentials are present, refresh the entitlement before gating.
  await syncSupabasePremiumStatus();

  const access = ensureLessonAccess({
    lessonUrl: lesson.lessonUrl,
    requiresPremium: lesson.access === "premium",
    fallbackUrl: "explanation.html"
  });

  if (!access.allowed) {
    renderLessonLock(access.reason, access.fallbackUrl);
    return;
  }

  document.title = `${lesson.title} | Music Producer Lab`;
  const yearEl = document.getElementById("mpl-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  renderHero(document.getElementById("lesson-hero"), lesson);
  renderOverview(document.getElementById("lesson-overview"), lesson);
  renderSteps(document.getElementById("lesson-steps"), lesson);
  renderOutcomes(document.getElementById("lesson-outcomes"), lesson);
  renderNavigation(document.getElementById("lesson-navigation"), lesson);

  const navLinks = Array.from(
    document.querySelectorAll("[data-mpl-lesson-link]")
  );

  navLinks.forEach((link) => {
    const targetHref = link.getAttribute("href");
    const requiresPremium = link.dataset.mplAccess === "premium";

    link.addEventListener("click", (e) => {
      if (!requiresPremium) return;

      const gate = ensureLessonAccess({
        lessonUrl: targetHref,
        requiresPremium: true,
        fallbackUrl: "explanation.html"
      });

      if (!gate.allowed) {
        e.preventDefault();
        renderLessonLock(gate.reason, gate.fallbackUrl);
      }
    });
  });
}
