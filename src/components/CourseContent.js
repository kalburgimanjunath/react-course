import React from 'react';
export default function CourseContent() {
  const Lecture = ({ lecture }) => {
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

  // const data = [
  //   {
  //     'section 1': [
  //       { title: 'test lecture1', text: 'test' },
  //       { title: 'test lecture2', text: 'test' },
  //     ],
  //     'section 2': [
  //       { title: 'test lecture3', text: 'test' },
  //       { title: 'test lecture4', text: 'test' },
  //     ],
  //   },
  // ];
  return (
    <div>
      <ul>
        {sections.map((value, key) => {
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
