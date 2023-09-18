const express = require('express');
const route = express.Router();
const aboutController = require('./src/controllers/aboutController');
const homeController = require('./src/controllers/homeController');

route.get("/about", aboutController.aboutPage);
route.get("/", homeController.homePage);
route.post("/", homeController.trataPost);

module.exports = route;