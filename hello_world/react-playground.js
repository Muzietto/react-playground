'use strict';
let h1 = React.createElement('h1', null, 'Hello, World!');

// fake ES6 'classes' => crap
class HelloWorld extends React.Component {
  render() {
    return React.createElement(
      'h1',
      this.props,
      'Hello, ' + this.props.frameworkName + ' World!');
  }
}

ReactDOM.render(
  React.createElement(
    'div',
    null,
    React.createElement(
      HelloWorld, {
        id: 'ember',
        title: 'ember_title',
        frameworkName: 'emberjs' 
      }),
    React.createElement(
      HelloWorld, {
        id: 'backbone',
        title: 'backbone_title',
        frameworkName: 'backbonejs' 
      }),
    React.createElement(
      HelloWorld, {
        id: 'angular',
        title: 'angular_title',
        frameworkName: 'angularjs' 
      })),
  document.getElementById('content'));

// using jsx
var helloWorldtext = <h1>hello jsx world! my attitude is + {this.props.attitude}</h1>;

class HelloWorldJsx extends React.Component {
  return ( // H2 pass JS vars to jsx compiler
    <div>
    {helloWorldtext}
    </div>
  );
}

ReactDOM.render(<HelloWorldJsx/>, document.getElementById('jsx_playground'));

  ////////////////////////////////////////////////////////////
// the real, better thing
function HelloWorld2() {
  return {
    render: function() {
      return React.createElement('h1', this.props, 'Hello, ' + this.props.frameworkName + ' World!');
    }
  }
}
HelloWorld2.prototype = React.Component;

ReactDOM.render(React.createElement(HelloWorld2, { frameworkName: 'ember2', id: 123 }), document.getElementById('content2'));


// other various stuff
var Pippo = {
  pluto: 'I am pluto',
  paperino: function() { alert(this.pluto); }
}

function PippoConst() {
  return {
    pluto: 'I am pluto',
    paperino: function() { alert(this.pluto); }
  }
}

// two ways of instantiating
var instanzia = Object.create(Pippo); // best
var instanziaNew = new PippoConst();  // worst