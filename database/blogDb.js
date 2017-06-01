var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blogDb', function(err) {
  if (err) { throw err; }
});

var UsersDb = new mongoose.Schema({
  name : { type : String, match: /^[a-zA-Z0-9-_]+$/ },
  lastname : { type : String,  match: /^[a-zA-Z0-9-_]+$/},
  email : String,
  admin : Boolean,
  password : { type :String, Require : true },
  confirmPassword : { type :String, Require : true}
});

var ArticleDb = new mongoose.Schema({
  titre : String,
  content : String,
  date : Date, default : Date.now
});

var  Users = mongoose.model('Users', UsersDb);
var  Article = mongoose.model('Article', ArticleDb);

module.exports = Users;
module.exports = Article;