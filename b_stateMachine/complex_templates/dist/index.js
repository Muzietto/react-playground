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

    (0, _steps.startStep)();

    _reactDom2.default.render((0, _steps2.startStep)(), document.getElementById('complex_templates_container'));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9pbmRleC5qcyJdLCJuYW1lcyI6WyJ3aXphcmRQcm9wcyIsImJvZHkiLCJib2R5X3JlbmRlcmVyIiwic3VtbWFyeSIsInN0ZXAiLCJjb3JlIiwiY29yZV9yZW5kZXJlciIsIm1lc3NhZ2UiLCJmb290ZXIiLCJjYW5jZWxCdXR0b24iLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJhbGVydCIsImNsYXNzTmFtZSIsInNhdmVCdXR0b24iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNBLFFBQUlBLGNBQWM7QUFDZEMsY0FBTTtBQUNGQztBQURFLFNBRFE7QUFJZEMsaUJBQVM7QUFDTEMsa0JBQU07QUFERCxTQUpLO0FBT2RDLGNBQU07QUFDRkMsOENBREU7QUFFRkMscUJBQVM7QUFGUCxTQVBRO0FBV2RDLGdCQUFRO0FBQ0pDLDBCQUFjO0FBQ1ZDLDBCQUFVLEtBREE7QUFFVkMseUJBQVMsTUFBTTtBQUNYQywwQkFBTSx1QkFBTjtBQUNILGlCQUpTO0FBS1ZDLDJCQUFXO0FBTEQsYUFEVjtBQVFKQyx3QkFBWTtBQUNSSiwwQkFBVSxJQURGO0FBRVJDLHlCQUFTLE1BQU07QUFDWEMsMEJBQU0scUJBQU47QUFDSCxpQkFKTztBQUtSQywyQkFBVztBQUxIO0FBUlI7QUFYTSxLQUFsQjs7QUE2QkEsdUJBQVNFLE1BQVQsQ0FDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFdBQWY7QUFDSyxrQ0FBT2YsV0FBUDtBQURMLFNBREo7QUFJSSwrQ0FBSyxXQUFVLFdBQWYsRUFBMkIsSUFBRyx5QkFBOUIsR0FKSjtBQUtJLCtDQUFLLFdBQVUsV0FBZixFQUEyQixJQUFHLDZCQUE5QjtBQUxKLEtBREosRUFPWWdCLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FQWjs7QUFTQTs7QUFFQSx1QkFBU0YsTUFBVCxDQUNJLHdCQURKLEVBQ2lCQyxTQUFTQyxjQUFULENBQXdCLDZCQUF4QixDQURqQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQge3N0YXJ0U3RlcCBhcyBzaW1wbGVTdGFydFN0ZXB9IGZyb20gJy4vc2ltcGxlX3N0YXRlX21hY2hpbmUvc3RlcHMnO1xuaW1wb3J0IHtzdGFydFN0ZXB9IGZyb20gJy4vc3RhdGVfbWFjaGluZS9zdGVwcyc7XG5pbXBvcnQgV2l6YXJkIGZyb20gJy4vd2l6YXJkL3dpemFyZCc7XG5pbXBvcnQgY29yZV90eXBlIGZyb20gJy4vd2l6YXJkL2NvcmUvY29yZV90eXBlJztcbmltcG9ydCBjb3JlX2luZGV4IGZyb20gJy4vd2l6YXJkL2NvcmUvY29yZV9pbmRleCc7XG5pbXBvcnQgY29yZV9jdXN0b212YXJzIGZyb20gJy4vd2l6YXJkL2NvcmUvY29yZV9jdXN0b212YXJzJztcbmltcG9ydCBib2R5X2N1c3RvbXZhcnMgZnJvbSAnLi93aXphcmQvYm9keS9ib2R5X2N1c3RvbXZhcnMnO1xuaW1wb3J0IGJvZHlfZGF0YXNldHMgZnJvbSAnLi93aXphcmQvYm9keS9ib2R5X2RhdGFzZXRzJztcblxubGV0IHdpemFyZFByb3BzID0ge1xuICAgIGJvZHk6IHtcbiAgICAgICAgYm9keV9yZW5kZXJlcjogYm9keV9kYXRhc2V0cyxcbiAgICB9LFxuICAgIHN1bW1hcnk6IHtcbiAgICAgICAgc3RlcDogMSxcbiAgICB9LFxuICAgIGNvcmU6IHtcbiAgICAgICAgY29yZV9yZW5kZXJlcjogY29yZV90eXBlLFxuICAgICAgICBtZXNzYWdlOiAnaGVsbG8sIHdvcmxkIScsXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgICAgY2FuY2VsQnV0dG9uOiB7XG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ2NhbmNlbCBidXR0b24gY2xpY2tlZCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2xlZnRfYnV0dG9uJyxcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZUJ1dHRvbjoge1xuICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1NBVkUgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdyaWdodF9idXR0b24nLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIHtXaXphcmQod2l6YXJkUHJvcHMpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBpZD1cInN0YXRlX21hY2hpbmVfY29udGFpbmVyXCIvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIGlkPVwiY29tcGxleF90ZW1wbGF0ZXNfY29udGFpbmVyXCIvPlxuICAgIDwvZGl2PiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG5cbnNpbXBsZVN0YXJ0U3RlcCgpO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgc3RhcnRTdGVwKCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wbGV4X3RlbXBsYXRlc19jb250YWluZXInKSk7XG4iXX0=