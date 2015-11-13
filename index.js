'use strict';

module.exports = function(robot) {

  robot.hear('pr', function(res) {
    res.reply('I hear you!')
  });

};
