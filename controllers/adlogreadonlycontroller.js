var express = require('express');
var router = express.Router()
var sequelize = require("../db");
var AdLogModel = sequelize.import("../models/adlog")
var AdLogModelReadOnly = sequelize.import("../models/adlogreadonly")

router.post('/', function (req, res) {
    var owner = req.user.id
    var opportunity = req.body.adlog.opportunity
    var duration = req.body.adlog.duration
    var size = req.body.adlog.size
    var contact = req.body.adlog.contact
    var cost = req.body.adlog.cost

})

router.get("/", function (req, res) {
    //grabbing all of the Grocery List items from data
    //database for a given user
    var userid = req.user.id
    AdLogModelReadOnly.findAll({
        where: { }
    }).then(
        function findAllSuccess(data) {
            res.json(data)
        }, function findAll(err) {
            res.send(500, err.message)
        })
})

router.get('/:id', function (req, res) {
    var primaryKey = req.params.id
    var userid = req.user.id
    AdLogModelReadOnly.findOne({
        where: {
            id: primaryKey, 
            owner: userid
        }
    }).then(
        data => {
            return res.json(data)
        }),
        err => res.send(500, err.message)
})



module.exports = router;
