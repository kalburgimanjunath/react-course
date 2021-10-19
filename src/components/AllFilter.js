import React from 'react';
export default function AllFilter() {
  return (
    <div>
      <span>Toggle Filters</span>
      <span>
        <select>
          <option>Most Popular</option>
          <option>Highest Rated</option>
          <option>Newest</option>
        </select>
      </span>
      <span>Totals:</span>
    </div>
  );
}
