import urllib.request
import re
import json

req = urllib.request.Request(
    'https://www.archkitchencabinets.com/',
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
)
with urllib.request.urlopen(req, timeout=10) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

# Extract SBI feed data or item blocks
# In Smash Balloon Instagram Feed plugin, feed items are inside .sbi_item
items = re.findall(r'<div[^>]*class=\"[^\"]*sbi_item[^\"]*\"[^>]*>(.*?)</div>\s*</div>', html, re.DOTALL)
print('Found sbi_items:', len(items))

# Let's find images, links, captions from sbi
# Or extract directly from data-sbi-context or sbi_photo
photos = re.findall(r'href=\"(https://www\.instagram\.com/[^\"]+)\"[^>]*>.*?<img[^>]*src=\"([^\"]+)\"[^>]*alt=\"([^\"]*)\"', html, re.DOTALL)
print('Found sbi photos via regex:', len(photos))
if not photos:
    # Alternative regex
    photos = re.findall(r'class=\"sbi_photo\"[^>]*href=\"([^\"]*)\"[^>]*>.*?<img[^>]*src=\"([^\"]*)\"[^>]*alt=\"([^\"]*)\"', html, re.DOTALL)
    print('Alternative photos:', len(photos))

data = []
# Also find all cdninstagram urls
cdn_urls = re.findall(r'https://scontent[^\s\"\'<>]+\.jpg', html)
print('Total cdn urls:', len(cdn_urls))

for i, url in enumerate(cdn_urls[:8]):
    print(f'Downloading IG image {i+1}...')
    try:
        urllib.request.urlretrieve(url, f'public/ig_feed_{i+1}.jpg')
        data.append(f'/ig_feed_{i+1}.jpg')
    except Exception as e:
        print('Error downloading:', e)

print('Downloaded IG photos:', len(data))
