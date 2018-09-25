import React from 'react';
import HomePage from './pages/HomePage';
import TaskList from './pages/TaskList';
import TaskDetails from './pages/TaskDetails';

export default [
  { path: '/', action: () => <HomePage>Gran Birillo</HomePage> },
  { path: '/task', action: () => <TaskList /> },
  { path: '/task/:id', action: ({params:{id}}) => <TaskDetails id={id}>GIOVE</TaskDetails>},
];
