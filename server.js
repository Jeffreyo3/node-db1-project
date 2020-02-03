const express = require('express');

// const db = require('./data/dbConfig.js');
const accountRouter = require('./routes/accountRouter');

const server = express();

server.use(express.json());
server.use('/api/accounts', accountRouter);

server.get('/', (req, res) => {
    res.send('<h2>jeffreyo3\'s Server is Listening....</h2>');
});

server.get('/api/', (req, res) => {
    res.send('<h2>jeffreyo3\'s Accounts API is Alive!</h2>');
});


module.exports = server;