define(['exports', 'react', '../wizard/wizard', '../wizard/body/body_type', '../wizard/core/core_type'], function (exports, _react, _wizard, _body_type, _core_type) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = typeStep_template;

    var _react2 = _interopRequireDefault(_react);

    var _wizard2 = _interopRequireDefault(_wizard);

    var _body_type2 = _interopRequireDefault(_body_type);

    var _core_type2 = _interopRequireDefault(_core_type);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    function typeStep_template(props) {
        props = _extends({}, props, {
            body: _extends({}, props.body, {
                body_renderer: _body_type2.default
            }),
            core: _extends({}, props.core, {
                core_renderer: _core_type2.default,
                message: 'hello, type!'
            }),
            summary: {
                step: 2,
                handlers: props.handlers.backward
            },
            footer: _extends({}, props.footer, {
                cancelButton: _extends({}, props.footer.cancelButton, {
                    disabled: false
                }),
                saveButton: _extends({}, props.footer.saveButton, {
                    disabled: true
                })
            })
        });

        return _react2.default.createElement(
            'div',
            { className: 'container' },
            (0, _wizard2.default)(props)
        );
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2pzeC90ZW1wbGF0ZS90eXBlU3RlcF90ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJ0eXBlU3RlcF90ZW1wbGF0ZSIsInByb3BzIiwiYm9keSIsImJvZHlfcmVuZGVyZXIiLCJjb3JlIiwiY29yZV9yZW5kZXJlciIsIm1lc3NhZ2UiLCJzdW1tYXJ5Iiwic3RlcCIsImhhbmRsZXJzIiwiYmFja3dhcmQiLCJmb290ZXIiLCJjYW5jZWxCdXR0b24iLCJkaXNhYmxlZCIsInNhdmVCdXR0b24iXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7c0JBUXdCQSxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVQsYUFBU0EsaUJBQVQsQ0FBMkJDLEtBQTNCLEVBQWtDO0FBQzdDQSw2QkFDT0EsS0FEUDtBQUVJQywrQkFDT0QsTUFBTUMsSUFEYjtBQUVJQztBQUZKLGNBRko7QUFNSUMsK0JBQ09ILE1BQU1HLElBRGI7QUFFSUMsa0RBRko7QUFHSUMseUJBQVM7QUFIYixjQU5KO0FBV0lDLHFCQUFTO0FBQ0xDLHNCQUFNLENBREQ7QUFFTEMsMEJBQVVSLE1BQU1RLFFBQU4sQ0FBZUM7QUFGcEIsYUFYYjtBQWVJQyxpQ0FDT1YsTUFBTVUsTUFEYjtBQUVJQywyQ0FDT1gsTUFBTVUsTUFBTixDQUFhQyxZQURwQjtBQUVJQyw4QkFBVTtBQUZkLGtCQUZKO0FBTUlDLHlDQUNPYixNQUFNVSxNQUFOLENBQWFHLFVBRHBCO0FBRUlELDhCQUFVO0FBRmQ7QUFOSjtBQWZKOztBQTRCQSxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUNLLGtDQUFPWixLQUFQO0FBREwsU0FESjtBQUtIIiwiZmlsZSI6InR5cGVTdGVwX3RlbXBsYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgV2l6YXJkIGZyb20gJy4uL3dpemFyZC93aXphcmQnO1xuaW1wb3J0IGJvZHlfdHlwZSBmcm9tICcuLi93aXphcmQvYm9keS9ib2R5X3R5cGUnO1xuaW1wb3J0IGNvcmVfdHlwZSBmcm9tICcuLi93aXphcmQvY29yZS9jb3JlX3R5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0eXBlU3RlcF90ZW1wbGF0ZShwcm9wcykge1xuICAgIHByb3BzID0ge1xuICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgYm9keToge1xuICAgICAgICAgICAgLi4ucHJvcHMuYm9keSxcbiAgICAgICAgICAgIGJvZHlfcmVuZGVyZXI6IGJvZHlfdHlwZSxcbiAgICAgICAgfSxcbiAgICAgICAgY29yZToge1xuICAgICAgICAgICAgLi4ucHJvcHMuY29yZSxcbiAgICAgICAgICAgIGNvcmVfcmVuZGVyZXI6IGNvcmVfdHlwZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdoZWxsbywgdHlwZSEnLFxuICAgICAgICB9LFxuICAgICAgICBzdW1tYXJ5OiB7XG4gICAgICAgICAgICBzdGVwOiAyLFxuICAgICAgICAgICAgaGFuZGxlcnM6IHByb3BzLmhhbmRsZXJzLmJhY2t3YXJkLFxuICAgICAgICB9LFxuICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgIC4uLnByb3BzLmZvb3RlcixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjoge1xuICAgICAgICAgICAgICAgIC4uLnByb3BzLmZvb3Rlci5jYW5jZWxCdXR0b24sXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNhdmVCdXR0b246IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9wcy5mb290ZXIuc2F2ZUJ1dHRvbixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIHtXaXphcmQocHJvcHMpfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSJdfQ==