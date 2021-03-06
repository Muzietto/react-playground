import React from 'react';
import history from './history';

const Link = (props) => {
    const onClick = (e) => {
        const aNewTab = e.metaKey || e.ctrlKey;
        const anExternalLink = props.href.startsWith('http');

        if (!aNewTab && !anExternalLink) {
            e.preventDefault();
            history.push(props.href);
        }
    };

    return (
      <React.Fragment>
        <a href={props.href} onClick={onClick}>
            {props.children}
        </a>
        <br/>
      </React.Fragment>
    );
};

export default Link;
