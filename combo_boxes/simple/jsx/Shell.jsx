class Shell extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      options: [
        {name: 'option A', id: 1},
        {name: 'option B', id: 2},
        {name: 'option C', id: 3},
        {name: 'option D', id: 4},
      ],
      selecteds: [],
    }
  }
  dropDownOnChange(event) {
    var selectedValue = event.target.value;
    // put selected option inside this.state.selecteds
    var selectedItem = this.state.options
      .find(opt => (opt.id == selectedValue));
    this.setState({
      selecteds: this.addedItemToSet(selectedItem, this.state.selecteds),
      options: this.removedItemFromSet(selectedItem, this.state.options)
    });
  }
  addedItemToSet(item, set) {
    var cloned = JSON.parse(JSON.stringify(set));
    return cloned.concat([item]);
  }
  removedItemFromSet(item, set) {
    var cloned = JSON.parse(JSON.stringify(set));
    return cloned.filter(it => (it.id != item.id));
  }
  render() {
    return <div>
      <Dropdown id="dropdown01"
        options={this.state.options}
        labelField='name'
        valueField='id'
        value="0"
        onChange={this.dropDownOnChange.bind(this)}/>
      <ItemsList items={this.state.selecteds}/>
    </div>
  }
};