import React from 'react';
import { Router, Route, Link, hashHistory, withRouter } from 'react-router';
import ReactDOM from 'react-dom';
import { store } from 'initStore';
import { Menu } from 'components/menu';
import { Users } from 'components/users';
import { User } from 'components/user';
import { Groups } from 'components/groups';
import { Group } from 'components/group';
import { Memberships } from 'components/memberships';

const render = () => {
  const state = store.getState();
  ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/" component={Menu}>
        <Route path="/users" component={Users}>
          <Route path="/user/:id" component={User}/>
        </Route>
        <Route path="/groups" component={Groups}>
          <Route path="/group/:id" component={Group}/>
        </Route>
        <Route path="/memberships" component={Memberships}/>
      </Route>
    </Router>
  ), document.getElementById('container'));
}

render();
store.subscribe(render);
window.store = store;