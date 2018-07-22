// Handle all API requests
// let express = require('express');
// let bodyParser = require('body-parser');

// Constructor for ApiRoutes object
function ApiRoutes(friends) {
    this.friends = friends; // object for friends data

    // Get friends data
    this.getFriends = function(req, res) {
        res.json(friends.getFriends());
    };

    // Get questions
    this.getQuestions = function(req, res) {
        res.json(friends.getQuestions());
    };

    // Process survey input for friends
    this.postFriends = function(req, res) {
        result = friends.processFriend(req.body);
        res.json(result);
    };

}

module.exports = ApiRoutes;