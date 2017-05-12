var chosen_things = [];

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
    alert('onChangeForSelect:\noldValue: ' + 
            change.oldValue + 
            '\nnewValue: ' 
            + change.newValue);
};

ReactDOM.render(
    <Dropdown id='myDropdown' 
              options={options} 
              value='b'
              labelField='description'
              valueField='code'
              onChange={dropDownOnChange}/>,
    document.getElementById('container')
);