import React from 'react';
import './style.css';
import { Header, Footer } from './components/index';
import { Home, Login } from './pages/index';
import { Switch, Route } from 'react-router-dom';
export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
