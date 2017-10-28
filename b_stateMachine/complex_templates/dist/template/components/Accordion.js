define(['exports', 'react', './ItemsList'], function (exports, _react, _ItemsList) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _ItemsList2 = _interopRequireDefault(_ItemsList);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    let Accordion = class Accordion extends _react2.default.Component {

        constructor(props) {
            let is_visible = typeof props.accordion_is_visible === 'undefined' ? false : props.accordion_is_visible;
            super(props);
            this.state = {
                is_visible
            };
        }

        render() {

            return _react2.default.createElement(
                AccordionParent,
                {
                    accordion_name: this.props.accordion_name,
                    accordion_visible: this.state.is_visible,
                    accordion_toggler: this.accordionToggler.bind(this) },
                _react2.default.createElement(
                    _ItemsList2.default,
                    {
                        containerCssClass: 'accordion_children' + (this.state.is_visible ? ' is_open' : ''),
                        items: this.props.accordion_children },
                    (child, index) => _react2.default.createElement(
                        'h2',
                        {
                            style: { cursor: 'pointer' },
                            key: index,
                            onClick: child.handler },
                        child.name || 'noname'
                    )
                )
            );
        }

        accordionToggler() {
            this.setState({ is_visible: !this.state.is_visible });
        }
    };


    function _accordionMapper(child, index) {
        return _react2.default.createElement(
            'h2',
            {
                style: { cursor: 'pointer' },
                key: index,
                onClick: child.handler },
            child.name || 'noname'
        );
    }

    let AccordionParent = class AccordionParent extends _react2.default.Component {
        render() {
            return _react2.default.createElement(
                'div',
                {
                    className: 'accordion_parent',
                    onClick: this.props.accordion_toggler },
                _react2.default.createElement(
                    'h3',
                    null,
                    this.props.accordion_name
                ),
                this.props.children
            );
        }
    };
    exports.default = Accordion;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC90ZW1wbGF0ZS9jb21wb25lbnRzL0FjY29yZGlvbi5qcyJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiaXNfdmlzaWJsZSIsImFjY29yZGlvbl9pc192aXNpYmxlIiwic3RhdGUiLCJyZW5kZXIiLCJhY2NvcmRpb25fbmFtZSIsImFjY29yZGlvblRvZ2dsZXIiLCJiaW5kIiwiYWNjb3JkaW9uX2NoaWxkcmVuIiwiY2hpbGQiLCJpbmRleCIsImN1cnNvciIsImhhbmRsZXIiLCJuYW1lIiwic2V0U3RhdGUiLCJfYWNjb3JkaW9uTWFwcGVyIiwiQWNjb3JkaW9uUGFyZW50IiwiYWNjb3JkaW9uX3RvZ2dsZXIiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFJTUEsUyxHQUFOLE1BQU1BLFNBQU4sU0FBd0IsZ0JBQU1DLFNBQTlCLENBQXdDOztBQUVwQ0Msb0JBQVlDLEtBQVosRUFBbUI7QUFDZixnQkFBSUMsYUFBYyxPQUFPRCxNQUFNRSxvQkFBYixLQUFzQyxXQUF0QyxHQUFvRCxLQUFwRCxHQUE0REYsTUFBTUUsb0JBQXBGO0FBQ0Esa0JBQU1GLEtBQU47QUFDQSxpQkFBS0csS0FBTCxHQUFhO0FBQ1RGO0FBRFMsYUFBYjtBQUdIOztBQUVERyxpQkFBUzs7QUFFTCxtQkFDSTtBQUFDLCtCQUFEO0FBQUE7QUFDSSxvQ0FBZ0IsS0FBS0osS0FBTCxDQUFXSyxjQUQvQjtBQUVJLHVDQUFtQixLQUFLRixLQUFMLENBQVdGLFVBRmxDO0FBR0ksdUNBQW1CLEtBQUtLLGdCQUFMLENBQXNCQyxJQUF0QixDQUEyQixJQUEzQixDQUh2QjtBQUlJO0FBQUE7QUFBQTtBQUNJLDJDQUFtQix3QkFDaEIsS0FBS0osS0FBTCxDQUFXRixVQUFYLEdBQXdCLFVBQXhCLEdBQXFDLEVBRHJCLENBRHZCO0FBR0ksK0JBQU8sS0FBS0QsS0FBTCxDQUFXUSxrQkFIdEI7QUFJSyxxQkFBQ0MsS0FBRCxFQUFRQyxLQUFSLEtBQWtCO0FBQUE7QUFBQTtBQUNmLG1DQUFPLEVBQUNDLFFBQVEsU0FBVCxFQURRO0FBRWYsaUNBQUtELEtBRlU7QUFHZixxQ0FBU0QsTUFBTUcsT0FIQTtBQUliSCw4QkFBTUksSUFBTixJQUFjO0FBSkQ7QUFKdkI7QUFKSixhQURKO0FBa0JIOztBQUVEUCwyQkFBbUI7QUFDZixpQkFBS1EsUUFBTCxDQUFjLEVBQUNiLFlBQVksQ0FBQyxLQUFLRSxLQUFMLENBQVdGLFVBQXpCLEVBQWQ7QUFDSDtBQWxDbUMsSzs7O0FBcUN4QyxhQUFTYyxnQkFBVCxDQUEwQk4sS0FBMUIsRUFBaUNDLEtBQWpDLEVBQXdDO0FBQ3BDLGVBQU87QUFBQTtBQUFBO0FBQ0gsdUJBQU8sRUFBQ0MsUUFBUSxTQUFULEVBREo7QUFFSCxxQkFBS0QsS0FGRjtBQUdILHlCQUFTRCxNQUFNRyxPQUhaO0FBSURILGtCQUFNSSxJQUFOLElBQWM7QUFKYixTQUFQO0FBTUg7O1FBRUtHLGUsR0FBTixNQUFNQSxlQUFOLFNBQThCLGdCQUFNbEIsU0FBcEMsQ0FBOEM7QUFDMUNNLGlCQUFTO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBO0FBQ0ksK0JBQVUsa0JBRGQ7QUFFSSw2QkFBUyxLQUFLSixLQUFMLENBQVdpQixpQkFGeEI7QUFHSTtBQUFBO0FBQUE7QUFBSyx5QkFBS2pCLEtBQUwsQ0FBV0s7QUFBaEIsaUJBSEo7QUFJSyxxQkFBS0wsS0FBTCxDQUFXa0I7QUFKaEIsYUFESjtBQVFIO0FBVnlDLEs7c0JBYS9CckIsUyIsImZpbGUiOiJBY2NvcmRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgSXRlbXNMaXN0IGZyb20gJy4vSXRlbXNMaXN0JztcblxuY2xhc3MgQWNjb3JkaW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIGxldCBpc192aXNpYmxlID0gKHR5cGVvZiBwcm9wcy5hY2NvcmRpb25faXNfdmlzaWJsZSA9PT0gJ3VuZGVmaW5lZCcgPyBmYWxzZSA6IHByb3BzLmFjY29yZGlvbl9pc192aXNpYmxlKTtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNfdmlzaWJsZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxBY2NvcmRpb25QYXJlbnRcbiAgICAgICAgICAgICAgICBhY2NvcmRpb25fbmFtZT17dGhpcy5wcm9wcy5hY2NvcmRpb25fbmFtZX1cbiAgICAgICAgICAgICAgICBhY2NvcmRpb25fdmlzaWJsZT17dGhpcy5zdGF0ZS5pc192aXNpYmxlfVxuICAgICAgICAgICAgICAgIGFjY29yZGlvbl90b2dnbGVyPXt0aGlzLmFjY29yZGlvblRvZ2dsZXIuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgPEl0ZW1zTGlzdFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJDc3NDbGFzcz17J2FjY29yZGlvbl9jaGlsZHJlbidcbiAgICAgICAgICAgICAgICAgICAgKyAodGhpcy5zdGF0ZS5pc192aXNpYmxlID8gJyBpc19vcGVuJyA6ICcnKX1cbiAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3RoaXMucHJvcHMuYWNjb3JkaW9uX2NoaWxkcmVufT5cbiAgICAgICAgICAgICAgICAgICAgeyhjaGlsZCwgaW5kZXgpID0+IDxoMlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJ319XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2hpbGQuaGFuZGxlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7KGNoaWxkLm5hbWUgfHwgJ25vbmFtZScpfVxuICAgICAgICAgICAgICAgICAgICA8L2gyPn1cbiAgICAgICAgICAgICAgICA8L0l0ZW1zTGlzdD5cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uUGFyZW50PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGFjY29yZGlvblRvZ2dsZXIoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzX3Zpc2libGU6ICF0aGlzLnN0YXRlLmlzX3Zpc2libGV9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIF9hY2NvcmRpb25NYXBwZXIoY2hpbGQsIGluZGV4KSB7XG4gICAgcmV0dXJuIDxoMlxuICAgICAgICBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX1cbiAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgb25DbGljaz17Y2hpbGQuaGFuZGxlcn0+XG4gICAgICAgIHsoY2hpbGQubmFtZSB8fCAnbm9uYW1lJyl9XG4gICAgPC9oMj47XG59XG5cbmNsYXNzIEFjY29yZGlvblBhcmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY29yZGlvbl9wYXJlbnRcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuYWNjb3JkaW9uX3RvZ2dsZXJ9PlxuICAgICAgICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5hY2NvcmRpb25fbmFtZX08L2gzPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247Il19