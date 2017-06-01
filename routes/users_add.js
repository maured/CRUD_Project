var express = require('express');
var router = express.Router();
/*------users-----*/
router.get('/', function(req,res,next){
	res.render('users_add');
});
module.exports = router;
