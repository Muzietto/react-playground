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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9zdGF0ZV9tYWNoaW5lL3N0ZXBzLmpzIl0sIm5hbWVzIjpbInN0YXJ0U3RlcCIsIndpemFyZFByb3BzIiwiZm9vdGVyIiwiY2FuY2VsQnV0dG9uIiwib25DbGljayIsImFsZXJ0IiwiY2xhc3NOYW1lIiwicmVzdGFydEJ1dHRvbiIsInNhdmVCdXR0b24iLCJwcm9taXNlQ2FsbGJhY2siLCJyZXNvbHZlQ2FsbGJhY2siLCJSRVBMQUNFX0NBTExCQUNLIiwibG9jYXRpb24iLCJoYW5kbGVycyIsImJhY2t3YXJkIiwiZm9yd2FyZCIsImN1c3RvbXZhclN0ZXAiLCJkYXRhc2V0U3RlcCIsInN0YXRlIiwiY2hvc2VuVmFyIiwiY3VzdG9tdmFyIiwibWFwIiwiY3VzdG9tVmFyIiwibGFiZWxlciIsImNhbGwiLCJjaG9zZW5fdmFyIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiT2JqZWN0Iiwia2V5cyIsImRhdGFzZXQiLCJkYXRhc2V0SWQiLCJkYXRhc2V0UG9zaXRpb24iLCJwYXJzZWRTdGF0ZUlkIiwiY3VycmVudFBvcyIsImRhdGFzZXROYW1lIiwiZGF0YXNldF9uYW1lIiwiZGF0YXNldF9rZXlzIiwia2V5IiwidHlwZVN0ZXAiLCJkYXRhc2V0UHJvcGVydHkiLCJzcGxpdCIsImZpbmRJbmRleCIsIm4iLCJjaG9zZW5fZGF0YXNldF9uYW1lIiwiY2hvc2VuX2RhdGFzZXRfcHJvcGVydHkiLCJyYW5kb21TdGVwIiwiY29ubmVjdGVkU3RlcCIsImZpeGVkU3RlcCIsImZ1biIsIm5hbWUiLCJpbmRleFNlbGVjdGlvblN0ZXAiLCJzdGVwTmFtZSIsInNlcGFyYXRvciIsInJlc3VsdCIsInByb3BXaXRoSW5kZXgiLCJkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4IiwiZGF0YXNldEluZGV4ZXMiLCJwcm9wU3VmZml4SW5kZXgiLCJhcHBseSIsImNob3Nlbl9wcm9wX3dpdGhfaW5kZXgiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiZGF0YXNldFBvcyIs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ImZpbGUiOiJzdGVwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtpbml0aWFsU3RhdGUgYXMgc3RhdGV9IGZyb20gJy4vaW5pdGlhbFN0YXRlJztcbmltcG9ydCBjaG9pY2UgZnJvbSAnLi92aWV3JztcbmltcG9ydCBzdGFydFN0ZXBfdGVtcGxhdGUgZnJvbSAnLi4vdGVtcGxhdGUvc3RhcnRTdGVwX3RlbXBsYXRlJztcbmltcG9ydCBjdXN0b212YXJTdGVwX3RlbXBsYXRlIGZyb20gJy4uL3RlbXBsYXRlL2N1c3RvbXZhclN0ZXBfdGVtcGxhdGUnO1xuaW1wb3J0IGRhdGFzZXRTdGVwX3RlbXBsYXRlIGZyb20gJy4uL3RlbXBsYXRlL2RhdGFzZXRTdGVwX3RlbXBsYXRlJztcbmltcG9ydCB0eXBlU3RlcF90ZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZS90eXBlU3RlcF90ZW1wbGF0ZSc7XG5pbXBvcnQgaW5kZXhTZWxlY3Rpb25TdGVwX3RlbXBsYXRlIGZyb20gJy4uL3RlbXBsYXRlL2luZGV4U2VsZWN0aW9uU3RlcF90ZW1wbGF0ZSc7XG5cbi8vIG1pbmltYWwgY29uZmlnIHByb3BzLCBtb3N0bHkgb3ZlcnJpZGRlbiBkb3duIHRoZSBwcm9jZXNzXG5sZXQgd2l6YXJkUHJvcHMgPSB7XG4gICAgZm9vdGVyOiB7XG4gICAgICAgIGNhbmNlbEJ1dHRvbjoge1xuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdjYW5jZWwgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdsZWZ0X2J1dHRvbicsXG4gICAgICAgIH0sXG4gICAgICAgIHJlc3RhcnRCdXR0b246IHtcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydCgncmVzdGFydCBidXR0b24gY2xpY2tlZCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2xlZnRfYnV0dG9uJyxcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZUJ1dHRvbjoge1xuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdTQVZFIGJ1dHRvbiBjbGlja2VkJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAncmlnaHRfYnV0dG9uJyxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxubGV0IHByb21pc2VDYWxsYmFjaztcblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0U3RlcChyZXNvbHZlQ2FsbGJhY2ssIFJFUExBQ0VfQ0FMTEJBQ0spIHtcblxuICAgIGlmIChSRVBMQUNFX0NBTExCQUNLKSB7XG4gICAgICAgIHByb21pc2VDYWxsYmFjayA9IHJlc29sdmVDYWxsYmFjaztcbiAgICB9XG5cbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdzdGFydFN0ZXAnLFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtdLFxuICAgICAgICAgICAgZm9yd2FyZDogW2N1c3RvbXZhclN0ZXAsIGRhdGFzZXRTdGVwXSxcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIGZvb3Rlcjogd2l6YXJkUHJvcHMuZm9vdGVyLFxuICAgIH0sIHN0YXJ0U3RlcF90ZW1wbGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGN1c3RvbXZhclN0ZXAoY2hvc2VuVmFyKSB7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAnY3VzdG9tdmFyU3RlcCcsXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW3N0YXJ0U3RlcCxdLFxuICAgICAgICAgICAgZm9yd2FyZDogWy4uLnN0YXRlLmN1c3RvbXZhclxuICAgICAgICAgICAgICAgIC5tYXAoY3VzdG9tVmFyID0+IGxhYmVsZXIoJ2V4aXRTdGVwJywgKCkgPT4gY3VzdG9tdmFyU3RlcC5jYWxsKG51bGwsIGN1c3RvbVZhciksIGN1c3RvbVZhcikpXVxuICAgICAgICB9LFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAgcHJvbWlzZUNhbGxiYWNrLFxuICAgICAgICBmb290ZXI6IHdpemFyZFByb3BzLmZvb3RlcixcbiAgICAgICAgLy8gaWdub3JpbmcgY2xpY2sgZXZlbnRzIGFzIGFyZ3NcbiAgICAgICAgY2hvc2VuX3ZhcjogKGNob3NlblZhci5sZW5ndGgpID8gY2hvc2VuVmFyIDogdW5kZWZpbmVkLFxuICAgIH0sIGN1c3RvbXZhclN0ZXBfdGVtcGxhdGUpO1xufVxuXG5mdW5jdGlvbiBkYXRhc2V0U3RlcCgpIHtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdkYXRhc2V0U3RlcCcsXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW3N0YXJ0U3RlcCxdLFxuICAgICAgICAgICAgZm9yd2FyZDogWyAvLyBvbmUgYXJyYXkgZm9yIGVhY2ggZGF0YXNldFxuICAgICAgICAgICAgICAgIC4uLk9iamVjdC5rZXlzKHN0YXRlLmRhdGFzZXQpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoZGF0YXNldElkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhc2V0UG9zaXRpb24gPSBwYXJzZWRTdGF0ZUlkKGRhdGFzZXRJZCkuY3VycmVudFBvcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhc2V0TmFtZSA9IHN0YXRlLmRhdGFzZXRfbmFtZVtkYXRhc2V0UG9zaXRpb25dO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZS5kYXRhc2V0X2tleXNbZGF0YXNldFBvc2l0aW9uXV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGtleSA9PiBkYXRhc2V0TmFtZSArICcuJyArIGtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGtleSA9PiBsYWJlbGVyKCd0eXBlU3RlcCcsICgpID0+IHR5cGVTdGVwKGtleSksIGtleSkpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAgZm9vdGVyOiB3aXphcmRQcm9wcy5mb290ZXIsXG4gICAgfSwgZGF0YXNldFN0ZXBfdGVtcGxhdGUpO1xufVxuXG5mdW5jdGlvbiB0eXBlU3RlcChkYXRhc2V0UHJvcGVydHkpIHtcbiAgICBsZXQgZGF0YXNldE5hbWUgPSBkYXRhc2V0UHJvcGVydHkuc3BsaXQoJy4nKVswXTtcbiAgICBsZXQgZGF0YXNldElkID0gJ2RhdGFzZXQjJyArIHN0YXRlLmRhdGFzZXRfbmFtZS5maW5kSW5kZXgobiA9PiBuID09PSBkYXRhc2V0TmFtZSk7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAndHlwZVN0ZXAnLFxuICAgICAgICBjaG9zZW5fZGF0YXNldF9uYW1lOiBkYXRhc2V0TmFtZSxcbiAgICAgICAgY2hvc2VuX2RhdGFzZXRfcHJvcGVydHk6IGRhdGFzZXRQcm9wZXJ0eSxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbXG4gICAgICAgICAgICAgICAgc3RhcnRTdGVwLFxuICAgICAgICAgICAgICAgIGxhYmVsZXIoJ3Byb3BlcnR5U3RlcCcsICgpID0+IGRhdGFzZXRTdGVwKCksIGRhdGFzZXROYW1lKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFtcbiAgICAgICAgICAgICAgICAuLi5bcmFuZG9tU3RlcCwgY29ubmVjdGVkU3RlcCwgZml4ZWRTdGVwXVxuICAgICAgICAgICAgICAgICAgICAubWFwKGZ1biA9PiBsYWJlbGVyKGZ1bi5uYW1lLCAoKSA9PiBmdW4oZGF0YXNldFByb3BlcnR5KSwgZGF0YXNldFByb3BlcnR5KSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIGZvb3Rlcjogd2l6YXJkUHJvcHMuZm9vdGVyLFxuICAgIH0sIHR5cGVTdGVwX3RlbXBsYXRlKTtcbn1cblxuLy8gcmFuZG9tU3RlcCBwcm9wb3NlcyBhZ2FpbiB0aGUgdHlwZVN0ZXAgd2hpbGUgZW5hYmxpbmcgdGhlIHNhdmUgYnV0dG9uXG5mdW5jdGlvbiByYW5kb21TdGVwKGRhdGFzZXRQcm9wZXJ0eSkge1xuICAgIGxldCBkYXRhc2V0TmFtZSA9IGRhdGFzZXRQcm9wZXJ0eS5zcGxpdCgnLicpWzBdO1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ3JhbmRvbVN0ZXAnLFxuICAgICAgICBjaG9zZW5fZGF0YXNldF9wcm9wZXJ0eTogZGF0YXNldFByb3BlcnR5LFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtcbiAgICAgICAgICAgICAgICBzdGFydFN0ZXAsXG4gICAgICAgICAgICAgICAgbGFiZWxlcigncHJvcGVydHlTdGVwJywgKCkgPT4gZGF0YXNldFN0ZXAoKSwgZGF0YXNldE5hbWUpLFxuICAgICAgICAgICAgICAgIGxhYmVsZXIoJ3R5cGVTdGVwJywgKCkgPT4gdHlwZVN0ZXAoZGF0YXNldFByb3BlcnR5KSwgZGF0YXNldFByb3BlcnR5KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFtcbiAgICAgICAgICAgICAgICAuLi5bcmFuZG9tU3RlcCwgY29ubmVjdGVkU3RlcCwgZml4ZWRTdGVwXVxuICAgICAgICAgICAgICAgICAgICAubWFwKGZ1biA9PiBsYWJlbGVyKGZ1bi5uYW1lLCAoKSA9PiBmdW4oZGF0YXNldFByb3BlcnR5KSwgZGF0YXNldFByb3BlcnR5KSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIGZvb3Rlcjogd2l6YXJkUHJvcHMuZm9vdGVyLFxuICAgICAgICBwcm9taXNlQ2FsbGJhY2ssXG4gICAgfSwgdHlwZVN0ZXBfdGVtcGxhdGUpO1xufVxuXG4vLyAnY29ubmVjdGVkU3RlcCcsICcvJ1xuZnVuY3Rpb24gaW5kZXhTZWxlY3Rpb25TdGVwKHN0ZXBOYW1lLCBzZXBhcmF0b3IpIHtcbiAgICBsZXQgcmVzdWx0ID0gZnVuY3Rpb24gKGRhdGFzZXRQcm9wZXJ0eSwgcHJvcFdpdGhJbmRleCkge1xuICAgICAgICBsZXQgZGF0YXNldE5hbWUgPSBkYXRhc2V0UHJvcGVydHkuc3BsaXQoJy4nKVswXTtcbiAgICAgICAgbGV0IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggPSBkYXRhc2V0UHJvcGVydHkgKyBzZXBhcmF0b3I7XG4gICAgICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICAgICAgbG9jYXRpb246IHN0ZXBOYW1lLFxuICAgICAgICAgICAgY2hvc2VuX2RhdGFzZXRfcHJvcGVydHk6IGRhdGFzZXRQcm9wZXJ0eSxcbiAgICAgICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICAgICAgYmFja3dhcmQ6IFtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRTdGVwLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbGVyKCdwcm9wZXJ0eVN0ZXAnLCAoKSA9PiBkYXRhc2V0U3RlcCgpLCBkYXRhc2V0TmFtZSksXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsZXIoJ3R5cGVTdGVwJywgKCkgPT4gdHlwZVN0ZXAoZGF0YXNldFByb3BlcnR5KSwgZGF0YXNldFByb3BlcnR5KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZm9yd2FyZDogW1xuICAgICAgICAgICAgICAgICAgICAuLi5kYXRhc2V0SW5kZXhlcyhkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4KVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChwcm9wU3VmZml4SW5kZXggPT4gbGFiZWxlcignZXhpdFN0ZXAgJyArIHByb3BTdWZmaXhJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiByZXN1bHQuYXBwbHkobnVsbCwgW2RhdGFzZXRQcm9wZXJ0eSwgcHJvcFN1ZmZpeEluZGV4XSkpKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICAgIHByb21pc2VDYWxsYmFjayxcbiAgICAgICAgICAgIGZvb3Rlcjogd2l6YXJkUHJvcHMuZm9vdGVyLFxuICAgICAgICAgICAgLy8gaWdub3JpbmcgY2xpY2sgZXZlbnRzIGFzIGFyZ3NcbiAgICAgICAgICAgIGNob3Nlbl9wcm9wX3dpdGhfaW5kZXg6IChwcm9wV2l0aEluZGV4KSA/IHByb3BXaXRoSW5kZXggOiB1bmRlZmluZWQsXG4gICAgICAgIH0sIGluZGV4U2VsZWN0aW9uU3RlcF90ZW1wbGF0ZSk7XG4gICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXN1bHQsICduYW1lJywge1xuICAgICAgICB2YWx1ZTogc3RlcE5hbWUsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjb25uZWN0ZWRTdGVwKGRhdGFzZXRQcm9wZXJ0eSwgcHJvcFdpdGhJbmRleCkge1xuICAgIHJldHVybiBpbmRleFNlbGVjdGlvblN0ZXAoJ2Nvbm5lY3RlZFN0ZXAnLCAnLycpKGRhdGFzZXRQcm9wZXJ0eSwgcHJvcFdpdGhJbmRleCk7XG59XG5cbmZ1bmN0aW9uIGZpeGVkU3RlcChkYXRhc2V0UHJvcGVydHksIHByb3BXaXRoSW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXhTZWxlY3Rpb25TdGVwKCdmaXhlZFN0ZXAnLCAnIycpKGRhdGFzZXRQcm9wZXJ0eSwgcHJvcFdpdGhJbmRleCk7XG59XG5cbmZ1bmN0aW9uIGRhdGFzZXRJbmRleGVzKGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXgpIHsgLy8gcmVhc29uc2ZvcmNvbG9nbmUuaW1hZ2UgLT4gcmVhc29uc2ZvcmNvbG9nbmUuaW1hZ2UvMlxuICAgIGxldCBkYXRhc2V0TmFtZSA9IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXguc3BsaXQoJy4nKVswXTtcbiAgICBsZXQgZGF0YXNldFBvcyA9IHN0YXRlLmRhdGFzZXRfbmFtZS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSBkYXRhc2V0TmFtZSk7XG4gICAgbGV0IG51bUluc3RhbmNlcyA9IHN0YXRlLmRhdGFzZXRbJ2RhdGFzZXQjJyArIGRhdGFzZXRQb3NdLmxlbmd0aDtcbiAgICByZXR1cm4gWy4uLkFycmF5KG51bUluc3RhbmNlcykua2V5cygpXS5tYXAoa2V5ID0+IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggKyBrZXkpO1xufVxuXG5mdW5jdGlvbiBwYXJzZWRTdGF0ZUlkKGlkKSB7XG4gICAgbGV0IHBpZWNlcyA9IGlkLnNwbGl0KCcjJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudFBvczogcGllY2VzWzFdLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGxhYmVsZXIoc3RlcE5hbWUsIGZ1biwgbGFiZWxWYWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW4sICduYW1lJywge1xuICAgICAgICB2YWx1ZTogc3RlcE5hbWUgKyAnICdcbiAgICAgICAgKyAoKHR5cGVvZiBsYWJlbFZhbHVlICE9PSAndW5kZWZpbmVkJykgPyBsYWJlbFZhbHVlIDogJycpXG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bjtcbn1cbiJdfQ==