function readStream(req) {
  return new Promise((res) => {
    let data = '';
    req.on('data', c => data += c)
    req.on('end', () => res(data))
  });
}

module.exports = { readStream }
