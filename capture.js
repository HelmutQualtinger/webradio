const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    const filePath = 'file://' + path.resolve(__dirname, 'index.html');
    await page.goto(filePath, { waitUntil: 'networkidle2' });
    await page.screenshot({ path: 'screenshot.png' });
    await browser.close();
    console.log('Screenshot saved to screenshot.png');
  } catch (error) {
    console.error('Error capturing screenshot:', error);
    process.exit(1);
  }
})();
