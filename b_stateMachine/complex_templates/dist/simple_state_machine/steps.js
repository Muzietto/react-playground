define(['exports', './initialState', './view'], function (exports, _initialState, _view) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.startStep = startStep;

    var _view2 = _interopRequireDefault(_view);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function startStep() {
        return (0, _view2.default)({
            location: 'startStep',
            backward: [],
            forward: [customvarStep, datasetStep]
        }, _view.templateA);
    }

    function customvarStep() {
        return (0, _view2.default)({
            location: 'customvarStep',
            backward: [startStep],
            forward: [..._initialState.initialState.customvar.map(customVar => labeler('exitStep', exitStep(customVar), customVar))]
        }, _view.templateB);
    }

    function datasetStep() {
        return (0, _view2.default)({
            location: 'datasetStep',
            backward: [startStep],
            forward: [...Object.keys(_initialState.initialState.dataset).map(key => labeler('propertyStep', () => propertyStep(key), _initialState.initialState.dataset_name[parsedStateId(key).currentPos]))]
        }, _view.templateC);
    }

    function propertyStep(datasetId) {
        let datasetName = _initialState.initialState.dataset_name[parsedStateId(datasetId).currentPos];
        return (0, _view2.default)({
            location: 'propertyStep',
            backward: [startStep, labeler('datasetStep', () => datasetStep(), datasetName)],
            forward: [..._initialState.initialState.dataset_keys[parsedStateId(datasetId).currentPos].map(key => datasetName + '.' + key).map(key => labeler('typeStep', () => typeStep(key), key))]
        }, _view.templateA);
    }

    function typeStep(datasetProperty) {
        let datasetName = datasetProperty.split('.')[0];
        let datasetId = 'dataset#' + _initialState.initialState.dataset_name.findIndex(n => n === datasetName);
        return (0, _view2.default)({
            location: 'typeStep',
            backward: [startStep, labeler('propertyStep', () => propertyStep(datasetId), datasetName)],
            forward: [...[randomStep, connectedStep, fixedStep].map(fun => labeler(fun.name, () => fun(datasetProperty), datasetProperty))]
        }, _view.templateB);
    }

    function randomStep(datasetProperty) {
        return (0, _view2.default)({
            location: 'randomStep',
            backward: [startStep, labeler('typeStep', () => typeStep(datasetProperty), datasetProperty)],
            forward: [labeler('exitStep', exitStep(datasetProperty), datasetProperty)]
        }, _view.templateC);
    }

    function connectedStep(datasetProperty) {
        let datasetPropertyWithSuffix = datasetProperty + '/';
        return (0, _view2.default)({
            location: 'connectedStep',
            backward: [startStep, labeler('typeStep', () => typeStep(datasetProperty), datasetProperty)],
            forward: [...datasetIndexes(datasetPropertyWithSuffix).map((arg, index) => labeler('exitStep ' + datasetPropertyWithSuffix + index, exitStep(arg)))]
        }, _view.templateA);
    }

    function fixedStep(datasetProperty) {
        let datasetPropertyWithSuffix = datasetProperty + '#';
        return (0, _view2.default)({
            location: 'fixedStep',
            backward: [startStep, labeler('typeStep', () => typeStep(datasetProperty), datasetProperty)],
            forward: [...datasetIndexes(datasetPropertyWithSuffix).map((arg, index) => labeler('exitStep ' + datasetPropertyWithSuffix + index, exitStep(arg)))]
        }, _view.templateB);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9zaW1wbGVfc3RhdGVfbWFjaGluZS9zdGVwcy5qcyJdLCJuYW1lcyI6WyJzdGFydFN0ZXAiLCJsb2NhdGlvbiIsImJhY2t3YXJkIiwiZm9yd2FyZCIsImN1c3RvbXZhclN0ZXAiLCJkYXRhc2V0U3RlcCIsImN1c3RvbXZhciIsIm1hcCIsImN1c3RvbVZhciIsImxhYmVsZXIiLCJleGl0U3RlcCIsIk9iamVjdCIsImtleXMiLCJkYXRhc2V0Iiwia2V5IiwicHJvcGVydHlTdGVwIiwiZGF0YXNldF9uYW1lIiwicGFyc2VkU3RhdGVJZCIsImN1cnJlbnRQb3MiLCJkYXRhc2V0SWQiLCJkYXRhc2V0TmFtZSIsImRhdGFzZXRfa2V5cyIsInR5cGVTdGVwIiwiZGF0YXNldFByb3BlcnR5Iiwic3BsaXQiLCJmaW5kSW5kZXgiLCJuIiwicmFuZG9tU3RlcCIsImNvbm5lY3RlZFN0ZXAiLCJmaXhlZFN0ZXAiLCJmdW4iLCJuYW1lIiwiZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCIsImRhdGFzZXRJbmRleGVzIiwiYXJnIiwiaW5kZXgiLCJ2YWx1ZSIsInJlc3VsdCIsImFsZXJ0IiwiZGF0YXNldFBvcyIsIml0ZW0iLCJudW1JbnN0YW5jZXMiLCJsZW5ndGgiLCJBcnJheSIsImlkIiwicGllY2VzIiwic3RlcE5hbWUiLCJsYWJlbFZhbHVlIiwiZGVmaW5lUHJvcGVydHkiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7WUFNZ0JBLFMsR0FBQUEsUzs7Ozs7Ozs7OztBQUFULGFBQVNBLFNBQVQsR0FBcUI7QUFDeEIsZUFBTyxvQkFBTztBQUNWQyxzQkFBVSxXQURBO0FBRVZDLHNCQUFVLEVBRkE7QUFHVkMscUJBQVMsQ0FBQ0MsYUFBRCxFQUFnQkMsV0FBaEI7QUFIQyxTQUFQLGtCQUFQO0FBS0g7O0FBRUQsYUFBU0QsYUFBVCxHQUF5QjtBQUNyQixlQUFPLG9CQUFPO0FBQ1ZILHNCQUFVLGVBREE7QUFFVkMsc0JBQVUsQ0FBQ0YsU0FBRCxDQUZBO0FBR1ZH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QU4sQ0FBYyxhQUFhMEIsVUFBM0IsRUFBdUNHLE1BQTFEO0FBQ0EsZUFBTyxDQUFDLEdBQUdDLE1BQU1GLFlBQU4sRUFBb0I3QixJQUFwQixFQUFKLEVBQWdDTCxHQUFoQyxDQUFvQ08sT0FBT2tCLDRCQUE0QmxCLEdBQXZFLENBQVA7QUFDSDs7QUFFRCxhQUFTRyxhQUFULENBQXVCMkIsRUFBdkIsRUFBMkI7QUFDdkIsWUFBSUMsU0FBU0QsR0FBR3BCLEtBQUgsQ0FBUyxHQUFULENBQWI7QUFDQSxlQUFPO0FBQ0hOLHdCQUFZMkIsT0FBTyxDQUFQO0FBRFQsU0FBUDtBQUdIOztBQUVELGFBQVNwQyxPQUFULENBQWlCcUMsUUFBakIsRUFBMkJoQixHQUEzQixFQUFnQ2lCLFVBQWhDLEVBQTRDO0FBQ3hDcEMsZUFBT3FDLGNBQVAsQ0FBc0JsQixHQUF0QixFQUEyQixNQUEzQixFQUFtQztBQUMvQk0sbUJBQU9VLFdBQVcsR0FBWCxJQUNILE9BQU9DLFVBQVAsS0FBc0IsV0FBdkIsR0FBc0NBLFVBQXRDLEdBQW1ELEVBRC9DO0FBRHdCLFNBQW5DO0FBSUEsZUFBT2pCLEdBQVA7QUFDSCIsImZpbGUiOiJzdGVwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtpbml0aWFsU3RhdGUgYXMgc3RhdGV9IGZyb20gJy4vaW5pdGlhbFN0YXRlJztcbmltcG9ydCBjaG9pY2UgZnJvbSAnLi92aWV3JztcbmltcG9ydCB7dGVtcGxhdGVBLCB0ZW1wbGF0ZUIsIHRlbXBsYXRlQ30gZnJvbSAnLi92aWV3JztcblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0U3RlcCgpIHtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdzdGFydFN0ZXAnLFxuICAgICAgICBiYWNrd2FyZDogW10sXG4gICAgICAgIGZvcndhcmQ6IFtjdXN0b212YXJTdGVwLCBkYXRhc2V0U3RlcF0sXG4gICAgfSwgdGVtcGxhdGVBKTtcbn1cblxuZnVuY3Rpb24gY3VzdG9tdmFyU3RlcCgpIHtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdjdXN0b212YXJTdGVwJyxcbiAgICAgICAgYmFja3dhcmQ6IFtzdGFydFN0ZXAsXSxcbiAgICAgICAgZm9yd2FyZDogWy4uLnN0YXRlLmN1c3RvbXZhclxuICAgICAgICAgICAgLm1hcChjdXN0b21WYXIgPT4gbGFiZWxlcignZXhpdFN0ZXAnLCBleGl0U3RlcChjdXN0b21WYXIpLCBjdXN0b21WYXIpKV1cbiAgICB9LCB0ZW1wbGF0ZUIpO1xufVxuXG5mdW5jdGlvbiBkYXRhc2V0U3RlcCgpIHtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdkYXRhc2V0U3RlcCcsXG4gICAgICAgIGJhY2t3YXJkOiBbc3RhcnRTdGVwLF0sXG4gICAgICAgIGZvcndhcmQ6IFtcbiAgICAgICAgICAgIC4uLk9iamVjdC5rZXlzKHN0YXRlLmRhdGFzZXQpXG4gICAgICAgICAgICAgICAgLm1hcChrZXkgPT4gbGFiZWxlcigncHJvcGVydHlTdGVwJyxcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4gcHJvcGVydHlTdGVwKGtleSksIHN0YXRlLmRhdGFzZXRfbmFtZVtwYXJzZWRTdGF0ZUlkKGtleSkuY3VycmVudFBvc10pKVxuICAgICAgICBdXG4gICAgfSwgdGVtcGxhdGVDKTtcbn1cblxuZnVuY3Rpb24gcHJvcGVydHlTdGVwKGRhdGFzZXRJZCkge1xuICAgIGxldCBkYXRhc2V0TmFtZSA9IHN0YXRlLmRhdGFzZXRfbmFtZVtwYXJzZWRTdGF0ZUlkKGRhdGFzZXRJZCkuY3VycmVudFBvc107XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAncHJvcGVydHlTdGVwJyxcbiAgICAgICAgYmFja3dhcmQ6IFtcbiAgICAgICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgICAgIGxhYmVsZXIoJ2RhdGFzZXRTdGVwJywgKCkgPT4gZGF0YXNldFN0ZXAoKSwgZGF0YXNldE5hbWUpXG4gICAgICAgIF0sXG4gICAgICAgIGZvcndhcmQ6IFtcbiAgICAgICAgICAgIC4uLnN0YXRlLmRhdGFzZXRfa2V5c1twYXJzZWRTdGF0ZUlkKGRhdGFzZXRJZCkuY3VycmVudFBvc11cbiAgICAgICAgICAgICAgICAubWFwKGtleSA9PiBkYXRhc2V0TmFtZSArICcuJyArIGtleSlcbiAgICAgICAgICAgICAgICAubWFwKGtleSA9PiBsYWJlbGVyKCd0eXBlU3RlcCcsICgpID0+IHR5cGVTdGVwKGtleSksIGtleSkpXG4gICAgICAgIF1cbiAgICB9LCB0ZW1wbGF0ZUEpO1xufVxuXG5mdW5jdGlvbiB0eXBlU3RlcChkYXRhc2V0UHJvcGVydHkpIHtcbiAgICBsZXQgZGF0YXNldE5hbWUgPSBkYXRhc2V0UHJvcGVydHkuc3BsaXQoJy4nKVswXTtcbiAgICBsZXQgZGF0YXNldElkID0gJ2RhdGFzZXQjJyArIHN0YXRlLmRhdGFzZXRfbmFtZS5maW5kSW5kZXgobiA9PiBuID09PSBkYXRhc2V0TmFtZSk7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAndHlwZVN0ZXAnLFxuICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgc3RhcnRTdGVwLFxuICAgICAgICAgICAgbGFiZWxlcigncHJvcGVydHlTdGVwJywgKCkgPT4gcHJvcGVydHlTdGVwKGRhdGFzZXRJZCksIGRhdGFzZXROYW1lKVxuICAgICAgICBdLFxuICAgICAgICBmb3J3YXJkOiBbXG4gICAgICAgICAgICAuLi5bcmFuZG9tU3RlcCwgY29ubmVjdGVkU3RlcCwgZml4ZWRTdGVwXVxuICAgICAgICAgICAgICAgIC5tYXAoZnVuID0+IGxhYmVsZXIoZnVuLm5hbWUsICgpID0+IGZ1bihkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpKVxuICAgICAgICBdXG4gICAgfSwgdGVtcGxhdGVCKTtcbn1cblxuZnVuY3Rpb24gcmFuZG9tU3RlcChkYXRhc2V0UHJvcGVydHkpIHtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdyYW5kb21TdGVwJyxcbiAgICAgICAgYmFja3dhcmQ6IFtcbiAgICAgICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgICAgIGxhYmVsZXIoJ3R5cGVTdGVwJywgKCkgPT4gdHlwZVN0ZXAoZGF0YXNldFByb3BlcnR5KSwgZGF0YXNldFByb3BlcnR5KVxuICAgICAgICBdLFxuICAgICAgICBmb3J3YXJkOiBbXG4gICAgICAgICAgICBsYWJlbGVyKCdleGl0U3RlcCcsIGV4aXRTdGVwKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSksXG4gICAgICAgIF1cbiAgICB9LCB0ZW1wbGF0ZUMpO1xufVxuXG5mdW5jdGlvbiBjb25uZWN0ZWRTdGVwKGRhdGFzZXRQcm9wZXJ0eSkge1xuICAgIGxldCBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4ID0gZGF0YXNldFByb3BlcnR5ICsgJy8nO1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ2Nvbm5lY3RlZFN0ZXAnLFxuICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgc3RhcnRTdGVwLFxuICAgICAgICAgICAgbGFiZWxlcigndHlwZVN0ZXAnLCAoKSA9PiB0eXBlU3RlcChkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpXG4gICAgICAgIF0sXG4gICAgICAgIGZvcndhcmQ6IFtcbiAgICAgICAgICAgIC4uLmRhdGFzZXRJbmRleGVzKGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXgpXG4gICAgICAgICAgICAgICAgLm1hcCgoYXJnLCBpbmRleCkgPT4gbGFiZWxlcignZXhpdFN0ZXAgJyArIGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggKyBpbmRleCwgZXhpdFN0ZXAoYXJnKSkpXG4gICAgICAgIF1cbiAgICB9LCB0ZW1wbGF0ZUEpO1xufVxuXG5mdW5jdGlvbiBmaXhlZFN0ZXAoZGF0YXNldFByb3BlcnR5KSB7XG4gICAgbGV0IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggPSBkYXRhc2V0UHJvcGVydHkgKyAnIyc7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAnZml4ZWRTdGVwJyxcbiAgICAgICAgYmFja3dhcmQ6IFtcbiAgICAgICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgICAgIGxhYmVsZXIoJ3R5cGVTdGVwJywgKCkgPT4gdHlwZVN0ZXAoZGF0YXNldFByb3BlcnR5KSwgZGF0YXNldFByb3BlcnR5KVxuICAgICAgICBdLFxuICAgICAgICBmb3J3YXJkOiBbXG4gICAgICAgICAgICAuLi5kYXRhc2V0SW5kZXhlcyhkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4KVxuICAgICAgICAgICAgICAgIC5tYXAoKGFyZywgaW5kZXgpID0+IGxhYmVsZXIoJ2V4aXRTdGVwICcgKyBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4ICsgaW5kZXgsIGV4aXRTdGVwKGFyZykpKVxuICAgICAgICBdXG4gICAgfSwgdGVtcGxhdGVCKTtcbn1cblxuZnVuY3Rpb24gZXhpdFN0ZXAodmFsdWUsIGluZGV4KSB7IC8vIHJlYXNvbnNmb3Jjb2xvZ25lLmltYWdlLzIgLS0+ICQocmVhc29uc2ZvcmNvbG9nbmUuaW1hZ2UvMilcbiAgICBsZXQgcmVzdWx0ID0gKCkgPT4ge1xuICAgICAgICBhbGVydCgnJCgnICsgdmFsdWUgKyAnKScpO1xuICAgIH07XG4gICAgcmV0dXJuIGxhYmVsZXIoJ2V4aXRTdGVwJywgcmVzdWx0LCBpbmRleCk7XG59XG5cbmZ1bmN0aW9uIGRhdGFzZXRJbmRleGVzKGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXgpIHsgLy8gcmVhc29uc2ZvcmNvbG9nbmUuaW1hZ2UgLT4gcmVhc29uc2ZvcmNvbG9nbmUuaW1hZ2UvMlxuICAgIGxldCBkYXRhc2V0TmFtZSA9IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXguc3BsaXQoJy4nKVswXTtcbiAgICBsZXQgZGF0YXNldFBvcyA9IHN0YXRlLmRhdGFzZXRfbmFtZS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSBkYXRhc2V0TmFtZSk7XG4gICAgbGV0IG51bUluc3RhbmNlcyA9IHN0YXRlLmRhdGFzZXRbJ2RhdGFzZXQjJyArIGRhdGFzZXRQb3NdLmxlbmd0aDtcbiAgICByZXR1cm4gWy4uLkFycmF5KG51bUluc3RhbmNlcykua2V5cygpXS5tYXAoa2V5ID0+IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggKyBrZXkpO1xufVxuXG5mdW5jdGlvbiBwYXJzZWRTdGF0ZUlkKGlkKSB7XG4gICAgbGV0IHBpZWNlcyA9IGlkLnNwbGl0KCcjJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudFBvczogcGllY2VzWzFdLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGxhYmVsZXIoc3RlcE5hbWUsIGZ1biwgbGFiZWxWYWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW4sICduYW1lJywge1xuICAgICAgICB2YWx1ZTogc3RlcE5hbWUgKyAnICdcbiAgICAgICAgKyAoKHR5cGVvZiBsYWJlbFZhbHVlICE9PSAndW5kZWZpbmVkJykgPyBsYWJlbFZhbHVlIDogJycpXG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bjtcbn1cbiJdfQ==