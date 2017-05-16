let Mouse = class Mouse extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        {
          style: { border: '1px solid red' },
          onMouseOverCapture: (event => {
            console.log('mouseover on capture');
            console.dir(event, this);
          }).bind(this),
          onMouseOver: (event => {
            console.log('mouseover bubbling back');
            console.dir(event, this);
          }).bind(this) },
        'Move your mouse over here'
      )
    );
  }
};
ReactDOM.render(React.createElement(Mouse, null), document.getElementById('content'));
