---
title: Set up a simple Node http Server
summary: http API in node to spin up a simple server
---

- Spin up a server on port `3000`, `console.log` the url and method, and exit:
  ```javascript
  const http = require('http');

  const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    process.exit();
  })

  server.listen(3000);
  ```

- Serve a simple HTML document:
  ```javascript
  const http = require('http');

  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html'); // set served document type to be HTML
    res.write('<html>');
    res.write('<head><title>Hello World!</title></head>');
    res.write('<body><h1>Hello World!</h1></body>');
    res.write('</html>');
    res.end(); // calling res.write() after res.end() will throw an error
  })

  server.listen(3000);
  ```

- Write user input to a file:
  ```javascript
  const http = require('http');
  const fs = require('fs');

  const server = http.createServer((req, res) => {
    const { url, method } = req;
    if (url === '/') { // if on homepage
      res.write(
        `<html>
          <head>
            <title>Enter a message</title>
          </head>
          <body>
            <form action="/message" method="POST">
              <input type="text" name="message">
              <button type="submit">Send message</button>
            </form>
          </body>
        </html>`);
      return res.end(); // return to not res.write() anymore
    }
    if (url === '/message' && method === 'POST') { //if on localhost:3000/message and method used is POST
      const body = []; // will hold chunks one by one on data event
      req.on('data', (chunk) => {
        body.push(chunk); // push chunks to body
      })
      req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString(); // concat all the chunks in body to form a string since we know it's text
        const text = parsedBody.split('=')[1]; // grab only the value
        fs.writeFileSync('message.txt', text); // write the value to a file by the name message.txt
      })
      res.statusCode = 302; // set the status code to a success
      res.setHeader('Location', '/'); // redirect to homepage
      return res.end(); // end response and return
    }
    res.write(`<html><head><title>The message</title></head><body><a href="/">Home</a></body></html>`);
    res.end();
  })

  server.listen(3000);
  ```
