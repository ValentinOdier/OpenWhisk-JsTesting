'use strict';

var elasticsearch = require('elasticsearch');

//var env = require('./env.js');
var scrapConfig = require('./scrapConfig.js');

var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs-prebuilt')
var binPath = phantomjs.path
    //var binPath = './phantomjs/bin';

function scrapConf(configuration) {
    var childArgs = [
        path.join(__dirname, 'phantomjs-script.js'),
        configuration.url, JSON.stringify(configuration)
    ]
    return new Promise((resolve, reject) => {
        new Promise((resolve, reject) => {
            console.log('Calling phantomjs', configuration.url);

            var child = childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
                if (err || !stdout) {
                    reject(err)
                    return;
                }
                // handle results in stdout
                //console.log('output', stdout, stderr);

                var data = JSON.parse(stdout).data;
                // We have data now we just need to save them
                console.log('Data : ', data);
                console.log('Debug : ', stderr);
                resolve(data);
            })
            child.on('close', () => {
                console.log('Child close')
            })
        }).then((data) => {
            console.log('Saving data');
            if (configuration.elastic && configuration.elastic.url) {
                let elasticClient = new elasticsearch.Client({
                    host: configuration.elastic.url,
                    log: 'trace'
                })

                return elasticClient.index({
                    index: configuration.elastic.index,
                    type: configuration.elastic.objectType,
                    body: data
                })
            }
        }).then(() => {
            console.log('All clear at ', Date.now())
            resolve();
        }).catch((err) => {
            console.log(err);
            reject();
        })
    })
}

module.exports = scrapConf;
