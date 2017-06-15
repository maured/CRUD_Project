var express = require('express');
var moment = require('moment');
var router = express.Router();

var Article = require('../models/article');

router.get('/article-add', function(req, res) {
	res.render('article-add');
});

router.post('/article-add', function(req, res) {
	var title = req.body.title;
	var content = req.body.content;
	var owner_id = req.user.id;
	var date = moment.format();


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

		User.createUser(newUser, function(err,user){
			if(err) throw err
			console.log(user);
		});

		req.flash('success_msg', 'Votre article a été enregistré');

		res.redirect('/');
	}
});