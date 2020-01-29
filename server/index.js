const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan');
const mongo = require('../database/index.js');

// app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.json());
app.use(morgan('tiny'))
app.use(express.static(__dirname + '/../client/dist'));

app.get('/image', (req, res) => {
    mongo.get((err, data) => {
        if (err) {
            res.sendStatus(404);
        } else {
            res.send(data)
        }
    })

   
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))