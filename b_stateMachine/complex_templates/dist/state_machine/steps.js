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
            restartButton: {
                onClick: () => {
                    alert('restart button clicked');
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
            state: _initialState.initialState,
            footer: wizardProps.footer
        }, _startStep_template2.default);
    }

    function customvarStep(chosenVar) {
        return (0, _view2.default)({
            location: 'customvarStep',
            handlers: {
                backward: [startStep],
                forward: [..._initialState.initialState.customvar.map(customVar => labeler('exitStep', () => customvarStep.call(null, customVar), customVar))]
            },
            state: _initialState.initialState,
            footer: wizardProps.footer,
            // ignoring click events as args
            chosen_var: chosenVar.length ? chosenVar : undefined
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
            state: _initialState.initialState,
            footer: wizardProps.footer
        }, _datasetStep_template2.default);
    }

    function typeStep(datasetProperty) {
        let datasetName = datasetProperty.split('.')[0];
        let datasetId = 'dataset#' + _initialState.initialState.dataset_name.findIndex(n => n === datasetName);
        return (0, _view2.default)({
            location: 'typeStep',
            chosen_dataset_name: datasetName,
            chosen_dataset_property: datasetProperty,
            handlers: {
                backward: [startStep, labeler('propertyStep', () => datasetStep(), datasetName)],
                forward: [...[randomStep, connectedStep, fixedStep].map(fun => labeler(fun.name, () => fun(datasetProperty), datasetProperty))]
            },
            state: _initialState.initialState,
            footer: wizardProps.footer
        }, _typeStep_template2.default);
    }

    // randomStep proposes again the propertyStep while enabling the save button
    function randomStep(datasetProperty) {
        let datasetName = datasetProperty.split('.')[0];
        return (0, _view2.default)({
            location: 'randomStep',
            chosen_dataset_property: datasetProperty,
            handlers: {
                backward: [startStep, labeler('propertyStep', () => datasetStep(), datasetName), labeler('typeStep', () => typeStep(datasetProperty), datasetProperty)],
                forward: [...[randomStep, connectedStep, fixedStep].map(fun => labeler(fun.name, () => fun(datasetProperty), datasetProperty))]
            },
            footer: wizardProps.footer
        }, _typeStep_template2.default);
    }

    function connectedStep(datasetProperty) {
        let datasetPropertyWithSuffix = datasetProperty + '/';
        return (0, _view2.default)({
            location: 'connectedStep',
            chosen_dataset_property: datasetProperty,
            handlers: {
                backward: [startStep, labeler('typeStep', () => typeStep(datasetProperty), datasetProperty)],
                forward: [...datasetIndexes(datasetPropertyWithSuffix).map((arg, index) => labeler('exitStep ' + datasetPropertyWithSuffix + index, exitStep(arg)))]
            },
            footer: wizardProps.footer
        }, templateA);
    }

    function fixedStep(datasetProperty) {
        let datasetPropertyWithSuffix = datasetProperty + '#';
        return (0, _view2.default)({
            location: 'fixedStep',
            chosen_dataset_property: datasetProperty,
            handlers: {
                backward: [startStep, labeler('typeStep', () => typeStep(datasetProperty), datasetProperty)],
                forward: [...datasetIndexes(datasetPropertyWithSuffix).map((arg, index) => labeler('exitStep ' + datasetPropertyWithSuffix + index, exitStep(arg)))]
            },
            footer: wizardProps.footer
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9zdGF0ZV9tYWNoaW5lL3N0ZXBzLmpzIl0sIm5hbWVzIjpbInN0YXJ0U3RlcCIsIndpemFyZFByb3BzIiwiZm9vdGVyIiwiY2FuY2VsQnV0dG9uIiwib25DbGljayIsImFsZXJ0IiwiY2xhc3NOYW1lIiwicmVzdGFydEJ1dHRvbiIsInNhdmVCdXR0b24iLCJsb2NhdGlvbiIsImhhbmRsZXJzIiwiYmFja3dhcmQiLCJmb3J3YXJkIiwiY3VzdG9tdmFyU3RlcCIsImRhdGFzZXRTdGVwIiwic3RhdGUiLCJjaG9zZW5WYXIiLCJjdXN0b212YXIiLCJtYXAiLCJjdXN0b21WYXIiLCJsYWJlbGVyIiwiY2FsbCIsImNob3Nlbl92YXIiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJPYmplY3QiLCJrZXlzIiwiZGF0YXNldCIsImRhdGFzZXRJZCIsImRhdGFzZXRQb3NpdGlvbiIsInBhcnNlZFN0YXRlSWQiLCJjdXJyZW50UG9zIiwiZGF0YXNldE5hbWUiLCJkYXRhc2V0X25hbWUiLCJkYXRhc2V0X2tleXMiLCJrZXkiLCJ0eXBlU3RlcCIsImRhdGFzZXRQcm9wZXJ0eSIsInNwbGl0IiwiZmluZEluZGV4IiwibiIsImNob3Nlbl9kYXRhc2V0X25hbWUiLCJjaG9zZW5fZGF0YXNldF9wcm9wZXJ0eSIsInJhbmRvbVN0ZXAiLCJjb25uZWN0ZWRTdGVwIiwiZml4ZWRTdGVwIiwiZnVuIiwibmFtZSIsImRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXgiLCJkYXRhc2V0SW5kZXhlcyIsImFyZyIsImluZGV4IiwiZXhpdFN0ZXAiLCJ0ZW1wbGF0ZUEiLCJ0ZW1wbGF0ZUIiLCJ2YWx1ZSIsInJlc3VsdCIsImRhdGFzZXRQb3MiLCJpdGVtIiwibnVtSW5zdGFuY2VzIiwiQXJyYXkiLCJpZCIsInBpZWNlcyIsInN0ZXBOYW1lIiwibGFiZWxWYWx1ZSIsImRlZmluZVByb3BlcnR5Il0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O1lBZ0NnQkEsUyxHQUFBQSxTOzs7Ozs7Ozs7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QkFBMEJWLEtBQTFCLENBQWdDLEdBQWhDLEVBQXFDLENBQXJDLENBQWxCO0FBQ0EsWUFBSW1CLGFBQWEsMkJBQU14QixZQUFOLENBQW1CTSxTQUFuQixDQUE2Qm1CLFFBQVFBLFNBQVMxQixXQUE5QyxDQUFqQjtBQUNBLFlBQUkyQixlQUFlLDJCQUFNaEMsT0FBTixDQUFjLGFBQWE4QixVQUEzQixFQUF1Q2xDLE1BQTFEO0FBQ0EsZUFBTyxDQUFDLEdBQUdxQyxNQUFNRCxZQUFOLEVBQW9CakMsSUFBcEIsRUFBSixFQUFnQ1IsR0FBaEMsQ0FBb0NpQixPQUFPYSw0QkFBNEJiLEdBQXZFLENBQVA7QUFDSDs7QUFFRCxhQUFTTCxhQUFULENBQXVCK0IsRUFBdkIsRUFBMkI7QUFDdkIsWUFBSUMsU0FBU0QsR0FBR3ZCLEtBQUgsQ0FBUyxHQUFULENBQWI7QUFDQSxlQUFPO0FBQ0hQLHdCQUFZK0IsT0FBTyxDQUFQO0FBRFQsU0FBUDtBQUdIOztBQUVELGFBQVMxQyxPQUFULENBQWlCMkMsUUFBakIsRUFBMkJqQixHQUEzQixFQUFnQ2tCLFVBQWhDLEVBQTRDO0FBQ3hDdkMsZUFBT3dDLGNBQVAsQ0FBc0JuQixHQUF0QixFQUEyQixNQUEzQixFQUFtQztBQUMvQlMsbUJBQU9RLFdBQVcsR0FBWCxJQUNILE9BQU9DLFVBQVAsS0FBc0IsV0FBdkIsR0FBc0NBLFVBQXRDLEdBQW1ELEVBRC9DO0FBRHdCLFNBQW5DO0FBSUEsZUFBT2xCLEdBQVA7QUFDSCIsImZpbGUiOiJzdGVwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtpbml0aWFsU3RhdGUgYXMgc3RhdGV9IGZyb20gJy4vaW5pdGlhbFN0YXRlJztcbmltcG9ydCBjaG9pY2UgZnJvbSAnLi92aWV3JztcbmltcG9ydCBzdGFydFN0ZXBfdGVtcGxhdGUgZnJvbSAnLi4vdGVtcGxhdGUvc3RhcnRTdGVwX3RlbXBsYXRlJztcbmltcG9ydCBjdXN0b212YXJTdGVwX3RlbXBsYXRlIGZyb20gJy4uL3RlbXBsYXRlL2N1c3RvbXZhclN0ZXBfdGVtcGxhdGUnO1xuaW1wb3J0IGRhdGFzZXRTdGVwX3RlbXBsYXRlIGZyb20gJy4uL3RlbXBsYXRlL2RhdGFzZXRTdGVwX3RlbXBsYXRlJztcbmltcG9ydCB0eXBlU3RlcF90ZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZS90eXBlU3RlcF90ZW1wbGF0ZSc7XG5cbmxldCB3aXphcmRQcm9wcyA9IHtcbiAgICBmb290ZXI6IHtcbiAgICAgICAgY2FuY2VsQnV0dG9uOiB7XG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ2NhbmNlbCBidXR0b24gY2xpY2tlZCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2xlZnRfYnV0dG9uJyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVzdGFydEJ1dHRvbjoge1xuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdyZXN0YXJ0IGJ1dHRvbiBjbGlja2VkJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbGVmdF9idXR0b24nLFxuICAgICAgICB9LFxuICAgICAgICBzYXZlQnV0dG9uOiB7XG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1NBVkUgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdyaWdodF9idXR0b24nLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRTdGVwKCkge1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ3N0YXJ0U3RlcCcsXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW10sXG4gICAgICAgICAgICBmb3J3YXJkOiBbY3VzdG9tdmFyU3RlcCwgZGF0YXNldFN0ZXBdLFxuICAgICAgICB9LFxuICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgIGZvb3Rlcjogd2l6YXJkUHJvcHMuZm9vdGVyLFxuICAgIH0sIHN0YXJ0U3RlcF90ZW1wbGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGN1c3RvbXZhclN0ZXAoY2hvc2VuVmFyKSB7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAnY3VzdG9tdmFyU3RlcCcsXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW3N0YXJ0U3RlcCxdLFxuICAgICAgICAgICAgZm9yd2FyZDogWy4uLnN0YXRlLmN1c3RvbXZhclxuICAgICAgICAgICAgICAgIC5tYXAoY3VzdG9tVmFyID0+IGxhYmVsZXIoJ2V4aXRTdGVwJywgKCkgPT4gY3VzdG9tdmFyU3RlcC5jYWxsKG51bGwsIGN1c3RvbVZhciksIGN1c3RvbVZhcikpXVxuICAgICAgICB9LFxuICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgIGZvb3Rlcjogd2l6YXJkUHJvcHMuZm9vdGVyLFxuICAgICAgICAvLyBpZ25vcmluZyBjbGljayBldmVudHMgYXMgYXJnc1xuICAgICAgICBjaG9zZW5fdmFyOiAoY2hvc2VuVmFyLmxlbmd0aCkgPyBjaG9zZW5WYXIgOiB1bmRlZmluZWQsXG4gICAgfSwgY3VzdG9tdmFyU3RlcF90ZW1wbGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGRhdGFzZXRTdGVwKCkge1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ2RhdGFzZXRTdGVwJyxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbc3RhcnRTdGVwLF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbIC8vIG9uZSBhcnJheSBmb3IgZWFjaCBkYXRhc2V0XG4gICAgICAgICAgICAgICAgLi4uT2JqZWN0LmtleXMoc3RhdGUuZGF0YXNldClcbiAgICAgICAgICAgICAgICAgICAgLm1hcChkYXRhc2V0SWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFzZXRQb3NpdGlvbiA9IHBhcnNlZFN0YXRlSWQoZGF0YXNldElkKS5jdXJyZW50UG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFzZXROYW1lID0gc3RhdGUuZGF0YXNldF9uYW1lW2RhdGFzZXRQb3NpdGlvbl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLmRhdGFzZXRfa2V5c1tkYXRhc2V0UG9zaXRpb25dXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoa2V5ID0+IGRhdGFzZXROYW1lICsgJy4nICsga2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoa2V5ID0+IGxhYmVsZXIoJ3R5cGVTdGVwJywgKCkgPT4gdHlwZVN0ZXAoa2V5KSwga2V5KSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgZm9vdGVyOiB3aXphcmRQcm9wcy5mb290ZXIsXG4gICAgfSwgZGF0YXNldFN0ZXBfdGVtcGxhdGUpO1xufVxuXG5mdW5jdGlvbiB0eXBlU3RlcChkYXRhc2V0UHJvcGVydHkpIHtcbiAgICBsZXQgZGF0YXNldE5hbWUgPSBkYXRhc2V0UHJvcGVydHkuc3BsaXQoJy4nKVswXTtcbiAgICBsZXQgZGF0YXNldElkID0gJ2RhdGFzZXQjJyArIHN0YXRlLmRhdGFzZXRfbmFtZS5maW5kSW5kZXgobiA9PiBuID09PSBkYXRhc2V0TmFtZSk7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAndHlwZVN0ZXAnLFxuICAgICAgICBjaG9zZW5fZGF0YXNldF9uYW1lOiBkYXRhc2V0TmFtZSxcbiAgICAgICAgY2hvc2VuX2RhdGFzZXRfcHJvcGVydHk6IGRhdGFzZXRQcm9wZXJ0eSxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbXG4gICAgICAgICAgICAgICAgc3RhcnRTdGVwLFxuICAgICAgICAgICAgICAgIGxhYmVsZXIoJ3Byb3BlcnR5U3RlcCcsICgpID0+IGRhdGFzZXRTdGVwKCksIGRhdGFzZXROYW1lKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFtcbiAgICAgICAgICAgICAgICAuLi5bcmFuZG9tU3RlcCwgY29ubmVjdGVkU3RlcCwgZml4ZWRTdGVwXVxuICAgICAgICAgICAgICAgICAgICAubWFwKGZ1biA9PiBsYWJlbGVyKGZ1bi5uYW1lLCAoKSA9PiBmdW4oZGF0YXNldFByb3BlcnR5KSwgZGF0YXNldFByb3BlcnR5KSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICBmb290ZXI6IHdpemFyZFByb3BzLmZvb3RlcixcbiAgICB9LCB0eXBlU3RlcF90ZW1wbGF0ZSk7XG59XG5cbi8vIHJhbmRvbVN0ZXAgcHJvcG9zZXMgYWdhaW4gdGhlIHByb3BlcnR5U3RlcCB3aGlsZSBlbmFibGluZyB0aGUgc2F2ZSBidXR0b25cbmZ1bmN0aW9uIHJhbmRvbVN0ZXAoZGF0YXNldFByb3BlcnR5KSB7XG4gICAgbGV0IGRhdGFzZXROYW1lID0gZGF0YXNldFByb3BlcnR5LnNwbGl0KCcuJylbMF07XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAncmFuZG9tU3RlcCcsXG4gICAgICAgIGNob3Nlbl9kYXRhc2V0X3Byb3BlcnR5OiBkYXRhc2V0UHJvcGVydHksXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgICAgICAgICBsYWJlbGVyKCdwcm9wZXJ0eVN0ZXAnLCAoKSA9PiBkYXRhc2V0U3RlcCgpLCBkYXRhc2V0TmFtZSksXG4gICAgICAgICAgICAgICAgbGFiZWxlcigndHlwZVN0ZXAnLCAoKSA9PiB0eXBlU3RlcChkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZm9yd2FyZDogW1xuICAgICAgICAgICAgICAgIC4uLltyYW5kb21TdGVwLCBjb25uZWN0ZWRTdGVwLCBmaXhlZFN0ZXBdXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuID0+IGxhYmVsZXIoZnVuLm5hbWUsICgpID0+IGZ1bihkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpKVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBmb290ZXI6IHdpemFyZFByb3BzLmZvb3RlcixcbiAgICB9LCB0eXBlU3RlcF90ZW1wbGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGNvbm5lY3RlZFN0ZXAoZGF0YXNldFByb3BlcnR5KSB7XG4gICAgbGV0IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggPSBkYXRhc2V0UHJvcGVydHkgKyAnLyc7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAnY29ubmVjdGVkU3RlcCcsXG4gICAgICAgIGNob3Nlbl9kYXRhc2V0X3Byb3BlcnR5OiBkYXRhc2V0UHJvcGVydHksXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgICAgICAgICBsYWJlbGVyKCd0eXBlU3RlcCcsICgpID0+IHR5cGVTdGVwKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbXG4gICAgICAgICAgICAgICAgLi4uZGF0YXNldEluZGV4ZXMoZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeClcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoYXJnLCBpbmRleCkgPT4gbGFiZWxlcignZXhpdFN0ZXAgJyArIGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggKyBpbmRleCwgZXhpdFN0ZXAoYXJnKSkpXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIGZvb3Rlcjogd2l6YXJkUHJvcHMuZm9vdGVyLFxuICAgIH0sIHRlbXBsYXRlQSk7XG59XG5cbmZ1bmN0aW9uIGZpeGVkU3RlcChkYXRhc2V0UHJvcGVydHkpIHtcbiAgICBsZXQgZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCA9IGRhdGFzZXRQcm9wZXJ0eSArICcjJztcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdmaXhlZFN0ZXAnLFxuICAgICAgICBjaG9zZW5fZGF0YXNldF9wcm9wZXJ0eTogZGF0YXNldFByb3BlcnR5LFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtcbiAgICAgICAgICAgICAgICBzdGFydFN0ZXAsXG4gICAgICAgICAgICAgICAgbGFiZWxlcigndHlwZVN0ZXAnLCAoKSA9PiB0eXBlU3RlcChkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZm9yd2FyZDogW1xuICAgICAgICAgICAgICAgIC4uLmRhdGFzZXRJbmRleGVzKGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXgpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKGFyZywgaW5kZXgpID0+IGxhYmVsZXIoJ2V4aXRTdGVwICcgKyBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4ICsgaW5kZXgsIGV4aXRTdGVwKGFyZykpKVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBmb290ZXI6IHdpemFyZFByb3BzLmZvb3RlcixcbiAgICB9LCB0ZW1wbGF0ZUIpO1xufVxuXG5mdW5jdGlvbiBleGl0U3RlcCh2YWx1ZSwgaW5kZXgpIHsgLy8gcmVhc29uc2ZvcmNvbG9nbmUuaW1hZ2UvMiAtLT4gJChyZWFzb25zZm9yY29sb2duZS5pbWFnZS8yKVxuICAgIGxldCByZXN1bHQgPSAoKSA9PiB7XG4gICAgICAgIGFsZXJ0KCckKCcgKyB2YWx1ZSArICcpJyk7XG4gICAgfTtcbiAgICByZXR1cm4gbGFiZWxlcignZXhpdFN0ZXAnLCByZXN1bHQsIGluZGV4KTtcbn1cblxuZnVuY3Rpb24gZGF0YXNldEluZGV4ZXMoZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCkgeyAvLyByZWFzb25zZm9yY29sb2duZS5pbWFnZSAtPiByZWFzb25zZm9yY29sb2duZS5pbWFnZS8yXG4gICAgbGV0IGRhdGFzZXROYW1lID0gZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeC5zcGxpdCgnLicpWzBdO1xuICAgIGxldCBkYXRhc2V0UG9zID0gc3RhdGUuZGF0YXNldF9uYW1lLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IGRhdGFzZXROYW1lKTtcbiAgICBsZXQgbnVtSW5zdGFuY2VzID0gc3RhdGUuZGF0YXNldFsnZGF0YXNldCMnICsgZGF0YXNldFBvc10ubGVuZ3RoO1xuICAgIHJldHVybiBbLi4uQXJyYXkobnVtSW5zdGFuY2VzKS5rZXlzKCldLm1hcChrZXkgPT4gZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCArIGtleSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlZFN0YXRlSWQoaWQpIHtcbiAgICBsZXQgcGllY2VzID0gaWQuc3BsaXQoJyMnKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50UG9zOiBwaWVjZXNbMV0sXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbGFiZWxlcihzdGVwTmFtZSwgZnVuLCBsYWJlbFZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1biwgJ25hbWUnLCB7XG4gICAgICAgIHZhbHVlOiBzdGVwTmFtZSArICcgJ1xuICAgICAgICArICgodHlwZW9mIGxhYmVsVmFsdWUgIT09ICd1bmRlZmluZWQnKSA/IGxhYmVsVmFsdWUgOiAnJylcbiAgICB9KTtcbiAgICByZXR1cm4gZnVuO1xufVxuIl19