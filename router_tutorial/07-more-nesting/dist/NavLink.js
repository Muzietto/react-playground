define(['exports', 'react', 'react-router'], function (exports, _react, _reactRouter) {
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

   exports.default = _react2.default.createClass({
      displayName: 'NavLink',
      render: function render() {
         return _react2.default.createElement(_reactRouter.Link, _extends({}, this.props, { activeClassName: 'active' }));
      }
   });
});