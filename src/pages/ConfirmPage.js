import React, { useCallback, useState } from 'react';
import RightPanel from '../parts/RightPanel';
import LeftPanel from '../parts/LeftPanel';
import SelectResults from '../components/SelectResults';
import { confirmAndPay } from '../helpers';
import { useSelector } from 'react-redux';

const ConfirmPage = () => {
  const [success, setSuccess] = useState(false);

  const { checkin, checkout, adults, children, pets, message } = useSelector((state) => state.reservation);
  const { id } = useSelector((state) => state.listing.data);

  const handleClick = useCallback(() => {
    const payload = {
      checkin,
      checkout,
      adults,
      children,
      pets,
      message,
    };

    confirmAndPay(id, payload, setSuccess);
  }, []);

  return (
    <>
      <LeftPanel title="Confirm and Pay">
        {success ? (
          <p className="text-center mt-4 text-xl text-green-700">{success}</p>
        ) : (
          <button onClick={handleClick} className="w-full py-3 bg-green-500 text-white font-bold mt-4 rounded hover:bg-green-700">
            Confirm your Reservation
          </button>
        )}
      </LeftPanel>
      <RightPanel>
        <SelectResults />
      </RightPanel>
    </>
  );
};

export default ConfirmPage;
