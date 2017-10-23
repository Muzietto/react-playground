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
            body_renderer: _body_customvar2.default
        };
        wizardProps.core = {
            core_renderer: _core_customvar2.default,
            message: 'hello, world!'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC90ZW1wbGF0ZS9jdXN0b212YXJTdGVwX3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbImN1c3RvbXZhclN0ZXBfdGVtcGxhdGUiLCJ3aXphcmRQcm9wcyIsImJvZHkiLCJib2R5X3JlbmRlcmVyIiwiY29yZSIsImNvcmVfcmVuZGVyZXIiLCJtZXNzYWdlIiwiZm9vdGVyIiwiY2FuY2VsQnV0dG9uIiwiZGlzYWJsZWQiLCJzYXZlQnV0dG9uIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O3NCQVF3QkEsc0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBVCxhQUFTQSxzQkFBVCxDQUFnQ0MsV0FBaEMsRUFBNkM7QUFDeERBLG9CQUFZQyxJQUFaLEdBQW1CO0FBQ2ZDO0FBRGUsU0FBbkI7QUFHQUYsb0JBQVlHLElBQVosR0FBbUI7QUFDZkMsbURBRGU7QUFFZkMscUJBQVM7QUFGTSxTQUFuQjtBQUlBTCxvQkFBWU0sTUFBWixDQUFtQkMsWUFBbkIsQ0FBZ0NDLFFBQWhDLEdBQTJDLEtBQTNDO0FBQ0FSLG9CQUFZTSxNQUFaLENBQW1CRyxVQUFuQixDQUE4QkQsUUFBOUIsR0FBeUMsSUFBekM7O0FBRUEsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFdBQWY7QUFDSyxrQ0FBT1IsV0FBUDtBQURMLFNBREo7QUFLSCIsImZpbGUiOiJjdXN0b212YXJTdGVwX3RlbXBsYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgV2l6YXJkIGZyb20gJy4uL3dpemFyZC93aXphcmQnO1xuaW1wb3J0IGJvZHlfY3VzdG9tdmFyIGZyb20gJy4uL3dpemFyZC9ib2R5L2JvZHlfY3VzdG9tdmFyJztcbmltcG9ydCBjb3JlX2N1c3RvbXZhciBmcm9tICcuLi93aXphcmQvY29yZS9jb3JlX2N1c3RvbXZhcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1c3RvbXZhclN0ZXBfdGVtcGxhdGUod2l6YXJkUHJvcHMpIHtcbiAgICB3aXphcmRQcm9wcy5ib2R5ID0ge1xuICAgICAgICBib2R5X3JlbmRlcmVyOiBib2R5X2N1c3RvbXZhcixcbiAgICB9O1xuICAgIHdpemFyZFByb3BzLmNvcmUgPSB7XG4gICAgICAgIGNvcmVfcmVuZGVyZXI6IGNvcmVfY3VzdG9tdmFyLFxuICAgICAgICBtZXNzYWdlOiAnaGVsbG8sIHdvcmxkIScsXG4gICAgfTtcbiAgICB3aXphcmRQcm9wcy5mb290ZXIuY2FuY2VsQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgd2l6YXJkUHJvcHMuZm9vdGVyLnNhdmVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIHtXaXphcmQod2l6YXJkUHJvcHMpfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSJdfQ==