import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import HomePage from './pages/HomePage';
import TaskList from './pages/TaskList';
import TaskDetails from './pages/TaskDetails';
import ErrorPage from './pages/ErrorPage';
import './transitions.css'

const Layout = ({children}) => (
  <CSSTransitionGroup
    component="div"
    className="containerxxx"
    transitionName="page"
    transitionEnterTimeout={1000}
    transitionLeaveTimeout={500}
    >
    <div key={Math.random()} className="content">
      {children}
    </div>
  </CSSTransitionGroup>
);

const routes = {
  path: '',
  async action({ next }) {
    console.log('middleware: start')
    const page = await next();
    console.log('middleware: end')
    if (page !== undefined) {
      return (
        <Layout>
          {page.component}
        </Layout>
      );
    }
  },
  children: [
    {path: '/', action(context) {
      return {context, component: <HomePage>Gran Birillo</HomePage>}
    }},
    {path: '/task', action(context) {
      return {context, component: <TaskList />}
    }},
    {path: '/task/:id', action(context) {
      const {params:{id}} = context;
      return {context, component: <TaskDetails id={id}>GIOVE</TaskDetails>}
    }},
    {path: '/error', action(context) {
      const {error:{code}} = context;
      return {context, component: <ErrorPage status={code} />}
    }},
  ]
};

export default routes;
