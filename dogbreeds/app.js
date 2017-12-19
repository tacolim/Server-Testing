const server = require('./server');
const port = 5005;

server.listen(port, () => {
    console.log(`Magic happens on port ${port}`);
})