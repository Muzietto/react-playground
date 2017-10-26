define(['exports', './initialState', './view', '../template/startStep_template', '../template/customvarStep_template', '../template/datasetStep_template', '../template/typeStep_template', '../template/indexSelectionStep_template'], function (exports, _initialState, _view, _startStep_template, _customvarStep_template, _datasetStep_template, _typeStep_template, _indexSelectionStep_template) {
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

    var _indexSelectionStep_template2 = _interopRequireDefault(_indexSelectionStep_template);

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

    let promiseCallback;

    function startStep(resolveCallback) {
        promiseCallback = resolveCallback;

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
            promiseCallback,
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

    // randomStep proposes again the typeStep while enabling the save button
    function randomStep(datasetProperty) {
        let datasetName = datasetProperty.split('.')[0];
        return (0, _view2.default)({
            location: 'randomStep',
            chosen_dataset_property: datasetProperty,
            handlers: {
                backward: [startStep, labeler('propertyStep', () => datasetStep(), datasetName), labeler('typeStep', () => typeStep(datasetProperty), datasetProperty)],
                forward: [...[randomStep, connectedStep, fixedStep].map(fun => labeler(fun.name, () => fun(datasetProperty), datasetProperty))]
            },
            state: _initialState.initialState,
            footer: wizardProps.footer,
            promiseCallback
        }, _typeStep_template2.default);
    }

    function connectedStep(datasetProperty, propWithIndex) {
        let datasetName = datasetProperty.split('.')[0];
        let datasetPropertyWithSuffix = datasetProperty + '/';
        return (0, _view2.default)({
            location: 'connectedStep',
            chosen_dataset_property: datasetProperty,
            handlers: {
                backward: [startStep, labeler('propertyStep', () => datasetStep(), datasetName), labeler('typeStep', () => typeStep(datasetProperty), datasetProperty)],
                forward: [...datasetIndexes(datasetPropertyWithSuffix).map(propSuffixIndex => labeler('exitStep ' + propSuffixIndex, () => connectedStep.apply(null, [datasetProperty, propSuffixIndex])))]
            },
            state: _initialState.initialState,
            promiseCallback,
            footer: wizardProps.footer,
            // ignoring click events as args
            chosen_prop_with_index: propWithIndex ? propWithIndex : undefined
        }, _indexSelectionStep_template2.default);
    }

    function fixedStep(datasetProperty, propWithIndex) {
        let datasetName = datasetProperty.split('.')[0];
        let datasetPropertyWithSuffix = datasetProperty + '#';
        return (0, _view2.default)({
            location: 'fixedStep',
            chosen_dataset_property: datasetProperty,
            handlers: {
                backward: [startStep, labeler('propertyStep', () => datasetStep(), datasetName), labeler('typeStep', () => typeStep(datasetProperty), datasetProperty)],
                forward: [...datasetIndexes(datasetPropertyWithSuffix).map(propSuffixIndex => labeler('exitStep ' + propSuffixIndex, () => fixedStep.apply(null, [datasetProperty, propSuffixIndex])))]
            },
            state: _initialState.initialState,
            promiseCallback,
            footer: wizardProps.footer,
            // ignoring click events as args
            chosen_prop_with_index: propWithIndex ? propWithIndex : undefined
        }, _indexSelectionStep_template2.default);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9zdGF0ZV9tYWNoaW5lL3N0ZXBzLmpzIl0sIm5hbWVzIjpbInN0YXJ0U3RlcCIsIndpemFyZFByb3BzIiwiZm9vdGVyIiwiY2FuY2VsQnV0dG9uIiwib25DbGljayIsImFsZXJ0IiwiY2xhc3NOYW1lIiwicmVzdGFydEJ1dHRvbiIsInNhdmVCdXR0b24iLCJwcm9taXNlQ2FsbGJhY2siLCJyZXNvbHZlQ2FsbGJhY2siLCJsb2NhdGlvbiIsImhhbmRsZXJzIiwiYmFja3dhcmQiLCJmb3J3YXJkIiwiY3VzdG9tdmFyU3RlcCIsImRhdGFzZXRTdGVwIiwic3RhdGUiLCJjaG9zZW5WYXIiLCJjdXN0b212YXIiLCJtYXAiLCJjdXN0b21WYXIiLCJsYWJlbGVyIiwiY2FsbCIsImNob3Nlbl92YXIiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJPYmplY3QiLCJrZXlzIiwiZGF0YXNldCIsImRhdGFzZXRJZCIsImRhdGFzZXRQb3NpdGlvbiIsInBhcnNlZFN0YXRlSWQiLCJjdXJyZW50UG9zIiwiZGF0YXNldE5hbWUiLCJkYXRhc2V0X25hbWUiLCJkYXRhc2V0X2tleXMiLCJrZXkiLCJ0eXBlU3RlcCIsImRhdGFzZXRQcm9wZXJ0eSIsInNwbGl0IiwiZmluZEluZGV4IiwibiIsImNob3Nlbl9kYXRhc2V0X25hbWUiLCJjaG9zZW5fZGF0YXNldF9wcm9wZXJ0eSIsInJhbmRvbVN0ZXAiLCJjb25uZWN0ZWRTdGVwIiwiZml4ZWRTdGVwIiwiZnVuIiwibmFtZSIsInByb3BXaXRoSW5kZXgiLCJkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4IiwiZGF0YXNldEluZGV4ZXMiLCJwcm9wU3VmZml4SW5kZXgiLCJhcHBseSIsImNob3Nlbl9wcm9wX3dpdGhfaW5kZXgiLCJkYXRhc2V0UG9zIiwiaXRlbSIsIm51bUluc3RhbmNlcyIsIkFycmF5IiwiaWQiLCJwaWVjZXMiLCJzdGVwTmFtZSIsImxhYmVsVmFsdWUiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIl0sIm1h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LEdBQXRCLEVBQTJCLE1BQTNCLEVBQW1DO0FBQy9CaUIsbUJBQU9ILFdBQVcsR0FBWCxJQUNILE9BQU9DLFVBQVAsS0FBc0IsV0FBdkIsR0FBc0NBLFVBQXRDLEdBQW1ELEVBRC9DO0FBRHdCLFNBQW5DO0FBSUEsZUFBT2YsR0FBUDtBQUNIIiwiZmlsZSI6InN0ZXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge2luaXRpYWxTdGF0ZSBhcyBzdGF0ZX0gZnJvbSAnLi9pbml0aWFsU3RhdGUnO1xuaW1wb3J0IGNob2ljZSBmcm9tICcuL3ZpZXcnO1xuaW1wb3J0IHN0YXJ0U3RlcF90ZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZS9zdGFydFN0ZXBfdGVtcGxhdGUnO1xuaW1wb3J0IGN1c3RvbXZhclN0ZXBfdGVtcGxhdGUgZnJvbSAnLi4vdGVtcGxhdGUvY3VzdG9tdmFyU3RlcF90ZW1wbGF0ZSc7XG5pbXBvcnQgZGF0YXNldFN0ZXBfdGVtcGxhdGUgZnJvbSAnLi4vdGVtcGxhdGUvZGF0YXNldFN0ZXBfdGVtcGxhdGUnO1xuaW1wb3J0IHR5cGVTdGVwX3RlbXBsYXRlIGZyb20gJy4uL3RlbXBsYXRlL3R5cGVTdGVwX3RlbXBsYXRlJztcbmltcG9ydCBpbmRleFNlbGVjdGlvblN0ZXBfdGVtcGxhdGUgZnJvbSAnLi4vdGVtcGxhdGUvaW5kZXhTZWxlY3Rpb25TdGVwX3RlbXBsYXRlJztcblxubGV0IHdpemFyZFByb3BzID0ge1xuICAgIGZvb3Rlcjoge1xuICAgICAgICBjYW5jZWxCdXR0b246IHtcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydCgnY2FuY2VsIGJ1dHRvbiBjbGlja2VkJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbGVmdF9idXR0b24nLFxuICAgICAgICB9LFxuICAgICAgICByZXN0YXJ0QnV0dG9uOiB7XG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ3Jlc3RhcnQgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdsZWZ0X2J1dHRvbicsXG4gICAgICAgIH0sXG4gICAgICAgIHNhdmVCdXR0b246IHtcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydCgnU0FWRSBidXR0b24gY2xpY2tlZCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3JpZ2h0X2J1dHRvbicsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbmxldCBwcm9taXNlQ2FsbGJhY2s7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFN0ZXAocmVzb2x2ZUNhbGxiYWNrKSB7XG4gICAgcHJvbWlzZUNhbGxiYWNrID0gcmVzb2x2ZUNhbGxiYWNrO1xuXG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAnc3RhcnRTdGVwJyxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFtjdXN0b212YXJTdGVwLCBkYXRhc2V0U3RlcF0sXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXRlLFxuICAgICAgICBmb290ZXI6IHdpemFyZFByb3BzLmZvb3RlcixcbiAgICB9LCBzdGFydFN0ZXBfdGVtcGxhdGUpO1xufVxuXG5mdW5jdGlvbiBjdXN0b212YXJTdGVwKGNob3NlblZhcikge1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ2N1c3RvbXZhclN0ZXAnLFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtzdGFydFN0ZXAsXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFsuLi5zdGF0ZS5jdXN0b212YXJcbiAgICAgICAgICAgICAgICAubWFwKGN1c3RvbVZhciA9PiBsYWJlbGVyKCdleGl0U3RlcCcsICgpID0+IGN1c3RvbXZhclN0ZXAuY2FsbChudWxsLCBjdXN0b21WYXIpLCBjdXN0b21WYXIpKV1cbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIHByb21pc2VDYWxsYmFjayxcbiAgICAgICAgZm9vdGVyOiB3aXphcmRQcm9wcy5mb290ZXIsXG4gICAgICAgIC8vIGlnbm9yaW5nIGNsaWNrIGV2ZW50cyBhcyBhcmdzXG4gICAgICAgIGNob3Nlbl92YXI6IChjaG9zZW5WYXIubGVuZ3RoKSA/IGNob3NlblZhciA6IHVuZGVmaW5lZCxcbiAgICB9LCBjdXN0b212YXJTdGVwX3RlbXBsYXRlKTtcbn1cblxuZnVuY3Rpb24gZGF0YXNldFN0ZXAoKSB7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAnZGF0YXNldFN0ZXAnLFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtzdGFydFN0ZXAsXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFsgLy8gb25lIGFycmF5IGZvciBlYWNoIGRhdGFzZXRcbiAgICAgICAgICAgICAgICAuLi5PYmplY3Qua2V5cyhzdGF0ZS5kYXRhc2V0KVxuICAgICAgICAgICAgICAgICAgICAubWFwKGRhdGFzZXRJZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YXNldFBvc2l0aW9uID0gcGFyc2VkU3RhdGVJZChkYXRhc2V0SWQpLmN1cnJlbnRQb3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YXNldE5hbWUgPSBzdGF0ZS5kYXRhc2V0X25hbWVbZGF0YXNldFBvc2l0aW9uXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUuZGF0YXNldF9rZXlzW2RhdGFzZXRQb3NpdGlvbl1dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChrZXkgPT4gZGF0YXNldE5hbWUgKyAnLicgKyBrZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChrZXkgPT4gbGFiZWxlcigndHlwZVN0ZXAnLCAoKSA9PiB0eXBlU3RlcChrZXkpLCBrZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIGZvb3Rlcjogd2l6YXJkUHJvcHMuZm9vdGVyLFxuICAgIH0sIGRhdGFzZXRTdGVwX3RlbXBsYXRlKTtcbn1cblxuZnVuY3Rpb24gdHlwZVN0ZXAoZGF0YXNldFByb3BlcnR5KSB7XG4gICAgbGV0IGRhdGFzZXROYW1lID0gZGF0YXNldFByb3BlcnR5LnNwbGl0KCcuJylbMF07XG4gICAgbGV0IGRhdGFzZXRJZCA9ICdkYXRhc2V0IycgKyBzdGF0ZS5kYXRhc2V0X25hbWUuZmluZEluZGV4KG4gPT4gbiA9PT0gZGF0YXNldE5hbWUpO1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ3R5cGVTdGVwJyxcbiAgICAgICAgY2hvc2VuX2RhdGFzZXRfbmFtZTogZGF0YXNldE5hbWUsXG4gICAgICAgIGNob3Nlbl9kYXRhc2V0X3Byb3BlcnR5OiBkYXRhc2V0UHJvcGVydHksXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgICAgICAgICBsYWJlbGVyKCdwcm9wZXJ0eVN0ZXAnLCAoKSA9PiBkYXRhc2V0U3RlcCgpLCBkYXRhc2V0TmFtZSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbXG4gICAgICAgICAgICAgICAgLi4uW3JhbmRvbVN0ZXAsIGNvbm5lY3RlZFN0ZXAsIGZpeGVkU3RlcF1cbiAgICAgICAgICAgICAgICAgICAgLm1hcChmdW4gPT4gbGFiZWxlcihmdW4ubmFtZSwgKCkgPT4gZnVuKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSkpXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXRlLFxuICAgICAgICBmb290ZXI6IHdpemFyZFByb3BzLmZvb3RlcixcbiAgICB9LCB0eXBlU3RlcF90ZW1wbGF0ZSk7XG59XG5cbi8vIHJhbmRvbVN0ZXAgcHJvcG9zZXMgYWdhaW4gdGhlIHR5cGVTdGVwIHdoaWxlIGVuYWJsaW5nIHRoZSBzYXZlIGJ1dHRvblxuZnVuY3Rpb24gcmFuZG9tU3RlcChkYXRhc2V0UHJvcGVydHkpIHtcbiAgICBsZXQgZGF0YXNldE5hbWUgPSBkYXRhc2V0UHJvcGVydHkuc3BsaXQoJy4nKVswXTtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdyYW5kb21TdGVwJyxcbiAgICAgICAgY2hvc2VuX2RhdGFzZXRfcHJvcGVydHk6IGRhdGFzZXRQcm9wZXJ0eSxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbXG4gICAgICAgICAgICAgICAgc3RhcnRTdGVwLFxuICAgICAgICAgICAgICAgIGxhYmVsZXIoJ3Byb3BlcnR5U3RlcCcsICgpID0+IGRhdGFzZXRTdGVwKCksIGRhdGFzZXROYW1lKSxcbiAgICAgICAgICAgICAgICBsYWJlbGVyKCd0eXBlU3RlcCcsICgpID0+IHR5cGVTdGVwKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbXG4gICAgICAgICAgICAgICAgLi4uW3JhbmRvbVN0ZXAsIGNvbm5lY3RlZFN0ZXAsIGZpeGVkU3RlcF1cbiAgICAgICAgICAgICAgICAgICAgLm1hcChmdW4gPT4gbGFiZWxlcihmdW4ubmFtZSwgKCkgPT4gZnVuKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSkpXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXRlLFxuICAgICAgICBmb290ZXI6IHdpemFyZFByb3BzLmZvb3RlcixcbiAgICAgICAgcHJvbWlzZUNhbGxiYWNrLFxuICAgIH0sIHR5cGVTdGVwX3RlbXBsYXRlKTtcbn1cblxuZnVuY3Rpb24gY29ubmVjdGVkU3RlcChkYXRhc2V0UHJvcGVydHksIHByb3BXaXRoSW5kZXgpIHtcbiAgICBsZXQgZGF0YXNldE5hbWUgPSBkYXRhc2V0UHJvcGVydHkuc3BsaXQoJy4nKVswXTtcbiAgICBsZXQgZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCA9IGRhdGFzZXRQcm9wZXJ0eSArICcvJztcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdjb25uZWN0ZWRTdGVwJyxcbiAgICAgICAgY2hvc2VuX2RhdGFzZXRfcHJvcGVydHk6IGRhdGFzZXRQcm9wZXJ0eSxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbXG4gICAgICAgICAgICAgICAgc3RhcnRTdGVwLFxuICAgICAgICAgICAgICAgIGxhYmVsZXIoJ3Byb3BlcnR5U3RlcCcsICgpID0+IGRhdGFzZXRTdGVwKCksIGRhdGFzZXROYW1lKSxcbiAgICAgICAgICAgICAgICBsYWJlbGVyKCd0eXBlU3RlcCcsICgpID0+IHR5cGVTdGVwKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbXG4gICAgICAgICAgICAgICAgLi4uZGF0YXNldEluZGV4ZXMoZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeClcbiAgICAgICAgICAgICAgICAgICAgLm1hcChwcm9wU3VmZml4SW5kZXggPT4gbGFiZWxlcignZXhpdFN0ZXAgJyArIHByb3BTdWZmaXhJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IGNvbm5lY3RlZFN0ZXAuYXBwbHkobnVsbCwgW2RhdGFzZXRQcm9wZXJ0eSwgcHJvcFN1ZmZpeEluZGV4XSkpKVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAgcHJvbWlzZUNhbGxiYWNrLFxuICAgICAgICBmb290ZXI6IHdpemFyZFByb3BzLmZvb3RlcixcbiAgICAgICAgLy8gaWdub3JpbmcgY2xpY2sgZXZlbnRzIGFzIGFyZ3NcbiAgICAgICAgY2hvc2VuX3Byb3Bfd2l0aF9pbmRleDogKHByb3BXaXRoSW5kZXgpID8gcHJvcFdpdGhJbmRleCA6IHVuZGVmaW5lZCxcbiAgICB9LCBpbmRleFNlbGVjdGlvblN0ZXBfdGVtcGxhdGUpO1xufVxuXG5mdW5jdGlvbiBmaXhlZFN0ZXAoZGF0YXNldFByb3BlcnR5LCBwcm9wV2l0aEluZGV4KSB7XG4gICAgbGV0IGRhdGFzZXROYW1lID0gZGF0YXNldFByb3BlcnR5LnNwbGl0KCcuJylbMF07XG4gICAgbGV0IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggPSBkYXRhc2V0UHJvcGVydHkgKyAnIyc7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAnZml4ZWRTdGVwJyxcbiAgICAgICAgY2hvc2VuX2RhdGFzZXRfcHJvcGVydHk6IGRhdGFzZXRQcm9wZXJ0eSxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbXG4gICAgICAgICAgICAgICAgc3RhcnRTdGVwLFxuICAgICAgICAgICAgICAgIGxhYmVsZXIoJ3Byb3BlcnR5U3RlcCcsICgpID0+IGRhdGFzZXRTdGVwKCksIGRhdGFzZXROYW1lKSxcbiAgICAgICAgICAgICAgICBsYWJlbGVyKCd0eXBlU3RlcCcsICgpID0+IHR5cGVTdGVwKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbXG4gICAgICAgICAgICAgICAgLi4uZGF0YXNldEluZGV4ZXMoZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeClcbiAgICAgICAgICAgICAgICAgICAgLm1hcChwcm9wU3VmZml4SW5kZXggPT4gbGFiZWxlcignZXhpdFN0ZXAgJyArIHByb3BTdWZmaXhJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IGZpeGVkU3RlcC5hcHBseShudWxsLCBbZGF0YXNldFByb3BlcnR5LCBwcm9wU3VmZml4SW5kZXhdKSkpXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXRlLFxuICAgICAgICBwcm9taXNlQ2FsbGJhY2ssXG4gICAgICAgIGZvb3Rlcjogd2l6YXJkUHJvcHMuZm9vdGVyLFxuICAgICAgICAvLyBpZ25vcmluZyBjbGljayBldmVudHMgYXMgYXJnc1xuICAgICAgICBjaG9zZW5fcHJvcF93aXRoX2luZGV4OiAocHJvcFdpdGhJbmRleCkgPyBwcm9wV2l0aEluZGV4IDogdW5kZWZpbmVkLFxuICAgIH0sIGluZGV4U2VsZWN0aW9uU3RlcF90ZW1wbGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGRhdGFzZXRJbmRleGVzKGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXgpIHsgLy8gcmVhc29uc2ZvcmNvbG9nbmUuaW1hZ2UgLT4gcmVhc29uc2ZvcmNvbG9nbmUuaW1hZ2UvMlxuICAgIGxldCBkYXRhc2V0TmFtZSA9IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXguc3BsaXQoJy4nKVswXTtcbiAgICBsZXQgZGF0YXNldFBvcyA9IHN0YXRlLmRhdGFzZXRfbmFtZS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSBkYXRhc2V0TmFtZSk7XG4gICAgbGV0IG51bUluc3RhbmNlcyA9IHN0YXRlLmRhdGFzZXRbJ2RhdGFzZXQjJyArIGRhdGFzZXRQb3NdLmxlbmd0aDtcbiAgICByZXR1cm4gWy4uLkFycmF5KG51bUluc3RhbmNlcykua2V5cygpXS5tYXAoa2V5ID0+IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggKyBrZXkpO1xufVxuXG5mdW5jdGlvbiBwYXJzZWRTdGF0ZUlkKGlkKSB7XG4gICAgbGV0IHBpZWNlcyA9IGlkLnNwbGl0KCcjJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudFBvczogcGllY2VzWzFdLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGxhYmVsZXIoc3RlcE5hbWUsIGZ1biwgbGFiZWxWYWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW4sICduYW1lJywge1xuICAgICAgICB2YWx1ZTogc3RlcE5hbWUgKyAnICdcbiAgICAgICAgKyAoKHR5cGVvZiBsYWJlbFZhbHVlICE9PSAndW5kZWZpbmVkJykgPyBsYWJlbFZhbHVlIDogJycpXG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bjtcbn1cbiJdfQ==