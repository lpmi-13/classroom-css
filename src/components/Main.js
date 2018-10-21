// Vendor
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Application
import Exercise1 from './Exercise1';
import Exercise2 from './Exercise2';
import Home from './Home';

const Main = () => (
  <main>
    <Switch>
      <Route path='/exercise1' component={Exercise1}/>
      <Route path='/exercise2' component={Exercise2}/>
      <Route path='/' component={Home}/>
    </Switch>
  </main>
);

export default Main;
