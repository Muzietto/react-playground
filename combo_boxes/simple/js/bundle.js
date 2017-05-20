
// cfr. http://jsfiddle.net/davidwaterston/7a3xxLtw/
var Dropdown = React.createClass({
  displayName: 'Dropdown',

  propTypes: {
    id: React.PropTypes.string.isRequired,
    options: React.PropTypes.array.isRequired,
    value: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
    valueField: React.PropTypes.string,
    labelField: React.PropTypes.string,
    onChange: React.PropTypes.func
  },

  getDefaultProps: function () {
    return {
      value: null,
      valueField: 'value',
      labelField: 'label',
      onChange: null
    };
  },

  getInitialState: function () {
    var selected = this.getSelectedFromProps(this.props);
    return { selected: selected }; // this is the state
  },

  componentWillReceiveProps: function (nextProps) {
    var selected = this.getSelectedFromProps(nextProps);
    this.setState({ selected: selected });
  },

  getSelectedFromProps(props) {
    var selected;
    if (props.value === null && props.options.length !== 0) {
      selected = props.options[0][props.valueField];
    } else {
      selected = props.value;
    }
    return selected;
  },

  run(value) {// do nothing;
  },

  render: function () {
    var self = this;
    var options = self.props.options.map(function (option) {
      return React.createElement(
        'option',
        { key: option[self.props.valueField], value: option[self.props.valueField] },
        option[self.props.labelField]
      );
    });
    return React.createElement(
      'select',
      { id: this.props.id,
        className: 'form-control',
        value: this.state.selected,
        onChange: this.handleChange },
      React.createElement(
        'option',
        { value: '0' },
        'pick one'
      ),
      options
    );
  },

  handleChange: function (event) {
    if (this.props.onChange) {
      this.props.onChange(event);
    }
    this.setState({ selected: event.target.value });
  }
});
// completely stateless
var ItemsList = React.createClass({
  displayName: "ItemsList",

  propTypes: {
    items: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number.isRequired
    }).isRequired).isRequired
  },
  render: function () {
    //debugger;
    var items = this.props.items.map(function (item) {
      return React.createElement(
        "li",
        { key: item.id },
        item.id,
        ",\xA0",
        item.name
      );
    });

    return React.createElement(
      "ul",
      null,
      items
    );
  }
});
let Shell = class Shell extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      options: [{ name: 'option A', id: 1 }, { name: 'option B', id: 2 }, { name: 'option C', id: 3 }, { name: 'option D', id: 4 }],
      selecteds: []
    };
  }
  dropDownOnChange(event) {
    var selectedValue = event.target.value;
    // put selected option inside this.state.selecteds
    var selectedItem = this.state.options.find(opt => opt.id == selectedValue);
    var newSets = this.displacedItem(this.state.options, this.state.selecteds, selectedItem);
    this.setState({
      selecteds: newSets.augmented,
      options: newSets.filtered
    });
  }
  displacedItem(from, to, item) {
    return {
      augmented: this.addedItemToSet(to, item),
      filtered: this.removedItemFromSet(from, item)
    };
  }
  addedItemToSet(set, item) {
    var cloned = JSON.parse(JSON.stringify(set));
    return cloned.concat([item]);
  }
  removedItemFromSet(set, item) {
    var cloned = JSON.parse(JSON.stringify(set));
    return cloned.filter(it => it.id != item.id);
  }
  userMapper(item) {
    return React.createElement(User, { data: item, callbacks: { delete: removedItemFromSet.bind() } });
  }
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(Dropdown, { id: 'dropdown01',
        options: this.state.options,
        labelField: 'name',
        valueField: 'id',
        value: '0',
        onChange: this.dropDownOnChange.bind(this) }),
      React.createElement(ItemsList, { items: this.state.selecteds, mapper: this.userMapper })
    );
  }
};
;

ReactDOM.render(React.createElement(Shell, null), document.getElementById('container'));
