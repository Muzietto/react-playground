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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9zdGF0ZV9tYWNoaW5lL3N0ZXBzLmpzIl0sIm5hbWVzIjpbInN0YXJ0U3RlcCIsIndpemFyZFByb3BzIiwiZm9vdGVyIiwiY2FuY2VsQnV0dG9uIiwib25DbGljayIsImFsZXJ0IiwiY2xhc3NOYW1lIiwicmVzdGFydEJ1dHRvbiIsInNhdmVCdXR0b24iLCJsb2NhdGlvbiIsImhhbmRsZXJzIiwiYmFja3dhcmQiLCJmb3J3YXJkIiwiY3VzdG9tdmFyU3RlcCIsImRhdGFzZXRTdGVwIiwic3RhdGUiLCJjaG9zZW5WYXIiLCJjdXN0b212YXIiLCJtYXAiLCJjdXN0b21WYXIiLCJsYWJlbGVyIiwiY2FsbCIsImNob3Nlbl92YXIiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJPYmplY3QiLCJrZXlzIiwiZGF0YXNldCIsImRhdGFzZXRJZCIsImRhdGFzZXRQb3NpdGlvbiIsInBhcnNlZFN0YXRlSWQiLCJjdXJyZW50UG9zIiwiZGF0YXNldE5hbWUiLCJkYXRhc2V0X25hbWUiLCJkYXRhc2V0X2tleXMiLCJrZXkiLCJ0eXBlU3RlcCIsImRhdGFzZXRQcm9wZXJ0eSIsInNwbGl0IiwiZmluZEluZGV4IiwibiIsImNob3Nlbl9kYXRhc2V0X25hbWUiLCJjaG9zZW5fZGF0YXNldF9wcm9wZXJ0eSIsInJhbmRvbVN0ZXAiLCJjb25uZWN0ZWRTdGVwIiwiZml4ZWRTdGVwIiwiZnVuIiwibmFtZSIsImV4aXRTdGVwIiwidGVtcGxhdGVDIiwiZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCIsImRhdGFzZXRJbmRleGVzIiwiYXJnIiwiaW5kZXgiLCJ0ZW1wbGF0ZUEiLCJ0ZW1wbGF0ZUIiLCJ2YWx1ZSIsInJlc3VsdCIsImRhdGFzZXRQb3MiLCJpdGVtIiwibnVtSW5zdGFuY2VzIiwiQXJyYXkiLCJpZCIsInBpZWNlcyIsInN0ZXBOYW1lIiwibGFiZWxWYWx1ZSIsImRlZmluZVByb3BlcnR5Il0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O1lBZ0NnQkEsUyxHQUFB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QUFDQSxlQUFPLENBQUMsR0FBR3NDLE1BQU1ELFlBQU4sRUFBb0JsQyxJQUFwQixFQUFKLEVBQWdDUixHQUFoQyxDQUFvQ2lCLE9BQU9lLDRCQUE0QmYsR0FBdkUsQ0FBUDtBQUNIOztBQUVELGFBQVNMLGFBQVQsQ0FBdUJnQyxFQUF2QixFQUEyQjtBQUN2QixZQUFJQyxTQUFTRCxHQUFHeEIsS0FBSCxDQUFTLEdBQVQsQ0FBYjtBQUNBLGVBQU87QUFDSFAsd0JBQVlnQyxPQUFPLENBQVA7QUFEVCxTQUFQO0FBR0g7O0FBRUQsYUFBUzNDLE9BQVQsQ0FBaUI0QyxRQUFqQixFQUEyQmxCLEdBQTNCLEVBQWdDbUIsVUFBaEMsRUFBNEM7QUFDeEN4QyxlQUFPeUMsY0FBUCxDQUFzQnBCLEdBQXRCLEVBQTJCLE1BQTNCLEVBQW1DO0FBQy9CVSxtQkFBT1EsV0FBVyxHQUFYLElBQ0gsT0FBT0MsVUFBUCxLQUFzQixXQUF2QixHQUFzQ0EsVUFBdEMsR0FBbUQsRUFEL0M7QUFEd0IsU0FBbkM7QUFJQSxlQUFPbkIsR0FBUDtBQUNIIiwiZmlsZSI6InN0ZXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge2luaXRpYWxTdGF0ZSBhcyBzdGF0ZX0gZnJvbSAnLi9pbml0aWFsU3RhdGUnO1xuaW1wb3J0IGNob2ljZSBmcm9tICcuL3ZpZXcnO1xuaW1wb3J0IHN0YXJ0U3RlcF90ZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZS9zdGFydFN0ZXBfdGVtcGxhdGUnO1xuaW1wb3J0IGN1c3RvbXZhclN0ZXBfdGVtcGxhdGUgZnJvbSAnLi4vdGVtcGxhdGUvY3VzdG9tdmFyU3RlcF90ZW1wbGF0ZSc7XG5pbXBvcnQgZGF0YXNldFN0ZXBfdGVtcGxhdGUgZnJvbSAnLi4vdGVtcGxhdGUvZGF0YXNldFN0ZXBfdGVtcGxhdGUnO1xuaW1wb3J0IHR5cGVTdGVwX3RlbXBsYXRlIGZyb20gJy4uL3RlbXBsYXRlL3R5cGVTdGVwX3RlbXBsYXRlJztcblxubGV0IHdpemFyZFByb3BzID0ge1xuICAgIGZvb3Rlcjoge1xuICAgICAgICBjYW5jZWxCdXR0b246IHtcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydCgnY2FuY2VsIGJ1dHRvbiBjbGlja2VkJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbGVmdF9idXR0b24nLFxuICAgICAgICB9LFxuICAgICAgICByZXN0YXJ0QnV0dG9uOiB7XG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ3Jlc3RhcnQgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdsZWZ0X2J1dHRvbicsXG4gICAgICAgIH0sXG4gICAgICAgIHNhdmVCdXR0b246IHtcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydCgnU0FWRSBidXR0b24gY2xpY2tlZCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3JpZ2h0X2J1dHRvbicsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFN0ZXAoKSB7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAnc3RhcnRTdGVwJyxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFtjdXN0b212YXJTdGVwLCBkYXRhc2V0U3RlcF0sXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgZm9vdGVyOiB3aXphcmRQcm9wcy5mb290ZXIsXG4gICAgfSwgc3RhcnRTdGVwX3RlbXBsYXRlKTtcbn1cblxuZnVuY3Rpb24gY3VzdG9tdmFyU3RlcChjaG9zZW5WYXIpIHtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdjdXN0b212YXJTdGVwJyxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbc3RhcnRTdGVwLF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbLi4uc3RhdGUuY3VzdG9tdmFyXG4gICAgICAgICAgICAgICAgLm1hcChjdXN0b21WYXIgPT4gbGFiZWxlcignZXhpdFN0ZXAnLCAoKSA9PiBjdXN0b212YXJTdGVwLmNhbGwobnVsbCwgY3VzdG9tVmFyKSwgY3VzdG9tVmFyKSldXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgZm9vdGVyOiB3aXphcmRQcm9wcy5mb290ZXIsXG4gICAgICAgIC8vIGlnbm9yaW5nIGNsaWNrIGV2ZW50cyBhcyBhcmdzXG4gICAgICAgIGNob3Nlbl92YXI6IChjaG9zZW5WYXIubGVuZ3RoKSA/IGNob3NlblZhciA6IHVuZGVmaW5lZCxcbiAgICB9LCBjdXN0b212YXJTdGVwX3RlbXBsYXRlKTtcbn1cblxuZnVuY3Rpb24gZGF0YXNldFN0ZXAoKSB7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAnZGF0YXNldFN0ZXAnLFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtzdGFydFN0ZXAsXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFsgLy8gb25lIGFycmF5IGZvciBlYWNoIGRhdGFzZXRcbiAgICAgICAgICAgICAgICAuLi5PYmplY3Qua2V5cyhzdGF0ZS5kYXRhc2V0KVxuICAgICAgICAgICAgICAgICAgICAubWFwKGRhdGFzZXRJZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YXNldFBvc2l0aW9uID0gcGFyc2VkU3RhdGVJZChkYXRhc2V0SWQpLmN1cnJlbnRQb3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YXNldE5hbWUgPSBzdGF0ZS5kYXRhc2V0X25hbWVbZGF0YXNldFBvc2l0aW9uXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUuZGF0YXNldF9rZXlzW2RhdGFzZXRQb3NpdGlvbl1dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChrZXkgPT4gZGF0YXNldE5hbWUgKyAnLicgKyBrZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChrZXkgPT4gbGFiZWxlcigndHlwZVN0ZXAnLCAoKSA9PiB0eXBlU3RlcChrZXkpLCBrZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICBmb290ZXI6IHdpemFyZFByb3BzLmZvb3RlcixcbiAgICB9LCBkYXRhc2V0U3RlcF90ZW1wbGF0ZSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVTdGVwKGRhdGFzZXRQcm9wZXJ0eSkge1xuICAgIGxldCBkYXRhc2V0TmFtZSA9IGRhdGFzZXRQcm9wZXJ0eS5zcGxpdCgnLicpWzBdO1xuICAgIGxldCBkYXRhc2V0SWQgPSAnZGF0YXNldCMnICsgc3RhdGUuZGF0YXNldF9uYW1lLmZpbmRJbmRleChuID0+IG4gPT09IGRhdGFzZXROYW1lKTtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICd0eXBlU3RlcCcsXG4gICAgICAgIGNob3Nlbl9kYXRhc2V0X25hbWU6IGRhdGFzZXROYW1lLFxuICAgICAgICBjaG9zZW5fZGF0YXNldF9wcm9wZXJ0eTogZGF0YXNldFByb3BlcnR5LFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtcbiAgICAgICAgICAgICAgICBzdGFydFN0ZXAsXG4gICAgICAgICAgICAgICAgbGFiZWxlcigncHJvcGVydHlTdGVwJywgKCkgPT4gZGF0YXNldFN0ZXAoKSwgZGF0YXNldE5hbWUpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZm9yd2FyZDogW1xuICAgICAgICAgICAgICAgIC4uLltyYW5kb21TdGVwLCBjb25uZWN0ZWRTdGVwLCBmaXhlZFN0ZXBdXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuID0+IGxhYmVsZXIoZnVuLm5hbWUsICgpID0+IGZ1bihkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpKVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgIGZvb3Rlcjogd2l6YXJkUHJvcHMuZm9vdGVyLFxuICAgIH0sIHR5cGVTdGVwX3RlbXBsYXRlKTtcbn1cblxuZnVuY3Rpb24gcmFuZG9tU3RlcChkYXRhc2V0UHJvcGVydHkpIHtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdyYW5kb21TdGVwJyxcbiAgICAgICAgY2hvc2VuX2RhdGFzZXRfcHJvcGVydHk6IGRhdGFzZXRQcm9wZXJ0eSxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbXG4gICAgICAgICAgICAgICAgc3RhcnRTdGVwLFxuICAgICAgICAgICAgICAgIGxhYmVsZXIoJ3R5cGVTdGVwJywgKCkgPT4gdHlwZVN0ZXAoZGF0YXNldFByb3BlcnR5KSwgZGF0YXNldFByb3BlcnR5KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFtcbiAgICAgICAgICAgICAgICBsYWJlbGVyKCdleGl0U3RlcCcsIGV4aXRTdGVwKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSksXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIGZvb3Rlcjogd2l6YXJkUHJvcHMuZm9vdGVyLFxuICAgIH0sIHRlbXBsYXRlQyk7XG59XG5cbmZ1bmN0aW9uIGNvbm5lY3RlZFN0ZXAoZGF0YXNldFByb3BlcnR5KSB7XG4gICAgbGV0IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggPSBkYXRhc2V0UHJvcGVydHkgKyAnLyc7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAnY29ubmVjdGVkU3RlcCcsXG4gICAgICAgIGNob3Nlbl9kYXRhc2V0X3Byb3BlcnR5OiBkYXRhc2V0UHJvcGVydHksXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgICAgICAgICBsYWJlbGVyKCd0eXBlU3RlcCcsICgpID0+IHR5cGVTdGVwKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbXG4gICAgICAgICAgICAgICAgLi4uZGF0YXNldEluZGV4ZXMoZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeClcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoYXJnLCBpbmRleCkgPT4gbGFiZWxlcignZXhpdFN0ZXAgJyArIGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggKyBpbmRleCwgZXhpdFN0ZXAoYXJnKSkpXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIGZvb3Rlcjogd2l6YXJkUHJvcHMuZm9vdGVyLFxuICAgIH0sIHRlbXBsYXRlQSk7XG59XG5cbmZ1bmN0aW9uIGZpeGVkU3RlcChkYXRhc2V0UHJvcGVydHkpIHtcbiAgICBsZXQgZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCA9IGRhdGFzZXRQcm9wZXJ0eSArICcjJztcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdmaXhlZFN0ZXAnLFxuICAgICAgICBjaG9zZW5fZGF0YXNldF9wcm9wZXJ0eTogZGF0YXNldFByb3BlcnR5LFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtcbiAgICAgICAgICAgICAgICBzdGFydFN0ZXAsXG4gICAgICAgICAgICAgICAgbGFiZWxlcigndHlwZVN0ZXAnLCAoKSA9PiB0eXBlU3RlcChkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZm9yd2FyZDogW1xuICAgICAgICAgICAgICAgIC4uLmRhdGFzZXRJbmRleGVzKGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXgpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKGFyZywgaW5kZXgpID0+IGxhYmVsZXIoJ2V4aXRTdGVwICcgKyBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4ICsgaW5kZXgsIGV4aXRTdGVwKGFyZykpKVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBmb290ZXI6IHdpemFyZFByb3BzLmZvb3RlcixcbiAgICB9LCB0ZW1wbGF0ZUIpO1xufVxuXG5mdW5jdGlvbiBleGl0U3RlcCh2YWx1ZSwgaW5kZXgpIHsgLy8gcmVhc29uc2ZvcmNvbG9nbmUuaW1hZ2UvMiAtLT4gJChyZWFzb25zZm9yY29sb2duZS5pbWFnZS8yKVxuICAgIGxldCByZXN1bHQgPSAoKSA9PiB7XG4gICAgICAgIGFsZXJ0KCckKCcgKyB2YWx1ZSArICcpJyk7XG4gICAgfTtcbiAgICByZXR1cm4gbGFiZWxlcignZXhpdFN0ZXAnLCByZXN1bHQsIGluZGV4KTtcbn1cblxuZnVuY3Rpb24gZGF0YXNldEluZGV4ZXMoZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCkgeyAvLyByZWFzb25zZm9yY29sb2duZS5pbWFnZSAtPiByZWFzb25zZm9yY29sb2duZS5pbWFnZS8yXG4gICAgbGV0IGRhdGFzZXROYW1lID0gZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeC5zcGxpdCgnLicpWzBdO1xuICAgIGxldCBkYXRhc2V0UG9zID0gc3RhdGUuZGF0YXNldF9uYW1lLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IGRhdGFzZXROYW1lKTtcbiAgICBsZXQgbnVtSW5zdGFuY2VzID0gc3RhdGUuZGF0YXNldFsnZGF0YXNldCMnICsgZGF0YXNldFBvc10ubGVuZ3RoO1xuICAgIHJldHVybiBbLi4uQXJyYXkobnVtSW5zdGFuY2VzKS5rZXlzKCldLm1hcChrZXkgPT4gZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCArIGtleSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlZFN0YXRlSWQoaWQpIHtcbiAgICBsZXQgcGllY2VzID0gaWQuc3BsaXQoJyMnKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50UG9zOiBwaWVjZXNbMV0sXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbGFiZWxlcihzdGVwTmFtZSwgZnVuLCBsYWJlbFZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1biwgJ25hbWUnLCB7XG4gICAgICAgIHZhbHVlOiBzdGVwTmFtZSArICcgJ1xuICAgICAgICArICgodHlwZW9mIGxhYmVsVmFsdWUgIT09ICd1bmRlZmluZWQnKSA/IGxhYmVsVmFsdWUgOiAnJylcbiAgICB9KTtcbiAgICByZXR1cm4gZnVuO1xufVxuIl19