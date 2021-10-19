import React from 'react';
export default function Card({ title, url, author, rating, price }) {
  return (
    <div>
      <div>
        <img src="" width="200" height="200" />
      </div>
      <div>{title}</div>
      <div>{author}</div>
      <div>{rating}</div>
      <div>
        <b>{price}</b>
      </div>
    </div>
  );
}
