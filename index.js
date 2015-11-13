'use strict';

var gh = require('github');
var promisify = require('promisify-node');

module.exports = function(robot) {

  //var repoUrl = 'https://github.com/ze-jarvis/ze-hubot-github';

  var github = new gh({
    version: '3.0.0',
    debug: false
  });

  robot.hear('pr', function(res) {
    res.reply('I hear you!')
  });

  robot.hear('list-pr', function(res) {
    var wrap = promisify(github.issues.repoIssues);

    res.$promise = wrap({
      user: 'ze-jarvis',
      repo: 'ze-hubot-github'
    }).then(function(issues) {
      //console.log(JSON.stringify(res));
      for (var i = 0; i < issues.length; i++) {
        //console.log('issue #' + res[i].number);
        res.reply('issue #' + issues[i].number);
      }
    });
  });

  var listIssues = function(robot) {
    console.log('list issues');
    github.issues.repoIssues({
      user: 'ze-jarvis',
      repo: 'ze-hubot-github'
    }, function(err, res) {
      if (err) {
        console.log('ERROR', err);
      }
      //console.log(JSON.stringify(res));
      for (var i = 0; i < res.length; i++) {
        //console.log('issue', res[i]);
        robot.reply('issue #' + res.number);
      }
    });
  }

};
