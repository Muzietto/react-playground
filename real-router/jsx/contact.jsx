const React = require('react');

// decorated with withRouter inside App.js
module.exports = function Contact(props) {
  // Navigate away after one second by calling router.push
  setTimeout(() => {props.router.push('about')}, 1000)
  return (
    <div>
      <h3>Contact Us</h3>
      <input type="text" placeholder="your email" className="form-control"></input>
      <textarea type="text" placeholder="your message" className="form-control"></textarea>
      <button className="btn btp-primary">send</button>
    </div>
  );
}