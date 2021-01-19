const pdfController = require('./controllers/pdf');

module.exports = ({ pdfEngine }) => {
  const controller = pdfController({ pdfEngine });
  return {
    handle: (req, res) => {
      if (req.url == '/pdf' && req.method === 'POST') {
        controller.create(req, res);
      }
    }
  };
}
