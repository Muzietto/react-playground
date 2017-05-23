'use strict';

import React from 'react';
import ItemsList from 'collections/itemslist';
import EntityAdder from 'controls/entityadder';
import User from 'components/user';
import DeletableComponent from 'high-order/deletableComponent';

const DeletableUser = DeletableComponent(User);

class EntityCrud extends React.Component {
  render() {
    return <div className="entity-crud-div" id={'entitycrudDiv' + this.props.id}>
      <ItemsList id={'entitycrud' + this.props.id + 'List'}
        items={this.props.collection}
        itemsMapper={this.props.listItemsMapper}
        displayMapper={listItemsDisplayMapper(this.props.entityType, this.props.onDeleteEntityClick)}/>
      <EntityAdder id={'entitycrud' + this.props.id + 'Adder'}
        type={this.props.entityType} 
        collection={this.props.collection}
        onAddEntityClick={this.props.onAddEntityClick}/>
    </div>
  }
}

export default EntityCrud;

function listItemsDisplayMapper(type, deleteCallback) {
  return function (item) {
    return <DeletableUser
      data={item}
      callbacks={{delete: deleteCallback(type, item.id)}}/>
  }
}