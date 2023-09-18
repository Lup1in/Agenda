require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.emit('app pronto');
    }).catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');
const myMiddle = require('./src/middlewares/middleware')

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));


app.set('views', path.resolve((__dirname, './views')));
app.set('view engine', 'ejs');

app.use(myMiddle);
app.use(routes);

app.on('app pronto', () => {
    app.listen(3000, () => {
        console.log("Servidor sendo executado em: http://localhost:3000");
    });
})
