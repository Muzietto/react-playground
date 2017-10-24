define(['exports', './initialState', './view', '../template/startStep_template', '../template/customvarStep_template', '../template/datasetStep_template', '../template/typeStep_template'], function (exports, _initialState, _view, _startStep_template, _customvarStep_template, _datasetStep_template, _typeStep_template) {
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
            saveButton: {
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
            state: _initialState.initialState,
            footer: wizardProps.footer
        }, _startStep_template2.default);
    }

    function customvarStep() {
        return (0, _view2.default)({
            location: 'customvarStep',
            handlers: {
                backward: [startStep],
                forward: [..._initialState.initialState.customvar.map(customVar => labeler('exitStep', exitStep(customVar), customVar))]
            },
            state: _initialState.initialState,
            footer: wizardProps.footer
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

    function randomStep(datasetProperty) {
        return (0, _view2.default)({
            location: 'randomStep',
            chosen_dataset_property: datasetProperty,
            handlers: {
                backward: [startStep, labeler('typeStep', () => typeStep(datasetProperty), datasetProperty)],
                forward: [labeler('exitStep', exitStep(datasetProperty), datasetProperty)]
            },
            footer: wizardProps.footer
        }, templateC);
    }

    function connectedStep(datasetProperty) {
        let datasetPropertyWithSuffix = datasetProperty + '/';
        return (0, _view2.default)({
            location: 'connectedStep',
            chosen_dataset_property: datasetProperty,
            handlers: {
                backward: [startStep, labeler('typeStep', () => typeStep(datasetProperty), datasetProperty)],
                forward: [...datasetIndexes(datasetPropertyWithSuffix).map((arg, index) => labeler('exitStep ' + datasetPropertyWithSuffix + index, exitStep(arg)))]
            },
            footer: wizardProps.footer
        }, templateA);
    }

    function fixedStep(datasetProperty) {
        let datasetPropertyWithSuffix = datasetProperty + '#';
        return (0, _view2.default)({
            location: 'fixedStep',
            chosen_dataset_property: datasetProperty,
            handlers: {
                backward: [startStep, labeler('typeStep', () => typeStep(datasetProperty), datasetProperty)],
                forward: [...datasetIndexes(datasetPropertyWithSuffix).map((arg, index) => labeler('exitStep ' + datasetPropertyWithSuffix + index, exitStep(arg)))]
            },
            footer: wizardProps.footer
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC9zdGF0ZV9tYWNoaW5lL3N0ZXBzLmpzIl0sIm5hbWVzIjpbInN0YXJ0U3RlcCIsIndpemFyZFByb3BzIiwiZm9vdGVyIiwiY2FuY2VsQnV0dG9uIiwib25DbGljayIsImFsZXJ0IiwiY2xhc3NOYW1lIiwic2F2ZUJ1dHRvbiIsImxvY2F0aW9uIiwiaGFuZGxlcnMiLCJiYWNrd2FyZCIsImZvcndhcmQiLCJjdXN0b212YXJTdGVwIiwiZGF0YXNldFN0ZXAiLCJzdGF0ZSIsImN1c3RvbXZhciIsIm1hcCIsImN1c3RvbVZhciIsImxhYmVsZXIiLCJleGl0U3RlcCIsIk9iamVjdCIsImtleXMiLCJkYXRhc2V0IiwiZGF0YXNldElkIiwiZGF0YXNldFBvc2l0aW9uIiwicGFyc2VkU3RhdGVJZCIsImN1cnJlbnRQb3MiLCJkYXRhc2V0TmFtZSIsImRhdGFzZXRfbmFtZSIsImRhdGFzZXRfa2V5cyIsImtleSIsInR5cGVTdGVwIiwiZGF0YXNldFByb3BlcnR5Iiwic3BsaXQiLCJmaW5kSW5kZXgiLCJuIiwiY2hvc2VuX2RhdGFzZXRfbmFtZSIsImNob3Nlbl9kYXRhc2V0X3Byb3BlcnR5IiwicmFuZG9tU3RlcCIsImNvbm5lY3RlZFN0ZXAiLCJmaXhlZFN0ZXAiLCJmdW4iLCJuYW1lIiwidGVtcGxhdGVDIiwiZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCIsImRhdGFzZXRJbmRleGVzIiwiYXJnIiwiaW5kZXgiLCJ0ZW1wbGF0ZUEiLCJ0ZW1wbGF0ZUIiLCJ2YWx1ZSIsInJlc3VsdCIsImRhdGFzZXRQb3MiLCJpdGVtIiwibnVtSW5zdGFuY2VzIiwibGVuZ3RoIiwiQXJyYXkiLCJpZCIsInBpZWNlcyIsInN0ZXBOYW1lIiwibGFiZWxWYWx1ZSIsImRlZmluZVByb3BlcnR5Il0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O1lBMEJnQkEsUyxHQUFBQSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFqQmhCLFFBQUlDLGNBQWM7QUFDZEMsZ0JBQVE7QUFDSkMsMEJB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QyxPQUFULENBQWlCeUMsUUFBakIsRUFBMkJsQixHQUEzQixFQUFnQ21CLFVBQWhDLEVBQTRDO0FBQ3hDeEMsZUFBT3lDLGNBQVAsQ0FBc0JwQixHQUF0QixFQUEyQixNQUEzQixFQUFtQztBQUMvQlMsbUJBQU9TLFdBQVcsR0FBWCxJQUNILE9BQU9DLFVBQVAsS0FBc0IsV0FBdkIsR0FBc0NBLFVBQXRDLEdBQW1ELEVBRC9DO0FBRHdCLFNBQW5DO0FBSUEsZUFBT25CLEdBQVA7QUFDSCIsImZpbGUiOiJzdGVwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtpbml0aWFsU3RhdGUgYXMgc3RhdGV9IGZyb20gJy4vaW5pdGlhbFN0YXRlJztcbmltcG9ydCBjaG9pY2UgZnJvbSAnLi92aWV3JztcbmltcG9ydCBzdGFydFN0ZXBfdGVtcGxhdGUgZnJvbSAnLi4vdGVtcGxhdGUvc3RhcnRTdGVwX3RlbXBsYXRlJztcbmltcG9ydCBjdXN0b212YXJTdGVwX3RlbXBsYXRlIGZyb20gJy4uL3RlbXBsYXRlL2N1c3RvbXZhclN0ZXBfdGVtcGxhdGUnO1xuaW1wb3J0IGRhdGFzZXRTdGVwX3RlbXBsYXRlIGZyb20gJy4uL3RlbXBsYXRlL2RhdGFzZXRTdGVwX3RlbXBsYXRlJztcbmltcG9ydCB0eXBlU3RlcF90ZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZS90eXBlU3RlcF90ZW1wbGF0ZSc7XG5cbmxldCB3aXphcmRQcm9wcyA9IHtcbiAgICBmb290ZXI6IHtcbiAgICAgICAgY2FuY2VsQnV0dG9uOiB7XG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ2NhbmNlbCBidXR0b24gY2xpY2tlZCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2xlZnRfYnV0dG9uJyxcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZUJ1dHRvbjoge1xuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdTQVZFIGJ1dHRvbiBjbGlja2VkJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAncmlnaHRfYnV0dG9uJyxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0U3RlcCgpIHtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdzdGFydFN0ZXAnLFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtdLFxuICAgICAgICAgICAgZm9yd2FyZDogW2N1c3RvbXZhclN0ZXAsIGRhdGFzZXRTdGVwXSxcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICBmb290ZXI6IHdpemFyZFByb3BzLmZvb3RlcixcbiAgICB9LCBzdGFydFN0ZXBfdGVtcGxhdGUpO1xufVxuXG5mdW5jdGlvbiBjdXN0b212YXJTdGVwKCkge1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ2N1c3RvbXZhclN0ZXAnLFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtzdGFydFN0ZXAsXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFsuLi5zdGF0ZS5jdXN0b212YXJcbiAgICAgICAgICAgICAgICAubWFwKGN1c3RvbVZhciA9PiBsYWJlbGVyKCdleGl0U3RlcCcsIGV4aXRTdGVwKGN1c3RvbVZhciksIGN1c3RvbVZhcikpXVxuICAgICAgICB9LFxuICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgIGZvb3Rlcjogd2l6YXJkUHJvcHMuZm9vdGVyLFxuICAgIH0sIGN1c3RvbXZhclN0ZXBfdGVtcGxhdGUpO1xufVxuXG5mdW5jdGlvbiBkYXRhc2V0U3RlcCgpIHtcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdkYXRhc2V0U3RlcCcsXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW3N0YXJ0U3RlcCxdLFxuICAgICAgICAgICAgZm9yd2FyZDogWyAvLyBvbmUgYXJyYXkgZm9yIGVhY2ggZGF0YXNldFxuICAgICAgICAgICAgICAgIC4uLk9iamVjdC5rZXlzKHN0YXRlLmRhdGFzZXQpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoZGF0YXNldElkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhc2V0UG9zaXRpb24gPSBwYXJzZWRTdGF0ZUlkKGRhdGFzZXRJZCkuY3VycmVudFBvcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhc2V0TmFtZSA9IHN0YXRlLmRhdGFzZXRfbmFtZVtkYXRhc2V0UG9zaXRpb25dO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZS5kYXRhc2V0X2tleXNbZGF0YXNldFBvc2l0aW9uXV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGtleSA9PiBkYXRhc2V0TmFtZSArICcuJyArIGtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGtleSA9PiBsYWJlbGVyKCd0eXBlU3RlcCcsICgpID0+IHR5cGVTdGVwKGtleSksIGtleSkpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgIGZvb3Rlcjogd2l6YXJkUHJvcHMuZm9vdGVyLFxuICAgIH0sIGRhdGFzZXRTdGVwX3RlbXBsYXRlKTtcbn1cblxuZnVuY3Rpb24gdHlwZVN0ZXAoZGF0YXNldFByb3BlcnR5KSB7XG4gICAgbGV0IGRhdGFzZXROYW1lID0gZGF0YXNldFByb3BlcnR5LnNwbGl0KCcuJylbMF07XG4gICAgbGV0IGRhdGFzZXRJZCA9ICdkYXRhc2V0IycgKyBzdGF0ZS5kYXRhc2V0X25hbWUuZmluZEluZGV4KG4gPT4gbiA9PT0gZGF0YXNldE5hbWUpO1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ3R5cGVTdGVwJyxcbiAgICAgICAgY2hvc2VuX2RhdGFzZXRfbmFtZTogZGF0YXNldE5hbWUsXG4gICAgICAgIGNob3Nlbl9kYXRhc2V0X3Byb3BlcnR5OiBkYXRhc2V0UHJvcGVydHksXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgICAgICAgICBsYWJlbGVyKCdwcm9wZXJ0eVN0ZXAnLCAoKSA9PiBkYXRhc2V0U3RlcCgpLCBkYXRhc2V0TmFtZSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbXG4gICAgICAgICAgICAgICAgLi4uW3JhbmRvbVN0ZXAsIGNvbm5lY3RlZFN0ZXAsIGZpeGVkU3RlcF1cbiAgICAgICAgICAgICAgICAgICAgLm1hcChmdW4gPT4gbGFiZWxlcihmdW4ubmFtZSwgKCkgPT4gZnVuKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSkpXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgZm9vdGVyOiB3aXphcmRQcm9wcy5mb290ZXIsXG4gICAgfSwgdHlwZVN0ZXBfdGVtcGxhdGUpO1xufVxuXG5mdW5jdGlvbiByYW5kb21TdGVwKGRhdGFzZXRQcm9wZXJ0eSkge1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ3JhbmRvbVN0ZXAnLFxuICAgICAgICBjaG9zZW5fZGF0YXNldF9wcm9wZXJ0eTogZGF0YXNldFByb3BlcnR5LFxuICAgICAgICBoYW5kbGVyczoge1xuICAgICAgICAgICAgYmFja3dhcmQ6IFtcbiAgICAgICAgICAgICAgICBzdGFydFN0ZXAsXG4gICAgICAgICAgICAgICAgbGFiZWxlcigndHlwZVN0ZXAnLCAoKSA9PiB0eXBlU3RlcChkYXRhc2V0UHJvcGVydHkpLCBkYXRhc2V0UHJvcGVydHkpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZm9yd2FyZDogW1xuICAgICAgICAgICAgICAgIGxhYmVsZXIoJ2V4aXRTdGVwJywgZXhpdFN0ZXAoZGF0YXNldFByb3BlcnR5KSwgZGF0YXNldFByb3BlcnR5KSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgZm9vdGVyOiB3aXphcmRQcm9wcy5mb290ZXIsXG4gICAgfSwgdGVtcGxhdGVDKTtcbn1cblxuZnVuY3Rpb24gY29ubmVjdGVkU3RlcChkYXRhc2V0UHJvcGVydHkpIHtcbiAgICBsZXQgZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCA9IGRhdGFzZXRQcm9wZXJ0eSArICcvJztcbiAgICByZXR1cm4gY2hvaWNlKHtcbiAgICAgICAgbG9jYXRpb246ICdjb25uZWN0ZWRTdGVwJyxcbiAgICAgICAgY2hvc2VuX2RhdGFzZXRfcHJvcGVydHk6IGRhdGFzZXRQcm9wZXJ0eSxcbiAgICAgICAgaGFuZGxlcnM6IHtcbiAgICAgICAgICAgIGJhY2t3YXJkOiBbXG4gICAgICAgICAgICAgICAgc3RhcnRTdGVwLFxuICAgICAgICAgICAgICAgIGxhYmVsZXIoJ3R5cGVTdGVwJywgKCkgPT4gdHlwZVN0ZXAoZGF0YXNldFByb3BlcnR5KSwgZGF0YXNldFByb3BlcnR5KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZvcndhcmQ6IFtcbiAgICAgICAgICAgICAgICAuLi5kYXRhc2V0SW5kZXhlcyhkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4KVxuICAgICAgICAgICAgICAgICAgICAubWFwKChhcmcsIGluZGV4KSA9PiBsYWJlbGVyKCdleGl0U3RlcCAnICsgZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeCArIGluZGV4LCBleGl0U3RlcChhcmcpKSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgZm9vdGVyOiB3aXphcmRQcm9wcy5mb290ZXIsXG4gICAgfSwgdGVtcGxhdGVBKTtcbn1cblxuZnVuY3Rpb24gZml4ZWRTdGVwKGRhdGFzZXRQcm9wZXJ0eSkge1xuICAgIGxldCBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4ID0gZGF0YXNldFByb3BlcnR5ICsgJyMnO1xuICAgIHJldHVybiBjaG9pY2Uoe1xuICAgICAgICBsb2NhdGlvbjogJ2ZpeGVkU3RlcCcsXG4gICAgICAgIGNob3Nlbl9kYXRhc2V0X3Byb3BlcnR5OiBkYXRhc2V0UHJvcGVydHksXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgICBiYWNrd2FyZDogW1xuICAgICAgICAgICAgICAgIHN0YXJ0U3RlcCxcbiAgICAgICAgICAgICAgICBsYWJlbGVyKCd0eXBlU3RlcCcsICgpID0+IHR5cGVTdGVwKGRhdGFzZXRQcm9wZXJ0eSksIGRhdGFzZXRQcm9wZXJ0eSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmb3J3YXJkOiBbXG4gICAgICAgICAgICAgICAgLi4uZGF0YXNldEluZGV4ZXMoZGF0YXNldFByb3BlcnR5V2l0aFN1ZmZpeClcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoYXJnLCBpbmRleCkgPT4gbGFiZWxlcignZXhpdFN0ZXAgJyArIGRhdGFzZXRQcm9wZXJ0eVdpdGhTdWZmaXggKyBpbmRleCwgZXhpdFN0ZXAoYXJnKSkpXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIGZvb3Rlcjogd2l6YXJkUHJvcHMuZm9vdGVyLFxuICAgIH0sIHRlbXBsYXRlQik7XG59XG5cbmZ1bmN0aW9uIGV4aXRTdGVwKHZhbHVlLCBpbmRleCkgeyAvLyByZWFzb25zZm9yY29sb2duZS5pbWFnZS8yIC0tPiAkKHJlYXNvbnNmb3Jjb2xvZ25lLmltYWdlLzIpXG4gICAgbGV0IHJlc3VsdCA9ICgpID0+IHtcbiAgICAgICAgYWxlcnQoJyQoJyArIHZhbHVlICsgJyknKTtcbiAgICB9O1xuICAgIHJldHVybiBsYWJlbGVyKCdleGl0U3RlcCcsIHJlc3VsdCwgaW5kZXgpO1xufVxuXG5mdW5jdGlvbiBkYXRhc2V0SW5kZXhlcyhkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4KSB7IC8vIHJlYXNvbnNmb3Jjb2xvZ25lLmltYWdlIC0+IHJlYXNvbnNmb3Jjb2xvZ25lLmltYWdlLzJcbiAgICBsZXQgZGF0YXNldE5hbWUgPSBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4LnNwbGl0KCcuJylbMF07XG4gICAgbGV0IGRhdGFzZXRQb3MgPSBzdGF0ZS5kYXRhc2V0X25hbWUuZmluZEluZGV4KGl0ZW0gPT4gaXRlbSA9PT0gZGF0YXNldE5hbWUpO1xuICAgIGxldCBudW1JbnN0YW5jZXMgPSBzdGF0ZS5kYXRhc2V0WydkYXRhc2V0IycgKyBkYXRhc2V0UG9zXS5sZW5ndGg7XG4gICAgcmV0dXJuIFsuLi5BcnJheShudW1JbnN0YW5jZXMpLmtleXMoKV0ubWFwKGtleSA9PiBkYXRhc2V0UHJvcGVydHlXaXRoU3VmZml4ICsga2V5KTtcbn1cblxuZnVuY3Rpb24gcGFyc2VkU3RhdGVJZChpZCkge1xuICAgIGxldCBwaWVjZXMgPSBpZC5zcGxpdCgnIycpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnRQb3M6IHBpZWNlc1sxXSxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBsYWJlbGVyKHN0ZXBOYW1lLCBmdW4sIGxhYmVsVmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuLCAnbmFtZScsIHtcbiAgICAgICAgdmFsdWU6IHN0ZXBOYW1lICsgJyAnXG4gICAgICAgICsgKCh0eXBlb2YgbGFiZWxWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcpID8gbGFiZWxWYWx1ZSA6ICcnKVxuICAgIH0pO1xuICAgIHJldHVybiBmdW47XG59XG4iXX0=