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
        const { handleSubmit, onReset } = props;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9GaWVsZEFycmF5Rm9ybS5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImluaXRpYWxWYWx1ZXMiLCJzdWJtaXR0ZWQiLCJmaWVsZEFycmF5IiwiRmllbGRBcnJheUZvcm0iLCJwcm9wcyIsImhhbmRsZVN1Ym1pdCIsIm9uUmVzZXQiLCJ1c2VyRmllbGRzIiwiZm9ybSIsImZpZWxkcyIsIm1ldGEiLCJwdXNoIiwibWFwIiwidHJhaXQiLCJpbmRleCIsInJlbW92ZSIsInVzZXJGaWVsZCIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLFVBQU1BLGtCQUFrQkMsU0FBUztBQUM3QixlQUFPO0FBQ0g7QUFDQUMsMkJBQWVELE1BQU1FLFNBQU4sQ0FBZ0JDLFVBRjVCLENBRXdDO0FBRnhDLFNBQVA7QUFJSCxLQUxEOztBQU9BLFFBQUlDLGlCQUFpQkMsU0FBUztBQUMxQixjQUFNLEVBQUNDLFlBQUQsRUFBZUMsT0FBZixLQUEwQkYsS0FBaEM7QUFDQSxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsVUFBZjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUVJO0FBQUE7QUFBQSxrQkFBTSxVQUFVQyxZQUFoQjtBQUNJO0FBQ0ksMEJBQUssY0FEVDtBQUVJLCtCQUFXRSxVQUZmLEdBREo7QUFJSTtBQUFBO0FBQUEsc0JBQVEsTUFBSyxRQUFiO0FBQUE7QUFBQSxpQkFKSjtBQUtJO0FBQUE7QUFBQTtBQUNJLDhCQUFLLFFBRFQ7QUFFSSxpQ0FBU0QsT0FGYjtBQUFBO0FBQUE7QUFMSjtBQUZKLFNBREo7QUFlSCxLQWpCRDs7QUFtQkFILHFCQUFpQiwwQkFBVSxFQUFDSyxNQUFNLFlBQVAsRUFBVixFQUFnQ0wsY0FBaEMsQ0FBakI7O3NCQUVlLHlCQUFRTCxlQUFSLEVBQXlCLE9BQU8sRUFBUCxDQUF6QixFQUFxQ0ssY0FBckMsQzs7O0FBRWY7QUFDQSxhQUFTSSxVQUFULENBQW9CSCxLQUFwQixFQUEyQjtBQUN2QjtBQUNBLFlBQUksRUFBQ0ssTUFBRCxFQUFTQyxJQUFULEtBQWlCTixLQUFyQjtBQUNBLGVBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLHNCQUFRLE1BQUssUUFBYixFQUFzQixTQUFTLE1BQU1LLE9BQU9FLElBQVAsQ0FBWSxFQUFaLENBQXJDO0FBQUE7QUFBQTtBQURKLGFBREo7QUFNS0YsbUJBQU9HLEdBQVAsQ0FBVyxDQUFDQyxLQUFELEVBQVFDLEtBQVIsS0FDUjtBQUFBO0FBQUEsa0JBQUksS0FBS0EsS0FBVDtBQUNJO0FBQUE7QUFBQTtBQUNJLDhCQUFLLFFBRFQ7QUFFSSxpQ0FBUyxNQUFNTCxPQUFPTSxNQUFQLENBQWNELEtBQWQsQ0FGbkI7QUFBQTtBQUFBLGlCQURKO0FBTUk7QUFDSSwwQkFBTyxHQUFFRCxLQUFNLE1BRG5CO0FBRUksMEJBQUssTUFGVDtBQUdJLGlDQUFZLGNBSGhCO0FBSUksK0JBQVdHO0FBSmYsa0JBTko7QUFZSTtBQUNJLDBCQUFPLEdBQUVILEtBQU0sUUFEbkI7QUFFSSwwQkFBSyxNQUZUO0FBR0ksaUNBQVksZ0JBSGhCO0FBSUksK0JBQVdHO0FBSmY7QUFaSixhQURIO0FBTkwsU0FESjtBQThCSDs7QUFFRDtBQUNBLGFBQVNBLFNBQVQsQ0FBbUIsRUFBQ0MsS0FBRCxFQUFRQyxXQUFSLEVBQXFCQyxJQUFyQixFQUFuQixFQUErQztBQUMzQyxlQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUNJLG9FQUFXRixLQUFYLElBQWtCLE1BQU1FLElBQXhCLEVBQThCLGFBQWFELFdBQTNDO0FBREo7QUFESixTQURKO0FBT0giLCJmaWxlIjoiRmllbGRBcnJheUZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge0ZpZWxkLCBGaWVsZEFycmF5LCByZWR1eEZvcm19IGZyb20gJ3JlZHV4LWZvcm0nO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gbWFuZGF0b3J5IGtleSBuYW1lXG4gICAgICAgIGluaXRpYWxWYWx1ZXM6IHN0YXRlLnN1Ym1pdHRlZC5maWVsZEFycmF5LCAvLyBwdWxsIGluaXRpYWwgdmFsdWVzIGZyb20gc3VibWl0dGVkIHJlZHVjZXJcbiAgICB9O1xufTtcblxubGV0IEZpZWxkQXJyYXlGb3JtID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IHtoYW5kbGVTdWJtaXQsIG9uUmVzZXR9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWRpdlwiPlxuICAgICAgICAgICAgPGgzPmZpZWxkQXJyYXkgZm9ybTwvaDM+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8RmllbGRBcnJheVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2FtcG9NYXRyaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXt1c2VyRmllbGRzfS8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25SZXNldH0+UmVzZXRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbkZpZWxkQXJyYXlGb3JtID0gcmVkdXhGb3JtKHtmb3JtOiAnZmllbGRBcnJheSd9KShGaWVsZEFycmF5Rm9ybSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCAoKSA9PiAoe30pKShGaWVsZEFycmF5Rm9ybSk7XG5cbi8vIGNvbnRhaW5zIEZpZWxkXG5mdW5jdGlvbiB1c2VyRmllbGRzKHByb3BzKSB7XG4gICAgLy8gZmluZCBvdXQgcHVycG9zZSBvZiBtZXRhIChjZnIgRmllbGRBcnJheXNGb3JtIGluIHJlZHV4LWZvcm0gZXhhbXBsZXMpXG4gICAgbGV0IHtmaWVsZHMsIG1ldGF9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGZpZWxkcy5wdXNoKHt9KX0+XG4gICAgICAgICAgICAgICAgICAgIEFkZCBwZXJzb25hbCB0cmFpdFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIHtmaWVsZHMubWFwKCh0cmFpdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZmllbGRzLnJlbW92ZShpbmRleCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlIHRyYWl0XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2Ake3RyYWl0fS5rZXlgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJpbnNlcnQgYSBrZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXt1c2VyRmllbGR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17YCR7dHJhaXR9LnZhbHVlYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaW5zZXJ0IGEgdmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXt1c2VyRmllbGR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICk7XG59O1xuXG4vLyBkZWZpbmVzIEZpZWxkXG5mdW5jdGlvbiB1c2VyRmllbGQoe2lucHV0LCBwbGFjZWhvbGRlciwgdHlwZX0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgey4uLmlucHV0fSB0eXBlPXt0eXBlfSBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl19