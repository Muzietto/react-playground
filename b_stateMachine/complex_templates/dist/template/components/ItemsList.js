define(['exports', 'react'], function (exports, _react) {
    // completely stateless - IMPROVED VERSION
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

    let ItemsList = class ItemsList extends _react2.default.Component {

        static defaultProps() {
            return {
                items: [],
                itemsMapper: x => x,
                displayMapper: x => x
            };
        }

        render() {
            return _react2.default.createElement(
                'div',
                { className: this.props.containerCssClass },
                this.props.prependToList,
                this.props.items.map(this.props.children)
            );
        }
    };
    exports.default = ItemsList;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC90ZW1wbGF0ZS9jb21wb25lbnRzL0l0ZW1zTGlzdC5qcyJdLCJuYW1lcyI6WyJJdGVtc0xpc3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJpdGVtcyIsIml0ZW1zTWFwcGVyIiwieCIsImRpc3BsYXlNYXBwZXIiLCJyZW5kZXIiLCJwcm9wcyIsImNvbnRhaW5lckNzc0NsYXNzIiwicHJlcGVuZFRvTGlzdCIsIm1hcCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7UUFJTUEsUyxHQUFOLE1BQU1BLFNBQU4sU0FBd0IsZ0JBQU1DLFNBQTlCLENBQXdDOztBQUVwQyxlQUFPQyxZQUFQLEdBQXNCO0FBQ2xCLG1CQUFPO0FBQ0hDLHVCQUFPLEVBREo7QUFFSEMsNkJBQWFDLEtBQUtBLENBRmY7QUFHSEMsK0JBQWVELEtBQUtBO0FBSGpCLGFBQVA7QUFLSDs7QUFFREUsaUJBQVM7QUFDTCxtQkFDSTtBQUFBO0FBQUEsa0JBQUssV0FBVyxLQUFLQyxLQUFMLENBQVdDLGlCQUEzQjtBQUNLLHFCQUFLRCxLQUFMLENBQVdFLGFBRGhCO0FBRUsscUJBQUtGLEtBQUwsQ0FBV0wsS0FBWCxDQUNJUSxHQURKLENBQ1EsS0FBS0gsS0FBTCxDQUFXSSxRQURuQjtBQUZMLGFBREo7QUFPSDtBQWxCbUMsSztzQkFxQnpCWixTIiwiZmlsZSI6Ikl0ZW1zTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBsZXRlbHkgc3RhdGVsZXNzIC0gSU1QUk9WRUQgVkVSU0lPTlxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBJdGVtc0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgIGl0ZW1zTWFwcGVyOiB4ID0+IHgsXG4gICAgICAgICAgICBkaXNwbGF5TWFwcGVyOiB4ID0+IHgsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY29udGFpbmVyQ3NzQ2xhc3N9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnByZXBlbmRUb0xpc3R9XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaXRlbXNcbiAgICAgICAgICAgICAgICAgICAgLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSXRlbXNMaXN0O1xuIl19