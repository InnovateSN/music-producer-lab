#!/bin/bash
# Comprehensive test script for migrated lessons

echo "🧪 Testing Migrated Lessons"
echo "======================================"
echo ""

# Test lessons to check
LESSONS=(
  "lesson-drums-1.html"
  "lesson-drums-7.html"
  "lesson-drums-15.html"
  "lesson-arrangement-1.html"
  "lesson-arrangement-10.html"
  "lesson-arrangement-20.html"
)

PASS=0
FAIL=0

for lesson in "${LESSONS[@]}"; do
  echo "Testing: $lesson"
  echo "-----------------------------------"

  # Check 1: File exists
  if [ ! -f "$lesson" ]; then
    echo "  ❌ File not found"
    ((FAIL++))
    continue
  fi
  echo "  ✅ File exists"

  # Check 2: Has module script import
  if grep -q "import.*from.*lesson-engine.js" "$lesson"; then
    echo "  ✅ Imports lesson-engine.js"
  else
    echo "  ❌ Missing lesson-engine.js import"
    ((FAIL++))
  fi

  # Check 3: Has config import
  if grep -q "import.*lessonConfig.*from.*config" "$lesson"; then
    echo "  ✅ Imports config file"
  else
    echo "  ❌ Missing config import"
    ((FAIL++))
  fi

  # Check 4: Has initLessonFromConfig call
  if grep -q "initLessonFromConfig" "$lesson"; then
    echo "  ✅ Calls initLessonFromConfig()"
  else
    echo "  ❌ Missing initLessonFromConfig() call"
    ((FAIL++))
  fi

  # Check 5: Has required HTML IDs
  required_ids=("mpl-hero" "mpl-sequencer-collection" "mpl-seq-play-all" "mpl-exercise-section")
  missing_ids=0
  for id in "${required_ids[@]}"; do
    if ! grep -q "id=\"$id\"" "$lesson"; then
      echo "  ⚠️  Missing ID: $id"
      ((missing_ids++))
    fi
  done

  if [ $missing_ids -eq 0 ]; then
    echo "  ✅ All required IDs present"
  else
    echo "  ❌ Missing $missing_ids required IDs"
    ((FAIL++))
  fi

  # Check 6: Extract config path and verify it exists
  config_path=$(grep -oP "from '\K[^']*(?=';)" "$lesson" | grep "config.js" | head -1)
  if [ -n "$config_path" ]; then
    # Remove ./ prefix if present
    config_path="${config_path#./}"
    if [ -f "$config_path" ]; then
      echo "  ✅ Config file exists: $config_path"
    else
      echo "  ❌ Config file missing: $config_path"
      ((FAIL++))
    fi
  fi

  # If all checks passed
  if [ $missing_ids -eq 0 ]; then
    ((PASS++))
  fi

  echo ""
done

echo "======================================"
echo "📊 Test Results:"
echo "  ✅ Passed: $PASS lessons"
echo "  ❌ Failed: $FAIL issues"
echo "======================================"

if [ $FAIL -eq 0 ]; then
  echo "🎉 All tests passed!"
  exit 0
else
  echo "⚠️  Some issues found"
  exit 1
fi
