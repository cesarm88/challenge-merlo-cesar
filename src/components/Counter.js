import React from 'react';
import Button from './Button';

const Counter = ({ qty = '0', min = 0, max = 1, handleClick = () => {} }) => {
  return (
    <div className="w-40 bg-gray-200 flex justify-between items-center font-bold">
      <Button char="-" onClick={() => handleClick(qty - 1, min, max)} />
      <span>{qty}</span>
      <Button char="+" onClick={() => handleClick(qty + 1, min, max)} />
    </div>
  );
};

export default Counter;
