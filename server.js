require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.emit('app pronto');
    }).catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo')
const flash = require('connect-flash');

const path = require('path');
const mainRoutes = require('./routes')
//const csrf = require('csurf');
const myMiddle = require('./src/middlewares/middleware.js');
//const checkCsrfError = require('./src/middlewares/middleware.js');
//const csrfMiddleware = require('./src/middlewares/middleware.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: 'secret teste 2023',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve((__dirname, './views')));
app.set('view engine', 'ejs');

//app.use(csrf());
app.use(myMiddle);
//app.use(checkCsrfError);
//app.use(csrfMiddleware);
app.use(mainRoutes);

app.on('app pronto', () => {
    app.listen(3000, () => {
        console.log("Servidor sendo executado em: http://localhost:3000");
    });
})
