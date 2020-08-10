import React from 'react';
import Spinner from './Spinner';
import { useSelector } from 'react-redux';

const CostResults = () => {
  const { nights_count, nights_cost, discount, cleaning_fee, total } = useSelector((state) => state.reservation.results);
  const { isLoading, error } = useSelector((state) => state.reservation.status);

  return (
    <div>
      <h3 className="text-lg font-semibold">You reservation cost:</h3>

      <ul className="w-full text-gray-700 bg-gray-200 py-2 px-4 mt-2 rounded relative">
        {isLoading && <Spinner />}
        
        <li className="flex justify-between mb-4">
          <span className="font-bold">Stay Duration:</span>
          <span className="text-gray-700 font-semibold">{nights_count || '----'} Nights</span>
        </li>
        <li className="flex justify-between mb-4">
          <span className="font-bold">Night Cost:</span>
          <span className="text-gray-700 font-semibold">{nights_cost || '----'} $</span>
        </li>
        <li className="flex justify-between mb-4">
          <span className="font-bold">Discount:</span>
          <span className="text-gray-700 font-semibold">{discount || '----'} $</span>
        </li>
        <li className="flex justify-between mb-4">
          <span className="font-bold">Cleaning Fees:</span>
          <span className="text-gray-700 font-semibold">{cleaning_fee || '----'} $</span>
        </li>
        <li className="flex justify-between ">
          <span className="font-bold text-xl">Your Total:</span>
          <span className="font-bold text-xl">{total || '----'} $</span>
        </li>
      </ul>
    </div>
  );
};

export default CostResults;
