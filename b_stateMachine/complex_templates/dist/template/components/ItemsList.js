define(['exports', 'react'], function (exports, _react) {
    // completely stateless
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
                this.props.items.map(this.props.itemsMapper)
            );
        }
    };
    exports.default = ItemsList;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC90ZW1wbGF0ZS9jb21wb25lbnRzL0l0ZW1zTGlzdC5qcyJdLCJuYW1lcyI6WyJJdGVtc0xpc3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJpdGVtcyIsIml0ZW1zTWFwcGVyIiwieCIsImRpc3BsYXlNYXBwZXIiLCJyZW5kZXIiLCJwcm9wcyIsImNvbnRhaW5lckNzc0NsYXNzIiwicHJlcGVuZFRvTGlzdCIsIm1hcCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O1FBSU1BLFMsR0FBTixNQUFNQSxTQUFOLFNBQXdCLGdCQUFNQyxTQUE5QixDQUF3Qzs7QUFFcEMsZUFBT0MsWUFBUCxHQUFzQjtBQUNsQixtQkFBTztBQUNIQyx1QkFBTyxFQURKO0FBRUhDLDZCQUFhQyxLQUFLQSxDQUZmO0FBR0hDLCtCQUFlRCxLQUFLQTtBQUhqQixhQUFQO0FBS0g7O0FBRURFLGlCQUFTO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVcsS0FBS0MsS0FBTCxDQUFXQyxpQkFBM0I7QUFDSyxxQkFBS0QsS0FBTCxDQUFXRSxhQURoQjtBQUVLLHFCQUFLRixLQUFMLENBQVdMLEtBQVgsQ0FDSVEsR0FESixDQUNRLEtBQUtILEtBQUwsQ0FBV0osV0FEbkI7QUFGTCxhQURKO0FBT0g7QUFsQm1DLEs7c0JBcUJ6QkosUyIsImZpbGUiOiJJdGVtc0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wbGV0ZWx5IHN0YXRlbGVzc1xuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBJdGVtc0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgIGl0ZW1zTWFwcGVyOiB4ID0+IHgsXG4gICAgICAgICAgICBkaXNwbGF5TWFwcGVyOiB4ID0+IHgsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY29udGFpbmVyQ3NzQ2xhc3N9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnByZXBlbmRUb0xpc3R9XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaXRlbXNcbiAgICAgICAgICAgICAgICAgICAgLm1hcCh0aGlzLnByb3BzLml0ZW1zTWFwcGVyKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSXRlbXNMaXN0O1xuIl19