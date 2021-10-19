import React from 'react';
import AllFilter from './AllFilter';
import Feature from './Feature';

export default function AllCourses() {
  return (
    <div>
      <h1>All Development courses</h1>
      <h2>Not sure? All courses have a 30-day money-back guarantee</h2>
      <AllFilter />
      <Feature title="All" />
    </div>
  );
}
