import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './screens/Table/Table'
import Teams from './screens/Teams/Teams'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/teams" component={Teams} />
        <Route path="/" component={Table} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


