define(['exports', 'react', '@src/models/viewport/viewport'], function (exports, _react, _viewport) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _viewport2 = _interopRequireDefault(_viewport);

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

  const DeviceAware = Component => {
    return class _DeviceAwareComponent extends _react2.default.Component {
      constructor(props) {
        super(props);
        this.state = {
          device: ''
        };
        this.handleResize = this.handleResize.bind(this);
      }

      componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
      }

      componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
      }

      handleResize() {
        const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        this.setState({ device: _viewport2.default.get(width) });
      }

      render() {
        return _react2.default.createElement(Component, _extends({ device: this.state.device }, this.props));
      }
    };
  };

  exports.default = DeviceAware;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9EZXZpY2VBd2FyZV9yZWYuanMiXSwibmFtZXMiOlsiRGV2aWNlQXdhcmUiLCJDb21wb25lbnQiLCJfRGV2aWNlQXdhcmVDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJkZXZpY2UiLCJoYW5kbGVSZXNpemUiLCJiaW5kIiwiY29tcG9uZW50RGlkTW91bnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwid2lkdGgiLCJNYXRoIiwibWF4IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImlubmVyV2lkdGgiLCJzZXRTdGF0ZSIsImdldCIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLFFBQU1BLGNBQWNDLGFBQWE7QUFDL0IsV0FBTyxNQUFNQyxxQkFBTixTQUFvQyxnQkFBTUQsU0FBMUMsQ0FBb0Q7QUFDekRFLGtCQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLGNBQU1BLEtBQU47QUFDQSxhQUFLQyxLQUFMLEdBQWE7QUFDWEMsa0JBQVE7QUFERyxTQUFiO0FBR0EsYUFBS0MsWUFBTCxHQUFvQixLQUFLQSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFwQjtBQUNEOztBQUVEQywwQkFBb0I7QUFDbEIsYUFBS0YsWUFBTDtBQUNBRyxlQUFPQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFLSixZQUF2QztBQUNEOztBQUVESyw2QkFBdUI7QUFDckJGLGVBQU9HLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDLEtBQUtOLFlBQTFDO0FBQ0Q7O0FBRURBLHFCQUFlO0FBQ2IsY0FBTU8sUUFBUUMsS0FBS0MsR0FBTCxDQUFTQyxTQUFTQyxlQUFULENBQXlCQyxXQUFsQyxFQUErQ1QsT0FBT1UsVUFBUCxJQUFxQixDQUFwRSxDQUFkO0FBQ0EsYUFBS0MsUUFBTCxDQUFjLEVBQUVmLFFBQVEsbUJBQVNnQixHQUFULENBQWFSLEtBQWIsQ0FBVixFQUFkO0FBQ0Q7O0FBRURTLGVBQVM7QUFDUCxlQUFPLDhCQUFDLFNBQUQsYUFBVyxRQUFRLEtBQUtsQixLQUFMLENBQVdDLE1BQTlCLElBQTBDLEtBQUtGLEtBQS9DLEVBQVA7QUFDRDtBQXpCd0QsS0FBM0Q7QUEyQkQsR0E1QkQ7O29CQThCZUosVyIsImZpbGUiOiJEZXZpY2VBd2FyZV9yZWYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHZpZXdwb3J0IGZyb20gJ0BzcmMvbW9kZWxzL3ZpZXdwb3J0L3ZpZXdwb3J0JztcblxuY29uc3QgRGV2aWNlQXdhcmUgPSBDb21wb25lbnQgPT4ge1xuICByZXR1cm4gY2xhc3MgX0RldmljZUF3YXJlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgZGV2aWNlOiAnJyxcbiAgICAgIH07XG4gICAgICB0aGlzLmhhbmRsZVJlc2l6ZSA9IHRoaXMuaGFuZGxlUmVzaXplLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLmhhbmRsZVJlc2l6ZSgpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XG4gICAgfVxuXG4gICAgaGFuZGxlUmVzaXplKCkge1xuICAgICAgY29uc3Qgd2lkdGggPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRldmljZTogdmlld3BvcnQuZ2V0KHdpZHRoKSB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gPENvbXBvbmVudCBkZXZpY2U9e3RoaXMuc3RhdGUuZGV2aWNlfSB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGV2aWNlQXdhcmU7XG4iXX0=