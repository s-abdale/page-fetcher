const request = require('request'); // for HTTP request
const fs = require('fs') // for writing to file
const args = process.argv.slice(2); // takes cmd line arguments

let urlArg = args[0];
let pathArg = args[1];


// HTTP request
request(urlArg, (error, response, body) => {
  // Write to file
  fs.writeFile(pathArg, body, err => {
    if (err) {
      console.error(err)
      return
    }
    // Confirmation message
    const {size} = fs.statSync(pathArg);
    console.log(`Downloaded and saved ${size} bytes to ./index.html`)
  })
});
 

/*
// Testing: input the following url and path in the command line
  url = http://example.edu
  path = /vagrant/w2/d3/page-fetcher/index.html
*/
