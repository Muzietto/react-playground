define(['exports', 'react', './MediaQueryContext'], function (exports, _react, _MediaQueryContext) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _MediaQueryContext2 = _interopRequireDefault(_MediaQueryContext);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  const DeviceAware = Component => props => _react2.default.createElement(
    _MediaQueryContext2.default.Consumer,
    null,
    value => _react2.default.createElement(Component, _extends({}, props, { device: value }))
  );

  exports.default = DeviceAware;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9EZXZpY2VBd2FyZS5qcyJdLCJuYW1lcyI6WyJEZXZpY2VBd2FyZSIsIkNvbXBvbmVudCIsInByb3BzIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxRQUFNQSxjQUFjQyxhQUFhQyxTQUMvQjtBQUFBLGdDQUFtQixRQUFuQjtBQUFBO0FBQ0dDLGFBQVMsOEJBQUMsU0FBRCxlQUFlRCxLQUFmLElBQXNCLFFBQVFDLEtBQTlCO0FBRFosR0FERjs7b0JBS2VILFciLCJmaWxlIjoiRGV2aWNlQXdhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1lZGlhUXVlcnlDb250ZXh0IGZyb20gJy4vTWVkaWFRdWVyeUNvbnRleHQnO1xuXG5jb25zdCBEZXZpY2VBd2FyZSA9IENvbXBvbmVudCA9PiBwcm9wcyA9PlxuICA8TWVkaWFRdWVyeUNvbnRleHQuQ29uc3VtZXI+XG4gICAge3ZhbHVlID0+IDxDb21wb25lbnQgey4uLnByb3BzfSBkZXZpY2U9e3ZhbHVlfSAvPn1cbiAgPC9NZWRpYVF1ZXJ5Q29udGV4dC5Db25zdW1lcj47XG5cbmV4cG9ydCBkZWZhdWx0IERldmljZUF3YXJlO1xuIl19