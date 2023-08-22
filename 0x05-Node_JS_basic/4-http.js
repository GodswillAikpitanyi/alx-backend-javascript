const http = require('http');

const app = http.createServer();
const hostname = '127.0.0.1';
const port = 1245;

app.on('request', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello Holberton School!');
  res.end();
});

app.listen(port, hostname, () => {
  process.stdout.write(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
