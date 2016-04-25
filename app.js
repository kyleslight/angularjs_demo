var v = require('express');
var app = express();

var mongoJs = require('mongojs');
var bodyParser = require('body-parser');
var server = require('http').createServer(app);
var db = mongoJs('contactlist', ['contactlist']);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// handle Mainrec
app.get('/', function (req, res){
    res.sendfile('index.html');
});
r
app.get('/grab', function (req, res) {
    res.sendfile('./public/grab.html');
});

app.get('/grabImage', function (req, res) {
    var data = {
        imgUrls: ['http://kyleslight.net/static/image/ky.png?v=3946a953126188e00716536dffdcb241', 'http://ww1.sinaimg.cn/large/a51018d9gw1f2isryj7v9j207n04u74a.jpg']
    };
    res.json(data);
});

//handle Contact

app.get('/getContact', function (req, res) {
    db.contactlist.find(function (err, docs) {
        res.json(docs);
    });
});
app.post('/postContact', function (req, res) {
    db.contactlist.insert(req.body, function (err, docs) {
        res.json(docs);
    });
});
app.delete('/deleteContact/:id', function (req, res) {
    var id = req.params.id;
    db.contactlist.remove({
        _id: mongoJs.ObjectId(id)
    }, function (err, docs) {
        res.json(docs);
    });
});

app.put('/modifyContact', function (req, res) {
    var contact = req.body;
    db.contactlist.findAndModify({
        query: {_id: mongoJs.ObjectId(contact._id)},
        update: {
            $set: {
                name: contact.name,
                tel: contact.tel,
                email: contact.email
            }
        },
        new: true
    }, function (err, docs) {
        res.json(docs);
    });
});

var server = app.listen(3000, 'localhost', function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

//handle Chat
var io = require('socket.io').listen(server);
io.on('connection', function (socket) {
    socket.on('chat', function(chat) {
        console.log(chat);
        io.emit('chat', chat);
    });
    io.on('disconnection', function (socket) {
    });
});


