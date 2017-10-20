define(['exports', 'react', './core_customvars'], function (exports, _react, _core_customvars) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = body_startStep;

    var _react2 = _interopRequireDefault(_react);

    var _core_customvars2 = _interopRequireDefault(_core_customvars);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _objectWithoutProperties(obj, keys) {
        var target = {};

        for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
        }

        return target;
    }

    function body_startStep(props) {
        let _props$core = props.core,
            { core_renderer } = _props$core,
            coreprops = _objectWithoutProperties(_props$core, ['core_renderer']);
        return _react2.default.createElement(
            'div',
            { className: 'body' },
            handlers.forward.map((handler, index) => {
                return _react2.default.createElement(
                    'h2',
                    {
                        style: { cursor: 'pointer' },
                        key: index,
                        onClick: handler },
                    _react2.default.createElement(
                        'p',
                        null,
                        'forward to\xA0\xA0'
                    ),
                    handler.name || 'noname'
                );
            })
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC93aXphcmQvYm9keV9zdGFydFN0ZXAuanMiXSwibmFtZXMiOlsiYm9keV9zdGFydFN0ZXAiLCJwcm9wcyIsImNvcmUiLCJjb3JlX3JlbmRlcmVyIiwiY29yZXByb3BzIiwiaGFuZGxlcnMiLCJmb3J3YXJkIiwibWFwIiwiaGFuZGxlciIsImluZGV4IiwiY3Vyc29yIiwibmFtZSJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztzQkFNd0JBLGM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFULGFBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQzFDLDBCQUFvQ0EsTUFBTUMsSUFBMUM7QUFBQSxZQUFJLEVBQUNDLGFBQUQsRUFBSjtBQUFBLFlBQXVCQyxTQUF2QjtBQUNBLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxNQUFmO0FBRVFDLHFCQUFTQyxPQUFULENBQWlCQyxHQUFqQixDQUFxQixDQUFDQyxPQUFELEVBQVVDLEtBQVYsS0FBb0I7QUFDckMsdUJBQU87QUFBQTtBQUFBO0FBQ0gsK0JBQU8sRUFBQ0MsUUFBUSxTQUFULEVBREo7QUFFSCw2QkFBS0QsS0FGRjtBQUdILGlDQUFTRCxPQUhOO0FBR2U7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIZjtBQUc4Q0EsNEJBQVFHLElBQVIsSUFBZ0I7QUFIOUQsaUJBQVA7QUFJSCxhQUxEO0FBRlIsU0FESjtBQVlIIiwiZmlsZSI6ImJvZHlfc3RhcnRTdGVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY29yZV9jdXN0b212YXJzIGZyb20gJy4vY29yZV9jdXN0b212YXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYm9keV9zdGFydFN0ZXAocHJvcHMpIHtcbiAgICBsZXQge2NvcmVfcmVuZGVyZXIsIC4uLmNvcmVwcm9wc30gPSBwcm9wcy5jb3JlO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJzLmZvcndhcmQubWFwKChoYW5kbGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGgyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVyfT48cD5mb3J3YXJkIHRvJm5ic3A7Jm5ic3A7PC9wPnsoaGFuZGxlci5uYW1lIHx8ICdub25hbWUnKX08L2gyPjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl19