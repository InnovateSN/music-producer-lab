import { getDisplayNumber } from '../curriculum.js';

const baseMessages = {
  initial: "Complete the exercise to unlock the next lesson.",
  alreadyCompleted: "You've already completed this exercise. Feel free to practice or move to the next lesson!",
  success: "🎉 Correct! Great job! You can now proceed to the next lesson.",
  error: "Not quite right. Double check the highlighted steps!"
};

const drumMessages = {
  initial: "Complete the exercise to unlock the next lesson.",
  alreadyCompleted: "You've already completed this exercise. Feel free to practice or move to the next lesson!",
  success: "Correct! Great job! You can now proceed to the next lesson.",
  error: "Not quite right. Check the pattern and try again!"
};

export const messagePresets = {
  default: baseMessages,
  drums: drumMessages,
  "drum-pattern": drumMessages
};

export function applyMessagePreset(presetKey = "default", overrides = {}) {
  const base = messagePresets[presetKey] || messagePresets.default;
  return {
    ...base,
    ...Object.fromEntries(
      Object.entries(overrides).filter(([, value]) => value !== undefined && value !== null)
    )
  };
}

export function buildHeroEyebrow({ lessonNumber, categoryLabel, lessonSlug }) {
  // Use automatic display number from curriculum if lessonSlug provided
  let displayNum = lessonNumber;
  if (lessonSlug) {
    const autoNumber = getDisplayNumber(lessonSlug);
    if (autoNumber !== null) {
      displayNum = autoNumber;
    }
  }

  const lessonLabel = typeof displayNum === "number" && !Number.isNaN(displayNum)
    ? `Lesson ${displayNum}`
    : "Lesson";
  const category = categoryLabel || "Lesson";
  return `${lessonLabel} · ${category}`;
}

export function buildHero({
  lessonNumber,
  categoryLabel,
  title,
  titleHighlight,
  difficulty,
  subtitle
}) {
  return {
    eyebrow: buildHeroEyebrow({ lessonNumber, categoryLabel }),
    title,
    titleHighlight: titleHighlight || difficulty || "",
    subtitle: subtitle || ""
  };
}

if (typeof module !== "undefined") {
  module.exports = {
    messagePresets,
    applyMessagePreset,
    buildHeroEyebrow,
    buildHero
  };
}
