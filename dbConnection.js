module.exports = function dbConnection() {
    const cors = require('cors');

    const express = require('express');
    const app = express();
    app.use(cors());


    const config = require('config');
    const PORT = config.get('port');

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
        return db;
    });

}