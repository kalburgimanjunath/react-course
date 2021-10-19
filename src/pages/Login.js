import React from 'react';
export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="username/email" />
        <input type="password" placeholder="password" />
        <button type="button">Login</button>
      </form>
    </div>
  );
}
