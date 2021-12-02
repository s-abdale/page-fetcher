const request = require('request');
const fs = require('fs')


// HTTP request
request('http://example.edu', (error, response, body) => {
  
  // Write to file
  fs.writeFile('/vagrant/w2/d3/page-fetcher/index.html', body, err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
    const {size} = fs.statSync('/vagrant/w2/d3/page-fetcher/index.html');
    console.log(`Downloaded and saved ${size} bytes to ./index.html`)
  })
});

