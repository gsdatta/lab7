var models = require('../models');
var mongoose = require('mongoose');

exports.projectInfo = function(req, res) { 
  var projectID = req.params.id;

  models.Project.find({_id: projectID}, afterQuery);

  function afterQuery(err, projects) {
    if(err) console.log(err);
    res.json(projects[0]);
  }
}

exports.addProject = function(req, res) {
  var form_data = req.body;
  console.log(form_data);

  var project = new models.Project({
    title: form_data.project_title,
    date: form_data.date,
    summary: form_data.summary,
    image: form_data.image_url,
  });
  project.save(function(err){
    if(err){
      console.log(err);
      return res.status(500).send();
    }
    else{
      return res.status(200).send();
    }
  })
}

exports.deleteProject = function(req, res) {
  var projectID = req.params.id;

  models.Project.find({_id: projectID}).remove().exec(afterQuery);

  function afterQuery(err, projects) {
    if(err){console.log(err); res.status(500).send()};
    res.status(200).send({message: "Deleted!"});
  }
} 