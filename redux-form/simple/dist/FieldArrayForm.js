define(['exports', 'react', 'react-redux', 'redux-form'], function (exports, _react, _reactRedux, _reduxForm) {
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
            initialValues: state.submitted.fieldArray // pull initial values from submitted reducer
        };
    };

    let FieldArrayForm = props => {
        const { handleSubmit, onReset, initialValues } = props;
        return _react2.default.createElement(
            'div',
            { className: 'form-div' },
            _react2.default.createElement(
                'h3',
                null,
                'fieldArray form'
            ),
            _react2.default.createElement(
                'form',
                { onSubmit: handleSubmit },
                _react2.default.createElement(_reduxForm.FieldArray, {
                    name: 'campoMatrice',
                    component: userFields }),
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

    FieldArrayForm = (0, _reduxForm.reduxForm)({ form: 'fieldArray' })(FieldArrayForm);

    exports.default = (0, _reactRedux.connect)(mapStateToProps, () => ({}))(FieldArrayForm);


    // contains Field
    function userFields(props) {
        // find out purpose of meta (cfr FieldArraysForm in redux-form examples)
        let { fields, meta } = props;
        return _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'button',
                    { type: 'button', onClick: () => fields.push({}) },
                    'Add personal trait'
                )
            ),
            fields.map((trait, index) => _react2.default.createElement(
                'li',
                { key: index },
                _react2.default.createElement(
                    'button',
                    {
                        type: 'button',
                        onClick: () => fields.remove(index) },
                    'Delete trait'
                ),
                _react2.default.createElement(_reduxForm.Field, {
                    name: `${trait}.key`,
                    type: 'text',
                    placeholder: 'insert a key',
                    component: userField
                }),
                _react2.default.createElement(_reduxForm.Field, {
                    name: `${trait}.value`,
                    type: 'text',
                    placeholder: 'insert a value',
                    component: userField
                })
            ))
        );
    };

    // defines Field
    function userField({ input, placeholder, type }) {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('input', _extends({}, input, { type: type, placeholder: placeholder }))
            )
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9GaWVsZEFycmF5Rm9ybS5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImluaXRpYWxWYWx1ZXMiLCJzdWJtaXR0ZWQiLCJmaWVsZEFycmF5IiwiRmllbGRBcnJheUZvcm0iLCJwcm9wcyIsImhhbmRsZVN1Ym1pdCIsIm9uUmVzZXQiLCJ1c2VyRmllbGRzIiwiZm9ybSIsImZpZWxkcyIsIm1ldGEiLCJwdXNoIiwibWFwIiwidHJhaXQiLCJpbmRleCIsInJlbW92ZSIsInVzZXJGaWVsZCIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLFVBQU1BLGtCQUFrQkMsU0FBUztBQUM3QixlQUFPO0FBQ0g7QUFDQUMsMkJBQWVELE1BQU1FLFNBQU4sQ0FBZ0JDLFVBRjVCLENBRXdDO0FBRnhDLFNBQVA7QUFJSCxLQUxEOztBQU9BLFFBQUlDLGlCQUFpQkMsU0FBUztBQUMxQixjQUFNLEVBQUNDLFlBQUQsRUFBZUMsT0FBZixFQUF3Qk4sYUFBeEIsS0FBeUNJLEtBQS9DO0FBQ0EsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFVBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFFSTtBQUFBO0FBQUEsa0JBQU0sVUFBVUMsWUFBaEI7QUFDSTtBQUNJLDBCQUFLLGNBRFQ7QUFFSSwrQkFBV0UsVUFGZixHQURKO0FBSUk7QUFBQTtBQUFBLHNCQUFRLE1BQUssUUFBYjtBQUFBO0FBQUEsaUJBSko7QUFLSTtBQUFBO0FBQUE7QUFDSSw4QkFBSyxRQURUO0FBRUksaUNBQVNELE9BRmI7QUFBQTtBQUFBO0FBTEo7QUFGSixTQURKO0FBZUgsS0FqQkQ7O0FBbUJBSCxxQkFBaUIsMEJBQVUsRUFBQ0ssTUFBTSxZQUFQLEVBQVYsRUFBZ0NMLGNBQWhDLENBQWpCOztzQkFFZSx5QkFBUUwsZUFBUixFQUF5QixPQUFPLEVBQVAsQ0FBekIsRUFBcUNLLGNBQXJDLEM7OztBQUVmO0FBQ0EsYUFBU0ksVUFBVCxDQUFvQkgsS0FBcEIsRUFBMkI7QUFDdkI7QUFDQSxZQUFJLEVBQUNLLE1BQUQsRUFBU0MsSUFBVCxLQUFpQk4sS0FBckI7QUFDQSxlQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxzQkFBUSxNQUFLLFFBQWIsRUFBc0IsU0FBUyxNQUFNSyxPQUFPRSxJQUFQLENBQVksRUFBWixDQUFyQztBQUFBO0FBQUE7QUFESixhQURKO0FBTUtGLG1CQUFPRyxHQUFQLENBQVcsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLEtBQ1I7QUFBQTtBQUFBLGtCQUFJLEtBQUtBLEtBQVQ7QUFDSTtBQUFBO0FBQUE7QUFDSSw4QkFBSyxRQURUO0FBRUksaUNBQVMsTUFBTUwsT0FBT00sTUFBUCxDQUFjRCxLQUFkLENBRm5CO0FBQUE7QUFBQSxpQkFESjtBQU1JO0FBQ0ksMEJBQU8sR0FBRUQsS0FBTSxNQURuQjtBQUVJLDBCQUFLLE1BRlQ7QUFHSSxpQ0FBWSxjQUhoQjtBQUlJLCtCQUFXRztBQUpmLGtCQU5KO0FBWUk7QUFDSSwwQkFBTyxHQUFFSCxLQUFNLFFBRG5CO0FBRUksMEJBQUssTUFGVDtBQUdJLGlDQUFZLGdCQUhoQjtBQUlJLCtCQUFXRztBQUpmO0FBWkosYUFESDtBQU5MLFNBREo7QUE4Qkg7O0FBRUQ7QUFDQSxhQUFTQSxTQUFULENBQW1CLEVBQUNDLEtBQUQsRUFBUUMsV0FBUixFQUFxQkMsSUFBckIsRUFBbkIsRUFBK0M7QUFDM0MsZUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFDSSxvRUFBV0YsS0FBWCxJQUFrQixNQUFNRSxJQUF4QixFQUE4QixhQUFhRCxXQUEzQztBQURKO0FBREosU0FESjtBQU9IIiwiZmlsZSI6IkZpZWxkQXJyYXlGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtGaWVsZCwgRmllbGRBcnJheSwgcmVkdXhGb3JtfSBmcm9tICdyZWR1eC1mb3JtJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8vIG1hbmRhdG9yeSBrZXkgbmFtZVxuICAgICAgICBpbml0aWFsVmFsdWVzOiBzdGF0ZS5zdWJtaXR0ZWQuZmllbGRBcnJheSwgLy8gcHVsbCBpbml0aWFsIHZhbHVlcyBmcm9tIHN1Ym1pdHRlZCByZWR1Y2VyXG4gICAgfTtcbn07XG5cbmxldCBGaWVsZEFycmF5Rm9ybSA9IHByb3BzID0+IHtcbiAgICBjb25zdCB7aGFuZGxlU3VibWl0LCBvblJlc2V0LCBpbml0aWFsVmFsdWVzfSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1kaXZcIj5cbiAgICAgICAgICAgIDxoMz5maWVsZEFycmF5IGZvcm08L2gzPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPEZpZWxkQXJyYXlcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNhbXBvTWF0cmljZVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17dXNlckZpZWxkc30vPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVzZXR9PlJlc2V0XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5GaWVsZEFycmF5Rm9ybSA9IHJlZHV4Rm9ybSh7Zm9ybTogJ2ZpZWxkQXJyYXknfSkoRmllbGRBcnJheUZvcm0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgKCkgPT4gKHt9KSkoRmllbGRBcnJheUZvcm0pO1xuXG4vLyBjb250YWlucyBGaWVsZFxuZnVuY3Rpb24gdXNlckZpZWxkcyhwcm9wcykge1xuICAgIC8vIGZpbmQgb3V0IHB1cnBvc2Ugb2YgbWV0YSAoY2ZyIEZpZWxkQXJyYXlzRm9ybSBpbiByZWR1eC1mb3JtIGV4YW1wbGVzKVxuICAgIGxldCB7ZmllbGRzLCBtZXRhfSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBmaWVsZHMucHVzaCh7fSl9PlxuICAgICAgICAgICAgICAgICAgICBBZGQgcGVyc29uYWwgdHJhaXRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICB7ZmllbGRzLm1hcCgodHJhaXQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGZpZWxkcy5yZW1vdmUoaW5kZXgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZSB0cmFpdFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtgJHt0cmFpdH0ua2V5YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaW5zZXJ0IGEga2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17dXNlckZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2Ake3RyYWl0fS52YWx1ZWB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImluc2VydCBhIHZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17dXNlckZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICApO1xufTtcblxuLy8gZGVmaW5lcyBGaWVsZFxuZnVuY3Rpb24gdXNlckZpZWxkKHtpbnB1dCwgcGxhY2Vob2xkZXIsIHR5cGV9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0IHsuLi5pbnB1dH0gdHlwZT17dHlwZX0gcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdfQ==