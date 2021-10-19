import React from 'react';
import { Link } from 'react-router-dom';
export default function Card({ title, url, author, rating, price }) {
  return (
    <div>
      <Link to="./course">
        <div>
          <img src="" width="200" height="200" />
        </div>
        <div>{title}</div>
        <div>{author}</div>
        <div>{rating}</div>
        <div>
          <b>{price}</b>
        </div>
      </Link>
    </div>
  );
}
