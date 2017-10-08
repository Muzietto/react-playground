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
            { 'class': 'form-div' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9CaWtlRm9ybS5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImluaXRpYWxWYWx1ZXMiLCJzdWJtaXR0ZWQiLCJiaWtlIiwiQmlrZUZvcm0iLCJwcm9wcyIsImhhbmRsZVN1Ym1pdCIsIm9uUmVzZXQiLCJmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFJQSxVQUFNQSxrQkFBa0JDLFNBQVM7QUFDN0IsZUFBTztBQUNIO0FBQ0FDLDJCQUFlRCxNQUFNRSxTQUFOLENBQWdCQyxJQUY1QixDQUVrQztBQUZsQyxTQUFQO0FBSUgsS0FMRDs7QUFPQSxRQUFJQyxXQUFXQyxTQUFTO0FBQ3BCLGNBQU0sRUFBQ0MsWUFBRCxFQUFlQyxPQUFmLEtBQTBCRixLQUFoQzs7QUFFQSxlQUNJO0FBQUE7QUFBQSxjQUFLLFNBQU0sVUFBWDtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUVJO0FBQUE7QUFBQSxrQkFBTSxVQUFVQyxZQUFoQjtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSwwQkFBTyxTQUFRLE9BQWY7QUFBQTtBQUFBLHFCQURKO0FBQ3dDLDZEQUR4QztBQUVJLHNFQUFPLE1BQUssT0FBWixFQUFvQixXQUFVLE9BQTlCLEVBQXNDLE1BQUssTUFBM0M7QUFGSixpQkFESjtBQUtJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSwwQkFBTyxTQUFRLE9BQWY7QUFBQTtBQUFBLHFCQURKO0FBQ3dDLDZEQUR4QztBQUVJLHNFQUFPLE1BQUssT0FBWixFQUFvQixXQUFVLE9BQTlCLEVBQXNDLE1BQUssTUFBM0M7QUFGSixpQkFMSjtBQVNJO0FBQUE7QUFBQSxzQkFBUSxNQUFLLFFBQWI7QUFBQTtBQUFBLGlCQVRKO0FBVUk7QUFBQTtBQUFBO0FBQ0ksOEJBQUssUUFEVDtBQUVJLGlDQUFTQyxPQUZiO0FBQUE7QUFBQTtBQVZKO0FBRkosU0FESjtBQW9CSCxLQXZCRDs7QUF5QkFILGVBQVcsMEJBQVU7QUFDakI7QUFDQUksY0FBTTtBQUZXLEtBQVYsRUFHUkosUUFIUSxDQUFYOztBQUtBQSxlQUFXLHlCQUFRTCxlQUFSLEVBQXlCLE9BQU8sRUFBUCxDQUF6QixFQUFxQ0ssUUFBckMsQ0FBWDs7c0JBRWVBLFEiLCJmaWxlIjoiQmlrZUZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtGaWVsZCwgcmVkdXhGb3JtfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gbWFuZGF0b3J5IGtleSBuYW1lXG4gICAgICAgIGluaXRpYWxWYWx1ZXM6IHN0YXRlLnN1Ym1pdHRlZC5iaWtlLCAvLyBwdWxsIGluaXRpYWwgdmFsdWVzIGZyb20gc3VibWl0dGVkIHJlZHVjZXJcbiAgICB9O1xufTtcblxubGV0IEJpa2VGb3JtID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IHtoYW5kbGVTdWJtaXQsIG9uUmVzZXR9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1kaXZcIj5cbiAgICAgICAgICAgIDxoMz5iaWtlIGZvcm08L2gzPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb2xvclwiPmNvbG9yPC9sYWJlbD48YnIvPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImNvbG9yXCIgY29tcG9uZW50PVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJyYW5kXCI+YnJhbmQ8L2xhYmVsPjxici8+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiYnJhbmRcIiBjb21wb25lbnQ9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVzZXR9PlJlc2V0XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5CaWtlRm9ybSA9IHJlZHV4Rm9ybSh7XG4gICAgLy8gYSB1bmlxdWUgbmFtZSBmb3IgdGhlIGZvcm1cbiAgICBmb3JtOiAnYmlrZSdcbn0pKEJpa2VGb3JtKTtcblxuQmlrZUZvcm0gPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgKCkgPT4gKHt9KSkoQmlrZUZvcm0pO1xuXG5leHBvcnQgZGVmYXVsdCBCaWtlRm9ybTtcbiJdfQ==