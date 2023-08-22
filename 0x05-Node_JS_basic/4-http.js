const app = require('http');

const hostname = '127.0.0.1';
const port = 1245;

const server = app.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello Holberton School!');
  res.end();
});

server.listen(port, hostname, () => {
  process.stdout.write(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;