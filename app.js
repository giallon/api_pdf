const http = require('http');

const PdfEngine = require('./core/pdf_engine');
const pdfEngine = new PdfEngine(process.env.NB_PAGES);
const routes = require('./routes')({pdfEngine});

module.exports = http.createServer((req, res) => {
  routes.handle(req, res);
});
