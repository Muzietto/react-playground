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

  var NotFound = function NotFound(_ref) {
    var location = _ref.location;

    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "h1",
        null,
        "Not Found"
      ),
      _react2.default.createElement(
        "p",
        null,
        "Sorry but the page ",
        location.pathname,
        ", can not be found."
      )
    );
  };

  exports.default = NotFound;
});