/*global axios*/

var express = require('express');
var fs = require('fs');
var router = express.Router();
var request = require('request')

/* GET home page. */
router.get('/', function(res, next) {
    res.sendFile('index.html', { root:  'public' });
});

var owl = "https://api.quotable.io/random";
router.get('/owl', function(req,res) {
  console.log("In owl");
  owl = "https://api.quotable.io/random";
  request(owl).pipe(res);
});

router.get('/owlList', function(req,res){
  console.log("in owlList");
  owl = "https://api.quotable.io/quotes";
  request(owl).pipe(res);
})

module.exports = router;
