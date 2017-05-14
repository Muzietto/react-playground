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
    return {
      selected: selected
    };
  },

  componentWillReceiveProps: function (nextProps) {
    var selected = this.getSelectedFromProps(nextProps);
    this.setState({
      selected: selected
    });
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

  handleChange: function (e) {
    if (this.props.onChange) {
      var change = {
        oldValue: this.state.selected,
        newValue: e.target.value
      };
      this.props.onChange(change);
    }
    this.setState({ selected: e.target.value });
  }
});
var ItemsList = React.createClass({
  displayName: "ItemsList",

  propTypes: {
    items: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired
    }).isRequired).isRequired
  },
  getInitialState: function () {
    return { items: this.props.items };
  },
  run(value) {
    this.setState(this.getState().concat(value));
  },
  render: function () {
    //debugger;
    var items = this.state.items.map(function (item) {
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
var Shell = React.createClass({
  displayName: "Shell",

  propTypes: {},
  getInitialState: function () {
    return {};
  },
  parentElement: function () {
    return this;
  },
  broadcast: function (value) {
    this.props.children.forEach(child => child.run(value));
  },
  render: function () {
    this.props.children.forEach(child => {
      if (!child.props.parentElement) {
        child.props.parentElement = this.parentElement;
        var dummy = 'dummy';
      }
    });
    return React.createElement(
      "div",
      { className: "wrapper" },
      this.props.children
    );
  }
});
var chosen_items = [{ id: 1, code: 'a', name: 'qeqeqeqe' }];

var options = [{
  description: 'This is option A',
  code: 'a'
}, {
  description: 'This is option B',
  code: 'b'
}, {
  description: 'This is option C',
  code: 'c'
}, {
  description: 'This is option D',
  code: 'd'
}];

var dropDownOnChange = function (change) {
  var newOption = this.options.find(op => op.code === change.newValue);
  var newItem = {
    id: new Date().getTime(),
    code: newOption.code,
    name: newOption.description
  };
  //chosen_items.push(newItem);
  this.parentElement().broadcast(newItem);
};

ReactDOM.render(React.createElement(
  Shell,
  null,
  React.createElement(Dropdown, { id: 'myDropdown',
    options: options,
    value: 'b',
    labelField: 'description',
    valueField: 'code',
    onChange: dropDownOnChange }),
  React.createElement(ItemsList, { items: chosen_items })
), document.getElementById('container'));
