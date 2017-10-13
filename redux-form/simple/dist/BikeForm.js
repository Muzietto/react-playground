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

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    const mapStateToProps = state => {
        return {
            // mandatory key name
            initialValues: state.submitted.bike // pull initial values from submitted reducer
        };
    };

    const renderSpec = ({ input, label, type }) => _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'label',
            null,
            label
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('input', _extends({}, input, { type: type, placeholder: label }))
        )
    );

    const renderSpecs = ({ fields }) => _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
                'button',
                { type: 'button', onClick: () => fields.push() },
                'Add Spec'
            )
        ),
        fields.map((spec, index) => _react2.default.createElement(
            'li',
            { key: index },
            _react2.default.createElement(
                'button',
                {
                    type: 'button',
                    title: 'Remove Spec',
                    onClick: () => fields.remove(index)
                },
                'Remove Spec'
            ),
            _react2.default.createElement(_reduxForm.Field, {
                name: spec,
                type: 'text',
                component: renderSpec,
                label: `Spec #${index + 1}`
            })
        ))
    );

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
                    'div',
                    null,
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'specs' },
                        'specs'
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(_reduxForm.FieldArray, {
                        name: 'specs',
                        component: renderSpecs })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9CaWtlRm9ybS5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImluaXRpYWxWYWx1ZXMiLCJzdWJtaXR0ZWQiLCJiaWtlIiwicmVuZGVyU3BlYyIsImlucHV0IiwibGFiZWwiLCJ0eXBlIiwicmVuZGVyU3BlY3MiLCJmaWVsZHMiLCJwdXNoIiwibWFwIiwic3BlYyIsImluZGV4IiwicmVtb3ZlIiwiQmlrZUZvcm0iLCJwcm9wcyIsImhhbmRsZVN1Ym1pdCIsIm9uUmVzZXQiLCJmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLFVBQU1BLGtCQUFrQkMsU0FBUztBQUM3QixlQUFPO0FBQ0g7QUFDQUMsMkJBQWVELE1BQU1FLFNBQU4sQ0FBZ0JDLElBRjVCLENBRWtDO0FBRmxDLFNBQVA7QUFJSCxLQUxEOztBQU9BLFVBQU1DLGFBQWEsQ0FBQyxFQUFFQyxLQUFGLEVBQVNDLEtBQVQsRUFBZ0JDLElBQWhCLEVBQUQsS0FDakI7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQVFEO0FBQVIsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFLGdFQUFXRCxLQUFYLElBQWtCLE1BQU1FLElBQXhCLEVBQThCLGFBQWFELEtBQTNDO0FBREY7QUFGRixLQURGOztBQVNBLFVBQU1FLGNBQWMsQ0FBQyxFQUFDQyxNQUFELEVBQUQsS0FDbEI7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGtCQUFRLE1BQUssUUFBYixFQUFzQixTQUFTLE1BQU1BLE9BQU9DLElBQVAsRUFBckM7QUFBQTtBQUFBO0FBREYsU0FERjtBQU1HRCxlQUFPRSxHQUFQLENBQVcsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQ1Y7QUFBQTtBQUFBLGNBQUksS0FBS0EsS0FBVDtBQUNFO0FBQUE7QUFBQTtBQUNFLDBCQUFLLFFBRFA7QUFFRSwyQkFBTSxhQUZSO0FBR0UsNkJBQVMsTUFBTUosT0FBT0ssTUFBUCxDQUFjRCxLQUFkO0FBSGpCO0FBQUE7QUFBQSxhQURGO0FBTUU7QUFDRSxzQkFBTUQsSUFEUjtBQUVFLHNCQUFLLE1BRlA7QUFHRSwyQkFBV1IsVUFIYjtBQUlFLHVCQUFRLFNBQVFTLFFBQVEsQ0FBRTtBQUo1QjtBQU5GLFNBREQ7QUFOSCxLQURGOztBQXlCQSxRQUFJRSxXQUFXQyxTQUFTO0FBQ3BCLGNBQU0sRUFBQ0MsWUFBRCxFQUFlQyxPQUFmLEtBQTBCRixLQUFoQzs7QUFFQSxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsVUFBZjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUVJO0FBQUE7QUFBQSxrQkFBTSxVQUFVQyxZQUFoQjtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSwwQkFBTyxTQUFRLE9BQWY7QUFBQTtBQUFBLHFCQURKO0FBQ3dDLDZEQUR4QztBQUVJLHNFQUFPLE1BQUssT0FBWixFQUFvQixXQUFVLE9BQTlCLEVBQXNDLE1BQUssTUFBM0M7QUFGSixpQkFESjtBQUtJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSwwQkFBTyxTQUFRLE9BQWY7QUFBQTtBQUFBLHFCQURKO0FBQ3dDLDZEQUR4QztBQUVJLHNFQUFPLE1BQUssT0FBWixFQUFvQixXQUFVLE9BQTlCLEVBQXNDLE1BQUssTUFBM0M7QUFGSixpQkFMSjtBQVNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSwwQkFBTyxTQUFRLE9BQWY7QUFBQTtBQUFBLHFCQURKO0FBQ3dDLDZEQUR4QztBQUVJO0FBQ0ksOEJBQUssT0FEVDtBQUVJLG1DQUFXVCxXQUZmO0FBRkosaUJBVEo7QUFnQkk7QUFBQTtBQUFBLHNCQUFRLE1BQUssUUFBYjtBQUFBO0FBQUEsaUJBaEJKO0FBaUJJO0FBQUE7QUFBQTtBQUNJLDhCQUFLLFFBRFQ7QUFFSSxpQ0FBU1UsT0FGYjtBQUFBO0FBQUE7QUFqQko7QUFGSixTQURKO0FBMkJILEtBOUJEOztBQWdDQUgsZUFBVywwQkFBVTtBQUNqQjtBQUNBSSxjQUFNO0FBRlcsS0FBVixFQUdSSixRQUhRLENBQVg7O0FBS0FBLGVBQVcseUJBQVFoQixlQUFSLEVBQXlCLE9BQU8sRUFBUCxDQUF6QixFQUFxQ2dCLFFBQXJDLENBQVg7O3NCQUVlQSxRIiwiZmlsZSI6IkJpa2VGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RmllbGQsIEZpZWxkQXJyYXksIHJlZHV4Rm9ybX0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8vIG1hbmRhdG9yeSBrZXkgbmFtZVxuICAgICAgICBpbml0aWFsVmFsdWVzOiBzdGF0ZS5zdWJtaXR0ZWQuYmlrZSwgLy8gcHVsbCBpbml0aWFsIHZhbHVlcyBmcm9tIHN1Ym1pdHRlZCByZWR1Y2VyXG4gICAgfTtcbn07XG5cbmNvbnN0IHJlbmRlclNwZWMgPSAoeyBpbnB1dCwgbGFiZWwsIHR5cGUgfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxsYWJlbD57bGFiZWx9PC9sYWJlbD5cbiAgICA8ZGl2PlxuICAgICAgPGlucHV0IHsuLi5pbnB1dH0gdHlwZT17dHlwZX0gcGxhY2Vob2xkZXI9e2xhYmVsfSAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbilcblxuY29uc3QgcmVuZGVyU3BlY3MgPSAoe2ZpZWxkc30pID0+IChcbiAgPHVsPlxuICAgIDxsaT5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGZpZWxkcy5wdXNoKCl9PlxuICAgICAgICBBZGQgU3BlY1xuICAgICAgPC9idXR0b24+XG4gICAgPC9saT5cbiAgICB7ZmllbGRzLm1hcCgoc3BlYywgaW5kZXgpID0+IChcbiAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIHRpdGxlPVwiUmVtb3ZlIFNwZWNcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGZpZWxkcy5yZW1vdmUoaW5kZXgpfVxuICAgICAgICA+UmVtb3ZlIFNwZWM8L2J1dHRvbj5cbiAgICAgICAgPEZpZWxkXG4gICAgICAgICAgbmFtZT17c3BlY31cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY29tcG9uZW50PXtyZW5kZXJTcGVjfVxuICAgICAgICAgIGxhYmVsPXtgU3BlYyAjJHtpbmRleCArIDF9YH1cbiAgICAgICAgLz5cbiAgICAgIDwvbGk+XG4gICAgKSl9XG4gIDwvdWw+XG4pO1xuXG5sZXQgQmlrZUZvcm0gPSBwcm9wcyA9PiB7XG4gICAgY29uc3Qge2hhbmRsZVN1Ym1pdCwgb25SZXNldH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1kaXZcIj5cbiAgICAgICAgICAgIDxoMz5iaWtlIGZvcm08L2gzPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb2xvclwiPmNvbG9yPC9sYWJlbD48YnIvPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImNvbG9yXCIgY29tcG9uZW50PVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJyYW5kXCI+YnJhbmQ8L2xhYmVsPjxici8+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiYnJhbmRcIiBjb21wb25lbnQ9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3BlY3NcIj5zcGVjczwvbGFiZWw+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkQXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzcGVjc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e3JlbmRlclNwZWNzfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblJlc2V0fT5SZXNldFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuQmlrZUZvcm0gPSByZWR1eEZvcm0oe1xuICAgIC8vIGEgdW5pcXVlIG5hbWUgZm9yIHRoZSBmb3JtXG4gICAgZm9ybTogJ2Jpa2UnXG59KShCaWtlRm9ybSk7XG5cbkJpa2VGb3JtID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsICgpID0+ICh7fSkpKEJpa2VGb3JtKTtcblxuZXhwb3J0IGRlZmF1bHQgQmlrZUZvcm07XG4iXX0=