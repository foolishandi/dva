import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import App from './routes/App';
import Login from './routes/Login';
import Home from './routes/Home';
import Auth from './routes/Auth';
import Table from './routes/Table';
import Table2 from './routes/Table';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/table' component={Table2}></Route>

        <Route path="/" render={() =>
          <App>
            <Switch>
              <Route path='/home' render={() => localStorage.getItem('token') ? <Home></Home> : <Redirect to='/login'></Redirect>}></Route>
              <Route path='/auth' render={() => localStorage.getItem('token') ? <Auth></Auth> : <Redirect to='/login'></Redirect>}></Route>
              <Redirect from='/' to='/home'></Redirect>
            </Switch>
          </App>} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
