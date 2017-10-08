define(['react', 'react-dom', './rootReducer', './ContactPage', 'react-redux'], function (_react, _reactDom, _rootReducer, _ContactPage, _reactRedux) {
    'use strict';

    var _react2 = _interopRequireDefault(_react);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var _ContactPage2 = _interopRequireDefault(_ContactPage);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    const render = () => {
        const state = _rootReducer.store.getState();
        _reactDom2.default.render(_react2.default.createElement(
            _reactRedux.Provider,
            { store: _rootReducer.store },
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_ContactPage2.default, null)
            )
        ), document.getElementById('container'));
    };

    render();
    _rootReducer.store.subscribe(render);
    window.store = _rootReducer.store;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9hcHAuanN4Il0sIm5hbWVzIjpbInJlbmRlciIsInN0YXRlIiwiZ2V0U3RhdGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3Vic2NyaWJlIiwid2luZG93Iiwic3RvcmUiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFRQSxVQUFNQSxTQUFTLE1BQU07QUFDakIsY0FBTUMsUUFBUSxtQkFBTUMsUUFBTixFQUFkO0FBQ0EsMkJBQVNGLE1BQVQsQ0FDSTtBQUFBO0FBQUEsY0FBVSx5QkFBVjtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBREo7QUFESixTQURKLEVBTUlHLFNBQVNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FOSjtBQU9ILEtBVEQ7O0FBV0FKO0FBQ0EsdUJBQU1LLFNBQU4sQ0FBZ0JMLE1BQWhCO0FBQ0FNLFdBQU9DLEtBQVAiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge3N0b3JlfSBmcm9tICcuL3Jvb3RSZWR1Y2VyJztcbmltcG9ydCBDb250YWN0UGFnZSBmcm9tICcuL0NvbnRhY3RQYWdlJztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Q29udGFjdFBhZ2UvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUHJvdmlkZXI+LFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJykpO1xufTtcblxucmVuZGVyKCk7XG5zdG9yZS5zdWJzY3JpYmUocmVuZGVyKTtcbndpbmRvdy5zdG9yZSA9IHN0b3JlO1xuIl19