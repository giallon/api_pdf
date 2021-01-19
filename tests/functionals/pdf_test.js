process.env.NODE_ENV = 'test';

const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiString = require('chai-string');
const app = require('../../app.js');
const fs = require('fs');

chai.should();
chai.use(chaiHttp);
chai.use(chaiString);

let server;

const port = process.env.PORT || 3000;

before((done) => {
  server = app.listen(port, () => {
    console.log('Test server listening on port ' + port)
    done();
  });
});

after((done) => {
  server.close();
  done();
});

describe('Pdf', () => {
  describe('/POST pdf', () => {
    it('should generate PDF from html document', (done) => {
      chai.request(server)
        .post('/pdf')
        .send('<html><body>Hello World</body></html>')
        .buffer()
        .end((err, res) => {
          if (err) { done(err); }
          res.should.have.status(200);
          string = res.body.toString();
          string.should.startWith('%PDF-1.4');
          string.trim().should.endWith('%%EOF');
          expect(string).to.have.lengthOf.above(100);
          done();
        });
    });

    it('should generate PDF from html document with long lines', (done) => {
      chai.request(server)
        .post('/pdf')
        .send(fs.readFileSync("./tests/fixtures/document_with_long_line.html"))
        .buffer()
        .end((err, res) => {
          if (err) { done(err); }
          res.should.have.status(200);
          string = res.body.toString();
          string.should.startWith('%PDF-1.4');
          string.trim().should.endWith('%%EOF');
          expect(string).to.have.lengthOf.above(100);
          done();
        });
    });
  });
});
