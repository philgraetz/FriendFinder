let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let Friends = require('./app/data/friends.js');
let ApiRoutes = require('./app/routing/apiRoutes');
let HtmlRoutes = require('./app/routing/htmlRoutes');
const PORT = 3000;

let app = express();
let friends = new Friends();
let htmlRoutes = new HtmlRoutes();
let apiRoutes = new ApiRoutes(friends);

// Set up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// == ROUTES ==
// method   URL                data in         data out
// ------   ------             -------         ------------
//  - HTML -
//  GET     /                  none            home.html
//  GET     /survey            none            survey.html
//
//  - API -
//  GET     /api/friends       none            JSON of friends list
//  GET     /api/best/:friend  friend          best choice for 'friend'
//  POST    /api/friends       survey results  none

// GET Home
app.get("/", function(req, res) {
    htmlRoutes.getHome(req, res);
});

// GET Survey
app.get("/survey", function(req, res) {
    htmlRoutes.getSurvey(req, res);
});

// Get Questions (to be inserted into survey)
app.get("/api/questions", function(req, res) {
    apiRoutes.getQuestions(req, res);
});

// GET Friends (API)
app.get("/api/friends", function(req, res) {
    apiRoutes.getFriends(req, res);
});

// POST survey response (API)
app.post("/api/friends", function(req, res) {
    apiRoutes.postFriends(req, res);
})

// LISTEN
app.listen(PORT, function() {
    console.log("Listening on port " + PORT);
})
