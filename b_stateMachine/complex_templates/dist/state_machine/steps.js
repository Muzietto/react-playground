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

    function customvarStep(_, chosenVar) {
        return (0, _view2.default)({
            location: 'customvarStep',
            handlers: {
                backward: [startStep],
                forward: [..._initialState.initialState.customvar.map(customVar => labeler('exitStep', ev => customvarStep(ev, customVar), customVar))]
            },
            state: _initialState.initialState,
            footer: wizardProps.footer,
            chosen_var: chosenVar
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

    function randomStep(datasetProperty) {
        return (0, _view2.default)({
            location: 'randomStep',
            chosen_dataset_property: datasetProperty,
            handlers: {
                backward: [startStep, labeler('typeStep', () => typeStep(datasetProperty), datasetProperty)],
                forward: [labeler('exitStep', exitStep(datasetProperty), datasetProperty)]
            },
            footer: wizardProps.footer
        }, templateC);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9zdGF0ZV9tYWNoaW5lL3N0ZXBzLmpzIl0sIm5hbWVzIjpbInN0YXJ0U3RlcCIsIndpemFyZFByb3BzIiwiZm9vdGVyIiwiY2FuY2VsQnV0dG9uIiwib25DbGljayIsImFsZXJ0IiwiY2xhc3NOYW1lIiwicmVzdGFydEJ1dHRvbiIsInNhdmVCdXR0b24iLCJsb2NhdGlvbiIsImhhbmRsZXJzIiwiYmFja3dhcmQiLCJmb3J3YXJkIiwiY3VzdG9tdmFyU3RlcCIsImRhdGFzZXRTdGVwIiwic3RhdGUiLCJfIiwiY2hvc2VuVmFyIiwiY3VzdG9tdmFyIiwibWFwIiwiY3VzdG9tVmFyIiwibGFiZWxlciIsImV2IiwiY2hvc2VuX3ZhciIsIk9iamVjdCIsImtleXMiLCJkYXRhc2V0IiwiZGF0YXNldElkIiwiZGF0YXNldFBvc2l0aW9uIiwicGFyc2VkU3RhdGVJZCIsImN1cnJlbnRQb3MiLCJkYXRhc2V0TmFtZSIsImRhdGFzZXRfbmFtZSIsImRhdGFzZXRfa2V5cyIsImtleSIsInR5cGVTdGVwIiwiZGF0YXNldFByb3BlcnR5Iiwic3BsaXQiLCJmaW5kSW5kZXgiLCJuIiwiY2hvc2VuX2RhdGFzZXRfbmFtZSIsImNob3Nlbl9kYXRhc2V0X3Byb3BlcnR5IiwicmFuZG9tU3RlcCIsImNvbm5lY3RlZFN0ZXAiLCJmaXhlZFN0ZXAiLCJmdW4iLCJuYW1lIiwiZXhpdFN0ZXAiLCJ0ZW1wbGF0ZUMiLCJkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4IiwiZGF0YXNldEluZGV4ZXMiLCJhcmciLCJpbmRleCIsInRlbXBsYXRlQSIsInRlbXBsYXRlQiIsInZhbHVlIiwicmVzdWx0IiwiZGF0YXNldFBvcyIsIml0ZW0iLCJudW1JbnN0YW5jZXMiLCJsZW5ndGgiLCJBcnJheSIsImlkIiwicGllY2VzIiwic3RlcE5hbWUiLCJsYWJlbFZhbHVlIiwiZGVmaW5lUHJvcGVydHkiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7WUFnQ2dCQSxTLEdBQUFBLFM7Ozs7Ozs7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QWdDTixHQUFoQyxDQUFvQ2UsT0FBT2UsNEJBQTRCZixHQUF2RSxDQUFQO0FBQ0g7O0FBRUQsYUFBU0wsYUFBVCxDQUF1QmlDLEVBQXZCLEVBQTJCO0FBQ3ZCLFlBQUlDLFNBQVNELEdBQUd6QixLQUFILENBQVMsR0FBVCxDQUFiO0FBQ0EsZUFBTztBQUNIUCx3QkFBWWlDLE9BQU8sQ0FBUDtBQURULFNBQVA7QUFHSDs7QUFFRCxhQUFTMUMsT0FBVCxDQUFpQjJDLFFBQWpCLEVBQTJCbkIsR0FBM0IsRUFBZ0NvQixVQUFoQyxFQUE0QztBQUN4Q3pDLGVBQU8wQyxjQUFQLENBQXNCckIsR0FBdEIsRUFBMkIsTUFBM0IsRUFBbUM7QUFDL0JVLG1CQUFPUyxXQUFXLEdBQVgsSUFDSCxPQUFPQyxVQUFQLEtBQXNCLFdBQXZCLEdBQXNDQSxVQUF0QyxHQUFtRCxFQUQvQztBQUR3QixTQUFuQztBQUlBLGVBQU9wQixHQUFQO0FBQ0giLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7aW5pdGlhbFN0YXRlIGFzIHN0YXRlfSBmcm9tICcuL2luaXRpYWxTdGF0ZSc7XG5pbXBvcnQgY2hvaWNlIGZyb20gJy4vdmlldyc7XG5pbXBvcnQgc3RhcnRTdGVwX3RlbXBsYXRlIGZyb20gJy4uL3RlbXBsYXRlL3N0YXJ0U3RlcF90ZW1wbGF0ZSc7XG5pbXBvcnQgY3VzdG9tdmFyU3RlcF90ZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZS9jdXN0b212YXJTdGVwX3RlbXBsYXRlJztcbmltcG9ydCBkYXRhc2V0U3RlcF90ZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZS9kYXRhc2V0U3RlcF90ZW1wbGF0ZSc7XG5pbXBvcnQgdHlwZVN0ZXBfdGVtcGxhdGUgZnJvbSAnLi4vdGVtcGxhdGUvdHlwZVN0ZXBfdGVtcGxhdGUnO1xuXG5sZXQgd2l6YXJkUHJvcHMgPSB7XG4gICAgZm9vdGVyOiB7XG4gICAgICAgIGNhbmNlbEJ1dHRvbjoge1xuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdjYW5jZWwgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdsZWZ0X2J1dHRvbicsXG4gICAgICAgIH0sXG4gICAgICAgIHJlc3RhcnRCdXR0b246IHtcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydCgncmVzdGFydCBidXR0b24gY2xpY2tlZCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2xlZnRfYnV0dG9uJyxcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZUJ1dHRvbjoge1xuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdTQVZFIGJ1dHRvbiBjbGlja2VkJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAncmlnaHRfYnV0dG9uJyxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0U3RlcCgpIHtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdzdGFydFN0ZXAnLFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtdLFxuICAgICAgICAgICAgZm9yd2FyZDogW2N1c3RvbXZhclN0ZXAsIGRhdGFzZXRTdGVwXSxcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICBmb290ZXI6IHdpemFyZFByb3BzLmZvb3RlcixcbiAgICB9LCBzdGFydFN0ZXBfdGVtcGxhdGUpO1xufVxuXG5mdW5jdGlvbiBjdXN0b212YXJTdGVwKF8sIGNob3NlblZhcikge1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ2N1c3RvbXZhclN0ZXAnLFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtzdGFydFN0ZXAsXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFsuLi5zdGF0ZS5jdXN0b212YXJcbiAgICAgICAgICAgICAgICAubWFwKGN1c3RvbVZhciA9PiBsYWJlbGVyKCdleGl0U3RlcCcsIGV2ID0+IGN1c3RvbXZhclN0ZXAoZXYsIGN1c3RvbVZhciksIGN1c3RvbVZhcikpXVxuICAgICAgICB9LFxuICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgIGZvb3Rlcjogd2l6YXJkUHJvcHMuZm9vdGVyLFxuICAgICAgICBjaG9zZW5fdmFyOiBjaG9zZW5WYXIsXG4gICAgfSwgY3VzdG9tdmFyU3RlcF90ZW1wbGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGRhdGFzZXRTdGVwKCkge1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ2RhdGFzZXRTdGVwJyxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbc3RhcnRTdGVwLF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbIC8vIG9uZSBhcnJheSBmb3IgZWFjaCBkYXRhc2V0XG4gICAgICAgICAgICAgICAgLi4uT2JqZWN0LmtleXMoc3RhdGUuZGF0YXNldClcbiAgICAgICAgICAgICAgICAgICAgLm1hcChkYXRhc2V0SWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFzZXRQb3NpdGlvbiA9IHBhcnNlZFN0YXRlSWQoZGF0YXNldElkKS5jdXJyZW50UG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFzZXROYW1lID0gc3RhdGUuZGF0YXNldF9uYW1lW2RhdGFzZXRQb3NpdGlvbl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLmRhdGFzZXRfa2V5c1tkYXRhc2V0UG9zaXRpb25dXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoa2V5ID0+IGRhdGFzZXROYW1lICsgJy4nICsga2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoa2V5ID0+IGxhYmVsZXIoJ3R5cGVTdGVwJywgKCkgPT4gdHlwZVN0ZXAoa2V5KSwga2V5KSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgZm9vdGVyOiB3aXphcmRQcm9wcy5mb290ZXIsXG4gICAgfSwgZGF0YXNldFN0ZXBfdGVtcGxhdGUpO1xufVxuXG5mdW5jdGlvbiB0eXBlU3RlcChkYXRhc2V0UHJvcGVydHkpIHtcbiAgICBsZXQgZGF0YXNldE5hbWUgPSBkYXRhc2V0UHJvcGVydHkuc3BsaXQoJy4nKVswXTtcbiAgICBsZXQgZGF0YXNldElkID0gJ2RhdGFzZXQjJyArIHN0YXRlLmRhdGFzZXRfbmFtZS5maW5kSW5kZXgobiA9PiBuID09PSBkYXRhc2V0TmFtZSk7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAndHlwZVN0ZXAnLFxuICAgICAgICBjaG9zZW5fZGF0YXNldF9uYW1lOiBkYXRhc2V0TmFtZSxcbiAgICAgICAgY2hvc2VuX2RhdGFzZXRfcHJvcGVydHk6IGRhdGFzZXRQcm9wZXJ0eSxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbXG4gICAgICAgICAgICAgICAgc3RhcnRTdGVwLFxuICAgICAgICAgICAgICAgIGxhYmVsZXIoJ3Byb3BlcnR5U3RlcCcsICgpID0+IGRhdGFzZXRTdGVwKCksIGRhdGFzZXROYW1lKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFtcbiAgICAgICAgICAgICAgICAuLi5bcmFuZG9tU3RlcCwgY29ubmVjdGVkU3RlcCwgZml4ZWRTdGVwXVxuICAgICAgICAgICAgICAgICAgICAubWFwKGZ1biA9PiBsYWJlbGVyKGZ1bi5uYW1lLCAoKSA9PiBmdW4oZGF0YXNldFByb3BlcnR5KSwgZGF0YXNldFByb3BlcnR5KSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICBmb290ZXI6IHdpemFyZFByb3BzLmZvb3RlcixcbiAgICB9LCB0eXBlU3RlcF90ZW1wbGF0ZSk7XG59XG5cbmZ1bmN0aW9uIHJhbmRvbVN0ZXAoZGF0YXNldFByb3BlcnR5KSB7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAncmFuZG9tU3RlcCcsXG4gICAgICAgIGNob3Nlbl9kYXRhc2V0X3Byb3BlcnR5OiBkYXRhc2V0UHJvcGVydHksXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgICAgICAgICBsYWJlbGVyKCd0eXBlU3RlcCcsICgpID0+IHR5cGVTdGVwKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbXG4gICAgICAgICAgICAgICAgbGFiZWxlcignZXhpdFN0ZXAnLCBleGl0U3RlcChkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpLFxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBmb290ZXI6IHdpemFyZFByb3BzLmZvb3RlcixcbiAgICB9LCB0ZW1wbGF0ZUMpO1xufVxuXG5mdW5jdGlvbiBjb25uZWN0ZWRTdGVwKGRhdGFzZXRQcm9wZXJ0eSkge1xuICAgIGxldCBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4ID0gZGF0YXNldFByb3BlcnR5ICsgJy8nO1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ2Nvbm5lY3RlZFN0ZXAnLFxuICAgICAgICBjaG9zZW5fZGF0YXNldF9wcm9wZXJ0eTogZGF0YXNldFByb3BlcnR5LFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtcbiAgICAgICAgICAgICAgICBzdGFydFN0ZXAsXG4gICAgICAgICAgICAgICAgbGFiZWxlcigndHlwZVN0ZXAnLCAoKSA9PiB0eXBlU3RlcChkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZm9yd2FyZDogW1xuICAgICAgICAgICAgICAgIC4uLmRhdGFzZXRJbmRleGVzKGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXgpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKGFyZywgaW5kZXgpID0+IGxhYmVsZXIoJ2V4aXRTdGVwICcgKyBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4ICsgaW5kZXgsIGV4aXRTdGVwKGFyZykpKVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBmb290ZXI6IHdpemFyZFByb3BzLmZvb3RlcixcbiAgICB9LCB0ZW1wbGF0ZUEpO1xufVxuXG5mdW5jdGlvbiBmaXhlZFN0ZXAoZGF0YXNldFByb3BlcnR5KSB7XG4gICAgbGV0IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggPSBkYXRhc2V0UHJvcGVydHkgKyAnIyc7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAnZml4ZWRTdGVwJyxcbiAgICAgICAgY2hvc2VuX2RhdGFzZXRfcHJvcGVydHk6IGRhdGFzZXRQcm9wZXJ0eSxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbXG4gICAgICAgICAgICAgICAgc3RhcnRTdGVwLFxuICAgICAgICAgICAgICAgIGxhYmVsZXIoJ3R5cGVTdGVwJywgKCkgPT4gdHlwZVN0ZXAoZGF0YXNldFByb3BlcnR5KSwgZGF0YXNldFByb3BlcnR5KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFtcbiAgICAgICAgICAgICAgICAuLi5kYXRhc2V0SW5kZXhlcyhkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4KVxuICAgICAgICAgICAgICAgICAgICAubWFwKChhcmcsIGluZGV4KSA9PiBsYWJlbGVyKCdleGl0U3RlcCAnICsgZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCArIGluZGV4LCBleGl0U3RlcChhcmcpKSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgZm9vdGVyOiB3aXphcmRQcm9wcy5mb290ZXIsXG4gICAgfSwgdGVtcGxhdGVCKTtcbn1cblxuZnVuY3Rpb24gZXhpdFN0ZXAodmFsdWUsIGluZGV4KSB7IC8vIHJlYXNvbnNmb3Jjb2xvZ25lLmltYWdlLzIgLS0+ICQocmVhc29uc2ZvcmNvbG9nbmUuaW1hZ2UvMilcbiAgICBsZXQgcmVzdWx0ID0gKCkgPT4ge1xuICAgICAgICBhbGVydCgnJCgnICsgdmFsdWUgKyAnKScpO1xuICAgIH07XG4gICAgcmV0dXJuIGxhYmVsZXIoJ2V4aXRTdGVwJywgcmVzdWx0LCBpbmRleCk7XG59XG5cbmZ1bmN0aW9uIGRhdGFzZXRJbmRleGVzKGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXgpIHsgLy8gcmVhc29uc2ZvcmNvbG9nbmUuaW1hZ2UgLT4gcmVhc29uc2ZvcmNvbG9nbmUuaW1hZ2UvMlxuICAgIGxldCBkYXRhc2V0TmFtZSA9IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXguc3BsaXQoJy4nKVswXTtcbiAgICBsZXQgZGF0YXNldFBvcyA9IHN0YXRlLmRhdGFzZXRfbmFtZS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSBkYXRhc2V0TmFtZSk7XG4gICAgbGV0IG51bUluc3RhbmNlcyA9IHN0YXRlLmRhdGFzZXRbJ2RhdGFzZXQjJyArIGRhdGFzZXRQb3NdLmxlbmd0aDtcbiAgICByZXR1cm4gWy4uLkFycmF5KG51bUluc3RhbmNlcykua2V5cygpXS5tYXAoa2V5ID0+IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggKyBrZXkpO1xufVxuXG5mdW5jdGlvbiBwYXJzZWRTdGF0ZUlkKGlkKSB7XG4gICAgbGV0IHBpZWNlcyA9IGlkLnNwbGl0KCcjJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudFBvczogcGllY2VzWzFdLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGxhYmVsZXIoc3RlcE5hbWUsIGZ1biwgbGFiZWxWYWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW4sICduYW1lJywge1xuICAgICAgICB2YWx1ZTogc3RlcE5hbWUgKyAnICdcbiAgICAgICAgKyAoKHR5cGVvZiBsYWJlbFZhbHVlICE9PSAndW5kZWZpbmVkJykgPyBsYWJlbFZhbHVlIDogJycpXG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bjtcbn1cbiJdfQ==