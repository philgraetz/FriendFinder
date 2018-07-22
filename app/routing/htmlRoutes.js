// Module to handle HTML requests
let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

// Constructor for ApiRoutes object
function HtmlRoutes() {
    // Return HTML for home page
    this.getHome = function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    };

    // Return HTML for survey page
    this.getSurvey = function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    };
}

module.exports = HtmlRoutes;

