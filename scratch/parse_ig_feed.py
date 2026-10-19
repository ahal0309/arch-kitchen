import urllib.request
import re

req = urllib.request.Request(
    'https://www.archkitchencabinets.com/',
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
)
with urllib.request.urlopen(req, timeout=10) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

# print details of the 8 items
# find sbi_item
items = re.findall(r'<div[^>]*class=\"[^\"]*sbi_item[^\"]*\"[^>]*>(.*?)(?=<div[^>]*class=\"[^\"]*sbi_item|\Z)', html, re.DOTALL)
for i, item in enumerate(items[:8]):
    img = re.search(r'data-full-res=\"([^\"]+)\"|src=\"([^\"]+)\"', item)
    caption = re.search(r'data-title=\"([^\"]+)\"|alt=\"([^\"]+)\"', item)
    link = re.search(r'href=\"([^\"]+)\"', item)
    print(f"--- Item {i+1} ---")
    print("Img:", img.group(1) or img.group(2) if img else None)
    print("Caption:", caption.group(1) or caption.group(2) if caption else None)
    print("Link:", link.group(1) if link else None)
