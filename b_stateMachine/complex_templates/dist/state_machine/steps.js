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

    // minimal config props, mostly overridden down the process
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

    function startStep(resolveCallback, REPLACE_CALLBACK) {

        if (REPLACE_CALLBACK) {
            promiseCallback = resolveCallback;
        }

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

    // 'connectedStep', '/'
    function indexSelectionStep(stepName, separator) {
        let result = function (datasetProperty, propWithIndex) {
            let datasetName = datasetProperty.split('.')[0];
            let datasetPropertyWithSuffix = datasetProperty + separator;
            return (0, _view2.default)({
                location: stepName,
                chosen_dataset_property: datasetProperty,
                handlers: {
                    backward: [startStep, labeler('propertyStep', () => datasetStep(), datasetName), labeler('typeStep', () => typeStep(datasetProperty), datasetProperty)],
                    forward: [...datasetIndexes(datasetPropertyWithSuffix).map(propSuffixIndex => labeler('exitStep ' + propSuffixIndex, () => result.apply(null, [datasetProperty, propSuffixIndex])))]
                },
                state: _initialState.initialState,
                promiseCallback,
                footer: wizardProps.footer,
                // ignoring click events as args
                chosen_prop_with_index: propWithIndex ? propWithIndex : undefined
            }, _indexSelectionStep_template2.default);
        };

        Object.defineProperty(result, 'name', {
            value: stepName
        });

        return result;
    }

    function connectedStep(datasetProperty, propWithIndex) {
        return indexSelectionStep('connectedStep', '/')(datasetProperty, propWithIndex);
    }

    function fixedStep(datasetProperty, propWithIndex) {
        return indexSelectionStep('fixedStep', '#')(datasetProperty, propWithIndex);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9zdGF0ZV9tYWNoaW5lL3N0ZXBzLmpzIl0sIm5hbWVzIjpbInN0YXJ0U3RlcCIsIndpemFyZFByb3BzIiwiZm9vdGVyIiwiY2FuY2VsQnV0dG9uIiwib25DbGljayIsImFsZXJ0IiwiY2xhc3NOYW1lIiwicmVzdGFydEJ1dHRvbiIsInNhdmVCdXR0b24iLCJwcm9taXNlQ2FsbGJhY2siLCJyZXNvbHZlQ2FsbGJhY2siLCJSRVBMQUNFX0NBTExCQUNLIiwibG9jYXRpb24iLCJoYW5kbGVycyIsImJhY2t3YXJkIiwiZm9yd2FyZCIsImN1c3RvbXZhclN0ZXAiLCJkYXRhc2V0U3RlcCIsInN0YXRlIiwiY2hvc2VuVmFyIiwiY3VzdG9tdmFyIiwibWFwIiwiY3VzdG9tVmFyIiwibGFiZWxlciIsImNhbGwiLCJjaG9zZW5fdmFyIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiT2JqZWN0Iiwia2V5cyIsImRhdGFzZXQiLCJkYXRhc2V0SWQiLCJkYXRhc2V0UG9zaXRpb24iLCJwYXJzZWRTdGF0ZUlkIiwiY3VycmVudFBvcyIsImRhdGFzZXROYW1lIiwiZGF0YXNldF9uYW1lIiwiZGF0YXNldF9rZXlzIiwia2V5IiwidHlwZVN0ZXAiLCJkYXRhc2V0UHJvcGVydHkiLCJzcGxpdCIsImZpbmRJbmRleCIsIm4iLCJjaG9zZW5fZGF0YXNldF9uYW1lIiwiY2hvc2VuX2RhdGFzZXRfcHJvcGVydHkiLCJyYW5kb21TdGVwIiwiY29ubmVjdGVkU3RlcCIsImZpeGVkU3RlcCIsImZ1biIsIm5hbWUiLCJpbmRleFNlbGVjdGlvblN0ZXAiLCJzdGVwTmFtZSIsInNlcGFyYXRvciIsInJlc3VsdCIsInByb3BXaXRoSW5kZXgiLCJkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4IiwiZGF0YXNldEluZGV4ZXMiLCJwcm9wU3VmZml4SW5kZXgiLCJhcHBseSIsImNob3Nlbl9wcm9wX3dpdGhfaW5kZXgiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiZGF0YXNldFBvcyIs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ImZpbGUiOiJzdGVwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtpbml0aWFsU3RhdGUgYXMgc3RhdGV9IGZyb20gJy4vaW5pdGlhbFN0YXRlJztcbmltcG9ydCBjaG9pY2UgZnJvbSAnLi92aWV3JztcbmltcG9ydCBzdGFydFN0ZXBfdGVtcGxhdGUgZnJvbSAnLi4vdGVtcGxhdGUvc3RhcnRTdGVwX3RlbXBsYXRlJztcbmltcG9ydCBjdXN0b212YXJTdGVwX3RlbXBsYXRlIGZyb20gJy4uL3RlbXBsYXRlL2N1c3RvbXZhclN0ZXBfdGVtcGxhdGUnO1xuaW1wb3J0IGRhdGFzZXRTdGVwX3RlbXBsYXRlIGZyb20gJy4uL3RlbXBsYXRlL2RhdGFzZXRTdGVwX3RlbXBsYXRlJztcbmltcG9ydCB0eXBlU3RlcF90ZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZS90eXBlU3RlcF90ZW1wbGF0ZSc7XG5pbXBvcnQgaW5kZXhTZWxlY3Rpb25TdGVwX3RlbXBsYXRlIGZyb20gJy4uL3RlbXBsYXRlL2luZGV4U2VsZWN0aW9uU3RlcF90ZW1wbGF0ZSc7XG4gXG4vLyBtaW5pbWFsIGNvbmZpZyBwcm9wcywgbW9zdGx5IG92ZXJyaWRkZW4gZG93biB0aGUgcHJvY2Vzc1xubGV0IHdpemFyZFByb3BzID0ge1xuICAgIGZvb3Rlcjoge1xuICAgICAgICBjYW5jZWxCdXR0b246IHtcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydCgnY2FuY2VsIGJ1dHRvbiBjbGlja2VkJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbGVmdF9idXR0b24nLFxuICAgICAgICB9LFxuICAgICAgICByZXN0YXJ0QnV0dG9uOiB7XG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ3Jlc3RhcnQgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdsZWZ0X2J1dHRvbicsXG4gICAgICAgIH0sXG4gICAgICAgIHNhdmVCdXR0b246IHtcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydCgnU0FWRSBidXR0b24gY2xpY2tlZCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3JpZ2h0X2J1dHRvbicsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbmxldCBwcm9taXNlQ2FsbGJhY2s7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFN0ZXAocmVzb2x2ZUNhbGxiYWNrLCBSRVBMQUNFX0NBTExCQUNLKSB7XG5cbiAgICBpZiAoUkVQTEFDRV9DQUxMQkFDSykge1xuICAgICAgICBwcm9taXNlQ2FsbGJhY2sgPSByZXNvbHZlQ2FsbGJhY2s7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAnc3RhcnRTdGVwJyxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFtjdXN0b212YXJTdGVwLCBkYXRhc2V0U3RlcF0sXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXRlLFxuICAgICAgICBmb290ZXI6IHdpemFyZFByb3BzLmZvb3RlcixcbiAgICB9LCBzdGFydFN0ZXBfdGVtcGxhdGUpO1xufVxuXG5mdW5jdGlvbiBjdXN0b212YXJTdGVwKGNob3NlblZhcikge1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ2N1c3RvbXZhclN0ZXAnLFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtzdGFydFN0ZXAsXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFsuLi5zdGF0ZS5jdXN0b212YXJcbiAgICAgICAgICAgICAgICAubWFwKGN1c3RvbVZhciA9PiBsYWJlbGVyKCdleGl0U3RlcCcsICgpID0+IGN1c3RvbXZhclN0ZXAuY2FsbChudWxsLCBjdXN0b21WYXIpLCBjdXN0b21WYXIpKV1cbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIHByb21pc2VDYWxsYmFjayxcbiAgICAgICAgZm9vdGVyOiB3aXphcmRQcm9wcy5mb290ZXIsXG4gICAgICAgIC8vIGlnbm9yaW5nIGNsaWNrIGV2ZW50cyBhcyBhcmdzXG4gICAgICAgIGNob3Nlbl92YXI6IChjaG9zZW5WYXIubGVuZ3RoKSA/IGNob3NlblZhciA6IHVuZGVmaW5lZCxcbiAgICB9LCBjdXN0b212YXJTdGVwX3RlbXBsYXRlKTtcbn1cblxuZnVuY3Rpb24gZGF0YXNldFN0ZXAoKSB7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAnZGF0YXNldFN0ZXAnLFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtzdGFydFN0ZXAsXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFsgLy8gb25lIGFycmF5IGZvciBlYWNoIGRhdGFzZXRcbiAgICAgICAgICAgICAgICAuLi5PYmplY3Qua2V5cyhzdGF0ZS5kYXRhc2V0KVxuICAgICAgICAgICAgICAgICAgICAubWFwKGRhdGFzZXRJZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YXNldFBvc2l0aW9uID0gcGFyc2VkU3RhdGVJZChkYXRhc2V0SWQpLmN1cnJlbnRQb3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YXNldE5hbWUgPSBzdGF0ZS5kYXRhc2V0X25hbWVbZGF0YXNldFBvc2l0aW9uXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUuZGF0YXNldF9rZXlzW2RhdGFzZXRQb3NpdGlvbl1dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChrZXkgPT4gZGF0YXNldE5hbWUgKyAnLicgKyBrZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChrZXkgPT4gbGFiZWxlcigndHlwZVN0ZXAnLCAoKSA9PiB0eXBlU3RlcChrZXkpLCBrZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIGZvb3Rlcjogd2l6YXJkUHJvcHMuZm9vdGVyLFxuICAgIH0sIGRhdGFzZXRTdGVwX3RlbXBsYXRlKTtcbn1cblxuZnVuY3Rpb24gdHlwZVN0ZXAoZGF0YXNldFByb3BlcnR5KSB7XG4gICAgbGV0IGRhdGFzZXROYW1lID0gZGF0YXNldFByb3BlcnR5LnNwbGl0KCcuJylbMF07XG4gICAgbGV0IGRhdGFzZXRJZCA9ICdkYXRhc2V0IycgKyBzdGF0ZS5kYXRhc2V0X25hbWUuZmluZEluZGV4KG4gPT4gbiA9PT0gZGF0YXNldE5hbWUpO1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ3R5cGVTdGVwJyxcbiAgICAgICAgY2hvc2VuX2RhdGFzZXRfbmFtZTogZGF0YXNldE5hbWUsXG4gICAgICAgIGNob3Nlbl9kYXRhc2V0X3Byb3BlcnR5OiBkYXRhc2V0UHJvcGVydHksXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgICAgICAgICBsYWJlbGVyKCdwcm9wZXJ0eVN0ZXAnLCAoKSA9PiBkYXRhc2V0U3RlcCgpLCBkYXRhc2V0TmFtZSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbXG4gICAgICAgICAgICAgICAgLi4uW3JhbmRvbVN0ZXAsIGNvbm5lY3RlZFN0ZXAsIGZpeGVkU3RlcF1cbiAgICAgICAgICAgICAgICAgICAgLm1hcChmdW4gPT4gbGFiZWxlcihmdW4ubmFtZSwgKCkgPT4gZnVuKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSkpXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXRlLFxuICAgICAgICBmb290ZXI6IHdpemFyZFByb3BzLmZvb3RlcixcbiAgICB9LCB0eXBlU3RlcF90ZW1wbGF0ZSk7XG59XG5cbi8vIHJhbmRvbVN0ZXAgcHJvcG9zZXMgYWdhaW4gdGhlIHR5cGVTdGVwIHdoaWxlIGVuYWJsaW5nIHRoZSBzYXZlIGJ1dHRvblxuZnVuY3Rpb24gcmFuZG9tU3RlcChkYXRhc2V0UHJvcGVydHkpIHtcbiAgICBsZXQgZGF0YXNldE5hbWUgPSBkYXRhc2V0UHJvcGVydHkuc3BsaXQoJy4nKVswXTtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdyYW5kb21TdGVwJyxcbiAgICAgICAgY2hvc2VuX2RhdGFzZXRfcHJvcGVydHk6IGRhdGFzZXRQcm9wZXJ0eSxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbXG4gICAgICAgICAgICAgICAgc3RhcnRTdGVwLFxuICAgICAgICAgICAgICAgIGxhYmVsZXIoJ3Byb3BlcnR5U3RlcCcsICgpID0+IGRhdGFzZXRTdGVwKCksIGRhdGFzZXROYW1lKSxcbiAgICAgICAgICAgICAgICBsYWJlbGVyKCd0eXBlU3RlcCcsICgpID0+IHR5cGVTdGVwKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbXG4gICAgICAgICAgICAgICAgLi4uW3JhbmRvbVN0ZXAsIGNvbm5lY3RlZFN0ZXAsIGZpeGVkU3RlcF1cbiAgICAgICAgICAgICAgICAgICAgLm1hcChmdW4gPT4gbGFiZWxlcihmdW4ubmFtZSwgKCkgPT4gZnVuKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSkpXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXRlLFxuICAgICAgICBmb290ZXI6IHdpemFyZFByb3BzLmZvb3RlcixcbiAgICAgICAgcHJvbWlzZUNhbGxiYWNrLFxuICAgIH0sIHR5cGVTdGVwX3RlbXBsYXRlKTtcbn1cblxuLy8gJ2Nvbm5lY3RlZFN0ZXAnLCAnLydcbmZ1bmN0aW9uIGluZGV4U2VsZWN0aW9uU3RlcChzdGVwTmFtZSwgc2VwYXJhdG9yKSB7XG4gICAgbGV0IHJlc3VsdCA9IGZ1bmN0aW9uIChkYXRhc2V0UHJvcGVydHksIHByb3BXaXRoSW5kZXgpIHtcbiAgICAgICAgbGV0IGRhdGFzZXROYW1lID0gZGF0YXNldFByb3BlcnR5LnNwbGl0KCcuJylbMF07XG4gICAgICAgIGxldCBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4ID0gZGF0YXNldFByb3BlcnR5ICsgc2VwYXJhdG9yO1xuICAgICAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgICAgIGxvY2F0aW9uOiBzdGVwTmFtZSxcbiAgICAgICAgICAgIGNob3Nlbl9kYXRhc2V0X3Byb3BlcnR5OiBkYXRhc2V0UHJvcGVydHksXG4gICAgICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgICAgIGJhY2t3YXJkOiBbXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxlcigncHJvcGVydHlTdGVwJywgKCkgPT4gZGF0YXNldFN0ZXAoKSwgZGF0YXNldE5hbWUpLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbGVyKCd0eXBlU3RlcCcsICgpID0+IHR5cGVTdGVwKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGZvcndhcmQ6IFtcbiAgICAgICAgICAgICAgICAgICAgLi4uZGF0YXNldEluZGV4ZXMoZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAocHJvcFN1ZmZpeEluZGV4ID0+IGxhYmVsZXIoJ2V4aXRTdGVwICcgKyBwcm9wU3VmZml4SW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gcmVzdWx0LmFwcGx5KG51bGwsIFtkYXRhc2V0UHJvcGVydHksIHByb3BTdWZmaXhJbmRleF0pKSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICBwcm9taXNlQ2FsbGJhY2ssXG4gICAgICAgICAgICBmb290ZXI6IHdpemFyZFByb3BzLmZvb3RlcixcbiAgICAgICAgICAgIC8vIGlnbm9yaW5nIGNsaWNrIGV2ZW50cyBhcyBhcmdzXG4gICAgICAgICAgICBjaG9zZW5fcHJvcF93aXRoX2luZGV4OiAocHJvcFdpdGhJbmRleCkgPyBwcm9wV2l0aEluZGV4IDogdW5kZWZpbmVkLFxuICAgICAgICB9LCBpbmRleFNlbGVjdGlvblN0ZXBfdGVtcGxhdGUpO1xuICAgIH07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzdWx0LCAnbmFtZScsIHtcbiAgICAgICAgdmFsdWU6IHN0ZXBOYW1lLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY29ubmVjdGVkU3RlcChkYXRhc2V0UHJvcGVydHksIHByb3BXaXRoSW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXhTZWxlY3Rpb25TdGVwKCdjb25uZWN0ZWRTdGVwJywgJy8nKShkYXRhc2V0UHJvcGVydHksIHByb3BXaXRoSW5kZXgpO1xufVxuXG5mdW5jdGlvbiBmaXhlZFN0ZXAoZGF0YXNldFByb3BlcnR5LCBwcm9wV2l0aEluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4U2VsZWN0aW9uU3RlcCgnZml4ZWRTdGVwJywgJyMnKShkYXRhc2V0UHJvcGVydHksIHByb3BXaXRoSW5kZXgpO1xufVxuXG5mdW5jdGlvbiBkYXRhc2V0SW5kZXhlcyhkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4KSB7IC8vIHJlYXNvbnNmb3Jjb2xvZ25lLmltYWdlIC0+IHJlYXNvbnNmb3Jjb2xvZ25lLmltYWdlLzJcbiAgICBsZXQgZGF0YXNldE5hbWUgPSBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4LnNwbGl0KCcuJylbMF07XG4gICAgbGV0IGRhdGFzZXRQb3MgPSBzdGF0ZS5kYXRhc2V0X25hbWUuZmluZEluZGV4KGl0ZW0gPT4gaXRlbSA9PT0gZGF0YXNldE5hbWUpO1xuICAgIGxldCBudW1JbnN0YW5jZXMgPSBzdGF0ZS5kYXRhc2V0WydkYXRhc2V0IycgKyBkYXRhc2V0UG9zXS5sZW5ndGg7XG4gICAgcmV0dXJuIFsuLi5BcnJheShudW1JbnN0YW5jZXMpLmtleXMoKV0ubWFwKGtleSA9PiBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4ICsga2V5KTtcbn1cblxuZnVuY3Rpb24gcGFyc2VkU3RhdGVJZChpZCkge1xuICAgIGxldCBwaWVjZXMgPSBpZC5zcGxpdCgnIycpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnRQb3M6IHBpZWNlc1sxXSxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBsYWJlbGVyKHN0ZXBOYW1lLCBmdW4sIGxhYmVsVmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuLCAnbmFtZScsIHtcbiAgICAgICAgdmFsdWU6IHN0ZXBOYW1lICsgJyAnXG4gICAgICAgICsgKCh0eXBlb2YgbGFiZWxWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcpID8gbGFiZWxWYWx1ZSA6ICcnKVxuICAgIH0pO1xuICAgIHJldHVybiBmdW47XG59XG4iXX0=