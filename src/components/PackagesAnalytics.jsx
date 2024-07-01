import React, { useState } from 'react';

const PackageAnalytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('weekly');

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  return (
    <div className="bg-[#FFFFFF] p-6 mt-12 max-w-5xl shadow-[0px_1px_4px_0px_#00000026] rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <div className="flex">
          <button
            onClick={() => handlePeriodChange('weekly')}
            className={`px-4 py-4 rounded-l-lg border border-[#000000] ${
              selectedPeriod === 'weekly' ? 'bg-[#157939] text-[#FFFFFF]' : 'bg-none text-[#787878]'
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => handlePeriodChange('monthly')}
            className={`px-4 py-4 border-y border-[#000000] ${
              selectedPeriod === 'monthly' ? 'bg-[#157939] text-[#FFFFFF]' : 'bg-none text-[#787878]'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => handlePeriodChange('yearly')}
            className={`px-4 py-4 rounded-r-lg border border-[#000000] ${
              selectedPeriod === 'yearly' ? 'bg-[#157939] text-[#FFFFFF]' : 'bg-none text-[#787878]'
            }`}
          >
            Yearly
          </button>
        </div>
        <img src="share-icon.png" alt="" />
      </div>
      <div className="mt-4 ">
        <div className="flex items-center  ">
          <div className="relative flex-1 p-2 rounded-lg flex items-center">
            <img src="image-1.png" alt="Most Booked Package" className="rounded-full" />
            <div className="ml-4">
              <p className="text-base font-normal text-[#BABABA]">Most Booked</p>
              <h3 className="text-base font-medium text-[#000000]">Munnar : Honeymoon package</h3>
            </div>
            <img src="most-booked-icon.png" alt="" className="absolute bottom-1 right-2 text-[#157939] rounded-full bg-[#F0FEEA]" />
          </div>
          <div className="relative flex-1 p-2  flex items-center border-x-[1px] border-[#157939]">
            <img src="image-1.png" alt="Least Booked Package" className="rounded-full ml-2" />
            <div className="ml-4 ">
              <p className="text-base font-normal text-[#BABABA]">Least Booked</p>
              <h3 className="text-base font-medium text-[#000000] mr-4 ">Munnar : Honeymoon package</h3>
            </div>
            <img src="least-booked-arrow.png" alt="" className="absolute bottom-1 right-2 text-[#157939] rounded-full bg-[#FEB0B080]" />
          </div>
          <div className="flex-1 p-2 flex items-center ml-2">
            <img src="image-1.png" alt="Total Packages" className="rounded-full" />
            <div className="ml-4">
              <p className="text-base font-normal text-[#BABABA]">Total Packages</p>
              <h3 className="text-base font-medium text-[#000000]">
                50 <span className="text-[#4F55E4] text-sm font-normal">(40 Active)</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageAnalytics;
