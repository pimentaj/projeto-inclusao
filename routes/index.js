var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hoteis', function(req, res) {
	res.render('hoteis', {title: 'Express'});
});

router.get('/museus', function(req, res){
	res.send('museus');
})

router.get('/parques', function(req, res){
	res.send('parques');
})

router.get('/pizzarias', function(req, res){
	res.send('pizzarias');
})

router.get('/restaurantes', function(req, res){
	res.send('restaurantes');
})


module.exports = router;
