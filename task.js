const http = require("http");
const fs = require('fs');

const server = http.createServer(function (req, res) {

res.writeHead(200, {'Content-Type': 'text/plain'});

res.end ("A plain text.") });

http.get('http://jsonplaceholder.typicode.com/posts', (resp) => {
    let data = '';
    // A chunk of data has been received.
    resp.on('data', (chunk) => {
        data += chunk;
    });
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(data)
        fs.writeFile('result/post.json', data, function (err) {
      if (err) return console.log(err);
      console.log('saved');
    });  
        });
    
}).on("error", (err) => {
    console.log("Error: " + err.message);
});


server.listen(4000, '127.0.0.1');

console.log("I just created a server.")

