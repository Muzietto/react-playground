ReactDOM.render(React.createElement(
  'div',
  null,
  React.createElement(Content, { time: new Date().toLocaleString() })
), document.getElementById('content'));