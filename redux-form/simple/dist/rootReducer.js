define(['exports', 'redux', 'redux-form'], function (exports, _redux, _reduxForm) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.SubmitterActionCreators = exports.store = undefined;

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

    const SubmitterActionTypes = {
        STORE_SUBMITTED_DATA: 'STORE_SUBMITTED_DATA',
        RESET_SUBMITTED_DATA: 'RESET_SUBMITTED_DATA'
    };

    const SubmitterActionCreators = {
        storeSubmittedData,
        resetSubmittedData
    };

    const initialState = {
        bike: {
            color: 'turchino',
            brand: 'Pinocchi Super'
        },
        contact: {
            firstName: 'Luigi',
            lastName: 'Cagrotti'
        },
        fieldArray: {
            hobby: 'golf',
            profession: 'consultant',
            birthYear: '2001',
            studies: 'law'
        }
    };

    const submittedReducer = (state = initialState, action) => {
        let stateDOTsubmitted = _extends({}, state);

        switch (action.type) {
            case SubmitterActionTypes.STORE_SUBMITTED_DATA:

                stateDOTsubmitted[action.formName] = action.values;
                return stateDOTsubmitted;

            case SubmitterActionTypes.RESET_SUBMITTED_DATA:

                stateDOTsubmitted[action.formName] = {};
                return stateDOTsubmitted;

            default:
                return stateDOTsubmitted;
        }
    };

    const rootReducer = (0, _redux.combineReducers)({
        // ...your other reducers here
        submitted: submittedReducer,
        // you have to pass formReducer under 'form' key,
        // for custom keys look up the docs for 'getFormState'
        form: _reduxForm.reducer
    });

    const store = (0, _redux.createStore)(rootReducer);

    exports.store = store;
    exports.SubmitterActionCreators = SubmitterActionCreators;


    function storeSubmittedData(formName, values) {
        return {
            type: SubmitterActionTypes.STORE_SUBMITTED_DATA,
            formName,
            values
        };
    }

    function resetSubmittedData(formName) {
        return {
            type: SubmitterActionTypes.RESET_SUBMITTED_DATA,
            formName
        };
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9yb290UmVkdWNlci5qcyJdLCJuYW1lcyI6WyJTdWJtaXR0ZXJBY3Rpb25UeXBlcyIsIlNUT1JFX1NVQk1JVFRFRF9EQVRBIiwiUkVTRVRfU1VCTUlUVEVEX0RBVEEiLCJTdWJtaXR0ZXJBY3Rpb25DcmVhdG9ycyIsInN0b3JlU3VibWl0dGVkRGF0YSIsInJlc2V0U3VibWl0dGVkRGF0YSIsImluaXRpYWxTdGF0ZSIsImJpa2UiLCJjb2xvciIsImJyYW5kIiwiY29udGFjdCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZmllbGRBcnJheSIsImhvYmJ5IiwicHJvZmVzc2lvbiIsImJpcnRoWWVhciIsInN0dWRpZXMiLCJzdWJtaXR0ZWRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJzdGF0ZURPVHN1Ym1pdHRlZCIsInR5cGUiLCJmb3JtTmFtZSIsInZhbHVlcyIsInJvb3RSZWR1Y2VyIiwic3VibWl0dGVkIiwiZm9ybSIsInN0b3JlIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLFVBQU1BLHVCQUF1QjtBQUN6QkMsOEJBQXNCLHNCQURHO0FBRXpCQyw4QkFBc0I7QUFGRyxLQUE3Qjs7QUFLQSxVQUFNQywwQkFBMEI7QUFDNUJDLDBCQUQ0QjtBQUU1QkM7QUFGNEIsS0FBaEM7O0FBS0EsVUFBTUMsZUFBZTtBQUNqQkMsY0FBTTtBQUNGQyxtQkFBTyxVQURMO0FBRUZDLG1CQUFPO0FBRkwsU0FEVztBQUtqQkMsaUJBQVM7QUFDTEMsdUJBQVcsT0FETjtBQUVMQyxzQkFBVTtBQUZMLFNBTFE7QUFTakJDLG9CQUFZO0FBQ1JDLG1CQUFPLE1BREM7QUFFUkMsd0JBQVksWUFGSjtBQUdSQyx1QkFBVyxNQUhIO0FBSVJDLHFCQUFTO0FBSkQ7QUFUSyxLQUFyQjs7QUFpQkEsVUFBTUMsbUJBQW1CLENBQUNDLFFBQVFiLFlBQVQsRUFBdUJjLE1BQXZCLEtBQWtDO0FBQ3ZELFlBQUlDLGlDQUF3QkYsS0FBeEIsQ0FBSjs7QUFFQSxnQkFBUUMsT0FBT0UsSUFBZjtBQUNJLGlCQUFLdEIscUJBQXFCQyxvQkFBMUI7O0FBRUlvQixrQ0FBa0JELE9BQU9HLFFBQXpCLElBQXFDSCxPQUFPSSxNQUE1QztBQUNBLHVCQUFPSCxpQkFBUDs7QUFFSixpQkFBS3JCLHFCQUFxQkUsb0JBQTFCOztBQUVJbUIsa0NBQWtCRCxPQUFPRyxRQUF6QixJQUFxQyxFQUFyQztBQUNBLHVCQUFPRixpQkFBUDs7QUFFSjtBQUNJLHVCQUFPQSxpQkFBUDtBQVpSO0FBY0gsS0FqQkQ7O0FBbUJBLFVBQU1JLGNBQWMsNEJBQWdCO0FBQ2hDO0FBQ0FDLG1CQUFXUixnQkFGcUI7QUFHaEM7QUFDQTtBQUNBUztBQUxnQyxLQUFoQixDQUFwQjs7QUFRQSxVQUFNQyxRQUFRLHdCQUFZSCxXQUFaLENBQWQ7O1lBRVFHLEssR0FBQUEsSztZQUFPekIsdUIsR0FBQUEsdUI7OztBQUVmLGFBQVNDLGtCQUFULENBQTRCbUIsUUFBNUIsRUFBc0NDLE1BQXRDLEVBQThDO0FBQzFDLGVBQU87QUFDSEYsa0JBQU10QixxQkFBcUJDLG9CQUR4QjtBQUVIc0Isb0JBRkc7QUFHSEM7QUFIRyxTQUFQO0FBS0g7O0FBRUQsYUFBU25CLGtCQUFULENBQTRCa0IsUUFBNUIsRUFBc0M7QUFDbEMsZUFBTztBQUNIRCxrQkFBTXRCLHFCQUFxQkUsb0JBRHhCO0FBRUhxQjtBQUZHLFNBQVA7QUFJSCIsImZpbGUiOiJyb290UmVkdWNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQge3JlZHVjZXIgYXMgZm9ybVJlZHVjZXJ9IGZyb20gJ3JlZHV4LWZvcm0nO1xuXG5jb25zdCBTdWJtaXR0ZXJBY3Rpb25UeXBlcyA9IHtcbiAgICBTVE9SRV9TVUJNSVRURURfREFUQTogJ1NUT1JFX1NVQk1JVFRFRF9EQVRBJyxcbiAgICBSRVNFVF9TVUJNSVRURURfREFUQTogJ1JFU0VUX1NVQk1JVFRFRF9EQVRBJyxcbn07XG5cbmNvbnN0IFN1Ym1pdHRlckFjdGlvbkNyZWF0b3JzID0ge1xuICAgIHN0b3JlU3VibWl0dGVkRGF0YSxcbiAgICByZXNldFN1Ym1pdHRlZERhdGEsXG59O1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgYmlrZToge1xuICAgICAgICBjb2xvcjogJ3R1cmNoaW5vJyxcbiAgICAgICAgYnJhbmQ6ICdQaW5vY2NoaSBTdXBlcicsXG4gICAgfSxcbiAgICBjb250YWN0OiB7XG4gICAgICAgIGZpcnN0TmFtZTogJ0x1aWdpJyxcbiAgICAgICAgbGFzdE5hbWU6ICdDYWdyb3R0aScsXG4gICAgfSxcbiAgICBmaWVsZEFycmF5OiB7XG4gICAgICAgIGhvYmJ5OiAnZ29sZicsXG4gICAgICAgIHByb2Zlc3Npb246ICdjb25zdWx0YW50JyxcbiAgICAgICAgYmlydGhZZWFyOiAnMjAwMScsXG4gICAgICAgIHN0dWRpZXM6ICdsYXcnLFxuICAgIH0sXG59O1xuXG5jb25zdCBzdWJtaXR0ZWRSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBsZXQgc3RhdGVET1RzdWJtaXR0ZWQgPSB7Li4uc3RhdGV9O1xuXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFN1Ym1pdHRlckFjdGlvblR5cGVzLlNUT1JFX1NVQk1JVFRFRF9EQVRBOlxuXG4gICAgICAgICAgICBzdGF0ZURPVHN1Ym1pdHRlZFthY3Rpb24uZm9ybU5hbWVdID0gYWN0aW9uLnZhbHVlcztcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZURPVHN1Ym1pdHRlZDtcblxuICAgICAgICBjYXNlIFN1Ym1pdHRlckFjdGlvblR5cGVzLlJFU0VUX1NVQk1JVFRFRF9EQVRBOlxuXG4gICAgICAgICAgICBzdGF0ZURPVHN1Ym1pdHRlZFthY3Rpb24uZm9ybU5hbWVdID0ge307XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVET1RzdWJtaXR0ZWQ7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZURPVHN1Ym1pdHRlZDtcbiAgICB9XG59O1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgLy8gLi4ueW91ciBvdGhlciByZWR1Y2VycyBoZXJlXG4gICAgc3VibWl0dGVkOiBzdWJtaXR0ZWRSZWR1Y2VyLFxuICAgIC8vIHlvdSBoYXZlIHRvIHBhc3MgZm9ybVJlZHVjZXIgdW5kZXIgJ2Zvcm0nIGtleSxcbiAgICAvLyBmb3IgY3VzdG9tIGtleXMgbG9vayB1cCB0aGUgZG9jcyBmb3IgJ2dldEZvcm1TdGF0ZSdcbiAgICBmb3JtOiBmb3JtUmVkdWNlcixcbn0pO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyKTtcblxuZXhwb3J0IHtzdG9yZSwgU3VibWl0dGVyQWN0aW9uQ3JlYXRvcnN9O1xuXG5mdW5jdGlvbiBzdG9yZVN1Ym1pdHRlZERhdGEoZm9ybU5hbWUsIHZhbHVlcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFN1Ym1pdHRlckFjdGlvblR5cGVzLlNUT1JFX1NVQk1JVFRFRF9EQVRBLFxuICAgICAgICBmb3JtTmFtZSxcbiAgICAgICAgdmFsdWVzLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIHJlc2V0U3VibWl0dGVkRGF0YShmb3JtTmFtZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFN1Ym1pdHRlckFjdGlvblR5cGVzLlJFU0VUX1NVQk1JVFRFRF9EQVRBLFxuICAgICAgICBmb3JtTmFtZSxcbiAgICB9O1xufVxuIl19