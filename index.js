'use strict';

var gh = require('github');

module.exports = function(robot) {

  var github = new gh({
    version: '3.0.0'
  });

  robot.hear('pr', function(res) {
    res.reply('I hear you!')
  });

  robot.hear('list-pr', function(res) {
    console.log('Called > ', res);
    github.issues.getAll()
  });

};
