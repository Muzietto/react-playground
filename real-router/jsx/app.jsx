const React = require('react');
const ReactRouter = require('react-router');
const ReactDOM = require('react-dom');
const Content = require('./content.jsx');
const About = require('./about.jsx');
const Posts = require('./posts.jsx');
const Post = require('./post.jsx');
const Contact = require('./contact.jsx');
const Login = require('./login.jsx');

let {Router, Route, Link, hashHistory, withRouter} = ReactRouter;

const posts = require('../posts.js')

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Content}>
      <Route path="/about" component={About}/>
      <Route path="/posts" component={Posts} posts={posts}/>
      <Route path="/posts:id" component={Post} posts={posts}/>
      <Route path="/contact" component={withRouter(Contact)}/>
    </Route>
    <Router path="/login" component={Login}/>
  </Router>
), document.getElementById('content'));