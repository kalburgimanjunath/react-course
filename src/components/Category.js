import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
export default function Category({ title }) {
  const category = ['design', 'development', 'marketing'];
  const categoryItem = category.map((item) => (
    <div>
      <Link to={`course/${item}`}>{item}</Link>
    </div>
  ));
  return (
    <div>
      <h1>{title}</h1>
      {categoryItem}
    </div>
  );
}
