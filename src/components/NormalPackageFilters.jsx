import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";

const Divider = () => <div className="h-full w-[.5px] bg-[#C8C8C8] mx-2"></div>;

const NormalPackageFilters = () => {
  const [showCalendarOptions, setShowCalendarOptions] = useState(false);
  const [showCategoriesOptions, setShowCategoriesOptions] = useState(false);
  const [showDestinationOptions, setShowDestinationOptions] = useState(false);
  const [showTypeOptions, setShowTypeOptions] = useState(false);
  const [showStatusOptions, setShowStatusOptions] = useState(false);
  const [showCreatedByOptions, setShowCreatedByOptions] = useState(false);

  const handleCalendarDropdown = () => {
    setShowCalendarOptions(!showCalendarOptions);
  };

  const handleCategoriesDropdown = () => {
    setShowCategoriesOptions(!showCategoriesOptions);
  };

  const handleDestinationDropdown = () => {
    setShowDestinationOptions(!showDestinationOptions);
  };

  const handleTypeDropdown = () => {
    setShowTypeOptions(!showTypeOptions);
  };

  const handleStatusDropdown = () => {
    setShowStatusOptions(!showStatusOptions);
  };

  const handleCreatedByDropdown = () => {
    setShowCreatedByOptions(!showCreatedByOptions);
  };

  return (
    <div className="mt-10 h-16 bg-[#F9F9FA] w-fit border border-[#C8C8C8] rounded-lg  flex justify-between items-stretch">
      <div className="flex items-stretch">
        <div className="flex items-center p-4">
          <img src="filter-icon.png" alt="" className="ml-2 mr-2" />
          <span className="text-[#868686] text-xs font-medium">Filter By</span>
        </div>

        <div className="flex items-center p-4 relative">
          <img src="calendar-icon.png" alt="" className="mr-2" />

          <FontAwesomeIcon
            icon={showCalendarOptions ? faChevronUp : faChevronDown}
            className="text-[#222222] ml-2 cursor-pointer"
            onClick={handleCalendarDropdown}
          />
          {showCalendarOptions && (
            <div className="absolute top-full  bg-[#FFFFFF]  mt-2 p-2 rounded-md shadow-lg z-10">
              <label className="flex items-center text-[#302F2F] text-sm font-normal mb-4 mt-3">
                <input
                  type="radio"
                  name=""
                  value=""
                  className=" text-[#49454F] mr-2"
                />
                All
              </label>
              <label className="flex items-center text-[#302F2F] text-sm font-normal mb-4">
                <input
                  type="radio"
                  name=""
                  value=""
                  className=" text-[#49454F] mr-2"
                />
                Last One Month
              </label>
              <label className="flex items-center text-[#302F2F] text-sm font-normal mb-4">
                <input
                  type="radio"
                  name=""
                  value=""
                  className=" text-[#49454F] mr-2"
                />
                Last 3 Months
              </label>
              <label className="flex items-center text-[#302F2F] text-sm font-normal mb-4">
                <input
                  type="radio"
                  name=""
                  value=""
                  className="text-[#49454F] mr-2"
                />
                Last 6 Months
              </label>
              <label className="flex items-center text-[#302F2F] text-sm font-normal mb-4">
                <input
                  type="radio"
                  name=""
                  value=""
                  className="text-[#49454F] mr-2"
                />
                Last 1 year
              </label>
              <div className="relative mb-4">
                <hr className="text-[#C1C1C1]" />
                <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-[#c8c8c8]">
                  or
                </span>
              </div>
              <div className="flex items-center mb-2">
                <label className="w-24 text-[#000000] text-sm font-normal">
                  Start Date
                </label>
                <input
                  type=""
                  placeholder="01/01/0000"
                  className="bg-[#EBEBEB] rounded p-1 w-36"
                />
              </div>
              <div className="flex items-center mt-6">
                <label className="w-24 text-sm font-normal">End Date:</label>
                <input
                  type=""
                  placeholder="01/01/0000"
                  className="bg-[#EBEBEB] rounded p-1 w-36"
                />
              </div>
            </div>
          )}
        </div>
        <Divider />
        <div className="flex items-center p-4 relative">
          <span
            onClick={handleCategoriesDropdown}
            style={{ cursor: "pointer" }}
            className="text-[#202224] text-sm font-medium"
          >
            Categories
          </span>
          <FontAwesomeIcon
            icon={showCategoriesOptions ? faChevronUp : faChevronDown}
            className="text-[#222222]  ml-2 cursor-pointer"
            onClick={handleCategoriesDropdown}
          />
          {showCategoriesOptions && (
            <div className="absolute top-full w-48 bg-[#FFFFFF]  mt-2 p-2 rounded-lg z-10">
              <label className="flex items-center mb-4 mt-2">
                <input
                  type="checkbox"
                  name=""
                  value=""
                  className="mr-2 text-[#202224] text-sm font-normal whitespace-nowrap"
                />
                All Categories
              </label>
              <label className="flex items-center mb-4 mt-2">
                <input
                  type="checkbox"
                  name=""
                  value=""
                  className="mr-2 text-[#202224] text-sm font-normal whitespace-nowrap"
                />
                Honeymoon
              </label>
              <label className="flex items-center mb-4 mt-2">
                <input
                  type="checkbox"
                  name=""
                  value=""
                  className="mr-2 text-[#202224] text-sm font-normal whitespace-nowrap"
                />
                Solo
              </label>
              <label className="flex items-center mb-4 mt-2">
                <input
                  type="checkbox"
                  name=""
                  value=""
                  className="mr-2 text-[#202224] text-sm font-normal whitespace-nowrap"
                />
                Family/ Friends
              </label>
            </div>
          )}
        </div>
        <Divider />
        <div className="flex items-center p-4 relative">
          <span
            onClick={handleDestinationDropdown}
            style={{ cursor: "pointer" }}
            className="text-[#202224] text-sm font-medium"
          >
            Destination
          </span>
          <FontAwesomeIcon
            icon={showDestinationOptions ? faChevronUp : faChevronDown}
            className="text-[#222222]  ml-2 cursor-pointer"
            onClick={handleDestinationDropdown}
          />
          {showDestinationOptions && (
            <div className="absolute top-full  bg-[#FFFFFF] w-36  mt-2 p-2 rounded-md z-10">
              <label className="flex items-center mb-4 mt-2">
                <input
                  type="checkbox"
                  name=""
                  value=""
                  className="mr-2 text-[#202224] text-sm font-normal whitespace-nowrap"
                />
                All
              </label>
              <label className="flex items-center mb-4 mt-2">
                <input
                  type="checkbox"
                  name=""
                  value=""
                  className="mr-2 text-[#202224] text-sm font-normal whitespace-nowrap"
                />
                Delhi
              </label>
              <label className="flex items-center mb-4 mt-2">
                <input
                  type="checkbox"
                  name=""
                  value=""
                  className="mr-2 text-[#202224] text-sm font-normal whitespace-nowrap"
                />
                Munnar
              </label>
              <label className="flex items-center mb-4 mt-2">
                <input
                  type="checkbox"
                  name=""
                  value=""
                  className="mr-2 text-[#202224] text-sm font-normal whitespace-nowrap"
                />
                Mumbai
              </label>
              <label className="flex items-center mb-4 mt-2">
                <input
                  type="checkbox"
                  name=""
                  value=""
                  className="mr-2 text-[#202224] text-sm font-normal whitespace-nowrap"
                />
                Kolkata
              </label>
            </div>
          )}
        </div>
        <Divider />
        <div className="flex items-center p-4 relative">
          <span
            onClick={handleTypeDropdown}
            style={{ cursor: "pointer" }}
            className="text-[#202224] text-sm font-medium"
          >
            Type
          </span>
          <FontAwesomeIcon
            icon={showTypeOptions ? faChevronUp : faChevronDown}
            className="text-[#222222]  ml-2 cursor-pointer"
            onClick={handleTypeDropdown}
          />
          {showTypeOptions && (
            <div className="absolute top-full w-36 bg-[#FFFFFF] mt-2 p-2 rounded-md z-10">
              <label className="flex items-center mb-4 mt-2">
                <input
                  type="radio"
                  name=""
                  value=""
                  className="mr-2 text-[#202224] text-sm font-normal whitespace-nowrap"
                />
                All
              </label>
              <label className="flex items-center mb-4 mt-2">
                <input
                  type="radio"
                  name=""
                  value=""
                  className="mr-2 text-[#202224] text-sm font-normal whitespace-nowrap"
                />
                Adventure
              </label>
              <label className="flex items-center mb-4 mt-2">
                <input
                  type="radio"
                  name=""
                  value=""
                  className="mr-2 text-[#202224] text-sm font-normal whitespace-nowrap"
                />
                Mountain
              </label>
              <label className="flex items-center mb-4 mt-2">
                <input
                  type="radio"
                  name=""
                  value=""
                  className="mr-2 text-[#202224] text-sm font-normal whitespace-nowrap"
                />
                Homestay
              </label>
            </div>
          )}
        </div>
        <Divider />
        <div className="flex items-center p-4 relative">
          <span
            onClick={handleStatusDropdown}
            style={{ cursor: "pointer" }}
            className="text-[#202224] text-sm font-medium"
          >
            Status
          </span>
          <FontAwesomeIcon
            icon={showStatusOptions ? faChevronUp : faChevronDown}
            className="text-[#222222]  ml-2 cursor-pointer"
            onClick={handleStatusDropdown}
          />
          {showStatusOptions && (
            <div className="absolute top-full w-36 bg-[#FFFFFF] mt-2 p-2 rounded-md z-10">
              <label className="flex items-center mb-4 mt-2">
                <input
                  type="radio"
                  name=""
                  value=""
                  className="mr-2 text-[#202224] text-sm font-normal whitespace-nowrap"
                />
                All
              </label>
              <label className="flex items-center mb-4 mt-2">
                <input
                  type="radio"
                  name=""
                  value=""
                  className="mr-2 text-[#202224] text-sm font-normal whitespace-nowrap"
                />
                Active
              </label>
              <label className="flex items-center mb-4 mt-2">
                <input
                  type="radio"
                  name=""
                  value=""
                  className="mr-2 text-[#202224] text-sm font-normal whitespace-nowrap"
                />
                Inactive
              </label>
            </div>
          )}
        </div>
        <Divider />
        <div className="flex items-center p-4 cursor-pointer">
          <span className="text-[#6B6B6B] text-sm font-normal">Reset</span>
          <FontAwesomeIcon icon={faRedo} className="text-[#818181] ml-2" />
        </div>
      </div>
    </div>
  );
};

export default NormalPackageFilters;
