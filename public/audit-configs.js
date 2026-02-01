const fs = require('fs');
const path = require('path');

const configsDir = '/home/user/music-producer-lab/configs';

// Helper function to count words in a string
function countWords(text) {
  if (!text) return 0;
  return text.trim().split(/\s+/).filter(word => word.length > 0).length;
}

// Helper to extract field presence and content
function extractField(text, fieldName) {
  // Check for object field
  const objectPattern = new RegExp(`${fieldName}:\\s*{`, 'i');
  // Check for array field
  const arrayPattern = new RegExp(`${fieldName}:\\s*\\[`, 'i');
  // Check for string field (mode might be a string in some configs)
  const stringPattern = new RegExp(`${fieldName}:\\s*["']`, 'i');

  if (objectPattern.test(text)) {
    return { exists: true, type: 'object' };
  } else if (arrayPattern.test(text)) {
    // Try to count array items
    const arrayMatch = text.match(new RegExp(`${fieldName}:\\s*\\[([\\s\\S]*?)\\]`, ''));
    if (arrayMatch) {
      // Count items by counting commas + 1, but filter out empty
      const content = arrayMatch[1].trim();
      if (!content) return { exists: true, type: 'array', length: 0 };
      // Simple count: split by comma and filter non-empty
      const items = content.split(',').filter(s => s.trim().length > 0);
      return { exists: true, type: 'array', length: items.length };
    }
    return { exists: true, type: 'array' };
  } else if (stringPattern.test(text)) {
    return { exists: true, type: 'string' };
  }
  return { exists: false };
}

