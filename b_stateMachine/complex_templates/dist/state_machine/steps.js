define(['exports', './initialState', './view', '../template/startStep_template', '../template/customvarStep_template'], function (exports, _initialState, _view, _startStep_template, _customvarStep_template) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.startStep = startStep;

    var _view2 = _interopRequireDefault(_view);

    var _startStep_template2 = _interopRequireDefault(_startStep_template);

    var _customvarStep_template2 = _interopRequireDefault(_customvarStep_template);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    let wizardProps = {
        body: {
            body_renderer: undefined
        },
        summary: {
            step: 1
        },
        core: {
            core_renderer: undefined,
            message: 'hello, world!'
        },
        footer: {
            cancelButton: {
                disabled: true,
                onClick: () => {
                    alert('cancel button clicked');
                },
                className: 'left_button'
            },
            saveButton: {
                disabled: true,
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
            footer: wizardProps.footer
        }, _startStep_template2.default);
    }

    function customvarStep() {
        return (0, _view2.default)({
            location: 'customvarStep',
            handlers: {
                backward: [startStep],
                forward: [..._initialState.initialState.customvar.map(customVar => labeler('exitStep', exitStep(customVar), customVar))]
            },
            footer: wizardProps.footer
        }, _customvarStep_template2.default);
    }

    function datasetStep() {
        return (0, _view2.default)({
            location: 'datasetStep',
            handlers: {
                backward: [startStep],
                forward: [...Object.keys(_initialState.initialState.dataset).map(key => labeler('propertyStep', () => propertyStep(key), _initialState.initialState.dataset_name[parsedStateId(key).currentPos]))]
            }
        }, templateC);
    }

    function propertyStep(datasetId) {
        let datasetName = _initialState.initialState.dataset_name[parsedStateId(datasetId).currentPos];
        return (0, _view2.default)({
            location: 'propertyStep',
            handlers: {
                backward: [startStep, labeler('datasetStep', () => datasetStep(), datasetName)],
                forward: [..._initialState.initialState.dataset_keys[parsedStateId(datasetId).currentPos].map(key => datasetName + '.' + key).map(key => labeler('typeStep', () => typeStep(key), key))]
            }
        }, templateA);
    }

    function typeStep(datasetProperty) {
        let datasetName = datasetProperty.split('.')[0];
        let datasetId = 'dataset#' + _initialState.initialState.dataset_name.findIndex(n => n === datasetName);
        return (0, _view2.default)({
            location: 'typeStep',
            handlers: {
                backward: [startStep, labeler('propertyStep', () => propertyStep(datasetId), datasetName)],
                forward: [...[randomStep, connectedStep, fixedStep].map(fun => labeler(fun.name, () => fun(datasetProperty), datasetProperty))]
            }
        }, templateB);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9zdGF0ZV9tYWNoaW5lL3N0ZXBzLmpzIl0sIm5hbWVzIjpbInN0YXJ0U3RlcCIsIndpemFyZFByb3BzIiwiYm9keSIsImJvZHlfcmVuZGVyZXIiLCJ1bmRlZmluZWQiLCJzdW1tYXJ5Iiwic3RlcCIsImNvcmUiLCJjb3JlX3JlbmRlcmVyIiwibWVzc2FnZSIsImZvb3RlciIsImNhbmNlbEJ1dHRvbiIsImRpc2FibGVkIiwib25DbGljayIsImFsZXJ0IiwiY2xhc3NOYW1lIiwic2F2ZUJ1dHRvbiIsImxvY2F0aW9uIiwiaGFuZGxlcnMiLCJiYWNrd2FyZCIsImZvcndhcmQiLCJjdXN0b212YXJTdGVwIiwiZGF0YXNldFN0ZXAiLCJjdXN0b212YXIiLCJtYXAiLCJjdXN0b21WYXIiLCJsYWJlbGVyIiwiZXhpdFN0ZXAiLCJPYmplY3QiLCJrZXlzIiwiZGF0YXNldCIsImtleSIsInByb3BlcnR5U3RlcCIsImRhdGFzZXRfbmFtZSIsInBhcnNlZFN0YXRlSWQiLCJjdXJyZW50UG9zIiwidGVtcGxhdGVDIiwiZGF0YXNldElkIiwiZGF0YXNldE5hbWUiLCJkYXRhc2V0X2tleXMiLCJ0eXBlU3RlcCIsInRlbXBsYXRlQSIsImRhdGFzZXRQcm9wZXJ0eSIsInNwbGl0IiwiZmluZEluZGV4IiwibiIsInJhbmRvbVN0ZXAiLCJjb25uZWN0ZWRTdGVwIiwiZml4ZWRTdGVwIiwiZnVuIiwibmFtZSIsInRlbXBsYXRlQiIsImRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXgiLCJkYXRhc2V0SW5kZXhlcyIsImFyZyIsImluZGV4IiwidmFsdWUiLCJyZXN1bHQiLCJkYXRhc2V0UG9zIiwiaXRlbSIsIm51bUluc3RhbmNlcyIsImxlbmd0aCIsIkFycmF5IiwiaWQiLCJwaWVjZXMiLCJzdGVwTmFtZSIsImxhYmVsVmFsdWUiLCJkZWZpbmVQcm9wZXJ0eSJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztZQW9DZ0JBLFMsR0FBQUEsUzs7Ozs7Ozs7Ozs7Ozs7QUE3QmhC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QW9CL0IsSUFBcEIsRUFBSixFQUFnQ0wsR0FBaEMsQ0FBb0NPLE9BQU9xQiw0QkFBNEJyQixHQUF2RSxDQUFQO0FBQ0g7O0FBRUQsYUFBU0csYUFBVCxDQUF1QjZCLEVBQXZCLEVBQTJCO0FBQ3ZCLFlBQUlDLFNBQVNELEdBQUdwQixLQUFILENBQVMsR0FBVCxDQUFiO0FBQ0EsZUFBTztBQUNIUix3QkFBWTZCLE9BQU8sQ0FBUDtBQURULFNBQVA7QUFHSDs7QUFFRCxhQUFTdEMsT0FBVCxDQUFpQnVDLFFBQWpCLEVBQTJCaEIsR0FBM0IsRUFBZ0NpQixVQUFoQyxFQUE0QztBQUN4Q3RDLGVBQU91QyxjQUFQLENBQXNCbEIsR0FBdEIsRUFBMkIsTUFBM0IsRUFBbUM7QUFDL0JPLG1CQUFPUyxXQUFXLEdBQVgsSUFDSCxPQUFPQyxVQUFQLEtBQXNCLFdBQXZCLEdBQXNDQSxVQUF0QyxHQUFtRCxFQUQvQztBQUR3QixTQUFuQztBQUlBLGVBQU9qQixHQUFQO0FBQ0giLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7aW5pdGlhbFN0YXRlIGFzIHN0YXRlfSBmcm9tICcuL2luaXRpYWxTdGF0ZSc7XG5pbXBvcnQgY2hvaWNlIGZyb20gJy4vdmlldyc7XG5pbXBvcnQgc3RhcnRTdGVwX3RlbXBsYXRlIGZyb20gJy4uL3RlbXBsYXRlL3N0YXJ0U3RlcF90ZW1wbGF0ZSc7XG5pbXBvcnQgY3VzdG9tdmFyU3RlcF90ZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZS9jdXN0b212YXJTdGVwX3RlbXBsYXRlJztcblxubGV0IHdpemFyZFByb3BzID0ge1xuICAgIGJvZHk6IHtcbiAgICAgICAgYm9keV9yZW5kZXJlcjogdW5kZWZpbmVkLFxuICAgIH0sXG4gICAgc3VtbWFyeToge1xuICAgICAgICBzdGVwOiAxLFxuICAgIH0sXG4gICAgY29yZToge1xuICAgICAgICBjb3JlX3JlbmRlcmVyOiB1bmRlZmluZWQsXG4gICAgICAgIG1lc3NhZ2U6ICdoZWxsbywgd29ybGQhJyxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgICBjYW5jZWxCdXR0b246IHtcbiAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdjYW5jZWwgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdsZWZ0X2J1dHRvbicsXG4gICAgICAgIH0sXG4gICAgICAgIHNhdmVCdXR0b246IHtcbiAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdTQVZFIGJ1dHRvbiBjbGlja2VkJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAncmlnaHRfYnV0dG9uJyxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0U3RlcCgpIHtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdzdGFydFN0ZXAnLFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtdLFxuICAgICAgICAgICAgZm9yd2FyZDogW2N1c3RvbXZhclN0ZXAsIGRhdGFzZXRTdGVwXSxcbiAgICAgICAgfSxcbiAgICAgICAgZm9vdGVyOiB3aXphcmRQcm9wcy5mb290ZXIsXG4gICAgfSwgc3RhcnRTdGVwX3RlbXBsYXRlKTtcbn1cblxuZnVuY3Rpb24gY3VzdG9tdmFyU3RlcCgpIHtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdjdXN0b212YXJTdGVwJyxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbc3RhcnRTdGVwLF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbLi4uc3RhdGUuY3VzdG9tdmFyXG4gICAgICAgICAgICAgICAgLm1hcChjdXN0b21WYXIgPT4gbGFiZWxlcignZXhpdFN0ZXAnLCBleGl0U3RlcChjdXN0b21WYXIpLCBjdXN0b21WYXIpKV1cbiAgICAgICAgfSxcbiAgICAgICAgZm9vdGVyOiB3aXphcmRQcm9wcy5mb290ZXIsXG4gICAgfSwgY3VzdG9tdmFyU3RlcF90ZW1wbGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGRhdGFzZXRTdGVwKCkge1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ2RhdGFzZXRTdGVwJyxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbc3RhcnRTdGVwLF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbXG4gICAgICAgICAgICAgICAgLi4uT2JqZWN0LmtleXMoc3RhdGUuZGF0YXNldClcbiAgICAgICAgICAgICAgICAgICAgLm1hcChrZXkgPT4gbGFiZWxlcigncHJvcGVydHlTdGVwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHByb3BlcnR5U3RlcChrZXkpLCBzdGF0ZS5kYXRhc2V0X25hbWVbcGFyc2VkU3RhdGVJZChrZXkpLmN1cnJlbnRQb3NdKSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICB9LCB0ZW1wbGF0ZUMpO1xufVxuXG5mdW5jdGlvbiBwcm9wZXJ0eVN0ZXAoZGF0YXNldElkKSB7XG4gICAgbGV0IGRhdGFzZXROYW1lID0gc3RhdGUuZGF0YXNldF9uYW1lW3BhcnNlZFN0YXRlSWQoZGF0YXNldElkKS5jdXJyZW50UG9zXTtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdwcm9wZXJ0eVN0ZXAnLFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtcbiAgICAgICAgICAgICAgICBzdGFydFN0ZXAsXG4gICAgICAgICAgICAgICAgbGFiZWxlcignZGF0YXNldFN0ZXAnLCAoKSA9PiBkYXRhc2V0U3RlcCgpLCBkYXRhc2V0TmFtZSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUuZGF0YXNldF9rZXlzW3BhcnNlZFN0YXRlSWQoZGF0YXNldElkKS5jdXJyZW50UG9zXVxuICAgICAgICAgICAgICAgICAgICAubWFwKGtleSA9PiBkYXRhc2V0TmFtZSArICcuJyArIGtleSlcbiAgICAgICAgICAgICAgICAgICAgLm1hcChrZXkgPT4gbGFiZWxlcigndHlwZVN0ZXAnLCAoKSA9PiB0eXBlU3RlcChrZXkpLCBrZXkpKVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgIH0sIHRlbXBsYXRlQSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVTdGVwKGRhdGFzZXRQcm9wZXJ0eSkge1xuICAgIGxldCBkYXRhc2V0TmFtZSA9IGRhdGFzZXRQcm9wZXJ0eS5zcGxpdCgnLicpWzBdO1xuICAgIGxldCBkYXRhc2V0SWQgPSAnZGF0YXNldCMnICsgc3RhdGUuZGF0YXNldF9uYW1lLmZpbmRJbmRleChuID0+IG4gPT09IGRhdGFzZXROYW1lKTtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICd0eXBlU3RlcCcsXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgICAgICAgICBsYWJlbGVyKCdwcm9wZXJ0eVN0ZXAnLCAoKSA9PiBwcm9wZXJ0eVN0ZXAoZGF0YXNldElkKSwgZGF0YXNldE5hbWUpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZm9yd2FyZDogW1xuICAgICAgICAgICAgICAgIC4uLltyYW5kb21TdGVwLCBjb25uZWN0ZWRTdGVwLCBmaXhlZFN0ZXBdXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuID0+IGxhYmVsZXIoZnVuLm5hbWUsICgpID0+IGZ1bihkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpKVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgIH0sIHRlbXBsYXRlQik7XG59XG5cbmZ1bmN0aW9uIHJhbmRvbVN0ZXAoZGF0YXNldFByb3BlcnR5KSB7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAncmFuZG9tU3RlcCcsXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgICAgICAgICBsYWJlbGVyKCd0eXBlU3RlcCcsICgpID0+IHR5cGVTdGVwKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbXG4gICAgICAgICAgICAgICAgbGFiZWxlcignZXhpdFN0ZXAnLCBleGl0U3RlcChkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpLFxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgIH0sIHRlbXBsYXRlQyk7XG59XG5cbmZ1bmN0aW9uIGNvbm5lY3RlZFN0ZXAoZGF0YXNldFByb3BlcnR5KSB7XG4gICAgbGV0IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggPSBkYXRhc2V0UHJvcGVydHkgKyAnLyc7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAnY29ubmVjdGVkU3RlcCcsXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgICAgICAgICBsYWJlbGVyKCd0eXBlU3RlcCcsICgpID0+IHR5cGVTdGVwKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbXG4gICAgICAgICAgICAgICAgLi4uZGF0YXNldEluZGV4ZXMoZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeClcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoYXJnLCBpbmRleCkgPT4gbGFiZWxlcignZXhpdFN0ZXAgJyArIGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggKyBpbmRleCwgZXhpdFN0ZXAoYXJnKSkpXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgfSwgdGVtcGxhdGVBKTtcbn1cblxuZnVuY3Rpb24gZml4ZWRTdGVwKGRhdGFzZXRQcm9wZXJ0eSkge1xuICAgIGxldCBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4ID0gZGF0YXNldFByb3BlcnR5ICsgJyMnO1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ2ZpeGVkU3RlcCcsXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgICAgICAgICBsYWJlbGVyKCd0eXBlU3RlcCcsICgpID0+IHR5cGVTdGVwKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbXG4gICAgICAgICAgICAgICAgLi4uZGF0YXNldEluZGV4ZXMoZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeClcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoYXJnLCBpbmRleCkgPT4gbGFiZWxlcignZXhpdFN0ZXAgJyArIGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggKyBpbmRleCwgZXhpdFN0ZXAoYXJnKSkpXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgfSwgdGVtcGxhdGVCKTtcbn1cblxuZnVuY3Rpb24gZXhpdFN0ZXAodmFsdWUsIGluZGV4KSB7IC8vIHJlYXNvbnNmb3Jjb2xvZ25lLmltYWdlLzIgLS0+ICQocmVhc29uc2ZvcmNvbG9nbmUuaW1hZ2UvMilcbiAgICBsZXQgcmVzdWx0ID0gKCkgPT4ge1xuICAgICAgICBhbGVydCgnJCgnICsgdmFsdWUgKyAnKScpO1xuICAgIH07XG4gICAgcmV0dXJuIGxhYmVsZXIoJ2V4aXRTdGVwJywgcmVzdWx0LCBpbmRleCk7XG59XG5cbmZ1bmN0aW9uIGRhdGFzZXRJbmRleGVzKGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXgpIHsgLy8gcmVhc29uc2ZvcmNvbG9nbmUuaW1hZ2UgLT4gcmVhc29uc2ZvcmNvbG9nbmUuaW1hZ2UvMlxuICAgIGxldCBkYXRhc2V0TmFtZSA9IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXguc3BsaXQoJy4nKVswXTtcbiAgICBsZXQgZGF0YXNldFBvcyA9IHN0YXRlLmRhdGFzZXRfbmFtZS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSBkYXRhc2V0TmFtZSk7XG4gICAgbGV0IG51bUluc3RhbmNlcyA9IHN0YXRlLmRhdGFzZXRbJ2RhdGFzZXQjJyArIGRhdGFzZXRQb3NdLmxlbmd0aDtcbiAgICByZXR1cm4gWy4uLkFycmF5KG51bUluc3RhbmNlcykua2V5cygpXS5tYXAoa2V5ID0+IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggKyBrZXkpO1xufVxuXG5mdW5jdGlvbiBwYXJzZWRTdGF0ZUlkKGlkKSB7XG4gICAgbGV0IHBpZWNlcyA9IGlkLnNwbGl0KCcjJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudFBvczogcGllY2VzWzFdLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGxhYmVsZXIoc3RlcE5hbWUsIGZ1biwgbGFiZWxWYWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW4sICduYW1lJywge1xuICAgICAgICB2YWx1ZTogc3RlcE5hbWUgKyAnICdcbiAgICAgICAgKyAoKHR5cGVvZiBsYWJlbFZhbHVlICE9PSAndW5kZWZpbmVkJykgPyBsYWJlbFZhbHVlIDogJycpXG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bjtcbn1cbiJdfQ==