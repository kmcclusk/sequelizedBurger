var express = require("express");

var app = express();
var db = require("../models/index.js");
var connection = require("../config/config.json");

module.exports = function(app) {

    app.get("/", function(req, res) {
        db.Burger.findAll({}).then(function(dbBurgers) {
            res.render("index", { index: dbBurgers });
        });
    });

    app.post("/", function(req, res) {
        console.log(req.body);
        db.Burger.create(req.body).then(function(dbBurgers) {
            res.render("index", { index: dbBurgers });
        });
    });

    app.put("/:id", function(req, res) {
        db.Burger.update({
            devoured: true
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(dbBurgers) {

            res.render("index", { index: dbBurgers });
        });
    });
};