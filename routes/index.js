var express = require('express');
var moment = require('moment');
var passport = require('passport');
var router = express.Router();
var Article = require('../models/article');

//Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	Article.find( (err, articles ) => {
      console.log(articles);
      res.render('index', {
        articles : articles,
      });
		});
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
        console.log(req.user);
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

router.get('/article-add', function(req, res) {
    res.render('article-add');
});

router.post('/article-add', function(req, res) {
    var title = req.body.title;
    var content = req.body.content;
    var owner_id = req.user.id;
    var date = Date.now();


    //Validation
    req.checkBody('title', 'Votre article doit avoir un titre').notEmpty();
    req.checkBody('content', 'Votre article doit avoir un contenu').notEmpty();

    var errors = req.validationErrors();

    if(errors){
        res.render('article-add', {
            errors:errors
        });
    } else {
        var newArticle = new Article({
            title: title,
            content: content,
            owner_id: owner_id,
            date: date
        });

        Article.createArticle(newArticle, function(err,article){
            if(err) throw err
        });

        req.flash('success_msg', 'Votre article a été enregistré');

        res.redirect('/');
    }
});


module.exports = router;
