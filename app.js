const config = require('config');
const express = require('express');
const cors = require('cors');

const app = express();

const PORT = config.get('port');

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

const find = (req, res, next) => {
    db.db().collection('notes').find().toArray((err, notes) => {
        if (err) throw err;

        res.send({ notes });
    });
    next();
};
app.use("/api", find);

/* Read */
app.get('/api', (req, res, next) => {

    /*
    It works properly (with "find" as a middleware) but gives "GET http://localhost:3000/undefined" into browser console
    I assume that it is because there are no some pictures in the database (which should be found somewhere in outer place via the link)

    But! This changes behavior of app.post('/api/createNote'...
    The block of "res.send({ result });" invokes the error (in the server console):
    "Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client"
    This error vanishes if "res.send({ result });" is commented (see string 58 in this file)

    **/

});

app.post('/api/createNote', (req, res) => {
    if (!req.body) return res.sendStatus(400);

    const note = req.body;

    db.db().collection('notes').insertOne(note, (err, result) => {
        if (err) throw err;

        //res.send({ result });
    });
});

