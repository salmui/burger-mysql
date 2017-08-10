var orm = require("../config/orm.js");

var burger = {
  selectAll: function(callback) {
    orm.selectAll("burgers", function(resultult) {
      callback(resultult);
    });
  },
  insertOne: function(cols, vals, callback) {
    orm.insertOne("burgers", cols, vals, function(result) {
      callback(result);
    });
  },
  updateOne: function(colToSearch, objColValues, id, callback) {
    orm.updateOne("burgers", colToSearch, objColValues, id, function(result) {
      callback(result);
    });
  }
};

// Export the database functions for the controller "burgersController.js).
module.exports = burger;
