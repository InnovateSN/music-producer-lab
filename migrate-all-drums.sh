#!/bin/bash
# Batch migrate all drums lessons 2-20

echo "🚀 Starting batch migration of drums lessons 2-20..."
echo ""

SUCCESS_COUNT=0
FAIL_COUNT=0

for i in {2..20}; do
  echo "────────────────────────────────────────"
  echo "Migrating lesson-drums-$i.html..."
  python3 migrate-lesson.py $i drums

  if [ $? -eq 0 ]; then
    ((SUCCESS_COUNT++))
  else
    ((FAIL_COUNT++))
  fi
  echo ""
done

echo "════════════════════════════════════════"
echo "✨ Migration complete!"
echo "✅ Success: $SUCCESS_COUNT lessons"
echo "❌ Failed: $FAIL_COUNT lessons"
echo "════════════════════════════════════════"
