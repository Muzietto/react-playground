define(['exports', './initialState', './view', '../template/startStep_template'], function (exports, _initialState, _view, _startStep_template) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.startStep = startStep;

    var _view2 = _interopRequireDefault(_view);

    var _startStep_template2 = _interopRequireDefault(_startStep_template);

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
                disabled: false,
                onClick: () => {
                    alert('cancel button clicked');
                }
            },
            saveButton: {
                disabled: true,
                onClick: () => {
                    alert('SAVE button clicked');
                }
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
            backward: [startStep],
            forward: [..._initialState.initialState.customvar.map(customVar => labeler('exitStep', exitStep(customVar), customVar))]
        }, templateB);
    }

    function datasetStep() {
        return (0, _view2.default)({
            location: 'datasetStep',
            backward: [startStep],
            forward: [...Object.keys(_initialState.initialState.dataset).map(key => labeler('propertyStep', () => propertyStep(key), _initialState.initialState.dataset_name[parsedStateId(key).currentPos]))]
        }, templateC);
    }

    function propertyStep(datasetId) {
        let datasetName = _initialState.initialState.dataset_name[parsedStateId(datasetId).currentPos];
        return (0, _view2.default)({
            location: 'propertyStep',
            backward: [startStep, labeler('datasetStep', () => datasetStep(), datasetName)],
            forward: [..._initialState.initialState.dataset_keys[parsedStateId(datasetId).currentPos].map(key => datasetName + '.' + key).map(key => labeler('typeStep', () => typeStep(key), key))]
        }, templateA);
    }

    function typeStep(datasetProperty) {
        let datasetName = datasetProperty.split('.')[0];
        let datasetId = 'dataset#' + _initialState.initialState.dataset_name.findIndex(n => n === datasetName);
        return (0, _view2.default)({
            location: 'typeStep',
            backward: [startStep, labeler('propertyStep', () => propertyStep(datasetId), datasetName)],
            forward: [...[randomStep, connectedStep, fixedStep].map(fun => labeler(fun.name, () => fun(datasetProperty), datasetProperty))]
        }, templateB);
    }

    function randomStep(datasetProperty) {
        return (0, _view2.default)({
            location: 'randomStep',
            backward: [startStep, labeler('typeStep', () => typeStep(datasetProperty), datasetProperty)],
            forward: [labeler('exitStep', exitStep(datasetProperty), datasetProperty)]
        }, templateC);
    }

    function connectedStep(datasetProperty) {
        let datasetPropertyWithSuffix = datasetProperty + '/';
        return (0, _view2.default)({
            location: 'connectedStep',
            backward: [startStep, labeler('typeStep', () => typeStep(datasetProperty), datasetProperty)],
            forward: [...datasetIndexes(datasetPropertyWithSuffix).map((arg, index) => labeler('exitStep ' + datasetPropertyWithSuffix + index, exitStep(arg)))]
        }, templateA);
    }

    function fixedStep(datasetProperty) {
        let datasetPropertyWithSuffix = datasetProperty + '#';
        return (0, _view2.default)({
            location: 'fixedStep',
            backward: [startStep, labeler('typeStep', () => typeStep(datasetProperty), datasetProperty)],
            forward: [...datasetIndexes(datasetPropertyWithSuffix).map((arg, index) => labeler('exitStep ' + datasetPropertyWithSuffix + index, exitStep(arg)))]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9zdGF0ZV9tYWNoaW5lL3N0ZXBzLmpzIl0sIm5hbWVzIjpbInN0YXJ0U3RlcCIsIndpemFyZFByb3BzIiwiYm9keSIsImJvZHlfcmVuZGVyZXIiLCJ1bmRlZmluZWQiLCJzdW1tYXJ5Iiwic3RlcCIsImNvcmUiLCJjb3JlX3JlbmRlcmVyIiwibWVzc2FnZSIsImZvb3RlciIsImNhbmNlbEJ1dHRvbiIsImRpc2FibGVkIiwib25DbGljayIsImFsZXJ0Iiwic2F2ZUJ1dHRvbiIsImxvY2F0aW9uIiwiaGFuZGxlcnMiLCJiYWNrd2FyZCIsImZvcndhcmQiLCJjdXN0b212YXJTdGVwIiwiZGF0YXNldFN0ZXAiLCJjdXN0b212YXIiLCJtYXAiLCJjdXN0b21WYXIiLCJsYWJlbGVyIiwiZXhpdFN0ZXAiLCJ0ZW1wbGF0ZUIiLCJPYmplY3QiLCJrZXlzIiwiZGF0YXNldCIsImtleSIsInByb3BlcnR5U3RlcCIsImRhdGFzZXRfbmFtZSIsInBhcnNlZFN0YXRlSWQiLCJjdXJyZW50UG9zIiwidGVtcGxhdGVDIiwiZGF0YXNldElkIiwiZGF0YXNldE5hbWUiLCJkYXRhc2V0X2tleXMiLCJ0eXBlU3RlcCIsInRlbXBsYXRlQSIsImRhdGFzZXRQcm9wZXJ0eSIsInNwbGl0IiwiZmluZEluZGV4IiwibiIsInJhbmRvbVN0ZXAiLCJjb25uZWN0ZWRTdGVwIiwiZml4ZWRTdGVwIiwiZnVuIiwibmFtZSIsImRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXgiLCJkYXRhc2V0SW5kZXhlcyIsImFyZyIsImluZGV4IiwidmFsdWUiLCJyZXN1bHQiLCJkYXRhc2V0UG9zIiwiaXRlbSIsIm51bUluc3RhbmNlcyIsImxlbmd0aCIsIkFycmF5IiwiaWQiLCJwaWVjZXMiLCJzdGVwTmFtZSIsImxhYmVsVmFsdWUiLCJkZWZpbmVQcm9wZXJ0eSJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztZQWlDZ0JBLFMsR0FBQUEsUzs7Ozs7Ozs7Ozs7O0FBM0JoQixRQUFJQyxjQUFjO0FB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QUFQO0FBRFQsU0FBUDtBQUdIOztBQUVELGFBQVN0QyxPQUFULENBQWlCdUMsUUFBakIsRUFBMkJmLEdBQTNCLEVBQWdDZ0IsVUFBaEMsRUFBNEM7QUFDeENyQyxlQUFPc0MsY0FBUCxDQUFzQmpCLEdBQXRCLEVBQTJCLE1BQTNCLEVBQW1DO0FBQy9CTSxtQkFBT1MsV0FBVyxHQUFYLElBQ0gsT0FBT0MsVUFBUCxLQUFzQixXQUF2QixHQUFzQ0EsVUFBdEMsR0FBbUQsRUFEL0M7QUFEd0IsU0FBbkM7QUFJQSxlQUFPaEIsR0FBUDtBQUNIIiwiZmlsZSI6InN0ZXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge2luaXRpYWxTdGF0ZSBhcyBzdGF0ZX0gZnJvbSAnLi9pbml0aWFsU3RhdGUnO1xuaW1wb3J0IGNob2ljZSBmcm9tICcuL3ZpZXcnO1xuaW1wb3J0IHN0YXJ0U3RlcF90ZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZS9zdGFydFN0ZXBfdGVtcGxhdGUnO1xuXG5sZXQgd2l6YXJkUHJvcHMgPSB7XG4gICAgYm9keToge1xuICAgICAgICBib2R5X3JlbmRlcmVyOiB1bmRlZmluZWQsXG4gICAgfSxcbiAgICBzdW1tYXJ5OiB7XG4gICAgICAgIHN0ZXA6IDEsXG4gICAgfSxcbiAgICBjb3JlOiB7XG4gICAgICAgIGNvcmVfcmVuZGVyZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgbWVzc2FnZTogJ2hlbGxvLCB3b3JsZCEnLFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICAgIGNhbmNlbEJ1dHRvbjoge1xuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdjYW5jZWwgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZUJ1dHRvbjoge1xuICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1NBVkUgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0U3RlcCgpIHtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdzdGFydFN0ZXAnLFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtdLFxuICAgICAgICAgICAgZm9yd2FyZDogW2N1c3RvbXZhclN0ZXAsIGRhdGFzZXRTdGVwXSxcbiAgICAgICAgfSxcbiAgICAgICAgZm9vdGVyOiB3aXphcmRQcm9wcy5mb290ZXIsXG4gICAgfSwgc3RhcnRTdGVwX3RlbXBsYXRlKTtcbn1cblxuZnVuY3Rpb24gY3VzdG9tdmFyU3RlcCgpIHtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdjdXN0b212YXJTdGVwJyxcbiAgICAgICAgYmFja3dhcmQ6IFtzdGFydFN0ZXAsXSxcbiAgICAgICAgZm9yd2FyZDogWy4uLnN0YXRlLmN1c3RvbXZhclxuICAgICAgICAgICAgLm1hcChjdXN0b21WYXIgPT4gbGFiZWxlcignZXhpdFN0ZXAnLCBleGl0U3RlcChjdXN0b21WYXIpLCBjdXN0b21WYXIpKV1cbiAgICB9LCB0ZW1wbGF0ZUIpO1xufVxuXG5mdW5jdGlvbiBkYXRhc2V0U3RlcCgpIHtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdkYXRhc2V0U3RlcCcsXG4gICAgICAgIGJhY2t3YXJkOiBbc3RhcnRTdGVwLF0sXG4gICAgICAgIGZvcndhcmQ6IFtcbiAgICAgICAgICAgIC4uLk9iamVjdC5rZXlzKHN0YXRlLmRhdGFzZXQpXG4gICAgICAgICAgICAgICAgLm1hcChrZXkgPT4gbGFiZWxlcigncHJvcGVydHlTdGVwJyxcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4gcHJvcGVydHlTdGVwKGtleSksIHN0YXRlLmRhdGFzZXRfbmFtZVtwYXJzZWRTdGF0ZUlkKGtleSkuY3VycmVudFBvc10pKVxuICAgICAgICBdXG4gICAgfSwgdGVtcGxhdGVDKTtcbn1cblxuZnVuY3Rpb24gcHJvcGVydHlTdGVwKGRhdGFzZXRJZCkge1xuICAgIGxldCBkYXRhc2V0TmFtZSA9IHN0YXRlLmRhdGFzZXRfbmFtZVtwYXJzZWRTdGF0ZUlkKGRhdGFzZXRJZCkuY3VycmVudFBvc107XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAncHJvcGVydHlTdGVwJyxcbiAgICAgICAgYmFja3dhcmQ6IFtcbiAgICAgICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgICAgIGxhYmVsZXIoJ2RhdGFzZXRTdGVwJywgKCkgPT4gZGF0YXNldFN0ZXAoKSwgZGF0YXNldE5hbWUpXG4gICAgICAgIF0sXG4gICAgICAgIGZvcndhcmQ6IFtcbiAgICAgICAgICAgIC4uLnN0YXRlLmRhdGFzZXRfa2V5c1twYXJzZWRTdGF0ZUlkKGRhdGFzZXRJZCkuY3VycmVudFBvc11cbiAgICAgICAgICAgICAgICAubWFwKGtleSA9PiBkYXRhc2V0TmFtZSArICcuJyArIGtleSlcbiAgICAgICAgICAgICAgICAubWFwKGtleSA9PiBsYWJlbGVyKCd0eXBlU3RlcCcsICgpID0+IHR5cGVTdGVwKGtleSksIGtleSkpXG4gICAgICAgIF1cbiAgICB9LCB0ZW1wbGF0ZUEpO1xufVxuXG5mdW5jdGlvbiB0eXBlU3RlcChkYXRhc2V0UHJvcGVydHkpIHtcbiAgICBsZXQgZGF0YXNldE5hbWUgPSBkYXRhc2V0UHJvcGVydHkuc3BsaXQoJy4nKVswXTtcbiAgICBsZXQgZGF0YXNldElkID0gJ2RhdGFzZXQjJyArIHN0YXRlLmRhdGFzZXRfbmFtZS5maW5kSW5kZXgobiA9PiBuID09PSBkYXRhc2V0TmFtZSk7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAndHlwZVN0ZXAnLFxuICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgc3RhcnRTdGVwLFxuICAgICAgICAgICAgbGFiZWxlcigncHJvcGVydHlTdGVwJywgKCkgPT4gcHJvcGVydHlTdGVwKGRhdGFzZXRJZCksIGRhdGFzZXROYW1lKVxuICAgICAgICBdLFxuICAgICAgICBmb3J3YXJkOiBbXG4gICAgICAgICAgICAuLi5bcmFuZG9tU3RlcCwgY29ubmVjdGVkU3RlcCwgZml4ZWRTdGVwXVxuICAgICAgICAgICAgICAgIC5tYXAoZnVuID0+IGxhYmVsZXIoZnVuLm5hbWUsICgpID0+IGZ1bihkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpKVxuICAgICAgICBdXG4gICAgfSwgdGVtcGxhdGVCKTtcbn1cblxuZnVuY3Rpb24gcmFuZG9tU3RlcChkYXRhc2V0UHJvcGVydHkpIHtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdyYW5kb21TdGVwJyxcbiAgICAgICAgYmFja3dhcmQ6IFtcbiAgICAgICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgICAgIGxhYmVsZXIoJ3R5cGVTdGVwJywgKCkgPT4gdHlwZVN0ZXAoZGF0YXNldFByb3BlcnR5KSwgZGF0YXNldFByb3BlcnR5KVxuICAgICAgICBdLFxuICAgICAgICBmb3J3YXJkOiBbXG4gICAgICAgICAgICBsYWJlbGVyKCdleGl0U3RlcCcsIGV4aXRTdGVwKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSksXG4gICAgICAgIF1cbiAgICB9LCB0ZW1wbGF0ZUMpO1xufVxuXG5mdW5jdGlvbiBjb25uZWN0ZWRTdGVwKGRhdGFzZXRQcm9wZXJ0eSkge1xuICAgIGxldCBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4ID0gZGF0YXNldFByb3BlcnR5ICsgJy8nO1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ2Nvbm5lY3RlZFN0ZXAnLFxuICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgc3RhcnRTdGVwLFxuICAgICAgICAgICAgbGFiZWxlcigndHlwZVN0ZXAnLCAoKSA9PiB0eXBlU3RlcChkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpXG4gICAgICAgIF0sXG4gICAgICAgIGZvcndhcmQ6IFtcbiAgICAgICAgICAgIC4uLmRhdGFzZXRJbmRleGVzKGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXgpXG4gICAgICAgICAgICAgICAgLm1hcCgoYXJnLCBpbmRleCkgPT4gbGFiZWxlcignZXhpdFN0ZXAgJyArIGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggKyBpbmRleCwgZXhpdFN0ZXAoYXJnKSkpXG4gICAgICAgIF1cbiAgICB9LCB0ZW1wbGF0ZUEpO1xufVxuXG5mdW5jdGlvbiBmaXhlZFN0ZXAoZGF0YXNldFByb3BlcnR5KSB7XG4gICAgbGV0IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggPSBkYXRhc2V0UHJvcGVydHkgKyAnIyc7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAnZml4ZWRTdGVwJyxcbiAgICAgICAgYmFja3dhcmQ6IFtcbiAgICAgICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgICAgIGxhYmVsZXIoJ3R5cGVTdGVwJywgKCkgPT4gdHlwZVN0ZXAoZGF0YXNldFByb3BlcnR5KSwgZGF0YXNldFByb3BlcnR5KVxuICAgICAgICBdLFxuICAgICAgICBmb3J3YXJkOiBbXG4gICAgICAgICAgICAuLi5kYXRhc2V0SW5kZXhlcyhkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4KVxuICAgICAgICAgICAgICAgIC5tYXAoKGFyZywgaW5kZXgpID0+IGxhYmVsZXIoJ2V4aXRTdGVwICcgKyBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4ICsgaW5kZXgsIGV4aXRTdGVwKGFyZykpKVxuICAgICAgICBdXG4gICAgfSwgdGVtcGxhdGVCKTtcbn1cblxuZnVuY3Rpb24gZXhpdFN0ZXAodmFsdWUsIGluZGV4KSB7IC8vIHJlYXNvbnNmb3Jjb2xvZ25lLmltYWdlLzIgLS0+ICQocmVhc29uc2ZvcmNvbG9nbmUuaW1hZ2UvMilcbiAgICBsZXQgcmVzdWx0ID0gKCkgPT4ge1xuICAgICAgICBhbGVydCgnJCgnICsgdmFsdWUgKyAnKScpO1xuICAgIH07XG4gICAgcmV0dXJuIGxhYmVsZXIoJ2V4aXRTdGVwJywgcmVzdWx0LCBpbmRleCk7XG59XG5cbmZ1bmN0aW9uIGRhdGFzZXRJbmRleGVzKGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXgpIHsgLy8gcmVhc29uc2ZvcmNvbG9nbmUuaW1hZ2UgLT4gcmVhc29uc2ZvcmNvbG9nbmUuaW1hZ2UvMlxuICAgIGxldCBkYXRhc2V0TmFtZSA9IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXguc3BsaXQoJy4nKVswXTtcbiAgICBsZXQgZGF0YXNldFBvcyA9IHN0YXRlLmRhdGFzZXRfbmFtZS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSBkYXRhc2V0TmFtZSk7XG4gICAgbGV0IG51bUluc3RhbmNlcyA9IHN0YXRlLmRhdGFzZXRbJ2RhdGFzZXQjJyArIGRhdGFzZXRQb3NdLmxlbmd0aDtcbiAgICByZXR1cm4gWy4uLkFycmF5KG51bUluc3RhbmNlcykua2V5cygpXS5tYXAoa2V5ID0+IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggKyBrZXkpO1xufVxuXG5mdW5jdGlvbiBwYXJzZWRTdGF0ZUlkKGlkKSB7XG4gICAgbGV0IHBpZWNlcyA9IGlkLnNwbGl0KCcjJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudFBvczogcGllY2VzWzFdLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGxhYmVsZXIoc3RlcE5hbWUsIGZ1biwgbGFiZWxWYWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW4sICduYW1lJywge1xuICAgICAgICB2YWx1ZTogc3RlcE5hbWUgKyAnICdcbiAgICAgICAgKyAoKHR5cGVvZiBsYWJlbFZhbHVlICE9PSAndW5kZWZpbmVkJykgPyBsYWJlbFZhbHVlIDogJycpXG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bjtcbn1cbiJdfQ==