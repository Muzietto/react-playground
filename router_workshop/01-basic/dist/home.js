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

  var Home = function Home() {
    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "h1",
        null,
        "Home"
      ),
      _react2.default.createElement(
        "p",
        null,
        "Welcome to the best React Router Tutorial you will EVER see!!!! yeahhhh baby"
      )
    );
  };

  exports.default = Home;
});