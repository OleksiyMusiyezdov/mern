const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
//const mongoose = require('mongoose');
const PORT = config.get('port') || 8080;
const app = express();

app.use(express.json({ extended: true }));

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/mern_db';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;
    console.log('Connection to database established');
    db = client;
    app.listen(PORT, '127.0.0.1', console.log(`Web-server is started on ${PORT}.`));
});


/* Read */
app.get('/api', (req, res) => {
    console.log('GET-request is working.' + req);

    db.db().collection('notes').find().toArray((err, notes) => {
        if (err) throw err;
        console.log(notes);

        //res.send({ notes: notes });
        return { notes: notes };
    });
});

/* addNewNote */
app.get('/api/createNote'), (req, res) => {
    if (!req.body) return res.sendStatus(400);
    var note = req.body;
    var text = JSON.stringify(note);
    console.log(`user UNINSERTED YET = ${text}`);
};

app.post('/api/createNote', urlencodedParser, (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    console.log("qwerty");

    if (!req.body) return res.sendStatus(400);
    var note = req.body;
    // var text = JSON.stringify(note);
    // console.log(`user UNINSERTED YET = ${text}`);

    db.db().collection('notes').insertOne(note, (err, result) => {
        if (err) throw err;
        console.log("result.ops " + JSON.stringify(result.ops));
        res.send({ result: result });
    });
});

