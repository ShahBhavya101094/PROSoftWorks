import React from 'react';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login'
import history from './helpers/history'
import { ADMIN_BASE_URL, adminRoutes } from './helpers/adminRoutes';


function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path={ADMIN_BASE_URL} exact={true} component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
