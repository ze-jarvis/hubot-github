'use strict';

var sinon = require('sinon');

module.exports = function() {

  var api = new Map();

  return {
    hear: function(str, callback) {
      if (typeof str === 'string') {
        str = new RegExp(str);
      }
      api.set(str, callback);
    },
    receive: function(str) {
      var res = {
        reply: sinon.spy()
      };
      api.forEach(function(value, key) {
        if (key.test(str)) {
          value(res);
        }
      });
      return res;
    }
  };

};
