define(['exports', 'react', './MediaQueryContext', './viewportModel', './Granpa'], function (exports, _react, _MediaQueryContext, _viewportModel, _Granpa) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _MediaQueryContext2 = _interopRequireDefault(_MediaQueryContext);

  var _viewportModel2 = _interopRequireDefault(_viewportModel);

  var _Granpa2 = _interopRequireDefault(_Granpa);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  let Provider = class Provider extends _react2.default.Component {
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
      this.setState({ device: _viewportModel2.default.get(width) });
    }

    render() {
      return _react2.default.createElement(
        _MediaQueryContext2.default.Provider,
        { value: this.state.device },
        this.props.children
      );
    }
  };
  exports.default = Provider;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9Qcm92aWRlci5qcyJdLCJuYW1lcyI6WyJQcm92aWRlciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImRldmljZSIsImhhbmRsZVJlc2l6ZSIsImJpbmQiLCJjb21wb25lbnREaWRNb3VudCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ3aWR0aCIsIk1hdGgiLCJtYXgiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiaW5uZXJXaWR0aCIsInNldFN0YXRlIiwiZ2V0IiwicmVuZGVyIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUtNQSxRLEdBQU4sTUFBTUEsUUFBTixTQUF1QixnQkFBTUMsU0FBN0IsQ0FBdUM7QUFDckNDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFlBQU1BLEtBQU47QUFDQSxXQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVE7QUFERyxPQUFiO0FBR0EsV0FBS0MsWUFBTCxHQUFvQixLQUFLQSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFwQjtBQUNEOztBQUVEQyx3QkFBb0I7QUFDbEIsV0FBS0YsWUFBTDtBQUNBRyxhQUFPQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFLSixZQUF2QztBQUNEOztBQUVESywyQkFBdUI7QUFDckJGLGFBQU9HLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDLEtBQUtOLFlBQTFDO0FBQ0Q7O0FBRURBLG1CQUFlO0FBQ2IsWUFBTU8sUUFBUUMsS0FBS0MsR0FBTCxDQUFTQyxTQUFTQyxlQUFULENBQXlCQyxXQUFsQyxFQUErQ1QsT0FBT1UsVUFBUCxJQUFxQixDQUFwRSxDQUFkO0FBQ0EsV0FBS0MsUUFBTCxDQUFjLEVBQUVmLFFBQVEsd0JBQVNnQixHQUFULENBQWFSLEtBQWIsQ0FBVixFQUFkO0FBQ0Q7O0FBRURTLGFBQVM7QUFDUCxhQUNFO0FBQUEsb0NBQW1CLFFBQW5CO0FBQUEsVUFBNEIsT0FBTyxLQUFLbEIsS0FBTCxDQUFXQyxNQUE5QztBQUNHLGFBQUtGLEtBQUwsQ0FBV29CO0FBRGQsT0FERjtBQUtEO0FBN0JvQyxHO29CQWdDeEJ2QixRIiwiZmlsZSI6IlByb3ZpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNZWRpYVF1ZXJ5Q29udGV4dCBmcm9tICcuL01lZGlhUXVlcnlDb250ZXh0JztcbmltcG9ydCB2aWV3cG9ydCBmcm9tICcuL3ZpZXdwb3J0TW9kZWwnO1xuaW1wb3J0IEdyYW5wYSBmcm9tICcuL0dyYW5wYSc7XG5cbmNsYXNzIFByb3ZpZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRldmljZTogJycsXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZVJlc2l6ZSA9IHRoaXMuaGFuZGxlUmVzaXplLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmhhbmRsZVJlc2l6ZSgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpO1xuICB9XG5cbiAgaGFuZGxlUmVzaXplKCkge1xuICAgIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGV2aWNlOiB2aWV3cG9ydC5nZXQod2lkdGgpIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TWVkaWFRdWVyeUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3RoaXMuc3RhdGUuZGV2aWNlfT5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L01lZGlhUXVlcnlDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvdmlkZXI7XG4iXX0=