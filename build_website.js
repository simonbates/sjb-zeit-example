const fs = require('fs');

const outputDir = 'public';

if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir);
}

fs.copyFileSync('index.html', 'public/index.html');
