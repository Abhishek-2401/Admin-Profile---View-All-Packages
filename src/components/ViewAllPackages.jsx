import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import PackageAnalytics from "./PackagesAnalytics";
import NormalPackageFilters from "./NormalPackageFilters";
import PrivatePackageFilters from "./PrivatePackageFilters";
import NormalPackageCards from "./NormalPackages";
import PrivatePackageCards from "./PrivatePackages"; 

const ViewAllPackages = () => {
  const [isExportDropdownOpen, setIsExportDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPackageType, setSelectedPackageType] = useState("normal");

  const packagesPerPage = 6;
  const normalPackages = [
    {
      id: 1,
      name: "Munnar : Honeymoon  package",
      date: "9/18/16",
      categories: "Friends/ Family",
      destination: "Munnar",
      type: "Adventure",
      active: true,
    },
    {
      id: 2,
      name: "Munnar : Honeymoon  package",
      date: "9/18/16",
      categories: "Honeymoon",
      destination: "Munnar",
      type: "Mountain",
      active: false,
    },
    {
      id: 3,
      name: "Munnar : Honeymoon  package",
      date: "9/18/16",
      categories: "Solo",
      destination: "Munnar",
      type: "Adventure",
      active: false,
    },
    {
      id: 4,
      name: "Munnar : Honeymoon  package",
      date: "9/18/16",
      categories: "Friends/ Family",
      destination: "Munnar",
      type: "Homestay",
      active: true,
    },
    {
      id: 5,
      name: "Munnar : Honeymoon  package",
      date: "9/18/16",
      categories: "Friends/ Family",
      destination: "Munnar",
      type: "Adventure",
      active: true,
    },
    {
      id: 6,
      name: "Munnar : Honeymoon  package",
      date: "9/18/16",
      categories: "Friends/ Family",
      destination: "Munnar",
      type: "Adventure",
      active: true,
    },
    {
      id: 7,
      name: "Munnar : Honeymoon  package",
      date: "9/18/16",
      categories: "Honeymoon",
      destination: "Munnar",
      type: "Homestay",
      active: false,
    },
    {
      id: 8,
      name: "Munnar : Honeymoon  package",
      date: "9/18/16",
      categories: "Friends/ Family",
      destination: "Munnar",
      type: "Homestay",
      active: true,
    },
    {
      id: 9,
      name: "Munnar : Honeymoon  package",
      date: "9/18/16",
      categories: "Friends/ Family",
      destination: "Munnar",
      type: "Adventure",
      active: false,
    },
    {
      id: 10,
      name: "Munnar : Honeymoon  package",
      date: "9/18/16",
      categories: "Solo",
      destination: "Munnar",
      type: "Adventure",
      active: false,
    },

  ];

  const privatePackages = [
    {
      id: 1,
      name: "Munnar : Honeymoon  package",
      date: "9/18/16",
      categories: "Friends/ Family",
      destination: "Munnar",
      clientId: "#HD2107304810",
      clientName: "Nguyen, Shane",
    },
    {
      id: 2,
      name: "Munnar : Honeymoon  package",
      date: "9/18/16",
      categories: "Friends/ Family",
      destination: "Munnar",
      clientId: "#HD2107304810",
      clientName: "Nguyen, Shane",
    },
    {
      id: 3,
      name: "Munnar : Honeymoon  package",
      date: "9/18/16",
      categories: "Friends/ Family",
      destination: "Munnar",
      clientId: "#HD2107304810",
      clientName: "Nguyen, Shane",
    },
    {
      id: 4,
      name: "Munnar : Honeymoon  package",
      date: "9/18/16",
      categories: "Friends/ Family",
      destination: "Munnar",
      clientId: "#HD2107304810",
      clientName: "Nguyen, Shane",
    },
    {
      id: 5,
      name: "Munnar : Honeymoon  package",
      date: "9/18/16",
      categories: "Friends/ Family",
      destination: "Munnar",
      clientId: "#HD2107304810",
      clientName: "Nguyen, Shane",
    },
    {
      id: 6,
      name: "Munnar : Honeymoon  package",
      date: "9/18/16",
      categories: "Friends/ Family",
      destination: "Munnar",
      clientId: "#HD2107304810",
      clientName: "Nguyen, Shane",
    },
    {
      id: 7,
      name: "Munnar : Honeymoon  package",
      date: "9/18/16",
      categories: "Friends/ Family",
      destination: "Munnar",
      clientId: "#HD2107304810",
      clientName: "Nguyen, Shane",
    },
    {
      id: 8,
      name: "Munnar : Honeymoon  package",
      date: "9/18/16",
      categories: "Friends/ Family",
      destination: "Munnar",
      clientId: "#HD2107304810",
      clientName: "Nguyen, Shane",
    },
    {
      id: 9,
      name: "Munnar : Honeymoon  package",
      date: "9/18/16",
      categories: "Friends/ Family",
      destination: "Munnar",
      clientId: "#HD2107304810",
      clientName: "Nguyen, Shane",
    },
    {
      id: 10,
      name: "Munnar : Honeymoon  package",
      date: "9/18/16",
      categories: "Friends/ Family",
      destination: "Munnar",
      clientId: "#HD2107304810",
      clientName: "Nguyen, Shane",
    },
  ];

  const toggleExportDropdown = () => {
    setIsExportDropdownOpen(!isExportDropdownOpen);
  };

  const toggleSortDropdown = () => {
    setIsSortDropdownOpen(!isSortDropdownOpen);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const handlePackageTypeChange = (type) => {
    setSelectedPackageType(type);
    setCurrentPage(1); 
  };

  const packages =
    selectedPackageType === "normal" ? normalPackages : privatePackages;

  const indexOfLastPackage = currentPage * packagesPerPage;
  const indexOfFirstPackage = indexOfLastPackage - packagesPerPage;
  const currentPackages = packages.slice(
    indexOfFirstPackage,
    indexOfLastPackage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber); 
  };

  const totalPages = Math.ceil(packages.length / packagesPerPage);

  const renderPaginationButtons = () => {
    return Array.from({ length: totalPages }, (_, index) => index + 1).map(
      (page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`${
            currentPage === page
              ? "bg-[#157939] text-[#FFFFFF]"
              : "bg-[#F5F5F5] text-[#101010]"
          }  px-3 py-1 rounded-sm`}
        >
          {page}
        </button>
      )
    );
  };

  return (
    <div className="bg-[#F2F4F8] p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-medium text-[#000000]">Packages</h1>
          <h2 className="text-lg font-normal text-[#B8B8B8]">
            View all packages
          </h2>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Booking ID, Date, Package, Plan"
              className="w-72 h-8 p-2 pl-10 bg-[#F2F2F2] text-[#BABABA] text-xs font-normal rounded-lg focus:outline-none"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#808080]"
            />
          </div>
          <div className="relative z-10">
            <button
              onClick={toggleExportDropdown}
              className="w-[100px] h-9 p-2 border border-[#A8A8A8] rounded-md bg-none text-[#414141] text-sm font-normal flex items-center justify-between"
            >
              <div className="flex items-center">
                <img
                  src="export-icon.png"
                  alt="Export Icon"
                  className="mr-1 w-3 h-4"
                />
                Export
              </div>
              <FontAwesomeIcon className="ml-1" icon={faChevronDown} />
            </button>
            {isExportDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg">
                <ul className="py-1">
                  <li className="px-4 py-2 text-[#000000] text-sm font-normal cursor-pointer flex items-center">
                    <img
                      src="export-icon.png"
                      alt="Export Icon"
                      className="mr-2 w-3 h-4"
                    />
                    All Pages
                  </li>
                  <li className="px-4 py-2 text-[#000000] text-sm font-normal cursor-pointer flex items-center">
                    <img
                      src="export-icon.png"
                      alt="Export Icon"
                      className="mr-2 w-3 h-4"
                    />
                    Current Page
                  </li>
                  <li className="px-4 py-2 text-[#000000] text-sm font-normal cursor-pointer flex items-center relative">
                    <img
                      src="export-icon.png"
                      alt="Export Icon"
                      className="mr-2 w-3 h-4"
                    />
                    Pages
                    <input
                      type="text"
                      placeholder="1-3,5"
                      className="absolute right-4 w-16 h-6 px-2 border-l bg-[#EBEBEB] text-xs font-normal text-[#A5A5A5] outline-none"
                    />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <PackageAnalytics />
      <div className="flex mb-2 mt-12">
        <button
          onClick={() => handlePackageTypeChange("normal")}
          className={`px-4 py-2 border-b-4 ${
            selectedPackageType === "normal"
              ? "border-[#157939] text-[#3F3F3F] text-sm font-semibold"
              : "border-transparent text-[#808080] text-sm font-normal"
          }`}
        >
          Normal Packages
        </button>
        <button
          onClick={() => handlePackageTypeChange("private")}
          className={`px-4 py-2 border-b-4 ${
            selectedPackageType === "private"
              ? "border-[#157939] text-[#3F3F3F] text-sm font-semibold"
              : "border-transparent text-[#808080] text-sm font-normal"
          }`}
        >
          Private Packages
        </button>
      </div>
      <p className="text-[#157939] text-[10px] mt-4">
        *List Marked with Green line are shown on Landing page
      </p>
      <div className="flex justify-between items-center  mt-6">
        {selectedPackageType === "normal" ? (
          <NormalPackageFilters type="normal" />
        ) : (
          <PrivatePackageFilters type="private" />
        )}
        <div className="relative mt-6">
          <img
            src="sort-icon.png"
            alt=""
            onClick={toggleSortDropdown}
            className="cursor-pointer"
          />
          <span className="text-[#787878] text-[10px] cursor-pointer">
            Sort
          </span>
          {isSortDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-[#FFFFFF] rounded-md shadow-md">
              <div className="px-4 py-2">
                <label className="flex items-center cursor-pointer text-[#302F2F] text-sm font-normal mb-4">
                  <input
                    type="radio"
                    name="sortOption"
                    value="option1"
                    onChange={() => handleSortChange("option1")}
                    className="mr-2 text-[#49454F]"
                  />
                  Numerically
                </label>
                <label className="flex items-center cursor-pointer text-[#818181] text-sm font-normal mb-4">
                  <input
                    type="radio"
                    name="sortOption"
                    value="option2"
                    onChange={() => handleSortChange("option2")}
                    className="mr-2"
                  />
                  Last Updated
                </label>
                <label className="flex items-center cursor-pointer text-[#818181] text-sm font-normal mb-4">
                  <input
                    type="radio"
                    name="sortOption"
                    value="option3"
                    onChange={() => handleSortChange("option3")}
                    className="mr-2"
                  />
                  First Updated
                </label>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8">
        <table className="divide-y w-full">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-[#BABABA] tracking-wider">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={toggleSelectAll}
                  className="size-4"
                />
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-[#BABABA]  tracking-wider">
                S.No.
              </th>
              {selectedPackageType === "private" && (
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#BABABA] tracking-wider">
                  Client ID
                </th>
              )}
              <th className="px-4 py-3  text-xs font-semibold text-[#BABABA] uracking-wider">
                Package
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-[#BABABA] tracking-wider">
                Created On
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-[#BABABA] tracking-wider">
                Categories
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-[#BABABA] tracking-wider">
                Destination
              </th>
              {selectedPackageType === "normal" && (
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#BABABA] tracking-wider">
                  Type
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white  rounded-lg">
            {selectedPackageType === "normal" ? (
              <NormalPackageCards
                packages={currentPackages}
                selectAll={selectAll}
                toggleSelectAll={toggleSelectAll}
              />
            ) : (
              <PrivatePackageCards
                packages={currentPackages}
                selectAll={selectAll}
                toggleSelectAll={toggleSelectAll}
              />
            )}
          </tbody>
        </table>
        <div className="flex justify-center items-center mt-6">
          <div className="space-x-2 flex items-center">
            {renderPaginationButtons()}
          </div>
        </div>
        <div className="flex justify-end">
          <div className="text-base font-normal text-[#B0B0B0]">
            1-6 of 200 results
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllPackages;
