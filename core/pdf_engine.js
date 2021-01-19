const puppeteer = require('puppeteer');
const Cluster = require('./cluster');

class PdfEngine {
  constructor(nbPage) {
    this.cluster = new Cluster(nbPage);
    this.cluster.on({ error: console.log });
    this.cluster.pushAll(async (data) => {
      if (data.page) { return; }
      if (!this.browser) {
        //TODO: pass properties as arguments in constructor
        this.browser = await puppeteer.launch({
          args: ['--no-sandbox'],
          headless: true
        });
      }
      data.page = await this.browser.newPage();
    });
  }

  toPdf(html, callback) {
    this.cluster.push(async ({ page }) => {
      await page.setContent(html);
      //TODO: add properties to pdf creation
      const buffer = await page.pdf();
      callback(buffer);
    });
  }
}

module.exports = PdfEngine;
