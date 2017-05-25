define(['exports', 'react', 'react-dom', 'initStore', 'controls/entitycrud', 'controls/entityadder', 'actions/actions'], function (exports, _react, _reactDom, _initStore, _entitycrud, _entityadder, _actions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Users = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _entitycrud2 = _interopRequireDefault(_entitycrud);

  var _entityadder2 = _interopRequireDefault(_entityadder);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  let Users = class Users extends _react2.default.Component {
    render() {
      let state = _initStore.store.getState();
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_entitycrud2.default, { id: '1',
          entityType: 'user',
          collection: state.users,
          onAddEntityClick: entityAdder,
          onDeleteEntityClick: entityDeleter })
      );
    }
  };


  function entityAdder(type, id, name) {
    return function () {
      _initStore.store.dispatch(_actions.ActionCreators[type + 'IsCreated'](id, name));
    };
  }

  function entityDeleter(type, id) {
    return function () {
      _initStore.store.dispatch(_actions.ActionCreators[type + 'IsDeleted'](id));
    };
  }

  exports.Users = Users;
});