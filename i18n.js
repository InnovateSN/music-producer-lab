/**
 * MUSIC PRODUCER LAB - GLOBAL INTERNATIONALIZATION
 * Central translation system for the entire website
 */

(function() {
  'use strict';

  // Complete translation dictionary for all pages
  const translations = {
    en: {
      // Navbar
      home: 'Home',
      labs: 'Labs',
      explore: 'Explore',
      downloads: 'Downloads',
      about: 'About',
      contact: 'Contact',
      startLearning: 'Start Learning',
      dark: 'Dark',
      light: 'Light',
      language: 'Language',

      // Homepage - Hero Section
      heroEyebrow: 'Interactive Music Production',
      heroTitle: 'Learn music production by',
      heroTitleHighlight: 'actually producing',
      heroSubtitle: 'Interactive labs where you build real tracks step by step.',
      heroSubtitleBold: 'You do the work.',
      heroSubtitlePrefix: 'Not videos. Not theory.',
      startFreeLabs: 'Start Free Labs',
      seeWhatYouBuild: "See What You'll Build",
      freeBadge: 'Free',

      // Homepage - Stats
      stat90Lessons: '90+ Interactive Lessons',
      stat90Description: 'Hands-on exercises',
      statUnlimitedAccess: 'Unlimited Access',
      statUnlimitedDescription: 'Learn at your pace',
      statRealSkills: '100% Real Skills',
      statRealSkillsDescription: 'No fluff, just production',

      // Homepage - Features
      featuresSectionTitle: 'How Music Producer Lab Works',
      featuresSectionSubtitle: 'Learn production the way professionals do: by producing.',

      feature1Title: 'Interactive Audio Labs',
      feature1Description: 'Not videos. Not passive watching. You work with real audio tools directly in your browser.',

      feature2Title: 'Step-by-Step Guidance',
      feature2Description: 'Each lab breaks down complex production techniques into achievable steps with instant feedback.',

      feature3Title: 'Real-World Skills',
      feature3Description: 'Learn arrangement, mixing, sound design, and mastering techniques used by professionals.',

      feature4Title: 'Works With Any DAW',
      feature4Description: 'Learn universal concepts that apply to Ableton, FL Studio, Logic Pro, or any music production software.',

      // Homepage - Why Different Section
      whyDifferentTitle: 'Why Music Producer Lab is Different',
      whyDifferentSubtitle: 'Most courses teach theory. We teach by doing.',

      problem1Title: 'Tutorial Hell',
      problem1Description: 'Most Courses',
      problem1Detail: 'Watch 20 hours of tutorials, still can\'t make a beat.',
      solution1Description: 'Music Producer Lab',
      solution1Detail: 'Start producing in your first 5 minutes. Build real tracks.',

      problem2Title: 'Information Overload',
      problem2Description: 'Most Courses',
      problem2Detail: '500 YouTube videos later, you\'re more confused than when you started.',
      solution2Description: 'Music Producer Lab',
      solution2Detail: 'Clear path from beginner to pro. One step at a time.',

      problem3Title: 'No Feedback Loop',
      problem3Description: 'Most Courses',
      problem3Detail: 'Make mistakes for months with no one to guide you.',
      solution3Description: 'Music Producer Lab',
      solution3Detail: 'Instant feedback on every decision. Learn what works and why.',

      // Lesson chrome
      lessonHeroBadgeFree: 'Free lesson',
      lessonHeroMetricFocus: 'Focus',
      lessonHeroMetricStructure: 'Structure',
      lessonHeroMetricTime: 'Time',
      lessonHeroLearn: "You'll learn",
      lessonHeroGoal: 'Goal',
      lessonHeroCreate: "You'll create",
      lessonExerciseLabel: 'Exercise',
      lessonWhatToDo: 'What to do:',
      lessonTipLabel: 'Tip:',
      lessonTargetPattern: 'Target Pattern:',
      lessonSequencerLabel: 'Interactive Sequencer',
      lessonControlPlay: 'Play',
      lessonControlStop: 'Stop',
      lessonControlClear: 'Clear',
      lessonControlCheck: 'Check Exercise',
      lessonUnlockMessage: 'Complete the exercise to unlock the next lesson.',
      lessonNextLesson: 'Next Lesson →',
      lessonNextTooltip: 'Complete exercise to unlock',

      // Homepage - Deep Dive Section
      whyPassiveTitle: 'Passive Tutorials',
      whyPassiveCopy: "You watch hours of videos, take notes, but when you open your DAW... you don't know where to start. <strong>Watching isn't learning.</strong> Your brain needs to do, not just see.",
      whyTheoryTitle: 'Too Much Theory',
      whyTheoryCopy: 'Courses start with weeks of music theory, frequencies, compressors... Before you make music you have to study like an audio engineer. <strong>Result? Frustration and giving up.</strong>',
      whyGuidedTitle: 'No Guided Practice',
      whyGuidedCopy: 'They give you the info but leave you alone. "Now go practice"—but practice <em>what</em>? <strong>Without structured guidance, you just spin in circles.</strong>',
      whyTimeTitle: 'Too Much Time Wasted',
      whyTimeCopy: "Months (or years) collecting random tutorials, testing plugins, hunting for \"the secret.\" <strong>You don't need more information—you need a clear path.</strong>",
      truthTitle: 'The truth? <span class="text-gradient">You\'re not missing talent.</span>',
      truthCopy: "You're missing a method that guides you step by step, where <strong>you make music from minute one</strong>, where every exercise has a purpose, where <strong>you finish what you start</strong>.",

      // Homepage - Lab Steps
      step2Title: 'Follow the Step-by-Step Guide',
      step2Copy: 'The lab tells you <strong>exactly what to do</strong>: "Add the kick on beat 1", "Bring the volume to -6dB", "Open the filter up to 2kHz". Every instruction is clear, tested, designed to <strong>teach you while you do</strong>.',
      step2Bullet1: 'Precise directions, zero ambiguity',
      step2Bullet2: 'Explanations of the "why" behind every choice',
      step2Bullet3: 'Hear the result instantly',
      step3Title: 'Apply It in Your DAW',
      step3Copy: 'Just finished a beat/mix/arrangement in the lab? <strong>Great.</strong> Now open Ableton, FL Studio, Logic (any DAW) and <strong>recreate what you learned</strong>. The skills are universal—they work everywhere.',
      step3Bullet1: 'Concepts transfer to any software',
      step3Bullet2: 'Muscle memory built through practice',
      step3Bullet3: 'From zero to full track in days, not months',

      // Homepage - Learning Path
      learningPathTitle: 'Your Learning Path',
      learningPathSubtitle: 'Progress from complete beginner to confident producer in structured modules.',

      module1Title: 'Foundation',
      module1Subtitle: 'Drums & Rhythm',
      module1Description: 'Build solid drum patterns and understand rhythm fundamentals.',
      module1Lessons: '20 Lessons',

      module2Title: 'Structure',
      module2Subtitle: 'Arrangement',
      module2Description: 'Learn how to structure full tracks that keep listeners engaged.',
      module2Lessons: '20 Lessons',

      module3Title: 'Sonic Identity',
      module3Subtitle: 'Sound Design',
      module3Description: 'Craft unique sounds and develop your signature sonic palette.',
      module3Lessons: '15 Lessons',

      module4Title: 'Professional Polish',
      module4Subtitle: 'Mixing & Mastering',
      module4Description: 'Make your tracks sound professional and release-ready.',
      module4Lessons: '35 Lessons',

      // Homepage - Who Is This For
      whoForTitle: 'Who Is This For?',

      audience1Title: 'Complete Beginners',
      audience1Description: 'Never touched a DAW? Perfect. Start from zero with no assumptions.',

      audience2Title: 'Tutorial Survivors',
      audience2Description: 'Watched 1000 YouTube videos? Time to actually apply what you learned.',

      audience3Title: 'Bedroom Producers',
      audience3Description: 'Making beats but they don\'t sound professional? Level up your skills.',

      audience4Title: 'Musicians Expanding',
      audience4Description: 'Great at instruments but new to production? Fast-track to producing.',

      // Homepage - Who Section
      whoBadge: "Who It's For",
      whoHeading: 'Music Producer Lab is for you if...',
      whoIntro: "Doesn't matter if you're brand new or already experimenting—if you want to <strong>make music</strong> instead of just study it, you're in the right place.",
      whoBeginnersTitle: 'Complete Beginners',
      whoBeginnersCopy: "Never opened a DAW? <strong>Perfect.</strong> Our labs start from zero. You learn by doing, without confusing jargon.",
      whoBeginnersCTA: '→ First track in <30 minutes',
      whoSelfTaughtTitle: 'Frustrated Self-Learners',
      whoSelfTaughtCopy: 'Watched 100+ tutorials but can\'t finish a beat? You need <strong>structure, not more random content.</strong> The labs give you a clear path.',
      whoSelfTaughtCTA: '→ Finally finish what you start',
      whoIntermediateTitle: 'Intermediate Producers',
      whoIntermediateCopy: 'You can make beats but want to <strong>refine mixing, mastering, arrangement?</strong> Advanced labs teach pro techniques with immediate examples.',
      whoIntermediateCTA: '→ Take your tracks to a professional level',
      whoNotHeading: '⚠️ Music Producer Lab is NOT for you if...',
      whoNotVideo: 'You only want to watch videos—labs require active interaction. If you\'re not willing to get hands-on, this isn\'t for you.',
      whoNotShortcut: 'You\'re looking for magic shortcuts—there is no "pro secret." Guided practice is required. Labs make it efficient, but you still have to do it.',
      whoCtaTitle: 'Ready to move from theory to practice?',
      whoCtaCopy: 'Pick your first lab and start producing real music. <strong>Free, no registration.</strong>',
      whoCtaButton: 'Start Labs Now',

      // Homepage - Proof Section
      proofTitle: 'This Actually Works',
      proofSubtitle: 'See what students build in their first week',

      proofCard1Quote: 'First time I\'ve actually finished a track. The step-by-step labs made it impossible to get stuck.',
      proofCard1Author: 'Alex, Week 1',
      proofCard1Track: 'Completed: First Full Beat',

      proofCard2Quote: 'I\'ve watched hundreds of tutorials. This is the first time I understood WHY instead of just HOW.',
      proofCard2Author: 'Jordan, Week 2',
      proofCard2Track: 'Completed: 8 Drum Patterns',

      proofCard3Quote: 'Thought mixing was magic. Now I know it\'s just a checklist. My tracks already sound cleaner.',
      proofCard3Author: 'Morgan, Week 3',
      proofCard3Track: 'Completed: First Mix',

      // Homepage - Pricing Section
      pricingTitle: 'Simple, Transparent Pricing',
      pricingSubtitle: 'Start free. Upgrade when you\'re ready.',

      freePlanTitle: 'Free',
      freePlanPrice: '$0',
      freePlanPeriod: 'forever',
      freePlanFeature1: '20 Foundation Lessons',
      freePlanFeature2: 'Drum Programming Labs',
      freePlanFeature3: 'Basic Arrangement Concepts',
      freePlanFeature4: 'Community Forum Access',
      freePlanCta: 'Start Free',

      proPlanTitle: 'Pro',
      proPlanPrice: '$29',
      proPlanPeriod: 'per month',
      proPlanBadge: 'Most Popular',
      proPlanFeature1: 'All 90+ Lessons',
      proPlanFeature2: 'Sound Design Labs',
      proPlanFeature3: 'Mixing & Mastering',
      proPlanFeature4: 'Exclusive Sample Packs',
      proPlanFeature5: 'Priority Support',
      proPlanFeature6: 'New Lessons Monthly',
      proPlanCta: 'Go Pro',

      lifetimePlanTitle: 'Lifetime',
      lifetimePlanPrice: '$299',
      lifetimePlanPeriod: 'one-time',
      lifetimePlanBadge: 'Best Value',
      lifetimePlanFeature1: 'Everything in Pro',
      lifetimePlanFeature2: 'Lifetime Access',
      lifetimePlanFeature3: 'All Future Content',
      lifetimePlanFeature4: '50+ Sample Packs',
      lifetimePlanFeature5: 'Private Discord',
      lifetimePlanFeature6: '1-on-1 Office Hours',
      lifetimePlanCta: 'Get Lifetime Access',

      moneyBackGuarantee: '30-day money-back guarantee. No questions asked.',

      // Homepage - FAQ Section
      faqTitle: 'Frequently Asked Questions',

      faq1Question: 'Do I need any music production experience?',
      faq1Answer: 'No! Our labs start from absolute zero. If you can click a mouse, you can start producing.',

      faq2Question: 'What software do I need?',
      faq2Answer: 'Nothing to start! The first 20 lessons run entirely in your browser. Later lessons teach concepts that work in any DAW (Ableton, FL Studio, Logic, etc.).',

      faq3Question: 'How is this different from YouTube tutorials?',
      faq3Answer: 'YouTube shows you what to do. We make you do it. You learn by building, not watching. Plus, you get structured progression instead of random videos.',

      faq4Question: 'How long does it take to complete?',
      faq4Answer: 'At 30 minutes per day, most students complete the foundation in 2-3 weeks. The full curriculum takes 2-3 months. But you can go at your own pace.',

      faq5Question: 'Can I cancel anytime?',
      faq5Answer: 'Yes. Cancel anytime. No hard feelings. You keep access until the end of your billing period.',

      faq6Question: 'Do you offer refunds?',
      faq6Answer: 'Yes. 30-day money-back guarantee. Try it risk-free.',

      // Homepage - Final CTA
      finalCtaTitle: 'Stop Watching. Start Producing.',
      finalCtaSubtitle: 'Join thousands of students who chose to build instead of watch.',
      finalCtaButton: 'Start Free Labs Now',
      finalCtaNote: 'No credit card required',

      // Footer
      footerTagline: 'Learn music production by actually producing.',
      footerProduct: 'Product',
      footerLabs: 'Labs',
      footerCurriculum: 'Curriculum',
      footerPricing: 'Pricing',
      footerCompany: 'Company',
      footerAbout: 'About',
      footerContact: 'Contact',
      footerBlog: 'Blog',
      footerLegal: 'Legal',
      footerPrivacy: 'Privacy',
      footerTerms: 'Terms',
      footerCopyright: '© 2024 Music Producer Lab. All rights reserved.',

      // Labs Page
      labsPageTitle: 'Interactive Music Production Labs',
      labsPageSubtitle: 'Choose your path. Build real skills.',
      labsHeroBadge: 'All Labs',
      labsHeroTitle: 'Interactive Production Labs',
      labsHeroSubtitle: 'Choose a module and start learning. Each lab is designed to teach you a specific skill through hands-on practice. No fluff, just production.',

      categoryDrums: 'Drums & Rhythm',
      categoryDrumsDescription: 'Master drum programming and rhythm fundamentals',
      categoryDrumsLessons: '20 lessons',

      categoryArrangement: 'Arrangement',
      categoryArrangementDescription: 'Learn to structure complete tracks',
      categoryArrangementLessons: '20 lessons',

      categorySoundDesign: 'Sound Design',
      categorySoundDesignDescription: 'Craft unique sounds and textures',
      categorySoundDesignLessons: '15 lessons',

      categoryMixing: 'Mixing',
      categoryMixingDescription: 'Balance and polish your productions',
      categoryMixingLessons: '20 lessons',

      categoryMastering: 'Mastering',
      categoryMasteringDescription: 'Finalize tracks for release',
      categoryMasteringLessons: '15 lessons',

      // About Page
      aboutHeroBadge: 'Our Story',
      aboutHeroTitle: 'About Music Producer Lab',
      aboutHeroSubtitle: 'We believe everyone should have the opportunity to create music. That\'s why we\'re building the most accessible, hands-on music production education platform.',

      aboutMissionTitle: 'Our Mission',
      aboutMissionPara1: 'Music Producer Lab exists to democratize music production education. We believe that the traditional approach to learning music production - watching endless hours of video tutorials - isn\'t working for most people.',
      aboutMissionPara2: 'That\'s why we\'ve built an entirely different approach: interactive labs where you learn by doing. Instead of watching someone else produce, you build the track yourself, step by step, with guidance that explains not just what to do, but why each decision matters.',
      aboutMissionPara3: 'Our goal is to help you go from "I don\'t know where to start" to confidently finishing release-ready tracks. We focus on transferable skills that work in any DAW, so you\'re never locked into a specific workflow.',

      aboutValuesTitle: 'What We Believe',
      aboutValue1Title: 'Learning by Doing',
      aboutValue1Desc: 'You don\'t learn to swim by watching videos. Music production is the same. Our labs put you in the driver\'s seat from minute one.',
      aboutValue2Title: 'DAW-Agnostic',
      aboutValue2Desc: 'We teach production fundamentals, not software tricks. Everything you learn here works in Ableton, Logic, FL Studio, or any DAW.',
      aboutValue3Title: 'Accessible to All',
      aboutValue3Desc: 'Music education shouldn\'t be locked behind expensive courses. Our core content is free and always will be.',
      aboutValue4Title: 'Progressive Learning',
      aboutValue4Desc: 'Start simple, build complexity. Each lab builds on the last, so you never feel overwhelmed or lost.',

      aboutApproachTitle: 'Our Approach',
      aboutApproachPara1: 'Every lab at Music Producer Lab follows a simple philosophy: you do the work. We don\'t show you a finished product and expect you to recreate it. Instead, we guide you through the creative process, one decision at a time.',
      aboutApproachPara2: 'Each lab is designed to teach a specific skill. We keep them short and focused - usually 10-20 minutes - so you can fit learning into your day without burning out. And because every lab ends with you having created something, you get the satisfaction of immediate results.',
      aboutApproachPara3: 'We also believe in explaining the "why" behind every technique. It\'s not enough to know that you should put a high-pass filter on your reverb return. You need to understand why that helps your mix so you can make those decisions yourself in your own productions.',

      aboutCreditsTitle: 'Credits & Thanks',
      aboutCreditsPara: 'Music Producer Lab is built by a small team of passionate producers and educators. We\'re grateful to everyone who has contributed to making this project possible.',
      aboutCreditsDesign: 'Design System',
      aboutCreditsDesignDesc: 'Custom CSS with modern design principles',
      aboutCreditsTypography: 'Typography',
      aboutCreditsTypographyDesc: 'Inter, Orbitron, JetBrains Mono',
      aboutCreditsIcons: 'Icons',
      aboutCreditsIconsDesc: 'Custom SVG icons',
      aboutCreditsHosting: 'Hosting',
      aboutCreditsHostingDesc: 'Vercel',

      aboutContactTitle: 'Want to get in touch?',
      aboutContactPara: 'We\'d love to hear from you. Whether you have feedback, questions, or just want to say hi, reach out anytime.',
      aboutContactButton: 'Contact Us',

      // Contact Page
      contactHeroBadge: 'Get in Touch',
      contactHeroTitle: 'Contact Us',
      contactHeroSubtitle: 'Have a question, feedback, or just want to say hi? We\'d love to hear from you.',

      contactInfoTitle: 'Other ways to reach us',
      contactInfoSubtitle: 'Prefer a different channel? Here are some other ways to get in touch with the Music Producer Lab team.',
      contactEmail: 'Email',
      contactTwitter: 'Twitter / X',
      contactTwitterHandle: '@MusicProducerLab',
      contactDiscord: 'Discord',
      contactDiscordText: 'Join our community',

      contactFormTitle: 'Send us a message',
      contactFormSubtitle: 'Fill out the form below and we\'ll get back to you as soon as possible.',
      contactNameLabel: 'Name',
      contactNamePlaceholder: 'Your name',
      contactEmailLabel: 'Email',
      contactEmailPlaceholder: 'you@example.com',
      contactSubjectLabel: 'Subject',
      contactSubjectDefault: 'Select a topic...',
      contactSubjectGeneral: 'General Question',
      contactSubjectFeedback: 'Feedback',
      contactSubjectBug: 'Bug Report',
      contactSubjectFeature: 'Feature Request',
      contactSubjectPartnership: 'Partnership',
      contactSubjectOther: 'Other',
      contactMessageLabel: 'Message',
      contactMessagePlaceholder: 'How can we help you?',
      contactSendButton: 'Send Message',
      contactFormNote: 'We typically respond within 24-48 hours.',

      contactSuccessTitle: 'Message Sent!',
      contactSuccessMessage: 'Thanks for reaching out. We\'ll get back to you soon.',

      // Progress Page
      progressPageTitle: 'Your Progress',
      progressPageSubtitle: 'Track your learning journey',
      progressHeroTitle: 'Your Progress',
      progressHeroSubtitle: 'Track your journey from beginner to pro. Every lab completed brings you closer to mastery.',

      progressStatsLabsCompleted: 'Labs Completed',
      progressStatsOverallProgress: 'Overall Progress',
      progressStatsCurrentStreak: 'Current Streak',
      progressStatsTotalTime: 'Total Time',

      progressCategoryTitle: 'Progress by Category',

      progressAchievementsTitle: 'Achievements',
      progressAchievementFirstBeat: 'First Beat',
      progressAchievementFirstBeatDesc: 'Complete your first lab',
      progressAchievementGettingStarted: 'Getting Started',
      progressAchievementGettingStartedDesc: 'Complete 5 labs',
      progressAchievementCommitted: 'Committed',
      progressAchievementCommittedDesc: 'Complete 10 labs',
      progressAchievementDedicated: 'Dedicated Producer',
      progressAchievementDedicatedDesc: 'Complete 20 labs',
      progressAchievementMaster: 'Lab Master',
      progressAchievementMasterDesc: 'Complete all labs',
      progressAchievementWeekStreak: 'Week Warrior',
      progressAchievementWeekStreakDesc: 'Practice 7 days in a row',
      progressAchievementMonthStreak: 'Monthly Master',
      progressAchievementMonthStreakDesc: 'Practice 30 days in a row',
      progressAchievementDrumsComplete: 'Rhythm Master',
      progressAchievementDrumsCompleteDesc: 'Complete all Drums labs',
      progressAchievementSpeedDemon: 'Speed Demon',
      progressAchievementSpeedDemonDesc: 'Complete 3 labs in one day',

      progressManageTitle: 'Manage Your Progress',
      progressManageDescription: 'Export your progress to back it up or transfer to another device. Import to restore or merge progress.',
      progressExportButton: 'Export Progress',
      progressImportButton: 'Import Progress',
      progressResetButton: 'Reset Progress',

      progressResetConfirm1: 'Are you sure you want to reset ALL progress? This cannot be undone!',
      progressResetConfirm2: 'This will delete all your completed labs, achievements, and stats. Are you absolutely sure?',
      progressExportSuccess: 'Progress exported to',
      progressImportSuccess: 'Progress imported successfully!',
      progressImportError: 'Failed to import progress:',

      progressCategoryDrums: '🥁 Drums & Rhythm',
      progressCategoryArrangement: '🎹 Arrangement',
      progressCategorySoundDesign: '🎛️ Sound Design',
      progressCategoryMixing: '🎚️ Mixing',
      progressCategoryVocals: '🎤 Vocals',
      progressCategoryMastering: '✨ Mastering',

      progressDays: 'days',
      progressUnlocked: 'Unlocked',

      progressOverview: 'Overview',
      progressCompleted: 'Completed',
      progressInProgress: 'In Progress',
      progressNotStarted: 'Not Started',
      progressTotal: 'Total Lessons',

      // Download Page
      downloadPageTitle: 'Free Downloads',
      downloadPageSubtitle: 'Sample packs, templates, and resources to boost your production.',
      downloadHeroBadge: '100% Free',
      downloadHeroTitle: 'Free Downloads',
      downloadHeroSubtitle: 'Sample packs, presets, project files, and guides to help you practice what you learn in the labs. All free, no signup required.',

      downloadCategorySamplePacks: 'Sample Packs',
      downloadCategoryGuides: 'Guides & Cheatsheets',

      downloadDrumKitCategory: 'Drums',
      downloadDrumKitTitle: 'MPL Drum Starter Kit',
      downloadDrumKitDescription: 'Essential drum samples to practice with the rhythm labs. Kicks, snares, hi-hats, and percussion.',
      downloadDrumKitSamples: '48 samples',
      downloadDrumKitSize: '12 MB',
      downloadDrumKitRoyalty: 'Royalty-free',

      downloadOneShotsCategory: 'Synth',
      downloadOneShotsTitle: 'Essential One-Shots',
      downloadOneShotsDescription: 'Synth stabs, bass hits, and melodic one-shots perfect for arrangement and sound design practice.',
      downloadOneShotsSamples: '32 samples',
      downloadOneShotsSize: '8 MB',

      downloadFxPackCategory: 'FX',
      downloadFxPackTitle: 'Transition FX Pack',
      downloadFxPackDescription: 'Risers, downlifters, impacts, and sweeps for your arrangements.',
      downloadFxPackSamples: '64 samples',
      downloadFxPackComingSoon: 'Coming Q1 2026',

      downloadDrumCheatCategory: 'PDF Guide',
      downloadDrumCheatTitle: 'Drum Pattern Cheatsheet',
      downloadDrumCheatDescription: 'Common drum patterns for house, techno, hip-hop, and more. Print it out and keep it by your workstation.',
      downloadDrumCheatFormat: 'PDF',
      downloadDrumCheatPages: '2 pages',

      downloadEqGuideCategory: 'PDF Guide',
      downloadEqGuideTitle: 'EQ Frequency Guide',
      downloadEqGuideDescription: 'Reference guide for EQ frequencies. Know where to cut and boost for different instruments.',
      downloadEqGuidePages: '1 page',

      downloadStructureCategory: 'PDF Guide',
      downloadStructureTitle: 'Song Structure Templates',
      downloadStructureDescription: 'Arrangement templates for different genres and track lengths.',
      downloadStructureFormat: 'PDF',

      downloadNewsletterTitle: 'Get notified of new downloads',
      downloadNewsletterDescription: 'We release new free resources regularly. Subscribe to be the first to know when new sample packs and guides drop.',
      downloadNewsletterPlaceholder: 'your@email.com',
      downloadNewsletterButton: 'Subscribe',
      downloadNewsletterSuccess: 'Thanks for subscribing!',

      downloadButtonFree: 'Download Free',
      downloadButtonComingSoon: 'Coming Soon',
      downloadComingSoonBadge: 'Coming Soon',

      downloadSamplePacks: 'Sample Packs',
      downloadTemplates: 'Project Templates',
      downloadGuides: 'Production Guides',

      // Explore Page
      explorePageTitle: 'Explore Music Production',
      explorePageSubtitle: 'Discover concepts, techniques, and tools.',
      exploreHeroBadge: 'Everything in One Place',
      exploreHeroTitle: 'Explore Music Producer Lab',
      exploreHeroSubtitle: 'Browse all content, labs, resources, and learning paths. Find exactly what you need to level up your production skills.',
      exploreSearchPlaceholder: 'Search labs, lessons, resources...',

      exploreCategoryAll: 'All Content',
      exploreCategoryDrums: 'Drums',
      exploreCategoryArrangement: 'Arrangement',
      exploreCategorySoundDesign: 'Sound Design',
      exploreCategoryMixing: 'Mixing',
      exploreCategoryMastering: 'Mastering',
      exploreCategoryResources: 'Resources',

      exploreTopics: 'Topics',
      exploreTechniques: 'Techniques',
      exploreTools: 'Tools',

      // Lesson Pages - Common Elements
      lessonPrevious: 'Previous Lesson',
      lessonNext: 'Next Lesson',
      lessonCompleted: 'Mark as Completed',
      lessonReset: 'Reset',
      lessonObjectives: 'Learning Objectives',
      lessonInstructions: 'Instructions',
      lessonExercise: 'Exercise',
      lessonTips: 'Pro Tips',
      lessonSummary: 'Summary',
      lessonResources: 'Resources',

      // Sequencer Controls
      sequencerPlay: 'Play',
      sequencerStop: 'Stop',
      sequencerClear: 'Clear',
      sequencerTempo: 'Tempo',
      sequencerSwing: 'Swing',
      sequencerSteps: 'Steps',

      // Common Actions
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      tryItNow: 'Try It Now',
      readMore: 'Read More',
      showMore: 'Show More',
      showLess: 'Show Less',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',

      // Alerts & Messages
      saveProgress: 'Progress saved!',
      progressSaveError: 'Error saving progress',
      lessonComplete: 'Lesson completed!',
      allLessonsComplete: 'All lessons completed! Great work!',

      // Homepage - Results Section
      resultsBadge: 'Tangible Results',
      resultsTitle: "What you'll get with Music Producer Lab",
      resultsSubtitle: "No vague promises—here's exactly what you'll be able to do after our labs.",
      resultsWeek1Title: 'After 1 Week',
      resultsWeek1Bullet1: 'You completed your <strong>first working beat</strong> (kick, snare, hi-hats, bass)',
      resultsWeek1Bullet2: "You understand <strong>how a DAW works</strong>—it's no longer intimidating",
      resultsWeek1Bullet3: 'You can <strong>count bars</strong> and program on-grid rhythms',
      resultsMonth1Title: 'After 1 Month',
      resultsMonth1Bullet1: "You've produced <strong>5-10 full tracks</strong> (intro, build, drop, outro)",
      resultsMonth1Bullet2: 'You can <strong>mix core elements</strong> (volume, pan, EQ, compression)',
      resultsMonth1Bullet3: 'You have a <strong>listenable portfolio</strong> to share with friends/social',
      resultsMonth3Title: 'After 3 Months',
      resultsMonth3Bullet1: 'You produce <strong>release-ready tracks</strong> (ready for Spotify/SoundCloud)',
      resultsMonth3Bullet2: 'You command <strong>foundational mixing and mastering</strong>—professional sound',
      resultsMonth3Bullet3: 'You have <strong>a recognizable style</strong> and efficient workflow',
      resultsBonusTitle: 'Bonus Skills',
      resultsBonusBullet1: '<strong>Trained ear</strong>—you recognize frequencies and dynamics',
      resultsBonusBullet2: '<strong>Personal, organized sound library</strong>',
      resultsBonusBullet3: '<strong>Creative confidence</strong>—no more fear of the blank page',
      resultsGuaranteeTitle: '🎯 <span class="text-gradient">Simple guarantee</span>: complete the labs, make the tracks.',
      resultsGuaranteeCopy: "It's not magic—it's method. Every lab is tested, every step works. <strong>You just follow the instructions and practice.</strong> The result? Real tracks, real skills, a growing portfolio.",

      // Homepage - FAQ (Landing)
      faqBadgeLanding: 'FAQ',
      faqHeadingLanding: 'Frequently Asked Questions',
      faqIntroLanding: 'Everything you need to know before starting.',
      faqCostQuestion: '💰 How much does Music Producer Lab cost?',
      faqCostAnswer: 'The core labs are completely free. No credit card, no registration. Open your browser and start. Some advanced labs require a subscription, but you already have 20+ free labs to begin.',
      faqDawQuestion: '🎹 Do I need a specific DAW?',
      faqDawAnswer: 'No. The labs run in the browser—no installation needed. When you apply the skills in your DAW, the concepts work with Ableton, FL Studio, Logic, Bitwig, Reaper, anything. We teach universal principles, not program-specific tricks.',
    },

    it: {
      // Navbar
      home: 'Home',
      labs: 'Laboratori',
      explore: 'Esplora',
      downloads: 'Download',
      about: 'Chi Siamo',
      contact: 'Contatti',
      startLearning: 'Inizia ad Imparare',
      dark: 'Scuro',
      light: 'Chiaro',
      language: 'Lingua',

      // Homepage - Hero Section
      heroEyebrow: 'Produzione Musicale Interattiva',
      heroTitle: 'Impara a produrre musica',
      heroTitleHighlight: 'producendo davvero',
      heroSubtitle: 'Laboratori interattivi dove costruisci tracce reali passo dopo passo.',
      heroSubtitleBold: 'Tu fai il lavoro.',
      heroSubtitlePrefix: 'Niente video. Niente teoria.',
      startFreeLabs: 'Inizia i Lab Gratuiti',
      seeWhatYouBuild: 'Guarda Cosa Costruirai',
      freeBadge: 'Gratis',

      // Homepage - Stats
      stat90Lessons: '90+ Lezioni Interattive',
      stat90Description: 'Esercizi pratici',
      statUnlimitedAccess: 'Accesso Illimitato',
      statUnlimitedDescription: 'Impara al tuo ritmo',
      statRealSkills: '100% Abilità Reali',
      statRealSkillsDescription: 'Niente fuffa, solo produzione',

      // Homepage - Features
      featuresSectionTitle: 'Come Funziona Music Producer Lab',
      featuresSectionSubtitle: 'Impara la produzione come fanno i professionisti: producendo.',

      feature1Title: 'Laboratori Audio Interattivi',
      feature1Description: 'Niente video. Niente visione passiva. Lavori con strumenti audio reali direttamente nel browser.',

      feature2Title: 'Guida Passo-Passo',
      feature2Description: 'Ogni lab scompone tecniche di produzione complesse in passaggi realizzabili con feedback istantaneo.',

      feature3Title: 'Competenze del Mondo Reale',
      feature3Description: 'Impara tecniche di arrangiamento, mixing, sound design e mastering usate dai professionisti.',

      feature4Title: 'Funziona Con Qualsiasi DAW',
      feature4Description: 'Impara concetti universali applicabili ad Ableton, FL Studio, Logic Pro o qualsiasi software di produzione musicale.',

      // Homepage - Why Different Section
      whyDifferentTitle: 'Perché Music Producer Lab è Diverso',
      whyDifferentSubtitle: 'La maggior parte dei corsi insegna teoria. Noi insegniamo facendo.',

      problem1Title: 'Inferno dei Tutorial',
      problem1Description: 'La Maggior Parte dei Corsi',
      problem1Detail: 'Guardi 20 ore di tutorial, ancora non riesci a fare un beat.',
      solution1Description: 'Music Producer Lab',
      solution1Detail: 'Inizia a produrre nei primi 5 minuti. Costruisci tracce reali.',

      problem2Title: 'Sovraccarico di Informazioni',
      problem2Description: 'La Maggior Parte dei Corsi',
      problem2Detail: '500 video di YouTube dopo, sei più confuso di quando hai iniziato.',
      solution2Description: 'Music Producer Lab',
      solution2Detail: 'Percorso chiaro da principiante a professionista. Un passo alla volta.',

      problem3Title: 'Nessun Feedback',
      problem3Description: 'La Maggior Parte dei Corsi',
      problem3Detail: 'Fai errori per mesi senza nessuno che ti guidi.',
      solution3Description: 'Music Producer Lab',
      solution3Detail: 'Feedback istantaneo su ogni decisione. Impara cosa funziona e perché.',

      // Homepage - Deep Dive Section
      whyPassiveTitle: 'Tutorial Passivi',
      whyPassiveCopy: 'Guardi ore di video, prendi appunti, ma quando apri il tuo DAW... non sai da dove cominciare. <strong>Guardare non è imparare.</strong> Il cervello ha bisogno di fare, non solo di vedere.',
      whyTheoryTitle: 'Troppa Teoria',
      whyTheoryCopy: 'Corsi che iniziano con settimane di teoria musicale, frequenze, compressori... Prima di fare musica devi studiare come un ingegnere del suono. <strong>Risultato? Frustrazione e abbandono.</strong>',
      whyGuidedTitle: 'Nessuna Pratica Guidata',
      whyGuidedCopy: 'Ti danno le informazioni ma ti lasciano solo. "Ora vai e pratica" - ma pratica <em>cosa</em>? <strong>Senza una guida strutturata, finisci a girare in tondo.</strong>',
      whyTimeTitle: 'Troppo Tempo Perso',
      whyTimeCopy: 'Mesi (o anni) a raccogliere tutorial random, provare plugin, cercare "il segreto". <strong>Non hai bisogno di più informazioni - hai bisogno di un percorso chiaro.</strong>',
      truthTitle: 'La verità? <span class="text-gradient">Non ti manca il talento.</span>',
      truthCopy: 'Ti manca un metodo che ti guidi passo-passo, dove <strong>fai musica dal primo minuto</strong>, dove ogni esercizio ha uno scopo preciso, dove <strong>finisci quello che inizi</strong>.',

      // Homepage - Lab Steps
      step2Title: 'Segui la Guida Passo-Passo',
      step2Copy: 'Il lab ti dice <strong>esattamente cosa fare</strong>: "Aggiungi il kick sul beat 1", "Porta il volume a -6dB", "Apri il filtro fino a 2kHz". Ogni istruzione è chiara, testata, progettata per <strong>insegnarti mentre fai</strong>.',
      step2Bullet1: 'Indicazioni precise, zero ambiguità',
      step2Bullet2: 'Spiegazioni del "perché" dietro ogni scelta',
      step2Bullet3: 'Ascolti il risultato istantaneamente',
      step3Title: 'Applica al Tuo DAW',
      step3Copy: 'Hai appena completato un beat/mix/arrangement nel lab? <strong>Perfetto.</strong> Ora apri Ableton, FL Studio, Logic (qualsiasi DAW) e <strong>ricrea quello che hai imparato</strong>. Le skill sono universali - funzionano ovunque.',
      step3Bullet1: 'Concetti trasferibili a qualsiasi software',
      step3Bullet2: 'Muscle memory acquisita con la pratica',
      step3Bullet3: 'Da zero a traccia completa in giorni, non mesi',

      // Homepage - Learning Path
      learningPathTitle: 'Il Tuo Percorso di Apprendimento',
      learningPathSubtitle: 'Progredisci da principiante completo a produttore sicuro in moduli strutturati.',

      module1Title: 'Fondamenta',
      module1Subtitle: 'Batteria & Ritmo',
      module1Description: 'Costruisci pattern di batteria solidi e comprendi i fondamentali del ritmo.',
      module1Lessons: '20 Lezioni',

      module2Title: 'Struttura',
      module2Subtitle: 'Arrangiamento',
      module2Description: 'Impara a strutturare tracce complete che mantengono l\'attenzione degli ascoltatori.',
      module2Lessons: '20 Lezioni',

      module3Title: 'Identità Sonora',
      module3Subtitle: 'Sound Design',
      module3Description: 'Crea suoni unici e sviluppa la tua palette sonora caratteristica.',
      module3Lessons: '15 Lezioni',

      module4Title: 'Rifinitura Professionale',
      module4Subtitle: 'Mixing & Mastering',
      module4Description: 'Rendi le tue tracce professionali e pronte per la pubblicazione.',
      module4Lessons: '35 Lezioni',

      // Homepage - Who Is This For
      whoForTitle: 'Per Chi è Questo?',

      audience1Title: 'Principianti Assoluti',
      audience1Description: 'Mai toccato una DAW? Perfetto. Parti da zero senza presupposti.',

      audience2Title: 'Sopravvissuti ai Tutorial',
      audience2Description: 'Guardato 1000 video di YouTube? È ora di applicare davvero ciò che hai imparato.',

      audience3Title: 'Produttori da Camera',
      audience3Description: 'Fai beat ma non suonano professionali? Migliora le tue abilità.',

      audience4Title: 'Musicisti in Espansione',
      audience4Description: 'Bravo con gli strumenti ma nuovo alla produzione? Corsia veloce per produrre.',

      // Homepage - Who Section
      whoBadge: 'Per Chi È',
      whoHeading: 'Music Producer Lab è per te se...',
      whoIntro: 'Non importa se sei alle prime armi o hai già sperimentato - se vuoi <strong>fare musica</strong> invece che solo studiarla, sei nel posto giusto.',
      whoBeginnersTitle: 'Principianti Assoluti',
      whoBeginnersCopy: 'Non hai mai aperto un DAW? <strong>Perfetto.</strong> I nostri lab partono da zero. Impari facendo, senza gergo tecnico che ti confonde.',
      whoBeginnersCTA: '→ Prima traccia in <30 minuti',
      whoSelfTaughtTitle: 'Autodidatti Frustrati',
      whoSelfTaughtCopy: 'Hai guardato 100+ tutorial ma non riesci a finire un beat? Hai bisogno di <strong>struttura, non più contenuti random.</strong> I lab ti danno un percorso chiaro.',
      whoSelfTaughtCTA: '→ Finalmente completi quello che inizi',
      whoIntermediateTitle: 'Produttori Intermedi',
      whoIntermediateCopy: 'Sai fare beat ma vuoi <strong>affinare mixing, mastering, arrangement?</strong> I lab avanzati ti insegnano le tecniche dei pro, con esempi pratici immediati.',
      whoIntermediateCTA: '→ Porta le tue tracce a livello professionale',
      whoNotHeading: '⚠️ Music Producer Lab <strong>NON</strong> è per te se...',
      whoNotVideo: 'Vuoi solo guardare video - I lab richiedono interazione attiva. Se non sei disposto a mettere le mani sulla tastiera, questo non fa per te.',
      whoNotShortcut: 'Cerchi scorciatoie magiche - Non esiste il "segreto dei pro". Serve pratica guidata. I lab la rendono efficiente, ma devi farla.',
      whoCtaTitle: 'Pronto a passare dalla teoria alla pratica?',
      whoCtaCopy: 'Scegli il tuo primo lab e inizia a produrre musica vera. <strong>Gratis, senza registrazione.</strong>',
      whoCtaButton: 'Inizia Subito i Lab',

      // Homepage - Proof Section
      proofTitle: 'Questo Funziona Davvero',
      proofSubtitle: 'Guarda cosa costruiscono gli studenti nella prima settimana',

      proofCard1Quote: 'Prima volta che finisco davvero una traccia. I lab passo-passo hanno reso impossibile bloccarsi.',
      proofCard1Author: 'Alex, Settimana 1',
      proofCard1Track: 'Completato: Primo Beat Completo',

      proofCard2Quote: 'Ho guardato centinaia di tutorial. Questa è la prima volta che ho capito PERCHÉ invece di solo COME.',
      proofCard2Author: 'Jordan, Settimana 2',
      proofCard2Track: 'Completato: 8 Pattern di Batteria',

      proofCard3Quote: 'Pensavo il mixing fosse magia. Ora so che è solo una checklist. Le mie tracce suonano già più pulite.',
      proofCard3Author: 'Morgan, Settimana 3',
      proofCard3Track: 'Completato: Primo Mix',

      // Homepage - Pricing Section
      pricingTitle: 'Prezzi Semplici e Trasparenti',
      pricingSubtitle: 'Inizia gratis. Aggiorna quando sei pronto.',

      freePlanTitle: 'Gratis',
      freePlanPrice: '€0',
      freePlanPeriod: 'per sempre',
      freePlanFeature1: '20 Lezioni Base',
      freePlanFeature2: 'Laboratori di Programmazione Batteria',
      freePlanFeature3: 'Concetti Base di Arrangiamento',
      freePlanFeature4: 'Accesso al Forum della Community',
      freePlanCta: 'Inizia Gratis',

      proPlanTitle: 'Pro',
      proPlanPrice: '€29',
      proPlanPeriod: 'al mese',
      proPlanBadge: 'Più Popolare',
      proPlanFeature1: 'Tutte le 90+ Lezioni',
      proPlanFeature2: 'Laboratori di Sound Design',
      proPlanFeature3: 'Mixing & Mastering',
      proPlanFeature4: 'Sample Pack Esclusivi',
      proPlanFeature5: 'Supporto Prioritario',
      proPlanFeature6: 'Nuove Lezioni Ogni Mese',
      proPlanCta: 'Diventa Pro',

      lifetimePlanTitle: 'Lifetime',
      lifetimePlanPrice: '€299',
      lifetimePlanPeriod: 'una tantum',
      lifetimePlanBadge: 'Miglior Valore',
      lifetimePlanFeature1: 'Tutto di Pro',
      lifetimePlanFeature2: 'Accesso a Vita',
      lifetimePlanFeature3: 'Tutti i Contenuti Futuri',
      lifetimePlanFeature4: '50+ Sample Pack',
      lifetimePlanFeature5: 'Discord Privato',
      lifetimePlanFeature6: 'Sessioni 1-a-1',
      lifetimePlanCta: 'Ottieni Accesso a Vita',

      moneyBackGuarantee: 'Garanzia soddisfatti o rimborsati di 30 giorni. Senza domande.',

      // Homepage - FAQ Section
      faqTitle: 'Domande Frequenti',

      faq1Question: 'Ho bisogno di esperienza in produzione musicale?',
      faq1Answer: 'No! I nostri lab partono da zero assoluto. Se sai cliccare un mouse, puoi iniziare a produrre.',

      faq2Question: 'Che software mi serve?',
      faq2Answer: 'Niente per iniziare! Le prime 20 lezioni funzionano interamente nel browser. Le lezioni successive insegnano concetti che funzionano in qualsiasi DAW (Ableton, FL Studio, Logic, ecc.).',

      faq3Question: 'Come è diverso dai tutorial di YouTube?',
      faq3Answer: 'YouTube ti mostra cosa fare. Noi ti facciamo farlo. Impari costruendo, non guardando. Inoltre, ottieni una progressione strutturata invece di video casuali.',

      faq4Question: 'Quanto tempo ci vuole per completare?',
      faq4Answer: 'A 30 minuti al giorno, la maggior parte degli studenti completa le basi in 2-3 settimane. Il curriculum completo richiede 2-3 mesi. Ma puoi andare al tuo ritmo.',

      faq5Question: 'Posso cancellare in qualsiasi momento?',
      faq5Answer: 'Sì. Cancella in qualsiasi momento. Nessun rancore. Mantieni l\'accesso fino alla fine del periodo di fatturazione.',

      faq6Question: 'Offrite rimborsi?',
      faq6Answer: 'Sì. Garanzia soddisfatti o rimborsati di 30 giorni. Provalo senza rischi.',

      // Homepage - Final CTA
      finalCtaTitle: 'Smetti di Guardare. Inizia a Produrre.',
      finalCtaSubtitle: 'Unisciti a migliaia di studenti che hanno scelto di costruire invece di guardare.',
      finalCtaButton: 'Inizia i Lab Gratuiti Ora',
      finalCtaNote: 'Nessuna carta di credito richiesta',

      // Footer
      footerTagline: 'Impara la produzione musicale producendo davvero.',
      footerProduct: 'Prodotto',
      footerLabs: 'Laboratori',
      footerCurriculum: 'Programma',
      footerPricing: 'Prezzi',
      footerCompany: 'Azienda',
      footerAbout: 'Chi Siamo',
      footerContact: 'Contatti',
      footerBlog: 'Blog',
      footerLegal: 'Legale',
      footerPrivacy: 'Privacy',
      footerTerms: 'Termini',
      footerCopyright: '© 2024 Music Producer Lab. Tutti i diritti riservati.',

      // Labs Page
      labsPageTitle: 'Laboratori Interattivi di Produzione Musicale',
      labsPageSubtitle: 'Scegli il tuo percorso. Costruisci abilità reali.',
      labsHeroBadge: 'Tutti i Lab',
      labsHeroTitle: 'Laboratori di Produzione Interattivi',
      labsHeroSubtitle: 'Scegli un modulo e inizia ad imparare. Ogni lab è progettato per insegnarti una specifica abilità attraverso la pratica diretta. Niente fuffa, solo produzione.',

      categoryDrums: 'Batteria & Ritmo',
      categoryDrumsDescription: 'Padroneggia la programmazione della batteria e i fondamentali del ritmo',
      categoryDrumsLessons: '20 lezioni',

      categoryArrangement: 'Arrangiamento',
      categoryArrangementDescription: 'Impara a strutturare tracce complete',
      categoryArrangementLessons: '20 lezioni',

      categorySoundDesign: 'Sound Design',
      categorySoundDesignDescription: 'Crea suoni e texture uniche',
      categorySoundDesignLessons: '15 lezioni',

      categoryMixing: 'Mixing',
      categoryMixingDescription: 'Bilancia e rifinisci le tue produzioni',
      categoryMixingLessons: '20 lezioni',

      categoryMastering: 'Mastering',
      categoryMasteringDescription: 'Finalizza le tracce per la pubblicazione',
      categoryMasteringLessons: '15 lezioni',

      // About Page
      aboutHeroBadge: 'La Nostra Storia',
      aboutHeroTitle: 'Chi Siamo',
      aboutHeroSubtitle: 'Crediamo che tutti dovrebbero avere l\'opportunità di creare musica. Per questo stiamo costruendo la piattaforma di educazione alla produzione musicale più accessibile e pratica.',

      aboutMissionTitle: 'La Nostra Missione',
      aboutMissionPara1: 'Music Producer Lab esiste per democratizzare l\'educazione alla produzione musicale. Crediamo che l\'approccio tradizionale all\'apprendimento della produzione musicale - guardare ore infinite di video tutorial - non funzioni per la maggior parte delle persone.',
      aboutMissionPara2: 'Per questo abbiamo costruito un approccio completamente diverso: laboratori interattivi dove impari facendo. Invece di guardare qualcun altro produrre, costruisci la traccia tu stesso, passo dopo passo, con una guida che spiega non solo cosa fare, ma perché ogni decisione è importante.',
      aboutMissionPara3: 'Il nostro obiettivo è aiutarti a passare da "non so da dove iniziare" a completare con sicurezza tracce pronte per la pubblicazione. Ci concentriamo su competenze trasferibili che funzionano in qualsiasi DAW, così non sei mai vincolato a un workflow specifico.',

      aboutValuesTitle: 'In Cosa Crediamo',
      aboutValue1Title: 'Imparare Facendo',
      aboutValue1Desc: 'Non impari a nuotare guardando video. La produzione musicale è la stessa cosa. I nostri laboratori ti mettono al posto di guida dal primo minuto.',
      aboutValue2Title: 'DAW-Agnostico',
      aboutValue2Desc: 'Insegniamo i fondamentali della produzione, non trucchi software. Tutto ciò che impari qui funziona in Ableton, Logic, FL Studio o qualsiasi DAW.',
      aboutValue3Title: 'Accessibile a Tutti',
      aboutValue3Desc: 'L\'educazione musicale non dovrebbe essere bloccata dietro corsi costosi. Il nostro contenuto principale è gratuito e lo sarà sempre.',
      aboutValue4Title: 'Apprendimento Progressivo',
      aboutValue4Desc: 'Inizia semplice, costruisci complessità. Ogni laboratorio si basa sul precedente, così non ti senti mai sopraffatto o perso.',

      aboutApproachTitle: 'Il Nostro Approccio',
      aboutApproachPara1: 'Ogni laboratorio di Music Producer Lab segue una filosofia semplice: sei tu a fare il lavoro. Non ti mostriamo un prodotto finito aspettandoci che tu lo ricrei. Invece, ti guidiamo attraverso il processo creativo, una decisione alla volta.',
      aboutApproachPara2: 'Ogni laboratorio è progettato per insegnare una competenza specifica. Li manteniamo brevi e focalizzati - di solito 10-20 minuti - così puoi inserire l\'apprendimento nella tua giornata senza bruciarti. E poiché ogni laboratorio finisce con te che hai creato qualcosa, ottieni la soddisfazione di risultati immediati.',
      aboutApproachPara3: 'Crediamo anche nello spiegare il "perché" dietro ogni tecnica. Non basta sapere che dovresti mettere un filtro high-pass sul return del riverbero. Devi capire perché questo aiuta il tuo mix così puoi prendere quelle decisioni da solo nelle tue produzioni.',

      aboutCreditsTitle: 'Riconoscimenti e Ringraziamenti',
      aboutCreditsPara: 'Music Producer Lab è costruito da un piccolo team di produttori ed educatori appassionati. Siamo grati a tutti coloro che hanno contribuito a rendere possibile questo progetto.',
      aboutCreditsDesign: 'Design System',
      aboutCreditsDesignDesc: 'CSS personalizzato con principi di design moderno',
      aboutCreditsTypography: 'Tipografia',
      aboutCreditsTypographyDesc: 'Inter, Orbitron, JetBrains Mono',
      aboutCreditsIcons: 'Icone',
      aboutCreditsIconsDesc: 'Icone SVG personalizzate',
      aboutCreditsHosting: 'Hosting',
      aboutCreditsHostingDesc: 'Vercel',

      aboutContactTitle: 'Vuoi metterti in contatto?',
      aboutContactPara: 'Ci piacerebbe sentirti. Che tu abbia feedback, domande, o voglia solo salutare, contattaci in qualsiasi momento.',
      aboutContactButton: 'Contattaci',

      // Contact Page
      contactHeroBadge: 'Contattaci',
      contactHeroTitle: 'Contattaci',
      contactHeroSubtitle: 'Hai una domanda, un feedback, o vuoi solo salutare? Ci piacerebbe sentirti.',

      contactInfoTitle: 'Altri modi per contattarci',
      contactInfoSubtitle: 'Preferisci un canale diverso? Ecco altri modi per metterti in contatto con il team di Music Producer Lab.',
      contactEmail: 'Email',
      contactTwitter: 'Twitter / X',
      contactTwitterHandle: '@MusicProducerLab',
      contactDiscord: 'Discord',
      contactDiscordText: 'Unisciti alla community',

      contactFormTitle: 'Inviaci un messaggio',
      contactFormSubtitle: 'Compila il modulo qui sotto e ti risponderemo il prima possibile.',
      contactNameLabel: 'Nome',
      contactNamePlaceholder: 'Il tuo nome',
      contactEmailLabel: 'Email',
      contactEmailPlaceholder: 'tu@esempio.com',
      contactSubjectLabel: 'Oggetto',
      contactSubjectDefault: 'Seleziona un argomento...',
      contactSubjectGeneral: 'Domanda Generale',
      contactSubjectFeedback: 'Feedback',
      contactSubjectBug: 'Segnalazione Bug',
      contactSubjectFeature: 'Richiesta Funzionalità',
      contactSubjectPartnership: 'Partnership',
      contactSubjectOther: 'Altro',
      contactMessageLabel: 'Messaggio',
      contactMessagePlaceholder: 'Come possiamo aiutarti?',
      contactSendButton: 'Invia Messaggio',
      contactFormNote: 'Rispondiamo tipicamente entro 24-48 ore.',

      contactSuccessTitle: 'Messaggio Inviato!',
      contactSuccessMessage: 'Grazie per averci contattato. Ti risponderemo presto.',

      // Progress Page
      progressPageTitle: 'I Tuoi Progressi',
      progressPageSubtitle: 'Traccia il tuo percorso di apprendimento',
      progressHeroTitle: 'I Tuoi Progressi',
      progressHeroSubtitle: 'Traccia il tuo percorso da principiante a professionista. Ogni lab completato ti avvicina alla padronanza.',

      progressStatsLabsCompleted: 'Lab Completati',
      progressStatsOverallProgress: 'Progresso Complessivo',
      progressStatsCurrentStreak: 'Serie Attuale',
      progressStatsTotalTime: 'Tempo Totale',

      progressCategoryTitle: 'Progresso per Categoria',

      progressAchievementsTitle: 'Obiettivi Raggiunti',
      progressAchievementFirstBeat: 'Primo Beat',
      progressAchievementFirstBeatDesc: 'Completa il tuo primo lab',
      progressAchievementGettingStarted: 'Primi Passi',
      progressAchievementGettingStartedDesc: 'Completa 5 lab',
      progressAchievementCommitted: 'Impegnato',
      progressAchievementCommittedDesc: 'Completa 10 lab',
      progressAchievementDedicated: 'Produttore Dedicato',
      progressAchievementDedicatedDesc: 'Completa 20 lab',
      progressAchievementMaster: 'Maestro dei Lab',
      progressAchievementMasterDesc: 'Completa tutti i lab',
      progressAchievementWeekStreak: 'Guerriero della Settimana',
      progressAchievementWeekStreakDesc: 'Pratica per 7 giorni di fila',
      progressAchievementMonthStreak: 'Maestro Mensile',
      progressAchievementMonthStreakDesc: 'Pratica per 30 giorni di fila',
      progressAchievementDrumsComplete: 'Maestro del Ritmo',
      progressAchievementDrumsCompleteDesc: 'Completa tutti i lab di Batteria',
      progressAchievementSpeedDemon: 'Velocista',
      progressAchievementSpeedDemonDesc: 'Completa 3 lab in un giorno',

      progressManageTitle: 'Gestisci i Tuoi Progressi',
      progressManageDescription: 'Esporta i tuoi progressi per eseguire un backup o trasferirli su un altro dispositivo. Importa per ripristinare o unire i progressi.',
      progressExportButton: 'Esporta Progressi',
      progressImportButton: 'Importa Progressi',
      progressResetButton: 'Reimposta Progressi',

      progressResetConfirm1: 'Sei sicuro di voler reimpostare TUTTI i progressi? Questa azione non può essere annullata!',
      progressResetConfirm2: 'Questo eliminerà tutti i tuoi lab completati, obiettivi e statistiche. Sei assolutamente sicuro?',
      progressExportSuccess: 'Progressi esportati in',
      progressImportSuccess: 'Progressi importati con successo!',
      progressImportError: 'Impossibile importare i progressi:',

      progressCategoryDrums: '🥁 Batteria & Ritmo',
      progressCategoryArrangement: '🎹 Arrangiamento',
      progressCategorySoundDesign: '🎛️ Sound Design',
      progressCategoryMixing: '🎚️ Mixing',
      progressCategoryVocals: '🎤 Voce',
      progressCategoryMastering: '✨ Mastering',

      progressDays: 'giorni',
      progressUnlocked: 'Sbloccato',

      progressOverview: 'Panoramica',
      progressCompleted: 'Completati',
      progressInProgress: 'In Corso',
      progressNotStarted: 'Non Iniziati',
      progressTotal: 'Lezioni Totali',

      // Download Page
      downloadPageTitle: 'Download Gratuiti',
      downloadPageSubtitle: 'Sample pack, template e risorse per potenziare la tua produzione.',
      downloadHeroBadge: '100% Gratuito',
      downloadHeroTitle: 'Download Gratuiti',
      downloadHeroSubtitle: 'Sample pack, preset, file di progetto e guide per aiutarti a mettere in pratica ciò che impari nei lab. Tutto gratuito, senza registrazione.',

      downloadCategorySamplePacks: 'Sample Pack',
      downloadCategoryGuides: 'Guide e Schede di Riferimento',

      downloadDrumKitCategory: 'Batteria',
      downloadDrumKitTitle: 'Kit di Batteria MPL per Iniziare',
      downloadDrumKitDescription: 'Campioni di batteria essenziali per esercitarti con i lab di ritmo. Casse, rullanti, hi-hat e percussioni.',
      downloadDrumKitSamples: '48 campioni',
      downloadDrumKitSize: '12 MB',
      downloadDrumKitRoyalty: 'Royalty-free',

      downloadOneShotsCategory: 'Synth',
      downloadOneShotsTitle: 'One-Shot Essenziali',
      downloadOneShotsDescription: 'Stab di synth, colpi di basso e one-shot melodici perfetti per la pratica di arrangiamento e sound design.',
      downloadOneShotsSamples: '32 campioni',
      downloadOneShotsSize: '8 MB',

      downloadFxPackCategory: 'FX',
      downloadFxPackTitle: 'Pack di Effetti di Transizione',
      downloadFxPackDescription: 'Riser, downlifter, impact e sweep per i tuoi arrangiamenti.',
      downloadFxPackSamples: '64 campioni',
      downloadFxPackComingSoon: 'In arrivo Q1 2026',

      downloadDrumCheatCategory: 'Guida PDF',
      downloadDrumCheatTitle: 'Schema Pattern di Batteria',
      downloadDrumCheatDescription: 'Pattern di batteria comuni per house, techno, hip-hop e altro. Stampalo e tienilo vicino alla tua postazione.',
      downloadDrumCheatFormat: 'PDF',
      downloadDrumCheatPages: '2 pagine',

      downloadEqGuideCategory: 'Guida PDF',
      downloadEqGuideTitle: 'Guida alle Frequenze EQ',
      downloadEqGuideDescription: 'Guida di riferimento per le frequenze EQ. Sapere dove tagliare e potenziare per diversi strumenti.',
      downloadEqGuidePages: '1 pagina',

      downloadStructureCategory: 'Guida PDF',
      downloadStructureTitle: 'Template di Struttura del Brano',
      downloadStructureDescription: 'Template di arrangiamento per diversi generi e lunghezze di tracce.',
      downloadStructureFormat: 'PDF',

      downloadNewsletterTitle: 'Ricevi notifiche sui nuovi download',
      downloadNewsletterDescription: 'Pubblichiamo regolarmente nuove risorse gratuite. Iscriviti per essere il primo a sapere quando escono nuovi sample pack e guide.',
      downloadNewsletterPlaceholder: 'tua@email.com',
      downloadNewsletterButton: 'Iscriviti',
      downloadNewsletterSuccess: 'Grazie per esserti iscritto!',

      downloadButtonFree: 'Scarica Gratis',
      downloadButtonComingSoon: 'In Arrivo',
      downloadComingSoonBadge: 'In Arrivo',

      downloadSamplePacks: 'Sample Pack',
      downloadTemplates: 'Template di Progetto',
      downloadGuides: 'Guide alla Produzione',

      // Explore Page
      explorePageTitle: 'Esplora la Produzione Musicale',
      explorePageSubtitle: 'Scopri concetti, tecniche e strumenti.',
      exploreHeroBadge: 'Tutto in un Unico Posto',
      exploreHeroTitle: 'Esplora Music Producer Lab',
      exploreHeroSubtitle: 'Sfoglia tutti i contenuti, lab, risorse e percorsi di apprendimento. Trova esattamente ciò di cui hai bisogno per migliorare le tue abilità di produzione.',
      exploreSearchPlaceholder: 'Cerca lab, lezioni, risorse...',

      exploreCategoryAll: 'Tutti i Contenuti',
      exploreCategoryDrums: 'Batteria',
      exploreCategoryArrangement: 'Arrangiamento',
      exploreCategorySoundDesign: 'Sound Design',
      exploreCategoryMixing: 'Mixing',
      exploreCategoryMastering: 'Mastering',
      exploreCategoryResources: 'Risorse',

      exploreTopics: 'Argomenti',
      exploreTechniques: 'Tecniche',
      exploreTools: 'Strumenti',

      // Lesson chrome
      lessonHeroBadgeFree: 'Lezione gratuita',
      lessonHeroMetricFocus: 'Focus',
      lessonHeroMetricStructure: 'Struttura',
      lessonHeroMetricTime: 'Tempo',
      lessonHeroLearn: 'Cosa impari',
      lessonHeroGoal: 'Obiettivo',
      lessonHeroCreate: 'Cosa crei',
      lessonExerciseLabel: 'Esercizio',
      lessonWhatToDo: 'Cosa fare:',
      lessonTipLabel: 'Suggerimento:',
      lessonTargetPattern: 'Pattern di riferimento:',
      lessonSequencerLabel: 'Sequencer interattivo',
      lessonControlPlay: 'Riproduci',
      lessonControlStop: 'Stop',
      lessonControlClear: 'Pulisci',
      lessonControlCheck: 'Verifica esercizio',
      lessonUnlockMessage: "Completa l'esercizio per sbloccare la lezione successiva.",
      lessonNextLesson: 'Lezione successiva →',
      lessonNextTooltip: "Completa l'esercizio per sbloccare",

      // Lesson Pages - Common Elements
      lessonPrevious: 'Lezione Precedente',
      lessonNext: 'Lezione Successiva',
      lessonCompleted: 'Segna come Completata',
      lessonReset: 'Reimposta',
      lessonObjectives: 'Obiettivi di Apprendimento',
      lessonInstructions: 'Istruzioni',
      lessonExercise: 'Esercizio',
      lessonTips: 'Consigli Pro',
      lessonSummary: 'Riepilogo',
      lessonResources: 'Risorse',

      // Sequencer Controls
      sequencerPlay: 'Riproduci',
      sequencerStop: 'Ferma',
      sequencerClear: 'Cancella',
      sequencerTempo: 'Tempo',
      sequencerSwing: 'Swing',
      sequencerSteps: 'Passi',

      // Common Actions
      learnMore: 'Scopri di Più',
      getStarted: 'Inizia',
      tryItNow: 'Provalo Ora',
      readMore: 'Leggi di Più',
      showMore: 'Mostra di Più',
      showLess: 'Mostra Meno',
      loading: 'Caricamento...',
      error: 'Errore',
      success: 'Successo',

      // Alerts & Messages
      saveProgress: 'Progresso salvato!',
      progressSaveError: 'Errore nel salvataggio del progresso',
      lessonComplete: 'Lezione completata!',
      allLessonsComplete: 'Tutte le lezioni completate! Ottimo lavoro!',

      // Homepage - Results Section
      resultsBadge: 'Risultati Concreti',
      resultsTitle: 'Cosa otterrai con Music Producer Lab',
      resultsSubtitle: 'Non promesse vaghe - ecco esattamente cosa sarai in grado di fare dopo i nostri lab.',
      resultsWeek1Title: 'Dopo 1 Settimana',
      resultsWeek1Bullet1: 'Hai completato il tuo <strong>primo beat funzionante</strong> (kick, snare, hi-hats, bass)',
      resultsWeek1Bullet2: 'Capisci <strong>come funziona un DAW</strong> - non ti spaventa più',
      resultsWeek1Bullet3: 'Sai <strong>contare le battute</strong> e programmare ritmi a tempo',
      resultsMonth1Title: 'Dopo 1 Mese',
      resultsMonth1Bullet1: 'Hai prodotto <strong>5-10 tracce complete</strong> (intro, build, drop, outro)',
      resultsMonth1Bullet2: 'Sai <strong>mixare elementi base</strong> (volume, pan, EQ, compressione)',
      resultsMonth1Bullet3: 'Hai un <strong>portfolio ascoltabile</strong> da mostrare ad amici/social',
      resultsMonth3Title: 'Dopo 3 Mesi',
      resultsMonth3Bullet1: 'Produci <strong>tracce release-ready</strong> (pronte per Spotify/SoundCloud)',
      resultsMonth3Bullet2: 'Padroneggi <strong>mixing e mastering di base</strong> - suoni professionali',
      resultsMonth3Bullet3: 'Hai <strong>il tuo stile riconoscibile</strong> e workflow efficiente',
      resultsBonusTitle: 'Bonus Skills',
      resultsBonusBullet1: '<strong>Orecchio allenato</strong> - riconosci frequenze e dinamiche',
      resultsBonusBullet2: '<strong>Libreria di suoni</strong> personale e organizzata',
      resultsBonusBullet3: '<strong>Confidenza creativa</strong> - non hai più paura del foglio bianco',
      resultsGuaranteeTitle: '🎯 <span class="text-gradient">Garanzia semplice</span>: se completi i lab, fai le tracce.',
      resultsGuaranteeCopy: 'Non è magia - è metodo. Ogni lab è testato, ogni step funziona. <strong>Tu devi solo seguire le istruzioni e praticare.</strong> Il risultato? Tracce vere, skill reali, portfolio che cresce.',

      // Homepage - FAQ (Landing)
      faqBadgeLanding: 'FAQ',
      faqHeadingLanding: 'Domande Frequenti',
      faqIntroLanding: 'Tutto quello che devi sapere prima di iniziare.',
      faqCostQuestion: '💰 Quanto costa Music Producer Lab?',
      faqCostAnswer: 'I lab base sono completamente gratuiti. Non serve carta di credito, non serve registrazione. Apri il browser e inizia. Alcuni lab avanzati richiedono abbonamento, ma hai già 20+ lab gratis per partire.',
      faqDawQuestion: '🎹 Ho bisogno di un DAW specifico?',
      faqDawAnswer: 'No. I lab funzionano nel browser - non serve installare nulla. Quando applichi le skill al tuo DAW, i concetti funzionano con Ableton, FL Studio, Logic, Bitwig, Reaper, qualsiasi software. Insegniamo principi universali, non trucchi specifici di un programma.',
      faqTimeQuestion: '⏱️ Quanto tempo ci vuole per completare un lab?',
      faqTimeAnswer: 'Ogni lab dura <strong>10-15 minuti</strong> in media. Alcuni più corti (5 min), altri più lunghi (20 min). Sono pensati per essere completati in una pausa caffè. Puoi fare un lab al giorno o 5 in un pomeriggio - tu decidi il ritmo.',
      faqTheoryQuestion: '🎵 Devo conoscere la teoria musicale?',
      faqTheoryAnswer: '<strong>No.</strong> Non serve saper leggere spartiti o conoscere scale. Ti insegniamo quello che serve <em>quando</em> serve. Se devi programmare un bassline, ti spieghiamo le note giuste in quel momento - learning by doing. La teoria viene dopo, se vuoi approfondire.',
      faqTracksQuestion: '🎧 Posso usare le tracce che creo nei lab?',
      faqTracksAnswer: '<strong>Sì!</strong> Tutto quello che produci nei lab è tuo. Puoi pubblicarlo, remixarlo, usarlo come base per progetti più grandi. I suoni forniti nei lab sono royalty-free per uso personale e commerciale.',
      faqAgeQuestion: '🚀 Sono troppo vecchio/giovane per imparare?',
      faqAgeAnswer: 'I nostri utenti vanno dai <strong>12 ai 70 anni.</strong> Se hai le dita per cliccare e le orecchie per ascoltare, puoi farlo. La musica non ha limiti di età - servono solo curiosità e voglia di sperimentare.',
      faqContactCta: 'Altre domande? <a href="contact.html" style="color: var(--accent-cyan); text-decoration: none; font-weight: 600;">Contattaci →</a>',

      // Homepage - Hero Stats
      heroStatInteractiveLabs: 'Laboratori Interattivi',
      heroStatFirstBeat: 'Al Primo Beat',
      heroStatAnyDAW: 'Qualsiasi DAW',
      heroStatCompatible: 'Compatibile',

      // Homepage - Scroll Indicator
      scrollToExplore: 'Scorri per esplorare',

      // Homepage - Features Section
      featuresSectionBadge: 'Moduli Principali',
      featuresSectionTitle: 'Tutto ciò che ti serve per produrre tracce pronte alla pubblicazione',
      featuresSectionSubtitle: 'Ogni lab è progettato per insegnarti una specifica abilità attraverso la pratica diretta. Inizia dalle basi e sali fino alla produzione professionale.',
      featureDrumsTitle: 'Batteria & Ritmo',
      featureDrumsDescription: 'Costruisci groove solidi partendo dalle basi. Padroneggia pattern di cassa, posizionamento del rullante, variazioni di charleston e fill.',
      featureDrumsLink: 'Inizia i Lab',
      featureArrangementTitle: 'Arrangiamento',
      featureArrangementDescription: 'Impara a strutturare le tue tracce per il massimo impatto. Intro, buildup, drop e outro che mantengono gli ascoltatori coinvolti.',
      featureArrangementLink: 'Inizia i Lab',
      featureSoundDesignTitle: 'Sound Design',
      featureSoundDesignDescription: 'Crea i tuoi suoni unici. Comprendi sintesi, campionamento, layering e processamento per creare toni caratteristici.',
      featureSoundDesignLink: 'Inizia i Lab',
      featureMixingTitle: 'Mixaggio',
      featureMixingDescription: 'Bilancia le tue tracce come un professionista. EQ, compressione, riverbero e processamento spaziale per far brillare ogni elemento.',
      featureMixingLink: 'Inizia i Lab',
      featureVocalsTitle: 'Vocali',
      featureVocalsDescription: 'Processa le voci per farle sedere perfettamente nel mix. Tuning, doppiaggio, effetti e tecniche di processamento creativo.',
      featureVocalsLink: 'Inizia i Lab',
      featureMasteringTitle: 'Mastering',
      featureMasteringDescription: 'La rifinitura finale. Impara limiting, stereo enhancement e ottimizzazione del loudness per le piattaforme streaming.',
      featureMasteringLink: 'Inizia i Lab',

      // Homepage - How It Works Section
      howItWorksBadge: 'Come Funziona',
      howItWorksTitle: 'Dal primo click alla traccia finita in <span class="text-gradient">3 semplici step</span>',
      howItWorksSubtitle: 'Non hai bisogno di anni di studio. Serve solo il giusto metodo, applicato nel giusto ordine.',
      step1Title: 'Scegli un Lab e Inizia',
      step1Copy: 'Apri un lab gratuito (Drums, Arrangement, Sound Design...). Ogni lab ti porta a completare <strong>una traccia vera</strong> in 10-15 minuti. Non teoria astratta - musica reale.',
      step1Bullet1: 'Interfaccia interattiva diretta nel browser',
      step1Bullet2: 'Nessuna installazione richiesta',
      step1Bullet3: 'Lavori direttamente con suoni professionali',
      step1CtaCopy: '<strong>20+ lab interattivi</strong> ti aspettano. Inizia gratis, nessuna carta richiesta.',
      step1CtaButton: 'Apri i Lab Gratuiti',

      // Homepage - Why MPL Section
      whyMplBadge: 'Perché MPL',
      whyMplTitle: 'Un laboratorio, non una lezione.',
      whyMplCopy: 'Ogni modulo ti porta in un laboratorio guidato dove attivi suoni, modifichi controlli e dai forma a una traccia in tempo reale. Invece di guardare qualcun altro produrre, costruisci la canzone tu stesso con istruzioni chiare che spiegano perché ogni mossa conta.',
      whyMplBullet1: 'Lab brevi e focalizzati che si adattano alla tua giornata',
      whyMplBullet2: 'Feedback immediato mentre sperimenti',
      whyMplBullet3: 'Insegnamento basato sui concetti: impara il perché, non solo il cosa',
      whyMplBullet4: 'Competenze indipendenti dal DAW utilizzabili ovunque',
      whyMplCardBadge: 'Sessione Interattiva',
      whyMplCardNumber: '01/20',
      whyMplCardTitle: 'Beat Foundation Lab',
      whyMplCardSubtitle: 'Assembla il tuo primo beat elettronico con kick, snare e hi-hat.',
      whyMplCardTime: '8-12 min',
      whyMplCardLevel: 'Principiante',
      whyMplCardSkills: 'Ritmo, Groove',
      whyMplCardCta: 'Inizia Questo Lab',
      whyMplCardTimeLabel: 'Tempo',
      whyMplCardLevelLabel: 'Livello',
      whyMplCardSkillsLabel: 'Competenze',

      // Homepage - DAW Section
      dawSectionBadge: 'Indipendente dal DAW',
      dawSectionTitle: 'Impara una volta, applica ovunque.',
      dawSectionSubtitle: 'Tutto ciò che impari si traduce direttamente in Ableton Live, FL Studio, Logic Pro, Bitwig o qualsiasi altro DAW. Insegniamo i fondamentali della produzione, non trucchi software.',
      dawAbleton: 'Ableton Live',
      dawFL: 'FL Studio',
      dawLogic: 'Logic Pro',
      dawBitwig: 'Bitwig',
      dawMore: '& Altro',

      // Homepage - Final CTA
      downloadGuides: 'Guide alla Produzione',

      // Footer - Resources
      footerResourcesTitle: 'Risorse',
      footerFreeDownloads: 'Download Gratuiti',
      footerAllContent: 'Tutti i Contenuti',
      footerSamplePacks: 'Sample Pack',
      footerPresets: 'Preset',
      footerGuides: 'Guide',
      footerCareers: 'Carriere',
      footerPrivacyPolicy: 'Privacy Policy',
      footerTermsOfService: 'Termini di Servizio',
    },

    // Spanish, French, and German translations would follow the same structure
    // For brevity, I'll include just the navbar and key homepage items for these languages

    es: {
      // Navbar
      home: 'Inicio',
      labs: 'Laboratorios',
      explore: 'Explorar',
      downloads: 'Descargas',
      about: 'Acerca de',
      contact: 'Contacto',
      startLearning: 'Empezar a Aprender',
      dark: 'Oscuro',
      light: 'Claro',
      language: 'Idioma',

      // Hero
      heroEyebrow: 'Producción Musical Interactiva',
      heroTitle: 'Aprende producción musical',
      heroTitleHighlight: 'produciendo realmente',
      heroSubtitle: 'Laboratorios interactivos donde construyes pistas reales paso a paso.',
      heroSubtitleBold: 'Tú haces el trabajo.',
      heroSubtitlePrefix: 'Sin videos. Sin teoría.',
      startFreeLabs: 'Comenzar Labs Gratis',
      seeWhatYouBuild: 'Ve Lo Que Construirás',

      // ... (rest of Spanish translations would follow)
    },

    fr: {
      // Navbar
      home: 'Accueil',
      labs: 'Laboratoires',
      explore: 'Explorer',
      downloads: 'Téléchargements',
      about: 'À Propos',
      contact: 'Contact',
      startLearning: 'Commencer à Apprendre',
      dark: 'Sombre',
      light: 'Clair',
      language: 'Langue',

      // Hero
      heroEyebrow: 'Production Musicale Interactive',
      heroTitle: 'Apprenez la production musicale en',
      heroTitleHighlight: 'produisant vraiment',
      heroSubtitle: 'Des laboratoires interactifs où vous construisez de vraies pistes étape par étape.',
      heroSubtitleBold: 'Vous faites le travail.',
      heroSubtitlePrefix: 'Pas de vidéos. Pas de théorie.',
      startFreeLabs: 'Commencer les Labs Gratuits',
      seeWhatYouBuild: 'Voyez Ce Que Vous Construirez',

      // ... (rest of French translations would follow)
    },

    de: {
      // Navbar
      home: 'Startseite',
      labs: 'Labore',
      explore: 'Erkunden',
      downloads: 'Downloads',
      about: 'Über Uns',
      contact: 'Kontakt',
      startLearning: 'Lernen Beginnen',
      dark: 'Dunkel',
      light: 'Hell',
      language: 'Sprache',

      // Hero
      heroEyebrow: 'Interaktive Musikproduktion',
      heroTitle: 'Lerne Musikproduktion durch',
      heroTitleHighlight: 'tatsächliches Produzieren',
      heroSubtitle: 'Interaktive Labore, in denen Sie Schritt für Schritt echte Tracks erstellen.',
      heroSubtitleBold: 'Sie machen die Arbeit.',
      heroSubtitlePrefix: 'Keine Videos. Keine Theorie.',
      startFreeLabs: 'Kostenlose Labs Starten',
      seeWhatYouBuild: 'Sehen Sie, Was Sie Bauen',

      // ... (rest of German translations would follow)
    }
  };

  // Language configuration
  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ];

  // Static translations for lesson content (fallback when API is not available)
  const staticLessonTranslations = {
    it: {
      // Instrument names
      'Kick': 'Cassa',
      'Snare': 'Rullante',
      'Hi-hat': 'Charleston',
      'Clap': 'Battito di mani',
      'Tom': 'Tom',
      'Rim': 'Cerchio',
      'Cymbal': 'Piatto',
      'Shaker': 'Shaker',
      'Bass': 'Basso',
      'Chord': 'Accordo',
      'Lead': 'Lead',
      'Pad': 'Pad',
      'Melody': 'Melodia',
      'Percussion': 'Percussione',
      'Crash': 'Crash',
      'Ride': 'Ride',
      'Open Hat': 'Charleston Aperto',
      'Closed Hat': 'Charleston Chiuso',

      // Common instructions
      'Play': 'Riproduci',
      'Stop': 'Ferma',
      'Clear': 'Cancella',
      'Check Exercise': 'Verifica Esercizio',
      'Next Lesson': 'Lezione Successiva',
      'Previous Lesson': 'Lezione Precedente',
      'Target Pattern': 'Pattern di Riferimento',
      'Interactive Sequencer': 'Sequencer Interattivo',
      'Complete the exercise': 'Completa l\'esercizio',
      'Proceed to the next lesson': 'Procedi alla prossima lezione',

      // Lesson structure
      'Lesson': 'Lezione',
      'Exercise': 'Esercizio',
      'Tip': 'Suggerimento',
      'Goal': 'Obiettivo',
      'What to do:': 'Cosa fare:',
      'Tip:': 'Suggerimento:',
      'Steps:': 'Passaggi:',
      'Description': 'Descrizione',

      // Arrangement sections
      'Intro': 'Intro',
      'Verse': 'Strofa',
      'Chorus': 'Ritornello',
      'Bridge': 'Bridge',
      'Buildup': 'Crescendo',
      'Drop': 'Drop',
      'Breakdown': 'Breakdown',
      'Outro': 'Outro',

      // Musical terms
      'beat': 'battuta',
      'beats': 'battute',
      'bar': 'misura',
      'bars': 'misure',
      'quarter note': 'semiminima',
      'quarter notes': 'semiminime',
      'eighth note': 'croma',
      'eighth notes': 'crome',
      'sixteenth note': 'semicroma',
      'sixteenth notes': 'semicrome',
      'backbeat': 'backbeat',
      'rhythm': 'ritmo',
      'pattern': 'pattern',
      'groove': 'groove',
      'tempo': 'tempo',
      'swing': 'swing',
      'subdivision': 'suddivisione',
      'subdivisions': 'suddivisioni',
      'step': 'step',
      'steps': 'step',
      'measure': 'misura',

      // Common action phrases
      'In this lesson': 'In questa lezione',
      'In this exercise': 'In questo esercizio',
      'Press': 'Premi',
      'Click': 'Clicca',
      'Place': 'Posiziona',
      'Build': 'Costruisci',
      'Create': 'Crea',
      'Learn': 'Impara',
      'Practice': 'Pratica',
      'Add': 'Aggiungi',
      'Keep': 'Mantieni',
      'Notice': 'Nota',
      'Listen': 'Ascolta',
      'Hear': 'Ascolta',
      'Try': 'Prova',
      'Experiment': 'Sperimenta',
      'Complete': 'Completa',
      'Unlock': 'Sblocca',
      'Start': 'Inizia',
      'End': 'Termina',
      'Repeat': 'Ripeti',

      // Common lesson phrases
      'you build': 'costruisci',
      'you learn': 'impari',
      'you create': 'crei',
      'In this lesson you build': 'In questa lezione costruisci',
      'Learn about': 'Scopri',
      'the classic': 'il classico',
      'your first': 'il tuo primo',
      'adding the': 'aggiungendo il',
      'Build the': 'Costruisci il',
      'Add the': 'Aggiungi il',
      'Keep the': 'Mantieni il',
      'Notice how': 'Nota come',
      'Press Play': 'Premi Riproduci',
      'to hear': 'per ascoltare',
      'Make sure': 'Assicurati',
      'from Lesson': 'dalla Lezione',

      // Success/Error messages
      'Correct!': 'Corretto!',
      'Great job!': 'Ottimo lavoro!',
      'Excellent!': 'Eccellente!',
      'Well done!': 'Ben fatto!',
      'Not quite right': 'Non del tutto corretto',
      'Not quite there yet': 'Non ci siamo ancora',
      'Try again': 'Riprova',
      'Check both the': 'Controlla sia il',
      'and': 'e',
      'You can now proceed': 'Ora puoi procedere',
      'to the next lesson': 'alla prossima lezione',
      'to unlock the next lesson': 'per sbloccare la prossima lezione',
      'You\'ve mastered': 'Hai padroneggiato',
      'You\'ve completed this lesson': 'Hai completato questa lezione',
      'You\'ve already completed this exercise': 'Hai già completato questo esercizio',
      'Feel free to experiment more!': 'Sentiti libero di sperimentare di più!',

      // Specific lesson content - Common patterns
      '4 on the floor': '4 on the floor',
      'full beat': 'beat completo',
      'Adding the Snare': 'Aggiungendo il Rullante',
      'Backbeat': 'Backbeat',
      'Hi-Hat Pattern': 'Pattern Charleston',
      'Build Your First Arrangement': 'Costruisci il Tuo Primo Arrangiamento',
      'Understanding Structure': 'Comprendere la Struttura',
      'From Loop to Song': 'Dal Loop alla Canzone',

      // Common exercise instructions
      'Click on steps': 'Clicca sugli step',
      'in the': 'nella',
      'row': 'riga',
      'row to place': 'riga per posizionare',
      'to place your': 'per posizionare i tuoi',
      'These positions correspond to': 'Queste posizioni corrispondono a',
      'the four beats of the bar': 'le quattro battute della misura',
      'to verify your answer': 'per verificare la tua risposta',
      'When satisfied, click': 'Quando sei soddisfatto, clicca',

      // Arrangement specific
      'Use the interactive arrangement builder': 'Usa il costruttore di arrangiamento interattivo',
      'to create a complete song structure': 'per creare una struttura di canzone completa',
      'Click sections to add them to your timeline': 'Clicca sulle sezioni per aggiungerle alla tua timeline',
      'watch the energy flow': 'osserva il flusso di energia',
      'visualize your arrangement': 'visualizza il tuo arrangiamento',
      'Aim for': 'Punta a',
      'at': 'a',
      'BPM': 'BPM',
      'about': 'circa',

      // Common categories
      'Drum pattern': 'Pattern batteria',
      'Drums': 'Batteria',
      'Arrangement': 'Arrangiamento',
      'Melody': 'Melodia',
      'Mixing': 'Mixaggio',
      'Sound Design': 'Sound Design',

      // Time and numbers
      'minutes': 'minuti',
      'minute': 'minuto',
      'seconds': 'secondi',
      'second': 'secondo',
      'First': 'Primo',
      'Second': 'Secondo',
      'Third': 'Terzo',
      'Fourth': 'Quarto',
      'Final': 'Finale',
      'Next': 'Successivo',
      'Previous': 'Precedente',

      // Additional common words
      'the': 'il',
      'a': 'un',
      'an': 'un',
      'and': 'e',
      'or': 'o',
      'with': 'con',
      'on': 'su',
      'of': 'di',
      'for': 'per',
      'to': 'a',
      'from': 'da',
      'by': 'da',
      'your': 'tuo',
      'this': 'questo',
      'that': 'quello',
      'each': 'ogni',
      'every': 'ogni',
      'both': 'entrambi',
      'all': 'tutti',
      'one': 'uno',
      'two': 'due',
      'three': 'tre',
      'four': 'quattro'
    }
  };

  // Automatic translation cache settings
  const AUTO_TRANSLATE_CACHE_KEY = 'mpl-auto-translate-cache-v1';
  const AUTO_TRANSLATE_MAX_ENTRIES = 1000;
  const TRANSLATION_PROXY_ENDPOINT = '/api/translate/proxy';

  function loadAutoTranslateCache() {
    try {
      return JSON.parse(localStorage.getItem(AUTO_TRANSLATE_CACHE_KEY)) || {};
    } catch (err) {
      console.warn('[i18n] Failed to parse auto-translate cache', err);
      return {};
    }
  }

  let autoTranslateCache = loadAutoTranslateCache();

  function persistAutoTranslateCache() {
    try {
      const cache = JSON.stringify(autoTranslateCache);
      localStorage.setItem(AUTO_TRANSLATE_CACHE_KEY, cache);
    } catch (err) {
      console.warn('[i18n] Failed to persist auto-translate cache', err);
    }
  }

  function pruneCacheForLanguage(lang) {
    const entries = Object.entries(autoTranslateCache[lang] || {});
    if (entries.length <= AUTO_TRANSLATE_MAX_ENTRIES) return;

    const overflow = entries.length - AUTO_TRANSLATE_MAX_ENTRIES;
    const keysToDelete = entries.slice(0, overflow).map(([key]) => key);
    keysToDelete.forEach(key => delete autoTranslateCache[lang][key]);
    persistAutoTranslateCache();
  }

  // Get current language from localStorage or default to English
  let currentLang = localStorage.getItem('mpl-language') || 'en';

  /**
   * Get translation for a key
   * @param {string} key - Translation key
   * @returns {string} Translated text
   */
  function t(key) {
    return translations[currentLang]?.[key] || translations.en[key] || key;
  }

  /**
   * Set the current language
   * @param {string} lang - Language code
   */
  function setLanguage(lang) {
    if (!translations[lang]) {
      console.warn(`Language ${lang} not found, falling back to English`);
      lang = 'en';
    }

    currentLang = lang;
    localStorage.setItem('mpl-language', lang);

    // Reload the page to apply the new language
    window.location.reload();
  }

  async function requestBatchTranslations(texts, targetLang) {
    if (!texts.length) return new Map();

    const result = new Map();
    const staticDict = staticLessonTranslations[targetLang] || {};

    // First, use static translations for exact matches
    texts.forEach(text => {
      if (staticDict[text]) {
        result.set(text, staticDict[text]);
      }
    });

    // Only call API for remaining untranslated texts
    const remainingTexts = texts.filter(text => !result.has(text));

    if (remainingTexts.length === 0) {
      return result;
    }

    try {
      const response = await fetch(TRANSLATION_PROXY_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          texts: remainingTexts,
          source: 'auto',
          target: targetLang,
          contentType: 'lesson',
          pagePath: window.location.pathname,
          preferCache: true
        })
      });

      if (!response.ok) {
        throw new Error(`Proxy responded with status ${response.status}`);
      }

      const data = await response.json();
      const translationsFromProxy = data?.translations || {};

      // Add proxy translations to result
      Object.entries(translationsFromProxy)
        .filter(([, translated]) => typeof translated === 'string' && translated.trim().length)
        .forEach(([original, translated]) => {
          result.set(original, translated);
        });

      return result;
    } catch (err) {
      console.warn('[i18n] Translation proxy request failed, using static translations only', err);
      return result;
    }
  }

  async function requestMachineTranslation(text, targetLang) {
    const translations = await requestBatchTranslations([text], targetLang);
    return translations.get(text) || null;
  }

  async function getAutoTranslatedText(text) {
    if (!text || currentLang === 'en') return text;

    autoTranslateCache[currentLang] = autoTranslateCache[currentLang] || {};

    if (autoTranslateCache[currentLang][text]) {
      return autoTranslateCache[currentLang][text];
    }

    const translated = await requestMachineTranslation(text, currentLang);
    if (translated) {
      autoTranslateCache[currentLang][text] = translated;
      pruneCacheForLanguage(currentLang);
      persistAutoTranslateCache();
      return translated;
    }

    return text;
  }

  function shouldSkipNode(node) {
    const parent = node.parentElement;
    if (!parent) return true;
    if (parent.closest('[data-i18n-ignore]')) return true;
    if (parent.closest('[data-i18n]')) return true;
    if (parent.closest('script,style,code,pre')) return true;

    const text = node.textContent.trim();
    if (!text || text.length < 2) return true;
    if (/^[\d\s.,;:!?()'"-]+$/.test(text)) return true;
    return false;
  }

  function collectTranslatableNodes(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return shouldSkipNode(node)
          ? NodeFilter.FILTER_REJECT
          : NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) {
      nodes.push(walker.currentNode);
    }
    return nodes;
  }

  async function autoTranslatePage() {
    if (currentLang === 'en') return;

    const roots = document.querySelectorAll('[data-i18n-auto], body');
    const nodes = [];
    roots.forEach(root => nodes.push(...collectTranslatableNodes(root)));

    if (!nodes.length) return;

    const uniqueTexts = Array.from(new Set(nodes.map(node => node.textContent.trim())));

    autoTranslateCache[currentLang] = autoTranslateCache[currentLang] || {};

    const cachedEntries = new Map(
      uniqueTexts
        .filter(text => autoTranslateCache[currentLang][text])
        .map(text => [text, autoTranslateCache[currentLang][text]])
    );

    const textsToTranslate = uniqueTexts.filter(text => !cachedEntries.has(text));
    const proxyTranslations = await requestBatchTranslations(textsToTranslate, currentLang);

    proxyTranslations.forEach((translated, original) => {
      autoTranslateCache[currentLang][original] = translated;
    });

    if (proxyTranslations.size) {
      pruneCacheForLanguage(currentLang);
      persistAutoTranslateCache();
    }

    const translationMap = new Map(
      uniqueTexts
        .map(original => ({
          original,
          translated: autoTranslateCache[currentLang][original] || proxyTranslations.get(original)
        }))
        .filter(pair => pair.translated && pair.translated !== pair.original)
        .map(pair => [pair.original, pair.translated])
    );

    nodes.forEach(node => {
      const text = node.textContent;
      const trimmed = text.trim();
      const translated = translationMap.get(trimmed);
      if (!translated) return;

      const leading = text.match(/^\s*/)[0];
      const trailing = text.match(/\s*$/)[0];
      node.textContent = `${leading}${translated}${trailing}`;
    });
  }

  /**
   * Update all text on the page with current language
   */
  async function updatePageText() {
    // Find all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = t(key);

      // Check if the element has a data-i18n-attr attribute for translating attributes
      const attr = element.getAttribute('data-i18n-attr');
      if (attr) {
        if (attr === 'html' || attr === 'innerHTML') {
          element.innerHTML = translation;
        } else if (attr === 'text' || attr === 'textContent') {
          element.textContent = translation;
        } else {
          element.setAttribute(attr, translation);
        }
      } else {
        // Default: update text content
        element.textContent = translation;
      }
    });

    // Find all elements with data-i18n-placeholder attribute
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      const translation = t(key);
      element.placeholder = translation;
    });

    // Update HTML lang attribute
    document.documentElement.lang = currentLang;

    // Automatically translate any remaining text nodes (tutorials, sequencer labels, etc.)
    try {
      await autoTranslatePage();
    } catch (err) {
      console.warn('[i18n] Auto-translate via proxy failed, showing source language text', err);
    }
  }

  /**
   * Get current language
   * @returns {string} Current language code
   */
  function getCurrentLanguage() {
    return currentLang;
  }

  /**
   * Get available languages
   * @returns {Array} Array of language objects
   */
  function getLanguages() {
    return languages;
  }

  /**
   * Initialize i18n system
   */
  function init() {
    // Set initial HTML lang attribute
    document.documentElement.lang = currentLang;

    const runInitialUpdate = async () => {
      try {
        await updatePageText();
      } catch (err) {
        console.error('[i18n] Failed to initialize translations via proxy, reverting to source language', err);
        currentLang = 'en';
        localStorage.setItem('mpl-language', currentLang);
        document.documentElement.lang = currentLang;

        try {
          await updatePageText();
        } catch (fallbackErr) {
          console.error('[i18n] Fallback translation update failed', fallbackErr);
        }
      }
    };

    // Update page text on load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', runInitialUpdate);
    } else {
      runInitialUpdate();
    }

    // Listen for language changes
    window.addEventListener('languagechange', () => {
      updatePageText().catch(err => console.warn('[i18n] Language change update failed', err));
    });
  }

  // Auto-initialize
  init();

  // Export to global scope
  window.MPL = window.MPL || {};
  window.MPL.i18n = {
    t,
    setLanguage,
    getCurrentLanguage,
    getLanguages,
    updatePageText,
    translations,
    autoTranslatePage
  };

})();
