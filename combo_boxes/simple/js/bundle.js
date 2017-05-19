
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
      id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired
    }).isRequired).isRequired
  },
  render: function () {
    //debugger;
    var items = this.props.items.map(function (item) {
      return React.createElement(
        "li",
        { key: item.id },
        item.code,
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
      options: [{ description: 'option A', code: 'a' }, { description: 'option B', code: 'b' }, { description: 'option C', code: 'c' }, { description: 'option D', code: 'd' }],
      selecteds: []
    };
  }
  dropDownOnChange(event) {
    var selectedValue = event.target.value;
    // put selected option inside this.state.selecteds
    var selectedItem = this.state.options.filter(opt => opt.code === selectedValue).map(opt => ({
      id: new Date().getTime(),
      code: opt.code,
      name: opt.description
    }))[0];
    this.setState({ selecteds: this.state.selecteds.concat(selectedItem) });
  }
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(Dropdown, { id: 'dropdown01',
        options: this.state.options,
        labelField: 'description',
        valueField: 'code',
        value: 'b',
        onChange: this.dropDownOnChange.bind(this) }),
      React.createElement(ItemsList, { items: this.state.selecteds })
    );
  }
};
;

ReactDOM.render(React.createElement(Shell, null), document.getElementById('container'));
