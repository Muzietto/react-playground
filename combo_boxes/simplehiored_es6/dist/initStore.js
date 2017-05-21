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
      4: 'Dany'
    },
    selecteds: [],
    mappers: {}
  };

  initialState.mappers.testMapper = function (user) {
    return Object.assign({}, user, { name: user.name + this.nicknames[user.id] });
  }.bind(initialState);

  const store = (0, _redux.createStore)(_mainReducer.mainReducer, initialState);

  exports.store = store;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9pbml0U3RvcmUuanN4Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInVzZXJzIiwibmFtZSIsImlkIiwibmlja25hbWVzIiwic2VsZWN0ZWRzIiwibWFwcGVycyIsInRlc3RNYXBwZXIiLCJ1c2VyIiwiT2JqZWN0IiwiYXNzaWduIiwiYmluZCIsInN0b3JlIl0sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7QUFJQTtBQUNBOztBQUVBLFFBQU1BLGVBQWU7QUFDbkJDLFdBQU8sQ0FDTCxFQUFDQyxNQUFNLFNBQVAsRUFBa0JDLElBQUksQ0FBdEIsRUFESyxFQUVMLEVBQUNELE1BQU0sT0FBUCxFQUFnQkMsSUFBSSxDQUFwQixFQUZLLEVBR0wsRUFBQ0QsTUFBTSxPQUFQLEVBQWdCQyxJQUFJLENBQXBCLEVBSEssRUFJTCxFQUFDRCxNQUFNLFNBQVAsRUFBa0JDLElBQUksQ0FBdEIsRUFKSyxDQURZO0FBT25CQyxlQUFXO0FBQ1QsU0FBRyxPQURNO0FBRVQsU0FBRyxLQUZNO0FBR1QsU0FBRyxPQUhNO0FBSVQsU0FBRztBQUpNLEtBUFE7QUFhbkJDLGVBQVcsRUFiUTtBQWNuQkMsYUFBUztBQWRVLEdBQXJCOztBQWlCQU4sZUFBYU0sT0FBYixDQUFxQkMsVUFBckIsR0FBbUMsVUFBU0MsSUFBVCxFQUFlO0FBQ2hELFdBQU9DLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCRixJQUFsQixFQUF3QixFQUFDTixNQUFLTSxLQUFLTixJQUFMLEdBQVksS0FBS0UsU0FBTCxDQUFlSSxLQUFLTCxFQUFwQixDQUFsQixFQUF4QixDQUFQO0FBQ0QsR0FGaUMsQ0FFL0JRLElBRitCLENBRTFCWCxZQUYwQixDQUFsQzs7QUFJQSxRQUFNWSxRQUFRLGtEQUF5QlosWUFBekIsQ0FBZDs7VUFFU1ksSyxHQUFBQSxLIiwiZmlsZSI6ImluaXRTdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IG1haW5SZWR1Y2VyIH0gZnJvbSAncmVkdWNlcnMvbWFpblJlZHVjZXInXHJcbi8vIHJlc29sdmVkIHdpdGggQmFiZWwgcGx1Z2luIGlubGluZS1qc29uLWltcG9ydFxyXG4vL2ltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi4vaW5pdGlhbFN0YXRlLmpzb24nO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHVzZXJzOiBbXHJcbiAgICB7bmFtZTogJ0FybWFuZG8nLCBpZDogMX0sXHJcbiAgICB7bmFtZTogJ0JydW5vJywgaWQ6IDJ9LFxyXG4gICAge25hbWU6ICdDYXJsbycsIGlkOiAzfSxcclxuICAgIHtuYW1lOiAnRGFuaWVsZScsIGlkOiA0fSxcclxuICBdLFxyXG4gIG5pY2tuYW1lczoge1xyXG4gICAgMTogJ0RhbmRvJyxcclxuICAgIDI6ICdVbm8nLFxyXG4gICAgMzogJ0NhY2lvJyxcclxuICAgIDQ6ICdEYW55JyxcclxuICB9LFxyXG4gIHNlbGVjdGVkczogW10sXHJcbiAgbWFwcGVyczoge31cclxufTtcclxuXHJcbmluaXRpYWxTdGF0ZS5tYXBwZXJzLnRlc3RNYXBwZXIgPSAoZnVuY3Rpb24odXNlcikge1xyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB1c2VyLCB7bmFtZTp1c2VyLm5hbWUgKyB0aGlzLm5pY2tuYW1lc1t1c2VyLmlkXX0pO1xyXG59KS5iaW5kKGluaXRpYWxTdGF0ZSk7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKG1haW5SZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG5cclxuZXhwb3J0IHsgc3RvcmUgfTsiXX0=