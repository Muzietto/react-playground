define(['exports', './initialState', './dsl'], function (exports, _initialState, _dsl) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.startStep = startStep;

    var _dsl2 = _interopRequireDefault(_dsl);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function startStep() {
        return (0, _dsl2.default)([customvarStep, datasetStep]);
    }

    function customvarStep() {
        return (0, _dsl2.default)([startStep, ..._initialState.initialState.customvar.map(customVar => labeler('exitStep', exitStep(customVar), customVar))]);
    }

    function datasetStep() {
        return (0, _dsl2.default)([startStep, ...Object.keys(_initialState.initialState.dataset).map(key => labeler('propertyStep', () => propertyStep(key), _initialState.initialState.dataset_name[parsedStateId(key).currentPos]))]);
    }

    function propertyStep(datasetId) {
        let datasetName = _initialState.initialState.dataset_name[parsedStateId(datasetId).currentPos];
        return (0, _dsl2.default)([startStep, labeler('back to datasetStep', () => datasetStep(), datasetName), ..._initialState.initialState.dataset_keys[parsedStateId(datasetId).currentPos].map(key => datasetName + '.' + key).map(key => labeler('typeStep', () => typeStep(key), key))]);
    }

    function typeStep(datasetProperty) {
        let datasetName = datasetProperty.split('.')[0];
        let datasetId = 'dataset#' + _initialState.initialState.dataset_name.findIndex(n => n === datasetName);
        return (0, _dsl2.default)([startStep, labeler('back to propertyStep', () => propertyStep(datasetId), datasetName), ...[randomStep, connectedStep, fixedStep].map(fun => labeler(fun.name, () => fun(datasetProperty), datasetProperty))]);
    }

    function randomStep(datasetProperty) {
        return (0, _dsl2.default)([startStep, labeler('back to typeStep', () => typeStep(datasetProperty), datasetProperty), labeler('exitStep', exitStep(datasetProperty), datasetProperty)]);
    }

    function connectedStep(datasetProperty) {
        let datasetPropertyWithSuffix = datasetProperty + '/';
        return (0, _dsl2.default)([startStep, labeler('back to typeStep', () => typeStep(datasetProperty), datasetProperty), ...datasetIndexes(datasetPropertyWithSuffix).map((arg, index) => labeler('exitStep ' + datasetPropertyWithSuffix + index, exitStep(arg)))]);
    }

    function fixedStep(datasetProperty) {
        let datasetPropertyWithSuffix = datasetProperty + '#';
        return (0, _dsl2.default)([startStep, labeler('back to typeStep', () => typeStep(datasetProperty), datasetProperty), ...datasetIndexes(datasetPropertyWithSuffix).map((arg, index) => labeler('exitStep ' + datasetPropertyWithSuffix + index, exitStep(arg)))]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9zdGVwcy5qcyJdLCJuYW1lcyI6WyJzdGFydFN0ZXAiLCJjdXN0b212YXJTdGVwIiwiZGF0YXNldFN0ZXAiLCJjdXN0b212YXIiLCJtYXAiLCJjdXN0b21WYXIiLCJsYWJlbGVyIiwiZXhpdFN0ZXAiLCJPYmplY3QiLCJrZXlzIiwiZGF0YXNldCIsImtleSIsInByb3BlcnR5U3RlcCIsImRhdGFzZXRfbmFtZSIsInBhcnNlZFN0YXRlSWQiLCJjdXJyZW50UG9zIiwiZGF0YXNldElkIiwiZGF0YXNldE5hbWUiLCJkYXRhc2V0X2tleXMiLCJ0eXBlU3RlcCIsImRhdGFzZXRQcm9wZXJ0eSIsInNwbGl0IiwiZmluZEluZGV4IiwibiIsInJhbmRvbVN0ZXAiLCJjb25uZWN0ZWRTdGVwIiwiZml4ZWRTdGVwIiwiZnVuIiwibmFtZSIsImRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXgiLCJkYXRhc2V0SW5kZXhlcyIsImFyZyIsImluZGV4IiwidmFsdWUiLCJyZXN1bHQiLCJhbGVydCIsImRhdGFzZXRQb3MiLCJpdGVtIiwibnVtSW5zdGFuY2VzIiwibGVuZ3RoIiwiQXJyYXkiLCJpZCIsInBpZWNlcyIsInN0ZXBOYW1lIiwibGFiZWxWYWx1ZSIsImRlZmluZVByb3BlcnR5Il0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O1lBS2dCQSxTLEdBQUFBLFM7Ozs7Ozs7Ozs7QUFBVCxhQUFTQSxTQUFULEdBQXFCO0FBQ3hCLGVBQU8sbUJBQU8sQ0FBQ0MsYUFBRCxFQUFnQkMsV0FBaEIsQ0FBUCxDQUFQO0FBQ0g7O0FBRUQsYUFBU0QsYUFBVCxHQUF5QjtBQUNyQixlQUFPLG1CQUFPLENBQUNELFNBQUQsRUFBWSxHQUFHLDJCQUFNRyxTQUFOLENBQ3hCQyxHQUR3QixDQUNwQkMsYUFBYUMsUUFBUSxVQUFSLEVBQW9CQyxTQUFTRixTQUFULENBQXBCLEVBQXlDQSxTQUF6QyxDQURPLENBQWYsQ0FBUCxDQUFQO0FBRUg7O0FBRUQsYUFBU0gsV0FBVCxHQUF1QjtBQUNu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O0FBSUEsZUFBT2pCLEdBQVA7QUFDSCIsImZpbGUiOiJzdGVwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtpbml0aWFsU3RhdGUgYXMgc3RhdGV9IGZyb20gJy4vaW5pdGlhbFN0YXRlJztcbmltcG9ydCBjaG9pY2UgZnJvbSAnLi9kc2wnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRTdGVwKCkge1xuICAgIHJldHVybiBjaG9pY2UoW2N1c3RvbXZhclN0ZXAsIGRhdGFzZXRTdGVwXSk7XG59XG5cbmZ1bmN0aW9uIGN1c3RvbXZhclN0ZXAoKSB7XG4gICAgcmV0dXJuIGNob2ljZShbc3RhcnRTdGVwLCAuLi5zdGF0ZS5jdXN0b212YXJcbiAgICAgICAgLm1hcChjdXN0b21WYXIgPT4gbGFiZWxlcignZXhpdFN0ZXAnLCBleGl0U3RlcChjdXN0b21WYXIpLCBjdXN0b21WYXIpKV0pO1xufVxuXG5mdW5jdGlvbiBkYXRhc2V0U3RlcCgpIHtcbiAgICByZXR1cm4gY2hvaWNlKFtcbiAgICAgICAgc3RhcnRTdGVwLFxuICAgICAgICAuLi5PYmplY3Qua2V5cyhzdGF0ZS5kYXRhc2V0KVxuICAgICAgICAgICAgLm1hcChrZXkgPT4gbGFiZWxlcigncHJvcGVydHlTdGVwJyxcbiAgICAgICAgICAgICAgICAoKSA9PiBwcm9wZXJ0eVN0ZXAoa2V5KSwgc3RhdGUuZGF0YXNldF9uYW1lW3BhcnNlZFN0YXRlSWQoa2V5KS5jdXJyZW50UG9zXSkpXG4gICAgXSk7XG59XG5cbmZ1bmN0aW9uIHByb3BlcnR5U3RlcChkYXRhc2V0SWQpIHtcbiAgICBsZXQgZGF0YXNldE5hbWUgPSBzdGF0ZS5kYXRhc2V0X25hbWVbcGFyc2VkU3RhdGVJZChkYXRhc2V0SWQpLmN1cnJlbnRQb3NdO1xuICAgIHJldHVybiBjaG9pY2UoW1xuICAgICAgICBzdGFydFN0ZXAsXG4gICAgICAgIGxhYmVsZXIoJ2JhY2sgdG8gZGF0YXNldFN0ZXAnLCAoKSA9PiBkYXRhc2V0U3RlcCgpLCBkYXRhc2V0TmFtZSksXG4gICAgICAgIC4uLnN0YXRlLmRhdGFzZXRfa2V5c1twYXJzZWRTdGF0ZUlkKGRhdGFzZXRJZCkuY3VycmVudFBvc11cbiAgICAgICAgICAgIC5tYXAoa2V5ID0+IGRhdGFzZXROYW1lICsgJy4nICsga2V5KVxuICAgICAgICAgICAgLm1hcChrZXkgPT4gbGFiZWxlcigndHlwZVN0ZXAnLCAoKSA9PiB0eXBlU3RlcChrZXkpLCBrZXkpKVxuICAgIF0pO1xufVxuXG5mdW5jdGlvbiB0eXBlU3RlcChkYXRhc2V0UHJvcGVydHkpIHtcbiAgICBsZXQgZGF0YXNldE5hbWUgPSBkYXRhc2V0UHJvcGVydHkuc3BsaXQoJy4nKVswXTtcbiAgICBsZXQgZGF0YXNldElkID0gJ2RhdGFzZXQjJyArIHN0YXRlLmRhdGFzZXRfbmFtZS5maW5kSW5kZXgobiA9PiBuID09PSBkYXRhc2V0TmFtZSk7XG4gICAgcmV0dXJuIGNob2ljZShbXG4gICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgbGFiZWxlcignYmFjayB0byBwcm9wZXJ0eVN0ZXAnLCAoKSA9PiBwcm9wZXJ0eVN0ZXAoZGF0YXNldElkKSwgZGF0YXNldE5hbWUpLFxuICAgICAgICAuLi5bcmFuZG9tU3RlcCwgY29ubmVjdGVkU3RlcCwgZml4ZWRTdGVwXVxuICAgICAgICAgICAgLm1hcChmdW4gPT4gbGFiZWxlcihmdW4ubmFtZSwgKCkgPT4gZnVuKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSkpXG4gICAgXSk7XG59XG5cbmZ1bmN0aW9uIHJhbmRvbVN0ZXAoZGF0YXNldFByb3BlcnR5KSB7XG4gICAgcmV0dXJuIGNob2ljZShbXG4gICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgbGFiZWxlcignYmFjayB0byB0eXBlU3RlcCcsICgpID0+IHR5cGVTdGVwKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSksXG4gICAgICAgIGxhYmVsZXIoJ2V4aXRTdGVwJywgZXhpdFN0ZXAoZGF0YXNldFByb3BlcnR5KSwgZGF0YXNldFByb3BlcnR5KSxcbiAgICBdKTtcbn1cblxuZnVuY3Rpb24gY29ubmVjdGVkU3RlcChkYXRhc2V0UHJvcGVydHkpIHtcbiAgICBsZXQgZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCA9IGRhdGFzZXRQcm9wZXJ0eSArICcvJztcbiAgICByZXR1cm4gY2hvaWNlKFtcbiAgICAgICAgc3RhcnRTdGVwLFxuICAgICAgICBsYWJlbGVyKCdiYWNrIHRvIHR5cGVTdGVwJywgKCkgPT4gdHlwZVN0ZXAoZGF0YXNldFByb3BlcnR5KSwgZGF0YXNldFByb3BlcnR5KSxcbiAgICAgICAgLi4uZGF0YXNldEluZGV4ZXMoZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeClcbiAgICAgICAgICAgIC5tYXAoKGFyZywgaW5kZXgpID0+IGxhYmVsZXIoJ2V4aXRTdGVwICcgKyBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4ICsgaW5kZXgsIGV4aXRTdGVwKGFyZykpKVxuICAgIF0pO1xufVxuXG5mdW5jdGlvbiBmaXhlZFN0ZXAoZGF0YXNldFByb3BlcnR5KSB7XG4gICAgbGV0IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggPSBkYXRhc2V0UHJvcGVydHkgKyAnIyc7XG4gICAgcmV0dXJuIGNob2ljZShbXG4gICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgbGFiZWxlcignYmFjayB0byB0eXBlU3RlcCcsICgpID0+IHR5cGVTdGVwKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSksXG4gICAgICAgIC4uLmRhdGFzZXRJbmRleGVzKGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXgpXG4gICAgICAgICAgICAubWFwKChhcmcsIGluZGV4KSA9PiBsYWJlbGVyKCdleGl0U3RlcCAnICsgZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCArIGluZGV4LCBleGl0U3RlcChhcmcpKSlcbiAgICBdKTtcbn1cblxuZnVuY3Rpb24gZXhpdFN0ZXAodmFsdWUsIGluZGV4KSB7IC8vIHJlYXNvbnNmb3Jjb2xvZ25lLmltYWdlLzIgLS0+ICQocmVhc29uc2ZvcmNvbG9nbmUuaW1hZ2UvMilcbiAgICBsZXQgcmVzdWx0ID0gKCkgPT4ge1xuICAgICAgICBhbGVydCgnJCgnICsgdmFsdWUgKyAnKScpO1xuICAgIH07XG4gICAgcmV0dXJuIGxhYmVsZXIoJ2V4aXRTdGVwJywgcmVzdWx0LCBpbmRleCk7XG59XG5cbmZ1bmN0aW9uIGRhdGFzZXRJbmRleGVzKGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXgpIHsgLy8gcmVhc29uc2ZvcmNvbG9nbmUuaW1hZ2UgLT4gcmVhc29uc2ZvcmNvbG9nbmUuaW1hZ2UvMlxuICAgIGxldCBkYXRhc2V0TmFtZSA9IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXguc3BsaXQoJy4nKVswXTtcbiAgICBsZXQgZGF0YXNldFBvcyA9IHN0YXRlLmRhdGFzZXRfbmFtZS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSBkYXRhc2V0TmFtZSk7XG4gICAgbGV0IG51bUluc3RhbmNlcyA9IHN0YXRlLmRhdGFzZXRbJ2RhdGFzZXQjJyArIGRhdGFzZXRQb3NdLmxlbmd0aDtcbiAgICByZXR1cm4gWy4uLkFycmF5KG51bUluc3RhbmNlcykua2V5cygpXS5tYXAoa2V5ID0+IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggKyBrZXkpO1xufVxuXG5mdW5jdGlvbiBwYXJzZWRTdGF0ZUlkKGlkKSB7XG4gICAgbGV0IHBpZWNlcyA9IGlkLnNwbGl0KCcjJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudFBvczogcGllY2VzWzFdLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGxhYmVsZXIoc3RlcE5hbWUsIGZ1biwgbGFiZWxWYWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW4sICduYW1lJywge1xuICAgICAgICB2YWx1ZTogc3RlcE5hbWUgKyAnICdcbiAgICAgICAgKyAoKHR5cGVvZiBsYWJlbFZhbHVlICE9PSAndW5kZWZpbmVkJykgPyBsYWJlbFZhbHVlIDogJycpXG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bjtcbn1cbiJdfQ==