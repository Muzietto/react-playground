import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import UniversalRouter from 'universal-router'
import './xxx.css'

function Layout({ path, title, children }) {
  return (
    <div>
      <p>
        <b>Navigation:</b>{' '}
        <Link to="/a">Page A</Link>{' '}
        <Link to="/b">Page B</Link>{' '}
        <Link to="/c">Page C</Link>
      </p>
      <CSSTransitionGroup
        component="div"
        className="container"
        transitionName="page"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
          <div key={path} className="content">
            <h1>{title}</h1>
            {children}
            <p>Current path: {path}</p>
          </div>
        </CSSTransitionGroup>
    </div>
  )
}

function PageA() {
  return <p className="a">Sed id ipsum vitae nulla suscipit sagittis.</p>
}
function PageB() {
  return <p className="b">Integer semper risus at sem posuere tempor.</p>
}
function PageC() {
  return <p className="c">Ut vulputate lectus at ex rhoncus pulvinar.</p>
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
