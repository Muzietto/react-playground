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
                _react2.default.createElement(_ItemsList2.default, {
                    containerCssClass: 'accordion_children' + (this.state.is_visible ? ' is_open' : ''),
                    items: this.props.accordion_children,
                    itemsMapper: _accordionMapper })
            );
        }

        accordionToggler() {
            this.setState({ is_visible: !this.state.is_visible });
        }
    };
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

    exports.default = Accordion;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC90ZW1wbGF0ZS9jb21wb25lbnRzL0FjY29yZGlvbi5qcyJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiaXNfdmlzaWJsZSIsImFjY29yZGlvbl9pc192aXNpYmxlIiwic3RhdGUiLCJyZW5kZXIiLCJhY2NvcmRpb25fbmFtZSIsImFjY29yZGlvblRvZ2dsZXIiLCJiaW5kIiwiYWNjb3JkaW9uX2NoaWxkcmVuIiwiX2FjY29yZGlvbk1hcHBlciIsInNldFN0YXRlIiwiQWNjb3JkaW9uUGFyZW50IiwiYWNjb3JkaW9uX3RvZ2dsZXIiLCJjaGlsZHJlbiIsImNoaWxkIiwiaW5kZXgiLCJjdXJzb3IiLCJoYW5kbGVyIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFJTUEsUyxHQUFOLE1BQU1BLFNBQU4sU0FBd0IsZ0JBQU1DLFNBQTlCLENBQXdDOztBQUVwQ0Msb0JBQVlDLEtBQVosRUFBbUI7QUFDZixnQkFBSUMsYUFBYyxPQUFPRCxNQUFNRSxvQkFBYixLQUFzQyxXQUF0QyxHQUFvRCxLQUFwRCxHQUE0REYsTUFBTUUsb0JBQXBGO0FBQ0Esa0JBQU1GLEtBQU47QUFDQSxpQkFBS0csS0FBTCxHQUFhO0FBQ1RGO0FBRFMsYUFBYjtBQUdIOztBQUVERyxpQkFBUzs7QUFFTCxtQkFDSTtBQUFDLCtCQUFEO0FBQUE7QUFDSSxvQ0FBZ0IsS0FBS0osS0FBTCxDQUFXSyxjQUQvQjtBQUVJLHVDQUFtQixLQUFLRixLQUFMLENBQVdGLFVBRmxDO0FBR0ksdUNBQW1CLEtBQUtLLGdCQUFMLENBQXNCQyxJQUF0QixDQUEyQixJQUEzQixDQUh2QjtBQUlJO0FBQ0ksdUNBQW1CLHdCQUNoQixLQUFLSixLQUFMLENBQVdGLFVBQVgsR0FBd0IsVUFBeEIsR0FBcUMsRUFEckIsQ0FEdkI7QUFHSSwyQkFBTyxLQUFLRCxLQUFMLENBQVdRLGtCQUh0QjtBQUlJLGlDQUFhQyxnQkFKakI7QUFKSixhQURKO0FBWUg7O0FBRURILDJCQUFtQjtBQUNmLGlCQUFLSSxRQUFMLENBQWMsRUFBQ1QsWUFBWSxDQUFDLEtBQUtFLEtBQUwsQ0FBV0YsVUFBekIsRUFBZDtBQUNIO0FBNUJtQyxLO1FBK0JsQ1UsZSxHQUFOLE1BQU1BLGVBQU4sU0FBOEIsZ0JBQU1iLFNBQXBDLENBQThDO0FBQzFDTSxpQkFBUztBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUNJLCtCQUFVLGtCQURkO0FBRUksNkJBQVMsS0FBS0osS0FBTCxDQUFXWSxpQkFGeEI7QUFHSTtBQUFBO0FBQUE7QUFBSyx5QkFBS1osS0FBTCxDQUFXSztBQUFoQixpQkFISjtBQUlLLHFCQUFLTCxLQUFMLENBQVdhO0FBSmhCLGFBREo7QUFRSDtBQVZ5QyxLOzs7QUFhOUMsYUFBU0osZ0JBQVQsQ0FBMEJLLEtBQTFCLEVBQWlDQyxLQUFqQyxFQUF3QztBQUNwQyxlQUFPO0FBQUE7QUFBQTtBQUNILHVCQUFPLEVBQUNDLFFBQVEsU0FBVCxFQURKO0FBRUgscUJBQUtELEtBRkY7QUFHSCx5QkFBU0QsTUFBTUcsT0FIWjtBQUlESCxrQkFBTUksSUFBTixJQUFjO0FBSmIsU0FBUDtBQU1IOztzQkFFY3JCLFMiLCJmaWxlIjoiQWNjb3JkaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEl0ZW1zTGlzdCBmcm9tICcuL0l0ZW1zTGlzdCc7XG5cbmNsYXNzIEFjY29yZGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBsZXQgaXNfdmlzaWJsZSA9ICh0eXBlb2YgcHJvcHMuYWNjb3JkaW9uX2lzX3Zpc2libGUgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBwcm9wcy5hY2NvcmRpb25faXNfdmlzaWJsZSk7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzX3Zpc2libGUsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QWNjb3JkaW9uUGFyZW50XG4gICAgICAgICAgICAgICAgYWNjb3JkaW9uX25hbWU9e3RoaXMucHJvcHMuYWNjb3JkaW9uX25hbWV9XG4gICAgICAgICAgICAgICAgYWNjb3JkaW9uX3Zpc2libGU9e3RoaXMuc3RhdGUuaXNfdmlzaWJsZX1cbiAgICAgICAgICAgICAgICBhY2NvcmRpb25fdG9nZ2xlcj17dGhpcy5hY2NvcmRpb25Ub2dnbGVyLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgIDxJdGVtc0xpc3RcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQ3NzQ2xhc3M9eydhY2NvcmRpb25fY2hpbGRyZW4nXG4gICAgICAgICAgICAgICAgICAgICsgKHRoaXMuc3RhdGUuaXNfdmlzaWJsZSA/ICcgaXNfb3BlbicgOiAnJyl9XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zPXt0aGlzLnByb3BzLmFjY29yZGlvbl9jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgaXRlbXNNYXBwZXI9e19hY2NvcmRpb25NYXBwZXJ9Lz5cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uUGFyZW50PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGFjY29yZGlvblRvZ2dsZXIoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzX3Zpc2libGU6ICF0aGlzLnN0YXRlLmlzX3Zpc2libGV9KTtcbiAgICB9XG59XG5cbmNsYXNzIEFjY29yZGlvblBhcmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY29yZGlvbl9wYXJlbnRcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuYWNjb3JkaW9uX3RvZ2dsZXJ9PlxuICAgICAgICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5hY2NvcmRpb25fbmFtZX08L2gzPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfYWNjb3JkaW9uTWFwcGVyKGNoaWxkLCBpbmRleCkge1xuICAgIHJldHVybiA8aDJcbiAgICAgICAgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJ319XG4gICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgIG9uQ2xpY2s9e2NoaWxkLmhhbmRsZXJ9PlxuICAgICAgICB7KGNoaWxkLm5hbWUgfHwgJ25vbmFtZScpfVxuICAgIDwvaDI+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247Il19