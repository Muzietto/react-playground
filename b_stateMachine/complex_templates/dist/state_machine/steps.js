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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9zdGF0ZV9tYWNoaW5lL3N0ZXBzLmpzIl0sIm5hbWVzIjpbInN0YXJ0U3RlcCIsIndpemFyZFByb3BzIiwiZm9vdGVyIiwiY2FuY2VsQnV0dG9uIiwib25DbGljayIsImFsZXJ0IiwiY2xhc3NOYW1lIiwicmVzdGFydEJ1dHRvbiIsInNhdmVCdXR0b24iLCJwcm9taXNlQ2FsbGJhY2siLCJyZXNvbHZlQ2FsbGJhY2siLCJsb2NhdGlvbiIsImhhbmRsZXJzIiwiYmFja3dhcmQiLCJmb3J3YXJkIiwiY3VzdG9tdmFyU3RlcCIsImRhdGFzZXRTdGVwIiwic3RhdGUiLCJjaG9zZW5WYXIiLCJjdXN0b212YXIiLCJtYXAiLCJjdXN0b21WYXIiLCJsYWJlbGVyIiwiY2FsbCIsImNob3Nlbl92YXIiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJPYmplY3QiLCJrZXlzIiwiZGF0YXNldCIsImRhdGFzZXRJZCIsImRhdGFzZXRQb3NpdGlvbiIsInBhcnNlZFN0YXRlSWQiLCJjdXJyZW50UG9zIiwiZGF0YXNldE5hbWUiLCJkYXRhc2V0X25hbWUiLCJkYXRhc2V0X2tleXMiLCJrZXkiLCJ0eXBlU3RlcCIsImRhdGFzZXRQcm9wZXJ0eSIsInNwbGl0IiwiZmluZEluZGV4IiwibiIsImNob3Nlbl9kYXRhc2V0X25hbWUiLCJjaG9zZW5fZGF0YXNldF9wcm9wZXJ0eSIsInJhbmRvbVN0ZXAiLCJjb25uZWN0ZWRTdGVwIiwiZml4ZWRTdGVwIiwiZnVuIiwibmFtZSIsImluZGV4U2VsZWN0aW9uU3RlcCIsInN0ZXBOYW1lIiwic2VwYXJhdG9yIiwicmVzdWx0IiwicHJvcFdpdGhJbmRleCIsImRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXgiLCJkYXRhc2V0SW5kZXhlcyIsInByb3BTdWZmaXhJbmRleCIsImFwcGx5IiwiY2hvc2VuX3Byb3Bfd2l0aF9pbmRleCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJkYXRhc2V0UG9zIiwiaXRlbSIsIm51bUluc3RhbmNl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RUQsYUFBU1AsU0FBVCxDQUFtQlIsZUFBbkIsRUFBb0NlLGFBQXBDLEVBQW1EO0FBQy9DLGVBQU9KLG1CQUFtQixXQUFuQixFQUFnQyxHQUFoQyxFQUFxQ1gsZUFBckMsRUFBc0RlLGFBQXRELENBQVA7QUFDSDs7QUFFRCxhQUFTRSxjQUFULENBQXdCRCx5QkFBeEIsRUFBbUQ7QUFBRTtBQUNqRCxZQUFJckIsY0FBY3FCLDBCQUEwQmYsS0FBMUIsQ0FBZ0MsR0FBaEMsRUFBcUMsQ0FBckMsQ0FBbEI7QUFDQSxZQUFJc0IsYUFBYSwyQkFBTTNCLFlBQU4sQ0FBbUJNLFNBQW5CLENBQTZCc0IsUUFBUUEsU0FBUzdCLFdBQTlDLENBQWpCO0FBQ0EsWUFBSThCLGVBQWUsMkJBQU1uQyxPQUFOLENBQWMsYUFBYWlDLFVBQTNCLEVBQXVDckMsTUFBMUQ7QUFDQSxlQUFPLENBQUMsR0FBR3dDLE1BQU1ELFlBQU4sRUFBb0JwQyxJQUFwQixFQUFKLEVBQWdDUixHQUFoQyxDQUFvQ2lCLE9BQU9rQiw0QkFBNEJsQixHQUF2RSxDQUFQO0FBQ0g7O0FBRUQsYUFBU0wsYUFBVCxDQUF1QmtDLEVBQXZCLEVBQTJCO0FBQ3ZCLFlBQUlDLFNBQVNELEdBQUcxQixLQUFILENBQVMsR0FBVCxDQUFiO0FBQ0EsZUFBTztBQUNIUCx3QkFBWWtDLE9BQU8sQ0FBUDtBQURULFNBQVA7QUFHSDs7QUFFRCxhQUFTN0MsT0FBVCxDQUFpQjZCLFFBQWpCLEVBQTJCSCxHQUEzQixFQUFnQ29CLFVBQWhDLEVBQTRDO0FBQ3hDekMsZUFBT2lDLGNBQVAsQ0FBc0JaLEdBQXRCLEVBQTJCLE1BQTNCLEVBQW1DO0FBQy9CYSxtQkFBT1YsV0FBVyxHQUFYLElBQ0gsT0FBT2lCLFVBQVAsS0FBc0IsV0FBdkIsR0FBc0NBLFVBQXRDLEdBQW1ELEVBRC9DO0FBRHdCLFNBQW5DO0FBSUEsZUFBT3BCLEdBQVA7QUFDSCIsImZpbGUiOiJzdGVwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtpbml0aWFsU3RhdGUgYXMgc3RhdGV9IGZyb20gJy4vaW5pdGlhbFN0YXRlJztcbmltcG9ydCBjaG9pY2UgZnJvbSAnLi92aWV3JztcbmltcG9ydCBzdGFydFN0ZXBfdGVtcGxhdGUgZnJvbSAnLi4vdGVtcGxhdGUvc3RhcnRTdGVwX3RlbXBsYXRlJztcbmltcG9ydCBjdXN0b212YXJTdGVwX3RlbXBsYXRlIGZyb20gJy4uL3RlbXBsYXRlL2N1c3RvbXZhclN0ZXBfdGVtcGxhdGUnO1xuaW1wb3J0IGRhdGFzZXRTdGVwX3RlbXBsYXRlIGZyb20gJy4uL3RlbXBsYXRlL2RhdGFzZXRTdGVwX3RlbXBsYXRlJztcbmltcG9ydCB0eXBlU3RlcF90ZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZS90eXBlU3RlcF90ZW1wbGF0ZSc7XG5pbXBvcnQgaW5kZXhTZWxlY3Rpb25TdGVwX3RlbXBsYXRlIGZyb20gJy4uL3RlbXBsYXRlL2luZGV4U2VsZWN0aW9uU3RlcF90ZW1wbGF0ZSc7XG5cbmxldCB3aXphcmRQcm9wcyA9IHtcbiAgICBmb290ZXI6IHtcbiAgICAgICAgY2FuY2VsQnV0dG9uOiB7XG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ2NhbmNlbCBidXR0b24gY2xpY2tlZCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2xlZnRfYnV0dG9uJyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVzdGFydEJ1dHRvbjoge1xuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdyZXN0YXJ0IGJ1dHRvbiBjbGlja2VkJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbGVmdF9idXR0b24nLFxuICAgICAgICB9LFxuICAgICAgICBzYXZlQnV0dG9uOiB7XG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1NBVkUgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdyaWdodF9idXR0b24nLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG5sZXQgcHJvbWlzZUNhbGxiYWNrO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRTdGVwKHJlc29sdmVDYWxsYmFjaykge1xuICAgIHByb21pc2VDYWxsYmFjayA9IHJlc29sdmVDYWxsYmFjaztcblxuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ3N0YXJ0U3RlcCcsXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW10sXG4gICAgICAgICAgICBmb3J3YXJkOiBbY3VzdG9tdmFyU3RlcCwgZGF0YXNldFN0ZXBdLFxuICAgICAgICB9LFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAgZm9vdGVyOiB3aXphcmRQcm9wcy5mb290ZXIsXG4gICAgfSwgc3RhcnRTdGVwX3RlbXBsYXRlKTtcbn1cblxuZnVuY3Rpb24gY3VzdG9tdmFyU3RlcChjaG9zZW5WYXIpIHtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdjdXN0b212YXJTdGVwJyxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbc3RhcnRTdGVwLF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbLi4uc3RhdGUuY3VzdG9tdmFyXG4gICAgICAgICAgICAgICAgLm1hcChjdXN0b21WYXIgPT4gbGFiZWxlcignZXhpdFN0ZXAnLCAoKSA9PiBjdXN0b212YXJTdGVwLmNhbGwobnVsbCwgY3VzdG9tVmFyKSwgY3VzdG9tVmFyKSldXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXRlLFxuICAgICAgICBwcm9taXNlQ2FsbGJhY2ssXG4gICAgICAgIGZvb3Rlcjogd2l6YXJkUHJvcHMuZm9vdGVyLFxuICAgICAgICAvLyBpZ25vcmluZyBjbGljayBldmVudHMgYXMgYXJnc1xuICAgICAgICBjaG9zZW5fdmFyOiAoY2hvc2VuVmFyLmxlbmd0aCkgPyBjaG9zZW5WYXIgOiB1bmRlZmluZWQsXG4gICAgfSwgY3VzdG9tdmFyU3RlcF90ZW1wbGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGRhdGFzZXRTdGVwKCkge1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ2RhdGFzZXRTdGVwJyxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbc3RhcnRTdGVwLF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbIC8vIG9uZSBhcnJheSBmb3IgZWFjaCBkYXRhc2V0XG4gICAgICAgICAgICAgICAgLi4uT2JqZWN0LmtleXMoc3RhdGUuZGF0YXNldClcbiAgICAgICAgICAgICAgICAgICAgLm1hcChkYXRhc2V0SWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFzZXRQb3NpdGlvbiA9IHBhcnNlZFN0YXRlSWQoZGF0YXNldElkKS5jdXJyZW50UG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFzZXROYW1lID0gc3RhdGUuZGF0YXNldF9uYW1lW2RhdGFzZXRQb3NpdGlvbl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLmRhdGFzZXRfa2V5c1tkYXRhc2V0UG9zaXRpb25dXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoa2V5ID0+IGRhdGFzZXROYW1lICsgJy4nICsga2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoa2V5ID0+IGxhYmVsZXIoJ3R5cGVTdGVwJywgKCkgPT4gdHlwZVN0ZXAoa2V5KSwga2V5KSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXRlLFxuICAgICAgICBmb290ZXI6IHdpemFyZFByb3BzLmZvb3RlcixcbiAgICB9LCBkYXRhc2V0U3RlcF90ZW1wbGF0ZSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVTdGVwKGRhdGFzZXRQcm9wZXJ0eSkge1xuICAgIGxldCBkYXRhc2V0TmFtZSA9IGRhdGFzZXRQcm9wZXJ0eS5zcGxpdCgnLicpWzBdO1xuICAgIGxldCBkYXRhc2V0SWQgPSAnZGF0YXNldCMnICsgc3RhdGUuZGF0YXNldF9uYW1lLmZpbmRJbmRleChuID0+IG4gPT09IGRhdGFzZXROYW1lKTtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICd0eXBlU3RlcCcsXG4gICAgICAgIGNob3Nlbl9kYXRhc2V0X25hbWU6IGRhdGFzZXROYW1lLFxuICAgICAgICBjaG9zZW5fZGF0YXNldF9wcm9wZXJ0eTogZGF0YXNldFByb3BlcnR5LFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtcbiAgICAgICAgICAgICAgICBzdGFydFN0ZXAsXG4gICAgICAgICAgICAgICAgbGFiZWxlcigncHJvcGVydHlTdGVwJywgKCkgPT4gZGF0YXNldFN0ZXAoKSwgZGF0YXNldE5hbWUpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZm9yd2FyZDogW1xuICAgICAgICAgICAgICAgIC4uLltyYW5kb21TdGVwLCBjb25uZWN0ZWRTdGVwLCBmaXhlZFN0ZXBdXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuID0+IGxhYmVsZXIoZnVuLm5hbWUsICgpID0+IGZ1bihkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpKVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAgZm9vdGVyOiB3aXphcmRQcm9wcy5mb290ZXIsXG4gICAgfSwgdHlwZVN0ZXBfdGVtcGxhdGUpO1xufVxuXG4vLyByYW5kb21TdGVwIHByb3Bvc2VzIGFnYWluIHRoZSB0eXBlU3RlcCB3aGlsZSBlbmFibGluZyB0aGUgc2F2ZSBidXR0b25cbmZ1bmN0aW9uIHJhbmRvbVN0ZXAoZGF0YXNldFByb3BlcnR5KSB7XG4gICAgbGV0IGRhdGFzZXROYW1lID0gZGF0YXNldFByb3BlcnR5LnNwbGl0KCcuJylbMF07XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAncmFuZG9tU3RlcCcsXG4gICAgICAgIGNob3Nlbl9kYXRhc2V0X3Byb3BlcnR5OiBkYXRhc2V0UHJvcGVydHksXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgICAgICAgICBsYWJlbGVyKCdwcm9wZXJ0eVN0ZXAnLCAoKSA9PiBkYXRhc2V0U3RlcCgpLCBkYXRhc2V0TmFtZSksXG4gICAgICAgICAgICAgICAgbGFiZWxlcigndHlwZVN0ZXAnLCAoKSA9PiB0eXBlU3RlcChkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZm9yd2FyZDogW1xuICAgICAgICAgICAgICAgIC4uLltyYW5kb21TdGVwLCBjb25uZWN0ZWRTdGVwLCBmaXhlZFN0ZXBdXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuID0+IGxhYmVsZXIoZnVuLm5hbWUsICgpID0+IGZ1bihkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpKVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAgZm9vdGVyOiB3aXphcmRQcm9wcy5mb290ZXIsXG4gICAgICAgIHByb21pc2VDYWxsYmFjayxcbiAgICB9LCB0eXBlU3RlcF90ZW1wbGF0ZSk7XG59XG5cbi8vICdjb25uZWN0ZWRTdGVwJywgJy8nXG5mdW5jdGlvbiBpbmRleFNlbGVjdGlvblN0ZXAoc3RlcE5hbWUsIHNlcGFyYXRvcikge1xuICAgIGxldCByZXN1bHQgPSBmdW5jdGlvbiAoZGF0YXNldFByb3BlcnR5LCBwcm9wV2l0aEluZGV4KSB7XG4gICAgICAgIGxldCBkYXRhc2V0TmFtZSA9IGRhdGFzZXRQcm9wZXJ0eS5zcGxpdCgnLicpWzBdO1xuICAgICAgICBsZXQgZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCA9IGRhdGFzZXRQcm9wZXJ0eSArIHNlcGFyYXRvcjtcbiAgICAgICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgICAgICBsb2NhdGlvbjogc3RlcE5hbWUsXG4gICAgICAgICAgICBjaG9zZW5fZGF0YXNldF9wcm9wZXJ0eTogZGF0YXNldFByb3BlcnR5LFxuICAgICAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgICAgICAgICBzdGFydFN0ZXAsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsZXIoJ3Byb3BlcnR5U3RlcCcsICgpID0+IGRhdGFzZXRTdGVwKCksIGRhdGFzZXROYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxlcigndHlwZVN0ZXAnLCAoKSA9PiB0eXBlU3RlcChkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBmb3J3YXJkOiBbXG4gICAgICAgICAgICAgICAgICAgIC4uLmRhdGFzZXRJbmRleGVzKGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKHByb3BTdWZmaXhJbmRleCA9PiBsYWJlbGVyKCdleGl0U3RlcCAnICsgcHJvcFN1ZmZpeEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHJlc3VsdC5hcHBseShudWxsLCBbZGF0YXNldFByb3BlcnR5LCBwcm9wU3VmZml4SW5kZXhdKSkpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgcHJvbWlzZUNhbGxiYWNrLFxuICAgICAgICAgICAgZm9vdGVyOiB3aXphcmRQcm9wcy5mb290ZXIsXG4gICAgICAgICAgICAvLyBpZ25vcmluZyBjbGljayBldmVudHMgYXMgYXJnc1xuICAgICAgICAgICAgY2hvc2VuX3Byb3Bfd2l0aF9pbmRleDogKHByb3BXaXRoSW5kZXgpID8gcHJvcFdpdGhJbmRleCA6IHVuZGVmaW5lZCxcbiAgICAgICAgfSwgaW5kZXhTZWxlY3Rpb25TdGVwX3RlbXBsYXRlKTtcbiAgICB9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc3VsdCwgJ25hbWUnLCB7XG4gICAgICAgIHZhbHVlOiBzdGVwTmFtZSxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNvbm5lY3RlZFN0ZXAoZGF0YXNldFByb3BlcnR5LCBwcm9wV2l0aEluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4U2VsZWN0aW9uU3RlcCgnY29ubmVjdGVkU3RlcCcsICcvJykoZGF0YXNldFByb3BlcnR5LCBwcm9wV2l0aEluZGV4KTtcbn1cblxuZnVuY3Rpb24gZml4ZWRTdGVwKGRhdGFzZXRQcm9wZXJ0eSwgcHJvcFdpdGhJbmRleCkge1xuICAgIHJldHVybiBpbmRleFNlbGVjdGlvblN0ZXAoJ2ZpeGVkU3RlcCcsICcjJykoZGF0YXNldFByb3BlcnR5LCBwcm9wV2l0aEluZGV4KTtcbn1cblxuZnVuY3Rpb24gZGF0YXNldEluZGV4ZXMoZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCkgeyAvLyByZWFzb25zZm9yY29sb2duZS5pbWFnZSAtPiByZWFzb25zZm9yY29sb2duZS5pbWFnZS8yXG4gICAgbGV0IGRhdGFzZXROYW1lID0gZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeC5zcGxpdCgnLicpWzBdO1xuICAgIGxldCBkYXRhc2V0UG9zID0gc3RhdGUuZGF0YXNldF9uYW1lLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IGRhdGFzZXROYW1lKTtcbiAgICBsZXQgbnVtSW5zdGFuY2VzID0gc3RhdGUuZGF0YXNldFsnZGF0YXNldCMnICsgZGF0YXNldFBvc10ubGVuZ3RoO1xuICAgIHJldHVybiBbLi4uQXJyYXkobnVtSW5zdGFuY2VzKS5rZXlzKCldLm1hcChrZXkgPT4gZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCArIGtleSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlZFN0YXRlSWQoaWQpIHtcbiAgICBsZXQgcGllY2VzID0gaWQuc3BsaXQoJyMnKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50UG9zOiBwaWVjZXNbMV0sXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbGFiZWxlcihzdGVwTmFtZSwgZnVuLCBsYWJlbFZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1biwgJ25hbWUnLCB7XG4gICAgICAgIHZhbHVlOiBzdGVwTmFtZSArICcgJ1xuICAgICAgICArICgodHlwZW9mIGxhYmVsVmFsdWUgIT09ICd1bmRlZmluZWQnKSA/IGxhYmVsVmFsdWUgOiAnJylcbiAgICB9KTtcbiAgICByZXR1cm4gZnVuO1xufVxuIl19