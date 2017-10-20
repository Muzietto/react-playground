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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9zdGF0ZV9tYWNoaW5lL3N0ZXBzLmpzIl0sIm5hbWVzIjpbInN0YXJ0U3RlcCIsImxvY2F0aW9uIiwiYmFja3dhcmQiLCJmb3J3YXJkIiwiY3VzdG9tdmFyU3RlcCIsImRhdGFzZXRTdGVwIiwiY3VzdG9tdmFyIiwibWFwIiwiY3VzdG9tVmFyIiwibGFiZWxlciIsImV4aXRTdGVwIiwiT2JqZWN0Iiwia2V5cyIsImRhdGFzZXQiLCJrZXkiLCJwcm9wZXJ0eVN0ZXAiLCJkYXRhc2V0X25hbWUiLCJwYXJzZWRTdGF0ZUlkIiwiY3VycmVudFBvcyIsImRhdGFzZXRJZCIsImRhdGFzZXROYW1lIiwiZGF0YXNldF9rZXlzIiwidHlwZVN0ZXAiLCJkYXRhc2V0UHJvcGVydHkiLCJzcGxpdCIsImZpbmRJbmRleCIsIm4iLCJyYW5kb21TdGVwIiwiY29ubmVjdGVkU3RlcCIsImZpeGVkU3RlcCIsImZ1biIsIm5hbWUiLCJkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4IiwiZGF0YXNldEluZGV4ZXMiLCJhcmciLCJpbmRleCIsInZhbHVlIiwicmVzdWx0IiwiYWxlcnQiLCJkYXRhc2V0UG9zIiwiaXRlbSIsIm51bUluc3RhbmNlcyIsImxlbmd0aCIsIkFycmF5IiwiaWQiLCJwaWVjZXMiLCJzdGVwTmFtZSIsImxhYmVsVmFsdWUiLCJkZWZpbmVQcm9wZXJ0eSJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztZQU1nQkEsUyxHQUFBQSxTOzs7Ozs7Ozs7O0FBQVQsYUFBU0EsU0FBVCxHQUFxQjtBQUN4QixlQUFPLG9CQUFPO0FBQ1ZDLHNCQUFVLFdBREE7QUFFVkMsc0JBQVUsRUFGQTtBQUdWQyxxQkFBUyxDQUFDQyxhQUFELEVBQWdCQyxXQUFoQjtBQUhDLFNBQVAsa0JBQVA7QUFLSDs7QUFFRCxhQUFTRCxhQUFULEdBQXlCO0FBQ3JCLGVBQU8sb0JBQU87QUFDVkgsc0JBQVUsZUFEQTtBQUVWQyxzQkFBVSxDQUFDRixTQUFELENBRkE7QUFHVkcscUJBQVMs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LGFBQWEwQixVQUEzQixFQUF1Q0csTUFBMUQ7QUFDQSxlQUFPLENBQUMsR0FBR0MsTUFBTUYsWUFBTixFQUFvQjdCLElBQXBCLEVBQUosRUFBZ0NMLEdBQWhDLENBQW9DTyxPQUFPa0IsNEJBQTRCbEIsR0FBdkUsQ0FBUDtBQUNIOztBQUVELGFBQVNHLGFBQVQsQ0FBdUIyQixFQUF2QixFQUEyQjtBQUN2QixZQUFJQyxTQUFTRCxHQUFHcEIsS0FBSCxDQUFTLEdBQVQsQ0FBYjtBQUNBLGVBQU87QUFDSE4sd0JBQVkyQixPQUFPLENBQVA7QUFEVCxTQUFQO0FBR0g7O0FBRUQsYUFBU3BDLE9BQVQsQ0FBaUJxQyxRQUFqQixFQUEyQmhCLEdBQTNCLEVBQWdDaUIsVUFBaEMsRUFBNEM7QUFDeENwQyxlQUFPcUMsY0FBUCxDQUFzQmxCLEdBQXRCLEVBQTJCLE1BQTNCLEVBQW1DO0FBQy9CTSxtQkFBT1UsV0FBVyxHQUFYLElBQ0gsT0FBT0MsVUFBUCxLQUFzQixXQUF2QixHQUFzQ0EsVUFBdEMsR0FBbUQsRUFEL0M7QUFEd0IsU0FBbkM7QUFJQSxlQUFPakIsR0FBUDtBQUNIIiwiZmlsZSI6InN0ZXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge2luaXRpYWxTdGF0ZSBhcyBzdGF0ZX0gZnJvbSAnLi9pbml0aWFsU3RhdGUnO1xuaW1wb3J0IGNob2ljZSBmcm9tICcuL3ZpZXcnO1xuaW1wb3J0IHt0ZW1wbGF0ZUEsIHRlbXBsYXRlQiwgdGVtcGxhdGVDfSBmcm9tICcuL3ZpZXcnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRTdGVwKCkge1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ3N0YXJ0U3RlcCcsXG4gICAgICAgIGJhY2t3YXJkOiBbXSxcbiAgICAgICAgZm9yd2FyZDogW2N1c3RvbXZhclN0ZXAsIGRhdGFzZXRTdGVwXSxcbiAgICB9LCB0ZW1wbGF0ZUEpO1xufVxuXG5mdW5jdGlvbiBjdXN0b212YXJTdGVwKCkge1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ2N1c3RvbXZhclN0ZXAnLFxuICAgICAgICBiYWNrd2FyZDogW3N0YXJ0U3RlcCxdLFxuICAgICAgICBmb3J3YXJkOiBbLi4uc3RhdGUuY3VzdG9tdmFyXG4gICAgICAgICAgICAubWFwKGN1c3RvbVZhciA9PiBsYWJlbGVyKCdleGl0U3RlcCcsIGV4aXRTdGVwKGN1c3RvbVZhciksIGN1c3RvbVZhcikpXVxuICAgIH0sIHRlbXBsYXRlQik7XG59XG5cbmZ1bmN0aW9uIGRhdGFzZXRTdGVwKCkge1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ2RhdGFzZXRTdGVwJyxcbiAgICAgICAgYmFja3dhcmQ6IFtzdGFydFN0ZXAsXSxcbiAgICAgICAgZm9yd2FyZDogW1xuICAgICAgICAgICAgLi4uT2JqZWN0LmtleXMoc3RhdGUuZGF0YXNldClcbiAgICAgICAgICAgICAgICAubWFwKGtleSA9PiBsYWJlbGVyKCdwcm9wZXJ0eVN0ZXAnLFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiBwcm9wZXJ0eVN0ZXAoa2V5KSwgc3RhdGUuZGF0YXNldF9uYW1lW3BhcnNlZFN0YXRlSWQoa2V5KS5jdXJyZW50UG9zXSkpXG4gICAgICAgIF1cbiAgICB9LCB0ZW1wbGF0ZUMpO1xufVxuXG5mdW5jdGlvbiBwcm9wZXJ0eVN0ZXAoZGF0YXNldElkKSB7XG4gICAgbGV0IGRhdGFzZXROYW1lID0gc3RhdGUuZGF0YXNldF9uYW1lW3BhcnNlZFN0YXRlSWQoZGF0YXNldElkKS5jdXJyZW50UG9zXTtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdwcm9wZXJ0eVN0ZXAnLFxuICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgc3RhcnRTdGVwLFxuICAgICAgICAgICAgbGFiZWxlcignZGF0YXNldFN0ZXAnLCAoKSA9PiBkYXRhc2V0U3RlcCgpLCBkYXRhc2V0TmFtZSlcbiAgICAgICAgXSxcbiAgICAgICAgZm9yd2FyZDogW1xuICAgICAgICAgICAgLi4uc3RhdGUuZGF0YXNldF9rZXlzW3BhcnNlZFN0YXRlSWQoZGF0YXNldElkKS5jdXJyZW50UG9zXVxuICAgICAgICAgICAgICAgIC5tYXAoa2V5ID0+IGRhdGFzZXROYW1lICsgJy4nICsga2V5KVxuICAgICAgICAgICAgICAgIC5tYXAoa2V5ID0+IGxhYmVsZXIoJ3R5cGVTdGVwJywgKCkgPT4gdHlwZVN0ZXAoa2V5KSwga2V5KSlcbiAgICAgICAgXVxuICAgIH0sIHRlbXBsYXRlQSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVTdGVwKGRhdGFzZXRQcm9wZXJ0eSkge1xuICAgIGxldCBkYXRhc2V0TmFtZSA9IGRhdGFzZXRQcm9wZXJ0eS5zcGxpdCgnLicpWzBdO1xuICAgIGxldCBkYXRhc2V0SWQgPSAnZGF0YXNldCMnICsgc3RhdGUuZGF0YXNldF9uYW1lLmZpbmRJbmRleChuID0+IG4gPT09IGRhdGFzZXROYW1lKTtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICd0eXBlU3RlcCcsXG4gICAgICAgIGJhY2t3YXJkOiBbXG4gICAgICAgICAgICBzdGFydFN0ZXAsXG4gICAgICAgICAgICBsYWJlbGVyKCdwcm9wZXJ0eVN0ZXAnLCAoKSA9PiBwcm9wZXJ0eVN0ZXAoZGF0YXNldElkKSwgZGF0YXNldE5hbWUpXG4gICAgICAgIF0sXG4gICAgICAgIGZvcndhcmQ6IFtcbiAgICAgICAgICAgIC4uLltyYW5kb21TdGVwLCBjb25uZWN0ZWRTdGVwLCBmaXhlZFN0ZXBdXG4gICAgICAgICAgICAgICAgLm1hcChmdW4gPT4gbGFiZWxlcihmdW4ubmFtZSwgKCkgPT4gZnVuKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSkpXG4gICAgICAgIF1cbiAgICB9LCB0ZW1wbGF0ZUIpO1xufVxuXG5mdW5jdGlvbiByYW5kb21TdGVwKGRhdGFzZXRQcm9wZXJ0eSkge1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ3JhbmRvbVN0ZXAnLFxuICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgc3RhcnRTdGVwLFxuICAgICAgICAgICAgbGFiZWxlcigndHlwZVN0ZXAnLCAoKSA9PiB0eXBlU3RlcChkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpXG4gICAgICAgIF0sXG4gICAgICAgIGZvcndhcmQ6IFtcbiAgICAgICAgICAgIGxhYmVsZXIoJ2V4aXRTdGVwJywgZXhpdFN0ZXAoZGF0YXNldFByb3BlcnR5KSwgZGF0YXNldFByb3BlcnR5KSxcbiAgICAgICAgXVxuICAgIH0sIHRlbXBsYXRlQyk7XG59XG5cbmZ1bmN0aW9uIGNvbm5lY3RlZFN0ZXAoZGF0YXNldFByb3BlcnR5KSB7XG4gICAgbGV0IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggPSBkYXRhc2V0UHJvcGVydHkgKyAnLyc7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAnY29ubmVjdGVkU3RlcCcsXG4gICAgICAgIGJhY2t3YXJkOiBbXG4gICAgICAgICAgICBzdGFydFN0ZXAsXG4gICAgICAgICAgICBsYWJlbGVyKCd0eXBlU3RlcCcsICgpID0+IHR5cGVTdGVwKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSlcbiAgICAgICAgXSxcbiAgICAgICAgZm9yd2FyZDogW1xuICAgICAgICAgICAgLi4uZGF0YXNldEluZGV4ZXMoZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeClcbiAgICAgICAgICAgICAgICAubWFwKChhcmcsIGluZGV4KSA9PiBsYWJlbGVyKCdleGl0U3RlcCAnICsgZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCArIGluZGV4LCBleGl0U3RlcChhcmcpKSlcbiAgICAgICAgXVxuICAgIH0sIHRlbXBsYXRlQSk7XG59XG5cbmZ1bmN0aW9uIGZpeGVkU3RlcChkYXRhc2V0UHJvcGVydHkpIHtcbiAgICBsZXQgZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCA9IGRhdGFzZXRQcm9wZXJ0eSArICcjJztcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdmaXhlZFN0ZXAnLFxuICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgc3RhcnRTdGVwLFxuICAgICAgICAgICAgbGFiZWxlcigndHlwZVN0ZXAnLCAoKSA9PiB0eXBlU3RlcChkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpXG4gICAgICAgIF0sXG4gICAgICAgIGZvcndhcmQ6IFtcbiAgICAgICAgICAgIC4uLmRhdGFzZXRJbmRleGVzKGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXgpXG4gICAgICAgICAgICAgICAgLm1hcCgoYXJnLCBpbmRleCkgPT4gbGFiZWxlcignZXhpdFN0ZXAgJyArIGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggKyBpbmRleCwgZXhpdFN0ZXAoYXJnKSkpXG4gICAgICAgIF1cbiAgICB9LCB0ZW1wbGF0ZUIpO1xufVxuXG5mdW5jdGlvbiBleGl0U3RlcCh2YWx1ZSwgaW5kZXgpIHsgLy8gcmVhc29uc2ZvcmNvbG9nbmUuaW1hZ2UvMiAtLT4gJChyZWFzb25zZm9yY29sb2duZS5pbWFnZS8yKVxuICAgIGxldCByZXN1bHQgPSAoKSA9PiB7XG4gICAgICAgIGFsZXJ0KCckKCcgKyB2YWx1ZSArICcpJyk7XG4gICAgfTtcbiAgICByZXR1cm4gbGFiZWxlcignZXhpdFN0ZXAnLCByZXN1bHQsIGluZGV4KTtcbn1cblxuZnVuY3Rpb24gZGF0YXNldEluZGV4ZXMoZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCkgeyAvLyByZWFzb25zZm9yY29sb2duZS5pbWFnZSAtPiByZWFzb25zZm9yY29sb2duZS5pbWFnZS8yXG4gICAgbGV0IGRhdGFzZXROYW1lID0gZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeC5zcGxpdCgnLicpWzBdO1xuICAgIGxldCBkYXRhc2V0UG9zID0gc3RhdGUuZGF0YXNldF9uYW1lLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IGRhdGFzZXROYW1lKTtcbiAgICBsZXQgbnVtSW5zdGFuY2VzID0gc3RhdGUuZGF0YXNldFsnZGF0YXNldCMnICsgZGF0YXNldFBvc10ubGVuZ3RoO1xuICAgIHJldHVybiBbLi4uQXJyYXkobnVtSW5zdGFuY2VzKS5rZXlzKCldLm1hcChrZXkgPT4gZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCArIGtleSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlZFN0YXRlSWQoaWQpIHtcbiAgICBsZXQgcGllY2VzID0gaWQuc3BsaXQoJyMnKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50UG9zOiBwaWVjZXNbMV0sXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbGFiZWxlcihzdGVwTmFtZSwgZnVuLCBsYWJlbFZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1biwgJ25hbWUnLCB7XG4gICAgICAgIHZhbHVlOiBzdGVwTmFtZSArICcgJ1xuICAgICAgICArICgodHlwZW9mIGxhYmVsVmFsdWUgIT09ICd1bmRlZmluZWQnKSA/IGxhYmVsVmFsdWUgOiAnJylcbiAgICB9KTtcbiAgICByZXR1cm4gZnVuO1xufVxuIl19