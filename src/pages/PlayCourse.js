import React from 'react';
import { AboutCourse, Player, CourseContent } from '../components/index';
export default function PlayCourse() {
  return (
    <div>
      <div>
        <div>
          <Player />
        </div>
        <div>
          <AboutCourse />
        </div>
      </div>
      <div>
        <h1>Course Content</h1>
        <CourseContent type="sidebar" />
      </div>
    </div>
  );
}
