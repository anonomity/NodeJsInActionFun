"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var articles = [{ title: 'Example' }];
app.set('port', process.env.PORT || 3000);
app.get('/articles', function (req, res) {
    res.send(articles);
});
app.post('/articles', function (req, res) {
    res.send('Ok');
});
app.get('/articles/:id', function (req, res) {
    var id = req.params.id;
    console.log('Fetching:', id);
    res.send(articles[id]);
});
app["delete"]('/articles/:id', function (req, res) {
    var id = req.params.id;
    console.log('Deleting', id);
    delete articles[id];
    res.send({ message: 'Deleted' });
});
app.listen(app.get('port'), function () {
    console.log('App started on port ', app.get('port'));
});
