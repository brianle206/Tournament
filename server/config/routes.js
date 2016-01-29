var User = require("./../controllers/users.js");
// var Teams = require("./../controllers/teams.js");


module.exports = function(app) {
  app.post("/users", User.create);

  app.get("/users", User.index);

  // app.get("/user/:id", User.show);

 
}