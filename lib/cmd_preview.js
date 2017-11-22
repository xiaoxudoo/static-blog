var express = require('express');
var path = require('path')
var open = require('open');
var utils = require('./utils');

module.exports = function (dir) {
    dir = dir || 'example'

    var app = express();
    app.use('/assets', express.static(path.resolve(dir, 'assets')))

    // 渲染文章
    app.get('/posts/*', function (req, res, next) {
        var name = utils.stripExtname(req.params[0])
        var file = path.resolve(dir, '_posts', name + '.md')
        var html = utils.renderPost(dir, file);
        res.send(html);
    })

    // 渲染列表
    app.get('/', function (req, res, next) {
        var html = utils.renderIndex(dir);
        res.send(html);
    })

    var config = utils.loadConfig(dir);
    var port = config.port || 3000;
    app.listen(port);
    // open('http://127.0.0.1:' + port);
}

