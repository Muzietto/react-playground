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
    var newSets = this.displacedItem(this.state.options, this.state.selecteds, selectedItem);
    this.setState({
      selecteds: newSets.augmented,
      options: newSets.filtered
    });
  }
  displacedItem(from, to, item) {
    return {
      augmented: this.addedItemToSet(to, item),
      filtered: this.removedItemFromSet(from, item),
    };
  }
  addedItemToSet(set, item) {
    var cloned = JSON.parse(JSON.stringify(set));
    return cloned.concat([item]);
  }
  removedItemFromSet(set, item) {
    var cloned = JSON.parse(JSON.stringify(set));
    return cloned.filter(it => (it.id != item.id));
  }
  userMapper(item) {
    return <User data={item} callbacks={{delete: removedItemFromSet.bind()}}/>
  }
  render() {
    return <div>
      <Dropdown id="dropdown01"
        options={this.state.options}
        labelField='name'
        valueField='id'
        value="0"
        onChange={this.dropDownOnChange.bind(this)}/>
      <ItemsList items={this.state.selecteds} mapper={this.userMapper}/>
    </div>
  }
};