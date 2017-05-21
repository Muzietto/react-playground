'use strict';

import React from 'react';
import Dropdown from 'controls/dropdown';
import SelectList from 'controls/selectList';

class DoubleSelectList extends React.Component {
  constructor(params) {
    super(params);
    this.state = {firstSelection: 0};
  }

  dropDownOnChange(value) {
    this.setState({firstSelection: value});
  }

  dropDown2OnChange(value) {
    this.props.onSelectChange2(this.state.firstSelection)(value);
    //store.dispatch(ActionCreators.userEntersGroup(this.state.firstSelection, selectedValue));
  }

  listItemToOptions(item) {
    store.dispatch(ActionCreators.userLeavesGroup(this.state.firstSelection, item.id));
  }

  render() {
    return <div id={'doubleSelectListDiv' + this.props.id}>
      <Dropdown id={'doubleSelectListDiv' + this.props.id + 'dropdown'}
        options={this.props.selectOptions1}
        labelField={this.props.selectLabelField1}
        valueField={this.props.selectValueField1}
        value={this.state.firstSelection}
        onChange={this.dropDownOnChange.bind(this)}/>
      <SelectList
        id={'doubleSelectListDiv' + this.props.id + 'selectList'}
        options={(this.props.selectOptions2.length)
          ? this.props.selectOptions2
          : this.props.selectOptions2[this.state.firstSelection]}
        labelField={this.props.selectLabelField2}
        valueField={this.props.selectValueField2}
        optionsMapper={this.props.optionsMapper2}
        onSelectChange={this.dropDown2OnChange.bind(this)}
        //onSelectChange={this.props.onSelectChange2(this.state.firstSelection)} // try this
        
        listItems={(this.props.listItems.length)
          ? this.props.listItems
          : this.props.listItems[this.state.firstSelection]}
        listItemsMapper={this.props.listItemsMapper}
        listItemsDisplayMapper={this.props.listItemsDisplayMapper}/>
    </div>
  }
};

export default DoubleSelectList;