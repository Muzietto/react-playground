import React from 'react';
import PropTypes from 'prop-types';
import history from './history';

import HomePage from './pages/HomePage';
import TaskList from './pages/TaskList';
import TaskDetails from './pages/TaskDetails';
import ErrorPage from './pages/ErrorPage';

const PAGES = {
    '/': HomePage,
    '/task': TaskList,
    '/task/:id': TaskDetails,
    '/error': ErrorPage,
};

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
      const Handler = PAGES[this.state.pathname] || ErrorPage;
      return <Handler />;
  }
}

App.propTypes = {
    pathname: PropTypes.oneOf(Object.keys(PAGES)).isRequired,
};

export default App;
