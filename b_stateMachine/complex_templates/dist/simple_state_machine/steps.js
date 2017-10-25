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
            forward: [...datasetIndexes(datasetPropertyWithSuffix).map(propSuffixIndex => labeler('exitStep ' + propSuffixIndex, exitStep(propSuffixIndex)))]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9zaW1wbGVfc3RhdGVfbWFjaGluZS9zdGVwcy5qcyJdLCJuYW1lcyI6WyJzdGFydFN0ZXAiLCJsb2NhdGlvbiIsImJhY2t3YXJkIiwiZm9yd2FyZCIsImN1c3RvbXZhclN0ZXAiLCJkYXRhc2V0U3RlcCIsImN1c3RvbXZhciIsIm1hcCIsImN1c3RvbVZhciIsImxhYmVsZXIiLCJleGl0U3RlcCIsIk9iamVjdCIsImtleXMiLCJkYXRhc2V0Iiwia2V5IiwicHJvcGVydHlTdGVwIiwiZGF0YXNldF9uYW1lIiwicGFyc2VkU3RhdGVJZCIsImN1cnJlbnRQb3MiLCJkYXRhc2V0SWQiLCJkYXRhc2V0TmFtZSIsImRhdGFzZXRfa2V5cyIsInR5cGVTdGVwIiwiZGF0YXNldFByb3BlcnR5Iiwic3BsaXQiLCJmaW5kSW5kZXgiLCJuIiwicmFuZG9tU3RlcCIsImNvbm5lY3RlZFN0ZXAiLCJmaXhlZFN0ZXAiLCJmdW4iLCJuYW1lIiwiZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCIsImRhdGFzZXRJbmRleGVzIiwicHJvcFN1ZmZpeEluZGV4IiwiYXJnIiwiaW5kZXgiLCJ2YWx1ZSIsInJlc3VsdCIsImFsZXJ0IiwiZGF0YXNldFBvcyIsIml0ZW0iLCJudW1JbnN0YW5jZXMiLCJsZW5ndGgiLCJBcnJheSIsImlkIiwicGllY2VzIiwic3RlcE5hbWUiLCJsYWJlbFZhbHVlIiwiZGVmaW5lUHJvcGVydHkiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7WUFNZ0JBLFMsR0FBQUEsUzs7Ozs7Ozs7OztBQUFULGFBQVNBLFNBQVQsR0FBcUI7QUFDeEIsZUFBTyxvQkFBTztBQUNWQyxzQkFBVSxXQURBO0FBRVZDLHNCQUFVLEVBRkE7QUFHVkMscUJBQVMsQ0FBQ0MsYUFBRCxFQUFnQkMsV0FBaEI7QUFIQyxTQUFQLGtCQUFQO0FBS0g7O0FBRUQsYUFBU0QsYUFBVCxHQUF5QjtBQUNyQixlQUFPLG9CQUFPO0FBQ1ZILHNCQUFVLGVBREE7QUFFVkMsc0JBQVUsQ0FB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QixVQUEzQixFQUF1Q0csTUFBMUQ7QUFDQSxlQUFPLENBQUMsR0FBR0MsTUFBTUYsWUFBTixFQUFvQjlCLElBQXBCLEVBQUosRUFBZ0NMLEdBQWhDLENBQW9DTyxPQUFPa0IsNEJBQTRCbEIsR0FBdkUsQ0FBUDtBQUNIOztBQUVELGFBQVNHLGFBQVQsQ0FBdUI0QixFQUF2QixFQUEyQjtBQUN2QixZQUFJQyxTQUFTRCxHQUFHckIsS0FBSCxDQUFTLEdBQVQsQ0FBYjtBQUNBLGVBQU87QUFDSE4sd0JBQVk0QixPQUFPLENBQVA7QUFEVCxTQUFQO0FBR0g7O0FBRUQsYUFBU3JDLE9BQVQsQ0FBaUJzQyxRQUFqQixFQUEyQmpCLEdBQTNCLEVBQWdDa0IsVUFBaEMsRUFBNEM7QUFDeENyQyxlQUFPc0MsY0FBUCxDQUFzQm5CLEdBQXRCLEVBQTJCLE1BQTNCLEVBQW1DO0FBQy9CTyxtQkFBT1UsV0FBVyxHQUFYLElBQ0gsT0FBT0MsVUFBUCxLQUFzQixXQUF2QixHQUFzQ0EsVUFBdEMsR0FBbUQsRUFEL0M7QUFEd0IsU0FBbkM7QUFJQSxlQUFPbEIsR0FBUDtBQUNIIiwiZmlsZSI6InN0ZXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge2luaXRpYWxTdGF0ZSBhcyBzdGF0ZX0gZnJvbSAnLi9pbml0aWFsU3RhdGUnO1xuaW1wb3J0IGNob2ljZSBmcm9tICcuL3ZpZXcnO1xuaW1wb3J0IHt0ZW1wbGF0ZUEsIHRlbXBsYXRlQiwgdGVtcGxhdGVDfSBmcm9tICcuL3ZpZXcnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRTdGVwKCkge1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ3N0YXJ0U3RlcCcsXG4gICAgICAgIGJhY2t3YXJkOiBbXSxcbiAgICAgICAgZm9yd2FyZDogW2N1c3RvbXZhclN0ZXAsIGRhdGFzZXRTdGVwXSxcbiAgICB9LCB0ZW1wbGF0ZUEpO1xufVxuXG5mdW5jdGlvbiBjdXN0b212YXJTdGVwKCkge1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ2N1c3RvbXZhclN0ZXAnLFxuICAgICAgICBiYWNrd2FyZDogW3N0YXJ0U3RlcCxdLFxuICAgICAgICBmb3J3YXJkOiBbLi4uc3RhdGUuY3VzdG9tdmFyXG4gICAgICAgICAgICAubWFwKGN1c3RvbVZhciA9PiBsYWJlbGVyKCdleGl0U3RlcCcsIGV4aXRTdGVwKGN1c3RvbVZhciksIGN1c3RvbVZhcikpXVxuICAgIH0sIHRlbXBsYXRlQik7XG59XG5cbmZ1bmN0aW9uIGRhdGFzZXRTdGVwKCkge1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ2RhdGFzZXRTdGVwJyxcbiAgICAgICAgYmFja3dhcmQ6IFtzdGFydFN0ZXAsXSxcbiAgICAgICAgZm9yd2FyZDogW1xuICAgICAgICAgICAgLi4uT2JqZWN0LmtleXMoc3RhdGUuZGF0YXNldClcbiAgICAgICAgICAgICAgICAubWFwKGtleSA9PiBsYWJlbGVyKCdwcm9wZXJ0eVN0ZXAnLFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiBwcm9wZXJ0eVN0ZXAoa2V5KSwgc3RhdGUuZGF0YXNldF9uYW1lW3BhcnNlZFN0YXRlSWQoa2V5KS5jdXJyZW50UG9zXSkpXG4gICAgICAgIF1cbiAgICB9LCB0ZW1wbGF0ZUMpO1xufVxuXG5mdW5jdGlvbiBwcm9wZXJ0eVN0ZXAoZGF0YXNldElkKSB7XG4gICAgbGV0IGRhdGFzZXROYW1lID0gc3RhdGUuZGF0YXNldF9uYW1lW3BhcnNlZFN0YXRlSWQoZGF0YXNldElkKS5jdXJyZW50UG9zXTtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdwcm9wZXJ0eVN0ZXAnLFxuICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgc3RhcnRTdGVwLFxuICAgICAgICAgICAgbGFiZWxlcignZGF0YXNldFN0ZXAnLCAoKSA9PiBkYXRhc2V0U3RlcCgpLCBkYXRhc2V0TmFtZSlcbiAgICAgICAgXSxcbiAgICAgICAgZm9yd2FyZDogW1xuICAgICAgICAgICAgLi4uc3RhdGUuZGF0YXNldF9rZXlzW3BhcnNlZFN0YXRlSWQoZGF0YXNldElkKS5jdXJyZW50UG9zXVxuICAgICAgICAgICAgICAgIC5tYXAoa2V5ID0+IGRhdGFzZXROYW1lICsgJy4nICsga2V5KVxuICAgICAgICAgICAgICAgIC5tYXAoa2V5ID0+IGxhYmVsZXIoJ3R5cGVTdGVwJywgKCkgPT4gdHlwZVN0ZXAoa2V5KSwga2V5KSlcbiAgICAgICAgXVxuICAgIH0sIHRlbXBsYXRlQSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVTdGVwKGRhdGFzZXRQcm9wZXJ0eSkge1xuICAgIGxldCBkYXRhc2V0TmFtZSA9IGRhdGFzZXRQcm9wZXJ0eS5zcGxpdCgnLicpWzBdO1xuICAgIGxldCBkYXRhc2V0SWQgPSAnZGF0YXNldCMnICsgc3RhdGUuZGF0YXNldF9uYW1lLmZpbmRJbmRleChuID0+IG4gPT09IGRhdGFzZXROYW1lKTtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICd0eXBlU3RlcCcsXG4gICAgICAgIGJhY2t3YXJkOiBbXG4gICAgICAgICAgICBzdGFydFN0ZXAsXG4gICAgICAgICAgICBsYWJlbGVyKCdwcm9wZXJ0eVN0ZXAnLCAoKSA9PiBwcm9wZXJ0eVN0ZXAoZGF0YXNldElkKSwgZGF0YXNldE5hbWUpXG4gICAgICAgIF0sXG4gICAgICAgIGZvcndhcmQ6IFtcbiAgICAgICAgICAgIC4uLltyYW5kb21TdGVwLCBjb25uZWN0ZWRTdGVwLCBmaXhlZFN0ZXBdXG4gICAgICAgICAgICAgICAgLm1hcChmdW4gPT4gbGFiZWxlcihmdW4ubmFtZSwgKCkgPT4gZnVuKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSkpXG4gICAgICAgIF1cbiAgICB9LCB0ZW1wbGF0ZUIpO1xufVxuXG5mdW5jdGlvbiByYW5kb21TdGVwKGRhdGFzZXRQcm9wZXJ0eSkge1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ3JhbmRvbVN0ZXAnLFxuICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgc3RhcnRTdGVwLFxuICAgICAgICAgICAgbGFiZWxlcigndHlwZVN0ZXAnLCAoKSA9PiB0eXBlU3RlcChkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpXG4gICAgICAgIF0sXG4gICAgICAgIGZvcndhcmQ6IFtcbiAgICAgICAgICAgIGxhYmVsZXIoJ2V4aXRTdGVwJywgZXhpdFN0ZXAoZGF0YXNldFByb3BlcnR5KSwgZGF0YXNldFByb3BlcnR5KSxcbiAgICAgICAgXVxuICAgIH0sIHRlbXBsYXRlQyk7XG59XG5cbmZ1bmN0aW9uIGNvbm5lY3RlZFN0ZXAoZGF0YXNldFByb3BlcnR5KSB7XG4gICAgbGV0IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggPSBkYXRhc2V0UHJvcGVydHkgKyAnLyc7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAnY29ubmVjdGVkU3RlcCcsXG4gICAgICAgIGJhY2t3YXJkOiBbXG4gICAgICAgICAgICBzdGFydFN0ZXAsXG4gICAgICAgICAgICBsYWJlbGVyKCd0eXBlU3RlcCcsICgpID0+IHR5cGVTdGVwKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSlcbiAgICAgICAgXSxcbiAgICAgICAgZm9yd2FyZDogW1xuICAgICAgICAgICAgLi4uZGF0YXNldEluZGV4ZXMoZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeClcbiAgICAgICAgICAgICAgICAubWFwKHByb3BTdWZmaXhJbmRleCA9PiBsYWJlbGVyKCdleGl0U3RlcCAnICsgcHJvcFN1ZmZpeEluZGV4LFxuICAgICAgICAgICAgICAgICAgICBleGl0U3RlcChwcm9wU3VmZml4SW5kZXgpKSlcbiAgICAgICAgXVxuICAgIH0sIHRlbXBsYXRlQSk7XG59XG5cbmZ1bmN0aW9uIGZpeGVkU3RlcChkYXRhc2V0UHJvcGVydHkpIHtcbiAgICBsZXQgZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCA9IGRhdGFzZXRQcm9wZXJ0eSArICcjJztcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdmaXhlZFN0ZXAnLFxuICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgc3RhcnRTdGVwLFxuICAgICAgICAgICAgbGFiZWxlcigndHlwZVN0ZXAnLCAoKSA9PiB0eXBlU3RlcChkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpXG4gICAgICAgIF0sXG4gICAgICAgIGZvcndhcmQ6IFtcbiAgICAgICAgICAgIC4uLmRhdGFzZXRJbmRleGVzKGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXgpXG4gICAgICAgICAgICAgICAgLm1hcCgoYXJnLCBpbmRleCkgPT4gbGFiZWxlcignZXhpdFN0ZXAgJyArIGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggKyBpbmRleCwgZXhpdFN0ZXAoYXJnKSkpXG4gICAgICAgIF1cbiAgICB9LCB0ZW1wbGF0ZUIpO1xufVxuXG5mdW5jdGlvbiBleGl0U3RlcCh2YWx1ZSwgaW5kZXgpIHsgLy8gcmVhc29uc2ZvcmNvbG9nbmUuaW1hZ2UvMiAtLT4gJChyZWFzb25zZm9yY29sb2duZS5pbWFnZS8yKVxuICAgIGxldCByZXN1bHQgPSAoKSA9PiB7XG4gICAgICAgIGFsZXJ0KCckKCcgKyB2YWx1ZSArICcpJyk7XG4gICAgfTtcbiAgICByZXR1cm4gbGFiZWxlcignZXhpdFN0ZXAnLCByZXN1bHQsIGluZGV4KTtcbn1cblxuZnVuY3Rpb24gZGF0YXNldEluZGV4ZXMoZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCkgeyAvLyByZWFzb25zZm9yY29sb2duZS5pbWFnZSAtPiByZWFzb25zZm9yY29sb2duZS5pbWFnZS8yXG4gICAgbGV0IGRhdGFzZXROYW1lID0gZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeC5zcGxpdCgnLicpWzBdO1xuICAgIGxldCBkYXRhc2V0UG9zID0gc3RhdGUuZGF0YXNldF9uYW1lLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IGRhdGFzZXROYW1lKTtcbiAgICBsZXQgbnVtSW5zdGFuY2VzID0gc3RhdGUuZGF0YXNldFsnZGF0YXNldCMnICsgZGF0YXNldFBvc10ubGVuZ3RoO1xuICAgIHJldHVybiBbLi4uQXJyYXkobnVtSW5zdGFuY2VzKS5rZXlzKCldLm1hcChrZXkgPT4gZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCArIGtleSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlZFN0YXRlSWQoaWQpIHtcbiAgICBsZXQgcGllY2VzID0gaWQuc3BsaXQoJyMnKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50UG9zOiBwaWVjZXNbMV0sXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbGFiZWxlcihzdGVwTmFtZSwgZnVuLCBsYWJlbFZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1biwgJ25hbWUnLCB7XG4gICAgICAgIHZhbHVlOiBzdGVwTmFtZSArICcgJ1xuICAgICAgICArICgodHlwZW9mIGxhYmVsVmFsdWUgIT09ICd1bmRlZmluZWQnKSA/IGxhYmVsVmFsdWUgOiAnJylcbiAgICB9KTtcbiAgICByZXR1cm4gZnVuO1xufVxuIl19