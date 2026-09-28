#!/bin/bash
# Regenerates exercises.js from whatever image files are in images/.
# Existing exercise names (matched by filename) are preserved; new images
# get a placeholder name (their filename) that you should edit by hand.
# Images removed from the folder are dropped from the list.
set -euo pipefail
cd "$(dirname "$0")"

find images -maxdepth 1 -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.gif" -o -iname "*.webp" \) \
  | xargs -I{} basename "{}" \
  | sort \
  | python3 -c "
import json, re, sys, os

files = [l.rstrip('\n') for l in sys.stdin]

existing = {}
if os.path.exists('exercises.js'):
    with open('exercises.js') as f:
        src = f.read()
    match = re.search(r'=\s*(\[.*\]);?\s*\$', src, re.S)
    if match:
        for entry in json.loads(match.group(1)):
            existing[entry['file']] = entry['name']

data = []
for f in files:
    name = existing.get(f, os.path.splitext(f)[0])
    data.append({'file': f, 'name': name})

if not data:
    print('No image files found in images/ - leaving exercises.js untouched.')
    sys.exit(1)

with open('exercises.js', 'w') as out:
    out.write('const EXERCISES = ')
    json.dump(data, out, indent=2, ensure_ascii=False)
    out.write(';\n')

print(f'Wrote exercises.js with {len(data)} images.')
new_files = [f for f in files if f not in existing]
if new_files:
    print('New images added with placeholder names (edit exercises.js to name them):')
    for f in new_files:
        print(' -', f)
"
