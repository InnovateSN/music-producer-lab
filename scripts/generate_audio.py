import json
import os
import asyncio
import edge_tts

# Configuration
LESSONS_DB_PATH = '/home/user/webapp/lib/lessons-db.json'
OUTPUT_DIR = '/home/user/webapp/public/audio/lessons'
VOICE = "en-US-ChristopherNeural"  # Professional male voice

async def generate_lesson_audio(lesson, index, total):
    slug = lesson.get('slug')
    title = lesson.get('title', '')
    
    # Extract subtitle carefully (it might be HTML)
    hero = lesson.get('hero', {})
    subtitle = hero.get('subtitle', '') if isinstance(hero, dict) else ''
    
    # Strip HTML tags for TTS
    subtitle_clean = subtitle.replace('<strong>', '').replace('</strong>', '').replace('<br>', '. ')
    
    # Create the script
    # "Welcome to Lesson 1: 4 on the Floor. [Subtitle]. Let's get to the studio."
    number = lesson.get('lessonNumber', index + 1)
    text = f"Welcome to Lesson {number}: {title}. {subtitle_clean} Let's head into the studio and build this."
    
    output_path = os.path.join(OUTPUT_DIR, f"{slug}.mp3")
    
    print(f"[{index+1}/{total}] Generating audio for: {slug}...")
    
    try:
        communicate = edge_tts.Communicate(text, VOICE)
        await communicate.save(output_path)
    except Exception as e:
        print(f"ERROR generating {slug}: {e}")

async def main():
    # Ensure output directory exists
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    # Read DB
    try:
        with open(LESSONS_DB_PATH, 'r', encoding='utf-8') as f:
            lessons = json.load(f)
    except FileNotFoundError:
        print(f"Error: Database not found at {LESSONS_DB_PATH}")
        return

    # Filter for testing (First 10 lessons + Drums 1 specifically if missed)
    # In production, remove this slice to do ALL lessons
    target_lessons = lessons[:10] 
    
    # Find drums-1 if not in first 10
    drums1 = next((l for l in lessons if l['slug'] == 'drums-1'), None)
    if drums1 and drums1 not in target_lessons:
        target_lessons.append(drums1)

    print(f"Starting audio generation for {len(target_lessons)} lessons...")
    
    for i, lesson in enumerate(target_lessons):
        await generate_lesson_audio(lesson, i, len(target_lessons))
        
    print("\n✅ Audio generation complete!")

if __name__ == "__main__":
    asyncio.run(main())
