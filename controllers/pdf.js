const {readbody} = require('../util');
const { Engine } = require('../core/engine');

const engine = new Engine();

const PdfController = {};

PdfController.create = async (req, res) => {
    const body = await readbody(req);
    engine.toPdf(body, async (buffer) => {
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Length': buffer.length
        });
        res.send(buffer);
    });
};

module.exports = PdfController;
