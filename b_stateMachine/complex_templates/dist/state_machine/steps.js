define(['exports', './initialState', './view', '../template/startStep_template'], function (exports, _initialState, _view, _startStep_template) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.startStep = startStep;

    var _view2 = _interopRequireDefault(_view);

    var _startStep_template2 = _interopRequireDefault(_startStep_template);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    let wizardProps = {
        body: {
            body_renderer: undefined
        },
        summary: {
            step: 1
        },
        core: {
            core_renderer: undefined,
            message: 'hello, world!'
        },
        footer: {
            cancelButton: {
                disabled: false,
                onClick: () => {
                    alert('cancel button clicked');
                },
                className: 'left_button'
            },
            saveButton: {
                disabled: true,
                onClick: () => {
                    alert('SAVE button clicked');
                },
                className: 'right_button'
            }
        }
    };

    function startStep() {
        return (0, _view2.default)({
            location: 'startStep',
            handlers: {
                backward: [],
                forward: [customvarStep, datasetStep]
            },
            footer: wizardProps.footer
        }, _startStep_template2.default);
    }

    function customvarStep() {
        return (0, _view2.default)({
            location: 'customvarStep',
            handlers: {
                backward: [startStep],
                forward: [..._initialState.initialState.customvar.map(customVar => labeler('exitStep', exitStep(customVar), customVar))]
            }
        }, customvarStep_template);
    }

    function datasetStep() {
        return (0, _view2.default)({
            location: 'datasetStep',
            handlers: {
                backward: [startStep],
                forward: [...Object.keys(_initialState.initialState.dataset).map(key => labeler('propertyStep', () => propertyStep(key), _initialState.initialState.dataset_name[parsedStateId(key).currentPos]))]
            }
        }, templateC);
    }

    function propertyStep(datasetId) {
        let datasetName = _initialState.initialState.dataset_name[parsedStateId(datasetId).currentPos];
        return (0, _view2.default)({
            location: 'propertyStep',
            handlers: {
                backward: [startStep, labeler('datasetStep', () => datasetStep(), datasetName)],
                forward: [..._initialState.initialState.dataset_keys[parsedStateId(datasetId).currentPos].map(key => datasetName + '.' + key).map(key => labeler('typeStep', () => typeStep(key), key))]
            }
        }, templateA);
    }

    function typeStep(datasetProperty) {
        let datasetName = datasetProperty.split('.')[0];
        let datasetId = 'dataset#' + _initialState.initialState.dataset_name.findIndex(n => n === datasetName);
        return (0, _view2.default)({
            location: 'typeStep',
            handlers: {
                backward: [startStep, labeler('propertyStep', () => propertyStep(datasetId), datasetName)],
                forward: [...[randomStep, connectedStep, fixedStep].map(fun => labeler(fun.name, () => fun(datasetProperty), datasetProperty))]
            }
        }, templateB);
    }

    function randomStep(datasetProperty) {
        return (0, _view2.default)({
            location: 'randomStep',
            handlers: {
                backward: [startStep, labeler('typeStep', () => typeStep(datasetProperty), datasetProperty)],
                forward: [labeler('exitStep', exitStep(datasetProperty), datasetProperty)]
            }
        }, templateC);
    }

    function connectedStep(datasetProperty) {
        let datasetPropertyWithSuffix = datasetProperty + '/';
        return (0, _view2.default)({
            location: 'connectedStep',
            handlers: {
                backward: [startStep, labeler('typeStep', () => typeStep(datasetProperty), datasetProperty)],
                forward: [...datasetIndexes(datasetPropertyWithSuffix).map((arg, index) => labeler('exitStep ' + datasetPropertyWithSuffix + index, exitStep(arg)))]
            }
        }, templateA);
    }

    function fixedStep(datasetProperty) {
        let datasetPropertyWithSuffix = datasetProperty + '#';
        return (0, _view2.default)({
            location: 'fixedStep',
            handlers: {
                backward: [startStep, labeler('typeStep', () => typeStep(datasetProperty), datasetProperty)],
                forward: [...datasetIndexes(datasetPropertyWithSuffix).map((arg, index) => labeler('exitStep ' + datasetPropertyWithSuffix + index, exitStep(arg)))]
            }
        }, templateB);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9zdGF0ZV9tYWNoaW5lL3N0ZXBzLmpzIl0sIm5hbWVzIjpbInN0YXJ0U3RlcCIsIndpemFyZFByb3BzIiwiYm9keSIsImJvZHlfcmVuZGVyZXIiLCJ1bmRlZmluZWQiLCJzdW1tYXJ5Iiwic3RlcCIsImNvcmUiLCJjb3JlX3JlbmRlcmVyIiwibWVzc2FnZSIsImZvb3RlciIsImNhbmNlbEJ1dHRvbiIsImRpc2FibGVkIiwib25DbGljayIsImFsZXJ0IiwiY2xhc3NOYW1lIiwic2F2ZUJ1dHRvbiIsImxvY2F0aW9uIiwiaGFuZGxlcnMiLCJiYWNrd2FyZCIsImZvcndhcmQiLCJjdXN0b212YXJTdGVwIiwiZGF0YXNldFN0ZXAiLCJjdXN0b212YXIiLCJtYXAiLCJjdXN0b21WYXIiLCJsYWJlbGVyIiwiZXhpdFN0ZXAiLCJjdXN0b212YXJTdGVwX3RlbXBsYXRlIiwiT2JqZWN0Iiwia2V5cyIsImRhdGFzZXQiLCJrZXkiLCJwcm9wZXJ0eVN0ZXAiLCJkYXRhc2V0X25hbWUiLCJwYXJzZWRTdGF0ZUlkIiwiY3VycmVudFBvcyIsInRlbXBsYXRlQyIsImRhdGFzZXRJZCIsImRhdGFzZXROYW1lIiwiZGF0YXNldF9rZXlzIiwidHlwZVN0ZXAiLCJ0ZW1wbGF0ZUEiLCJkYXRhc2V0UHJvcGVydHkiLCJzcGxpdCIsImZpbmRJbmRleCIsIm4iLCJyYW5kb21TdGVwIiwiY29ubmVjdGVkU3RlcCIsImZpeGVkU3RlcCIsImZ1biIsIm5hbWUiLCJ0ZW1wbGF0ZUIiLCJkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4IiwiZGF0YXNldEluZGV4ZXMiLCJhcmciLCJpbmRleCIsInZhbHVlIiwicmVzdWx0IiwiZGF0YXNldFBvcyIsIml0ZW0iLCJudW1JbnN0YW5jZXMiLCJsZW5ndGgiLCJBcnJheSIsImlkIiwicGllY2VzIiwic3RlcE5hbWUiLCJsYWJlbFZhbHVlIiwiZGVmaW5lUHJvcGVydHkiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7WUFtQ2dCQSxTLEdB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QU1GLFlBQU4sRUFBb0IvQixJQUFwQixFQUFKLEVBQWdDTixHQUFoQyxDQUFvQ1EsT0FBT3FCLDRCQUE0QnJCLEdBQXZFLENBQVA7QUFDSDs7QUFFRCxhQUFTRyxhQUFULENBQXVCNkIsRUFBdkIsRUFBMkI7QUFDdkIsWUFBSUMsU0FBU0QsR0FBR3BCLEtBQUgsQ0FBUyxHQUFULENBQWI7QUFDQSxlQUFPO0FBQ0hSLHdCQUFZNkIsT0FBTyxDQUFQO0FBRFQsU0FBUDtBQUdIOztBQUVELGFBQVN2QyxPQUFULENBQWlCd0MsUUFBakIsRUFBMkJoQixHQUEzQixFQUFnQ2lCLFVBQWhDLEVBQTRDO0FBQ3hDdEMsZUFBT3VDLGNBQVAsQ0FBc0JsQixHQUF0QixFQUEyQixNQUEzQixFQUFtQztBQUMvQk8sbUJBQU9TLFdBQVcsR0FBWCxJQUNILE9BQU9DLFVBQVAsS0FBc0IsV0FBdkIsR0FBc0NBLFVBQXRDLEdBQW1ELEVBRC9DO0FBRHdCLFNBQW5DO0FBSUEsZUFBT2pCLEdBQVA7QUFDSCIsImZpbGUiOiJzdGVwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtpbml0aWFsU3RhdGUgYXMgc3RhdGV9IGZyb20gJy4vaW5pdGlhbFN0YXRlJztcbmltcG9ydCBjaG9pY2UgZnJvbSAnLi92aWV3JztcbmltcG9ydCBzdGFydFN0ZXBfdGVtcGxhdGUgZnJvbSAnLi4vdGVtcGxhdGUvc3RhcnRTdGVwX3RlbXBsYXRlJztcblxubGV0IHdpemFyZFByb3BzID0ge1xuICAgIGJvZHk6IHtcbiAgICAgICAgYm9keV9yZW5kZXJlcjogdW5kZWZpbmVkLFxuICAgIH0sXG4gICAgc3VtbWFyeToge1xuICAgICAgICBzdGVwOiAxLFxuICAgIH0sXG4gICAgY29yZToge1xuICAgICAgICBjb3JlX3JlbmRlcmVyOiB1bmRlZmluZWQsXG4gICAgICAgIG1lc3NhZ2U6ICdoZWxsbywgd29ybGQhJyxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgICBjYW5jZWxCdXR0b246IHtcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydCgnY2FuY2VsIGJ1dHRvbiBjbGlja2VkJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbGVmdF9idXR0b24nLFxuICAgICAgICB9LFxuICAgICAgICBzYXZlQnV0dG9uOiB7XG4gICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydCgnU0FWRSBidXR0b24gY2xpY2tlZCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3JpZ2h0X2J1dHRvbicsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFN0ZXAoKSB7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAnc3RhcnRTdGVwJyxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFtjdXN0b212YXJTdGVwLCBkYXRhc2V0U3RlcF0sXG4gICAgICAgIH0sXG4gICAgICAgIGZvb3Rlcjogd2l6YXJkUHJvcHMuZm9vdGVyLFxuICAgIH0sIHN0YXJ0U3RlcF90ZW1wbGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGN1c3RvbXZhclN0ZXAoKSB7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAnY3VzdG9tdmFyU3RlcCcsXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW3N0YXJ0U3RlcCxdLFxuICAgICAgICAgICAgZm9yd2FyZDogWy4uLnN0YXRlLmN1c3RvbXZhclxuICAgICAgICAgICAgICAgIC5tYXAoY3VzdG9tVmFyID0+IGxhYmVsZXIoJ2V4aXRTdGVwJywgZXhpdFN0ZXAoY3VzdG9tVmFyKSwgY3VzdG9tVmFyKSldXG4gICAgICAgIH0sXG4gICAgfSwgY3VzdG9tdmFyU3RlcF90ZW1wbGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGRhdGFzZXRTdGVwKCkge1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ2RhdGFzZXRTdGVwJyxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbc3RhcnRTdGVwLF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbXG4gICAgICAgICAgICAgICAgLi4uT2JqZWN0LmtleXMoc3RhdGUuZGF0YXNldClcbiAgICAgICAgICAgICAgICAgICAgLm1hcChrZXkgPT4gbGFiZWxlcigncHJvcGVydHlTdGVwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHByb3BlcnR5U3RlcChrZXkpLCBzdGF0ZS5kYXRhc2V0X25hbWVbcGFyc2VkU3RhdGVJZChrZXkpLmN1cnJlbnRQb3NdKSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICB9LCB0ZW1wbGF0ZUMpO1xufVxuXG5mdW5jdGlvbiBwcm9wZXJ0eVN0ZXAoZGF0YXNldElkKSB7XG4gICAgbGV0IGRhdGFzZXROYW1lID0gc3RhdGUuZGF0YXNldF9uYW1lW3BhcnNlZFN0YXRlSWQoZGF0YXNldElkKS5jdXJyZW50UG9zXTtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdwcm9wZXJ0eVN0ZXAnLFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtcbiAgICAgICAgICAgICAgICBzdGFydFN0ZXAsXG4gICAgICAgICAgICAgICAgbGFiZWxlcignZGF0YXNldFN0ZXAnLCAoKSA9PiBkYXRhc2V0U3RlcCgpLCBkYXRhc2V0TmFtZSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUuZGF0YXNldF9rZXlzW3BhcnNlZFN0YXRlSWQoZGF0YXNldElkKS5jdXJyZW50UG9zXVxuICAgICAgICAgICAgICAgICAgICAubWFwKGtleSA9PiBkYXRhc2V0TmFtZSArICcuJyArIGtleSlcbiAgICAgICAgICAgICAgICAgICAgLm1hcChrZXkgPT4gbGFiZWxlcigndHlwZVN0ZXAnLCAoKSA9PiB0eXBlU3RlcChrZXkpLCBrZXkpKVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgIH0sIHRlbXBsYXRlQSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVTdGVwKGRhdGFzZXRQcm9wZXJ0eSkge1xuICAgIGxldCBkYXRhc2V0TmFtZSA9IGRhdGFzZXRQcm9wZXJ0eS5zcGxpdCgnLicpWzBdO1xuICAgIGxldCBkYXRhc2V0SWQgPSAnZGF0YXNldCMnICsgc3RhdGUuZGF0YXNldF9uYW1lLmZpbmRJbmRleChuID0+IG4gPT09IGRhdGFzZXROYW1lKTtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICd0eXBlU3RlcCcsXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgICAgICAgICBsYWJlbGVyKCdwcm9wZXJ0eVN0ZXAnLCAoKSA9PiBwcm9wZXJ0eVN0ZXAoZGF0YXNldElkKSwgZGF0YXNldE5hbWUpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZm9yd2FyZDogW1xuICAgICAgICAgICAgICAgIC4uLltyYW5kb21TdGVwLCBjb25uZWN0ZWRTdGVwLCBmaXhlZFN0ZXBdXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuID0+IGxhYmVsZXIoZnVuLm5hbWUsICgpID0+IGZ1bihkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpKVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgIH0sIHRlbXBsYXRlQik7XG59XG5cbmZ1bmN0aW9uIHJhbmRvbVN0ZXAoZGF0YXNldFByb3BlcnR5KSB7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAncmFuZG9tU3RlcCcsXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgICAgICAgICBsYWJlbGVyKCd0eXBlU3RlcCcsICgpID0+IHR5cGVTdGVwKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbXG4gICAgICAgICAgICAgICAgbGFiZWxlcignZXhpdFN0ZXAnLCBleGl0U3RlcChkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpLFxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgIH0sIHRlbXBsYXRlQyk7XG59XG5cbmZ1bmN0aW9uIGNvbm5lY3RlZFN0ZXAoZGF0YXNldFByb3BlcnR5KSB7XG4gICAgbGV0IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggPSBkYXRhc2V0UHJvcGVydHkgKyAnLyc7XG4gICAgcmV0dXJuIGNob2ljZSh7XG4gICAgICAgIGxvY2F0aW9uOiAnY29ubmVjdGVkU3RlcCcsXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgICAgICAgICBsYWJlbGVyKCd0eXBlU3RlcCcsICgpID0+IHR5cGVTdGVwKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbXG4gICAgICAgICAgICAgICAgLi4uZGF0YXNldEluZGV4ZXMoZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeClcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoYXJnLCBpbmRleCkgPT4gbGFiZWxlcignZXhpdFN0ZXAgJyArIGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggKyBpbmRleCwgZXhpdFN0ZXAoYXJnKSkpXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgfSwgdGVtcGxhdGVBKTtcbn1cblxuZnVuY3Rpb24gZml4ZWRTdGVwKGRhdGFzZXRQcm9wZXJ0eSkge1xuICAgIGxldCBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4ID0gZGF0YXNldFByb3BlcnR5ICsgJyMnO1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ2ZpeGVkU3RlcCcsXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgICAgICAgICBsYWJlbGVyKCd0eXBlU3RlcCcsICgpID0+IHR5cGVTdGVwKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbXG4gICAgICAgICAgICAgICAgLi4uZGF0YXNldEluZGV4ZXMoZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeClcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoYXJnLCBpbmRleCkgPT4gbGFiZWxlcignZXhpdFN0ZXAgJyArIGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggKyBpbmRleCwgZXhpdFN0ZXAoYXJnKSkpXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgfSwgdGVtcGxhdGVCKTtcbn1cblxuZnVuY3Rpb24gZXhpdFN0ZXAodmFsdWUsIGluZGV4KSB7IC8vIHJlYXNvbnNmb3Jjb2xvZ25lLmltYWdlLzIgLS0+ICQocmVhc29uc2ZvcmNvbG9nbmUuaW1hZ2UvMilcbiAgICBsZXQgcmVzdWx0ID0gKCkgPT4ge1xuICAgICAgICBhbGVydCgnJCgnICsgdmFsdWUgKyAnKScpO1xuICAgIH07XG4gICAgcmV0dXJuIGxhYmVsZXIoJ2V4aXRTdGVwJywgcmVzdWx0LCBpbmRleCk7XG59XG5cbmZ1bmN0aW9uIGRhdGFzZXRJbmRleGVzKGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXgpIHsgLy8gcmVhc29uc2ZvcmNvbG9nbmUuaW1hZ2UgLT4gcmVhc29uc2ZvcmNvbG9nbmUuaW1hZ2UvMlxuICAgIGxldCBkYXRhc2V0TmFtZSA9IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXguc3BsaXQoJy4nKVswXTtcbiAgICBsZXQgZGF0YXNldFBvcyA9IHN0YXRlLmRhdGFzZXRfbmFtZS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSBkYXRhc2V0TmFtZSk7XG4gICAgbGV0IG51bUluc3RhbmNlcyA9IHN0YXRlLmRhdGFzZXRbJ2RhdGFzZXQjJyArIGRhdGFzZXRQb3NdLmxlbmd0aDtcbiAgICByZXR1cm4gWy4uLkFycmF5KG51bUluc3RhbmNlcykua2V5cygpXS5tYXAoa2V5ID0+IGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggKyBrZXkpO1xufVxuXG5mdW5jdGlvbiBwYXJzZWRTdGF0ZUlkKGlkKSB7XG4gICAgbGV0IHBpZWNlcyA9IGlkLnNwbGl0KCcjJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudFBvczogcGllY2VzWzFdLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGxhYmVsZXIoc3RlcE5hbWUsIGZ1biwgbGFiZWxWYWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW4sICduYW1lJywge1xuICAgICAgICB2YWx1ZTogc3RlcE5hbWUgKyAnICdcbiAgICAgICAgKyAoKHR5cGVvZiBsYWJlbFZhbHVlICE9PSAndW5kZWZpbmVkJykgPyBsYWJlbFZhbHVlIDogJycpXG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bjtcbn1cbiJdfQ==