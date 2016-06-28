var hoteis = require("../hotel.json");
var museus = require("../museu.json");
var parques = require("../parques.json")
var restaurantes = require("../restaurantes.json");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { hoteis: hoteis, museus: museus, parques: parques, restaurantes: restaurantes });
});


module.exports = router;
