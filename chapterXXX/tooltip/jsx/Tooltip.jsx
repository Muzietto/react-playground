class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    // mmmmh, don't like this one...
    this.toggle = this.toggle.bind(this);
  }
  render() {
    var zIndex = (this.state.opacity) ? 1000 : -1000;
    var tooltipTop = (this.state.top || 0) + 20;
    var tooltipLeft = (this.state.left || 0) - 30;
    return <span className="tooltip" zIndex={zIndex}>this.props.popup_text<span>
  }
  toggle() {
    const {offsetTop: top, offsetLeft: left} = ReactDOM.findDOMNode(this);
    this.setState({
      visible: !this.state.visible,
      top,
      left,
    });
  }
}
