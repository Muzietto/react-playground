define(['react', 'react-dom', './Provider', './Granpa'], function (_react, _reactDom, _Provider, _Granpa) {
    'use strict';

    var _react2 = _interopRequireDefault(_react);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var _Provider2 = _interopRequireDefault(_Provider);

    var _Granpa2 = _interopRequireDefault(_Granpa);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    _reactDom2.default.render(_react2.default.createElement(
        'div',
        { className: 'large_container' },
        _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
                _Provider2.default,
                null,
                _react2.default.createElement(_Granpa2.default, null)
            )
        )
    ), document.getElementById('root'));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSx1QkFBU0EsTUFBVCxDQUNJO0FBQUE7QUFBQSxVQUFLLFdBQVUsaUJBQWY7QUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFdBQWY7QUFDSTtBQUFBO0FBQUE7QUFDRTtBQURGO0FBREo7QUFESixLQURKLEVBT1lDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FQWiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByb3ZpZGVyIGZyb20gJy4vUHJvdmlkZXInO1xuaW1wb3J0IEdyYW5wYSBmcm9tICcuL0dyYW5wYSc7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxhcmdlX2NvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPFByb3ZpZGVyPlxuICAgICAgICAgICAgICA8R3JhbnBhIC8+XG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7XG4iXX0=