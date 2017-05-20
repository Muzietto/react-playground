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
    selecteds: []
  };

  const store = (0, _redux.createStore)(_mainReducer.mainReducer, initialState);

  exports.store = store;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2pzeC9pbml0U3RvcmUuanN4Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInVzZXJzIiwibmFtZSIsImlkIiwic2VsZWN0ZWRzIiwic3RvcmUiXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7OztBQUlBO0FBQ0E7O0FBRUEsUUFBTUEsZUFBZTtBQUNuQkMsV0FBTyxDQUNMLEVBQUNDLE1BQU0sU0FBUCxFQUFrQkMsSUFBSSxDQUF0QixFQURLLEVBRUwsRUFBQ0QsTUFBTSxPQUFQLEVBQWdCQyxJQUFJLENBQXBCLEVBRkssRUFHTCxFQUFDRCxNQUFNLE9BQVAsRUFBZ0JDLElBQUksQ0FBcEIsRUFISyxFQUlMLEVBQUNELE1BQU0sU0FBUCxFQUFrQkMsSUFBSSxDQUF0QixFQUpLLENBRFk7QUFPbkJDLGVBQVc7QUFQUSxHQUFyQjs7QUFVQSxRQUFNQyxRQUFRLGtEQUF5QkwsWUFBekIsQ0FBZDs7VUFFU0ssSyxHQUFBQSxLIiwiZmlsZSI6ImluaXRTdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IG1haW5SZWR1Y2VyIH0gZnJvbSAncmVkdWNlcnMvbWFpblJlZHVjZXInXHJcbi8vIHJlc29sdmVkIHdpdGggQmFiZWwgcGx1Z2luIGlubGluZS1qc29uLWltcG9ydFxyXG4vL2ltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi4vaW5pdGlhbFN0YXRlLmpzb24nO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHVzZXJzOiBbXHJcbiAgICB7bmFtZTogJ0FybWFuZG8nLCBpZDogMX0sXHJcbiAgICB7bmFtZTogJ0JydW5vJywgaWQ6IDJ9LFxyXG4gICAge25hbWU6ICdDYXJsbycsIGlkOiAzfSxcclxuICAgIHtuYW1lOiAnRGFuaWVsZScsIGlkOiA0fSxcclxuICBdLFxyXG4gIHNlbGVjdGVkczogW10sXHJcbn07XHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKG1haW5SZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG5cclxuZXhwb3J0IHsgc3RvcmUgfTsiXX0=