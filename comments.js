// Create web server
// Create a web server using the Express framework
// that returns the contents of the file comments.json
// in the browser when making a GET request to the root URL (/).

// The comments.json file contains an array of objects
// that represent comments people have posted on a blog.
// You should use the fs module to read the file in your
// program and then output the contents of the file in
// the response.

// -------------------------------------------------------------------------------

// ## HINTS

// Because it is a JSON file, you should use the
// JSON.parse() method to convert it from a string
// into a JavaScript object.

// -------------------------------------------------------------------------------

// ## NOTE

// For your own projects, the file comments.json will
// be in the same directory as your main application
// file (server.js). However, for the purposes of this
// exercise, we will place comments.json in a directory
// named "files" so you can learn how to navigate
// directory paths.

// -------------------------------------------------------------------------------

//  » To print these instructions again, run: learnyounode print
//  » To execute your program in a test environment, run: learnyounode run program.js
//  » To verify your program, run: learnyounode verify program.js
//  » For help run: learnyounode help

// -------------------------------------------------------------------------------

const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', (req, res) => {
  fs.readFile('comments.json', (err, data) => {
    if (err) {
      throw err;
    } else {
      res.send(JSON.parse(data));
    }
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
