define(['exports', 'react', 'react-dom', 'initStore', 'controls/doubleselectlist', 'actions/actions', 'components/user', 'high-order/deletableComponent', 'misc/util'], function (exports, _react, _reactDom, _initStore, _doubleselectlist, _actions, _user, _deletableComponent, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Memberships = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _doubleselectlist2 = _interopRequireDefault(_doubleselectlist);

  var _user2 = _interopRequireDefault(_user);

  var _deletableComponent2 = _interopRequireDefault(_deletableComponent);

  var _util2 = _interopRequireDefault(_util);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const DeletableUser = (0, _deletableComponent2.default)(_user2.default);

  let Memberships = class Memberships extends _react2.default.Component {
    constructor(params) {
      super(params);
    }
    render() {
      let state = _initStore.store.getState();
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_doubleselectlist2.default, {
          id: '1',
          selectOptions1: state.groups,
          selectLabelField1: 'name',
          selectValueField1: 'id',

          selectOptions2: state.group_no_user,
          selectLabelField2: 'name',
          selectValueField2: 'id',
          optionsMapper2: state.mappers.userFromId,
          onSelectChange2: idGroup => idUser => _initStore.store.dispatch(_actions.ActionCreators.userEntersGroup(idUser, idGroup)),

          listItems: state.group_user,
          listItemsMapper: state.mappers.userFromId,
          listItemsDisplayMapper: listItemsDisplayMapper
        })
      );
    }
  };


  function listItemsDisplayMapper(idGroup) {
    return function (item) {
      return _react2.default.createElement(DeletableUser, {
        id: item.id,
        data: item,
        callbacks: { delete: () => _initStore.store.dispatch(_actions.ActionCreators.userLeavesGroup(item.id, idGroup)) } });
    };
  }

  exports.Memberships = Memberships;
});