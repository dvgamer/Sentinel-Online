var config = require('./config/connection');
var express = require('express'), http = require('http'), rewrite = require("connect-url-rewrite"), ejs = require('ejs'), app = express();
var mongo = require('mongodb'), monk = require('monk'), db = monk('mongodb://192.168.10.217:27017/');

app.set('view engine', 'ejs');
app.set('views', __dirname+'/html');
app.set('view options', { layout:false, root: __dirname + '/html' } );

app.use("/libs", express.static(__dirname+'/includes'));
app.use('*', function(req, res, next){
    req.db = db;
    next();
});
app.use("/component", require('./web_router/component'));

app.get('/:com?', function(req, res){
    var db = req.db, com = req.params.com;
    console.log(">", req.ip, 'client.run(' +(com ? com : '')+')');

    res.render('index', {
		'network' : (req.hostname == 'touno-pc' ? true : false),
		'menu': require('./config/menu_navigator'),
		'com': com
	});
});

http.createServer(app).listen(config.web.port, config.web.ip);
console.log('Server running at http://' + config.web.ip + ':' + config.web.port +'/');
