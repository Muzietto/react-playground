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
            campoMatrice: [{ key: 'hobby', value: 'golf' }, { key: 'profession', value: 'consultant' }, { key: 'birthYear', value: '2001' }, { key: 'studies', value: 'law' }]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9yb290UmVkdWNlci5qcyJdLCJuYW1lcyI6WyJTdWJtaXR0ZXJBY3Rpb25UeXBlcyIsIlNUT1JFX1NVQk1JVFRFRF9EQVRBIiwiUkVTRVRfU1VCTUlUVEVEX0RBVEEiLCJTdWJtaXR0ZXJBY3Rpb25DcmVhdG9ycyIsInN0b3JlU3VibWl0dGVkRGF0YSIsInJlc2V0U3VibWl0dGVkRGF0YSIsImluaXRpYWxTdGF0ZSIsImJpa2UiLCJjb2xvciIsImJyYW5kIiwiY29udGFjdCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZmllbGRBcnJheSIsImNhbXBvTWF0cmljZSIsImtleSIsInZhbHVlIiwic3VibWl0dGVkUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwic3RhdGVET1RzdWJtaXR0ZWQiLCJ0eXBlIiwiZm9ybU5hbWUiLCJ2YWx1ZXMiLCJyb290UmVkdWNlciIsInN1Ym1pdHRlZCIsImZvcm0iLCJzdG9yZSJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxVQUFNQSx1QkFBdUI7QUFDekJDLDhCQUFzQixzQkFERztBQUV6QkMsOEJBQXNCO0FBRkcsS0FBN0I7O0FBS0EsVUFBTUMsMEJBQTBCO0FBQzVCQywwQkFENEI7QUFFNUJDO0FBRjRCLEtBQWhDOztBQUtBLFVBQU1DLGVBQWU7QUFDakJDLGNBQU07QUFDRkMsbUJBQU8sVUFETDtBQUVGQyxtQkFBTztBQUZMLFNBRFc7QUFLakJDLGlCQUFTO0FBQ0xDLHVCQUFXLE9BRE47QUFFTEMsc0JBQVU7QUFGTCxTQUxRO0FBU2pCQyxvQkFBWTtBQUNSQywwQkFBYyxDQUNWLEVBQUNDLEtBQUssT0FBTixFQUFlQyxPQUFPLE1BQXRCLEVBRFUsRUFFVixFQUFDRCxLQUFLLFlBQU4sRUFBb0JDLE9BQU8sWUFBM0IsRUFGVSxFQUdWLEVBQUNELEtBQUssV0FBTixFQUFtQkMsT0FBTyxNQUExQixFQUhVLEVBSVYsRUFBQ0QsS0FBSyxTQUFOLEVBQWlCQyxPQUFPLEtBQXhCLEVBSlU7QUFETjtBQVRLLEtBQXJCOztBQW1CQSxVQUFNQyxtQkFBbUIsQ0FBQ0MsUUFBUVosWUFBVCxFQUF1QmEsTUFBdkIsS0FBa0M7QUFDdkQsWUFBSUMsaUNBQXdCRixLQUF4QixDQUFKOztBQUVBLGdCQUFRQyxPQUFPRSxJQUFmO0FBQ0ksaUJBQUtyQixxQkFBcUJDLG9CQUExQjs7QUFFSW1CLGtDQUFrQkQsT0FBT0csUUFBekIsSUFBcUNILE9BQU9JLE1BQTVDO0FBQ0EsdUJBQU9ILGlCQUFQOztBQUVKLGlCQUFLcEIscUJBQXFCRSxvQkFBMUI7O0FBRUlrQixrQ0FBa0JELE9BQU9HLFFBQXpCLElBQXFDLEVBQXJDO0FBQ0EsdUJBQU9GLGlCQUFQOztBQUVKO0FBQ0ksdUJBQU9BLGlCQUFQO0FBWlI7QUFjSCxLQWpCRDs7QUFtQkEsVUFBTUksY0FBYyw0QkFBZ0I7QUFDaEM7QUFDQUMsbUJBQVdSLGdCQUZxQjtBQUdoQztBQUNBO0FBQ0FTO0FBTGdDLEtBQWhCLENBQXBCOztBQVFBLFVBQU1DLFFBQVEsd0JBQVlILFdBQVosQ0FBZDs7WUFFUUcsSyxHQUFBQSxLO1lBQU94Qix1QixHQUFBQSx1Qjs7O0FBRWYsYUFBU0Msa0JBQVQsQ0FBNEJrQixRQUE1QixFQUFzQ0MsTUFBdEMsRUFBOEM7QUFDMUMsZUFBTztBQUNIRixrQkFBTXJCLHFCQUFxQkMsb0JBRHhCO0FBRUhxQixvQkFGRztBQUdIQztBQUhHLFNBQVA7QUFLSDs7QUFFRCxhQUFTbEIsa0JBQVQsQ0FBNEJpQixRQUE1QixFQUFzQztBQUNsQyxlQUFPO0FBQ0hELGtCQUFNckIscUJBQXFCRSxvQkFEeEI7QUFFSG9CO0FBRkcsU0FBUDtBQUlIIiwiZmlsZSI6InJvb3RSZWR1Y2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge2NyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnN9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7cmVkdWNlciBhcyBmb3JtUmVkdWNlcn0gZnJvbSAncmVkdXgtZm9ybSc7XG5cbmNvbnN0IFN1Ym1pdHRlckFjdGlvblR5cGVzID0ge1xuICAgIFNUT1JFX1NVQk1JVFRFRF9EQVRBOiAnU1RPUkVfU1VCTUlUVEVEX0RBVEEnLFxuICAgIFJFU0VUX1NVQk1JVFRFRF9EQVRBOiAnUkVTRVRfU1VCTUlUVEVEX0RBVEEnLFxufTtcblxuY29uc3QgU3VibWl0dGVyQWN0aW9uQ3JlYXRvcnMgPSB7XG4gICAgc3RvcmVTdWJtaXR0ZWREYXRhLFxuICAgIHJlc2V0U3VibWl0dGVkRGF0YSxcbn07XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBiaWtlOiB7XG4gICAgICAgIGNvbG9yOiAndHVyY2hpbm8nLFxuICAgICAgICBicmFuZDogJ1Bpbm9jY2hpIFN1cGVyJyxcbiAgICB9LFxuICAgIGNvbnRhY3Q6IHtcbiAgICAgICAgZmlyc3ROYW1lOiAnTHVpZ2knLFxuICAgICAgICBsYXN0TmFtZTogJ0NhZ3JvdHRpJyxcbiAgICB9LFxuICAgIGZpZWxkQXJyYXk6IHtcbiAgICAgICAgY2FtcG9NYXRyaWNlOiBbXG4gICAgICAgICAgICB7a2V5OiAnaG9iYnknLCB2YWx1ZTogJ2dvbGYnfSxcbiAgICAgICAgICAgIHtrZXk6ICdwcm9mZXNzaW9uJywgdmFsdWU6ICdjb25zdWx0YW50J30sXG4gICAgICAgICAgICB7a2V5OiAnYmlydGhZZWFyJywgdmFsdWU6ICcyMDAxJ30sXG4gICAgICAgICAgICB7a2V5OiAnc3R1ZGllcycsIHZhbHVlOiAnbGF3J30sXG4gICAgICAgIF1cbiAgICB9LFxufTtcblxuY29uc3Qgc3VibWl0dGVkUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgbGV0IHN0YXRlRE9Uc3VibWl0dGVkID0gey4uLnN0YXRlfTtcblxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBTdWJtaXR0ZXJBY3Rpb25UeXBlcy5TVE9SRV9TVUJNSVRURURfREFUQTpcblxuICAgICAgICAgICAgc3RhdGVET1RzdWJtaXR0ZWRbYWN0aW9uLmZvcm1OYW1lXSA9IGFjdGlvbi52YWx1ZXM7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVET1RzdWJtaXR0ZWQ7XG5cbiAgICAgICAgY2FzZSBTdWJtaXR0ZXJBY3Rpb25UeXBlcy5SRVNFVF9TVUJNSVRURURfREFUQTpcblxuICAgICAgICAgICAgc3RhdGVET1RzdWJtaXR0ZWRbYWN0aW9uLmZvcm1OYW1lXSA9IHt9O1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlRE9Uc3VibWl0dGVkO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVET1RzdWJtaXR0ZWQ7XG4gICAgfVxufTtcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIC8vIC4uLnlvdXIgb3RoZXIgcmVkdWNlcnMgaGVyZVxuICAgIHN1Ym1pdHRlZDogc3VibWl0dGVkUmVkdWNlcixcbiAgICAvLyB5b3UgaGF2ZSB0byBwYXNzIGZvcm1SZWR1Y2VyIHVuZGVyICdmb3JtJyBrZXksXG4gICAgLy8gZm9yIGN1c3RvbSBrZXlzIGxvb2sgdXAgdGhlIGRvY3MgZm9yICdnZXRGb3JtU3RhdGUnXG4gICAgZm9ybTogZm9ybVJlZHVjZXIsXG59KTtcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlcik7XG5cbmV4cG9ydCB7c3RvcmUsIFN1Ym1pdHRlckFjdGlvbkNyZWF0b3JzfTtcblxuZnVuY3Rpb24gc3RvcmVTdWJtaXR0ZWREYXRhKGZvcm1OYW1lLCB2YWx1ZXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBTdWJtaXR0ZXJBY3Rpb25UeXBlcy5TVE9SRV9TVUJNSVRURURfREFUQSxcbiAgICAgICAgZm9ybU5hbWUsXG4gICAgICAgIHZhbHVlcyxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiByZXNldFN1Ym1pdHRlZERhdGEoZm9ybU5hbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBTdWJtaXR0ZXJBY3Rpb25UeXBlcy5SRVNFVF9TVUJNSVRURURfREFUQSxcbiAgICAgICAgZm9ybU5hbWUsXG4gICAgfTtcbn1cbiJdfQ==