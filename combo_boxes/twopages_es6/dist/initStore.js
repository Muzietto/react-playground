define(['exports', 'redux', 'reducers/mainReducer', 'middleware/parseIntMiddleware', 'middleware/entityAdderValidatingMiddleware', 'middleware/entityDeleteValidatingMiddleware'], function (exports, _redux, _mainReducer, _parseIntMiddleware, _entityAdderValidatingMiddleware, _entityDeleteValidatingMiddleware) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.store = undefined;

  var _parseIntMiddleware2 = _interopRequireDefault(_parseIntMiddleware);

  var _entityAdderValidatingMiddleware2 = _interopRequireDefault(_entityAdderValidatingMiddleware);

  var _entityDeleteValidatingMiddleware2 = _interopRequireDefault(_entityDeleteValidatingMiddleware);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // resolved with Babel plugin inline-json-import
  //import initialState from '../initialState.json';

  var initialState = {
    users: [{ name: 'Armando Trovajoli', id: 1 }, { name: 'Bruno Carducci', id: 2 }, { name: 'Carlo Pedersoli', id: 3 }, { name: 'Daniele Luchetta', id: 4 }],
    groups: [{ name: 'Classical Music', id: 1 }, { name: 'Modern Dance', id: 2 }, { name: 'Jogging', id: 3 }, { name: 'Cycling', id: 4 }],
    user_group: {
      0: [],
      1: [1, 2],
      2: [],
      3: [],
      4: [1, 4]
    },
    group_user: {
      0: [],
      1: [1, 4],
      2: [1],
      3: [],
      4: [4]
    },
    group_no_user: {
      0: [],
      1: [2, 3],
      2: [2, 3, 4],
      3: [1, 2, 3, 4],
      4: [1, 2, 3]
    },
    mappers: {}
  };

  initialState.mappers.userFromId = function (userId) {
    var user = this.users.find(u => u.id == userId);
    return Object.assign({}, user);
  }.bind(initialState);

  const store = (0, _redux.createStore)(_mainReducer.mainReducer, initialState, (0, _redux.applyMiddleware)(_parseIntMiddleware2.default, _entityAdderValidatingMiddleware2.default, _entityDeleteValidatingMiddleware2.default));

  exports.store = store;
});