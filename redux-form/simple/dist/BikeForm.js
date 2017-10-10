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
            initialValues: state.submitted.bike // pull initial values from submitted reducer
        };
    };

    let BikeForm = props => {
        const { handleSubmit, onReset } = props;

        return _react2.default.createElement(
            'div',
            { className: 'form-div' },
            _react2.default.createElement(
                'h3',
                null,
                'bike form'
            ),
            _react2.default.createElement(
                'form',
                { onSubmit: handleSubmit },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'color' },
                        'color'
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(_reduxForm.Field, { name: 'color', component: 'input', type: 'text' })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'brand' },
                        'brand'
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(_reduxForm.Field, { name: 'brand', component: 'input', type: 'text' })
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

    BikeForm = (0, _reduxForm.reduxForm)({
        // a unique name for the form
        form: 'bike'
    })(BikeForm);

    BikeForm = (0, _reactRedux.connect)(mapStateToProps, () => ({}))(BikeForm);

    exports.default = BikeForm;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9CaWtlRm9ybS5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImluaXRpYWxWYWx1ZXMiLCJzdWJtaXR0ZWQiLCJiaWtlIiwiQmlrZUZvcm0iLCJwcm9wcyIsImhhbmRsZVN1Ym1pdCIsIm9uUmVzZXQiLCJmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFJQSxVQUFNQSxrQkFBa0JDLFNBQVM7QUFDN0IsZUFBTztBQUNIO0FBQ0FDLDJCQUFlRCxNQUFNRSxTQUFOLENBQWdCQyxJQUY1QixDQUVrQztBQUZsQyxTQUFQO0FBSUgsS0FMRDs7QUFPQSxRQUFJQyxXQUFXQyxTQUFTO0FBQ3BCLGNBQU0sRUFBQ0MsWUFBRCxFQUFlQyxPQUFmLEtBQTBCRixLQUFoQzs7QUFFQSxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsVUFBZjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUVJO0FBQUE7QUFBQSxrQkFBTSxVQUFVQyxZQUFoQjtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSwwQkFBTyxTQUFRLE9BQWY7QUFBQTtBQUFBLHFCQURKO0FBQ3dDLDZEQUR4QztBQUVJLHNFQUFPLE1BQUssT0FBWixFQUFvQixXQUFVLE9BQTlCLEVBQXNDLE1BQUssTUFBM0M7QUFGSixpQkFESjtBQUtJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSwwQkFBTyxTQUFRLE9BQWY7QUFBQTtBQUFBLHFCQURKO0FBQ3dDLDZEQUR4QztBQUVJLHNFQUFPLE1BQUssT0FBWixFQUFvQixXQUFVLE9BQTlCLEVBQXNDLE1BQUssTUFBM0M7QUFGSixpQkFMSjtBQVNJO0FBQUE7QUFBQSxzQkFBUSxNQUFLLFFBQWI7QUFBQTtBQUFBLGlCQVRKO0FBVUk7QUFBQTtBQUFBO0FBQ0ksOEJBQUssUUFEVDtBQUVJLGlDQUFTQyxPQUZiO0FBQUE7QUFBQTtBQVZKO0FBRkosU0FESjtBQW9CSCxLQXZCRDs7QUF5QkFILGVBQVcsMEJBQVU7QUFDakI7QUFDQUksY0FBTTtBQUZXLEtBQVYsRUFHUkosUUFIUSxDQUFYOztBQUtBQSxlQUFXLHlCQUFRTCxlQUFSLEVBQXlCLE9BQU8sRUFBUCxDQUF6QixFQUFxQ0ssUUFBckMsQ0FBWDs7c0JBRWVBLFEiLCJmaWxlIjoiQmlrZUZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtGaWVsZCwgcmVkdXhGb3JtfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gbWFuZGF0b3J5IGtleSBuYW1lXG4gICAgICAgIGluaXRpYWxWYWx1ZXM6IHN0YXRlLnN1Ym1pdHRlZC5iaWtlLCAvLyBwdWxsIGluaXRpYWwgdmFsdWVzIGZyb20gc3VibWl0dGVkIHJlZHVjZXJcbiAgICB9O1xufTtcblxubGV0IEJpa2VGb3JtID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IHtoYW5kbGVTdWJtaXQsIG9uUmVzZXR9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZGl2XCI+XG4gICAgICAgICAgICA8aDM+YmlrZSBmb3JtPC9oMz5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29sb3JcIj5jb2xvcjwvbGFiZWw+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJjb2xvclwiIGNvbXBvbmVudD1cImlucHV0XCIgdHlwZT1cInRleHRcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJicmFuZFwiPmJyYW5kPC9sYWJlbD48YnIvPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImJyYW5kXCIgY29tcG9uZW50PVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblJlc2V0fT5SZXNldFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuQmlrZUZvcm0gPSByZWR1eEZvcm0oe1xuICAgIC8vIGEgdW5pcXVlIG5hbWUgZm9yIHRoZSBmb3JtXG4gICAgZm9ybTogJ2Jpa2UnXG59KShCaWtlRm9ybSk7XG5cbkJpa2VGb3JtID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsICgpID0+ICh7fSkpKEJpa2VGb3JtKTtcblxuZXhwb3J0IGRlZmF1bHQgQmlrZUZvcm07XG4iXX0=