import React from 'react';

const Button = ({ char = '', onClick = () => {}, disabled = false }) => {
  return (
    <button onClick={onClick} className={`w-10 py-2 text-white ${disabled ? 'bg-gray-500' : 'bg-red-500 hover:bg-red-600'}`}>
      {char}
    </button>
  );
};

export default Button;
