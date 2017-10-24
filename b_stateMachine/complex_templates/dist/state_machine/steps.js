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
            handlers: {
                backward: [startStep, labeler('propertyStep', () => propertyStep(datasetId), datasetName)],
                forward: [...[randomStep, connectedStep, fixedStep].map(fun => labeler(fun.name, () => fun(datasetProperty), datasetProperty))]
            },
            state: _initialState.initialState,
            footer: wizardProps.footer
        }, _typeStep_template2.default);
    }

    function randomStep(datasetProperty) {
        return (0, _view2.default)({
            location: 'randomStep',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9zdGF0ZV9tYWNoaW5lL3N0ZXBzLmpzIl0sIm5hbWVzIjpbInN0YXJ0U3RlcCIsIndpemFyZFByb3BzIiwiZm9vdGVyIiwiY2FuY2VsQnV0dG9uIiwib25DbGljayIsImFsZXJ0IiwiY2xhc3NOYW1lIiwic2F2ZUJ1dHRvbiIsImxvY2F0aW9uIiwiaGFuZGxlcnMiLCJiYWNrd2FyZCIsImZvcndhcmQiLCJjdXN0b212YXJTdGVwIiwiZGF0YXNldFN0ZXAiLCJzdGF0ZSIsImN1c3RvbXZhciIsIm1hcCIsImN1c3RvbVZhciIsImxhYmVsZXIiLCJleGl0U3RlcCIsIk9iamVjdCIsImtleXMiLCJkYXRhc2V0IiwiZGF0YXNldElkIiwiZGF0YXNldFBvc2l0aW9uIiwicGFyc2VkU3RhdGVJZCIsImN1cnJlbnRQb3MiLCJkYXRhc2V0TmFtZSIsImRhdGFzZXRfbmFtZSIsImRhdGFzZXRfa2V5cyIsImtleSIsInR5cGVTdGVwIiwiZGF0YXNldFByb3BlcnR5Iiwic3BsaXQiLCJmaW5kSW5kZXgiLCJuIiwicHJvcGVydHlTdGVwIiwicmFuZG9tU3RlcCIsImNvbm5lY3RlZFN0ZXAiLCJmaXhlZFN0ZXAiLCJmdW4iLCJuYW1lIiwidGVtcGxhdGVDIiwiZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCIsImRhdGFzZXRJbmRleGVzIiwiYXJnIiwiaW5kZXgiLCJ0ZW1wbGF0ZUEiLCJ0ZW1wbGF0ZUIiLCJ2YWx1ZSIsInJlc3VsdCIsImRhdGFzZXRQb3MiLCJpdGVtIiwibnVtSW5zdGFuY2VzIiwibGVuZ3RoIiwiQXJyYXkiLCJpZCIsInBpZWNlcyIsInN0ZXBOYW1lIiwibGFiZWxWYWx1ZSIsImRlZmluZVByb3BlcnR5Il0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O1lBMEJnQkEsUyxHQUFBQSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFqQmhCLFFBQUlDLGNBQWM7QUFDZEMsZ0JBQVE7QUFDSkMsMEJBQWM7QUFDVkMseUJBQVMsTUFBTTtBQUNYQywwQkFBTSx1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LEdBQVgsSUFDSCxPQUFPQyxVQUFQLEtBQXNCLFdBQXZCLEdBQXNDQSxVQUF0QyxHQUFtRCxFQUQvQztBQUR3QixTQUFuQztBQUlBLGVBQU9uQixHQUFQO0FBQ0giLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7aW5pdGlhbFN0YXRlIGFzIHN0YXRlfSBmcm9tICcuL2luaXRpYWxTdGF0ZSc7XG5pbXBvcnQgY2hvaWNlIGZyb20gJy4vdmlldyc7XG5pbXBvcnQgc3RhcnRTdGVwX3RlbXBsYXRlIGZyb20gJy4uL3RlbXBsYXRlL3N0YXJ0U3RlcF90ZW1wbGF0ZSc7XG5pbXBvcnQgY3VzdG9tdmFyU3RlcF90ZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZS9jdXN0b212YXJTdGVwX3RlbXBsYXRlJztcbmltcG9ydCBkYXRhc2V0U3RlcF90ZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZS9kYXRhc2V0U3RlcF90ZW1wbGF0ZSc7XG5pbXBvcnQgdHlwZVN0ZXBfdGVtcGxhdGUgZnJvbSAnLi4vdGVtcGxhdGUvdHlwZVN0ZXBfdGVtcGxhdGUnO1xuXG5sZXQgd2l6YXJkUHJvcHMgPSB7XG4gICAgZm9vdGVyOiB7XG4gICAgICAgIGNhbmNlbEJ1dHRvbjoge1xuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdjYW5jZWwgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdsZWZ0X2J1dHRvbicsXG4gICAgICAgIH0sXG4gICAgICAgIHNhdmVCdXR0b246IHtcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydCgnU0FWRSBidXR0b24gY2xpY2tlZCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3JpZ2h0X2J1dHRvbicsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFN0ZXAoKSB7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAnc3RhcnRTdGVwJyxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFtjdXN0b212YXJTdGVwLCBkYXRhc2V0U3RlcF0sXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgZm9vdGVyOiB3aXphcmRQcm9wcy5mb290ZXIsXG4gICAgfSwgc3RhcnRTdGVwX3RlbXBsYXRlKTtcbn1cblxuZnVuY3Rpb24gY3VzdG9tdmFyU3RlcCgpIHtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdjdXN0b212YXJTdGVwJyxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbc3RhcnRTdGVwLF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbLi4uc3RhdGUuY3VzdG9tdmFyXG4gICAgICAgICAgICAgICAgLm1hcChjdXN0b21WYXIgPT4gbGFiZWxlcignZXhpdFN0ZXAnLCBleGl0U3RlcChjdXN0b21WYXIpLCBjdXN0b21WYXIpKV1cbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICBmb290ZXI6IHdpemFyZFByb3BzLmZvb3RlcixcbiAgICB9LCBjdXN0b212YXJTdGVwX3RlbXBsYXRlKTtcbn1cblxuZnVuY3Rpb24gZGF0YXNldFN0ZXAoKSB7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAnZGF0YXNldFN0ZXAnLFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtzdGFydFN0ZXAsXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFsgLy8gb25lIGFycmF5IGZvciBlYWNoIGRhdGFzZXRcbiAgICAgICAgICAgICAgICAuLi5PYmplY3Qua2V5cyhzdGF0ZS5kYXRhc2V0KVxuICAgICAgICAgICAgICAgICAgICAubWFwKGRhdGFzZXRJZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YXNldFBvc2l0aW9uID0gcGFyc2VkU3RhdGVJZChkYXRhc2V0SWQpLmN1cnJlbnRQb3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YXNldE5hbWUgPSBzdGF0ZS5kYXRhc2V0X25hbWVbZGF0YXNldFBvc2l0aW9uXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUuZGF0YXNldF9rZXlzW2RhdGFzZXRQb3NpdGlvbl1dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChrZXkgPT4gZGF0YXNldE5hbWUgKyAnLicgKyBrZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChrZXkgPT4gbGFiZWxlcigndHlwZVN0ZXAnLCAoKSA9PiB0eXBlU3RlcChrZXkpLCBrZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICBmb290ZXI6IHdpemFyZFByb3BzLmZvb3RlcixcbiAgICB9LCBkYXRhc2V0U3RlcF90ZW1wbGF0ZSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVTdGVwKGRhdGFzZXRQcm9wZXJ0eSkge1xuICAgIGxldCBkYXRhc2V0TmFtZSA9IGRhdGFzZXRQcm9wZXJ0eS5zcGxpdCgnLicpWzBdO1xuICAgIGxldCBkYXRhc2V0SWQgPSAnZGF0YXNldCMnICsgc3RhdGUuZGF0YXNldF9uYW1lLmZpbmRJbmRleChuID0+IG4gPT09IGRhdGFzZXROYW1lKTtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICd0eXBlU3RlcCcsXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgICAgICAgICBsYWJlbGVyKCdwcm9wZXJ0eVN0ZXAnLCAoKSA9PiBwcm9wZXJ0eVN0ZXAoZGF0YXNldElkKSwgZGF0YXNldE5hbWUpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZm9yd2FyZDogW1xuICAgICAgICAgICAgICAgIC4uLltyYW5kb21TdGVwLCBjb25uZWN0ZWRTdGVwLCBmaXhlZFN0ZXBdXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuID0+IGxhYmVsZXIoZnVuLm5hbWUsICgpID0+IGZ1bihkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpKVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgIGZvb3Rlcjogd2l6YXJkUHJvcHMuZm9vdGVyLFxuICAgIH0sIHR5cGVTdGVwX3RlbXBsYXRlKTtcbn1cblxuZnVuY3Rpb24gcmFuZG9tU3RlcChkYXRhc2V0UHJvcGVydHkpIHtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdyYW5kb21TdGVwJyxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbXG4gICAgICAgICAgICAgICAgc3RhcnRTdGVwLFxuICAgICAgICAgICAgICAgIGxhYmVsZXIoJ3R5cGVTdGVwJywgKCkgPT4gdHlwZVN0ZXAoZGF0YXNldFByb3BlcnR5KSwgZGF0YXNldFByb3BlcnR5KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFtcbiAgICAgICAgICAgICAgICBsYWJlbGVyKCdleGl0U3RlcCcsIGV4aXRTdGVwKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSksXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIGZvb3Rlcjogd2l6YXJkUHJvcHMuZm9vdGVyLFxuICAgIH0sIHRlbXBsYXRlQyk7XG59XG5cbmZ1bmN0aW9uIGNvbm5lY3RlZFN0ZXAoZGF0YXNldFByb3BlcnR5KSB7XG4gICAgbGV0IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggPSBkYXRhc2V0UHJvcGVydHkgKyAnLyc7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAnY29ubmVjdGVkU3RlcCcsXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgICAgICAgICBsYWJlbGVyKCd0eXBlU3RlcCcsICgpID0+IHR5cGVTdGVwKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbXG4gICAgICAgICAgICAgICAgLi4uZGF0YXNldEluZGV4ZXMoZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeClcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoYXJnLCBpbmRleCkgPT4gbGFiZWxlcignZXhpdFN0ZXAgJyArIGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggKyBpbmRleCwgZXhpdFN0ZXAoYXJnKSkpXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIGZvb3Rlcjogd2l6YXJkUHJvcHMuZm9vdGVyLFxuICAgIH0sIHRlbXBsYXRlQSk7XG59XG5cbmZ1bmN0aW9uIGZpeGVkU3RlcChkYXRhc2V0UHJvcGVydHkpIHtcbiAgICBsZXQgZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCA9IGRhdGFzZXRQcm9wZXJ0eSArICcjJztcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdmaXhlZFN0ZXAnLFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtcbiAgICAgICAgICAgICAgICBzdGFydFN0ZXAsXG4gICAgICAgICAgICAgICAgbGFiZWxlcigndHlwZVN0ZXAnLCAoKSA9PiB0eXBlU3RlcChkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZm9yd2FyZDogW1xuICAgICAgICAgICAgICAgIC4uLmRhdGFzZXRJbmRleGVzKGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXgpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKGFyZywgaW5kZXgpID0+IGxhYmVsZXIoJ2V4aXRTdGVwICcgKyBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4ICsgaW5kZXgsIGV4aXRTdGVwKGFyZykpKVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBmb290ZXI6IHdpemFyZFByb3BzLmZvb3RlcixcbiAgICB9LCB0ZW1wbGF0ZUIpO1xufVxuXG5mdW5jdGlvbiBleGl0U3RlcCh2YWx1ZSwgaW5kZXgpIHsgLy8gcmVhc29uc2ZvcmNvbG9nbmUuaW1hZ2UvMiAtLT4gJChyZWFzb25zZm9yY29sb2duZS5pbWFnZS8yKVxuICAgIGxldCByZXN1bHQgPSAoKSA9PiB7XG4gICAgICAgIGFsZXJ0KCckKCcgKyB2YWx1ZSArICcpJyk7XG4gICAgfTtcbiAgICByZXR1cm4gbGFiZWxlcignZXhpdFN0ZXAnLCByZXN1bHQsIGluZGV4KTtcbn1cblxuZnVuY3Rpb24gZGF0YXNldEluZGV4ZXMoZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCkgeyAvLyByZWFzb25zZm9yY29sb2duZS5pbWFnZSAtPiByZWFzb25zZm9yY29sb2duZS5pbWFnZS8yXG4gICAgbGV0IGRhdGFzZXROYW1lID0gZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeC5zcGxpdCgnLicpWzBdO1xuICAgIGxldCBkYXRhc2V0UG9zID0gc3RhdGUuZGF0YXNldF9uYW1lLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IGRhdGFzZXROYW1lKTtcbiAgICBsZXQgbnVtSW5zdGFuY2VzID0gc3RhdGUuZGF0YXNldFsnZGF0YXNldCMnICsgZGF0YXNldFBvc10ubGVuZ3RoO1xuICAgIHJldHVybiBbLi4uQXJyYXkobnVtSW5zdGFuY2VzKS5rZXlzKCldLm1hcChrZXkgPT4gZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCArIGtleSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlZFN0YXRlSWQoaWQpIHtcbiAgICBsZXQgcGllY2VzID0gaWQuc3BsaXQoJyMnKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50UG9zOiBwaWVjZXNbMV0sXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbGFiZWxlcihzdGVwTmFtZSwgZnVuLCBsYWJlbFZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1biwgJ25hbWUnLCB7XG4gICAgICAgIHZhbHVlOiBzdGVwTmFtZSArICcgJ1xuICAgICAgICArICgodHlwZW9mIGxhYmVsVmFsdWUgIT09ICd1bmRlZmluZWQnKSA/IGxhYmVsVmFsdWUgOiAnJylcbiAgICB9KTtcbiAgICByZXR1cm4gZnVuO1xufVxuIl19