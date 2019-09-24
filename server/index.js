const server = require('./server')

// const port = process.env.PORT || 3000

// server.listen(port, function () {
//   // eslint-disable-next-line no-console
//   console.log('Listening on port', port)
// })

let port = process.env.PORT || 3000
if (port == null || port == "") {
  port = 8000;
}
server.listen(port, function () {
    // eslint-disable-next-line no-console
    console.log('Listening on port', port)
})