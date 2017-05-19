class Shell extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      options: [
        {description: 'option A', code: 'a'},
        {description: 'option B', code: 'b'},
        {description: 'option C', code: 'c'},
        {description: 'option D', code: 'd'},
      ],
      selecteds: [],
    }
  }
  dropDownOnChange(event) {
    var selectedValue = event.target.value;
    // put selected option inside this.state.selecteds
    var selectedItem = this.state.options
      .filter(opt => (opt.code === selectedValue))
      .map(opt => ({
          id: new Date().getTime(),
          code: opt.code,
          name: opt.description,
        }))[0];
    this.setState({selecteds:this.state.selecteds.concat(selectedItem)});
  }
  render() {
    return <div>
      <Dropdown id="dropdown01"
        options={this.state.options}
        labelField='description'
        valueField='code'
        value='b'
        onChange={this.dropDownOnChange.bind(this)}/>
      <ItemsList items={this.state.selecteds}/>
    </div>
  }
};