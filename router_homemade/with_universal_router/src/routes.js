import React from 'react';
import HomePage from './pages/HomePage';
import TaskList from './pages/TaskList';
import TaskDetails from './pages/TaskDetails';
import ErrorPage from './pages/ErrorPage';
import Layout from './pages/TransitioningPageLayout';

const routes = {
  path: '',
  async action({ next }) {
    const page = await next();

    if (typeof page !== 'undefined') {
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
    {path: '(.*)', action(context) {
      let code;
      try {
        code = context.error.code;
      } catch (e) {
        code = 400;
      }
      return {context, component: <ErrorPage status={code} />}
    }},
  ]
};

export default routes;
