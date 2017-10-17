define(['exports', './initialState', './dsl'], function (exports, _initialState, _dsl) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.startStep = startStep;
    exports.datasetStep = datasetStep;
    exports.customvarStep = customvarStep;
    exports.propertyStep = propertyStep;
    exports.exitStep = exitStep;
    exports.typeStep = typeStep;
    exports.randomStep = randomStep;
    exports.connectedStep = connectedStep;
    exports.fixedStep = fixedStep;

    var _dsl2 = _interopRequireDefault(_dsl);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    let state = _initialState.initialState;
    function startStep() {
        return (0, _dsl2.default)([customvarStep, datasetStep]);
    }

    function datasetStep() {
        return (0, _dsl2.default)([startStep, ...Object.keys(state.dataset).map(propertyStep)]);
    }

    function customvarStep() {
        return (0, _dsl2.default)([startStep, ...state.customvar.map(exitStep)]);
    }

    function propertyStep(datasetId) {
        let datasetName = state.dataset_name[parsedStateId(datasetId).currentPos];
        return (0, _dsl2.default)([startStep, ...state.dataset_keys[parsedStateId(datasetId).currentPos]
        //.map(key => datasetName + '.' + key)
        .map(typeStep)]);
    }

    function exitStep(value, index) {
        // reasonsforcologne.image/2 --> $(reasonsforcologne.image/2)
        let result = () => {
            alert('$(' + value + ')');
        };
        Object.defineProperty(result, 'name', { value: 'exitStep ' + (typeof index !== 'undefined' ? 'item ' + index : '') });
        return result;
    }

    function typeStep(datasetProperty) {
        return (0, _dsl2.default)([startStep, ...[randomStep, connectedStep, fixedStep].map(fun => {
            let result = () => fun(datasetProperty);
            Object.defineProperty(result, 'name', { value: fun.name });
            return result;
        })]);
    }

    function randomStep(datasetProperty) {
        return (0, _dsl2.default)([startStep, exitStep(datasetProperty)]);
    }

    function connectedStep(datasetProperty) {
        return (0, _dsl2.default)([startStep, ...datasetIndexes(datasetProperty + '/').map(exitStep)]);
    }

    function fixedStep(datasetProperty) {
        return (0, _dsl2.default)([startStep, ...datasetIndexes(datasetProperty + '#').map(exitStep)]);
    }

    function datasetIndexes(datasetPropertyWithSuffix) {
        // reasonsforcologne.image -> reasonsforcologne.image/2
        let datasetName = datasetPropertyWithSuffix.split('.')[0];
        let datasetPos = state.dataset_name.findIndex(item => item === datasetName);
        let numInstances = state.dataset['dataset#' + datasetPos].length;
        return [...Array(numInstances).keys()].map(key => datasetPropertyWithSuffix + key);
    }

    function parsedStateId(id) {
        let pieces = id.split('#');
        return {
            currentPos: pieces[1]
        };
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9zdGVwc19yZWYuanMiXSwibmFtZXMiOlsic3RhcnRTdGVwIiwiZGF0YXNldFN0ZXAiLCJjdXN0b212YXJTdGVwIiwicHJvcGVydHlTdGVwIiwiZXhpdFN0ZXAiLCJ0eXBlU3RlcCIsInJhbmRvbVN0ZXAiLCJjb25uZWN0ZWRTdGVwIiwiZml4ZWRTdGVwIiwic3RhdGUiLCJPYmplY3QiLCJrZXlzIiwiZGF0YXNldCIsIm1hcCIsImN1c3RvbXZhciIsImRhdGFzZXRJZCIsImRhdGFzZXROYW1lIiwiZGF0YXNldF9uYW1lIiwicGFyc2VkU3RhdGVJZCIsImN1cnJlbnRQb3MiLCJkYXRhc2V0X2tleXMiLCJ2YWx1ZSIsImluZGV4IiwicmVzdWx0IiwiYWxlcnQiLCJkZWZpbmVQcm9wZXJ0eSIsImRhdGFzZXRQcm9wZXJ0eSIsImZ1biIsIm5hbWUiLCJkYXRhc2V0SW5kZXhlcyIsImRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXgiLCJzcGxpdCIsImRhdGFzZXRQb3MiLCJmaW5kSW5kZXgiLCJpdGVtIiwibnVtSW5zdGFuY2VzIiwibGVuZ3RoIiwiQXJyYXkiLCJrZXkiLCJpZCIsInBpZWNlcyJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztZQUtnQkEsUyxHQUFBQSxTO1lBSUFDLFcsR0FBQUEsVztZQUlBQyxhLEdBQUFBLGE7WUFJQUMsWSxHQUFBQSxZO1lBUUFDLFEsR0FBQUEsUTtZQVFBQyxRLEdBQUFBLFE7WUFRQUMsVSxHQUFBQSxVO1lBSUFDLGEsR0FBQUEsYTtZQUlBQyxTLEdBQUFBLFM7Ozs7Ozs7Ozs7QUE3Q2hCLFFBQUlDLGtDQUFKO0FBQ08sYUFBU1QsU0FBVCxHQUFxQjtBQUN4QixlQUFPLG1CQUFPLENBQUNFLGFBQUQsRUFBZ0JELFdBQWhCLENBQVAsQ0FBUDtBQUNIOztBQUVNLGFBQVNBLFdBQVQsR0FBdUI7QUFDMUIsZUFBTyxtQkFBTyxDQUFDRCxTQUFELEVBQVksR0FBR1UsT0FBT0MsSUFBUCxDQUFZRixNQUFNRyxPQUFsQixFQUEyQkMsR0FBM0IsQ0FBK0JWLFlBQS9CLENBQWYsQ0FBUCxDQUFQO0FBQ0g7O0FBRU0sYUFBU0QsYUFBVCxHQUF5QjtBQUM1QixlQUFPLG1CQUFPLENBQUNGLFNBQUQsRUFBWSxHQUFHUyxNQUFNSyxTQUFOLENBQWdCRCxHQUFoQixDQUFvQlQsUUFBcEIsQ0FBZixDQUFQLENBQVA7QUFDSDs7QUFFTSxhQUFTRCxZQUFULENBQXNCWSxTQUF0QixFQUFpQztBQUNwQyxZQUFJQyxjQUFjUCxNQUFNUSxZQUFOLENBQW1CQyxjQUFjSCxTQUFkLEVBQXlCSSxVQUE1QyxDQUFsQjtBQUNBLGVBQU8sbUJBQU8sQ0FBQ25CLFNBQUQsRUFBWSxHQUFHUyxNQUFNVyxZQUFOLENBQW1CRixjQUFjSCxTQUFkLEVBQXlCSSxVQUE1QztBQUN6QjtBQUR5QixTQUV4Qk4sR0FGd0IsQ0FFcEJSLFFBRm9CLENBQWYsQ0FBUCxDQUFQO0FBSUg7O0FBRU0sYUFBU0QsUUFBVCxDQUFrQmlCLEtBQWxCLEVBQXlCQyxLQUF6QixFQUFnQztBQUFFO0FBQ3JDLFlBQUlDLFNBQVMsTUFBTTtBQUNmQyxrQkFBTSxPQUFPSCxLQUFQLEdBQWUsR0FBckI7QUFDSCxTQUZEO0FBR0FYLGVBQU9lLGNBQVAsQ0FBc0JGLE1BQXRCLEVBQThCLE1BQTlCLEVBQXNDLEVBQUNGLE9BQU8sZUFBZ0IsT0FBT0MsS0FBUCxLQUFpQixXQUFsQixHQUFpQyxVQUFVQSxLQUEzQyxHQUFtRCxFQUFsRSxDQUFSLEVBQXRDO0FBQ0EsZUFBT0MsTUFBUDtBQUNIOztBQUVNLGFBQVNsQixRQUFULENBQWtCcUIsZUFBbEIsRUFBbUM7QUFDdEMsZUFBTyxtQkFBTyxDQUFDMUIsU0FBRCxFQUFZLEdBQUcsQ0FBQ00sVUFBRCxFQUFhQyxhQUFiLEVBQTRCQyxTQUE1QixFQUF1Q0ssR0FBdkMsQ0FBMkNjLE9BQU87QUFDM0UsZ0JBQUlKLFNBQVMsTUFBTUksSUFBSUQsZUFBSixDQUFuQjtBQUNBaEIsbUJBQU9lLGNBQVAsQ0FBc0JGLE1BQXRCLEVBQThCLE1BQTlCLEVBQXNDLEVBQUNGLE9BQU9NLElBQUlDLElBQVosRUFBdEM7QUFDQSxtQkFBT0wsTUFBUDtBQUNILFNBSjRCLENBQWYsQ0FBUCxDQUFQO0FBS0g7O0FBRU0sYUFBU2pCLFVBQVQsQ0FBb0JvQixlQUFwQixFQUFxQztBQUN4QyxlQUFPLG1CQUFPLENBQUMxQixTQUFELEVBQVlJLFNBQVNzQixlQUFULENBQVosQ0FBUCxDQUFQO0FBQ0g7O0FBRU0sYUFBU25CLGFBQVQsQ0FBdUJtQixlQUF2QixFQUF3QztBQUMzQyxlQUFPLG1CQUFPLENBQUMxQixTQUFELEVBQVksR0FBRzZCLGVBQWVILGtCQUFrQixHQUFqQyxFQUFzQ2IsR0FBdEMsQ0FBMENULFFBQTFDLENBQWYsQ0FBUCxDQUFQO0FBQ0g7O0FBRU0sYUFBU0ksU0FBVCxDQUFtQmtCLGVBQW5CLEVBQW9DO0FBQ3ZDLGVBQU8sbUJBQU8sQ0FBQzFCLFNBQUQsRUFBWSxHQUFHNkIsZUFBZUgsa0JBQWtCLEdBQWpDLEVBQXNDYixHQUF0QyxDQUEwQ1QsUUFBMUMsQ0FBZixDQUFQLENBQVA7QUFDSDs7QUFFRCxhQUFTeUIsY0FBVCxDQUF3QkMseUJBQXhCLEVBQW1EO0FBQUU7QUFDakQsWUFBSWQsY0FBY2MsMEJBQTBCQyxLQUExQixDQUFnQyxHQUFoQyxFQUFxQyxDQUFyQyxDQUFsQjtBQUNBLFlBQUlDLGFBQWF2QixNQUFNUSxZQUFOLENBQW1CZ0IsU0FBbkIsQ0FBNkJDLFFBQVFBLFNBQVNsQixXQUE5QyxDQUFqQjtBQUNBLFlBQUltQixlQUFlMUIsTUFBTUcsT0FBTixDQUFjLGFBQWFvQixVQUEzQixFQUF1Q0ksTUFBMUQ7QUFDQSxlQUFPLENBQUMsR0FBR0MsTUFBTUYsWUFBTixFQUFvQnhCLElBQXBCLEVBQUosRUFBZ0NFLEdBQWhDLENBQW9DeUIsT0FBT1IsNEJBQTRCUSxHQUF2RSxDQUFQO0FBQ0g7O0FBRUQsYUFBU3BCLGFBQVQsQ0FBdUJxQixFQUF2QixFQUEyQjtBQUN2QixZQUFJQyxTQUFTRCxHQUFHUixLQUFILENBQVMsR0FBVCxDQUFiO0FBQ0EsZUFBTztBQUNIWix3QkFBWXFCLE9BQU8sQ0FBUDtBQURULFNBQVA7QUFHSCIsImZpbGUiOiJzdGVwc19yZWYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7aW5pdGlhbFN0YXRlfSBmcm9tICcuL2luaXRpYWxTdGF0ZSc7XG5pbXBvcnQgY2hvaWNlIGZyb20gJy4vZHNsJztcbmxldCBzdGF0ZSA9IGluaXRpYWxTdGF0ZVxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0U3RlcCgpIHtcbiAgICByZXR1cm4gY2hvaWNlKFtjdXN0b212YXJTdGVwLCBkYXRhc2V0U3RlcF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YXNldFN0ZXAoKSB7XG4gICAgcmV0dXJuIGNob2ljZShbc3RhcnRTdGVwLCAuLi5PYmplY3Qua2V5cyhzdGF0ZS5kYXRhc2V0KS5tYXAocHJvcGVydHlTdGVwKV0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3VzdG9tdmFyU3RlcCgpIHtcbiAgICByZXR1cm4gY2hvaWNlKFtzdGFydFN0ZXAsIC4uLnN0YXRlLmN1c3RvbXZhci5tYXAoZXhpdFN0ZXApXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eVN0ZXAoZGF0YXNldElkKSB7XG4gICAgbGV0IGRhdGFzZXROYW1lID0gc3RhdGUuZGF0YXNldF9uYW1lW3BhcnNlZFN0YXRlSWQoZGF0YXNldElkKS5jdXJyZW50UG9zXTtcbiAgICByZXR1cm4gY2hvaWNlKFtzdGFydFN0ZXAsIC4uLnN0YXRlLmRhdGFzZXRfa2V5c1twYXJzZWRTdGF0ZUlkKGRhdGFzZXRJZCkuY3VycmVudFBvc11cbiAgICAgICAgLy8ubWFwKGtleSA9PiBkYXRhc2V0TmFtZSArICcuJyArIGtleSlcbiAgICAgICAgLm1hcCh0eXBlU3RlcClcbiAgICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4aXRTdGVwKHZhbHVlLCBpbmRleCkgeyAvLyByZWFzb25zZm9yY29sb2duZS5pbWFnZS8yIC0tPiAkKHJlYXNvbnNmb3Jjb2xvZ25lLmltYWdlLzIpXG4gICAgbGV0IHJlc3VsdCA9ICgpID0+IHtcbiAgICAgICAgYWxlcnQoJyQoJyArIHZhbHVlICsgJyknKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXN1bHQsICduYW1lJywge3ZhbHVlOiAnZXhpdFN0ZXAgJyArICgodHlwZW9mIGluZGV4ICE9PSAndW5kZWZpbmVkJykgPyAnaXRlbSAnICsgaW5kZXggOiAnJyl9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVN0ZXAoZGF0YXNldFByb3BlcnR5KSB7XG4gICAgcmV0dXJuIGNob2ljZShbc3RhcnRTdGVwLCAuLi5bcmFuZG9tU3RlcCwgY29ubmVjdGVkU3RlcCwgZml4ZWRTdGVwXS5tYXAoZnVuID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9ICgpID0+IGZ1bihkYXRhc2V0UHJvcGVydHkpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzdWx0LCAnbmFtZScsIHt2YWx1ZTogZnVuLm5hbWV9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KV0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tU3RlcChkYXRhc2V0UHJvcGVydHkpIHtcbiAgICByZXR1cm4gY2hvaWNlKFtzdGFydFN0ZXAsIGV4aXRTdGVwKGRhdGFzZXRQcm9wZXJ0eSldKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbm5lY3RlZFN0ZXAoZGF0YXNldFByb3BlcnR5KSB7XG4gICAgcmV0dXJuIGNob2ljZShbc3RhcnRTdGVwLCAuLi5kYXRhc2V0SW5kZXhlcyhkYXRhc2V0UHJvcGVydHkgKyAnLycpLm1hcChleGl0U3RlcCldKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpeGVkU3RlcChkYXRhc2V0UHJvcGVydHkpIHtcbiAgICByZXR1cm4gY2hvaWNlKFtzdGFydFN0ZXAsIC4uLmRhdGFzZXRJbmRleGVzKGRhdGFzZXRQcm9wZXJ0eSArICcjJykubWFwKGV4aXRTdGVwKV0pO1xufVxuXG5mdW5jdGlvbiBkYXRhc2V0SW5kZXhlcyhkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4KSB7IC8vIHJlYXNvbnNmb3Jjb2xvZ25lLmltYWdlIC0+IHJlYXNvbnNmb3Jjb2xvZ25lLmltYWdlLzJcbiAgICBsZXQgZGF0YXNldE5hbWUgPSBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4LnNwbGl0KCcuJylbMF07XG4gICAgbGV0IGRhdGFzZXRQb3MgPSBzdGF0ZS5kYXRhc2V0X25hbWUuZmluZEluZGV4KGl0ZW0gPT4gaXRlbSA9PT0gZGF0YXNldE5hbWUpO1xuICAgIGxldCBudW1JbnN0YW5jZXMgPSBzdGF0ZS5kYXRhc2V0WydkYXRhc2V0IycgKyBkYXRhc2V0UG9zXS5sZW5ndGg7XG4gICAgcmV0dXJuIFsuLi5BcnJheShudW1JbnN0YW5jZXMpLmtleXMoKV0ubWFwKGtleSA9PiBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4ICsga2V5KTtcbn1cblxuZnVuY3Rpb24gcGFyc2VkU3RhdGVJZChpZCkge1xuICAgIGxldCBwaWVjZXMgPSBpZC5zcGxpdCgnIycpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnRQb3M6IHBpZWNlc1sxXSxcbiAgICB9O1xufSJdfQ==