const { readStream } = require('../util');

class PdfController {
  constructor(engine) {
    this.engine = engine;
    this.create = this._create.bind(this);
  }

  async _create(req, res) {
    const body = await readStream(req);
    this.engine.toPdf(body, async (buffer) => {
      res.set({
        'Content-Type': 'application/pdf',
        'Content-Length': buffer.length
      });
      res.send(buffer);
    });
  }
}

module.exports = PdfController;
