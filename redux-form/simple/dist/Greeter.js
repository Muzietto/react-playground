define(['exports', 'react', 'react-redux'], function (exports, _react, _reactRedux) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    const mapStateToProps = (state, ownProps) => {
        // form = reducer name in combineReducers (rootReducer.js)
        // contact = form name in reduxForm (ContactForm.js)
        let friendsData = state.form.contact ? state.form.contact.values : '';
        let bikesData = state.form.bike ? state.form.bike.values : '';
        let fieldArrayData = state.form.fieldArray ? state.form.fieldArray.values : '';

        let submittedFriendsData = state.submitted.contact ? state.submitted.contact.values : '';
        let submittedBikesData = state.submitted.bike ? state.form.bike.values : '';

        let salutatio = ownProps.preambolo + ', amico ';

        if (friendsData) {
            salutatio += friendsData.firstName + ' ' + friendsData.lastName;
        }

        if (bikesData) {
            salutatio += ' with a nice ' + bikesData.color + ' ' + bikesData.brand;
        }

        if (fieldArrayData) {
            let pairs = fieldArrayData.campoMatrice || [];
            salutatio += ' and traits {' + pairs.map(obj => {
                return obj.key + ':' + obj.value;
            }).join(', ') + '}';
        }

        return { salutatio };
    };

    let Greeter = class Greeter extends _react2.default.Component {
        // submit = values => {
        //     // print the form values to the console
        //     console.log(values);
        // };

        render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h3',
                    null,
                    'live view of state.form (managed by redux-form)'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    this.props.salutatio
                )
            );
        }
    };
    exports.default = (0, _reactRedux.connect)(mapStateToProps, () => ({}))(Greeter);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9HcmVldGVyLmpzIl0sIm5hbWVzIjpbIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwib3duUHJvcHMiLCJmcmllbmRzRGF0YSIsImZvcm0iLCJjb250YWN0IiwidmFsdWVzIiwiYmlrZXNEYXRhIiwiYmlrZSIsImZpZWxkQXJyYXlEYXRhIiwiZmllbGRBcnJheSIsInN1Ym1pdHRlZEZyaWVuZHNEYXRhIiwic3VibWl0dGVkIiwic3VibWl0dGVkQmlrZXNEYXRhIiwic2FsdXRhdGlvIiwicHJlYW1ib2xvIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJjb2xvciIsImJyYW5kIiwicGFpcnMiLCJjYW1wb01hdHJpY2UiLCJtYXAiLCJvYmoiLCJrZXkiLCJ2YWx1ZSIsImpvaW4iLCJHcmVldGVyIiwiQ29tcG9uZW50IiwicmVuZGVyIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFLQSxVQUFNQSxrQkFBa0IsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLEtBQXFCO0FBQ3pDO0FBQ0E7QUFDQSxZQUFJQyxjQUFjRixNQUFNRyxJQUFOLENBQVdDLE9BQVgsR0FDWkosTUFBTUcsSUFBTixDQUFXQyxPQUFYLENBQW1CQyxNQURQLEdBRVosRUFGTjtBQUdBLFlBQUlDLFlBQVlOLE1BQU1HLElBQU4sQ0FBV0ksSUFBWCxHQUNWUCxNQUFNRyxJQUFOLENBQVdJLElBQVgsQ0FBZ0JGLE1BRE4sR0FFVixFQUZOO0FBR0EsWUFBSUcsaUJBQWlCUixNQUFNRyxJQUFOLENBQVdNLFVBQVgsR0FDZlQsTUFBTUcsSUFBTixDQUFXTSxVQUFYLENBQXNCSixNQURQLEdBRWYsRUFGTjs7QUFJQSxZQUFJSyx1QkFBdUJWLE1BQU1XLFNBQU4sQ0FBZ0JQLE9BQWhCLEdBQ3JCSixNQUFNVyxTQUFOLENBQWdCUCxPQUFoQixDQUF3QkMsTUFESCxHQUVyQixFQUZOO0FBR0EsWUFBSU8scUJBQXFCWixNQUFNVyxTQUFOLENBQWdCSixJQUFoQixHQUNuQlAsTUFBTUcsSUFBTixDQUFXSSxJQUFYLENBQWdCRixNQURHLEdBRW5CLEVBRk47O0FBSUEsWUFBSVEsWUFBWVosU0FBU2EsU0FBVCxHQUFxQixVQUFyQzs7QUFFQSxZQUFJWixXQUFKLEVBQWlCO0FBQ2JXLHlCQUFjWCxZQUFZYSxTQUFaLEdBQXdCLEdBQXhCLEdBQ1piLFlBQVljLFFBRGQ7QUFFSDs7QUFFRCxZQUFJVixTQUFKLEVBQWU7QUFDWE8seUJBQWMsa0JBQ1pQLFVBQVVXLEtBREUsR0FDTSxHQUROLEdBRVpYLFVBQVVZLEtBRlo7QUFHSDs7QUFFRCxZQUFJVixjQUFKLEVBQW9CO0FBQ2hCLGdCQUFJVyxRQUFRWCxlQUFlWSxZQUFmLElBQStCLEVBQTNDO0FBQ0FQLHlCQUFhLGtCQUNQTSxNQUNERSxHQURDLENBQ0dDLE9BQU87QUFDUix1QkFBT0EsSUFBSUMsR0FBSixHQUFVLEdBQVYsR0FBZ0JELElBQUlFLEtBQTNCO0FBQ0gsYUFIQyxFQUlEQyxJQUpDLENBSUksSUFKSixDQURPLEdBS0ssR0FMbEI7QUFNSDs7QUFFRCxlQUFPLEVBQUNaLFNBQUQsRUFBUDtBQUNILEtBNUNEOztRQThDTWEsTyxHQUFOLE1BQU1BLE9BQU4sU0FBc0IsZ0JBQU1DLFNBQTVCLENBQXNDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBQyxpQkFBUztBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFFSTtBQUFBO0FBQUE7QUFBSSx5QkFBS0MsS0FBTCxDQUFXaEI7QUFBZjtBQUZKLGFBREo7QUFNSDtBQWJpQyxLO3NCQWdCdkIseUJBQVFkLGVBQVIsRUFBeUIsT0FBTyxFQUFQLENBQXpCLEVBQXFDMkIsT0FBckMsQyIsImZpbGUiOiJHcmVldGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICAvLyBmb3JtID0gcmVkdWNlciBuYW1lIGluIGNvbWJpbmVSZWR1Y2VycyAocm9vdFJlZHVjZXIuanMpXG4gICAgLy8gY29udGFjdCA9IGZvcm0gbmFtZSBpbiByZWR1eEZvcm0gKENvbnRhY3RGb3JtLmpzKVxuICAgIGxldCBmcmllbmRzRGF0YSA9IHN0YXRlLmZvcm0uY29udGFjdFxuICAgICAgICA/IHN0YXRlLmZvcm0uY29udGFjdC52YWx1ZXNcbiAgICAgICAgOiAnJztcbiAgICBsZXQgYmlrZXNEYXRhID0gc3RhdGUuZm9ybS5iaWtlXG4gICAgICAgID8gc3RhdGUuZm9ybS5iaWtlLnZhbHVlc1xuICAgICAgICA6ICcnO1xuICAgIGxldCBmaWVsZEFycmF5RGF0YSA9IHN0YXRlLmZvcm0uZmllbGRBcnJheVxuICAgICAgICA/IHN0YXRlLmZvcm0uZmllbGRBcnJheS52YWx1ZXNcbiAgICAgICAgOiAnJztcblxuICAgIGxldCBzdWJtaXR0ZWRGcmllbmRzRGF0YSA9IHN0YXRlLnN1Ym1pdHRlZC5jb250YWN0XG4gICAgICAgID8gc3RhdGUuc3VibWl0dGVkLmNvbnRhY3QudmFsdWVzXG4gICAgICAgIDogJyc7XG4gICAgbGV0IHN1Ym1pdHRlZEJpa2VzRGF0YSA9IHN0YXRlLnN1Ym1pdHRlZC5iaWtlXG4gICAgICAgID8gc3RhdGUuZm9ybS5iaWtlLnZhbHVlc1xuICAgICAgICA6ICcnO1xuXG4gICAgbGV0IHNhbHV0YXRpbyA9IG93blByb3BzLnByZWFtYm9sbyArICcsIGFtaWNvICc7XG5cbiAgICBpZiAoZnJpZW5kc0RhdGEpIHtcbiAgICAgICAgc2FsdXRhdGlvICs9IChmcmllbmRzRGF0YS5maXJzdE5hbWUgKyAnICdcbiAgICAgICAgKyBmcmllbmRzRGF0YS5sYXN0TmFtZSk7XG4gICAgfVxuXG4gICAgaWYgKGJpa2VzRGF0YSkge1xuICAgICAgICBzYWx1dGF0aW8gKz0gKCcgd2l0aCBhIG5pY2UgJ1xuICAgICAgICArIGJpa2VzRGF0YS5jb2xvciArICcgJ1xuICAgICAgICArIGJpa2VzRGF0YS5icmFuZCk7XG4gICAgfVxuXG4gICAgaWYgKGZpZWxkQXJyYXlEYXRhKSB7XG4gICAgICAgIGxldCBwYWlycyA9IGZpZWxkQXJyYXlEYXRhLmNhbXBvTWF0cmljZSB8fCBbXTtcbiAgICAgICAgc2FsdXRhdGlvICs9ICcgYW5kIHRyYWl0cyB7J1xuICAgICAgICAgICAgKyBwYWlyc1xuICAgICAgICAgICAgLm1hcChvYmogPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmoua2V5ICsgJzonICsgb2JqLnZhbHVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmpvaW4oJywgJykgKyAnfSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtzYWx1dGF0aW99O1xufTtcblxuY2xhc3MgR3JlZXRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgLy8gc3VibWl0ID0gdmFsdWVzID0+IHtcbiAgICAvLyAgICAgLy8gcHJpbnQgdGhlIGZvcm0gdmFsdWVzIHRvIHRoZSBjb25zb2xlXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XG4gICAgLy8gfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgzPmxpdmUgdmlldyBvZiBzdGF0ZS5mb3JtIChtYW5hZ2VkIGJ5IHJlZHV4LWZvcm0pPC9oMz5cbiAgICAgICAgICAgICAgICA8cD57dGhpcy5wcm9wcy5zYWx1dGF0aW99PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgKCkgPT4gKHt9KSkoR3JlZXRlcik7XG4iXX0=