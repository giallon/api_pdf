const express = require('express');

const router = express.Router();

//Pdf route
const pdfController = require('./controllers/pdf');
router.post('/pdf', pdfController.create);

module.exports = router
