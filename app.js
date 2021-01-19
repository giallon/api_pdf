const express = require('express');
const cors = require('cors')
const app = express();

const PdfEngine = require('./core/pdf_engine');
const Router = require('./routes');

const pdf_engine = new PdfEngine(process.env.NB_PAGES);
const router = new Router({pdf_engine});

app.use(cors());
app.use(router.routes);

module.exports = app;
