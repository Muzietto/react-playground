(function() {
  'use strict';

  define([
      'reducer',
      'actions',
      'chai'
    ], function(defaultReducer, actions, chai) {
    var expect  = chai.expect,
    reducer = defaultReducer.mainReducer,
    ActionTypes = actions.ActionTypes
    ActionCreators = actions.ActionCreators
    ;

    describe('the main reducer', function() {
      it('can alert the user without modifying state', function() {
        var alert = x => x;
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