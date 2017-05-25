define(['exports', 'redux', 'reducers/mainReducer'], function (exports, _redux, _mainReducer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.store = undefined;

  // resolved with Babel plugin inline-json-import
  //import initialState from '../initialState.json';

  const initialState = {
    users: [{ name: 'Armando', id: 1 }, { name: 'Bruno', id: 2 }, { name: 'Carlo', id: 3 }, { name: 'Daniele', id: 4 }],
    nicknames: {
      1: 'Dando',
      2: 'Uno',
      3: 'Cacio',
      4: 'Dany',
      5: 'Elo'
    },
    selecteds: [{ name: 'Eleuterio', id: 5 }],
    mappers: {}
  };

  initialState.mappers.testMapper = function (user) {
    return Object.assign({}, user, { name: user.name + this.nicknames[user.id] });
  }.bind(initialState);

  const store = (0, _redux.createStore)(_mainReducer.mainReducer, initialState);

  exports.store = store;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9pbml0U3RvcmUuanN4Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInVzZXJzIiwibmFtZSIsImlkIiwibmlja25hbWVzIiwic2VsZWN0ZWRzIiwibWFwcGVycyIsInRlc3RNYXBwZXIiLCJ1c2VyIiwiT2JqZWN0IiwiYXNzaWduIiwiYmluZCIsInN0b3JlIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7QUFJQTtBQUNBOztBQUVBLFFBQU1BLGVBQWU7QUFDbkJDLFdBQU8sQ0FDTCxFQUFDQyxNQUFNLFNBQVAsRUFBa0JDLElBQUksQ0FBdEIsRUFESyxFQUVMLEVBQUNELE1BQU0sT0FBUCxFQUFnQkMsSUFBSSxDQUFwQixFQUZLLEVBR0wsRUFBQ0QsTUFBTSxPQUFQLEVBQWdCQyxJQUFJLENBQXBCLEVBSEssRUFJTCxFQUFDRCxNQUFNLFNBQVAsRUFBa0JDLElBQUksQ0FBdEIsRUFKSyxDQURZO0FBT25CQyxlQUFXO0FBQ1QsU0FBRyxPQURNO0FBRVQsU0FBRyxLQUZNO0FBR1QsU0FBRyxPQUhNO0FBSVQsU0FBRyxNQUpNO0FBS1QsU0FBRztBQUxNLEtBUFE7QUFjbkJDLGVBQVcsQ0FBQyxFQUFDSCxNQUFNLFdBQVAsRUFBb0JDLElBQUksQ0FBeEIsRUFBRCxDQWRRO0FBZW5CRyxhQUFTO0FBZlUsR0FBckI7O0FBa0JBTixlQUFhTSxPQUFiLENBQXFCQyxVQUFyQixHQUFtQyxVQUFTQyxJQUFULEVBQWU7QUFDaEQsV0FBT0MsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JGLElBQWxCLEVBQXdCLEVBQUNOLE1BQUtNLEtBQUtOLElBQUwsR0FBWSxLQUFLRSxTQUFMLENBQWVJLEtBQUtMLEVBQXBCLENBQWxCLEVBQXhCLENBQVA7QUFDRCxHQUZpQyxDQUUvQlEsSUFGK0IsQ0FFMUJYLFlBRjBCLENBQWxDOztBQUlBLFFBQU1ZLFFBQVEsa0RBQXlCWixZQUF6QixDQUFkOztVQUVTWSxLLEdBQUFBLEsiLCJmaWxlIjoiaW5pdFN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHsgbWFpblJlZHVjZXIgfSBmcm9tICdyZWR1Y2Vycy9tYWluUmVkdWNlcidcclxuLy8gcmVzb2x2ZWQgd2l0aCBCYWJlbCBwbHVnaW4gaW5saW5lLWpzb24taW1wb3J0XHJcbi8vaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuLi9pbml0aWFsU3RhdGUuanNvbic7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgdXNlcnM6IFtcclxuICAgIHtuYW1lOiAnQXJtYW5kbycsIGlkOiAxfSxcclxuICAgIHtuYW1lOiAnQnJ1bm8nLCBpZDogMn0sXHJcbiAgICB7bmFtZTogJ0NhcmxvJywgaWQ6IDN9LFxyXG4gICAge25hbWU6ICdEYW5pZWxlJywgaWQ6IDR9LFxyXG4gIF0sXHJcbiAgbmlja25hbWVzOiB7XHJcbiAgICAxOiAnRGFuZG8nLFxyXG4gICAgMjogJ1VubycsXHJcbiAgICAzOiAnQ2FjaW8nLFxyXG4gICAgNDogJ0RhbnknLFxyXG4gICAgNTogJ0VsbycsXHJcbiAgfSxcclxuICBzZWxlY3RlZHM6IFt7bmFtZTogJ0VsZXV0ZXJpbycsIGlkOiA1fV0sXHJcbiAgbWFwcGVyczoge31cclxufTtcclxuXHJcbmluaXRpYWxTdGF0ZS5tYXBwZXJzLnRlc3RNYXBwZXIgPSAoZnVuY3Rpb24odXNlcikge1xyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB1c2VyLCB7bmFtZTp1c2VyLm5hbWUgKyB0aGlzLm5pY2tuYW1lc1t1c2VyLmlkXX0pO1xyXG59KS5iaW5kKGluaXRpYWxTdGF0ZSk7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKG1haW5SZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG5cclxuZXhwb3J0IHsgc3RvcmUgfTsiXX0=