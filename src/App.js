import React from 'react';
import './style.css';
import { Header, Footer, Topics } from './components/index';
import Home from './pages/Home';
import { Switch, Route, useParams, useRouteMatch } from 'react-router-dom';
export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path={`/course/:topicId`} children={<Topics />}></Route>
        <Route path="/*" exact>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
