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
        return (0, _dsl2.default)([startStep, datasetStep, ..._initialState.initialState.dataset_keys[parsedStateId(datasetId).currentPos].map(key => datasetName + '.' + key).map(key => labeler('typeStep', () => typeStep(key), key))]);
    }

    function typeStep(datasetProperty) {
        let datasetName = datasetProperty.split('.')[0];
        let datasetId = 'dataset#' + _initialState.initialState.dataset_name.findIndex(n => n === datasetName);
        return (0, _dsl2.default)([startStep, labeler('propertyStep', () => propertyStep(datasetId), datasetName), ...[randomStep, connectedStep, fixedStep].map(fun => labeler(fun.name, () => fun(datasetProperty), datasetProperty))]);
    }

    function randomStep(datasetProperty) {
        return (0, _dsl2.default)([startStep, labeler('exitStep', exitStep(datasetProperty), datasetProperty)]);
    }

    function connectedStep(datasetProperty) {
        let datasetPropertyWithSuffix = datasetProperty + '/';
        return (0, _dsl2.default)([startStep, ...datasetIndexes(datasetPropertyWithSuffix).map((arg, index) => labeler('exitStep ' + datasetPropertyWithSuffix + index, exitStep(arg)))]);
    }

    function fixedStep(datasetProperty) {
        let datasetPropertyWithSuffix = datasetProperty + '#';
        return (0, _dsl2.default)([startStep, ...datasetIndexes(datasetPropertyWithSuffix).map((arg, index) => labeler('exitStep ' + datasetPropertyWithSuffix + index, exitStep(arg)))]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9zdGVwcy5qcyJdLCJuYW1lcyI6WyJzdGFydFN0ZXAiLCJjdXN0b212YXJTdGVwIiwiZGF0YXNldFN0ZXAiLCJjdXN0b212YXIiLCJtYXAiLCJjdXN0b21WYXIiLCJsYWJlbGVyIiwiZXhpdFN0ZXAiLCJPYmplY3QiLCJrZXlzIiwiZGF0YXNldCIsImtleSIsInByb3BlcnR5U3RlcCIsImRhdGFzZXRfbmFtZSIsInBhcnNlZFN0YXRlSWQiLCJjdXJyZW50UG9zIiwiZGF0YXNldElkIiwiZGF0YXNldE5hbWUiLCJkYXRhc2V0X2tleXMiLCJ0eXBlU3RlcCIsImRhdGFzZXRQcm9wZXJ0eSIsInNwbGl0IiwiZmluZEluZGV4IiwibiIsInJhbmRvbVN0ZXAiLCJjb25uZWN0ZWRTdGVwIiwiZml4ZWRTdGVwIiwiZnVuIiwibmFtZSIsImRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXgiLCJkYXRhc2V0SW5kZXhlcyIsImFyZyIsImluZGV4IiwidmFsdWUiLCJyZXN1bHQiLCJhbGVydCIsImRhdGFzZXRQb3MiLCJpdGVtIiwibnVtSW5zdGFuY2VzIiwibGVuZ3RoIiwiQXJyYXkiLCJpZCIsInBpZWNlcyIsInN0ZXBOYW1lIiwibGFiZWxWYWx1ZSIsImRlZmluZVByb3BlcnR5Il0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O1lBS2dCQSxTLEdBQUFBLFM7Ozs7Ozs7Ozs7QUFBVCxhQUFTQSxTQUFULEdBQXFCO0FBQ3hCLGVBQU8sbUJBQU8sQ0FBQ0MsYUFBRCxFQUFnQkMsV0FBaEIsQ0FBUCxDQUFQO0FBQ0g7O0FBRUQsYUFBU0QsYUFBVCxHQUF5QjtBQUNyQixlQUFPLG1CQUFPLENBQUNELFNBQUQsRUFBWSxHQUFHLDJCQUFNRyxTQUFOLENBQ3hCQyxHQUR3QixDQUNwQkMsYUFBYUMsUUFBUSxVQUFSLEVBQW9CQyxTQUFTRixTQUFULENBQXBCLEVBQXlDQSxTQUF6QyxDQURPLENBQWYsQ0FBUCxDQUFQO0FBRUg7O0FBRUQsYUFBU0gsV0FBVCxHQUF1QjtBQUNu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QUNIOztBQUVELGFBQVNGLGNBQVQsQ0FBd0JELHlCQUF4QixFQUFtRDtBQUFFO0FBQ2pELFlBQUlaLGNBQWNZLDBCQUEwQlIsS0FBMUIsQ0FBZ0MsR0FBaEMsRUFBcUMsQ0FBckMsQ0FBbEI7QUFDQSxZQUFJZSxhQUFhLDJCQUFNdkIsWUFBTixDQUFtQlMsU0FBbkIsQ0FBNkJlLFFBQVFBLFNBQVNwQixXQUE5QyxDQUFqQjtBQUNBLFlBQUlxQixlQUFlLDJCQUFNNUIsT0FBTixDQUFjLGFBQWEwQixVQUEzQixFQUF1Q0csTUFBMUQ7QUFDQSxlQUFPLENBQUMsR0FBR0MsTUFBTUYsWUFBTixFQUFvQjdCLElBQXBCLEVBQUosRUFBZ0NMLEdBQWhDLENBQW9DTyxPQUFPa0IsNEJBQTRCbEIsR0FBdkUsQ0FBUDtBQUNIOztBQUVELGFBQVNHLGFBQVQsQ0FBdUIyQixFQUF2QixFQUEyQjtBQUN2QixZQUFJQyxTQUFTRCxHQUFHcEIsS0FBSCxDQUFTLEdBQVQsQ0FBYjtBQUNBLGVBQU87QUFDSE4sd0JBQVkyQixPQUFPLENBQVA7QUFEVCxTQUFQO0FBR0g7O0FBRUQsYUFBU3BDLE9BQVQsQ0FBaUJxQyxRQUFqQixFQUEyQmhCLEdBQTNCLEVBQWdDaUIsVUFBaEMsRUFBNEM7QUFDeENwQyxlQUFPcUMsY0FBUCxDQUFzQmxCLEdBQXRCLEVBQTJCLE1BQTNCLEVBQW1DO0FBQy9CTSxtQkFBT1UsV0FBVyxHQUFYLElBQ0gsT0FBT0MsVUFBUCxLQUFzQixXQUF2QixHQUFzQ0EsVUFBdEMsR0FBbUQsRUFEL0M7QUFEd0IsU0FBbkM7QUFJQSxlQUFPakIsR0FBUDtBQUNIIiwiZmlsZSI6InN0ZXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge2luaXRpYWxTdGF0ZSBhcyBzdGF0ZX0gZnJvbSAnLi9pbml0aWFsU3RhdGUnO1xuaW1wb3J0IGNob2ljZSBmcm9tICcuL2RzbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFN0ZXAoKSB7XG4gICAgcmV0dXJuIGNob2ljZShbY3VzdG9tdmFyU3RlcCwgZGF0YXNldFN0ZXBdKTtcbn1cblxuZnVuY3Rpb24gY3VzdG9tdmFyU3RlcCgpIHtcbiAgICByZXR1cm4gY2hvaWNlKFtzdGFydFN0ZXAsIC4uLnN0YXRlLmN1c3RvbXZhclxuICAgICAgICAubWFwKGN1c3RvbVZhciA9PiBsYWJlbGVyKCdleGl0U3RlcCcsIGV4aXRTdGVwKGN1c3RvbVZhciksIGN1c3RvbVZhcikpXSk7XG59XG5cbmZ1bmN0aW9uIGRhdGFzZXRTdGVwKCkge1xuICAgIHJldHVybiBjaG9pY2UoW3N0YXJ0U3RlcCwgLi4uT2JqZWN0LmtleXMoc3RhdGUuZGF0YXNldClcbiAgICAgICAgLm1hcChrZXkgPT4gbGFiZWxlcigncHJvcGVydHlTdGVwJyxcbiAgICAgICAgICAgICgpID0+IHByb3BlcnR5U3RlcChrZXkpLCBzdGF0ZS5kYXRhc2V0X25hbWVbcGFyc2VkU3RhdGVJZChrZXkpLmN1cnJlbnRQb3NdKSldKTtcbn1cblxuZnVuY3Rpb24gcHJvcGVydHlTdGVwKGRhdGFzZXRJZCkge1xuICAgIGxldCBkYXRhc2V0TmFtZSA9IHN0YXRlLmRhdGFzZXRfbmFtZVtwYXJzZWRTdGF0ZUlkKGRhdGFzZXRJZCkuY3VycmVudFBvc107XG4gICAgcmV0dXJuIGNob2ljZShbc3RhcnRTdGVwLCBkYXRhc2V0U3RlcCwgLi4uc3RhdGUuZGF0YXNldF9rZXlzW3BhcnNlZFN0YXRlSWQoZGF0YXNldElkKS5jdXJyZW50UG9zXVxuICAgICAgICAubWFwKGtleSA9PiBkYXRhc2V0TmFtZSArICcuJyArIGtleSlcbiAgICAgICAgLm1hcChrZXkgPT4gbGFiZWxlcigndHlwZVN0ZXAnLCAoKSA9PiB0eXBlU3RlcChrZXkpLCBrZXkpKVxuICAgIF0pO1xufVxuXG5mdW5jdGlvbiB0eXBlU3RlcChkYXRhc2V0UHJvcGVydHkpIHtcbiAgICBsZXQgZGF0YXNldE5hbWUgPSBkYXRhc2V0UHJvcGVydHkuc3BsaXQoJy4nKVswXTtcbiAgICBsZXQgZGF0YXNldElkID0gJ2RhdGFzZXQjJyArIHN0YXRlLmRhdGFzZXRfbmFtZS5maW5kSW5kZXgobiA9PiBuID09PSBkYXRhc2V0TmFtZSk7XG4gICAgcmV0dXJuIGNob2ljZShbXG4gICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgbGFiZWxlcigncHJvcGVydHlTdGVwJywgKCkgPT4gcHJvcGVydHlTdGVwKGRhdGFzZXRJZCksIGRhdGFzZXROYW1lKSxcbiAgICAgICAgLi4uW3JhbmRvbVN0ZXAsIGNvbm5lY3RlZFN0ZXAsIGZpeGVkU3RlcF1cbiAgICAgICAgICAgIC5tYXAoZnVuID0+IGxhYmVsZXIoZnVuLm5hbWUsICgpID0+IGZ1bihkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpKVxuICAgIF0pO1xufVxuXG5mdW5jdGlvbiByYW5kb21TdGVwKGRhdGFzZXRQcm9wZXJ0eSkge1xuICAgIHJldHVybiBjaG9pY2UoW3N0YXJ0U3RlcCwgbGFiZWxlcignZXhpdFN0ZXAnLCBleGl0U3RlcChkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpXSk7XG59XG5cbmZ1bmN0aW9uIGNvbm5lY3RlZFN0ZXAoZGF0YXNldFByb3BlcnR5KSB7XG4gICAgbGV0IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggPSBkYXRhc2V0UHJvcGVydHkgKyAnLyc7XG4gICAgcmV0dXJuIGNob2ljZShbc3RhcnRTdGVwLCAuLi5kYXRhc2V0SW5kZXhlcyhkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4KVxuICAgICAgICAubWFwKChhcmcsIGluZGV4KSA9PiBsYWJlbGVyKCdleGl0U3RlcCAnICsgZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCArIGluZGV4LCBleGl0U3RlcChhcmcpKSldKTtcbn1cblxuZnVuY3Rpb24gZml4ZWRTdGVwKGRhdGFzZXRQcm9wZXJ0eSkge1xuICAgIGxldCBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4ID0gZGF0YXNldFByb3BlcnR5ICsgJyMnO1xuICAgIHJldHVybiBjaG9pY2UoW3N0YXJ0U3RlcCwgLi4uZGF0YXNldEluZGV4ZXMoZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeClcbiAgICAgICAgLm1hcCgoYXJnLCBpbmRleCkgPT4gbGFiZWxlcignZXhpdFN0ZXAgJyArIGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggKyBpbmRleCwgZXhpdFN0ZXAoYXJnKSkpXSk7XG59XG5cbmZ1bmN0aW9uIGV4aXRTdGVwKHZhbHVlLCBpbmRleCkgeyAvLyByZWFzb25zZm9yY29sb2duZS5pbWFnZS8yIC0tPiAkKHJlYXNvbnNmb3Jjb2xvZ25lLmltYWdlLzIpXG4gICAgbGV0IHJlc3VsdCA9ICgpID0+IHtcbiAgICAgICAgYWxlcnQoJyQoJyArIHZhbHVlICsgJyknKTtcbiAgICB9O1xuICAgIHJldHVybiBsYWJlbGVyKCdleGl0U3RlcCcsIHJlc3VsdCwgaW5kZXgpO1xufVxuXG5mdW5jdGlvbiBkYXRhc2V0SW5kZXhlcyhkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4KSB7IC8vIHJlYXNvbnNmb3Jjb2xvZ25lLmltYWdlIC0+IHJlYXNvbnNmb3Jjb2xvZ25lLmltYWdlLzJcbiAgICBsZXQgZGF0YXNldE5hbWUgPSBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4LnNwbGl0KCcuJylbMF07XG4gICAgbGV0IGRhdGFzZXRQb3MgPSBzdGF0ZS5kYXRhc2V0X25hbWUuZmluZEluZGV4KGl0ZW0gPT4gaXRlbSA9PT0gZGF0YXNldE5hbWUpO1xuICAgIGxldCBudW1JbnN0YW5jZXMgPSBzdGF0ZS5kYXRhc2V0WydkYXRhc2V0IycgKyBkYXRhc2V0UG9zXS5sZW5ndGg7XG4gICAgcmV0dXJuIFsuLi5BcnJheShudW1JbnN0YW5jZXMpLmtleXMoKV0ubWFwKGtleSA9PiBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4ICsga2V5KTtcbn1cblxuZnVuY3Rpb24gcGFyc2VkU3RhdGVJZChpZCkge1xuICAgIGxldCBwaWVjZXMgPSBpZC5zcGxpdCgnIycpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnRQb3M6IHBpZWNlc1sxXSxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBsYWJlbGVyKHN0ZXBOYW1lLCBmdW4sIGxhYmVsVmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuLCAnbmFtZScsIHtcbiAgICAgICAgdmFsdWU6IHN0ZXBOYW1lICsgJyAnXG4gICAgICAgICsgKCh0eXBlb2YgbGFiZWxWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcpID8gbGFiZWxWYWx1ZSA6ICcnKVxuICAgIH0pO1xuICAgIHJldHVybiBmdW47XG59XG4iXX0=