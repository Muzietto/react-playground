define(["exports", "react"], function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var About = function About() {
    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "h1",
        null,
        "About Us"
      ),
      _react2.default.createElement(
        "p",
        null,
        "A little bit about us"
      )
    );
  };

  exports.default = About;
});