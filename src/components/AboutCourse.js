import React from 'react';
import Avatar from './Avatar';
export default function AboutCourse() {
  const user = {
    name: 'manjunath kalburgi',
    url: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    skills: ['html', 'css'],
    rating: 10,
    students: 12990,
    courses: 10,
  };
  return (
    <div>
      <ul>
        <li>Overview</li>
        <li>Notes</li>
        <li>Announcements</li>
        <li>Resources</li>
        <li>Chat</li>
        <li>Code Pad</li>
        <li>Project</li>
      </ul>
      <div>
        <h1>About this course</h1>
        <h3>Description</h3>
        <div>
          <p>Description</p>
        </div>
        <h3>Instructor</h3>
        <div>
          <p>
            <Avatar user={user} />
          </p>
        </div>
      </div>
    </div>
  );
}
