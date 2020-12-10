const config = require('config');
const express = require('express');
const cors = require('cors');

const app = express();

const PORT = config.get('port') || 8080;

app.use(
    cors(),
    express.json(),
    express.urlencoded({ extended: true }),
);

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
    db.db().collection('notes').find().toArray((err, notes) => {
        if (err) throw err;

        res.send({ notes });
    });
});

app.post('/api/createNote', (req, res) => {
    if (!req.body) return res.sendStatus(400);

    const note = req.body;

    db.db().collection('notes').insertOne(note, (err, result) => {
        if (err) throw err;
        
        res.send({ result });
    });
});

