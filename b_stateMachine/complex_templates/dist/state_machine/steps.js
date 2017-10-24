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

    function customvarStep() {
        return (0, _view2.default)({
            location: 'customvarStep',
            handlers: {
                backward: [startStep],
                forward: [..._initialState.initialState.customvar.map(customVar => labeler('exitStep', exitStep(customVar), customVar))]
            },
            state: _initialState.initialState,
            footer: wizardProps.footer
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9zdGF0ZV9tYWNoaW5lL3N0ZXBzLmpzIl0sIm5hbWVzIjpbInN0YXJ0U3RlcCIsIndpemFyZFByb3BzIiwiZm9vdGVyIiwiY2FuY2VsQnV0dG9uIiwib25DbGljayIsImFsZXJ0IiwiY2xhc3NOYW1lIiwicmVzdGFydEJ1dHRvbiIsInNhdmVCdXR0b24iLCJsb2NhdGlvbiIsImhhbmRsZXJzIiwiYmFja3dhcmQiLCJmb3J3YXJkIiwiY3VzdG9tdmFyU3RlcCIsImRhdGFzZXRTdGVwIiwic3RhdGUiLCJjdXN0b212YXIiLCJtYXAiLCJjdXN0b21WYXIiLCJsYWJlbGVyIiwiZXhpdFN0ZXAiLCJPYmplY3QiLCJrZXlzIiwiZGF0YXNldCIsImRhdGFzZXRJZCIsImRhdGFzZXRQb3NpdGlvbiIsInBhcnNlZFN0YXRlSWQiLCJjdXJyZW50UG9zIiwiZGF0YXNldE5hbWUiLCJkYXRhc2V0X25hbWUiLCJkYXRhc2V0X2tleXMiLCJrZXkiLCJ0eXBlU3RlcCIsImRhdGFzZXRQcm9wZXJ0eSIsInNwbGl0IiwiZmluZEluZGV4IiwibiIsImNob3Nlbl9kYXRhc2V0X25hbWUiLCJjaG9zZW5fZGF0YXNldF9wcm9wZXJ0eSIsInJhbmRvbVN0ZXAiLCJjb25uZWN0ZWRTdGVwIiwiZml4ZWRTdGVwIiwiZnVuIiwibmFtZSIsInRlbXBsYXRlQyIsImRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXgiLCJkYXRhc2V0SW5kZXhlcyIsImFyZyIsImluZGV4IiwidGVtcGxhdGVBIiwidGVtcGxhdGVCIiwidmFsdWUiLCJyZXN1bHQiLCJkYXRhc2V0UG9zIiwiaXRlbSIsIm51bUluc3RhbmNlcyIsImxlbmd0aCIsIkFycmF5IiwiaWQiLCJwaWVjZXMiLCJzdGVwTmFtZSIsImxhYmVsVmFsdWUiLCJkZWZpbmVQcm9wZXJ0eSJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztZQWdDZ0JBLFMsR0FBQUEsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdkJoQixRQUFJQyxjQUFjO0FBQ2RD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SUMsU0FBU0QsR0FBR3hCLEtBQUgsQ0FBUyxHQUFULENBQWI7QUFDQSxlQUFPO0FBQ0hQLHdCQUFZZ0MsT0FBTyxDQUFQO0FBRFQsU0FBUDtBQUdIOztBQUVELGFBQVN4QyxPQUFULENBQWlCeUMsUUFBakIsRUFBMkJsQixHQUEzQixFQUFnQ21CLFVBQWhDLEVBQTRDO0FBQ3hDeEMsZUFBT3lDLGNBQVAsQ0FBc0JwQixHQUF0QixFQUEyQixNQUEzQixFQUFtQztBQUMvQlMsbUJBQU9TLFdBQVcsR0FBWCxJQUNILE9BQU9DLFVBQVAsS0FBc0IsV0FBdkIsR0FBc0NBLFVBQXRDLEdBQW1ELEVBRC9DO0FBRHdCLFNBQW5DO0FBSUEsZUFBT25CLEdBQVA7QUFDSCIsImZpbGUiOiJzdGVwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtpbml0aWFsU3RhdGUgYXMgc3RhdGV9IGZyb20gJy4vaW5pdGlhbFN0YXRlJztcbmltcG9ydCBjaG9pY2UgZnJvbSAnLi92aWV3JztcbmltcG9ydCBzdGFydFN0ZXBfdGVtcGxhdGUgZnJvbSAnLi4vdGVtcGxhdGUvc3RhcnRTdGVwX3RlbXBsYXRlJztcbmltcG9ydCBjdXN0b212YXJTdGVwX3RlbXBsYXRlIGZyb20gJy4uL3RlbXBsYXRlL2N1c3RvbXZhclN0ZXBfdGVtcGxhdGUnO1xuaW1wb3J0IGRhdGFzZXRTdGVwX3RlbXBsYXRlIGZyb20gJy4uL3RlbXBsYXRlL2RhdGFzZXRTdGVwX3RlbXBsYXRlJztcbmltcG9ydCB0eXBlU3RlcF90ZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZS90eXBlU3RlcF90ZW1wbGF0ZSc7XG5cbmxldCB3aXphcmRQcm9wcyA9IHtcbiAgICBmb290ZXI6IHtcbiAgICAgICAgY2FuY2VsQnV0dG9uOiB7XG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ2NhbmNlbCBidXR0b24gY2xpY2tlZCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2xlZnRfYnV0dG9uJyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVzdGFydEJ1dHRvbjoge1xuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdyZXN0YXJ0IGJ1dHRvbiBjbGlja2VkJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbGVmdF9idXR0b24nLFxuICAgICAgICB9LFxuICAgICAgICBzYXZlQnV0dG9uOiB7XG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1NBVkUgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdyaWdodF9idXR0b24nLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRTdGVwKCkge1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ3N0YXJ0U3RlcCcsXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW10sXG4gICAgICAgICAgICBmb3J3YXJkOiBbY3VzdG9tdmFyU3RlcCwgZGF0YXNldFN0ZXBdLFxuICAgICAgICB9LFxuICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgIGZvb3Rlcjogd2l6YXJkUHJvcHMuZm9vdGVyLFxuICAgIH0sIHN0YXJ0U3RlcF90ZW1wbGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGN1c3RvbXZhclN0ZXAoKSB7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAnY3VzdG9tdmFyU3RlcCcsXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW3N0YXJ0U3RlcCxdLFxuICAgICAgICAgICAgZm9yd2FyZDogWy4uLnN0YXRlLmN1c3RvbXZhclxuICAgICAgICAgICAgICAgIC5tYXAoY3VzdG9tVmFyID0+IGxhYmVsZXIoJ2V4aXRTdGVwJywgZXhpdFN0ZXAoY3VzdG9tVmFyKSwgY3VzdG9tVmFyKSldXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgZm9vdGVyOiB3aXphcmRQcm9wcy5mb290ZXIsXG4gICAgfSwgY3VzdG9tdmFyU3RlcF90ZW1wbGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGRhdGFzZXRTdGVwKCkge1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ2RhdGFzZXRTdGVwJyxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbc3RhcnRTdGVwLF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbIC8vIG9uZSBhcnJheSBmb3IgZWFjaCBkYXRhc2V0XG4gICAgICAgICAgICAgICAgLi4uT2JqZWN0LmtleXMoc3RhdGUuZGF0YXNldClcbiAgICAgICAgICAgICAgICAgICAgLm1hcChkYXRhc2V0SWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFzZXRQb3NpdGlvbiA9IHBhcnNlZFN0YXRlSWQoZGF0YXNldElkKS5jdXJyZW50UG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFzZXROYW1lID0gc3RhdGUuZGF0YXNldF9uYW1lW2RhdGFzZXRQb3NpdGlvbl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLmRhdGFzZXRfa2V5c1tkYXRhc2V0UG9zaXRpb25dXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoa2V5ID0+IGRhdGFzZXROYW1lICsgJy4nICsga2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoa2V5ID0+IGxhYmVsZXIoJ3R5cGVTdGVwJywgKCkgPT4gdHlwZVN0ZXAoa2V5KSwga2V5KSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgZm9vdGVyOiB3aXphcmRQcm9wcy5mb290ZXIsXG4gICAgfSwgZGF0YXNldFN0ZXBfdGVtcGxhdGUpO1xufVxuXG5mdW5jdGlvbiB0eXBlU3RlcChkYXRhc2V0UHJvcGVydHkpIHtcbiAgICBsZXQgZGF0YXNldE5hbWUgPSBkYXRhc2V0UHJvcGVydHkuc3BsaXQoJy4nKVswXTtcbiAgICBsZXQgZGF0YXNldElkID0gJ2RhdGFzZXQjJyArIHN0YXRlLmRhdGFzZXRfbmFtZS5maW5kSW5kZXgobiA9PiBuID09PSBkYXRhc2V0TmFtZSk7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAndHlwZVN0ZXAnLFxuICAgICAgICBjaG9zZW5fZGF0YXNldF9uYW1lOiBkYXRhc2V0TmFtZSxcbiAgICAgICAgY2hvc2VuX2RhdGFzZXRfcHJvcGVydHk6IGRhdGFzZXRQcm9wZXJ0eSxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbXG4gICAgICAgICAgICAgICAgc3RhcnRTdGVwLFxuICAgICAgICAgICAgICAgIGxhYmVsZXIoJ3Byb3BlcnR5U3RlcCcsICgpID0+IGRhdGFzZXRTdGVwKCksIGRhdGFzZXROYW1lKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFtcbiAgICAgICAgICAgICAgICAuLi5bcmFuZG9tU3RlcCwgY29ubmVjdGVkU3RlcCwgZml4ZWRTdGVwXVxuICAgICAgICAgICAgICAgICAgICAubWFwKGZ1biA9PiBsYWJlbGVyKGZ1bi5uYW1lLCAoKSA9PiBmdW4oZGF0YXNldFByb3BlcnR5KSwgZGF0YXNldFByb3BlcnR5KSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICBmb290ZXI6IHdpemFyZFByb3BzLmZvb3RlcixcbiAgICB9LCB0eXBlU3RlcF90ZW1wbGF0ZSk7XG59XG5cbmZ1bmN0aW9uIHJhbmRvbVN0ZXAoZGF0YXNldFByb3BlcnR5KSB7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAncmFuZG9tU3RlcCcsXG4gICAgICAgIGNob3Nlbl9kYXRhc2V0X3Byb3BlcnR5OiBkYXRhc2V0UHJvcGVydHksXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgICAgICAgICBsYWJlbGVyKCd0eXBlU3RlcCcsICgpID0+IHR5cGVTdGVwKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbXG4gICAgICAgICAgICAgICAgbGFiZWxlcignZXhpdFN0ZXAnLCBleGl0U3RlcChkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpLFxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBmb290ZXI6IHdpemFyZFByb3BzLmZvb3RlcixcbiAgICB9LCB0ZW1wbGF0ZUMpO1xufVxuXG5mdW5jdGlvbiBjb25uZWN0ZWRTdGVwKGRhdGFzZXRQcm9wZXJ0eSkge1xuICAgIGxldCBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4ID0gZGF0YXNldFByb3BlcnR5ICsgJy8nO1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ2Nvbm5lY3RlZFN0ZXAnLFxuICAgICAgICBjaG9zZW5fZGF0YXNldF9wcm9wZXJ0eTogZGF0YXNldFByb3BlcnR5LFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtcbiAgICAgICAgICAgICAgICBzdGFydFN0ZXAsXG4gICAgICAgICAgICAgICAgbGFiZWxlcigndHlwZVN0ZXAnLCAoKSA9PiB0eXBlU3RlcChkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZm9yd2FyZDogW1xuICAgICAgICAgICAgICAgIC4uLmRhdGFzZXRJbmRleGVzKGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXgpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKGFyZywgaW5kZXgpID0+IGxhYmVsZXIoJ2V4aXRTdGVwICcgKyBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4ICsgaW5kZXgsIGV4aXRTdGVwKGFyZykpKVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBmb290ZXI6IHdpemFyZFByb3BzLmZvb3RlcixcbiAgICB9LCB0ZW1wbGF0ZUEpO1xufVxuXG5mdW5jdGlvbiBmaXhlZFN0ZXAoZGF0YXNldFByb3BlcnR5KSB7XG4gICAgbGV0IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggPSBkYXRhc2V0UHJvcGVydHkgKyAnIyc7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAnZml4ZWRTdGVwJyxcbiAgICAgICAgY2hvc2VuX2RhdGFzZXRfcHJvcGVydHk6IGRhdGFzZXRQcm9wZXJ0eSxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbXG4gICAgICAgICAgICAgICAgc3RhcnRTdGVwLFxuICAgICAgICAgICAgICAgIGxhYmVsZXIoJ3R5cGVTdGVwJywgKCkgPT4gdHlwZVN0ZXAoZGF0YXNldFByb3BlcnR5KSwgZGF0YXNldFByb3BlcnR5KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFtcbiAgICAgICAgICAgICAgICAuLi5kYXRhc2V0SW5kZXhlcyhkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4KVxuICAgICAgICAgICAgICAgICAgICAubWFwKChhcmcsIGluZGV4KSA9PiBsYWJlbGVyKCdleGl0U3RlcCAnICsgZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCArIGluZGV4LCBleGl0U3RlcChhcmcpKSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgZm9vdGVyOiB3aXphcmRQcm9wcy5mb290ZXIsXG4gICAgfSwgdGVtcGxhdGVCKTtcbn1cblxuZnVuY3Rpb24gZXhpdFN0ZXAodmFsdWUsIGluZGV4KSB7IC8vIHJlYXNvbnNmb3Jjb2xvZ25lLmltYWdlLzIgLS0+ICQocmVhc29uc2ZvcmNvbG9nbmUuaW1hZ2UvMilcbiAgICBsZXQgcmVzdWx0ID0gKCkgPT4ge1xuICAgICAgICBhbGVydCgnJCgnICsgdmFsdWUgKyAnKScpO1xuICAgIH07XG4gICAgcmV0dXJuIGxhYmVsZXIoJ2V4aXRTdGVwJywgcmVzdWx0LCBpbmRleCk7XG59XG5cbmZ1bmN0aW9uIGRhdGFzZXRJbmRleGVzKGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXgpIHsgLy8gcmVhc29uc2ZvcmNvbG9nbmUuaW1hZ2UgLT4gcmVhc29uc2ZvcmNvbG9nbmUuaW1hZ2UvMlxuICAgIGxldCBkYXRhc2V0TmFtZSA9IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXguc3BsaXQoJy4nKVswXTtcbiAgICBsZXQgZGF0YXNldFBvcyA9IHN0YXRlLmRhdGFzZXRfbmFtZS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSBkYXRhc2V0TmFtZSk7XG4gICAgbGV0IG51bUluc3RhbmNlcyA9IHN0YXRlLmRhdGFzZXRbJ2RhdGFzZXQjJyArIGRhdGFzZXRQb3NdLmxlbmd0aDtcbiAgICByZXR1cm4gWy4uLkFycmF5KG51bUluc3RhbmNlcykua2V5cygpXS5tYXAoa2V5ID0+IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggKyBrZXkpO1xufVxuXG5mdW5jdGlvbiBwYXJzZWRTdGF0ZUlkKGlkKSB7XG4gICAgbGV0IHBpZWNlcyA9IGlkLnNwbGl0KCcjJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudFBvczogcGllY2VzWzFdLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGxhYmVsZXIoc3RlcE5hbWUsIGZ1biwgbGFiZWxWYWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW4sICduYW1lJywge1xuICAgICAgICB2YWx1ZTogc3RlcE5hbWUgKyAnICdcbiAgICAgICAgKyAoKHR5cGVvZiBsYWJlbFZhbHVlICE9PSAndW5kZWZpbmVkJykgPyBsYWJlbFZhbHVlIDogJycpXG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bjtcbn1cbiJdfQ==