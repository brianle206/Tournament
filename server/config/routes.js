var Users = require("./../controllers/users.js");
// var Teams = require("./../controllers/teams.js");


module.exports = function(app) {
  app.post("/users", Users.create);

  app.get("/user", Users.index);

  app.get("/user/:id", Users.show);

 
}