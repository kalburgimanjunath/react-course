import React from 'react';
import Card from './Card';
export default function Feature({ title }) {
  return (
    <>
      <div>{title}</div>
      <Card
        title="hello world"
        rating="4"
        price="4000"
        author="Manjunath Kalburgi"
      />
      <Card
        title="hello world"
        rating="4"
        price="4000"
        author="Manjunath Kalburgi"
      />
      <Card
        title="hello world"
        rating="4"
        price="4000"
        author="Manjunath Kalburgi"
      />
      <Card
        title="hello world"
        rating="4"
        price="4000"
        author="Manjunath Kalburgi"
      />
    </>
  );
}
