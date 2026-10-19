import urllib.request
import re
import json

req = urllib.request.Request(
    'https://www.archkitchencabinets.com/',
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
)
with urllib.request.urlopen(req, timeout=10) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

items = re.findall(r'<div[^>]*class=\"[^\"]*sbi_item[^\"]*\"[^>]*>(.*?)(?=<div[^>]*class=\"[^\"]*sbi_item|\Z)', html, re.DOTALL)
results = []
for i, item in enumerate(items[:8]):
    img_match = re.search(r'data-full-res=\"([^\"]+)\"|src=\"([^\"]+)\"', item)
    caption_match = re.search(r'data-title=\"([^\"]+)\"|alt=\"([^\"]+)\"', item)
    img_url = (img_match.group(1) or img_match.group(2)).replace('&#038;', '&') if img_match else None
    caption_raw = (caption_match.group(1) or caption_match.group(2)) if caption_match else ''
    
    # Clean HTML entities from caption
    caption_clean = re.sub(r'<[^>]+>', ' ', caption_raw).strip()
    
    local_path = f'public/ig_post_{i+1}.jpg'
    print(f"Downloading item {i+1}...")
    try:
        # download with browser user-agent
        img_req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        with urllib.request.urlopen(img_req, timeout=10) as img_resp:
            with open(local_path, 'wb') as f:
                f.write(img_resp.read())
        print(f"Saved {local_path}!")
        results.append({'id': i+1, 'local': f'/ig_post_{i+1}.jpg', 'caption': caption_clean[:110] + '...'})
    except Exception as e:
        print(f"Failed {i+1}:", e)

with open('scratch/ig_feed_data.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2)
print("Finished!")
