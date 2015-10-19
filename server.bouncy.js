var bouncy = require('bouncy'),assert = require('assert'), ini = require('iniparser'), Q = require('q');
var server = bouncy(function (req, res, bounce) {

    var configuration = function(filename) {
        var deferred = Q.defer();
        ini.parse(filename, function(err, data){
            if (err) { deferred.reject(err); }
            deferred.resolve(data);
        });
        return deferred.promise;
    }

    configuration('./lib/config.ini').then(function (config) {
        var db = require('monk')(config.database.ip+':'+config.database.port+'/'+config.database.name);

        if(/192.168.[\d|.]+/ig.exec(req.headers.host)) {
            console.log('>>>', req.connection.remoteAddress, ':', config.web.port);
            bounce(config.web.port);
        } else {
            db.get('map_port').find({ id: req.headers.host }, function (err, item){
                assert.equal(null, err);
                assert.noEqual([], item);
                bounce(item.port);
                db.close();
                console.log('>>>', req.connection.remoteAddress, ':', item.port);
            });
        }
    }, function (error) {
        console.log('error');
    });

});

server.listen(80);