// Extract theory content for word count
function extractTheoryContent(text) {
  const theoryMatch = text.match(/theory:\s*{[\s\S]*?sections:\s*\[[\s\S]*?content:\s*`([\s\S]*?)`/);
  if (theoryMatch) {
    return theoryMatch[1];
  }

  // Check for simple content field
  const simpleMatch = text.match(/theory:\s*{[\s\S]*?content:\s*["`]([\s\S]*?)["`]/);
  if (simpleMatch) {
    return simpleMatch[1];
  }

  return null;
}

// Get mode value
function getModeValue(text) {
  // Check for mode object
  const modeObjMatch = text.match(/mode:\s*{[\s\S]*?}/);
  if (modeObjMatch) {
    return 'interactive';
  }

  // Check for mode string
  const modeStrMatch = text.match(/mode:\s*["']([^"']+)["']/);
  if (modeStrMatch) {
    return modeStrMatch[1];
  }

  return null;
}

// Helper function to analyze a config file
function analyzeConfig(filePath) {
  const fileName = path.basename(filePath);
  const lessonId = fileName.replace('.config.js', '');

  const issues = [];
  let configText;

  try {
    // Read the config file
    const content = fs.readFileSync(filePath, 'utf8');

    // Extract the exported config object (look for 'lessonConfig')
    const configMatch = content.match(/export const lessonConfig = ({[\s\S]*?^});/m);
    if (!configMatch) {
      return {
        lessonId,
        fileName,
        status: 'ERROR',
        issues: ['Cannot parse config file - no lessonConfig export found']
      };
    }

    configText = configMatch[1];

  } catch (error) {
    return {
      lessonId,
      fileName,
      status: 'ERROR',
      issues: [`Parse error: ${error.message}`]
    };
  }

  // Extract fields
  const mode = extractField(configText, 'mode');
  const theory = extractField(configText, 'theory');
  const exercise = extractField(configText, 'exercise');
  const validation = extractField(configText, 'validation');
  const learningObjectives = extractField(configText, 'learningObjectives');

  const modeValue = getModeValue(configText);
  const theoryContent = extractTheoryContent(configText);
  const theoryWordCount = theoryContent ? countWords(theoryContent) : 0;

  // Check mode configuration
  if (!mode.exists) {
    issues.push('No mode configuration');
  }

  // Check theory section
  if (!theory.exists || !theoryContent) {
    issues.push('No theory content');
  } else if (theoryWordCount < 200) {
    issues.push(`Theory content too short (${theoryWordCount} words, need 200+)`);
  }

  // Check learning objectives
  if (!learningObjectives.exists) {
    issues.push('No learningObjectives array');
  } else if (learningObjectives.length && learningObjectives.length < 3) {
    issues.push(`Only ${learningObjectives.length} learning objectives (need 3+)`);
  }

  // Check exercise section (should exist for all lessons)
  if (!exercise.exists) {
    issues.push('No exercise section');
  } else {
    // Check for description and steps in exercise
    const hasDescription = /description:\s*["'`]/.test(configText);
    const hasSteps = /steps:\s*\[/.test(configText);

    if (!hasDescription) {
      issues.push('No exercise description');
    }
    if (!hasSteps) {
      issues.push('No exercise steps');
    }
  }

  // Check validation (for interactive lessons)
  // Theory-only lessons might not need validation
  const isTheoryOnly = modeValue === 'theory-only';
  if (!isTheoryOnly && !validation.exists) {
    issues.push('No validation object (interactive lesson)');
  }

  return {
    lessonId,
    fileName,
    status: issues.length === 0 ? 'COMPLETE' : 'INCOMPLETE',
    issues,
    mode: modeValue || (mode.exists ? 'interactive' : 'unknown'),
    theoryWordCount,
    learningObjectivesCount: learningObjectives.length || 0,
    hasExercise: exercise.exists,
    hasValidation: validation.exists,
    hasTheory: theory.exists
  };
}

// Main analysis
function runAudit() {
  const configFiles = fs.readdirSync(configsDir)
    .filter(file => file.endsWith('.config.js'))
    .map(file => path.join(configsDir, file))
    .sort();

  const results = configFiles.map(analyzeConfig);

  const complete = results.filter(r => r.status === 'COMPLETE');
  const incomplete = results.filter(r => r.status === 'INCOMPLETE');
  const errors = results.filter(r => r.status === 'ERROR');

  // Group incomplete by category
  const byCategory = {};
  incomplete.forEach(lesson => {
    const category = lesson.lessonId.match(/lesson-([^-]+)/)?.[1] || 'unknown';
    if (!byCategory[category]) {
      byCategory[category] = [];
    }
    byCategory[category].push(lesson);
  });

  // Generate report
  console.log('# LESSON CONFIG AUDIT REPORT\n');
  console.log('Generated:', new Date().toISOString());
  console.log('');

  console.log('## SUMMARY\n');
  console.log(`- **Total Lessons:** ${results.length}`);
  console.log(`- **Complete Lessons:** ${complete.length} (${Math.round(complete.length/results.length*100)}%)`);
  console.log(`- **Incomplete Lessons:** ${incomplete.length} (${Math.round(incomplete.length/results.length*100)}%)`);
  console.log(`- **Parse Errors:** ${errors.length}`);
  console.log('');

  // Complete lessons summary
  console.log('## COMPLETE LESSONS (' + complete.length + ')\n');
  const completeByCategory = {};
  complete.forEach(lesson => {
    const category = lesson.lessonId.match(/lesson-([^-]+)/)?.[1] || 'unknown';
    if (!completeByCategory[category]) {
      completeByCategory[category] = [];
    }
    completeByCategory[category].push(lesson);
  });

  Object.keys(completeByCategory).sort().forEach(category => {
    console.log(`### ${category.toUpperCase()} (${completeByCategory[category].length} lessons)`);
    completeByCategory[category].forEach(lesson => {
      console.log(`- ${lesson.lessonId} - ${lesson.mode} mode - ${lesson.theoryWordCount} words`);
    });
    console.log('');
  });

  // Incomplete lessons detail
  console.log('## INCOMPLETE LESSONS (' + incomplete.length + ')\n');

  Object.keys(byCategory).sort().forEach(category => {
    console.log(`### ${category.toUpperCase()} (${byCategory[category].length} incomplete lessons)\n`);
    byCategory[category].forEach(lesson => {
      console.log(`#### ${lesson.lessonId}`);
      console.log(`- **File:** ${lesson.fileName}`);
      console.log(`- **Mode:** ${lesson.mode}`);
      console.log(`- **Theory Words:** ${lesson.theoryWordCount}`);
      console.log(`- **Learning Objectives:** ${lesson.learningObjectivesCount}`);
      console.log(`- **Has Theory:** ${lesson.hasTheory ? 'Yes' : 'No'}`);
      console.log(`- **Has Exercise:** ${lesson.hasExercise ? 'Yes' : 'No'}`);
      console.log(`- **Has Validation:** ${lesson.hasValidation ? 'Yes' : 'No'}`);
      console.log('- **Issues:**');
      lesson.issues.forEach(issue => {
        console.log(`  - ${issue}`);
      });
      console.log('');
    });
  });

  // Parse errors
  if (errors.length > 0) {
    console.log('## PARSE ERRORS (' + errors.length + ')\n');
    errors.forEach(lesson => {
      console.log(`### ${lesson.lessonId}`);
      console.log(`- **File:** ${lesson.fileName}`);
      console.log('- **Issues:**');
      lesson.issues.forEach(issue => {
        console.log(`  - ${issue}`);
      });
      console.log('');
    });
  }

  // Issue frequency analysis
  console.log('## ISSUE FREQUENCY ANALYSIS\n');
  const issueCount = {};
  incomplete.forEach(lesson => {
    lesson.issues.forEach(issue => {
      const issueType = issue.split('(')[0].trim(); // Normalize similar issues
      issueCount[issueType] = (issueCount[issueType] || 0) + 1;
    });
  });

  Object.entries(issueCount)
    .sort((a, b) => b[1] - a[1])
    .forEach(([issue, count]) => {
      console.log(`- **${issue}**: ${count} lessons`);
    });
  console.log('');

  // Category breakdown
  console.log('## CATEGORY BREAKDOWN\n');
  const categoryStats = {};
  results.forEach(lesson => {
    const category = lesson.lessonId.match(/lesson-([^-]+)/)?.[1] || 'unknown';
    if (!categoryStats[category]) {
      categoryStats[category] = { total: 0, complete: 0, incomplete: 0 };
    }
    categoryStats[category].total++;
    if (lesson.status === 'COMPLETE') {
      categoryStats[category].complete++;
    } else if (lesson.status === 'INCOMPLETE') {
      categoryStats[category].incomplete++;
    }
  });

  console.log('| Category | Total | Complete | Incomplete | Completion % |');
  console.log('|----------|-------|----------|------------|--------------|');
  Object.keys(categoryStats).sort().forEach(category => {
    const stats = categoryStats[category];
    const completionPct = Math.round((stats.complete / stats.total) * 100);
    console.log(`| ${category} | ${stats.total} | ${stats.complete} | ${stats.incomplete} | ${completionPct}% |`);
  });
  console.log('');

  // Export detailed JSON for further analysis
  fs.writeFileSync(
    path.join(__dirname, 'audit-results.json'),
    JSON.stringify({ results, summary: { total: results.length, complete: complete.length, incomplete: incomplete.length, errors: errors.length } }, null, 2)
  );
  console.log('Detailed results saved to: audit-results.json\n');
}

runAudit();
