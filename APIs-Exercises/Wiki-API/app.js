const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

// setup mongoDB
mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true, useUnifiedTopology: true});

// create the schema for our articles
const articleSchema = {
    title: String,
    content: String
};

// create model
const Article = mongoose.model("Article", articleSchema);


//TODO

///////////////// Requests Targetting all Articles //////////////////


// 方法一
// app.get("/articles", function(req, res) {
//     // inside our callback is where we're going to query our database and 
//     // find all of the documents inside the articles collection
//     Article.find(function(err, foundArticles) {
//         // console.log(foundArticles);
//         if (!err) {
//             res.send(foundArticles);
//         } else {
//             res.send(err);
//         }
//     });
// });

// the client now is going to send data essentially to our server
// app.post("/articles", function(req, res) {
//     // req.body.title;
//     // req.body.content;

//     console.log(req.body.title);
//     console.log(req.body.content);

//     const newArticle = new Article({
//         title: req.body.title,
//         content: req.body.content
//     });

//     newArticle.save(function (err) {
//         if (!err) {
//             res.send("Successfully added a new article.")
//         } else {
//             res.send(err);
//         }
//     });
// })

//So in this case the client is sending a HTTP DELETE request to our /articles route and this should delete all the articles in our collection.
// app.delete("/articles", function(req, res) {
//     Article.deleteMany(function(err) {
//         if (!err) {
//             res.send("Successfully deleted all articles.");
//         } else {
//             res.send(err);
//         }
//     });
// })

// 方法二：
app.route("/articles")
.get(function(req, res) {
    // inside our callback is where we're going to query our database and 
    // find all of the documents inside the articles collection
    Article.find(function(err, foundArticles) {
        // console.log(foundArticles);
        if (!err) {
            res.send(foundArticles);
        } else {
            res.send(err);
        }
    });
})

.post(function(req, res) {
    // req.body.title;
    // req.body.content;

    console.log(req.body.title);
    console.log(req.body.content);

    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });

    newArticle.save(function (err) {
        if (!err) {
            res.send("Successfully added a new article.")
        } else {
            res.send(err);
        }
    });
})

.delete(function(req, res) {
    Article.deleteMany(function(err) {
        if (!err) {
            res.send("Successfully deleted all articles.");
        } else {
            res.send(err);
        }
    });
})

///////////////// Requests Targetting a specific Article //////////////////

// localhost:3000/articles/Jack-Bauer
// req.params.articleTitle = "Jack-Bauer"

app.route("/articles/:articleTitle")

.get(function(req, res){
    Article.findOne({title: req.params.articleTitle}, function(err, foundArticle) {
        if (foundArticle) {
            res.send(foundArticle);
        } else {
            res.send("No articles matching that title was found.")
        }
    })
})

.put(function(req, res){
    Article.update(
        {title: req.params.articleTitle},
        {title: req.body.title, content: req.body.content},
        {overwrite: true},
        function(err){
            if(!err){
                res.send("Successfully updated article.");
            }
        }
    );
});



app.listen(3000, function() {
    console.log("Server started on port 3000");
});