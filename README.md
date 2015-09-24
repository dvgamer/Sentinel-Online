# Sentinel Online

## วิธีใช้

    node app.server.js

มันไว้ใช้เป็น Webserver สำหรับดูข้อมูลต่างๆ บน MiniPC ที่ใช้เป็น Server อยู่

1. เปิดเว็บ Webserver ทีเป็น jsx เอง `touno-k.info`
2. `php-dev.touno-k.info` สำหรับใช้ พัฒนาภาษา PHP
3. เป็น ftp ด้วยสำหรับ uploadfile

### `socket()` method is available in any controller
    action('some-action', function () {
        socket().emit('event', {some: 'data'}); // send 'event' to all clients in current session
        socket(anotherSessionID).emit('hello'); // send 'hello' to another user
                                                // identified by anotherSessionID

        var clients = socket().connected;       // list of current session clients
        clients.forEach(function (client) {
            client.join('room');                // all current session clients join a room
        });
    });

Any controller action (both socket and non-socket) can emit some event with any client.

### Responding to the current request
#### Server side:
`app/controllers/some-controller.js`

    action('join', function () {
        send({ foo: 'bar' });
    });
#### Client side:
    socket.emit('join', {}, function (data) {
        console.log(data.foo); // bar
    });

## Inner structure
All socket.io connections automatically join a room named after the compound sessionID.
If you want to communicate with another user you can specify their sessionID as param for the `socket` method.

## License

   MIT