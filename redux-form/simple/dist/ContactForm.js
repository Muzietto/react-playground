define(['exports', 'react', 'redux-form', 'react-redux'], function (exports, _react, _reduxForm, _reactRedux) {
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

    const mapStateToProps = state => {
        return {
            // mandatory key name
            initialValues: state.submitted.contact // pull initial values from submitted reducer
        };
    };

    let ContactForm = props => {
        const { handleSubmit, onReset } = props;

        return _react2.default.createElement(
            'div',
            { 'class': 'form-div' },
            _react2.default.createElement(
                'h3',
                null,
                'contact form'
            ),
            _react2.default.createElement(
                'form',
                { onSubmit: handleSubmit },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'firstName' },
                        'firstName'
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(_reduxForm.Field, {
                        name: 'firstName',
                        component: 'input',
                        className: 'paperino',
                        type: 'text' })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'lastName' },
                        'lastName'
                    ),
                    _react2.default.createElement(_reduxForm.Field, { name: 'lastName', component: 'input', type: 'text' })
                ),
                _react2.default.createElement(
                    'button',
                    { type: 'submit' },
                    'Submit'
                ),
                _react2.default.createElement(
                    'button',
                    {
                        type: 'button',
                        onClick: onReset },
                    'Reset'
                )
            )
        );
    };

    ContactForm = (0, _reduxForm.reduxForm)({
        // a unique name for the form
        form: 'contact'
    })(ContactForm);

    ContactForm = (0, _reactRedux.connect)(mapStateToProps, () => ({}))(ContactForm);

    exports.default = ContactForm;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9Db250YWN0Rm9ybS5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImluaXRpYWxWYWx1ZXMiLCJzdWJtaXR0ZWQiLCJjb250YWN0IiwiQ29udGFjdEZvcm0iLCJwcm9wcyIsImhhbmRsZVN1Ym1pdCIsIm9uUmVzZXQiLCJmb3JtIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FBTUEsVUFBTUEsa0JBQWtCQyxTQUFTO0FBQzdCLGVBQU87QUFDSDtBQUNBQywyQkFBZUQsTUFBTUUsU0FBTixDQUFnQkMsT0FGNUIsQ0FFcUM7QUFGckMsU0FBUDtBQUlILEtBTEQ7O0FBT0EsUUFBSUMsY0FBY0MsU0FBUztBQUN2QixjQUFNLEVBQUNDLFlBQUQsRUFBZUMsT0FBZixLQUEwQkYsS0FBaEM7O0FBRUEsZUFDSTtBQUFBO0FBQUEsY0FBSyxTQUFNLFVBQVg7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFFSTtBQUFBO0FBQUEsa0JBQU0sVUFBVUMsWUFBaEI7QUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsMEJBQU8sU0FBUSxXQUFmO0FBQUE7QUFBQSxxQkFESjtBQUNnRCw2REFEaEQ7QUFFSTtBQUNJLDhCQUFLLFdBRFQ7QUFFSSxtQ0FBVSxPQUZkO0FBR0ksbUNBQVUsVUFIZDtBQUlJLDhCQUFLLE1BSlQ7QUFGSixpQkFESjtBQVNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSwwQkFBTyxTQUFRLFVBQWY7QUFBQTtBQUFBLHFCQURKO0FBRUksc0VBQU8sTUFBSyxVQUFaLEVBQXVCLFdBQVUsT0FBakMsRUFBeUMsTUFBSyxNQUE5QztBQUZKLGlCQVRKO0FBYUk7QUFBQTtBQUFBLHNCQUFRLE1BQUssUUFBYjtBQUFBO0FBQUEsaUJBYko7QUFjSTtBQUFBO0FBQUE7QUFDSSw4QkFBSyxRQURUO0FBRUksaUNBQVNDLE9BRmI7QUFBQTtBQUFBO0FBZEo7QUFGSixTQURKO0FBd0JILEtBM0JEOztBQTZCQUgsa0JBQWMsMEJBQVU7QUFDcEI7QUFDQUksY0FBTTtBQUZjLEtBQVYsRUFHWEosV0FIVyxDQUFkOztBQUtBQSxrQkFBYyx5QkFBUUwsZUFBUixFQUF5QixPQUFPLEVBQVAsQ0FBekIsRUFBcUNLLFdBQXJDLENBQWQ7O3NCQUVlQSxXIiwiZmlsZSI6IkNvbnRhY3RGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtGaWVsZCwgcmVkdXhGb3JtfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gbWFuZGF0b3J5IGtleSBuYW1lXG4gICAgICAgIGluaXRpYWxWYWx1ZXM6IHN0YXRlLnN1Ym1pdHRlZC5jb250YWN0LCAvLyBwdWxsIGluaXRpYWwgdmFsdWVzIGZyb20gc3VibWl0dGVkIHJlZHVjZXJcbiAgICB9O1xufTtcblxubGV0IENvbnRhY3RGb3JtID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IHtoYW5kbGVTdWJtaXQsIG9uUmVzZXR9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1kaXZcIj5cbiAgICAgICAgICAgIDxoMz5jb250YWN0IGZvcm08L2gzPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdE5hbWVcIj5maXJzdE5hbWU8L2xhYmVsPjxici8+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYXBlcmlub1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3ROYW1lXCI+bGFzdE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImxhc3ROYW1lXCIgY29tcG9uZW50PVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblJlc2V0fT5SZXNldFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuQ29udGFjdEZvcm0gPSByZWR1eEZvcm0oe1xuICAgIC8vIGEgdW5pcXVlIG5hbWUgZm9yIHRoZSBmb3JtXG4gICAgZm9ybTogJ2NvbnRhY3QnXG59KShDb250YWN0Rm9ybSk7XG5cbkNvbnRhY3RGb3JtID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsICgpID0+ICh7fSkpKENvbnRhY3RGb3JtKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07Il19