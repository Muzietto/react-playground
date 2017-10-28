define(['exports', 'react', '../../template/components/ItemsList'], function (exports, _react, _ItemsList) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = core_type;

    var _react2 = _interopRequireDefault(_react);

    var _ItemsList2 = _interopRequireDefault(_ItemsList);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function core_type(props) {
        let chosenProperty = props.chosen_dataset_property;
        return _react2.default.createElement(
            'div',
            { className: 'core' },
            _react2.default.createElement(
                'p',
                null,
                'This is the core type saying: ',
                props.core.message
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
                'p',
                null,
                'Your choice is ',
                chosenProperty,
                ' | Select the type now'
            ),
            _react2.default.createElement(
                _ItemsList2.default,
                {
                    containerCssClass: 'types_container',
                    items: props.handlers.forward },
                (handler, index) => _react2.default.createElement(
                    'div',
                    {
                        key: index,
                        className: 'type_container',
                        onClick: handler },
                    handler.name
                )
            )
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC93aXphcmQvY29yZS9jb3JlX3R5cGUuanMiXSwibmFtZXMiOlsiY29yZV90eXBlIiwicHJvcHMiLCJjaG9zZW5Qcm9wZXJ0eSIsImNob3Nlbl9kYXRhc2V0X3Byb3BlcnR5IiwiY29yZSIsIm1lc3NhZ2UiLCJoYW5kbGVycyIsImZvcndhcmQiLCJoYW5kbGVyIiwiaW5kZXgiLCJuYW1lIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O3NCQU13QkEsUzs7Ozs7Ozs7Ozs7O0FBQVQsYUFBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFDckMsWUFBSUMsaUJBQWlCRCxNQUFNRSx1QkFBM0I7QUFDQSxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsTUFBZjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQWtDRixzQkFBTUcsSUFBTixDQUFXQztBQUE3QyxhQURKO0FBQzZELHFEQUQ3RDtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQW1CSCw4QkFBbkI7QUFBQTtBQUFBLGFBRko7QUFHSTtBQUFBO0FBQUE7QUFDSSx1Q0FBa0IsaUJBRHRCO0FBRUksMkJBQU9ELE1BQU1LLFFBQU4sQ0FBZUMsT0FGMUI7QUFHSyxpQkFBQ0MsT0FBRCxFQUFVQyxLQUFWLEtBQW9CO0FBQUE7QUFBQTtBQUNqQiw2QkFBS0EsS0FEWTtBQUVqQixtQ0FBVSxnQkFGTztBQUdqQixpQ0FBU0QsT0FIUTtBQUloQkEsNEJBQVFFO0FBSlE7QUFIekI7QUFISixTQURKO0FBZ0JIIiwiZmlsZSI6ImNvcmVfdHlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEl0ZW1zTGlzdCBmcm9tICcuLi8uLi90ZW1wbGF0ZS9jb21wb25lbnRzL0l0ZW1zTGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvcmVfdHlwZShwcm9wcykge1xuICAgIGxldCBjaG9zZW5Qcm9wZXJ0eSA9IHByb3BzLmNob3Nlbl9kYXRhc2V0X3Byb3BlcnR5O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29yZVwiPlxuICAgICAgICAgICAgPHA+VGhpcyBpcyB0aGUgY29yZSB0eXBlIHNheWluZzoge3Byb3BzLmNvcmUubWVzc2FnZX08L3A+PGJyLz5cbiAgICAgICAgICAgIDxwPllvdXIgY2hvaWNlIGlzIHtjaG9zZW5Qcm9wZXJ0eX0gfCBTZWxlY3QgdGhlIHR5cGUgbm93PC9wPlxuICAgICAgICAgICAgPEl0ZW1zTGlzdFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lckNzc0NsYXNzPVwidHlwZXNfY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICBpdGVtcz17cHJvcHMuaGFuZGxlcnMuZm9yd2FyZH0+XG4gICAgICAgICAgICAgICAgeyhoYW5kbGVyLCBpbmRleCkgPT4gPGRpdlxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eXBlX2NvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZXJ9PlxuICAgICAgICAgICAgICAgICAgICB7aGFuZGxlci5uYW1lfVxuICAgICAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICAgIDwvSXRlbXNMaXN0PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl19