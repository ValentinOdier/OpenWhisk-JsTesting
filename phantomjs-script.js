'use strict';
// Get args
// 0: ignore
// 1: url to scrap
// 2: object to scrap

var system = require('system');
var args = system.args;

var toScrap = JSON.parse(args[2]);

//console.log(args[0], args[1], args[2]);
var page = require('webpage').create();

page.open(args[1], function(status) {
    //var results = {};
    //console.log(args, status);
    if (status === 'success') {
        //console.log(' Page loaded ! ', toScrap.url);

        var results = page.evaluate(function(toScrap) {
            var tmp = {};
            toScrap.selectors.forEach(function(element) {
                var rowData = document.evaluate(element.xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent;
                tmp[element.name] = rowData;
            })
            return tmp;
        }, toScrap);

        // for (var i = toScrap.selectors.length - 1; i >= 0; i--) {
        //     var element = toScrap.selectors[i];
        //     var rowData = page.evaluate(function(xpath) {
        //         return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent;
        //     }, element.xpath);
        //     //console.log(i + '-' + element.name + '-' + rowData);
        //     results[element.name] = rowData;
        // }
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
