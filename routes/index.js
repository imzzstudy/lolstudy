var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signin', function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
  console.log(email + '     ' + password);
});

module.exports = router;
