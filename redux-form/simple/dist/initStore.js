define(['exports', 'redux', 'reducers/mainReducer', 'middleware/parseIntMiddleware', 'middleware/entityAdderValidatingMiddleware', 'middleware/entityDeleteValidatingMiddleware'], function (exports, _redux, _mainReducer, _parseIntMiddleware, _entityAdderValidatingMiddleware, _entityDeleteValidatingMiddleware) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.store = undefined;

  var _parseIntMiddleware2 = _interopRequireDefault(_parseIntMiddleware);

  var _entityAdderValidatingMiddleware2 = _interopRequireDefault(_entityAdderValidatingMiddleware);

  var _entityDeleteValidatingMiddleware2 = _interopRequireDefault(_entityDeleteValidatingMiddleware);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // resolved with Babel plugin inline-json-import
  //import initialState from '../initialState.json';

  var initialState = {
    users: [{ name: 'Armando Trovajoli', id: 1 }, { name: 'Bruno Carducci', id: 2 }, { name: 'Carlo Pedersoli', id: 3 }, { name: 'Daniele Luchetta', id: 4 }],
    groups: [{ name: 'Classical Music', id: 1 }, { name: 'Modern Dance', id: 2 }, { name: 'Jogging', id: 3 }, { name: 'Cycling', id: 4 }],
    user_group: {
      0: [],
      1: [1, 2],
      2: [],
      3: [],
      4: [1, 4]
    },
    group_user: {
      0: [],
      1: [1, 4],
      2: [1],
      3: [],
      4: [4]
    },
    group_no_user: {
      0: [],
      1: [2, 3],
      2: [2, 3, 4],
      3: [1, 2, 3, 4],
      4: [1, 2, 3]
    },
    mappers: {}
  };

  initialState.mappers.userFromId = function (userId) {
    var user = this.users.find(u => u.id == userId);
    return Object.assign({}, user);
  }.bind(initialState);

  const store = (0, _redux.createStore)(_mainReducer.mainReducer, initialState, (0, _redux.applyMiddleware)(_parseIntMiddleware2.default, _entityAdderValidatingMiddleware2.default, _entityDeleteValidatingMiddleware2.default));

  exports.store = store;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9pbml0U3RvcmUuanN4Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInVzZXJzIiwibmFtZSIsImlkIiwiZ3JvdXBzIiwidXNlcl9ncm91cCIsImdyb3VwX3VzZXIiLCJncm91cF9ub191c2VyIiwibWFwcGVycyIsInVzZXJGcm9tSWQiLCJ1c2VySWQiLCJ1c2VyIiwiZmluZCIsInUiLCJPYmplY3QiLCJhc3NpZ24iLCJiaW5kIiwic3RvcmUiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9BO0FBQ0E7O0FBRUEsTUFBSUEsZUFBZTtBQUNqQkMsV0FBTyxDQUNMLEVBQUNDLE1BQU0sbUJBQVAsRUFBNEJDLElBQUksQ0FBaEMsRUFESyxFQUVMLEVBQUNELE1BQU0sZ0JBQVAsRUFBeUJDLElBQUksQ0FBN0IsRUFGSyxFQUdMLEVBQUNELE1BQU0saUJBQVAsRUFBMEJDLElBQUksQ0FBOUIsRUFISyxFQUlMLEVBQUNELE1BQU0sa0JBQVAsRUFBMkJDLElBQUksQ0FBL0IsRUFKSyxDQURVO0FBT2pCQyxZQUFRLENBQ04sRUFBQ0YsTUFBTSxpQkFBUCxFQUEwQkMsSUFBSSxDQUE5QixFQURNLEVBRU4sRUFBQ0QsTUFBTSxjQUFQLEVBQXVCQyxJQUFJLENBQTNCLEVBRk0sRUFHTixFQUFDRCxNQUFNLFNBQVAsRUFBa0JDLElBQUksQ0FBdEIsRUFITSxFQUlOLEVBQUNELE1BQU0sU0FBUCxFQUFrQkMsSUFBSSxDQUF0QixFQUpNLENBUFM7QUFhakJFLGdCQUFZO0FBQ1YsU0FBRyxFQURPO0FBRVYsU0FBRyxDQUFDLENBQUQsRUFBRyxDQUFILENBRk87QUFHVixTQUFHLEVBSE87QUFJVixTQUFHLEVBSk87QUFLVixTQUFHLENBQUMsQ0FBRCxFQUFHLENBQUg7QUFMTyxLQWJLO0FBb0JqQkMsZ0JBQVk7QUFDVixTQUFHLEVBRE87QUFFVixTQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FGTztBQUdWLFNBQUcsQ0FBQyxDQUFELENBSE87QUFJVixTQUFHLEVBSk87QUFLVixTQUFHLENBQUMsQ0FBRDtBQUxPLEtBcEJLO0FBMkJqQkMsbUJBQWU7QUFDYixTQUFHLEVBRFU7QUFFYixTQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FGVTtBQUdiLFNBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FIVTtBQUliLFNBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLENBSlU7QUFLYixTQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMO0FBTFUsS0EzQkU7QUFrQ2pCQyxhQUFTO0FBbENRLEdBQW5COztBQXFDQVIsZUFBYVEsT0FBYixDQUFxQkMsVUFBckIsR0FBbUMsVUFBU0MsTUFBVCxFQUFpQjtBQUNsRCxRQUFJQyxPQUFPLEtBQUtWLEtBQUwsQ0FBV1csSUFBWCxDQUFnQkMsS0FBTUEsRUFBRVYsRUFBRixJQUFRTyxNQUE5QixDQUFYO0FBQ0EsV0FBT0ksT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JKLElBQWxCLENBQVA7QUFDRCxHQUhpQyxDQUcvQkssSUFIK0IsQ0FHMUJoQixZQUgwQixDQUFsQzs7QUFLQSxRQUFNaUIsUUFBUSxrREFBeUJqQixZQUF6QixFQUF1QyxnSkFBdkMsQ0FBZDs7VUFLU2lCLEssR0FBQUEsSyIsImZpbGUiOiJpbml0U3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBtYWluUmVkdWNlciB9IGZyb20gJ3JlZHVjZXJzL21haW5SZWR1Y2VyJ1xuaW1wb3J0IHBhcnNlSW50TWlkZGxld2FyZSBmcm9tICdtaWRkbGV3YXJlL3BhcnNlSW50TWlkZGxld2FyZSc7XG5pbXBvcnQgZW50aXR5QWRkZXJWYWxpZGF0aW5nTWlkZGxld2FyZSBmcm9tICdtaWRkbGV3YXJlL2VudGl0eUFkZGVyVmFsaWRhdGluZ01pZGRsZXdhcmUnO1xuaW1wb3J0IGVudGl0eURlbGV0ZVZhbGlkYXRpbmdNaWRkbGV3YXJlIGZyb20gJ21pZGRsZXdhcmUvZW50aXR5RGVsZXRlVmFsaWRhdGluZ01pZGRsZXdhcmUnO1xuLy8gcmVzb2x2ZWQgd2l0aCBCYWJlbCBwbHVnaW4gaW5saW5lLWpzb24taW1wb3J0XG4vL2ltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi4vaW5pdGlhbFN0YXRlLmpzb24nO1xuXG52YXIgaW5pdGlhbFN0YXRlID0ge1xuICB1c2VyczogW1xuICAgIHtuYW1lOiAnQXJtYW5kbyBUcm92YWpvbGknLCBpZDogMX0sXG4gICAge25hbWU6ICdCcnVubyBDYXJkdWNjaScsIGlkOiAyfSxcbiAgICB7bmFtZTogJ0NhcmxvIFBlZGVyc29saScsIGlkOiAzfSxcbiAgICB7bmFtZTogJ0RhbmllbGUgTHVjaGV0dGEnLCBpZDogNH0sXG4gIF0sXG4gIGdyb3VwczogW1xuICAgIHtuYW1lOiAnQ2xhc3NpY2FsIE11c2ljJywgaWQ6IDF9LFxuICAgIHtuYW1lOiAnTW9kZXJuIERhbmNlJywgaWQ6IDJ9LFxuICAgIHtuYW1lOiAnSm9nZ2luZycsIGlkOiAzfSxcbiAgICB7bmFtZTogJ0N5Y2xpbmcnLCBpZDogNH0sXG4gIF0sXG4gIHVzZXJfZ3JvdXA6IHtcbiAgICAwOiBbXSxcbiAgICAxOiBbMSwyXSxcbiAgICAyOiBbXSxcbiAgICAzOiBbXSxcbiAgICA0OiBbMSw0XVxuICB9LFxuICBncm91cF91c2VyOiB7XG4gICAgMDogW10sXG4gICAgMTogWzEsNF0sXG4gICAgMjogWzFdLFxuICAgIDM6IFtdLFxuICAgIDQ6IFs0XVxuICB9LFxuICBncm91cF9ub191c2VyOiB7XG4gICAgMDogW10sXG4gICAgMTogWzIsM10sXG4gICAgMjogWzIsMyw0XSxcbiAgICAzOiBbMSwyLDMsNF0sXG4gICAgNDogWzEsMiwzXVxuICB9LFxuICBtYXBwZXJzOiB7fSxcbn07XG5cbmluaXRpYWxTdGF0ZS5tYXBwZXJzLnVzZXJGcm9tSWQgPSAoZnVuY3Rpb24odXNlcklkKSB7XG4gIHZhciB1c2VyID0gdGhpcy51c2Vycy5maW5kKHUgPT4gKHUuaWQgPT0gdXNlcklkKSk7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB1c2VyKTtcbn0pLmJpbmQoaW5pdGlhbFN0YXRlKTtcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShtYWluUmVkdWNlciwgaW5pdGlhbFN0YXRlLCBhcHBseU1pZGRsZXdhcmUoXG4gIHBhcnNlSW50TWlkZGxld2FyZSxcbiAgZW50aXR5QWRkZXJWYWxpZGF0aW5nTWlkZGxld2FyZSxcbiAgZW50aXR5RGVsZXRlVmFsaWRhdGluZ01pZGRsZXdhcmUpKTtcblxuZXhwb3J0IHsgc3RvcmUgfTsiXX0=