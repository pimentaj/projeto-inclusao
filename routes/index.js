var hoteis = require("../hotel.json");
var museus = require("../museu.json");
var parques = require("../parques.json");
var restaurantes = require("../restaurantes.json");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', paginatual: 'home' });
});

router.get('/hoteis', function(req, res) {
	res.render('lugares', { lugares: hoteis, paginatual: 'hoteis' });
});

router.get('/museus', function(req, res){
	res.render('lugares', { lugares: museus, paginatual: 'museus' });
})

router.get('/parques', function(req, res){
	res.render('lugares', { lugares: parques, paginatual: 'parques' });
})

router.get('/restaurantes', function(req, res){
	res.render('lugares', { lugares: restaurantes, paginatual: 'restaurantes' });
});

module.exports = router;

