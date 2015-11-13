'use strict';

var chai = require('chai');
var sinonChai = require('sinon-chai');
var chaiPromise = require('chai-as-promised');
chai.use(sinonChai);
var expect = chai.expect;

var koala = require('../index.js');
var robotMock = require('./mocks/robot.mock.js');


describe('Test Github access', function() {

  var panda;

  beforeEach(function() {
    panda = robotMock();
    koala(panda);
  });

  it('test PR', function() {
    var response = panda.receive('pr');
    // expect res reply with 'I hear you'
    expect(response.reply).to.have.been.calledWith('I hear you!');
  });

  it('should list all the issues', function() {
    var response = panda.receive('list-pr').$promise.then(function() {
      expect(response.reply).to.have.been.calledWith('issue #1');
    });
  });

});

