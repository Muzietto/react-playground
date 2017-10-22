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
            },
            footer: wizardProps.footer
        }, datasetStep_template);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9zdGF0ZV9tYWNoaW5lL3N0ZXBzLmpzIl0sIm5hbWVzIjpbInN0YXJ0U3RlcCIsIndpemFyZFByb3BzIiwiYm9keSIsImJvZHlfcmVuZGVyZXIiLCJ1bmRlZmluZWQiLCJzdW1tYXJ5Iiwic3RlcCIsImNvcmUiLCJjb3JlX3JlbmRlcmVyIiwibWVzc2FnZSIsImZvb3RlciIsImNhbmNlbEJ1dHRvbiIsImRpc2FibGVkIiwib25DbGljayIsImFsZXJ0IiwiY2xhc3NOYW1lIiwic2F2ZUJ1dHRvbiIsImxvY2F0aW9uIiwiaGFuZGxlcnMiLCJiYWNrd2FyZCIsImZvcndhcmQiLCJjdXN0b212YXJTdGVwIiwiZGF0YXNldFN0ZXAiLCJjdXN0b212YXIiLCJtYXAiLCJjdXN0b21WYXIiLCJsYWJlbGVyIiwiZXhpdFN0ZXAiLCJPYmplY3QiLCJrZXlzIiwiZGF0YXNldCIsImtleSIsInByb3BlcnR5U3RlcCIsImRhdGFzZXRfbmFtZSIsInBhcnNlZFN0YXRlSWQiLCJjdXJyZW50UG9zIiwiZGF0YXNldFN0ZXBfdGVtcGxhdGUiLCJkYXRhc2V0SWQiLCJkYXRhc2V0TmFtZSIsImRhdGFzZXRfa2V5cyIsInR5cGVTdGVwIiwidGVtcGxhdGVBIiwiZGF0YXNldFByb3BlcnR5Iiwic3BsaXQiLCJmaW5kSW5kZXgiLCJuIiwicmFuZG9tU3RlcCIsImNvbm5lY3RlZFN0ZXAiLCJmaXhlZFN0ZXAiLCJmdW4iLCJuYW1lIiwidGVtcGxhdGVCIiwidGVtcGxhdGVDIiwiZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCIsImRhdGFzZXRJbmRleGVzIiwiYXJnIiwiaW5kZXgiLCJ2YWx1ZSIsInJlc3VsdCIsImRhdGFzZXRQb3MiLCJpdGVtIiwibnVtSW5zdGFuY2VzIiwibGVuZ3RoIiwiQXJyYXkiLCJpZCIsInBpZWNlcyIsInN0ZXBOYW1lIiwibGFiZWxWYWx1ZSIsImRlZmluZVByb3BlcnR5Il0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O1lBb0NnQkEsUyxHQUFB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QUEzQixFQUF1Q0csTUFBMUQ7QUFDQSxlQUFPLENBQUMsR0FBR0MsTUFBTUYsWUFBTixFQUFvQmhDLElBQXBCLEVBQUosRUFBZ0NMLEdBQWhDLENBQW9DTyxPQUFPc0IsNEJBQTRCdEIsR0FBdkUsQ0FBUDtBQUNIOztBQUVELGFBQVNHLGFBQVQsQ0FBdUI4QixFQUF2QixFQUEyQjtBQUN2QixZQUFJQyxTQUFTRCxHQUFHckIsS0FBSCxDQUFTLEdBQVQsQ0FBYjtBQUNBLGVBQU87QUFDSFIsd0JBQVk4QixPQUFPLENBQVA7QUFEVCxTQUFQO0FBR0g7O0FBRUQsYUFBU3ZDLE9BQVQsQ0FBaUJ3QyxRQUFqQixFQUEyQmpCLEdBQTNCLEVBQWdDa0IsVUFBaEMsRUFBNEM7QUFDeEN2QyxlQUFPd0MsY0FBUCxDQUFzQm5CLEdBQXRCLEVBQTJCLE1BQTNCLEVBQW1DO0FBQy9CUSxtQkFBT1MsV0FBVyxHQUFYLElBQ0gsT0FBT0MsVUFBUCxLQUFzQixXQUF2QixHQUFzQ0EsVUFBdEMsR0FBbUQsRUFEL0M7QUFEd0IsU0FBbkM7QUFJQSxlQUFPbEIsR0FBUDtBQUNIIiwiZmlsZSI6InN0ZXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge2luaXRpYWxTdGF0ZSBhcyBzdGF0ZX0gZnJvbSAnLi9pbml0aWFsU3RhdGUnO1xuaW1wb3J0IGNob2ljZSBmcm9tICcuL3ZpZXcnO1xuaW1wb3J0IHN0YXJ0U3RlcF90ZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZS9zdGFydFN0ZXBfdGVtcGxhdGUnO1xuaW1wb3J0IGN1c3RvbXZhclN0ZXBfdGVtcGxhdGUgZnJvbSAnLi4vdGVtcGxhdGUvY3VzdG9tdmFyU3RlcF90ZW1wbGF0ZSc7XG5cbmxldCB3aXphcmRQcm9wcyA9IHtcbiAgICBib2R5OiB7XG4gICAgICAgIGJvZHlfcmVuZGVyZXI6IHVuZGVmaW5lZCxcbiAgICB9LFxuICAgIHN1bW1hcnk6IHtcbiAgICAgICAgc3RlcDogMSxcbiAgICB9LFxuICAgIGNvcmU6IHtcbiAgICAgICAgY29yZV9yZW5kZXJlcjogdW5kZWZpbmVkLFxuICAgICAgICBtZXNzYWdlOiAnaGVsbG8sIHdvcmxkIScsXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgICAgY2FuY2VsQnV0dG9uOiB7XG4gICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydCgnY2FuY2VsIGJ1dHRvbiBjbGlja2VkJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbGVmdF9idXR0b24nLFxuICAgICAgICB9LFxuICAgICAgICBzYXZlQnV0dG9uOiB7XG4gICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydCgnU0FWRSBidXR0b24gY2xpY2tlZCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3JpZ2h0X2J1dHRvbicsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFN0ZXAoKSB7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAnc3RhcnRTdGVwJyxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFtjdXN0b212YXJTdGVwLCBkYXRhc2V0U3RlcF0sXG4gICAgICAgIH0sXG4gICAgICAgIGZvb3Rlcjogd2l6YXJkUHJvcHMuZm9vdGVyLFxuICAgIH0sIHN0YXJ0U3RlcF90ZW1wbGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGN1c3RvbXZhclN0ZXAoKSB7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAnY3VzdG9tdmFyU3RlcCcsXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW3N0YXJ0U3RlcCxdLFxuICAgICAgICAgICAgZm9yd2FyZDogWy4uLnN0YXRlLmN1c3RvbXZhclxuICAgICAgICAgICAgICAgIC5tYXAoY3VzdG9tVmFyID0+IGxhYmVsZXIoJ2V4aXRTdGVwJywgZXhpdFN0ZXAoY3VzdG9tVmFyKSwgY3VzdG9tVmFyKSldXG4gICAgICAgIH0sXG4gICAgICAgIGZvb3Rlcjogd2l6YXJkUHJvcHMuZm9vdGVyLFxuICAgIH0sIGN1c3RvbXZhclN0ZXBfdGVtcGxhdGUpO1xufVxuXG5mdW5jdGlvbiBkYXRhc2V0U3RlcCgpIHtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdkYXRhc2V0U3RlcCcsXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW3N0YXJ0U3RlcCxdLFxuICAgICAgICAgICAgZm9yd2FyZDogW1xuICAgICAgICAgICAgICAgIC4uLk9iamVjdC5rZXlzKHN0YXRlLmRhdGFzZXQpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoa2V5ID0+IGxhYmVsZXIoJ3Byb3BlcnR5U3RlcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiBwcm9wZXJ0eVN0ZXAoa2V5KSwgc3RhdGUuZGF0YXNldF9uYW1lW3BhcnNlZFN0YXRlSWQoa2V5KS5jdXJyZW50UG9zXSkpXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIGZvb3Rlcjogd2l6YXJkUHJvcHMuZm9vdGVyLFxuICAgIH0sIGRhdGFzZXRTdGVwX3RlbXBsYXRlKTtcbn1cblxuZnVuY3Rpb24gcHJvcGVydHlTdGVwKGRhdGFzZXRJZCkge1xuICAgIGxldCBkYXRhc2V0TmFtZSA9IHN0YXRlLmRhdGFzZXRfbmFtZVtwYXJzZWRTdGF0ZUlkKGRhdGFzZXRJZCkuY3VycmVudFBvc107XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAncHJvcGVydHlTdGVwJyxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbXG4gICAgICAgICAgICAgICAgc3RhcnRTdGVwLFxuICAgICAgICAgICAgICAgIGxhYmVsZXIoJ2RhdGFzZXRTdGVwJywgKCkgPT4gZGF0YXNldFN0ZXAoKSwgZGF0YXNldE5hbWUpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZm9yd2FyZDogW1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLmRhdGFzZXRfa2V5c1twYXJzZWRTdGF0ZUlkKGRhdGFzZXRJZCkuY3VycmVudFBvc11cbiAgICAgICAgICAgICAgICAgICAgLm1hcChrZXkgPT4gZGF0YXNldE5hbWUgKyAnLicgKyBrZXkpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoa2V5ID0+IGxhYmVsZXIoJ3R5cGVTdGVwJywgKCkgPT4gdHlwZVN0ZXAoa2V5KSwga2V5KSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICB9LCB0ZW1wbGF0ZUEpO1xufVxuXG5mdW5jdGlvbiB0eXBlU3RlcChkYXRhc2V0UHJvcGVydHkpIHtcbiAgICBsZXQgZGF0YXNldE5hbWUgPSBkYXRhc2V0UHJvcGVydHkuc3BsaXQoJy4nKVswXTtcbiAgICBsZXQgZGF0YXNldElkID0gJ2RhdGFzZXQjJyArIHN0YXRlLmRhdGFzZXRfbmFtZS5maW5kSW5kZXgobiA9PiBuID09PSBkYXRhc2V0TmFtZSk7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAndHlwZVN0ZXAnLFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtcbiAgICAgICAgICAgICAgICBzdGFydFN0ZXAsXG4gICAgICAgICAgICAgICAgbGFiZWxlcigncHJvcGVydHlTdGVwJywgKCkgPT4gcHJvcGVydHlTdGVwKGRhdGFzZXRJZCksIGRhdGFzZXROYW1lKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFtcbiAgICAgICAgICAgICAgICAuLi5bcmFuZG9tU3RlcCwgY29ubmVjdGVkU3RlcCwgZml4ZWRTdGVwXVxuICAgICAgICAgICAgICAgICAgICAubWFwKGZ1biA9PiBsYWJlbGVyKGZ1bi5uYW1lLCAoKSA9PiBmdW4oZGF0YXNldFByb3BlcnR5KSwgZGF0YXNldFByb3BlcnR5KSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICB9LCB0ZW1wbGF0ZUIpO1xufVxuXG5mdW5jdGlvbiByYW5kb21TdGVwKGRhdGFzZXRQcm9wZXJ0eSkge1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ3JhbmRvbVN0ZXAnLFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtcbiAgICAgICAgICAgICAgICBzdGFydFN0ZXAsXG4gICAgICAgICAgICAgICAgbGFiZWxlcigndHlwZVN0ZXAnLCAoKSA9PiB0eXBlU3RlcChkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZm9yd2FyZDogW1xuICAgICAgICAgICAgICAgIGxhYmVsZXIoJ2V4aXRTdGVwJywgZXhpdFN0ZXAoZGF0YXNldFByb3BlcnR5KSwgZGF0YXNldFByb3BlcnR5KSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICB9LCB0ZW1wbGF0ZUMpO1xufVxuXG5mdW5jdGlvbiBjb25uZWN0ZWRTdGVwKGRhdGFzZXRQcm9wZXJ0eSkge1xuICAgIGxldCBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4ID0gZGF0YXNldFByb3BlcnR5ICsgJy8nO1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ2Nvbm5lY3RlZFN0ZXAnLFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtcbiAgICAgICAgICAgICAgICBzdGFydFN0ZXAsXG4gICAgICAgICAgICAgICAgbGFiZWxlcigndHlwZVN0ZXAnLCAoKSA9PiB0eXBlU3RlcChkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZm9yd2FyZDogW1xuICAgICAgICAgICAgICAgIC4uLmRhdGFzZXRJbmRleGVzKGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXgpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKGFyZywgaW5kZXgpID0+IGxhYmVsZXIoJ2V4aXRTdGVwICcgKyBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4ICsgaW5kZXgsIGV4aXRTdGVwKGFyZykpKVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgIH0sIHRlbXBsYXRlQSk7XG59XG5cbmZ1bmN0aW9uIGZpeGVkU3RlcChkYXRhc2V0UHJvcGVydHkpIHtcbiAgICBsZXQgZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCA9IGRhdGFzZXRQcm9wZXJ0eSArICcjJztcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdmaXhlZFN0ZXAnLFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtcbiAgICAgICAgICAgICAgICBzdGFydFN0ZXAsXG4gICAgICAgICAgICAgICAgbGFiZWxlcigndHlwZVN0ZXAnLCAoKSA9PiB0eXBlU3RlcChkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZm9yd2FyZDogW1xuICAgICAgICAgICAgICAgIC4uLmRhdGFzZXRJbmRleGVzKGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXgpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKGFyZywgaW5kZXgpID0+IGxhYmVsZXIoJ2V4aXRTdGVwICcgKyBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4ICsgaW5kZXgsIGV4aXRTdGVwKGFyZykpKVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgIH0sIHRlbXBsYXRlQik7XG59XG5cbmZ1bmN0aW9uIGV4aXRTdGVwKHZhbHVlLCBpbmRleCkgeyAvLyByZWFzb25zZm9yY29sb2duZS5pbWFnZS8yIC0tPiAkKHJlYXNvbnNmb3Jjb2xvZ25lLmltYWdlLzIpXG4gICAgbGV0IHJlc3VsdCA9ICgpID0+IHtcbiAgICAgICAgYWxlcnQoJyQoJyArIHZhbHVlICsgJyknKTtcbiAgICB9O1xuICAgIHJldHVybiBsYWJlbGVyKCdleGl0U3RlcCcsIHJlc3VsdCwgaW5kZXgpO1xufVxuXG5mdW5jdGlvbiBkYXRhc2V0SW5kZXhlcyhkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4KSB7IC8vIHJlYXNvbnNmb3Jjb2xvZ25lLmltYWdlIC0+IHJlYXNvbnNmb3Jjb2xvZ25lLmltYWdlLzJcbiAgICBsZXQgZGF0YXNldE5hbWUgPSBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4LnNwbGl0KCcuJylbMF07XG4gICAgbGV0IGRhdGFzZXRQb3MgPSBzdGF0ZS5kYXRhc2V0X25hbWUuZmluZEluZGV4KGl0ZW0gPT4gaXRlbSA9PT0gZGF0YXNldE5hbWUpO1xuICAgIGxldCBudW1JbnN0YW5jZXMgPSBzdGF0ZS5kYXRhc2V0WydkYXRhc2V0IycgKyBkYXRhc2V0UG9zXS5sZW5ndGg7XG4gICAgcmV0dXJuIFsuLi5BcnJheShudW1JbnN0YW5jZXMpLmtleXMoKV0ubWFwKGtleSA9PiBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4ICsga2V5KTtcbn1cblxuZnVuY3Rpb24gcGFyc2VkU3RhdGVJZChpZCkge1xuICAgIGxldCBwaWVjZXMgPSBpZC5zcGxpdCgnIycpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnRQb3M6IHBpZWNlc1sxXSxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBsYWJlbGVyKHN0ZXBOYW1lLCBmdW4sIGxhYmVsVmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuLCAnbmFtZScsIHtcbiAgICAgICAgdmFsdWU6IHN0ZXBOYW1lICsgJyAnXG4gICAgICAgICsgKCh0eXBlb2YgbGFiZWxWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcpID8gbGFiZWxWYWx1ZSA6ICcnKVxuICAgIH0pO1xuICAgIHJldHVybiBmdW47XG59XG4iXX0=