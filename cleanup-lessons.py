#!/usr/bin/env python3
"""
Music Producer Lab - Lesson Cleanup Script
Removes hardcoded content from hybrid lessons and uses pure modular system.
"""

import os
import re
from pathlib import Path

# Lessons to cleanup (have hardcoded content + modular imports)
HYBRID_LESSONS = [
    "lesson-drums-0.html",
    "lesson-drums-1.html",
    "lesson-drums-2.html",
    "lesson-drums-3.html",
    "lesson-drums-4.html",
    "lesson-drums-5.html",
    "lesson-drums-6.html",
    "lesson-drums-7.html",
    "lesson-drums-8.html",
    "lesson-drums-9.html",
    "lesson-drums-10.html",
    "lesson-drums-11.html",
    "lesson-drums-12.html",
    "lesson-drums-13.html",
    "lesson-arrangement-1.html",
    "lesson-arrangement-2.html",
    "lesson-arrangement-3.html",
]

# Pure template to use (178 lines, clean)
TEMPLATE_FILE = "lesson-template.html"

def get_config_import(lesson_file):
    """Extract the config import statement from a lesson file."""
    # Determine config filename based on lesson filename
    # e.g., lesson-drums-5.html -> configs/lesson-drums-5.config.js
    lesson_name = lesson_file.replace(".html", "")
    config_file = f"./configs/{lesson_name}.config.js"

    return config_file

def create_clean_lesson(lesson_file, template_content):
    """Create a clean lesson using the template."""
    config_file = get_config_import(lesson_file)

    # Replace the template's script import with the correct config using regex
    # Pattern to match the modular script section (after the HTML comment example)
    pattern = r'<script type="module">\s*// IMPORT YOUR CONFIG HERE.*?</script>'

    # New script section with correct import
    new_script = f"""<script type="module">
      // Import lesson config and engine
      import {{ lessonConfig }} from '{config_file}';
      import {{ initLessonFromConfig }} from './lesson-engine.js';

      // Initialize lesson from config
      initLessonFromConfig(lessonConfig);

      // Set year in footer
      document.getElementById("mpl-year").textContent = new Date().getFullYear();
    </script>"""

    # Replace script section using regex
    clean_content = re.sub(pattern, new_script, template_content, flags=re.DOTALL)

    return clean_content

def main():
    """Main cleanup process."""
    # Read template
    if not os.path.exists(TEMPLATE_FILE):
        print(f"❌ Template file not found: {TEMPLATE_FILE}")
        return

    with open(TEMPLATE_FILE, 'r', encoding='utf-8') as f:
        template_content = f.read()

    print(f"✅ Loaded template: {TEMPLATE_FILE} ({len(template_content)} chars)")

    # Process each hybrid lesson
    cleaned_count = 0
    skipped_count = 0

    for lesson_file in HYBRID_LESSONS:
        if not os.path.exists(lesson_file):
            print(f"⚠️  Skipped (not found): {lesson_file}")
            skipped_count += 1
            continue

        # Get file size before
        size_before = os.path.getsize(lesson_file)

        # Create clean version
        clean_content = create_clean_lesson(lesson_file, template_content)

        # Backup original
        backup_file = f"{lesson_file}.backup"
        with open(lesson_file, 'r', encoding='utf-8') as f:
            original_content = f.read()
        with open(backup_file, 'w', encoding='utf-8') as f:
            f.write(original_content)

        # Write clean version
        with open(lesson_file, 'w', encoding='utf-8') as f:
            f.write(clean_content)

        size_after = os.path.getsize(lesson_file)
        reduction = size_before - size_after

        print(f"✅ Cleaned: {lesson_file}")
        print(f"   Before: {size_before} bytes | After: {size_after} bytes | Reduced: {reduction} bytes")

        cleaned_count += 1

    print(f"\n📊 Summary:")
    print(f"   Cleaned: {cleaned_count} lessons")
    print(f"   Skipped: {skipped_count} lessons")
    print(f"   Backups saved as: *.html.backup")
    print(f"\n✅ Cleanup complete!")

if __name__ == "__main__":
    main()
