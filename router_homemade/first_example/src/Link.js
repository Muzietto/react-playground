import React from 'react';
import history from './history';

const transition = event => {
  event.preventDefault();
  history.push({
    pathname: event.target.pathname,
    search: event.target.search,
  });
};

export default ({ href, children }) => (
  <React.Fragment>
    <a href={href} onClick={transition}>{children}</a>
    <br/>
  </React.Fragment>
);
