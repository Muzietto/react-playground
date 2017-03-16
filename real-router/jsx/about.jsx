const React = require('react');

// should have a 'route' among the props
// (but not a 'router')
module.exports = function About(props) {
  return (
    <div>
      <a href="http://Node.University" target="_blank">Node University</a> is home to top-notch assholes...
    </div>
  );
}