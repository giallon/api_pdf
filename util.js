function readbody(req) {
    return new Promise((res, rej) => {
        let body = '';
        req.on("data", c => body += c)
        req.on('end', () => res(body))
    })
}

module.exports = { readbody }
