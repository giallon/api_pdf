const puppeteer = require('puppeteer');
const { Cluster } = require("./cluster");

class Engine {
    constructor() {
        this.cluster = new Cluster(4);
        this.cluster.onError((error) => {
            console.log(error);
        });
        this.cluster.all(async(data) => {
            if (data.page){ return ; }
            if (!this.browser) {
                this.browser =  await puppeteer.launch({
                    args: ['--no-sandbox'],
                    headless: true
                });
            }
            data.page = await this.browser.newPage();
        });
    }

    toPdf(html, callback) {
        this.cluster.push(async  ({page}) => {
            await page.setContent(html);
            const buffer = await page.pdf();
            callback(buffer);
        });
    }
}

module.exports ={ Engine };
