import React from 'react';
import Arrow from './icons/Arrow';
import { useSelector } from 'react-redux';

const SelectResults = () => {
  const { checkinToString, checkoutToString, adults, children, pets } = useSelector((state) => state.reservation);

  return (
    <>
      {/* SELECT DATE */}
      <div className="flex justify-between items-center bg-gray-200 p-3 rounded mt-6">
        <div className="bg-white text-lg p-2 rounded">{checkinToString || '---'}</div>
        <Arrow />
        <div className="bg-white text-lg p-2 rounded">{checkoutToString ? checkoutToString.split(',')[0] : '---'}</div>
      </div>

      {/* OPTIONS */}
      <div className="mt-6 w-full md:w-10/12">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-bold text-gray-700">How many guests?</span>
          <span className="text-gray-700 font-semibold">{adults} Guests</span>
        </div>

        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-bold text-gray-700">How many childrens?</span>
          <span className="text-gray-700 font-semibold">{children} Children</span>
        </div>

        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-bold text-gray-700">Do you have pets?</span>
          <span className="text-gray-700 font-semibold">{pets ? 'YES' : 'NO'}</span>
        </div>
      </div>
    </>
  );
};

export default SelectResults;
