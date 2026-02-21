import { getDisplayNumber } from '../curriculum.js';

const baseMessages = {
  initial: "Complete the exercise to unlock the next lesson.",
  alreadyCompleted: "You've already completed this exercise. Feel free to practice or move to the next lesson!",
  success: "Correct! Great job! You can now proceed to the next lesson.",
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

function inferLessonLevel(lessonNumber) {
  if (typeof lessonNumber !== "number" || Number.isNaN(lessonNumber)) {
    return "intermediate";
  }

  if (lessonNumber <= 7) return "beginner";
  if (lessonNumber <= 14) return "intermediate";
  return "advanced";
}

export function buildLessonQualityPreset({
  lessonCategory = "Music Production",
  lessonNumber,
  level
} = {}) {
  const resolvedLevel = level || inferLessonLevel(lessonNumber);

  return {
    reviewMetadata: {
      lastReviewed: "2026-02-21",
      reviewVersion: "didactic-audit-v5",
      reviewedAgainst: ["AES", "Wikipedia", "Ableton"],
      livello: resolvedLevel,
      prerequisiti: [
        `Conoscenze base del capitolo ${lessonCategory}`,
        "Uso essenziale della DAW (playback, metronomo, editing base)",
        "Ascolto critico A/B di pattern o sezioni"
      ],
      outcomeMisurabili: [
        "Completa l'esercizio guidato rispettando il pattern/brief richiesto",
        "Giustifica le scelte tecniche con almeno 2 osservazioni di ascolto",
        "Replica il workflow in un contesto musicale personale"
      ]
    },
    assessmentRubric: {
      criteriSuperamento: {
        punteggioMinimo: 70,
        sogliaPercentuale: "70%",
        regola: "Superato se il punteggio totale è >= 70/100 e non ci sono errori critici di timing/audio"
      },
      criteri: [
        {
          nome: "Accuratezza tecnica",
          punteggioMassimo: 40,
          threshold: "Almeno 28/40",
          evidenza: "Confronto pattern target vs output"
        },
        {
          nome: "Timing ed esecuzione",
          punteggioMassimo: 30,
          threshold: "Almeno 21/30",
          evidenza: "Allineamento griglia/metronomo e stabilità ritmica"
        },
        {
          nome: "Decisioni musicali",
          punteggioMassimo: 30,
          threshold: "Almeno 21/30",
          evidenza: "Coerenza con obiettivo sonoro e motivazione delle scelte"
        }
      ]
    }
  };
}

if (typeof module !== "undefined") {
  module.exports = {
    messagePresets,
    applyMessagePreset,
    buildHeroEyebrow,
    buildHero,
    buildLessonQualityPreset
  };
}
