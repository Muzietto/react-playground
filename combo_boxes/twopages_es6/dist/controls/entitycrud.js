define(['exports', 'react', 'collections/itemslist', 'controls/entityadder', 'components/user', 'components/group', 'high-order/deletableComponent'], function (exports, _react, _itemslist, _entityadder, _user, _group, _deletableComponent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _itemslist2 = _interopRequireDefault(_itemslist);

  var _entityadder2 = _interopRequireDefault(_entityadder);

  var _user2 = _interopRequireDefault(_user);

  var _group2 = _interopRequireDefault(_group);

  var _deletableComponent2 = _interopRequireDefault(_deletableComponent);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const DeletableUser = (0, _deletableComponent2.default)(_user2.default);
  const DeletableGroup = (0, _deletableComponent2.default)(_group2.default);
  const listItemsDisplayMapper = {
    user: deleteCallback => {
      return function (item) {
        return _react2.default.createElement(DeletableUser, {
          data: item,
          callbacks: { delete: deleteCallback('user', item.id) } });
      };
    },
    group: deleteCallback => {
      return function (item) {
        return _react2.default.createElement(DeletableGroup, {
          data: item,
          callbacks: { delete: deleteCallback('group', item.id) } });
      };
    }
  };

  let EntityCrud = class EntityCrud extends _react2.default.Component {
    render() {
      return _react2.default.createElement(
        'div',
        { className: 'entity-crud-div', id: 'entitycrudDiv' + this.props.id },
        _react2.default.createElement(_itemslist2.default, { id: 'entitycrud' + this.props.id + 'List',
          items: this.props.collection,
          itemsMapper: this.props.listItemsMapper,
          displayMapper: listItemsDisplayMapper[this.props.entityType](this.props.onDeleteEntityClick) }),
        _react2.default.createElement(_entityadder2.default, { id: 'entitycrud' + this.props.id + 'Adder',
          type: this.props.entityType,
          collection: this.props.collection,
          onAddEntityClick: this.props.onAddEntityClick })
      );
    }
  };
  exports.default = EntityCrud;
});