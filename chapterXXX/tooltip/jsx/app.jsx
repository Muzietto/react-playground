var Tooltip = require('./Tooltip);

class Text extends React.Component {
  render() {
    return <p>This is a <Tooltip tooltip_text="produced by me">sample tooltip</Tooltip> for the show</p>;
  }
}