define(['react', 'react-dom', './simple_state_machine/steps', './state_machine/steps', './wizard/wizard', './wizard/core/core_type', './wizard/core/core_index', './wizard/core/core_customvars', './wizard/body/body_customvars', './wizard/body/body_datasets'], function (_react, _reactDom, _steps, _steps2, _wizard, _core_type, _core_index, _core_customvars, _body_customvars, _body_datasets) {
    'use strict';

    var _react2 = _interopRequireDefault(_react);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var _wizard2 = _interopRequireDefault(_wizard);

    var _core_type2 = _interopRequireDefault(_core_type);

    var _core_index2 = _interopRequireDefault(_core_index);

    var _core_customvars2 = _interopRequireDefault(_core_customvars);

    var _body_customvars2 = _interopRequireDefault(_body_customvars);

    var _body_datasets2 = _interopRequireDefault(_body_datasets);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    let wizardProps = {
        body: {
            body_renderer: _body_datasets2.default
        },
        summary: {
            step: 1
        },
        core: {
            core_renderer: _core_type2.default,
            message: 'hello, world!'
        },
        footer: {
            cancelButton: {
                disabled: false,
                onClick: () => {
                    alert('cancel button clicked');
                }
            },
            saveButton: {
                disabled: true,
                onClick: () => {
                    alert('SAVE button clicked');
                }
            }
        }
    };

    _reactDom2.default.render(_react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: 'container' },
            (0, _wizard2.default)(wizardProps)
        ),
        _react2.default.createElement('div', { className: 'container', id: 'state_machine_container' }),
        _react2.default.createElement('div', { className: 'container', id: 'complex_templates_container' })
    ), document.getElementById('root'));

    (0, _steps.startStep)();

    _reactDom2.default.render((0, _steps2.startStep)(), document.getElementById('complex_templates_container'));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9pbmRleC5qcyJdLCJuYW1lcyI6WyJ3aXphcmRQcm9wcyIsImJvZHkiLCJib2R5X3JlbmRlcmVyIiwic3VtbWFyeSIsInN0ZXAiLCJjb3JlIiwiY29yZV9yZW5kZXJlciIsIm1lc3NhZ2UiLCJmb290ZXIiLCJjYW5jZWxCdXR0b24iLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJhbGVydCIsInNhdmVCdXR0b24iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNBLFFBQUlBLGNBQWM7QUFDZEMsY0FBTTtBQUNGQztBQURFLFNBRFE7QUFJZEMsaUJBQVM7QUFDTEMsa0JBQU07QUFERCxTQUpLO0FBT2RDLGNBQU07QUFDRkMsOENBREU7QUFFRkMscUJBQVM7QUFGUCxTQVBRO0FBV2RDLGdCQUFRO0FBQ0pDLDBCQUFjO0FBQ1ZDLDBCQUFVLEtBREE7QUFFVkMseUJBQVMsTUFBTTtBQUNYQywwQkFBTSx1QkFBTjtBQUNIO0FBSlMsYUFEVjtBQU9KQyx3QkFBWTtBQUNSSCwwQkFBVSxJQURGO0FBRVJDLHlCQUFTLE1BQU07QUFDWEMsMEJBQU0scUJBQU47QUFDSDtBQUpPO0FBUFI7QUFYTSxLQUFsQjs7QUEyQkEsdUJBQVNFLE1BQVQsQ0FDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFdBQWY7QUFDSyxrQ0FBT2QsV0FBUDtBQURMLFNBREo7QUFJSSwrQ0FBSyxXQUFVLFdBQWYsRUFBMkIsSUFBRyx5QkFBOUIsR0FKSjtBQUtJLCtDQUFLLFdBQVUsV0FBZixFQUEyQixJQUFHLDZCQUE5QjtBQUxKLEtBREosRUFPWWUsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQVBaOztBQVNBOztBQUVBLHVCQUFTRixNQUFULENBQ0ksd0JBREosRUFDaUJDLFNBQVNDLGNBQVQsQ0FBd0IsNkJBQXhCLENBRGpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCB7c3RhcnRTdGVwIGFzIHNpbXBsZVN0YXJ0U3RlcH0gZnJvbSAnLi9zaW1wbGVfc3RhdGVfbWFjaGluZS9zdGVwcyc7XG5pbXBvcnQge3N0YXJ0U3RlcH0gZnJvbSAnLi9zdGF0ZV9tYWNoaW5lL3N0ZXBzJztcbmltcG9ydCBXaXphcmQgZnJvbSAnLi93aXphcmQvd2l6YXJkJztcbmltcG9ydCBjb3JlX3R5cGUgZnJvbSAnLi93aXphcmQvY29yZS9jb3JlX3R5cGUnO1xuaW1wb3J0IGNvcmVfaW5kZXggZnJvbSAnLi93aXphcmQvY29yZS9jb3JlX2luZGV4JztcbmltcG9ydCBjb3JlX2N1c3RvbXZhcnMgZnJvbSAnLi93aXphcmQvY29yZS9jb3JlX2N1c3RvbXZhcnMnO1xuaW1wb3J0IGJvZHlfY3VzdG9tdmFycyBmcm9tICcuL3dpemFyZC9ib2R5L2JvZHlfY3VzdG9tdmFycyc7XG5pbXBvcnQgYm9keV9kYXRhc2V0cyBmcm9tICcuL3dpemFyZC9ib2R5L2JvZHlfZGF0YXNldHMnO1xuXG5sZXQgd2l6YXJkUHJvcHMgPSB7XG4gICAgYm9keToge1xuICAgICAgICBib2R5X3JlbmRlcmVyOiBib2R5X2RhdGFzZXRzLFxuICAgIH0sXG4gICAgc3VtbWFyeToge1xuICAgICAgICBzdGVwOiAxLFxuICAgIH0sXG4gICAgY29yZToge1xuICAgICAgICBjb3JlX3JlbmRlcmVyOiBjb3JlX3R5cGUsXG4gICAgICAgIG1lc3NhZ2U6ICdoZWxsbywgd29ybGQhJyxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgICBjYW5jZWxCdXR0b246IHtcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydCgnY2FuY2VsIGJ1dHRvbiBjbGlja2VkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmVCdXR0b246IHtcbiAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdTQVZFIGJ1dHRvbiBjbGlja2VkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAge1dpemFyZCh3aXphcmRQcm9wcyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIGlkPVwic3RhdGVfbWFjaGluZV9jb250YWluZXJcIi8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgaWQ9XCJjb21wbGV4X3RlbXBsYXRlc19jb250YWluZXJcIi8+XG4gICAgPC9kaXY+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcblxuc2ltcGxlU3RhcnRTdGVwKCk7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICBzdGFydFN0ZXAoKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBsZXhfdGVtcGxhdGVzX2NvbnRhaW5lcicpKTtcbiJdfQ==