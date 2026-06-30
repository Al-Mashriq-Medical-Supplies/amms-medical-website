const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public/images/clients');

const logos = [
  { name: 'fisher-paykel.png', url: 'https://logo.clearbit.com/fphcare.com' },
  { name: 'penlon.png', url: 'https://logo.clearbit.com/penlon.com' },
  { name: 'breas.png', url: 'https://logo.clearbit.com/breas.com' },
  { name: 'cosmed.png', url: 'https://logo.clearbit.com/cosmed.com' },
  { name: 'baxter.png', url: 'https://logo.clearbit.com/baxter.com' },
  { name: 'sefam.png', url: 'https://logo.clearbit.com/sefam.com' },
  { name: 'maxtec.png', url: 'https://logo.clearbit.com/maxtec.com' },
  { name: 'idmed.png', url: 'https://logo.clearbit.com/idmed.fr' },
  { name: 'bio-med.png', url: 'https://logo.clearbit.com/biomeddevices.com' },
  { name: 'porter.png', url: 'https://logo.clearbit.com/porterinstrument.com' },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(dest);
    protocol.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        download(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(dest);
        reject(new Error(`HTTP ${response.statusCode} for ${url}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => { file.close(); resolve(dest); });
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      reject(err);
    });
  });
}

async function main() {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  for (const logo of logos) {
    const dest = path.join(dir, logo.name);
    try {
      await download(logo.url, dest);
      const stats = fs.statSync(dest);
      console.log(`✓ ${logo.name} (${stats.size} bytes)`);
    } catch (err) {
      console.log(`✗ ${logo.name}: ${err.message}`);
    }
  }
}

main();
