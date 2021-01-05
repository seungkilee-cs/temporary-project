const http = require('http');

const port = 3000;
const message = 'React Native Dev Environment is running...';
const server = http.createServer((req, res) => res.end(message));

server.listen(port, err => {
    if (err) return console.log('An Error Occured. ', err)

    console.log(message)
})