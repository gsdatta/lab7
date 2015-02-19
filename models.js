
var Mongoose = require('mongoose');


var ProjectSchema = new Mongoose.Schema({
  title: {
  	type: String,
  	required: true,
  	unique: true
  },
  date: {
  	type: String,
  	required: true
  },
  summary: {
  	type: String,
  	required: true
  },
  image: {
  	type: String,
  	required: true
  }
});

exports.Project = Mongoose.model('Project', ProjectSchema);


