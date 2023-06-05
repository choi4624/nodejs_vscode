var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api', function(req,res,next){
  console.log('nodejs response');
  const obj = { msg: 'Nodejs Response json '}

  // res.send('Nodejs response');
  res.json(obj);

})

module.exports = router;
