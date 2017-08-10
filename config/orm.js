var connection = require("./connection.js");

var orm = {
	//Select all the bugers
	selectAll: function(table, callback) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      if (err) {
	      throw err;
	    }
      callback(result);
    });

	},
	//Add a buger
	insertOne: function(table, cols, vals, callback) {
		var queryString = "INSERT INTO ?? (??) VALUES (?)";
		connection.query(queryString, [table, cols, vals], function(err, result) {
			if (err) {
	      		throw err;
	    	}
	    	callback(result);
		});
	},
	//Devour a burger
	updateOne: function(table, colToSearch, ObjColVals, id, callback) {
		var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
		connection.query(queryString, [table, colToSearch, ObjColVals, id], function(err, result) {
		    if (err) {
		     	throw err;
		    }
		    callback(result);
		});
	}
};

module.exports = orm;
