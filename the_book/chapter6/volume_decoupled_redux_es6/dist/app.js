define(['react', 'react-dom', './stateful', './initStore'], function (_react, _reactDom, _stateful, _initStore) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _stateful2 = _interopRequireDefault(_stateful);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // only webpack understands requires
  //const ReactDOM = require('react-dom');
  //const StatefulParent = require('./StatefulParent.jsx');

  var render = function render() {
    return _reactDom2.default.render(_react2.default.createElement(_stateful2.default, null), document.getElementById('content'));
  };

  render();
  _initStore.store.subscribe(render);
});