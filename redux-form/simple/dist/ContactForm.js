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
            { className: 'form-div' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9Db250YWN0Rm9ybS5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImluaXRpYWxWYWx1ZXMiLCJzdWJtaXR0ZWQiLCJjb250YWN0IiwiQ29udGFjdEZvcm0iLCJwcm9wcyIsImhhbmRsZVN1Ym1pdCIsIm9uUmVzZXQiLCJmb3JtIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FBTUEsVUFBTUEsa0JBQWtCQyxTQUFTO0FBQzdCLGVBQU87QUFDSDtBQUNBQywyQkFBZUQsTUFBTUUsU0FBTixDQUFnQkMsT0FGNUIsQ0FFcUM7QUFGckMsU0FBUDtBQUlILEtBTEQ7O0FBT0EsUUFBSUMsY0FBY0MsU0FBUztBQUN2QixjQUFNLEVBQUNDLFlBQUQsRUFBZUMsT0FBZixLQUEwQkYsS0FBaEM7O0FBRUEsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFVBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFFSTtBQUFBO0FBQUEsa0JBQU0sVUFBVUMsWUFBaEI7QUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsMEJBQU8sU0FBUSxXQUFmO0FBQUE7QUFBQSxxQkFESjtBQUNnRCw2REFEaEQ7QUFFSTtBQUNJLDhCQUFLLFdBRFQ7QUFFSSxtQ0FBVSxPQUZkO0FBR0ksbUNBQVUsVUFIZDtBQUlJLDhCQUFLLE1BSlQ7QUFGSixpQkFESjtBQVNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSwwQkFBTyxTQUFRLFVBQWY7QUFBQTtBQUFBLHFCQURKO0FBRUksc0VBQU8sTUFBSyxVQUFaLEVBQXVCLFdBQVUsT0FBakMsRUFBeUMsTUFBSyxNQUE5QztBQUZKLGlCQVRKO0FBYUk7QUFBQTtBQUFBLHNCQUFRLE1BQUssUUFBYjtBQUFBO0FBQUEsaUJBYko7QUFjSTtBQUFBO0FBQUE7QUFDSSw4QkFBSyxRQURUO0FBRUksaUNBQVNDLE9BRmI7QUFBQTtBQUFBO0FBZEo7QUFGSixTQURKO0FBd0JILEtBM0JEOztBQTZCQUgsa0JBQWMsMEJBQVU7QUFDcEI7QUFDQUksY0FBTTtBQUZjLEtBQVYsRUFHWEosV0FIVyxDQUFkOztBQUtBQSxrQkFBYyx5QkFBUUwsZUFBUixFQUF5QixPQUFPLEVBQVAsQ0FBekIsRUFBcUNLLFdBQXJDLENBQWQ7O3NCQUVlQSxXIiwiZmlsZSI6IkNvbnRhY3RGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtGaWVsZCwgcmVkdXhGb3JtfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gbWFuZGF0b3J5IGtleSBuYW1lXG4gICAgICAgIGluaXRpYWxWYWx1ZXM6IHN0YXRlLnN1Ym1pdHRlZC5jb250YWN0LCAvLyBwdWxsIGluaXRpYWwgdmFsdWVzIGZyb20gc3VibWl0dGVkIHJlZHVjZXJcbiAgICB9O1xufTtcblxubGV0IENvbnRhY3RGb3JtID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IHtoYW5kbGVTdWJtaXQsIG9uUmVzZXR9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZGl2XCI+XG4gICAgICAgICAgICA8aDM+Y29udGFjdCBmb3JtPC9oMz5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3ROYW1lXCI+Zmlyc3ROYW1lPC9sYWJlbD48YnIvPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFwZXJpbm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYXN0TmFtZVwiPmxhc3ROYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJsYXN0TmFtZVwiIGNvbXBvbmVudD1cImlucHV0XCIgdHlwZT1cInRleHRcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25SZXNldH0+UmVzZXRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbkNvbnRhY3RGb3JtID0gcmVkdXhGb3JtKHtcbiAgICAvLyBhIHVuaXF1ZSBuYW1lIGZvciB0aGUgZm9ybVxuICAgIGZvcm06ICdjb250YWN0J1xufSkoQ29udGFjdEZvcm0pO1xuXG5Db250YWN0Rm9ybSA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCAoKSA9PiAoe30pKShDb250YWN0Rm9ybSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtOyJdfQ==