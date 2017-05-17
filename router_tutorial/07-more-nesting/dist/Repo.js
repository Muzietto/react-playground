define(['exports', 'react'], function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _react2.default.createClass({
    displayName: 'Repo',
    render: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'link of Repos remains active because Repo is nested in Repos and Repos is nested in /'
        ),
        _react2.default.createElement(
          'h6',
          null,
          'here under comes the repo name'
        ),
        _react2.default.createElement(
          'h4',
          null,
          this.props.params.repoName
        ),
        _react2.default.createElement(
          'h6',
          null,
          'here under comes the user name'
        ),
        _react2.default.createElement(
          'h4',
          null,
          this.props.params.userName
        )
      );
    }
  });
});