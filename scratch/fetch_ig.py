import urllib.request
import re
import os

try:
    req = urllib.request.Request(
        'https://www.archkitchencabinets.com/',
        headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
    )
    with urllib.request.urlopen(req, timeout=10) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        print('HTML len:', len(html))
        # Find all images inside wp-content
        matches = set(re.findall(r'https://www\.archkitchencabinets\.com/wp-content/uploads/[^\"\'\s>]+\.(?:jpg|jpeg|png|webp)', html))
        print('Total unique wp-content uploads found:', len(matches))
        for m in sorted(matches):
            print(m)
except Exception as e:
    print('Error:', e)
