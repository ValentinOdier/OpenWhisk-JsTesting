'use strict';

// This is basicaly a copy past of : http://heidloff.net/article/how-to-create-docker-actions-openwhisk-bluemix
// 
console.log('Creating server ...');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var scrap = require('./app.js');

app.use(bodyParser.json());

app.post('/init', (req, res) => {
    console.log('/init');
    res.status(200).send();
});

app.post('/run', (req, res) => {
    console.log('/run');

    //Unused var
    let meta = (req.body || {}).meta;

    let value = (req.body || {}).value;
    scrap(value.payload).then(() => {
        res.status(200).json({
            message: 'ok'
        })
    }).catch(() => {
        res.status(200).json({
            message: 'error'
        })
    })
})

app.listen(8080, () => {});
