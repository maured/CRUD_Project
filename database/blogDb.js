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
var  Users = mongoose.model('Users', UsersDb);

module.exports = Users;