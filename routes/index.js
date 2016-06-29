var hoteis = require("../hotel.json");
var museus = require("../museu.json");
var parques = require("../parques.json");
var restaurantes = require("../restaurantes.json");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hoteis', function(req, res) {
	res.render('hoteis', { hoteis: hoteis });
});

router.get('/museus', function(req, res){
	res.render('museus', { museus: museus });
})

router.get('/parques', function(req, res){
	res.render('parques', { parques: parques });
})

router.get('/restaurantes', function(req, res){
	res.render('restaurantes', { restaurantes: restaurantes});
});

module.exports = router;