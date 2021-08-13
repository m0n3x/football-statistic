import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './screens/Table/Table'
import Teams from './screens/Teams/Teams'
import Team from './screens/Team/Team'
import Favourites from './screens/Favourites/Favourites'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './store/reducers'

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/teams/:id" component={Team} />
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/favourites" component={Favourites} />
          <Route path="/" component={Table} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


