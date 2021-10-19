import React from 'react';
export default function Course({
  title,
  text,
  preview_url,
  rating,
  author,
  students,
  last_updated,
  language,
}) {
  const course = {
    title: 'Create Personal Brand Niche Website without coding',
    text: 'Using FREE Resources - Make Professional Personal Brand Website With Wordpress & Elementor',
    preview_url: '',
    rating: 5,
    author: 'manjunath kalburgi',
    students: 10,
    last_updated: '2021-10-20',
    language: 'english',
  };
  return <div>Course</div>;
}
