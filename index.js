'use strict';

var gh = require('github');
var promisify = require('promisify-node');

module.exports = function(robot) {

  //var repoUrl = 'https://github.com/ze-jarvis/ze-hubot-github';

  var github = new gh({
    version: '3.0.0',
    debug: false
  });

  robot.hear(/^pr/g, function(res) {
    res.reply('I hear you!')
  });

  //robot.hear(/^pr {id}/, function(res) {
  //  
  //});

  robot.hear('list-pr', function(res) {
    res.reply('Ok, let me check...');
    var wrap = promisify(github.issues.repoIssues);

    res.$promise = wrap({
      user: 'ze-jarvis',
      repo: 'ze-hubot-github'
    }).then(function(issues) {
      res.reply('I found ' + issues.length + ' issue' + (issues.length > 1 ? 's' : ''));
      for (var i = 0; i < issues.length; i++) {
        res.reply('issue #' + issues[i].number + ': ' + issues[i].title);
      }
    });
  });

};
