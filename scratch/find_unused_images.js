const fs = require('fs');
const path = require('path');

function getCodeFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next') {
        results = results.concat(getCodeFiles(full));
      }
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.tsx', '.ts', '.jsx', '.js', '.json', '.css', '.html'].includes(ext)) {
        results.push(full);
      }
    }
  });
  return results;
}

function getAllFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(full));
    } else {
      results.push(full);
    }
  });
  return results;
}

const codeFiles = getCodeFiles('src');
const codeContent = codeFiles.map(f => fs.readFileSync(f, 'utf8')).join('\n');

const publicFiles = getAllFiles('public');
console.log('Total files in public/:', publicFiles.length);

const unusedFiles = [];
const usedFiles = [];

publicFiles.forEach(f => {
  const rel = path.relative('public', f).replace(/\\/g, '/');
  const baseName = path.basename(f);
  
  // Check if filename or relative path is mentioned anywhere in code
  // We also keep favicon.ico or robots.txt if any
  if (baseName === 'favicon.ico' || baseName === 'robots.txt') {
    usedFiles.push(rel);
    return;
  }

  // Check if mentioned in code (e.g. /rel or rel or baseName)
  const isUsed = codeContent.includes(rel) || codeContent.includes('/' + rel) || codeContent.includes(baseName);
  if (isUsed) {
    usedFiles.push(rel);
  } else {
    unusedFiles.push({ full: f, rel });
  }
});

console.log('\n--- USED ASSETS (' + usedFiles.length + ') ---');
usedFiles.sort().forEach(u => console.log('  ' + u));

console.log('\n--- UNUSED ASSETS (' + unusedFiles.length + ') ---');
unusedFiles.forEach(u => console.log('  ' + u.rel));
