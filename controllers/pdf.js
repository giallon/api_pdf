const { readStream } = require('../util');

module.exports = ({ pdfEngine }) => ({
  create: async (req, res) => {
    const body = await readStream(req);
    pdfEngine.toPdf(body, async (buffer) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Length', buffer.length);
      res.end(buffer);
    });
  }
});
