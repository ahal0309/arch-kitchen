const fs = require('fs');
const path = require('path');

function getCodeFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next') {
        results = results.concat(getCodeFiles(fullPath));
      }
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.tsx', '.ts', '.jsx', '.js', '.json', '.css'].includes(ext)) {
        results.push(fullPath);
      }
    }
  });
  return results;
}

const files = getCodeFiles('src');
console.log('Found', files.length, 'code files in src.');

let totalReplacements = 0;
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;

  // Replace .png, .jpg, .jpeg with .webp in public path references
  content = content.replace(/(['"]\/[^'"]*?)\.(jpg|jpeg|png)(['"])/gi, (match, prefix, ext, suffix) => {
    return prefix + '.webp' + suffix;
  });

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf8');
    console.log('Updated image paths in:', f);
    totalReplacements++;
  }
});

console.log('Total files updated with .webp:', totalReplacements);
