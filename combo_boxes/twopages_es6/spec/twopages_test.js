(function() {
  'use strict';

  define(['reducer', 'chai'], function(reducer, chai) {
    var expect  = chai.expect;

    describe('the main reducer', function() {
      it('can alert the user without modifying state', function() {
        var state = {test:12};
        var action = {
          type: 'ALERT_USER',
          message: 'test message',
        };
        expect(reducer.mainReducer(state, action)).to.be.eql(state);
      });
    });
  });
})();