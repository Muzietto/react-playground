define(["exports", "react", "react-router-dom"], function (exports, _react, _reactRouterDom) {
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

  var Navigation = function Navigation() {
    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "h6",
        null,
        "navigation.jsx"
      ),
      _react2.default.createElement(
        "ul",
        null,
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/" },
            "Home"
          )
        ),
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/about" },
            "About"
          )
        ),
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/missing" },
            "Missing"
          )
        )
      )
    );
  };

  exports.default = Navigation;
});