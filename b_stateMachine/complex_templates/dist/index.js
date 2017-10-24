define(['react', 'react-dom', './simple_state_machine/steps', './state_machine/steps', './wizard/wizard', './wizard/core/core_type', './wizard/core/core_type_simple', './wizard/core/core_index', './wizard/core/core_customvars', './wizard/body/body_customvars', './wizard/body/body_datasets'], function (_react, _reactDom, _steps, _steps2, _wizard, _core_type, _core_type_simple, _core_index, _core_customvars, _body_customvars, _body_datasets) {
    'use strict';

    var _react2 = _interopRequireDefault(_react);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var _wizard2 = _interopRequireDefault(_wizard);

    var _core_type2 = _interopRequireDefault(_core_type);

    var _core_type_simple2 = _interopRequireDefault(_core_type_simple);

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
            core_renderer: _core_type_simple2.default,
            message: 'hello, world!'
        },
        footer: {
            cancelButton: {
                disabled: false,
                onClick: () => {
                    alert('cancel button clicked');
                },
                className: 'left_button'
            },
            restartButton: {
                disabled: false,
                onClick: () => {
                    alert('restart button clicked');
                },
                className: 'left_button'
            },
            saveButton: {
                disabled: true,
                onClick: () => {
                    alert('SAVE button clicked');
                },
                className: 'right_button'
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

    // simple templates
    (0, _steps.startStep)();

    // complex templates
    (0, _steps2.startStep)();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9pbmRleC5qcyJdLCJuYW1lcyI6WyJ3aXphcmRQcm9wcyIsImJvZHkiLCJib2R5X3JlbmRlcmVyIiwic3VtbWFyeSIsInN0ZXAiLCJjb3JlIiwiY29yZV9yZW5kZXJlciIsIm1lc3NhZ2UiLCJmb290ZXIiLCJjYW5jZWxCdXR0b24iLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJhbGVydCIsImNsYXNzTmFtZSIsInJlc3RhcnRCdXR0b24iLCJzYXZlQnV0dG9uIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVBLFFBQUlBLGNBQWM7QUFDZEMsY0FBTTtBQUNGQztBQURFLFNBRFE7QUFJZEMsaUJBQVM7QUFDTEMsa0JBQU07QUFERCxTQUpLO0FBT2RDLGNBQU07QUFDRkMscURBREU7QUFFRkMscUJBQVM7QUFGUCxTQVBRO0FBV2RDLGdCQUFRO0FBQ0pDLDBCQUFjO0FBQ1ZDLDBCQUFVLEtBREE7QUFFVkMseUJBQVMsTUFBTTtBQUNYQywwQkFBTSx1QkFBTjtBQUNILGlCQUpTO0FBS1ZDLDJCQUFXO0FBTEQsYUFEVjtBQVFKQywyQkFBZTtBQUNYSiwwQkFBVSxLQURDO0FBRVhDLHlCQUFTLE1BQU07QUFDWEMsMEJBQU0sd0JBQU47QUFDSCxpQkFKVTtBQUtYQywyQkFBVztBQUxBLGFBUlg7QUFlSkUsd0JBQVk7QUFDUkwsMEJBQVUsSUFERjtBQUVSQyx5QkFBUyxNQUFNO0FBQ1hDLDBCQUFNLHFCQUFOO0FBQ0gsaUJBSk87QUFLUkMsMkJBQVc7QUFMSDtBQWZSO0FBWE0sS0FBbEI7O0FBb0NBLHVCQUFTRyxNQUFULENBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQ0ssa0NBQU9oQixXQUFQO0FBREwsU0FESjtBQUlJLCtDQUFLLFdBQVUsV0FBZixFQUEyQixJQUFHLHlCQUE5QixHQUpKO0FBS0ksK0NBQUssV0FBVSxXQUFmLEVBQTJCLElBQUcsNkJBQTlCO0FBTEosS0FESixFQU9ZaUIsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQVBaOztBQVNBO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQge3N0YXJ0U3RlcCBhcyBzaW1wbGVTdGFydFN0ZXB9IGZyb20gJy4vc2ltcGxlX3N0YXRlX21hY2hpbmUvc3RlcHMnO1xuaW1wb3J0IHtzdGFydFN0ZXB9IGZyb20gJy4vc3RhdGVfbWFjaGluZS9zdGVwcyc7XG5pbXBvcnQgV2l6YXJkIGZyb20gJy4vd2l6YXJkL3dpemFyZCc7XG5pbXBvcnQgY29yZV90eXBlIGZyb20gJy4vd2l6YXJkL2NvcmUvY29yZV90eXBlJztcbmltcG9ydCBjb3JlX3R5cGVfc2ltcGxlIGZyb20gJy4vd2l6YXJkL2NvcmUvY29yZV90eXBlX3NpbXBsZSc7XG5pbXBvcnQgY29yZV9pbmRleCBmcm9tICcuL3dpemFyZC9jb3JlL2NvcmVfaW5kZXgnO1xuaW1wb3J0IGNvcmVfY3VzdG9tdmFycyBmcm9tICcuL3dpemFyZC9jb3JlL2NvcmVfY3VzdG9tdmFycyc7XG5pbXBvcnQgYm9keV9jdXN0b212YXJzIGZyb20gJy4vd2l6YXJkL2JvZHkvYm9keV9jdXN0b212YXJzJztcbmltcG9ydCBib2R5X2RhdGFzZXRzIGZyb20gJy4vd2l6YXJkL2JvZHkvYm9keV9kYXRhc2V0cyc7XG5cbmxldCB3aXphcmRQcm9wcyA9IHtcbiAgICBib2R5OiB7XG4gICAgICAgIGJvZHlfcmVuZGVyZXI6IGJvZHlfZGF0YXNldHMsXG4gICAgfSxcbiAgICBzdW1tYXJ5OiB7XG4gICAgICAgIHN0ZXA6IDEsXG4gICAgfSxcbiAgICBjb3JlOiB7XG4gICAgICAgIGNvcmVfcmVuZGVyZXI6IGNvcmVfdHlwZV9zaW1wbGUsXG4gICAgICAgIG1lc3NhZ2U6ICdoZWxsbywgd29ybGQhJyxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgICBjYW5jZWxCdXR0b246IHtcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydCgnY2FuY2VsIGJ1dHRvbiBjbGlja2VkJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbGVmdF9idXR0b24nLFxuICAgICAgICB9LFxuICAgICAgICByZXN0YXJ0QnV0dG9uOiB7XG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ3Jlc3RhcnQgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdsZWZ0X2J1dHRvbicsXG4gICAgICAgIH0sXG4gICAgICAgIHNhdmVCdXR0b246IHtcbiAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdTQVZFIGJ1dHRvbiBjbGlja2VkJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAncmlnaHRfYnV0dG9uJyxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7V2l6YXJkKHdpemFyZFByb3BzKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgaWQ9XCJzdGF0ZV9tYWNoaW5lX2NvbnRhaW5lclwiLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBpZD1cImNvbXBsZXhfdGVtcGxhdGVzX2NvbnRhaW5lclwiLz5cbiAgICA8L2Rpdj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xuXG4vLyBzaW1wbGUgdGVtcGxhdGVzXG5zaW1wbGVTdGFydFN0ZXAoKTtcblxuLy8gY29tcGxleCB0ZW1wbGF0ZXNcbnN0YXJ0U3RlcCgpO1xuIl19