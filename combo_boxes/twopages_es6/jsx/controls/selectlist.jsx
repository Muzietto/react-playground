'use strict';

import React from 'react';
import Dropdown from 'controls/dropdown';
import ItemsList from 'collections/itemslist';

class SelectList extends React.Component {
  render() {
    return <div id={'selectlistDiv' + this.props.id}>
      <Dropdown id={'selectlist' + this.props.id + 'Dropdown'}
        options={this.props.options}
        labelField={this.props.labelField}
        valueField={this.props.valueField}
        value="0"
        onChange={this.props.onSelectChange}
        optionsMapper={this.props.optionsMapper}/>
      <ItemsList id={'selectlist' + this.props.id + 'List'}
        items={this.props.listItems}
        itemsMapper={this.props.listItemsMapper}
        displayMapper={this.props.listItemsDisplayMapper}/>
    </div>
  }
}

export default SelectList;