import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
      <main>
        <Switch>
            <Route path='/' component={Home} />
            <Route path='/about' component={About} />
        </Switch>
      </main>
  );
}

export default App;
