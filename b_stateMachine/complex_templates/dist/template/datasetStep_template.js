define(['exports', 'react', '../wizard/wizard', '../wizard/body/body_customvar', '../wizard/core/core_customvar'], function (exports, _react, _wizard, _body_customvar, _core_customvar) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = customvarStep_template;

    var _react2 = _interopRequireDefault(_react);

    var _wizard2 = _interopRequireDefault(_wizard);

    var _body_customvar2 = _interopRequireDefault(_body_customvar);

    var _core_customvar2 = _interopRequireDefault(_core_customvar);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function customvarStep_template(wizardProps) {
        wizardProps.body = {
            body_renderer: body_dataset
        };
        wizardProps.core = {
            core_renderer: core_dataset
        };
        wizardProps.footer.cancelButton.disabled = false;
        wizardProps.footer.saveButton.disabled = true;

        return _react2.default.createElement(
            'div',
            { className: 'container' },
            (0, _wizard2.default)(wizardProps)
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC90ZW1wbGF0ZS9kYXRhc2V0U3RlcF90ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJjdXN0b212YXJTdGVwX3RlbXBsYXRlIiwid2l6YXJkUHJvcHMiLCJib2R5IiwiYm9keV9yZW5kZXJlciIsImJvZHlfZGF0YXNldCIsImNvcmUiLCJjb3JlX3JlbmRlcmVyIiwiY29yZV9kYXRhc2V0IiwiZm9vdGVyIiwiY2FuY2VsQnV0dG9uIiwiZGlzYWJsZWQiLCJzYXZlQnV0dG9uIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O3NCQVF3QkEsc0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBVCxhQUFTQSxzQkFBVCxDQUFnQ0MsV0FBaEMsRUFBNkM7QUFDeERBLG9CQUFZQyxJQUFaLEdBQW1CO0FBQ2ZDLDJCQUFlQztBQURBLFNBQW5CO0FBR0FILG9CQUFZSSxJQUFaLEdBQW1CO0FBQ2ZDLDJCQUFlQztBQURBLFNBQW5CO0FBR0FOLG9CQUFZTyxNQUFaLENBQW1CQyxZQUFuQixDQUFnQ0MsUUFBaEMsR0FBMkMsS0FBM0M7QUFDQVQsb0JBQVlPLE1BQVosQ0FBbUJHLFVBQW5CLENBQThCRCxRQUE5QixHQUF5QyxJQUF6Qzs7QUFFQSxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUNLLGtDQUFPVCxXQUFQO0FBREwsU0FESjtBQUtIIiwiZmlsZSI6ImRhdGFzZXRTdGVwX3RlbXBsYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgV2l6YXJkIGZyb20gJy4uL3dpemFyZC93aXphcmQnO1xuaW1wb3J0IGJvZHlfY3VzdG9tdmFyIGZyb20gJy4uL3dpemFyZC9ib2R5L2JvZHlfY3VzdG9tdmFyJztcbmltcG9ydCBjb3JlX2N1c3RvbXZhciBmcm9tICcuLi93aXphcmQvY29yZS9jb3JlX2N1c3RvbXZhcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1c3RvbXZhclN0ZXBfdGVtcGxhdGUod2l6YXJkUHJvcHMpIHtcbiAgICB3aXphcmRQcm9wcy5ib2R5ID0ge1xuICAgICAgICBib2R5X3JlbmRlcmVyOiBib2R5X2RhdGFzZXQsXG4gICAgfTtcbiAgICB3aXphcmRQcm9wcy5jb3JlID0ge1xuICAgICAgICBjb3JlX3JlbmRlcmVyOiBjb3JlX2RhdGFzZXQsXG4gICAgfTtcbiAgICB3aXphcmRQcm9wcy5mb290ZXIuY2FuY2VsQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgd2l6YXJkUHJvcHMuZm9vdGVyLnNhdmVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIHtXaXphcmQod2l6YXJkUHJvcHMpfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSJdfQ==