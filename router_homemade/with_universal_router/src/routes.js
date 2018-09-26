import React from 'react';
import { CSSTransition } from 'react-transition-group';
import HomePage from './pages/HomePage';
import TaskList from './pages/TaskList';
import TaskDetails from './pages/TaskDetails';
import ErrorPage from './pages/ErrorPage';
import './transitions.css'

const Layout = ({children}) => (
  <CSSTransition
    appear={true}
    timeout={1000}
    classNames='fade'
  >
    {children}
  </CSSTransition>
);

// export default [
//   {path: '/', action: () => <Layout><HomePage>Gran Birillo</HomePage></Layout>},
//   {path: '/task', action: () => <Layout><TaskList /></Layout>},
//   {path: '/task/:id', action: ({params:{id}}) => <Layout><TaskDetails id={id}>GIOVE</TaskDetails></Layout>},
//   {path: '/error', action: ({error:{status}}) => <Layout><ErrorPage status={status}/></Layout>},
// ];

// export default [
//   {path: '/', action: async () => <HomePage>Gran Birillo</HomePage>},
//   {path: '/task', action: async () => <TaskList />},
//   {path: '/task/:id', action: async ({params:{id}}) => <TaskDetails id={id}>GIOVE</TaskDetails>},
//   {path: '/error', action: async ({error:{code}}) => <ErrorPage status={code}/>},
// ];

const routes = {
  path: '',
  async action({ next }) {
    console.log('middleware: start')
    const page = await next();
    console.log('middleware: end')
    if (page !== undefined) {
      return (
        <Layout path={page.context.path}>
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

// async function action({ next }) { // action(context)
//   console.log('middleware: start')
//   const child = await next(true)
//   console.log('middleware: end')
//   return child
// },
