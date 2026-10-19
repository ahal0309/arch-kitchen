import urllib.request
import re

try:
    req = urllib.request.Request(
        'https://www.archkitchencabinets.com/',
        headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
    )
    with urllib.request.urlopen(req, timeout=10) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        # find all sb_instagram or sbi image references or feed items
        sbi_imgs = re.findall(r'(?:https://[^\s\"\']+(?:sb-instagram|sbi|instagram|uploads)[^\s\"\']+\.(?:jpg|jpeg|png|webp))', html)
        print("Matches with instagram/sbi:")
        for img in set(sbi_imgs):
            if 'instagram' in img or 'sb-' in img or 'sbi' in img:
                print(img)
except Exception as e:
    print("Error:", e)
