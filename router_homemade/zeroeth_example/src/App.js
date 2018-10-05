import React from 'react';
import PropTypes from 'prop-types';
import history from './history';
import router from './router';

import HomePage from './pages/HomePage';
import TaskList from './pages/TaskList';
import TaskDetails from './pages/TaskDetails';
import ErrorPage from './pages/ErrorPage';
import Layout from './pages/TransitioningPageLayout';

const PAGES = [
    { path: '/', action: () => <HomePage/> },
    { path: '/task', action: () => <TaskList/> },
    { path: '/task/:id', action: ({pathname, params: {id}}) => (<TaskDetails id={id}><p>`pathname=${pathname}`</p></TaskDetails>)},
    { path: '/error/:code', action: ({pathname, params: {code}}) => (<ErrorPage status={code}/>)},
];

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          pathname: props.pathname,
      };
  }

  componentDidMount() {
      console.info('App loaded in:', Math.round(performance.now()));

      history.listen(({ pathname }) => {
          this.setState({ pathname });
      });
  }

  render() {
      const handlerInstance = router
        .resolve(PAGES, { pathname: this.state.pathname});
      return (<Layout>{handlerInstance}</Layout>);
  }
}

App.propTypes = {
    pathname: PropTypes.string.isRequired,
};

export default App;
