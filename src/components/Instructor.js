import React from 'react';
import Avatar from './Avatar';
export default function Instructor() {
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
      <Avatar user={user} />
      <Avatar user={user} />
      <Avatar user={user} />
      <Avatar user={user} />
    </div>
  );
}
