// An HTTP server that displays students information
// when visiting /students route

const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

// Get the database file path from command-line arguments
const database = process.argv[2];

// Create the HTTP server
const app = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);

  if (pathname === '/') {
    // Root endpoint
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (pathname === '/students') {
    // Students endpoint
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    // Use countStudents and capture its output
    countStudents(database)
      .then((result) => {
        if (result) {
            res.write(`${result}\n`);
        }
        res.end();
      })
      .catch((err) => {
        res.write(`${err.message}\n`);
        res.end();
      });
  } else {
    // 404 for unknown routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

// Export the app
module.exports = app;
