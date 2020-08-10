import React from 'react';

const Star = ({ ful = false }) => {
  return (
    <svg
      className={`mr-1 w-4 h-4 fill-current ${ful ? 'text-yellow-500' : 'text-gray-500'}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
    </svg>
  );
};

const StarsGroup = ({ stars }) => {
  const group = [];
  for (let i = 0; i < 5; i++) {
    group.push(<Star ful={i < stars} key={i}/>);
  }
  return <div className="flex items-center">{group}</div>;
};

export default StarsGroup;
