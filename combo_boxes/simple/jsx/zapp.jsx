var chosen_items = [{id:1,code:'a',name:'qeqeqeqe'}];

var options = [
  {
    description: 'This is option A',
    code: 'a'
  },
  {
    description: 'This is option B',
    code: 'b'
  },
  {
    description: 'This is option C',
    code: 'c'
  },
  {
    description: 'This is option D',
    code: 'd'
  }
];

var dropDownOnChange = function(change) {
  var newOption = this.options.find(op=>op.code===change.newValue);
  var newItem = {
    id: new Date().getTime(),
    code: newOption.code,
    name: newOption.description
    };
  //chosen_items.push(newItem);
  this.parentElement().broadcast(newItem);
};

ReactDOM.render(
  <Shell>
    <Dropdown id='myDropdown' 
      options={options} 
      value='b'
      labelField='description'
      valueField='code'
      onChange={dropDownOnChange}/>
    <ItemsList items={chosen_items}/>
  </Shell>,
    document.getElementById('container')
);