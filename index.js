"use strict";
/* globals require, __dirname, console */

const express = require('express');
const app = express();
const http = require('http').Server(app);
// const url = require('url');
const io = require('socket.io')(http);
const getAddresses = require('./src/scripts/server/addresses');
const fs = require('fs');

app.get('/', serveIndex);
app.get('/index.html', serveIndex);

function serveIndex(req, res) {
    res.sendFile(`${__dirname}/index.html`);
}

const nodeAssets = [{
    uri: '/assets/socket.io.js',
    path: __dirname + '/node_modules/socket.io-client/dist/socket.io.js'
}, {
    uri: '/assets/pixi.js',
    path: __dirname + '/node_modules/pixi.js/dist/pixi.js'
}, {
    uri: '/assets/pixi.min.js',
    path: __dirname + '/node_modules/pixi.js/dist/pixi.min.js'
}];
nodeAssets.forEach(asset => {
    app.get(asset.uri, (req, res) => {
        if (fs.existsSync(asset.path)) {
            res.sendFile(asset.path);
        } else {
            res.status(404).end();
        }
    });
});

app.get('/dist/:dir/:file', (req, res) => {
    res.sendFile(`${__dirname}/dist/${req.params.dir}/${req.params.file}`);
});

const port = 3030;
let addressArr = getAddresses().map(address => `${address}:${port}`);
let addressString = addressArr.join(', ');
http.listen(port, () => console.log(`listening on the following: ${addressString}`) );

io.on('connection', (socket) => {
    socket.on('disconnect', () => console.log('A user has disconnected'));
    console.log('A user has connected');
});
