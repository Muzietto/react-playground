define(['react', 'react-dom', './state_machine/steps'], function (_react, _reactDom, _steps) {
    'use strict';

    var _react2 = _interopRequireDefault(_react);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    _reactDom2.default.render(_react2.default.createElement(
        'div',
        { className: 'large_container' },
        _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement('input', { type: 'text', className: 'wizard-equipped', placeholder: 'type a $-sign in here' })
        ),
        _react2.default.createElement('div', { className: 'container hidden', id: 'complex_templates_container' })
    ), document.getElementById('root'));

    Array.prototype.forEach.call(document.getElementsByClassName('wizard-equipped'), elem => {
        elem.addEventListener('keyup', drawWizard);
    });

    function drawWizard(ev) {
        let wizardContainer = document.getElementById('complex_templates_container');

        if (ev.key === '$') {

            let promise = new Promise(function (resolve, reject) {

                wizardContainer.classList.remove('hidden');

                // complex templates
                (0, _steps.startStep)(resolve);
            });

            promise.then(wizardResult => {
                ev.target.value += wizardResult;
                _reactDom2.default.render(null, wizardContainer);
            }).catch(err => alert('Wizard failure: ' + err));

            return false;
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmb3JFYWNoIiwiY2FsbCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJlbGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRyYXdXaXphcmQiLCJldiIsIndpemFyZENvbnRhaW5lciIsImtleSIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInRoZW4iLCJ3aXphcmRSZXN1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNhdGNoIiwiZXJyIiwiYWxlcnQiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7O0FBT0EsdUJBQVNBLE1BQVQsQ0FDSTtBQUFBO0FBQUEsVUFBSyxXQUFVLGlCQUFmO0FBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQ0kscURBQU8sTUFBSyxNQUFaLEVBQW1CLFdBQVUsaUJBQTdCLEVBQStDLGFBQVksdUJBQTNEO0FBREosU0FESjtBQUlJLCtDQUFLLFdBQVUsa0JBQWYsRUFBa0MsSUFBRyw2QkFBckM7QUFKSixLQURKLEVBTVlDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FOWjs7QUFTQUMsVUFBTUMsU0FBTixDQUFnQkMsT0FBaEIsQ0FBd0JDLElBQXhCLENBQTZCTCxTQUFTTSxzQkFBVCxDQUFnQyxpQkFBaEMsQ0FBN0IsRUFBaUZDLFFBQVE7QUFDckZBLGFBQUtDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCQyxVQUEvQjtBQUNILEtBRkQ7O0FBSUEsYUFBU0EsVUFBVCxDQUFvQkMsRUFBcEIsRUFBd0I7QUFDcEIsWUFBSUMsa0JBQWtCWCxTQUFTQyxjQUFULENBQXdCLDZCQUF4QixDQUF0Qjs7QUFFQSxZQUFJUyxHQUFHRSxHQUFILEtBQVcsR0FBZixFQUFvQjs7QUFFaEIsZ0JBQUlDLFVBQVUsSUFBSUMsT0FBSixDQUFZLFVBQVVDLE9BQVYsRUFBbUJDLE1BQW5CLEVBQTJCOztBQUVqREwsZ0NBQWdCTSxTQUFoQixDQUEwQkMsTUFBMUIsQ0FBaUMsUUFBakM7O0FBRUE7QUFDQSxzQ0FBVUgsT0FBVjtBQUNILGFBTmEsQ0FBZDs7QUFRQUYsb0JBQ0tNLElBREwsQ0FDVUMsZ0JBQWdCO0FBQ2xCVixtQkFBR1csTUFBSCxDQUFVQyxLQUFWLElBQW1CRixZQUFuQjtBQUNBLG1DQUFTckIsTUFBVCxDQUFnQixJQUFoQixFQUFzQlksZUFBdEI7QUFDSCxhQUpMLEVBS0tZLEtBTEwsQ0FLV0MsT0FBT0MsTUFBTSxxQkFBcUJELEdBQTNCLENBTGxCOztBQU9BLG1CQUFPLEtBQVA7QUFDSDtBQUNKIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCB7c3RhcnRTdGVwfSBmcm9tICcuL3N0YXRlX21hY2hpbmUvc3RlcHMnO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsYXJnZV9jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cIndpemFyZC1lcXVpcHBlZFwiIHBsYWNlaG9sZGVyPVwidHlwZSBhICQtc2lnbiBpbiBoZXJlXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgaGlkZGVuXCIgaWQ9XCJjb21wbGV4X3RlbXBsYXRlc19jb250YWluZXJcIi8+XG4gICAgPC9kaXY+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuXG5BcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dpemFyZC1lcXVpcHBlZCcpLCBlbGVtID0+IHtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZHJhd1dpemFyZCk7XG59KTtcblxuZnVuY3Rpb24gZHJhd1dpemFyZChldikge1xuICAgIGxldCB3aXphcmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGxleF90ZW1wbGF0ZXNfY29udGFpbmVyJyk7XG5cbiAgICBpZiAoZXYua2V5ID09PSAnJCcpIHtcblxuICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblxuICAgICAgICAgICAgd2l6YXJkQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXG4gICAgICAgICAgICAvLyBjb21wbGV4IHRlbXBsYXRlc1xuICAgICAgICAgICAgc3RhcnRTdGVwKHJlc29sdmUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBwcm9taXNlXG4gICAgICAgICAgICAudGhlbih3aXphcmRSZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGV2LnRhcmdldC52YWx1ZSArPSB3aXphcmRSZXN1bHQ7XG4gICAgICAgICAgICAgICAgUmVhY3RET00ucmVuZGVyKG51bGwsIHdpemFyZENvbnRhaW5lcik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBhbGVydCgnV2l6YXJkIGZhaWx1cmU6ICcgKyBlcnIpKTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufSJdfQ==