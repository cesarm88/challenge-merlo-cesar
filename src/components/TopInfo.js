import React from 'react';
import StarsGroup from './StarsGroup';
import { useSelector } from 'react-redux';

const TopInfo = () => {
  
  const { description, image_url, location, stars } = useSelector((state) => state.listing.data);

  return (
    <div className="flex justify-between">
      <div className="w-8/12">
        <h2 className="text-xl font-semibold">{description}</h2>
        <p className="font-semibold mb-2">{location || 'Mayne Island'}</p>
        <StarsGroup stars={stars || 3} />
      </div>
      <div className="w-24 h-24 bg-blue-500">
        <img className="w-24 h-24 " src={image_url} alt={description} />
      </div>
    </div>
  );
};

export default TopInfo;
