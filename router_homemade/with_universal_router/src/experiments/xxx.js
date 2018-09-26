import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import UniversalRouter from 'universal-router'
import './xxx.css'

function Layout({ path, title, children }) {
  return ( // react-transition-group v1.x !!!
      <CSSTransitionGroup
        component="div"
        className="container"
        transitionName="page"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={500}
      >
        <div key={Math.random()} className="content">
          {children}
        </div>
      </CSSTransitionGroup>
  )
}

function PageA() {
  return (
    <React.Fragment>
      <h1>Titlex A</h1>
      <p className="a">Sed id ipsum vitae nulla suscipit sagittis.</p>
      <Link to="/b">Page B</Link>{' '}
      <Link to="/c">Page C</Link>
    </React.Fragment>
  );
}
function PageB() {
  return (
    <React.Fragment>
      <h1>Titlex B</h1>
      <p className="a">Integer semper risus at sem posuere tempor.</p>
      <Link to="/a">Page A</Link>{' '}
      <Link to="/c">Page C</Link>
    </React.Fragment>
  );
}
function PageC() {
  return (
    <React.Fragment>
      <h1>Titlex C</h1>
      <p className="a">Ut vulputate lectus at ex rhoncus pulvinar.</p>
      <Link to="/a">Page A</Link>{' '}
      <Link to="/b">Page B</Link>
    </React.Fragment>
  );
}

class Link extends React.Component {
  onClick = (event) => {
    event.preventDefault();
    const path = event.currentTarget.pathname;
    navigateTo(path);
  }
  render() {
    return (
      <a href={this.props.to} onClick={this.onClick}>
        {this.props.children}
      </a>
    );
  }
}

const routes = {
  path: '/',
  async action({ next }) {
    const page = await next();
    if (page !== undefined) {
      return (
        <Layout path={page.context.path} title={page.title}>
          {page.component}
        </Layout>
      );
    }
  },
  children: [
    { path: '/a', action(context) {
      return { context, title: 'Title A', component: <PageA /> };
    }},
    { path: '/b', action(context) {
      return { context, title: 'Title B', component: <PageB /> };
    }},
    { path: '/c', action(context) {
      return { context, title: 'Title C', component: <PageC /> };
    }}
  ]
};

function navigateTo(path) {
  new UniversalRouter(routes)
    .resolve(path)
    .then(component =>
      ReactDOM.render(component, document.getElementById('container'))
    );
}

navigateTo('/a');
