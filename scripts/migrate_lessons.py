import os
import re
import json
import glob

# Paths
CONFIGS_DIR = '/home/user/webapp/public/configs'
OUTPUT_FILE = '/home/user/webapp/lib/lessons-db.json'

def parse_js_object(content):
    """
    A gentle parser to extract the JSON-like object from the JS file.
    Since we can't eval JS in Python, we use regex to extract the object content
    and then do some string cleanup to make it JSON-parseable.
    """
    # Find the object after "export const lessonConfig ="
    match = re.search(r'export const lessonConfig = ({[\s\S]*?});', content)
    if not match:
        return None
    
    obj_str = match.group(1)
    
    # Very basic cleanup to make it look like JSON (this is a heuristic approach)
    # 1. Quote unquoted keys
    obj_str = re.sub(r'(\s)(\w+):', r'\1"\2":', obj_str)
    # 2. Convert single quotes to double quotes
    obj_str = obj_str.replace("'", '"')
    # 3. Remove trailing commas
    obj_str = re.sub(r',(\s*[}\]])', r'\1', obj_str)
    # 4. Remove comments
    obj_str = re.sub(r'//.*', '', obj_str)
    
    # Handle function calls like applyMessagePreset(...) - we can't execute them, so we stub them
    obj_str = re.sub(r'applyMessagePreset\(.*?\)', '{"initial": "Complete the exercise to continue."}', obj_str)
    obj_str = re.sub(r'buildHeroEyebrow\(.*?\)', '"Lesson"', obj_str)
    
    try:
        # Try to parse strict JSON first
        return json.loads(obj_str)
    except:
        # Fallback: Extraction by manual regex for specific fields if JSON parsing fails
        # This is safer for complex JS files
        return manual_extraction(content)

def manual_extraction(content):
    data = {}
    
    # Extract simple string fields
    def get_field(key):
        match = re.search(fr'{key}:\s*["\'](.*?)["\']', content)
        return match.group(1) if match else ""

    # Extract nested fields via regex is hard, so we assume standard structure
    data['lessonKey'] = get_field('lessonKey')
    data['lessonNumber'] = get_field('lessonNumber')
    data['lessonCategory'] = get_field('lessonCategory')
    
    # Hero extraction
    hero_match = re.search(r'hero:\s*{([\s\S]*?)}', content)
    if hero_match:
        hero_content = hero_match.group(1)
        data['hero'] = {
            'title': re.search(r'title:\s*["\'](.*?)["\']', hero_content).group(1) if re.search(r'title:\s*["\'](.*?)["\']', hero_content) else "",
            'subtitle': re.search(r'subtitle:\s*["\'](.*?)["\']', hero_content).group(1) if re.search(r'subtitle:\s*["\'](.*?)["\']', hero_content) else ""
        }
        
    return data

def fix_content(text):
    """Applies editorial fixes to the content"""
    if not text:
        return ""
        
    # FIX: Techno BPM dogma
    if "Techno" in text and ("130" in text or "error" in text):
        text = text.replace("125-130 BPM", "125-150+ BPM")
        text = text.replace("Making house music at 140", "Making deep house at 140") # Context fix
        
    return text

def main():
    lessons_list = []
    files = glob.glob(os.path.join(CONFIGS_DIR, 'lesson-*.config.js'))
    files.sort() # Ensure some order
    
    print(f"Found {len(files)} config files. Starting migration...")
    
    for fpath in files:
        filename = os.path.basename(fpath)
        slug = filename.replace('.config.js', '').replace('lesson-', '')
        
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Parse data
        # Note: Since the JS files are complex, we might get partial data. 
        # For this prototype, we extract the critical parts manually if needed.
        
        # We construct a clean object
        lesson = {
            'slug': slug,
            'filename': filename,
            'title': '',
            'category': '',
            'content': content # We store the raw content for now to be safe, or we could extract specifics
        }
        
        # Extract Title
        title_match = re.search(r'title:\s*["\'](.*?)["\']', content)
        if title_match:
            lesson['title'] = title_match.group(1)
            
        # Extract Category
        cat_match = re.search(r'lessonCategory:\s*["\'](.*?)["\']', content)
        if cat_match:
            lesson['category'] = cat_match.group(1)
            
        # Extract Number
        num_match = re.search(r'lessonNumber:\s*(\d+)', content)
        if num_match:
            lesson['number'] = int(num_match.group(1))
        else:
            lesson['number'] = 999
            
        # Apply Content Fixes to the raw content before saving (simple replace in string)
        lesson['content'] = fix_content(lesson['content'])
        
        lessons_list.append(lesson)
        print(f"Processed: {slug}")

    # Sort by number
    lessons_list.sort(key=lambda x: x['number'])
    
    # Save to JSON
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(lessons_list, f, indent=2)
        
    print(f"\nSUCCESS! Migrated {len(lessons_list)} lessons to {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
