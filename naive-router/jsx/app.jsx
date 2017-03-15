const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('./router.jsx');

const mapping = {
  // HTML snippets get injected 
  '#profile': <div>Profile: (<a href="#">home</a>)</div>,
  '#accounts': <div>Accounts: (<a href="#">home</a>)</div>,
  '*': <div>Dashboard: 
         <br/><a href="#profile">Profile</a>
         <br/><a href="#accounts">Accounts</a>
       </div>
};

let giambirillo = 0;

ReactDOM.render(
  <Router mapping={mapping} giambirillo={giambirillo}/>,
  document.getElementById('content')
);
// no module.exports whatsoever!