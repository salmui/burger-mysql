var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");



// Routes
router.get("/", function(req, res) {
  burger.selectAll(function(result) {
    var hbsObject = {
      burgers: result
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.insertOne("burger_name", req.body.burger_name, function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {

  burger.updateOne("devoured", 1, req.params.id, function() {
    res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;
