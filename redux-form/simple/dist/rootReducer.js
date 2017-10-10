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

    // NB: these values are handled by submittedReducer only
    const initialState = {
        bike: {
            color: 'turchino',
            brand: 'Pinocchi Super',
            specs: ['amicizia']
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9yb290UmVkdWNlci5qcyJdLCJuYW1lcyI6WyJTdWJtaXR0ZXJBY3Rpb25UeXBlcyIsIlNUT1JFX1NVQk1JVFRFRF9EQVRBIiwiUkVTRVRfU1VCTUlUVEVEX0RBVEEiLCJTdWJtaXR0ZXJBY3Rpb25DcmVhdG9ycyIsInN0b3JlU3VibWl0dGVkRGF0YSIsInJlc2V0U3VibWl0dGVkRGF0YSIsImluaXRpYWxTdGF0ZSIsImJpa2UiLCJjb2xvciIsImJyYW5kIiwic3BlY3MiLCJjb250YWN0IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJmaWVsZEFycmF5IiwiY2FtcG9NYXRyaWNlIiwia2V5IiwidmFsdWUiLCJzdWJtaXR0ZWRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJzdGF0ZURPVHN1Ym1pdHRlZCIsInR5cGUiLCJmb3JtTmFtZSIsInZhbHVlcyIsInJvb3RSZWR1Y2VyIiwic3VibWl0dGVkIiwiZm9ybSIsInN0b3JlIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLFVBQU1BLHVCQUF1QjtBQUN6QkMsOEJBQXNCLHNCQURHO0FBRXpCQyw4QkFBc0I7QUFGRyxLQUE3Qjs7QUFLQSxVQUFNQywwQkFBMEI7QUFDNUJDLDBCQUQ0QjtBQUU1QkM7QUFGNEIsS0FBaEM7O0FBS0E7QUFDQSxVQUFNQyxlQUFlO0FBQ2pCQyxjQUFNO0FBQ0ZDLG1CQUFPLFVBREw7QUFFRkMsbUJBQU8sZ0JBRkw7QUFHRkMsbUJBQU8sQ0FBQyxVQUFEO0FBSEwsU0FEVztBQU1qQkMsaUJBQVM7QUFDTEMsdUJBQVcsT0FETjtBQUVMQyxzQkFBVTtBQUZMLFNBTlE7QUFVakJDLG9CQUFZO0FBQ1JDLDBCQUFjLENBQ1YsRUFBQ0MsS0FBSyxPQUFOLEVBQWVDLE9BQU8sTUFBdEIsRUFEVSxFQUVWLEVBQUNELEtBQUssWUFBTixFQUFvQkMsT0FBTyxZQUEzQixFQUZVLEVBR1YsRUFBQ0QsS0FBSyxXQUFOLEVBQW1CQyxPQUFPLE1BQTFCLEVBSFUsRUFJVixFQUFDRCxLQUFLLFNBQU4sRUFBaUJDLE9BQU8sS0FBeEIsRUFKVTtBQUROO0FBVkssS0FBckI7O0FBb0JBLFVBQU1DLG1CQUFtQixDQUFDQyxRQUFRYixZQUFULEVBQXVCYyxNQUF2QixLQUFrQztBQUN2RCxZQUFJQyxpQ0FBd0JGLEtBQXhCLENBQUo7O0FBRUEsZ0JBQVFDLE9BQU9FLElBQWY7QUFDSSxpQkFBS3RCLHFCQUFxQkMsb0JBQTFCOztBQUVJb0Isa0NBQWtCRCxPQUFPRyxRQUF6QixJQUFxQ0gsT0FBT0ksTUFBNUM7QUFDQSx1QkFBT0gsaUJBQVA7O0FBRUosaUJBQUtyQixxQkFBcUJFLG9CQUExQjs7QUFFSW1CLGtDQUFrQkQsT0FBT0csUUFBekIsSUFBcUMsRUFBckM7QUFDQSx1QkFBT0YsaUJBQVA7O0FBRUo7QUFDSSx1QkFBT0EsaUJBQVA7QUFaUjtBQWNILEtBakJEOztBQW1CQSxVQUFNSSxjQUFjLDRCQUFnQjtBQUNoQztBQUNBQyxtQkFBV1IsZ0JBRnFCO0FBR2hDO0FBQ0E7QUFDQVM7QUFMZ0MsS0FBaEIsQ0FBcEI7O0FBUUEsVUFBTUMsUUFBUSx3QkFBWUgsV0FBWixDQUFkOztZQUVRRyxLLEdBQUFBLEs7WUFBT3pCLHVCLEdBQUFBLHVCOzs7QUFFZixhQUFTQyxrQkFBVCxDQUE0Qm1CLFFBQTVCLEVBQXNDQyxNQUF0QyxFQUE4QztBQUMxQyxlQUFPO0FBQ0hGLGtCQUFNdEIscUJBQXFCQyxvQkFEeEI7QUFFSHNCLG9CQUZHO0FBR0hDO0FBSEcsU0FBUDtBQUtIOztBQUVELGFBQVNuQixrQkFBVCxDQUE0QmtCLFFBQTVCLEVBQXNDO0FBQ2xDLGVBQU87QUFDSEQsa0JBQU10QixxQkFBcUJFLG9CQUR4QjtBQUVIcUI7QUFGRyxTQUFQO0FBSUgiLCJmaWxlIjoicm9vdFJlZHVjZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7Y3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHtyZWR1Y2VyIGFzIGZvcm1SZWR1Y2VyfSBmcm9tICdyZWR1eC1mb3JtJztcblxuY29uc3QgU3VibWl0dGVyQWN0aW9uVHlwZXMgPSB7XG4gICAgU1RPUkVfU1VCTUlUVEVEX0RBVEE6ICdTVE9SRV9TVUJNSVRURURfREFUQScsXG4gICAgUkVTRVRfU1VCTUlUVEVEX0RBVEE6ICdSRVNFVF9TVUJNSVRURURfREFUQScsXG59O1xuXG5jb25zdCBTdWJtaXR0ZXJBY3Rpb25DcmVhdG9ycyA9IHtcbiAgICBzdG9yZVN1Ym1pdHRlZERhdGEsXG4gICAgcmVzZXRTdWJtaXR0ZWREYXRhLFxufTtcblxuLy8gTkI6IHRoZXNlIHZhbHVlcyBhcmUgaGFuZGxlZCBieSBzdWJtaXR0ZWRSZWR1Y2VyIG9ubHlcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBiaWtlOiB7XG4gICAgICAgIGNvbG9yOiAndHVyY2hpbm8nLFxuICAgICAgICBicmFuZDogJ1Bpbm9jY2hpIFN1cGVyJyxcbiAgICAgICAgc3BlY3M6IFsnYW1pY2l6aWEnXSxcbiAgICB9LFxuICAgIGNvbnRhY3Q6IHtcbiAgICAgICAgZmlyc3ROYW1lOiAnTHVpZ2knLFxuICAgICAgICBsYXN0TmFtZTogJ0NhZ3JvdHRpJyxcbiAgICB9LFxuICAgIGZpZWxkQXJyYXk6IHtcbiAgICAgICAgY2FtcG9NYXRyaWNlOiBbXG4gICAgICAgICAgICB7a2V5OiAnaG9iYnknLCB2YWx1ZTogJ2dvbGYnfSxcbiAgICAgICAgICAgIHtrZXk6ICdwcm9mZXNzaW9uJywgdmFsdWU6ICdjb25zdWx0YW50J30sXG4gICAgICAgICAgICB7a2V5OiAnYmlydGhZZWFyJywgdmFsdWU6ICcyMDAxJ30sXG4gICAgICAgICAgICB7a2V5OiAnc3R1ZGllcycsIHZhbHVlOiAnbGF3J30sXG4gICAgICAgIF1cbiAgICB9LFxufTtcblxuY29uc3Qgc3VibWl0dGVkUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgbGV0IHN0YXRlRE9Uc3VibWl0dGVkID0gey4uLnN0YXRlfTtcblxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBTdWJtaXR0ZXJBY3Rpb25UeXBlcy5TVE9SRV9TVUJNSVRURURfREFUQTpcblxuICAgICAgICAgICAgc3RhdGVET1RzdWJtaXR0ZWRbYWN0aW9uLmZvcm1OYW1lXSA9IGFjdGlvbi52YWx1ZXM7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVET1RzdWJtaXR0ZWQ7XG5cbiAgICAgICAgY2FzZSBTdWJtaXR0ZXJBY3Rpb25UeXBlcy5SRVNFVF9TVUJNSVRURURfREFUQTpcblxuICAgICAgICAgICAgc3RhdGVET1RzdWJtaXR0ZWRbYWN0aW9uLmZvcm1OYW1lXSA9IHt9O1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlRE9Uc3VibWl0dGVkO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVET1RzdWJtaXR0ZWQ7XG4gICAgfVxufTtcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIC8vIC4uLnlvdXIgb3RoZXIgcmVkdWNlcnMgaGVyZVxuICAgIHN1Ym1pdHRlZDogc3VibWl0dGVkUmVkdWNlcixcbiAgICAvLyB5b3UgaGF2ZSB0byBwYXNzIGZvcm1SZWR1Y2VyIHVuZGVyICdmb3JtJyBrZXksXG4gICAgLy8gZm9yIGN1c3RvbSBrZXlzIGxvb2sgdXAgdGhlIGRvY3MgZm9yICdnZXRGb3JtU3RhdGUnXG4gICAgZm9ybTogZm9ybVJlZHVjZXIsXG59KTtcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlcik7XG5cbmV4cG9ydCB7c3RvcmUsIFN1Ym1pdHRlckFjdGlvbkNyZWF0b3JzfTtcblxuZnVuY3Rpb24gc3RvcmVTdWJtaXR0ZWREYXRhKGZvcm1OYW1lLCB2YWx1ZXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBTdWJtaXR0ZXJBY3Rpb25UeXBlcy5TVE9SRV9TVUJNSVRURURfREFUQSxcbiAgICAgICAgZm9ybU5hbWUsXG4gICAgICAgIHZhbHVlcyxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiByZXNldFN1Ym1pdHRlZERhdGEoZm9ybU5hbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBTdWJtaXR0ZXJBY3Rpb25UeXBlcy5SRVNFVF9TVUJNSVRURURfREFUQSxcbiAgICAgICAgZm9ybU5hbWUsXG4gICAgfTtcbn1cbiJdfQ==