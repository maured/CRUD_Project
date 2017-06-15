var express = require('express');
var router = express.Router();

//Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	res.render('index');
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

router.get('/to-do-list', (request, response) => {
    let Task = require('../models/task')
    Task.all(function(tasks){
        response.render('to-do-list', {tasks: tasks}) 
    })
})

//Task management
router.post('/to-do-list', (request, response) => {
    if(request.body.task === undefined || request.body.task === '') {
        request.flash('error', "Vous n'avez pas entré de tâche")
        response.redirect('/to-do-list')
    } else {
        let Task = require('../models/task')
        Task.create(request.body.task, function(){
            request.flash('success', "Merci !")
            response.redirect('/to-do-list')
        })
    }
})

router.get('/to-do-list/delete/:id', (request, response) => {
    if(request.params.id != '' && request.params.id != undefined) {
        let Task = require('../models/task')
        Task.delete(request.params.id, function(){
            response.redirect('/to-do-list')
        })
    }
    
})


module.exports = router;