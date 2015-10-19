var MongoClient = require('mongodb').MongoClient, assert = require('assert');
var bouncy = require('bouncy'), ini = require('iniparser'), Q = require('q');

var url = 'mongodb://192.168.10.217:27017/domain';

var server = bouncy(function (req, res, bounce) {
    // var deferred = Q.defer();

    // Q.fcall(promisedStep1)
    // .then(promisedStep2)
    // .then(promisedStep3)
    // .then(promisedStep4)
    // .then(function (value4) {
    //     // Do something with value4
    // })
    // .catch(function (error) {
    //     // Handle any error from all above steps
    // })
    // .done();

    // FS.readFile("foo.txt", "utf-8", function (error, text) {
    //     if (error) {
    //         deferred.reject(new Error(error));
    //     } else {
    //         deferred.resolve(text);
    //     }
    // });
    // return deferred.promise;

    // ini.parse('./config.ini', function(err,data){
        
    // });
    

    MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);
      console.log("Connected", req.headers.host,"correctly to server.");
      db.close();

      bounce(8002);
    });


});

server.listen(80);