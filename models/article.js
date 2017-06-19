var mongoose = require('mongoose');

var ArticleSchema = mongoose.Schema ({
    title: {
        type: String,
        index: true
    },
    content: {
        type: String
    },
    owner_id: {
        type: String
    },
    date: {
        type: Date
    }
});

var Article = module.exports = mongoose.model('Article', ArticleSchema);

module.exports.createArticle = function (newArticle, callback) {
    newArticle.save(callback);
}

module.exports.deleteArticle = function (newArticle, callback) {
    newArticle.delete(callback);
}

module.exports.getArticleById = function(id, callback){
    Article.findById(id, callback);
}


/*module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMatch){
        if (err) throw err;
        callback(null, isMatch);
    });
}*/
