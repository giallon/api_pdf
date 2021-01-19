const express = require('express');
const PdfController = require('./controllers/pdf');

class Router {
  constructor({ pdf_engine }) {
    this._init_controllers({ pdf_engine });
    this._init_routes();
  }

  _init_controllers({ pdf_engine }) {
    this.pdfController = new PdfController(pdf_engine);
  }

  _init_routes() {
    this.routes = express.Router();
    this.routes.post('/pdf', this.pdfController.create);
  }
}

module.exports = Router;
