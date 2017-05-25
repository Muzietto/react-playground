define(['exports', 'redux', 'reducers/mainReducer', 'middleware/parseIntMiddleware'], function (exports, _redux, _mainReducer, _parseIntMiddleware) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.store = undefined;

  var _parseIntMiddleware2 = _interopRequireDefault(_parseIntMiddleware);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // resolved with Babel plugin inline-json-import
  //import initialState from '../initialState.json';

  var initialState = {
    users: [{ name: 'Armando', id: 1 }, { name: 'Bruno', id: 2 }, { name: 'Carlo', id: 3 }, { name: 'Daniele', id: 4 }],
    groups: [{ name: 'Music', id: 1 }, { name: 'Dance', id: 2 }, { name: 'Jogging', id: 3 }, { name: 'Cycling', id: 4 }],
    user_group: {
      0: [],
      1: [1, 2],
      2: [],
      3: [3],
      4: [1, 4]
    },
    group_user: {
      0: [],
      1: [1, 4],
      2: [1],
      3: [3],
      4: [4]
    },
    group_no_user: {
      0: [],
      1: [2, 3],
      2: [2, 3, 4],
      3: [1, 2, 4],
      4: [1, 2, 3]
    },
    mappers: {}
  };

  initialState.mappers.userFromId = function (userId) {
    var user = this.users.find(u => u.id == userId);
    return Object.assign({}, user);
  }.bind(initialState);

  const store = (0, _redux.createStore)(_mainReducer.mainReducer, initialState, (0, _redux.applyMiddleware)(_parseIntMiddleware2.default));

  exports.store = store;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9pbml0U3RvcmUuanN4Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInVzZXJzIiwibmFtZSIsImlkIiwiZ3JvdXBzIiwidXNlcl9ncm91cCIsImdyb3VwX3VzZXIiLCJncm91cF9ub191c2VyIiwibWFwcGVycyIsInVzZXJGcm9tSWQiLCJ1c2VySWQiLCJ1c2VyIiwiZmluZCIsInUiLCJPYmplY3QiLCJhc3NpZ24iLCJiaW5kIiwic3RvcmUiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTs7QUFFQSxNQUFJQSxlQUFlO0FBQ2pCQyxXQUFPLENBQ0wsRUFBQ0MsTUFBTSxTQUFQLEVBQWtCQyxJQUFJLENBQXRCLEVBREssRUFFTCxFQUFDRCxNQUFNLE9BQVAsRUFBZ0JDLElBQUksQ0FBcEIsRUFGSyxFQUdMLEVBQUNELE1BQU0sT0FBUCxFQUFnQkMsSUFBSSxDQUFwQixFQUhLLEVBSUwsRUFBQ0QsTUFBTSxTQUFQLEVBQWtCQyxJQUFJLENBQXRCLEVBSkssQ0FEVTtBQU9qQkMsWUFBUSxDQUNOLEVBQUNGLE1BQU0sT0FBUCxFQUFnQkMsSUFBSSxDQUFwQixFQURNLEVBRU4sRUFBQ0QsTUFBTSxPQUFQLEVBQWdCQyxJQUFJLENBQXBCLEVBRk0sRUFHTixFQUFDRCxNQUFNLFNBQVAsRUFBa0JDLElBQUksQ0FBdEIsRUFITSxFQUlOLEVBQUNELE1BQU0sU0FBUCxFQUFrQkMsSUFBSSxDQUF0QixFQUpNLENBUFM7QUFhakJFLGdCQUFZO0FBQ1YsU0FBRyxFQURPO0FBRVYsU0FBRyxDQUFDLENBQUQsRUFBRyxDQUFILENBRk87QUFHVixTQUFHLEVBSE87QUFJVixTQUFHLENBQUMsQ0FBRCxDQUpPO0FBS1YsU0FBRyxDQUFDLENBQUQsRUFBRyxDQUFIO0FBTE8sS0FiSztBQW9CakJDLGdCQUFZO0FBQ1YsU0FBRyxFQURPO0FBRVYsU0FBRyxDQUFDLENBQUQsRUFBRyxDQUFILENBRk87QUFHVixTQUFHLENBQUMsQ0FBRCxDQUhPO0FBSVYsU0FBRyxDQUFDLENBQUQsQ0FKTztBQUtWLFNBQUcsQ0FBQyxDQUFEO0FBTE8sS0FwQks7QUEyQmpCQyxtQkFBZTtBQUNiLFNBQUcsRUFEVTtBQUViLFNBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUZVO0FBR2IsU0FBRyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDQUhVO0FBSWIsU0FBRyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDQUpVO0FBS2IsU0FBRyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTDtBQUxVLEtBM0JFO0FBa0NqQkMsYUFBUztBQWxDUSxHQUFuQjs7QUFxQ0FSLGVBQWFRLE9BQWIsQ0FBcUJDLFVBQXJCLEdBQW1DLFVBQVNDLE1BQVQsRUFBaUI7QUFDbEQsUUFBSUMsT0FBTyxLQUFLVixLQUFMLENBQVdXLElBQVgsQ0FBZ0JDLEtBQU1BLEVBQUVWLEVBQUYsSUFBUU8sTUFBOUIsQ0FBWDtBQUNBLFdBQU9JLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCSixJQUFsQixDQUFQO0FBQ0QsR0FIaUMsQ0FHL0JLLElBSCtCLENBRzFCaEIsWUFIMEIsQ0FBbEM7O0FBS0EsUUFBTWlCLFFBQVEsa0RBQXlCakIsWUFBekIsRUFBdUMseURBQXZDLENBQWQ7O1VBRVNpQixLLEdBQUFBLEsiLCJmaWxlIjoiaW5pdFN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgbWFpblJlZHVjZXIgfSBmcm9tICdyZWR1Y2Vycy9tYWluUmVkdWNlcidcclxuaW1wb3J0IHBhcnNlSW50TWlkZGxld2FyZSBmcm9tICdtaWRkbGV3YXJlL3BhcnNlSW50TWlkZGxld2FyZSc7XHJcbi8vIHJlc29sdmVkIHdpdGggQmFiZWwgcGx1Z2luIGlubGluZS1qc29uLWltcG9ydFxyXG4vL2ltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi4vaW5pdGlhbFN0YXRlLmpzb24nO1xyXG5cclxudmFyIGluaXRpYWxTdGF0ZSA9IHtcclxuICB1c2VyczogW1xyXG4gICAge25hbWU6ICdBcm1hbmRvJywgaWQ6IDF9LFxyXG4gICAge25hbWU6ICdCcnVubycsIGlkOiAyfSxcclxuICAgIHtuYW1lOiAnQ2FybG8nLCBpZDogM30sXHJcbiAgICB7bmFtZTogJ0RhbmllbGUnLCBpZDogNH0sXHJcbiAgXSxcclxuICBncm91cHM6IFtcclxuICAgIHtuYW1lOiAnTXVzaWMnLCBpZDogMX0sXHJcbiAgICB7bmFtZTogJ0RhbmNlJywgaWQ6IDJ9LFxyXG4gICAge25hbWU6ICdKb2dnaW5nJywgaWQ6IDN9LFxyXG4gICAge25hbWU6ICdDeWNsaW5nJywgaWQ6IDR9LFxyXG4gIF0sXHJcbiAgdXNlcl9ncm91cDoge1xyXG4gICAgMDogW10sXHJcbiAgICAxOiBbMSwyXSxcclxuICAgIDI6IFtdLFxyXG4gICAgMzogWzNdLFxyXG4gICAgNDogWzEsNF1cclxuICB9LFxyXG4gIGdyb3VwX3VzZXI6IHtcclxuICAgIDA6IFtdLFxyXG4gICAgMTogWzEsNF0sXHJcbiAgICAyOiBbMV0sXHJcbiAgICAzOiBbM10sXHJcbiAgICA0OiBbNF1cclxuICB9LFxyXG4gIGdyb3VwX25vX3VzZXI6IHtcclxuICAgIDA6IFtdLFxyXG4gICAgMTogWzIsM10sXHJcbiAgICAyOiBbMiwzLDRdLFxyXG4gICAgMzogWzEsMiw0XSxcclxuICAgIDQ6IFsxLDIsM11cclxuICB9LFxyXG4gIG1hcHBlcnM6IHt9LFxyXG59O1xyXG5cclxuaW5pdGlhbFN0YXRlLm1hcHBlcnMudXNlckZyb21JZCA9IChmdW5jdGlvbih1c2VySWQpIHtcclxuICB2YXIgdXNlciA9IHRoaXMudXNlcnMuZmluZCh1ID0+ICh1LmlkID09IHVzZXJJZCkpO1xyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB1c2VyKTtcclxufSkuYmluZChpbml0aWFsU3RhdGUpO1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShtYWluUmVkdWNlciwgaW5pdGlhbFN0YXRlLCBhcHBseU1pZGRsZXdhcmUocGFyc2VJbnRNaWRkbGV3YXJlKSk7XHJcblxyXG5leHBvcnQgeyBzdG9yZSB9OyJdfQ==