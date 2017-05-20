
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
    var options = self.props.options.sort((a, b) => a.id - b.id).map(function (option) {
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
    }).isRequired).isRequired,
    mapper: React.PropTypes.func.isRequired
  },
  render: function () {
    var self = this;
    var items = this.props.items.sort((a, b) => a.id - b.id).map(function (item) {
      return React.createElement(
        "li",
        { key: item.id },
        self.props.mapper(item)
      );
    });

    return React.createElement(
      "ul",
      null,
      items
    );
  }
});
let User = class User extends React.Component {
  render() {
    return React.createElement(
      "div",
      { id: "userDiv{this.props.data.id}" },
      React.createElement(
        "span",
        { className: "separated-span" },
        this.props.data.id
      ),
      React.createElement(
        "span",
        { className: "separated-span" },
        this.props.data.name
      ),
      React.createElement(
        "a",
        { onClick: this.props.callbacks.delete },
        "REMOVE"
      )
    );
  }
};
let Shell = class Shell extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      options: [{ name: 'option A', id: 1 }, { name: 'option B', id: 2 }, { name: 'option C', id: 3 }, { name: 'option D', id: 4 }],
      selecteds: []
    };
  }
  dropDownOnChange(event) {
    // changes state
    var selectedValue = event.target.value;
    // put selected option inside this.state.selecteds
    var selectedItem = this.state.options.find(opt => opt.id == selectedValue);
    this.optionToList(selectedItem);
  }
  optionToList(item) {
    var newSets = this.displacedItem(this.state.options, this.state.selecteds, item);
    this.setState({
      selecteds: newSets.augmented,
      options: newSets.filtered
    });
  }
  listItemToOptions(item) {
    var newSets = this.displacedItem(this.state.selecteds, this.state.options, item);
    this.setState({
      options: newSets.augmented,
      selecteds: newSets.filtered
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
  userMapperFactory() {
    var self = this;
    return item => React.createElement(User, { data: item, callbacks: { delete: () => self.listItemToOptions(item) } });
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
      React.createElement(ItemsList, { id: 'list01', items: this.state.selecteds, mapper: this.userMapperFactory() })
    );
  }
};
;

ReactDOM.render(React.createElement(Shell, null), document.getElementById('container'));
