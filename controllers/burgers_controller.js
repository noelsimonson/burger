const express = require('express');
var router = express.Router();

const burger = require('../models/burgers.js');

// routes locations
router.get("/", function(req, res) {
  burger.selectAllBurgers(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.createBurger([
    "burger_name", "devoured"
  ], [
    req.body.name, false
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateBurger({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

module.exports = router;