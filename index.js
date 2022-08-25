const express = require('express')
const bodyParser = require('body-parser')
const nodemon = require('nodemon')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('hello')
})

const routes = require('./src/routes/mainRouter')
app.use(routes)

mongoose
    .connect('mongodb+srv://ong_t1:jypdNE9nzV7qABhZ@cluster0.n4rwkge.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        app.listen(port, () => {
            console.log(`example app: ${port}`)
        })
    })
    .catch(err => console.log(err))

