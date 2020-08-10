import React from 'react';
import Arrow from '../components/icons/Arrow';
import Counter from '../components/Counter';
import Button from './Button';
import { getActualDate } from '../helpers';
import { useSelector, useDispatch } from 'react-redux';
import {
  handleCheckinAction,
  handleCheckoutAction,
  handleAdultsAction,
  handleChildrenAction,
  handlePetsAction,
} from '../redux/reservationDuck';

const SelectOptions = () => {
  const { adults: maxAdults, children: maxChildrens, is_pets_allowed } = useSelector((state) => state.listing.data);
  const { checkin, checkout, adults, children, pets } = useSelector((state) => state.reservation);
  const dispatch = useDispatch();

  return (
    <>
      {/* SELECT DATE */}
      <div className="flex flex-col sm:flex-row justify-between items-center flex-wrap bg-gray-200 p-3 rounded mt-6">
        <div className="w-56 sm:w-auto lg:w-full xl:w-auto bg-white p-1 rounded my-2">
          <label className="font-semibold">Check In</label>
          <br />
          <input
            type="date"
            min={getActualDate()}
            max={checkout}
            value={checkin || ''}
            onChange={(e) => {
              dispatch(handleCheckinAction(e.target.value));
            }}
          />
        </div>
        <Arrow className="hidden sm:block lg:hidden xl:block text-gray-700" />
        <div className="w-56 sm:w-auto lg:w-full xl:w-auto bg-white p-1 rounded my-2">
          <label className="font-semibold">Check Out</label>
          <br />
          <input
            type="date"
            min={checkin}
            value={checkout || ''}
            onChange={(e) => {
              dispatch(handleCheckoutAction(e.target.value));
            }}
            disabled={!checkin}
          />
        </div>
      </div>

      {/* OPTIONS */}
      <div className="mt-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-bold text-gray-700">How many guests?</span>
          <Counter
            qty={adults}
            min={1}
            max={maxAdults}
            handleClick={(n, min, max) => dispatch(handleAdultsAction(n, min, max))}
          />
        </div>

        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-bold text-gray-700">How many childrens?</span>
          <Counter
            qty={children}
            min={0}
            max={maxChildrens}
            handleClick={(n, min, max) => dispatch(handleChildrenAction(n, min, max))}
          />
        </div>

        {is_pets_allowed && (
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-bold text-gray-700">Do you have pets?</span>
            <div className="w-20 bg-gray-400 flex justify-between items-center">
              <Button char="YES" disabled={!pets} onClick={() => dispatch(handlePetsAction(true))} />
              <Button char="NO" disabled={pets} onClick={() => dispatch(handlePetsAction(false))} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SelectOptions;
