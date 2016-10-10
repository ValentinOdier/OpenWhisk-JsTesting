'use strict';
// Get args
// 0: ignore
// 1: url to scrap
// 2: object to scrap

var system = require('system');
var args = system.args;

var toScrap = JSON.parse(args[2]);

var page = require('webpage').create();

page.open(args[1], function(status) {
    if (status === 'success') {
        var results = page.evaluate(function(toScrap) {
            var tmp = {};
            toScrap.selectors.forEach(function(element) {
                var rowData = document.evaluate(element.xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent;
                tmp[element.name] = rowData;
            })
            return tmp;
        }, toScrap);
        console.log(JSON.stringify({
            status: status,
            url: args[1],
            conf: args,
            data: results
        }));
        page.close();
        phantom.exit();
    } else {
        console.log(JSON.stringify({
            status: status,
            url: args[1],
            conf: args
        }));
        page.close();
        phantom.exit();
    }

});
