import React from 'react';
export default function Avatar({ user }) {
  console.log(user);
  return (
    <div>
      <img src={user.url} width="100" height="100" />
      <div>
        <div>{user.name}</div>
        <div>{user.skills}</div>
        <div>{user.rating}</div>
        <div>{user.students}students</div>
        <div>{user.courses}courses</div>
      </div>
    </div>
  );
}
