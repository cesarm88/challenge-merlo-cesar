import React, { useCallback, useRef } from 'react';
import LeftPanel from '../parts/LeftPanel';
import RightPanel from '../parts/RightPanel';
import SelectOptions from '../components/SelectOptions';
import { useSelector, useDispatch } from 'react-redux';
import { handleSubmitAction } from '../redux/reservationDuck';
import { useHistory } from 'react-router-dom';

const ReviewPage = () => {
  const { status } = useSelector((state) => state.listing);
  const { results, userMessage  } = useSelector((state) => state.reservation);
  const message = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if(results.total){
      dispatch(handleSubmitAction(message.current.value));
      history.push('/confirmation')
    }else{
      alert('You must complete all the options')
    }
  },[results.total]);

  if (status.loading) return <p>Loading...</p>;
  if (status.error) return <p>An Error Ocurred</p>;

  return (
    <>
      <LeftPanel title="Review trip details and adjust options if needed">
        <hr />
        <form onSubmit={handleSubmit} className="mt-4">
          <h3 className="text-lg font-semibold mb-4">Say Hello to your host</h3>
          <textarea ref={message} defaultValue={userMessage || ''} className="h-48 w-full bg-gray-200 rounded"></textarea>
          <button type="submit" className="w-full py-3 bg-red-500 text-white font-bold mt-4 rounded hover:bg-red-700">
            Continue
          </button>
        </form>
      </LeftPanel>

      <RightPanel>
        <SelectOptions />
      </RightPanel>
    </>
  );
};

export default ReviewPage;
