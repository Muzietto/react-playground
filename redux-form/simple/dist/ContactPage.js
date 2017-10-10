define(['exports', 'react', './ContactForm', './BikeForm', './FieldArrayForm', './Jsone', './Greeter', './rootReducer', 'react-redux'], function (exports, _react, _ContactForm, _BikeForm, _FieldArrayForm, _Jsone, _Greeter, _rootReducer, _reactRedux) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _ContactForm2 = _interopRequireDefault(_ContactForm);

    var _BikeForm2 = _interopRequireDefault(_BikeForm);

    var _FieldArrayForm2 = _interopRequireDefault(_FieldArrayForm);

    var _Jsone2 = _interopRequireDefault(_Jsone);

    var _Greeter2 = _interopRequireDefault(_Greeter);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    const contactFormName = 'contact';
    const bikeFormName = 'bike';
    const fieldArrayFormName = 'fieldArray';

    const mapStateToProps = (state, ownProps) => {

        let submittedContactData = state.submitted.contact;
        let submittedBikeData = state.submitted.bike;
        let submittedFieldArrayData = state.submitted.fieldArray;

        return {
            submittedContactData,
            submittedBikeData,
            submittedFieldArrayData
        };
    };

    let { storeSubmittedData, resetSubmittedData } = _rootReducer.SubmitterActionCreators;

    let ContactPage = class ContactPage extends _react2.default.Component {
        constructor(...args) {
            var _temp;

            return _temp = super(...args), this.submit = formName => values => {
                _rootReducer.store.dispatch(storeSubmittedData(formName, values));
                console.log(formName, values);
            }, this.reset = formName => ev => {
                _rootReducer.store.dispatch(resetSubmittedData(formName));
            }, _temp;
        }

        render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(_ContactForm2.default, {
                        onSubmit: this.submit(contactFormName),
                        onReset: this.reset(contactFormName)
                    }),
                    _react2.default.createElement(_BikeForm2.default, {
                        onSubmit: this.submit(bikeFormName),
                        onReset: this.reset(bikeFormName)
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(_FieldArrayForm2.default, {
                        onSubmit: this.submit(fieldArrayFormName),
                        onReset: this.reset(fieldArrayFormName)
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'h3',
                        null,
                        'last submitted data'
                    ),
                    _react2.default.createElement(_Jsone2.default, {
                        form: 'contact',
                        text: this.props.submittedContactData
                    }),
                    _react2.default.createElement(_Jsone2.default, {
                        form: 'bike',
                        text: this.props.submittedBikeData
                    }),
                    _react2.default.createElement(_Jsone2.default, {
                        form: 'fieldArray',
                        text: this.props.submittedFieldArrayData
                    }),
                    _react2.default.createElement(_Greeter2.default, { preambolo: 'Ciaone' })
                )
            );
        }
    };
    exports.default = (0, _reactRedux.connect)(mapStateToProps, () => ({}))(ContactPage);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9Db250YWN0UGFnZS5qcyJdLCJuYW1lcyI6WyJjb250YWN0Rm9ybU5hbWUiLCJiaWtlRm9ybU5hbWUiLCJmaWVsZEFycmF5Rm9ybU5hbWUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwic3VibWl0dGVkQ29udGFjdERhdGEiLCJzdWJtaXR0ZWQiLCJjb250YWN0Iiwic3VibWl0dGVkQmlrZURhdGEiLCJiaWtlIiwic3VibWl0dGVkRmllbGRBcnJheURhdGEiLCJmaWVsZEFycmF5Iiwic3RvcmVTdWJtaXR0ZWREYXRhIiwicmVzZXRTdWJtaXR0ZWREYXRhIiwiQ29udGFjdFBhZ2UiLCJDb21wb25lbnQiLCJzdWJtaXQiLCJmb3JtTmFtZSIsInZhbHVlcyIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsInJlc2V0IiwiZXYiLCJyZW5kZXIiLCJwcm9wcyJdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQSxVQUFNQSxrQkFBa0IsU0FBeEI7QUFDQSxVQUFNQyxlQUFlLE1BQXJCO0FBQ0EsVUFBTUMscUJBQXFCLFlBQTNCOztBQUVBLFVBQU1DLGtCQUFrQixDQUFDQyxLQUFELEVBQVFDLFFBQVIsS0FBcUI7O0FBRXpDLFlBQUlDLHVCQUF1QkYsTUFBTUcsU0FBTixDQUFnQkMsT0FBM0M7QUFDQSxZQUFJQyxvQkFBb0JMLE1BQU1HLFNBQU4sQ0FBZ0JHLElBQXhDO0FBQ0EsWUFBSUMsMEJBQTBCUCxNQUFNRyxTQUFOLENBQWdCSyxVQUE5Qzs7QUFFQSxlQUFPO0FBQ0hOLGdDQURHO0FBRUhHLDZCQUZHO0FBR0hFO0FBSEcsU0FBUDtBQUtILEtBWEQ7O0FBYUEsUUFBSSxFQUFDRSxrQkFBRCxFQUFxQkMsa0JBQXJCLHlDQUFKOztRQUVNQyxXLEdBQU4sTUFBTUEsV0FBTixTQUEwQixnQkFBTUMsU0FBaEMsQ0FBMEM7QUFBQTtBQUFBOztBQUFBLGdEQUV0Q0MsTUFGc0MsR0FFN0JDLFlBQVlDLFVBQVU7QUFDM0IsbUNBQU1DLFFBQU4sQ0FBZVAsbUJBQW1CSyxRQUFuQixFQUE2QkMsTUFBN0IsQ0FBZjtBQUNBRSx3QkFBUUMsR0FBUixDQUFZSixRQUFaLEVBQXNCQyxNQUF0QjtBQUNILGFBTHFDLE9BT3RDSSxLQVBzQyxHQU85QkwsWUFBWU0sTUFBTTtBQUN0QixtQ0FBTUosUUFBTixDQUFlTixtQkFBbUJJLFFBQW5CLENBQWY7QUFDSCxhQVRxQztBQUFBOztBQVd0Q08saUJBQVM7QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxXQUFmO0FBQ0k7QUFDSSxrQ0FBVSxLQUFLUixNQUFMLENBQVlqQixlQUFaLENBRGQ7QUFFSSxpQ0FBUyxLQUFLdUIsS0FBTCxDQUFXdkIsZUFBWDtBQUZiLHNCQURKO0FBS0k7QUFDSSxrQ0FBVSxLQUFLaUIsTUFBTCxDQUFZaEIsWUFBWixDQURkO0FBRUksaUNBQVMsS0FBS3NCLEtBQUwsQ0FBV3RCLFlBQVg7QUFGYjtBQUxKLGlCQURKO0FBV0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsV0FBZjtBQUNJO0FBQ0ksa0NBQVUsS0FBS2dCLE1BQUwsQ0FBWWYsa0JBQVosQ0FEZDtBQUVJLGlDQUFTLEtBQUtxQixLQUFMLENBQVdyQixrQkFBWDtBQUZiO0FBREosaUJBWEo7QUFpQkk7QUFBQTtBQUFBLHNCQUFLLFdBQVUsV0FBZjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREo7QUFFSTtBQUNJLDhCQUFLLFNBRFQ7QUFFSSw4QkFBTSxLQUFLd0IsS0FBTCxDQUFXcEI7QUFGckIsc0JBRko7QUFNSTtBQUNJLDhCQUFLLE1BRFQ7QUFFSSw4QkFBTSxLQUFLb0IsS0FBTCxDQUFXakI7QUFGckIsc0JBTko7QUFVSTtBQUNJLDhCQUFLLFlBRFQ7QUFFSSw4QkFBTSxLQUFLaUIsS0FBTCxDQUFXZjtBQUZyQixzQkFWSjtBQWNJLHVFQUFTLFdBQVUsUUFBbkI7QUFkSjtBQWpCSixhQURKO0FBb0NIO0FBaERxQyxLO3NCQW1EM0IseUJBQVFSLGVBQVIsRUFBeUIsT0FBTyxFQUFQLENBQXpCLEVBQXFDWSxXQUFyQyxDIiwiZmlsZSI6IkNvbnRhY3RQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gJy4vQ29udGFjdEZvcm0nO1xuaW1wb3J0IEJpa2VGb3JtIGZyb20gJy4vQmlrZUZvcm0nO1xuaW1wb3J0IEZpZWxkQXJyYXlGb3JtIGZyb20gJy4vRmllbGRBcnJheUZvcm0nO1xuaW1wb3J0IEpzb25lIGZyb20gJy4vSnNvbmUnO1xuaW1wb3J0IEdyZWV0ZXIgZnJvbSAnLi9HcmVldGVyJztcbmltcG9ydCB7U3VibWl0dGVyQWN0aW9uQ3JlYXRvcnN9IGZyb20gJy4vcm9vdFJlZHVjZXInO1xuaW1wb3J0IHtzdG9yZX0gZnJvbSAnLi9yb290UmVkdWNlcic7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY29uc3QgY29udGFjdEZvcm1OYW1lID0gJ2NvbnRhY3QnO1xuY29uc3QgYmlrZUZvcm1OYW1lID0gJ2Jpa2UnO1xuY29uc3QgZmllbGRBcnJheUZvcm1OYW1lID0gJ2ZpZWxkQXJyYXknO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG5cbiAgICBsZXQgc3VibWl0dGVkQ29udGFjdERhdGEgPSBzdGF0ZS5zdWJtaXR0ZWQuY29udGFjdDtcbiAgICBsZXQgc3VibWl0dGVkQmlrZURhdGEgPSBzdGF0ZS5zdWJtaXR0ZWQuYmlrZTtcbiAgICBsZXQgc3VibWl0dGVkRmllbGRBcnJheURhdGEgPSBzdGF0ZS5zdWJtaXR0ZWQuZmllbGRBcnJheTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHN1Ym1pdHRlZENvbnRhY3REYXRhLFxuICAgICAgICBzdWJtaXR0ZWRCaWtlRGF0YSxcbiAgICAgICAgc3VibWl0dGVkRmllbGRBcnJheURhdGEsXG4gICAgfTtcbn07XG5cbmxldCB7c3RvcmVTdWJtaXR0ZWREYXRhLCByZXNldFN1Ym1pdHRlZERhdGF9ID0gU3VibWl0dGVyQWN0aW9uQ3JlYXRvcnM7XG5cbmNsYXNzIENvbnRhY3RQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHN1Ym1pdCA9IGZvcm1OYW1lID0+IHZhbHVlcyA9PiB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHN0b3JlU3VibWl0dGVkRGF0YShmb3JtTmFtZSwgdmFsdWVzKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm1OYW1lLCB2YWx1ZXMpO1xuICAgIH07XG5cbiAgICByZXNldCA9IGZvcm1OYW1lID0+IGV2ID0+IHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2gocmVzZXRTdWJtaXR0ZWREYXRhKGZvcm1OYW1lKSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRhY3RGb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5zdWJtaXQoY29udGFjdEZvcm1OYW1lKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVzZXQ9e3RoaXMucmVzZXQoY29udGFjdEZvcm1OYW1lKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJpa2VGb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5zdWJtaXQoYmlrZUZvcm1OYW1lKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVzZXQ9e3RoaXMucmVzZXQoYmlrZUZvcm1OYW1lKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGRBcnJheUZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLnN1Ym1pdChmaWVsZEFycmF5Rm9ybU5hbWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25SZXNldD17dGhpcy5yZXNldChmaWVsZEFycmF5Rm9ybU5hbWUpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5sYXN0IHN1Ym1pdHRlZCBkYXRhPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPEpzb25lXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtPVwiY29udGFjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXt0aGlzLnByb3BzLnN1Ym1pdHRlZENvbnRhY3REYXRhfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8SnNvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm09XCJiaWtlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e3RoaXMucHJvcHMuc3VibWl0dGVkQmlrZURhdGF9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxKc29uZVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybT1cImZpZWxkQXJyYXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17dGhpcy5wcm9wcy5zdWJtaXR0ZWRGaWVsZEFycmF5RGF0YX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEdyZWV0ZXIgcHJlYW1ib2xvPVwiQ2lhb25lXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgKCkgPT4gKHt9KSkoQ29udGFjdFBhZ2UpO1xuIl19