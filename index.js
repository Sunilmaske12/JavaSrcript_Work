const puppeteer = require('puppeteer');

const headerHTML = `
  <div style="width: 100%; text-align: center; font-size: 10px; color: #333; padding: 5px; border-bottom: 1px solid #ccc;">
    Header Content Here
  </div>
`;

const footerHTML = `
  <div style="width: 100%; text-align: center; font-size: 10px; color: #333; padding: 5px; border-top: 1px solid #ccc;">
    Page <span class="pageNumber"></span> of <span class="totalPages"></span>
  </div>
`;

async function generatePDF(url, outputFile) {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });

    await page.pdf({
      path: outputFile,
      format: 'A4',
      displayHeaderFooter: true,
      headerTemplate: headerHTML,
      footerTemplate: footerHTML,
      printBackground: true,
      margin: {
        top: '60px',
        bottom: '60px'
      }
    });

    await browser.close();
  } catch (err) {
    console.error(err);
  }
}

const url = 'https://www.google.com/';
const outputFile = 'output11.pdf';

generatePDF(url, outputFile);
