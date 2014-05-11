'use strict';

var express = require('express');
var router = express.Router();

// Home Page
router.get('/', function (req, res) {
  res.render('index', {title: 'Alkaw'});
});

module.exports = router;
