import React from 'react';
export default function Course({ course }) {
  return (
    <div>
      <h1>{course.title}</h1>
      <h3>{course.text}</h3>
      <div>
        <span>Rating:{course.rating}</span>
        <span>Students:{course.students}</span>
      </div>
      <img src="" width="500" height="400" />
      <div>
        <span>Created by:{course.author}</span>
      </div>
      <div>
        <span>Last updated on:{course.last_updated}</span>
        <span> {course.language}</span>
      </div>
      <div>
        <h1>Course Content</h1>
      </div>
    </div>
  );
}
