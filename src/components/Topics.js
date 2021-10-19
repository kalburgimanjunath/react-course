import React from 'react';
import { useParams } from 'react-router-dom';
import Feature from './Feature';
import Category from './Category';
import Instructor from './Instructor';
import AllCourses from './AllCourses';
export default function Topics() {
  let { topicId } = useParams();
  return (
    <div>
      <h1>{topicId} Courses</h1>
      <h2>Courses to get you started</h2>
      <Feature title="most popular" />
      <Feature title="trending" />
      <Feature title="Featured Course" />
      <Category title="Popular topics" />
      <h1>Popular Instructor</h1>
      <Instructor />
      <AllCourses />
    </div>
  );
}
