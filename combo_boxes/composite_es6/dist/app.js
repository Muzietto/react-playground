define(['react', 'react-dom', 'shell'], function (_react, _reactDom, _shell) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _shell2 = _interopRequireDefault(_shell);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var state = {
    users: [{ name: 'Armando', id: 1 }, { name: 'Bruno', id: 2 }, { name: 'Carlo', id: 3 }, { name: 'Daniele', id: 4 }],
    groups: [{ name: 'Music', id: 1 }, { name: 'Dance', id: 2 }, { name: 'Jogging', id: 3 }, { name: 'Cycling', id: 4 }],
    user_group: {
      1: [1, 2],
      2: [],
      3: [3],
      4: [1, 4]
    }
  };

  var mappers = {};

  _reactDom2.default.render(_react2.default.createElement(Composite, {
    id: '1',
    options1: undefined.state.groups,
    options2: undefined.state.groups,
    labelField1: 'name',
    valueField1: 'id',
    labelField2: 'name',
    valueField2: 'id'
  }), document.getElementById('container'));
});