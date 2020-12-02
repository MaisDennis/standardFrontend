import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route'
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Dashboard2 from '~/pages/Dashboard2';
import Dashboard3 from '~/pages/Dashboard3';
import Profile from '~/pages/Profile';

export default function Routes() {

  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" exact component={SignUp} />
      <Route path="/dashboard" exact component={Dashboard} isPrivate/>
      <Route path="/dashboard2" exact component={Dashboard2} isPrivate/>
      <Route path="/dashboard3" exact component={Dashboard3} isPrivate/>
      <Route path="/profile" exact component={Profile} isPrivate/>

      <Route path="/" component={() => <h3>404 Not Found</h3>} />
    </Switch>
  );
}
