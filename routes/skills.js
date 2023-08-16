var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

/* GET skills listing. */
router.get('/', function(req, res, next) {
  res.render('skills', { title: 'Skills' });
});

module.exports = router;
