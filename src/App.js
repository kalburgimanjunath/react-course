import React from 'react';
import './style.css';
import { Header, Footer, Topics } from './components/index';

import Home from './pages/Home';
import Course from './pages/Course';
import Login from './pages/Login';
import Project from './pages/Project';
import Chat from './pages/Chat';
import PlayCourse from './pages/PlayCourse';
import { Switch, Route, useParams, useRouteMatch } from 'react-router-dom';
export default function App() {
  const course = {
    title: 'Create Personal Brand Niche Website without coding',
    text: 'Using FREE Resources - Make Professional Personal Brand Website With Wordpress & Elementor',
    preview_url: '',
    rating: 5,
    author: 'manjunath kalburgi',
    students: 10,
    last_updated: '2021-10-20',
    language: 'english',
  };
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/course/course" exact>
          <Course course={course} />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/project">
          <Project />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
        <Route path="/playcourse">
          <PlayCourse />
        </Route>
        <Route path={`/course/:topicId`} children={<Topics />}></Route>
        <Route path="/*" exact>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
