import React from 'react';
export default function CourseContent() {
  const Lecture = () => <div>lectures</div>;
  return (
    <div>
      <ul>
        <li>Sections</li>
        <Lecture />
      </ul>
    </div>
  );
}
