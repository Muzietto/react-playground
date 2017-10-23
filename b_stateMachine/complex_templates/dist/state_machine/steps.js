define(['exports', './initialState', './view', '../template/startStep_template', '../template/customvarStep_template', '../template/datasetStep_template'], function (exports, _initialState, _view, _startStep_template, _customvarStep_template, _datasetStep_template) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.startStep = startStep;

    var _view2 = _interopRequireDefault(_view);

    var _startStep_template2 = _interopRequireDefault(_startStep_template);

    var _customvarStep_template2 = _interopRequireDefault(_customvarStep_template);

    var _datasetStep_template2 = _interopRequireDefault(_datasetStep_template);

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
                forward: [// one array for each dataset
                ...Object.keys(_initialState.initialState.dataset).map(datasetId => {
                    let datasetPosition = parsedStateId(datasetId).currentPos;
                    let datasetName = _initialState.initialState.dataset_name[datasetPosition];
                    return [..._initialState.initialState.dataset_keys[datasetPosition]].map(key => datasetName + '.' + key).map(key => labeler('typeStep', () => typeStep(key), key));
                })]
            },
            footer: wizardProps.footer,
            state: _initialState.initialState
        }, _datasetStep_template2.default);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9zdGF0ZV9tYWNoaW5lL3N0ZXBzLmpzIl0sIm5hbWVzIjpbInN0YXJ0U3RlcCIsIndpemFyZFByb3BzIiwiYm9keSIsImJvZHlfcmVuZGVyZXIiLCJ1bmRlZmluZWQiLCJzdW1tYXJ5Iiwic3RlcCIsImNvcmUiLCJjb3JlX3JlbmRlcmVyIiwibWVzc2FnZSIsImZvb3RlciIsImNhbmNlbEJ1dHRvbiIsImRpc2FibGVkIiwib25DbGljayIsImFsZXJ0IiwiY2xhc3NOYW1lIiwic2F2ZUJ1dHRvbiIsImxvY2F0aW9uIiwiaGFuZGxlcnMiLCJiYWNrd2FyZCIsImZvcndhcmQiLCJjdXN0b212YXJTdGVwIiwiZGF0YXNldFN0ZXAiLCJjdXN0b212YXIiLCJtYXAiLCJjdXN0b21WYXIiLCJsYWJlbGVyIiwiZXhpdFN0ZXAiLCJPYmplY3QiLCJrZXlzIiwiZGF0YXNldCIsImRhdGFzZXRJZCIsImRhdGFzZXRQb3NpdGlvbiIsInBhcnNlZFN0YXRlSWQiLCJjdXJyZW50UG9zIiwiZGF0YXNldE5hbWUiLCJkYXRhc2V0X25hbWUiLCJkYXRhc2V0X2tleXMiLCJrZXkiLCJ0eXBlU3RlcCIsInN0YXRlIiwicHJvcGVydHlTdGVwIiwidGVtcGxhdGVBIiwiZGF0YXNldFByb3BlcnR5Iiwic3BsaXQiLCJmaW5kSW5kZXgiLCJuIiwicmFuZG9tU3RlcCIsImNvbm5lY3RlZFN0ZXAiLCJmaXhlZFN0ZXAiLCJmdW4iLCJuYW1lIiwidGVtcGxhdGVCIiwidGVtcGxhdGVDIiwiZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCIsImRhdGFzZXRJbmRleGVzIiwiYXJnIiwiaW5kZXgiLCJ2YWx1ZSIsInJlc3VsdCIsImRhdGFzZXRQb3MiLCJpdGVtIiwibnVtSW5zdGFuY2VzIiwibGVuZ3RoIiwiQXJyYXkiLCJpZCIsInBpZWNlcyIsInN0ZXBOYW1lIiwibGFiZWxWYWx1ZSIsImRlZmluZVByb3BlcnR5Il0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O1lBcUNnQkEsUyxH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eUJBQXhCLEVBQW1EO0FBQUU7QUFDakQsWUFBSW5CLGNBQWNtQiwwQkFBMEJWLEtBQTFCLENBQWdDLEdBQWhDLEVBQXFDLENBQXJDLENBQWxCO0FBQ0EsWUFBSWdCLGFBQWEsMkJBQU14QixZQUFOLENBQW1CUyxTQUFuQixDQUE2QmdCLFFBQVFBLFNBQVMxQixXQUE5QyxDQUFqQjtBQUNBLFlBQUkyQixlQUFlLDJCQUFNaEMsT0FBTixDQUFjLGFBQWE4QixVQUEzQixFQUF1Q0csTUFBMUQ7QUFDQSxlQUFPLENBQUMsR0FBR0MsTUFBTUYsWUFBTixFQUFvQmpDLElBQXBCLEVBQUosRUFBZ0NMLEdBQWhDLENBQW9DYyxPQUFPZ0IsNEJBQTRCaEIsR0FBdkUsQ0FBUDtBQUNIOztBQUVELGFBQVNMLGFBQVQsQ0FBdUJnQyxFQUF2QixFQUEyQjtBQUN2QixZQUFJQyxTQUFTRCxHQUFHckIsS0FBSCxDQUFTLEdBQVQsQ0FBYjtBQUNBLGVBQU87QUFDSFYsd0JBQVlnQyxPQUFPLENBQVA7QUFEVCxTQUFQO0FBR0g7O0FBRUQsYUFBU3hDLE9BQVQsQ0FBaUJ5QyxRQUFqQixFQUEyQmpCLEdBQTNCLEVBQWdDa0IsVUFBaEMsRUFBNEM7QUFDeEN4QyxlQUFPeUMsY0FBUCxDQUFzQm5CLEdBQXRCLEVBQTJCLE1BQTNCLEVBQW1DO0FBQy9CUSxtQkFBT1MsV0FBVyxHQUFYLElBQ0gsT0FBT0MsVUFBUCxLQUFzQixXQUF2QixHQUFzQ0EsVUFBdEMsR0FBbUQsRUFEL0M7QUFEd0IsU0FBbkM7QUFJQSxlQUFPbEIsR0FBUDtBQUNIIiwiZmlsZSI6InN0ZXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge2luaXRpYWxTdGF0ZSBhcyBzdGF0ZX0gZnJvbSAnLi9pbml0aWFsU3RhdGUnO1xuaW1wb3J0IGNob2ljZSBmcm9tICcuL3ZpZXcnO1xuaW1wb3J0IHN0YXJ0U3RlcF90ZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZS9zdGFydFN0ZXBfdGVtcGxhdGUnO1xuaW1wb3J0IGN1c3RvbXZhclN0ZXBfdGVtcGxhdGUgZnJvbSAnLi4vdGVtcGxhdGUvY3VzdG9tdmFyU3RlcF90ZW1wbGF0ZSc7XG5pbXBvcnQgZGF0YXNldFN0ZXBfdGVtcGxhdGUgZnJvbSAnLi4vdGVtcGxhdGUvZGF0YXNldFN0ZXBfdGVtcGxhdGUnO1xuXG5sZXQgd2l6YXJkUHJvcHMgPSB7XG4gICAgYm9keToge1xuICAgICAgICBib2R5X3JlbmRlcmVyOiB1bmRlZmluZWQsXG4gICAgfSxcbiAgICBzdW1tYXJ5OiB7XG4gICAgICAgIHN0ZXA6IDEsXG4gICAgfSxcbiAgICBjb3JlOiB7XG4gICAgICAgIGNvcmVfcmVuZGVyZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgbWVzc2FnZTogJ2hlbGxvLCB3b3JsZCEnLFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICAgIGNhbmNlbEJ1dHRvbjoge1xuICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ2NhbmNlbCBidXR0b24gY2xpY2tlZCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2xlZnRfYnV0dG9uJyxcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZUJ1dHRvbjoge1xuICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1NBVkUgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdyaWdodF9idXR0b24nLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRTdGVwKCkge1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ3N0YXJ0U3RlcCcsXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW10sXG4gICAgICAgICAgICBmb3J3YXJkOiBbY3VzdG9tdmFyU3RlcCwgZGF0YXNldFN0ZXBdLFxuICAgICAgICB9LFxuICAgICAgICBmb290ZXI6IHdpemFyZFByb3BzLmZvb3RlcixcbiAgICB9LCBzdGFydFN0ZXBfdGVtcGxhdGUpO1xufVxuXG5mdW5jdGlvbiBjdXN0b212YXJTdGVwKCkge1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ2N1c3RvbXZhclN0ZXAnLFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtzdGFydFN0ZXAsXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFsuLi5zdGF0ZS5jdXN0b212YXJcbiAgICAgICAgICAgICAgICAubWFwKGN1c3RvbVZhciA9PiBsYWJlbGVyKCdleGl0U3RlcCcsIGV4aXRTdGVwKGN1c3RvbVZhciksIGN1c3RvbVZhcikpXVxuICAgICAgICB9LFxuICAgICAgICBmb290ZXI6IHdpemFyZFByb3BzLmZvb3RlcixcbiAgICB9LCBjdXN0b212YXJTdGVwX3RlbXBsYXRlKTtcbn1cblxuZnVuY3Rpb24gZGF0YXNldFN0ZXAoKSB7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAnZGF0YXNldFN0ZXAnLFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtzdGFydFN0ZXAsXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFsgLy8gb25lIGFycmF5IGZvciBlYWNoIGRhdGFzZXRcbiAgICAgICAgICAgICAgICAuLi5PYmplY3Qua2V5cyhzdGF0ZS5kYXRhc2V0KVxuICAgICAgICAgICAgICAgICAgICAubWFwKGRhdGFzZXRJZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YXNldFBvc2l0aW9uID0gcGFyc2VkU3RhdGVJZChkYXRhc2V0SWQpLmN1cnJlbnRQb3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YXNldE5hbWUgPSBzdGF0ZS5kYXRhc2V0X25hbWVbZGF0YXNldFBvc2l0aW9uXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUuZGF0YXNldF9rZXlzW2RhdGFzZXRQb3NpdGlvbl1dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChrZXkgPT4gZGF0YXNldE5hbWUgKyAnLicgKyBrZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChrZXkgPT4gbGFiZWxlcigndHlwZVN0ZXAnLCAoKSA9PiB0eXBlU3RlcChrZXkpLCBrZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgZm9vdGVyOiB3aXphcmRQcm9wcy5mb290ZXIsXG4gICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICB9LCBkYXRhc2V0U3RlcF90ZW1wbGF0ZSk7XG59XG5cbmZ1bmN0aW9uIHByb3BlcnR5U3RlcChkYXRhc2V0SWQpIHtcbiAgICBsZXQgZGF0YXNldE5hbWUgPSBzdGF0ZS5kYXRhc2V0X25hbWVbcGFyc2VkU3RhdGVJZChkYXRhc2V0SWQpLmN1cnJlbnRQb3NdO1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ3Byb3BlcnR5U3RlcCcsXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgICAgICAgICBsYWJlbGVyKCdkYXRhc2V0U3RlcCcsICgpID0+IGRhdGFzZXRTdGVwKCksIGRhdGFzZXROYW1lKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZS5kYXRhc2V0X2tleXNbcGFyc2VkU3RhdGVJZChkYXRhc2V0SWQpLmN1cnJlbnRQb3NdXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoa2V5ID0+IGRhdGFzZXROYW1lICsgJy4nICsga2V5KVxuICAgICAgICAgICAgICAgICAgICAubWFwKGtleSA9PiBsYWJlbGVyKCd0eXBlU3RlcCcsICgpID0+IHR5cGVTdGVwKGtleSksIGtleSkpXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgfSwgdGVtcGxhdGVBKTtcbn1cblxuZnVuY3Rpb24gdHlwZVN0ZXAoZGF0YXNldFByb3BlcnR5KSB7XG4gICAgbGV0IGRhdGFzZXROYW1lID0gZGF0YXNldFByb3BlcnR5LnNwbGl0KCcuJylbMF07XG4gICAgbGV0IGRhdGFzZXRJZCA9ICdkYXRhc2V0IycgKyBzdGF0ZS5kYXRhc2V0X25hbWUuZmluZEluZGV4KG4gPT4gbiA9PT0gZGF0YXNldE5hbWUpO1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ3R5cGVTdGVwJyxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbXG4gICAgICAgICAgICAgICAgc3RhcnRTdGVwLFxuICAgICAgICAgICAgICAgIGxhYmVsZXIoJ3Byb3BlcnR5U3RlcCcsICgpID0+IHByb3BlcnR5U3RlcChkYXRhc2V0SWQpLCBkYXRhc2V0TmFtZSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbXG4gICAgICAgICAgICAgICAgLi4uW3JhbmRvbVN0ZXAsIGNvbm5lY3RlZFN0ZXAsIGZpeGVkU3RlcF1cbiAgICAgICAgICAgICAgICAgICAgLm1hcChmdW4gPT4gbGFiZWxlcihmdW4ubmFtZSwgKCkgPT4gZnVuKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSkpXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgfSwgdGVtcGxhdGVCKTtcbn1cblxuZnVuY3Rpb24gcmFuZG9tU3RlcChkYXRhc2V0UHJvcGVydHkpIHtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdyYW5kb21TdGVwJyxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbXG4gICAgICAgICAgICAgICAgc3RhcnRTdGVwLFxuICAgICAgICAgICAgICAgIGxhYmVsZXIoJ3R5cGVTdGVwJywgKCkgPT4gdHlwZVN0ZXAoZGF0YXNldFByb3BlcnR5KSwgZGF0YXNldFByb3BlcnR5KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFtcbiAgICAgICAgICAgICAgICBsYWJlbGVyKCdleGl0U3RlcCcsIGV4aXRTdGVwKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSksXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgfSwgdGVtcGxhdGVDKTtcbn1cblxuZnVuY3Rpb24gY29ubmVjdGVkU3RlcChkYXRhc2V0UHJvcGVydHkpIHtcbiAgICBsZXQgZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCA9IGRhdGFzZXRQcm9wZXJ0eSArICcvJztcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdjb25uZWN0ZWRTdGVwJyxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbXG4gICAgICAgICAgICAgICAgc3RhcnRTdGVwLFxuICAgICAgICAgICAgICAgIGxhYmVsZXIoJ3R5cGVTdGVwJywgKCkgPT4gdHlwZVN0ZXAoZGF0YXNldFByb3BlcnR5KSwgZGF0YXNldFByb3BlcnR5KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFtcbiAgICAgICAgICAgICAgICAuLi5kYXRhc2V0SW5kZXhlcyhkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4KVxuICAgICAgICAgICAgICAgICAgICAubWFwKChhcmcsIGluZGV4KSA9PiBsYWJlbGVyKCdleGl0U3RlcCAnICsgZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCArIGluZGV4LCBleGl0U3RlcChhcmcpKSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICB9LCB0ZW1wbGF0ZUEpO1xufVxuXG5mdW5jdGlvbiBmaXhlZFN0ZXAoZGF0YXNldFByb3BlcnR5KSB7XG4gICAgbGV0IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggPSBkYXRhc2V0UHJvcGVydHkgKyAnIyc7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAnZml4ZWRTdGVwJyxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbXG4gICAgICAgICAgICAgICAgc3RhcnRTdGVwLFxuICAgICAgICAgICAgICAgIGxhYmVsZXIoJ3R5cGVTdGVwJywgKCkgPT4gdHlwZVN0ZXAoZGF0YXNldFByb3BlcnR5KSwgZGF0YXNldFByb3BlcnR5KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFtcbiAgICAgICAgICAgICAgICAuLi5kYXRhc2V0SW5kZXhlcyhkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4KVxuICAgICAgICAgICAgICAgICAgICAubWFwKChhcmcsIGluZGV4KSA9PiBsYWJlbGVyKCdleGl0U3RlcCAnICsgZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCArIGluZGV4LCBleGl0U3RlcChhcmcpKSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICB9LCB0ZW1wbGF0ZUIpO1xufVxuXG5mdW5jdGlvbiBleGl0U3RlcCh2YWx1ZSwgaW5kZXgpIHsgLy8gcmVhc29uc2ZvcmNvbG9nbmUuaW1hZ2UvMiAtLT4gJChyZWFzb25zZm9yY29sb2duZS5pbWFnZS8yKVxuICAgIGxldCByZXN1bHQgPSAoKSA9PiB7XG4gICAgICAgIGFsZXJ0KCckKCcgKyB2YWx1ZSArICcpJyk7XG4gICAgfTtcbiAgICByZXR1cm4gbGFiZWxlcignZXhpdFN0ZXAnLCByZXN1bHQsIGluZGV4KTtcbn1cblxuZnVuY3Rpb24gZGF0YXNldEluZGV4ZXMoZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCkgeyAvLyByZWFzb25zZm9yY29sb2duZS5pbWFnZSAtPiByZWFzb25zZm9yY29sb2duZS5pbWFnZS8yXG4gICAgbGV0IGRhdGFzZXROYW1lID0gZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeC5zcGxpdCgnLicpWzBdO1xuICAgIGxldCBkYXRhc2V0UG9zID0gc3RhdGUuZGF0YXNldF9uYW1lLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IGRhdGFzZXROYW1lKTtcbiAgICBsZXQgbnVtSW5zdGFuY2VzID0gc3RhdGUuZGF0YXNldFsnZGF0YXNldCMnICsgZGF0YXNldFBvc10ubGVuZ3RoO1xuICAgIHJldHVybiBbLi4uQXJyYXkobnVtSW5zdGFuY2VzKS5rZXlzKCldLm1hcChrZXkgPT4gZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCArIGtleSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlZFN0YXRlSWQoaWQpIHtcbiAgICBsZXQgcGllY2VzID0gaWQuc3BsaXQoJyMnKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50UG9zOiBwaWVjZXNbMV0sXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbGFiZWxlcihzdGVwTmFtZSwgZnVuLCBsYWJlbFZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1biwgJ25hbWUnLCB7XG4gICAgICAgIHZhbHVlOiBzdGVwTmFtZSArICcgJ1xuICAgICAgICArICgodHlwZW9mIGxhYmVsVmFsdWUgIT09ICd1bmRlZmluZWQnKSA/IGxhYmVsVmFsdWUgOiAnJylcbiAgICB9KTtcbiAgICByZXR1cm4gZnVuO1xufVxuIl19