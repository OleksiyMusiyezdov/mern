const config = require('config');
const express = require('express');
const cors = require('cors');
const connect = require('./dbConnection');

const createNoteValidation = require('./createNoteValidator');

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
    if (err) {
        console.log('Unable to connect to database');
        throw err;
    }
    console.log('Connection to database established');
    db = client;
    app.listen(PORT, '127.0.0.1', console.log(`Web-server is started on ${PORT}.`));
});
//const db = connect();

app.post('/api/createNote', (req, res) => {
    if (!req.body) return res.sendStatus(400);

    const note = req.body;

    // Validation
    let validationResponse = createNoteValidation(note);

    if (validationResponse.status === false) {

    } else {
        db.db().collection('notes').insertOne(note, (err, result) => {

            if (err) {
                console.log('Unable to insert the note to the database');
                throw err;
            }
        })
    };
    console.log(validationResponse.message);
    return res.status(200).send(validationResponse.message);
});

/* Read */
app.get('/api', async (req, res) => {

    console.log("In the get");
    let page = parseInt(req.query.page);
    let pageSize = parseInt(req.query.pageSize);
    let totalCount = await db.db().collection('notes').countDocuments();
    console.log("TotalCountFound: ", totalCount);
    console.log("CurrentPage: ", page);

    let notes;
    try {
        notes = await db.db().collection('notes').find().skip((page - 1) * pageSize).limit(pageSize).toArray();
    } catch (e) {
        console.log('Unable to get data from database');
    }
    res.send({ totalCount, notes });
});


