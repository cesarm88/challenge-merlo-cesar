import React from 'react';
import TopInfo from '../components/TopInfo';
import CostResults from '../components/CostResults';

const RightPanel = ({ children }) => {
  return (
    <div className="w-11/12 lg:w-2/5 mb-8 lg:mb-0 bg-white shadow-lg rounded-lg p-6 order-first lg:order-last">
      <TopInfo />
      {children}
      <CostResults />
    </div>
  );
};

export default RightPanel;
