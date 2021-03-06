define(['exports', 'react', '../../template/components/ItemsList'], function (exports, _react, _ItemsList) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = core_index_selection;

    var _react2 = _interopRequireDefault(_react);

    var _ItemsList2 = _interopRequireDefault(_ItemsList);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function core_index_selection(props) {
        let chosenProperty = props.chosen_dataset_property;
        return _react2.default.createElement(
            'div',
            { className: 'core' },
            _react2.default.createElement(
                'p',
                null,
                'This is the core index selection saying: ',
                props.core.message
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
                'p',
                null,
                'Your choice is ',
                chosenProperty,
                ' | Select the index now'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC93aXphcmQvY29yZS9jb3JlX2luZGV4X3NlbGVjdGlvbi5qcyJdLCJuYW1lcyI6WyJjb3JlX2luZGV4X3NlbGVjdGlvbiIsInByb3BzIiwiY2hvc2VuUHJvcGVydHkiLCJjaG9zZW5fZGF0YXNldF9wcm9wZXJ0eSIsImNvcmUiLCJtZXNzYWdlIiwiaGFuZGxlcnMiLCJmb3J3YXJkIiwiaGFuZGxlciIsImluZGV4IiwibmFtZSJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztzQkFNd0JBLG9COzs7Ozs7Ozs7Ozs7QUFBVCxhQUFTQSxvQkFBVCxDQUE4QkMsS0FBOUIsRUFBcUM7QUFDaEQsWUFBSUMsaUJBQWlCRCxNQUFNRSx1QkFBM0I7QUFDQSxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsTUFBZjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQTZDRixzQkFBTUcsSUFBTixDQUFXQztBQUF4RCxhQURKO0FBQ3dFLHFEQUR4RTtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQW1CSCw4QkFBbkI7QUFBQTtBQUFBLGFBRko7QUFHSTtBQUFBO0FBQUE7QUFDSSx1Q0FBa0IsaUJBRHRCO0FBRUksMkJBQU9ELE1BQU1LLFFBQU4sQ0FBZUMsT0FGMUI7QUFHSyxpQkFBQ0MsT0FBRCxFQUFVQyxLQUFWLEtBQW9CO0FBQUE7QUFBQTtBQUNqQiw2QkFBS0EsS0FEWTtBQUVqQixtQ0FBVSxnQkFGTztBQUdqQixpQ0FBU0QsT0FIUTtBQUloQkEsNEJBQVFFO0FBSlE7QUFIekI7QUFISixTQURKO0FBZ0JIIiwiZmlsZSI6ImNvcmVfaW5kZXhfc2VsZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgSXRlbXNMaXN0IGZyb20gJy4uLy4uL3RlbXBsYXRlL2NvbXBvbmVudHMvSXRlbXNMaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29yZV9pbmRleF9zZWxlY3Rpb24ocHJvcHMpIHtcbiAgICBsZXQgY2hvc2VuUHJvcGVydHkgPSBwcm9wcy5jaG9zZW5fZGF0YXNldF9wcm9wZXJ0eTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcmVcIj5cbiAgICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIGNvcmUgaW5kZXggc2VsZWN0aW9uIHNheWluZzoge3Byb3BzLmNvcmUubWVzc2FnZX08L3A+PGJyLz5cbiAgICAgICAgICAgIDxwPllvdXIgY2hvaWNlIGlzIHtjaG9zZW5Qcm9wZXJ0eX0gfCBTZWxlY3QgdGhlIGluZGV4IG5vdzwvcD5cbiAgICAgICAgICAgIDxJdGVtc0xpc3RcbiAgICAgICAgICAgICAgICBjb250YWluZXJDc3NDbGFzcz1cInR5cGVzX2NvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgaXRlbXM9e3Byb3BzLmhhbmRsZXJzLmZvcndhcmR9PlxuICAgICAgICAgICAgICAgIHsoaGFuZGxlciwgaW5kZXgpID0+IDxkaXZcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHlwZV9jb250YWluZXJcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVyfT5cbiAgICAgICAgICAgICAgICAgICAge2hhbmRsZXIubmFtZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICA8L0l0ZW1zTGlzdD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdfQ==