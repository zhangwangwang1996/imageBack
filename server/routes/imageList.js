
var express = require('express');
var router = express.Router();
// const elasticsearch = require('elasticsearch');
// const esClient = new elasticsearch.Client({
//     host: 'http://192.168.211.172:9200',
//     log: 'error'
//     });
/* GET home page. */
router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    res.send('hello')
  });
module.exports=router