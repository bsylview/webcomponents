const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/angular-card/scripts.js',
    './dist/angular-card/polyfills-es5.js',
    './dist/angular-card/main-es2015.js',
  ];

  await fs.ensureDir('dist');
  await concat(files, 'dist/angular-card/angular-card-component.js');
})();

