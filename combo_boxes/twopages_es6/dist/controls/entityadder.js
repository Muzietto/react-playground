define(['exports', 'react'], function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  let EntityAdder = class EntityAdder extends _react2.default.Component {
    constructor(params) {
      super(params);
      this.state = {
        id: '',
        name: ''
      };
    }
    onStateChange(type) {
      return event => {
        var newVal = event.target.value;
        var newState = Object.assign({}, this.state);
        newState[type] = newVal;
        this.setState(newState);
      };
    }
    onButtonClick(event) {
      this.props.onAddEntityClick(this.props.type, this.state.id, this.state.name)();
      this.setState({
        id: '',
        name: ''
      });
    }
    render() {
      return _react2.default.createElement(
        'div',
        { className: 'entity-adder-div', id: 'entityAdderDiv' + this.props.id },
        _react2.default.createElement(
          'form',
          { onSubmit: () => false },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'label',
              null,
              'ID'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement('input', { value: this.state.id,
              type: 'text',
              id: 'input_id',
              onChange: this.onStateChange('id') })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'label',
              null,
              'NAME'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement('input', { value: this.state.name,
              type: 'text',
              id: 'input_name',
              onChange: this.onStateChange('name') })
          ),
          _react2.default.createElement('input', { type: 'button',
            id: 'input_button',
            onClick: this.onButtonClick.bind(this),
            value: 'ADD' })
        )
      );
    }
  };
  exports.default = EntityAdder;
});