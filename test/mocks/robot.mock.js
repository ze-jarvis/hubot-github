'use strict';

var sinon = require('sinon');

module.exports = function() {

  return {
    api: {},
    hear: function(str, callback) {
      this.api[str] = callback;
    },
    receive: function(str) {
      var res = {
        reply: sinon.spy()
      };
      this.api[str](res);
      return res;
    }
  };

};
