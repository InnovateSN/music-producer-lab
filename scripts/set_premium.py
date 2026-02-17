import json
import os

DB_PATH = '/home/user/webapp/lib/lessons-db.json'

def main():
    if not os.path.exists(DB_PATH):
        print("Database not found!")
        return

    with open(DB_PATH, 'r', encoding='utf-8') as f:
        lessons = json.load(f)

    # The "Hook" lessons (Free)
    free_slugs = ['drums-1', 'drums-2', 'drums-3', 'drums-0']
    
    count_free = 0
    count_paid = 0

    for lesson in lessons:
        slug = lesson.get('slug', '')
        
        # Check if it's one of the free ones
        if slug in free_slugs:
            lesson['access'] = 'free'
            count_free += 1
        else:
            lesson['access'] = 'paid'
            count_paid += 1

    # Save back
    with open(DB_PATH, 'w', encoding='utf-8') as f:
        json.dump(lessons, f, indent=2)

    print(f"✅ BLINDATURA COMPLETATA.")
    print(f"🔓 Lezioni Gratis: {count_free}")
    print(f"🔒 Lezioni Premium: {count_paid}")
    print(f"Total: {len(lessons)}")

if __name__ == "__main__":
    main()
