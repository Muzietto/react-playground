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

export default [
  {path: '/', action: async () => <HomePage>Gran Birillo</HomePage>},
  {path: '/task', action: async () => <TaskList />},
  {path: '/task/:id', action: async ({params:{id}}) => <TaskDetails id={id}>GIOVE</TaskDetails>},
  {path: '/error', action: async ({error:{code}}) => <ErrorPage status={code}/>},
];
