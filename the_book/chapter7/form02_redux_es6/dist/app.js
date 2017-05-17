define(['react', 'react-dom', './form03', './initStore'], function (_react, _reactDom, _form, _initStore) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _form2 = _interopRequireDefault(_form);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var render = function render() {
    return _reactDom2.default.render(_react2.default.createElement(_form2.default, null), document.getElementById('content'));
  };

  render();
  _initStore.store.subscribe(render);
});