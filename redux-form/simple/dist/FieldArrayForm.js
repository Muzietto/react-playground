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
            { 'class': 'form-div' },
            _react2.default.createElement(
                'h3',
                null,
                'fieldArray form'
            ),
            _react2.default.createElement(
                'form',
                { onSubmit: handleSubmit },
                _react2.default.createElement(_reduxForm.FieldArray, {
                    name: 'fieldArray',
                    component: userFields,
                    pairs: initialValues }),
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
        let { fields, meta, pairs } = props;
        return _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'button',
                    { type: 'button', onClick: () => pairs['new key'] = 'new value' },
                    'Add personal trait'
                )
            ),
            Object.keys(pairs).map((traitName, index) => _react2.default.createElement(
                'li',
                { key: index },
                _react2.default.createElement(
                    'button',
                    {
                        type: 'button',
                        onClick: () => delete pairs[index] },
                    'Delete trait'
                ),
                _react2.default.createElement(_reduxForm.Field, {
                    name: traitName,
                    type: 'text',
                    component: userField,
                    fieldValue: pairs[traitName],
                    label: traitName
                })
            ))
        );
    };

    // defines Field
    function userField({ input, label, type }) {
        return _react2.default.createElement(
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
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9GaWVsZEFycmF5Rm9ybS5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImluaXRpYWxWYWx1ZXMiLCJzdWJtaXR0ZWQiLCJmaWVsZEFycmF5IiwiRmllbGRBcnJheUZvcm0iLCJwcm9wcyIsImhhbmRsZVN1Ym1pdCIsIm9uUmVzZXQiLCJ1c2VyRmllbGRzIiwiZm9ybSIsImZpZWxkcyIsIm1ldGEiLCJwYWlycyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJ0cmFpdE5hbWUiLCJpbmRleCIsInVzZXJGaWVsZCIsImlucHV0IiwibGFiZWwiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLFVBQU1BLGtCQUFrQkMsU0FBUztBQUM3QixlQUFPO0FBQ0g7QUFDQUMsMkJBQWVELE1BQU1FLFNBQU4sQ0FBZ0JDLFVBRjVCLENBRXdDO0FBRnhDLFNBQVA7QUFJSCxLQUxEOztBQU9BLFFBQUlDLGlCQUFpQkMsU0FBUztBQUMxQixjQUFNLEVBQUNDLFlBQUQsRUFBZUMsT0FBZixFQUF3Qk4sYUFBeEIsS0FBeUNJLEtBQS9DO0FBQ0EsZUFDSTtBQUFBO0FBQUEsY0FBSyxTQUFNLFVBQVg7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFFSTtBQUFBO0FBQUEsa0JBQU0sVUFBVUMsWUFBaEI7QUFDSTtBQUNJLDBCQUFLLFlBRFQ7QUFFSSwrQkFBV0UsVUFGZjtBQUdJLDJCQUFPUCxhQUhYLEdBREo7QUFLSTtBQUFBO0FBQUEsc0JBQVEsTUFBSyxRQUFiO0FBQUE7QUFBQSxpQkFMSjtBQU1JO0FBQUE7QUFBQTtBQUNJLDhCQUFLLFFBRFQ7QUFFSSxpQ0FBU00sT0FGYjtBQUFBO0FBQUE7QUFOSjtBQUZKLFNBREo7QUFnQkgsS0FsQkQ7O0FBb0JBSCxxQkFBaUIsMEJBQVUsRUFBQ0ssTUFBTSxZQUFQLEVBQVYsRUFBZ0NMLGNBQWhDLENBQWpCOztzQkFFZSx5QkFBUUwsZUFBUixFQUF5QixPQUFPLEVBQVAsQ0FBekIsRUFBcUNLLGNBQXJDLEM7OztBQUVmO0FBQ0EsYUFBU0ksVUFBVCxDQUFvQkgsS0FBcEIsRUFBMkI7QUFDdkI7QUFDQSxZQUFJLEVBQUNLLE1BQUQsRUFBU0MsSUFBVCxFQUFlQyxLQUFmLEtBQXdCUCxLQUE1QjtBQUNBLGVBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLHNCQUFRLE1BQUssUUFBYixFQUFzQixTQUFTLE1BQU1PLE1BQU0sU0FBTixJQUFtQixXQUF4RDtBQUFBO0FBQUE7QUFESixhQURKO0FBTUtDLG1CQUFPQyxJQUFQLENBQVlGLEtBQVosRUFBbUJHLEdBQW5CLENBQXVCLENBQUNDLFNBQUQsRUFBWUMsS0FBWixLQUNwQjtBQUFBO0FBQUEsa0JBQUksS0FBS0EsS0FBVDtBQUNJO0FBQUE7QUFBQTtBQUNJLDhCQUFLLFFBRFQ7QUFFSSxpQ0FBUyxNQUFNLE9BQU9MLE1BQU1LLEtBQU4sQ0FGMUI7QUFBQTtBQUFBLGlCQURKO0FBTUk7QUFDSSwwQkFBTUQsU0FEVjtBQUVJLDBCQUFLLE1BRlQ7QUFHSSwrQkFBV0UsU0FIZjtBQUlJLGdDQUFZTixNQUFNSSxTQUFOLENBSmhCO0FBS0ksMkJBQU9BO0FBTFg7QUFOSixhQURIO0FBTkwsU0FESjtBQXlCSDs7QUFFRDtBQUNBLGFBQVNFLFNBQVQsQ0FBbUIsRUFBQ0MsS0FBRCxFQUFRQyxLQUFSLEVBQWVDLElBQWYsRUFBbkIsRUFBeUM7QUFDckMsZUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBUUQ7QUFBUixhQURKO0FBRUk7QUFBQTtBQUFBO0FBQ0ksb0VBQVdELEtBQVgsSUFBa0IsTUFBTUUsSUFBeEIsRUFBOEIsYUFBYUQsS0FBM0M7QUFESjtBQUZKLFNBREo7QUFRSCIsImZpbGUiOiJGaWVsZEFycmF5Rm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7RmllbGQsIEZpZWxkQXJyYXksIHJlZHV4Rm9ybX0gZnJvbSAncmVkdXgtZm9ybSc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBtYW5kYXRvcnkga2V5IG5hbWVcbiAgICAgICAgaW5pdGlhbFZhbHVlczogc3RhdGUuc3VibWl0dGVkLmZpZWxkQXJyYXksIC8vIHB1bGwgaW5pdGlhbCB2YWx1ZXMgZnJvbSBzdWJtaXR0ZWQgcmVkdWNlclxuICAgIH07XG59O1xuXG5sZXQgRmllbGRBcnJheUZvcm0gPSBwcm9wcyA9PiB7XG4gICAgY29uc3Qge2hhbmRsZVN1Ym1pdCwgb25SZXNldCwgaW5pdGlhbFZhbHVlc30gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1kaXZcIj5cbiAgICAgICAgICAgIDxoMz5maWVsZEFycmF5IGZvcm08L2gzPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPEZpZWxkQXJyYXlcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpZWxkQXJyYXlcIlxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e3VzZXJGaWVsZHN9XG4gICAgICAgICAgICAgICAgICAgIHBhaXJzPXtpbml0aWFsVmFsdWVzfS8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25SZXNldH0+UmVzZXRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbkZpZWxkQXJyYXlGb3JtID0gcmVkdXhGb3JtKHtmb3JtOiAnZmllbGRBcnJheSd9KShGaWVsZEFycmF5Rm9ybSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCAoKSA9PiAoe30pKShGaWVsZEFycmF5Rm9ybSk7XG5cbi8vIGNvbnRhaW5zIEZpZWxkXG5mdW5jdGlvbiB1c2VyRmllbGRzKHByb3BzKSB7XG4gICAgLy8gZmluZCBvdXQgcHVycG9zZSBvZiBtZXRhIChjZnIgRmllbGRBcnJheXNGb3JtIGluIHJlZHV4LWZvcm0gZXhhbXBsZXMpXG4gICAgbGV0IHtmaWVsZHMsIG1ldGEsIHBhaXJzfSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBwYWlyc1snbmV3IGtleSddID0gJ25ldyB2YWx1ZSd9PlxuICAgICAgICAgICAgICAgICAgICBBZGQgcGVyc29uYWwgdHJhaXRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICB7T2JqZWN0LmtleXMocGFpcnMpLm1hcCgodHJhaXROYW1lLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGUgcGFpcnNbaW5kZXhdfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZSB0cmFpdFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0cmFpdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e3VzZXJGaWVsZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkVmFsdWU9e3BhaXJzW3RyYWl0TmFtZV19XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dHJhaXROYW1lfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICApO1xufTtcblxuLy8gZGVmaW5lcyBGaWVsZFxuZnVuY3Rpb24gdXNlckZpZWxkKHtpbnB1dCwgbGFiZWwsIHR5cGV9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbD57bGFiZWx9PC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0IHsuLi5pbnB1dH0gdHlwZT17dHlwZX0gcGxhY2Vob2xkZXI9e2xhYmVsfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdfQ==