const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');

const loginRequired = require('./src/middlewares/middleware');

route.get('/', homeController.index);

// rotas de login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.get('/login/logup', loginController.logup);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

// rotas de contato
route.get('/contato/index', loginRequired, contatoController.index);
route.post('/contato/register', loginRequired, contatoController.register);

module.exports = route;