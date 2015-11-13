'use strict';

var chai = require('chai');
var sinonChai = require('sinon-chai');
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
    //expect(response.reply.calledWith('I hear you!')).to.be.true;
    expect(response.reply).to.have.been.calledWith('I hear you!');
  });

});

