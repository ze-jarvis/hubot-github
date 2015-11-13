'use strict';

var sinon = require('sinon');

module.exports = function() {

  return {
    hear: function(str, callback) {
      this[str] = callback;
    },
    receive: function(str) {
      var res = {
        reply: sinon.spy()
      };
      this[str](res);
      return res;
    }
  };

};
