define(['exports', './initialState', './view', '../template/startStep_template', '../template/customvarStep_template', '../template/datasetStep_template', '../template/typeStep_template'], function (exports, _initialState, _view, _startStep_template, _customvarStep_template, _datasetStep_template, _typeStep_template) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.startStep = startStep;

    var _view2 = _interopRequireDefault(_view);

    var _startStep_template2 = _interopRequireDefault(_startStep_template);

    var _customvarStep_template2 = _interopRequireDefault(_customvarStep_template);

    var _datasetStep_template2 = _interopRequireDefault(_datasetStep_template);

    var _typeStep_template2 = _interopRequireDefault(_typeStep_template);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    let wizardProps = {
        footer: {
            cancelButton: {
                onClick: () => {
                    alert('cancel button clicked');
                },
                className: 'left_button'
            },
            saveButton: {
                onClick: () => {
                    alert('SAVE button clicked');
                },
                className: 'right_button'
            }
        }
    };

    function startStep() {
        return (0, _view2.default)({
            location: 'startStep',
            handlers: {
                backward: [],
                forward: [customvarStep, datasetStep]
            },
            state: _initialState.initialState
        }, _startStep_template2.default);
    }

    function customvarStep() {
        return (0, _view2.default)({
            location: 'customvarStep',
            handlers: {
                backward: [startStep],
                forward: [..._initialState.initialState.customvar.map(customVar => labeler('exitStep', exitStep(customVar), customVar))]
            },
            state: _initialState.initialState
        }, _customvarStep_template2.default);
    }

    function datasetStep() {
        return (0, _view2.default)({
            location: 'datasetStep',
            handlers: {
                backward: [startStep],
                forward: [// one array for each dataset
                ...Object.keys(_initialState.initialState.dataset).map(datasetId => {
                    let datasetPosition = parsedStateId(datasetId).currentPos;
                    let datasetName = _initialState.initialState.dataset_name[datasetPosition];
                    return [..._initialState.initialState.dataset_keys[datasetPosition]].map(key => datasetName + '.' + key).map(key => labeler('typeStep', () => typeStep(key), key));
                })]
            },
            state: _initialState.initialState
        }, _datasetStep_template2.default);
    }

    function typeStep(datasetProperty) {
        let datasetName = datasetProperty.split('.')[0];
        let datasetId = 'dataset#' + _initialState.initialState.dataset_name.findIndex(n => n === datasetName);
        return (0, _view2.default)({
            location: 'typeStep',
            handlers: {
                backward: [startStep, labeler('propertyStep', () => propertyStep(datasetId), datasetName)],
                forward: [...[randomStep, connectedStep, fixedStep].map(fun => labeler(fun.name, () => fun(datasetProperty), datasetProperty))]
            },
            state: _initialState.initialState
        }, _typeStep_template2.default);
    }

    function randomStep(datasetProperty) {
        return (0, _view2.default)({
            location: 'randomStep',
            handlers: {
                backward: [startStep, labeler('typeStep', () => typeStep(datasetProperty), datasetProperty)],
                forward: [labeler('exitStep', exitStep(datasetProperty), datasetProperty)]
            }
        }, templateC);
    }

    function connectedStep(datasetProperty) {
        let datasetPropertyWithSuffix = datasetProperty + '/';
        return (0, _view2.default)({
            location: 'connectedStep',
            handlers: {
                backward: [startStep, labeler('typeStep', () => typeStep(datasetProperty), datasetProperty)],
                forward: [...datasetIndexes(datasetPropertyWithSuffix).map((arg, index) => labeler('exitStep ' + datasetPropertyWithSuffix + index, exitStep(arg)))]
            }
        }, templateA);
    }

    function fixedStep(datasetProperty) {
        let datasetPropertyWithSuffix = datasetProperty + '#';
        return (0, _view2.default)({
            location: 'fixedStep',
            handlers: {
                backward: [startStep, labeler('typeStep', () => typeStep(datasetProperty), datasetProperty)],
                forward: [...datasetIndexes(datasetPropertyWithSuffix).map((arg, index) => labeler('exitStep ' + datasetPropertyWithSuffix + index, exitStep(arg)))]
            }
        }, templateB);
    }

    function exitStep(value, index) {
        // reasonsforcologne.image/2 --> $(reasonsforcologne.image/2)
        let result = () => {
            alert('$(' + value + ')');
        };
        return labeler('exitStep', result, index);
    }

    function datasetIndexes(datasetPropertyWithSuffix) {
        // reasonsforcologne.image -> reasonsforcologne.image/2
        let datasetName = datasetPropertyWithSuffix.split('.')[0];
        let datasetPos = _initialState.initialState.dataset_name.findIndex(item => item === datasetName);
        let numInstances = _initialState.initialState.dataset['dataset#' + datasetPos].length;
        return [...Array(numInstances).keys()].map(key => datasetPropertyWithSuffix + key);
    }

    function parsedStateId(id) {
        let pieces = id.split('#');
        return {
            currentPos: pieces[1]
        };
    }

    function labeler(stepName, fun, labelValue) {
        Object.defineProperty(fun, 'name', {
            value: stepName + ' ' + (typeof labelValue !== 'undefined' ? labelValue : '')
        });
        return fun;
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9zdGF0ZV9tYWNoaW5lL3N0ZXBzLmpzIl0sIm5hbWVzIjpbInN0YXJ0U3RlcCIsIndpemFyZFByb3BzIiwiZm9vdGVyIiwiY2FuY2VsQnV0dG9uIiwib25DbGljayIsImFsZXJ0IiwiY2xhc3NOYW1lIiwic2F2ZUJ1dHRvbiIsImxvY2F0aW9uIiwiaGFuZGxlcnMiLCJiYWNrd2FyZCIsImZvcndhcmQiLCJjdXN0b212YXJTdGVwIiwiZGF0YXNldFN0ZXAiLCJzdGF0ZSIsImN1c3RvbXZhciIsIm1hcCIsImN1c3RvbVZhciIsImxhYmVsZXIiLCJleGl0U3RlcCIsIk9iamVjdCIsImtleXMiLCJkYXRhc2V0IiwiZGF0YXNldElkIiwiZGF0YXNldFBvc2l0aW9uIiwicGFyc2VkU3RhdGVJZCIsImN1cnJlbnRQb3MiLCJkYXRhc2V0TmFtZSIsImRhdGFzZXRfbmFtZSIsImRhdGFzZXRfa2V5cyIsImtleSIsInR5cGVTdGVwIiwiZGF0YXNldFByb3BlcnR5Iiwic3BsaXQiLCJmaW5kSW5kZXgiLCJuIiwicHJvcGVydHlTdGVwIiwicmFuZG9tU3RlcCIsImNvbm5lY3RlZFN0ZXAiLCJmaXhlZFN0ZXAiLCJmdW4iLCJuYW1lIiwidGVtcGxhdGVDIiwiZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCIsImRhdGFzZXRJbmRleGVzIiwiYXJnIiwiaW5kZXgiLCJ0ZW1wbGF0ZUEiLCJ0ZW1wbGF0ZUIiLCJ2YWx1ZSIsInJlc3VsdCIsImRhdGFzZXRQb3MiLCJpdGVtIiwibnVtSW5zdGFuY2VzIiwibGVuZ3RoIiwiQXJyYXkiLCJpZCIsInBpZWNlcyIsInN0ZXBOYW1lIiwibGFiZWxWYWx1ZSIsImRlZmluZVByb3BlcnR5Il0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O1lBMEJnQkEsUyxHQUFBQSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFqQmhCLFFBQUlDLGNBQWM7QUFDZEMsZ0JBQVE7QUFDSkMsMEJBQWM7QUFDVkMseUJBQVMsTUFBTTtBQUNYQywwQkFBTSx1QkFBTjtBQUNILGlCQUhTO0FBSVZDLDJCQUFXO0FBSkQsYUFEVjtBQU9KQyx3QkFBWTtBQUNSSCx5QkFBUyxNQUFNO0FBQ1hDLDBCQUFNLHFCQUFOO0FBQ0gsaUJBSE87QUFJUkMsMkJBQVc7QUFKSDtBQVBSO0FBRE0sS0FBbEI7O0FBaUJPLGFBQVNOLFNBQVQsR0FBcUI7QUFDeEIsZUFBTyxvQkFBTztBQUNWUSxzQkFBVSxXQURBO0FBRVZDLHNCQUFVO0FBQ05DLDBCQUFVLEVBREo7QUFFTkMseUJBQVMsQ0FBQ0MsYUFBRCxFQUFnQkMsV0FBaEI7QUFGSCxhQUZBO0FBTVZDO0FBTlUsU0FBUCwrQkFBUDtBQVFIOztBQUVELGFBQVNGLGFBQVQsR0FBeUI7QUFDckIsZUFBTyxvQkFBTztBQUNWSixzQkFBVSxlQURBO0FBRVZDLHNCQUFVO0FBQ05DLDBCQUFVLENBQUNWLFNBQUQsQ0FESjtBQUVOVyx5QkFBUyxDQUFDLEdBQUcsMkJBQU1JLFNBQU4sQ0FDUkMsR0FEUSxDQUNKQyxhQUFhQyxRQUFRLFVBQVIsRUFBb0JDLFNBQVNGLFNBQVQsQ0FBcEIsRUFBeUNBLFNBQXpDLENBRFQsQ0FBSjtBQUZILGFBRkE7QUFPVkg7QUFQVSxTQUFQLG1DQUFQO0FBU0g7O0FBRUQsYUFBU0QsV0FBVCxHQUF1QjtBQUNuQixlQUFPLG9CQUFPO0FBQ1ZMLHNCQUFVLGFBREE7QUFFVkMsc0JBQVU7QUFDTkMsMEJBQVUsQ0FBQ1YsU0FBRCxDQURKO0FBRU5XLHlCQUFTLENBQUU7QUFDUCxtQkFBR1MsT0FBT0MsSUFBUCxDQUFZLDJCQUFNQyxPQUFsQixFQUNFTixHQURGLENBQ01PLGFBQWE7QUFDZCx3QkFBSUMsa0JBQWtCQyxjQUFjRixTQUFkLEVBQXlCRyxVQUEvQztBQUNBLHdCQUFJQyxjQUFjLDJCQUFNQyxZQUFOLENBQW1CSixlQUFuQixDQUFsQjtBQUNBLDJCQUFPLENBQUMsR0FBRywyQkFBTUssWUFBTixDQUFtQkwsZUFBbkIsQ0FBSixFQUNGUixHQURFLENBQ0VjLE9BQU9ILGNBQWMsR0FBZCxHQUFvQkcsR0FEN0IsRUFFRmQsR0FGRSxDQUVFYyxPQUFPWixRQUFRLFVBQVIsRUFBb0IsTUFBTWEsU0FBU0QsR0FBVCxDQUExQixFQUF5Q0EsR0FBekMsQ0FGVCxDQUFQO0FBR0gsaUJBUEYsQ0FERTtBQUZILGFBRkE7QUFlVmhCO0FBZlUsU0FBUCxpQ0FBUDtBQWlCSDs7QUFFRCxhQUFTaUIsUUFBVCxDQUFrQkMsZUFBbEIsRUFBbUM7QUFDL0IsWUFBSUwsY0FBY0ssZ0JBQWdCQyxLQUFoQixDQUFzQixHQUF0QixFQUEyQixDQUEzQixDQUFsQjtBQUNBLFlBQUlWLFlBQVksYUFBYSwyQkFBTUssWUFBTixDQUFtQk0sU0FBbkIsQ0FBNkJDLEtBQUtBLE1BQU1SLFdBQXhDLENBQTdCO0FBQ0EsZUFBTyxvQkFBTztBQUNWbkIsc0JBQVUsVUFEQTtBQUVWQyxzQkFBVTtBQUNOQywwQkFBVSxDQUNOVixTQURNLEVBRU5rQixRQUFRLGNBQVIsRUFBd0IsTUFBTWtCLGFBQWFiLFNBQWIsQ0FBOUIsRUFBdURJLFdBQXZELENBRk0sQ0FESjtBQUtOaEIseUJBQVMsQ0FDTCxHQUFHLENBQUMwQixVQUFELEVBQWFDLGFBQWIsRUFBNEJDLFNBQTVCLEVBQ0V2QixHQURGLENBQ013QixPQUFPdEIsUUFBUXNCLElBQUlDLElBQVosRUFBa0IsTUFBTUQsSUFBSVIsZUFBSixDQUF4QixFQUE4Q0EsZUFBOUMsQ0FEYixDQURFO0FBTEgsYUFGQTtBQVlWbEI7QUFaVSxTQUFQLDhCQUFQO0FBY0g7O0FBRUQsYUFBU3VCLFVBQVQsQ0FBb0JMLGVBQXBCLEVBQXFDO0FBQ2pDLGVBQU8sb0JBQU87QUFDVnhCLHNCQUFVLFlBREE7QUFFVkMsc0JBQVU7QUFDTkMsMEJBQVUsQ0FDTlYsU0FETSxFQUVOa0IsUUFBUSxVQUFSLEVBQW9CLE1BQU1hLFNBQVNDLGVBQVQsQ0FBMUIsRUFBcURBLGVBQXJELENBRk0sQ0FESjtBQUtOckIseUJBQVMsQ0FDTE8sUUFBUSxVQUFSLEVBQW9CQyxTQUFTYSxlQUFULENBQXBCLEVBQStDQSxlQUEvQyxDQURLO0FBTEg7QUFGQSxTQUFQLEVBV0pVLFNBWEksQ0FBUDtBQVlIOztBQUVELGFBQVNKLGFBQVQsQ0FBdUJOLGVBQXZCLEVBQXdDO0FBQ3BDLFlBQUlXLDRCQUE0Qlgsa0JBQWtCLEdBQWxEO0FBQ0EsZUFBTyxvQkFBTztBQUNWeEIsc0JBQVUsZUFEQTtBQUVWQyxzQkFBVTtBQUNOQywwQkFBVSxDQUNOVixTQURNLEVBRU5rQixRQUFRLFVBQVIsRUFBb0IsTUFBTWEsU0FBU0MsZUFBVCxDQUExQixFQUFxREEsZUFBckQsQ0FGTSxDQURKO0FBS05yQix5QkFBUyxDQUNMLEdBQUdpQyxlQUFlRCx5QkFBZixFQUNFM0IsR0FERixDQUNNLENBQUM2QixHQUFELEVBQU1DLEtBQU4sS0FBZ0I1QixRQUFRLGNBQWN5Qix5QkFBZCxHQUEwQ0csS0FBbEQsRUFBeUQzQixTQUFTMEIsR0FBVCxDQUF6RCxDQUR0QixDQURFO0FBTEg7QUFGQSxTQUFQLEVBWUpFLFNBWkksQ0FBUDtBQWFIOztBQUVELGFBQVNSLFNBQVQsQ0FBbUJQLGVBQW5CLEVBQW9DO0FBQ2hDLFlBQUlXLDRCQUE0Qlgsa0JBQWtCLEdBQWxEO0FBQ0EsZUFBTyxvQkFBTztBQUNWeEIsc0JBQVUsV0FEQTtBQUVWQyxzQkFBVTtBQUNOQywwQkFBVSxDQUNOVixTQURNLEVBRU5rQixRQUFRLFVBQVIsRUFBb0IsTUFBTWEsU0FBU0MsZUFBVCxDQUExQixFQUFxREEsZUFBckQsQ0FGTSxDQURKO0FBS05yQix5QkFBUyxDQUNMLEdBQUdpQyxlQUFlRCx5QkFBZixFQUNFM0IsR0FERixDQUNNLENBQUM2QixHQUFELEVBQU1DLEtBQU4sS0FBZ0I1QixRQUFRLGNBQWN5Qix5QkFBZCxHQUEwQ0csS0FBbEQsRUFBeUQzQixTQUFTMEIsR0FBVCxDQUF6RCxDQUR0QixDQURFO0FBTEg7QUFGQSxTQUFQLEVBWUpHLFNBWkksQ0FBUDtBQWFIOztBQUVELGFBQVM3QixRQUFULENBQWtCOEIsS0FBbEIsRUFBeUJILEtBQXpCLEVBQWdDO0FBQUU7QUFDOUIsWUFBSUksU0FBUyxNQUFNO0FBQ2Y3QyxrQkFBTSxPQUFPNEMsS0FBUCxHQUFlLEdBQXJCO0FBQ0gsU0FGRDtBQUdBLGVBQU8vQixRQUFRLFVBQVIsRUFBb0JnQyxNQUFwQixFQUE0QkosS0FBNUIsQ0FBUDtBQUNIOztBQUVELGFBQVNGLGNBQVQsQ0FBd0JELHlCQUF4QixFQUFtRDtBQUFFO0FBQ2pELFlBQUloQixjQUFjZ0IsMEJBQTBCVixLQUExQixDQUFnQyxHQUFoQyxFQUFxQyxDQUFyQyxDQUFsQjtBQUNBLFlBQUlrQixhQUFhLDJCQUFNdkIsWUFBTixDQUFtQk0sU0FBbkIsQ0FBNkJrQixRQUFRQSxTQUFTekIsV0FBOUMsQ0FBakI7QUFDQSxZQUFJMEIsZUFBZSwyQkFBTS9CLE9BQU4sQ0FBYyxhQUFhNkIsVUFBM0IsRUFBdUNHLE1BQTFEO0FBQ0EsZUFBTyxDQUFDLEdBQUdDLE1BQU1GLFlBQU4sRUFBb0JoQyxJQUFwQixFQUFKLEVBQWdDTCxHQUFoQyxDQUFvQ2MsT0FBT2EsNEJBQTRCYixHQUF2RSxDQUFQO0FBQ0g7O0FBRUQsYUFBU0wsYUFBVCxDQUF1QitCLEVBQXZCLEVBQTJCO0FBQ3ZCLFlBQUlDLFNBQVNELEdBQUd2QixLQUFILENBQVMsR0FBVCxDQUFiO0FBQ0EsZUFBTztBQUNIUCx3QkFBWStCLE9BQU8sQ0FBUDtBQURULFNBQVA7QUFHSDs7QUFFRCxhQUFTdkMsT0FBVCxDQUFpQndDLFFBQWpCLEVBQTJCbEIsR0FBM0IsRUFBZ0NtQixVQUFoQyxFQUE0QztBQUN4Q3ZDLGVBQU93QyxjQUFQLENBQXNCcEIsR0FBdEIsRUFBMkIsTUFBM0IsRUFBbUM7QUFDL0JTLG1CQUFPUyxXQUFXLEdBQVgsSUFDSCxPQUFPQyxVQUFQLEtBQXNCLFdBQXZCLEdBQXNDQSxVQUF0QyxHQUFtRCxFQUQvQztBQUR3QixTQUFuQztBQUlBLGVBQU9uQixHQUFQO0FBQ0giLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7aW5pdGlhbFN0YXRlIGFzIHN0YXRlfSBmcm9tICcuL2luaXRpYWxTdGF0ZSc7XG5pbXBvcnQgY2hvaWNlIGZyb20gJy4vdmlldyc7XG5pbXBvcnQgc3RhcnRTdGVwX3RlbXBsYXRlIGZyb20gJy4uL3RlbXBsYXRlL3N0YXJ0U3RlcF90ZW1wbGF0ZSc7XG5pbXBvcnQgY3VzdG9tdmFyU3RlcF90ZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZS9jdXN0b212YXJTdGVwX3RlbXBsYXRlJztcbmltcG9ydCBkYXRhc2V0U3RlcF90ZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZS9kYXRhc2V0U3RlcF90ZW1wbGF0ZSc7XG5pbXBvcnQgdHlwZVN0ZXBfdGVtcGxhdGUgZnJvbSAnLi4vdGVtcGxhdGUvdHlwZVN0ZXBfdGVtcGxhdGUnO1xuXG5sZXQgd2l6YXJkUHJvcHMgPSB7XG4gICAgZm9vdGVyOiB7XG4gICAgICAgIGNhbmNlbEJ1dHRvbjoge1xuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdjYW5jZWwgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdsZWZ0X2J1dHRvbicsXG4gICAgICAgIH0sXG4gICAgICAgIHNhdmVCdXR0b246IHtcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydCgnU0FWRSBidXR0b24gY2xpY2tlZCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3JpZ2h0X2J1dHRvbicsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFN0ZXAoKSB7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAnc3RhcnRTdGVwJyxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFtjdXN0b212YXJTdGVwLCBkYXRhc2V0U3RlcF0sXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICB9LCBzdGFydFN0ZXBfdGVtcGxhdGUpO1xufVxuXG5mdW5jdGlvbiBjdXN0b212YXJTdGVwKCkge1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ2N1c3RvbXZhclN0ZXAnLFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtzdGFydFN0ZXAsXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFsuLi5zdGF0ZS5jdXN0b212YXJcbiAgICAgICAgICAgICAgICAubWFwKGN1c3RvbVZhciA9PiBsYWJlbGVyKCdleGl0U3RlcCcsIGV4aXRTdGVwKGN1c3RvbVZhciksIGN1c3RvbVZhcikpXVxuICAgICAgICB9LFxuICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgfSwgY3VzdG9tdmFyU3RlcF90ZW1wbGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGRhdGFzZXRTdGVwKCkge1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ2RhdGFzZXRTdGVwJyxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbc3RhcnRTdGVwLF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbIC8vIG9uZSBhcnJheSBmb3IgZWFjaCBkYXRhc2V0XG4gICAgICAgICAgICAgICAgLi4uT2JqZWN0LmtleXMoc3RhdGUuZGF0YXNldClcbiAgICAgICAgICAgICAgICAgICAgLm1hcChkYXRhc2V0SWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFzZXRQb3NpdGlvbiA9IHBhcnNlZFN0YXRlSWQoZGF0YXNldElkKS5jdXJyZW50UG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFzZXROYW1lID0gc3RhdGUuZGF0YXNldF9uYW1lW2RhdGFzZXRQb3NpdGlvbl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLmRhdGFzZXRfa2V5c1tkYXRhc2V0UG9zaXRpb25dXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoa2V5ID0+IGRhdGFzZXROYW1lICsgJy4nICsga2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoa2V5ID0+IGxhYmVsZXIoJ3R5cGVTdGVwJywgKCkgPT4gdHlwZVN0ZXAoa2V5KSwga2V5KSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICB9LCBkYXRhc2V0U3RlcF90ZW1wbGF0ZSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVTdGVwKGRhdGFzZXRQcm9wZXJ0eSkge1xuICAgIGxldCBkYXRhc2V0TmFtZSA9IGRhdGFzZXRQcm9wZXJ0eS5zcGxpdCgnLicpWzBdO1xuICAgIGxldCBkYXRhc2V0SWQgPSAnZGF0YXNldCMnICsgc3RhdGUuZGF0YXNldF9uYW1lLmZpbmRJbmRleChuID0+IG4gPT09IGRhdGFzZXROYW1lKTtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICd0eXBlU3RlcCcsXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgICAgICAgICBsYWJlbGVyKCdwcm9wZXJ0eVN0ZXAnLCAoKSA9PiBwcm9wZXJ0eVN0ZXAoZGF0YXNldElkKSwgZGF0YXNldE5hbWUpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZm9yd2FyZDogW1xuICAgICAgICAgICAgICAgIC4uLltyYW5kb21TdGVwLCBjb25uZWN0ZWRTdGVwLCBmaXhlZFN0ZXBdXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuID0+IGxhYmVsZXIoZnVuLm5hbWUsICgpID0+IGZ1bihkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpKVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgfSwgdHlwZVN0ZXBfdGVtcGxhdGUpO1xufVxuXG5mdW5jdGlvbiByYW5kb21TdGVwKGRhdGFzZXRQcm9wZXJ0eSkge1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ3JhbmRvbVN0ZXAnLFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtcbiAgICAgICAgICAgICAgICBzdGFydFN0ZXAsXG4gICAgICAgICAgICAgICAgbGFiZWxlcigndHlwZVN0ZXAnLCAoKSA9PiB0eXBlU3RlcChkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZm9yd2FyZDogW1xuICAgICAgICAgICAgICAgIGxhYmVsZXIoJ2V4aXRTdGVwJywgZXhpdFN0ZXAoZGF0YXNldFByb3BlcnR5KSwgZGF0YXNldFByb3BlcnR5KSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICB9LCB0ZW1wbGF0ZUMpO1xufVxuXG5mdW5jdGlvbiBjb25uZWN0ZWRTdGVwKGRhdGFzZXRQcm9wZXJ0eSkge1xuICAgIGxldCBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4ID0gZGF0YXNldFByb3BlcnR5ICsgJy8nO1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ2Nvbm5lY3RlZFN0ZXAnLFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtcbiAgICAgICAgICAgICAgICBzdGFydFN0ZXAsXG4gICAgICAgICAgICAgICAgbGFiZWxlcigndHlwZVN0ZXAnLCAoKSA9PiB0eXBlU3RlcChkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZm9yd2FyZDogW1xuICAgICAgICAgICAgICAgIC4uLmRhdGFzZXRJbmRleGVzKGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXgpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKGFyZywgaW5kZXgpID0+IGxhYmVsZXIoJ2V4aXRTdGVwICcgKyBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4ICsgaW5kZXgsIGV4aXRTdGVwKGFyZykpKVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgIH0sIHRlbXBsYXRlQSk7XG59XG5cbmZ1bmN0aW9uIGZpeGVkU3RlcChkYXRhc2V0UHJvcGVydHkpIHtcbiAgICBsZXQgZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCA9IGRhdGFzZXRQcm9wZXJ0eSArICcjJztcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdmaXhlZFN0ZXAnLFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtcbiAgICAgICAgICAgICAgICBzdGFydFN0ZXAsXG4gICAgICAgICAgICAgICAgbGFiZWxlcigndHlwZVN0ZXAnLCAoKSA9PiB0eXBlU3RlcChkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZm9yd2FyZDogW1xuICAgICAgICAgICAgICAgIC4uLmRhdGFzZXRJbmRleGVzKGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXgpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKGFyZywgaW5kZXgpID0+IGxhYmVsZXIoJ2V4aXRTdGVwICcgKyBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4ICsgaW5kZXgsIGV4aXRTdGVwKGFyZykpKVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgIH0sIHRlbXBsYXRlQik7XG59XG5cbmZ1bmN0aW9uIGV4aXRTdGVwKHZhbHVlLCBpbmRleCkgeyAvLyByZWFzb25zZm9yY29sb2duZS5pbWFnZS8yIC0tPiAkKHJlYXNvbnNmb3Jjb2xvZ25lLmltYWdlLzIpXG4gICAgbGV0IHJlc3VsdCA9ICgpID0+IHtcbiAgICAgICAgYWxlcnQoJyQoJyArIHZhbHVlICsgJyknKTtcbiAgICB9O1xuICAgIHJldHVybiBsYWJlbGVyKCdleGl0U3RlcCcsIHJlc3VsdCwgaW5kZXgpO1xufVxuXG5mdW5jdGlvbiBkYXRhc2V0SW5kZXhlcyhkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4KSB7IC8vIHJlYXNvbnNmb3Jjb2xvZ25lLmltYWdlIC0+IHJlYXNvbnNmb3Jjb2xvZ25lLmltYWdlLzJcbiAgICBsZXQgZGF0YXNldE5hbWUgPSBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4LnNwbGl0KCcuJylbMF07XG4gICAgbGV0IGRhdGFzZXRQb3MgPSBzdGF0ZS5kYXRhc2V0X25hbWUuZmluZEluZGV4KGl0ZW0gPT4gaXRlbSA9PT0gZGF0YXNldE5hbWUpO1xuICAgIGxldCBudW1JbnN0YW5jZXMgPSBzdGF0ZS5kYXRhc2V0WydkYXRhc2V0IycgKyBkYXRhc2V0UG9zXS5sZW5ndGg7XG4gICAgcmV0dXJuIFsuLi5BcnJheShudW1JbnN0YW5jZXMpLmtleXMoKV0ubWFwKGtleSA9PiBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4ICsga2V5KTtcbn1cblxuZnVuY3Rpb24gcGFyc2VkU3RhdGVJZChpZCkge1xuICAgIGxldCBwaWVjZXMgPSBpZC5zcGxpdCgnIycpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnRQb3M6IHBpZWNlc1sxXSxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBsYWJlbGVyKHN0ZXBOYW1lLCBmdW4sIGxhYmVsVmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuLCAnbmFtZScsIHtcbiAgICAgICAgdmFsdWU6IHN0ZXBOYW1lICsgJyAnXG4gICAgICAgICsgKCh0eXBlb2YgbGFiZWxWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcpID8gbGFiZWxWYWx1ZSA6ICcnKVxuICAgIH0pO1xuICAgIHJldHVybiBmdW47XG59XG4iXX0=