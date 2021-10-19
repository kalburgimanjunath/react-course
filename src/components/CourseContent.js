import React from 'react';
export default function CourseContent() {
  const Lecture = ({ lecture }) => {
    console.log(lecture);
    return (
      <div>
        {lecture.map((item) => {
          return (
            <>
              <div>{item.title}</div>
              <more>{item.text}</more>
            </>
          );
        })}
      </div>
    );
  };
  const sections = ['test section', 'test section'];
  const lecture = [
    { title: 'test lecture', text: 'test' },
    { title: 'test lecture', text: 'test' },
  ];

  return (
    <div>
      <ul>
        {sections.map((value) => {
          return (
            <li>
              {value}
              <Lecture lecture={lecture} />
            </li>
          );
        })}
        {/* {Object.keys(data).forEach((key) => {
          return <li value={key}>{data[key]}</li>;
        })} */}
        {/* {Object.entries(data).map(([key, value]) => (
          <div key={key}>{value}</div>
        ))} */}
      </ul>
    </div>
  );
}
