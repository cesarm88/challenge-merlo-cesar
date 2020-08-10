import React from 'react';
import { useSelector } from 'react-redux';

const LeftPanel = ({ children, title = '' }) => {
  const { base_price } = useSelector((state) => state.listing.data);
  const {
    checkinToString,
    checkoutToString,
    adults,
    children: childrens,
    results: { nights_count },
  } = useSelector((state) => state.reservation);

  return (
    <div className="w-11/12 lg:w-6/12 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold">{title}</h2>

      <ul className="w-full md:w-10/12 mt-10 text-gray-700">
        <li className="flex justify-between mb-4">
          <span className="text-xl font-bold">Dates:</span>
          <span className="text-gray-700 font-semibold">{`${checkinToString || '---'} to ${checkoutToString || '---'}`}</span>
        </li>

        <li className="flex justify-between mb-4">
          <span className="text-xl font-bold">Guests:</span>
          <span className="text-gray-700 font-semibold">{adults + childrens || '---'} Guests</span>
        </li>

        <li className="flex justify-between mb-4">
          <span className="text-xl font-bold">Trip Duration:</span>
          <span className="text-gray-700 font-semibold">{nights_count || '---'}</span>
        </li>

        <li className="flex justify-between mb-4">
          <span className="text-xl font-bold">Base Price:</span>
          <span className="text-gray-700 font-semibold">{base_price || '---'} $</span>
        </li>
      </ul>

      {/* CHILDREN COMPONENTS */}
      {children}
    </div>
  );
};

export default LeftPanel;
