var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TeamSchema = new Schema({
	_user: {type: Schema.Types.ObjectId, ref: "User"},
	team_name: String,
	player1: String,
	player2: String, 
	player3: String,
	player4: String,
	player5: String

})

mongoose.model('Team', TeamSchema);