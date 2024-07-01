import React, { useState } from "react";
import {
  faChevronDown,
  faChevronUp,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const BluePopup = ({ isOpen, selectedCount, onInactivateAll, onActivateAll, onShare, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center pb-4  z-50">
      <div className="bg-[#4F55E4] text-white rounded-lg py-1 shadow-lg flex space-x-3">
        <div className="flex items-center bg-none flex px-2 items-center justify-center text-[#F9F9F9] text-sm font-normal">
          <div className=" bg-none ml-2 text-[#F9F9F9] text-sm font-normal">
            {selectedCount}
          </div>
          <div className="ml-2">Selected</div>
        </div>
        <div className="border-l border-gray-300 px-2 py-2 ">
          <button className="text-[#F9F9F9]  font-normal ml-2 text-sm  flex items-center " onClick={onInactivateAll}>
          <img src="inactivate-all.png" alt="Inactivate" className="mr-2 " />
            <span>Inactive All</span>
           
          </button>
        </div>
        <div className="border-l border-gray-300 px-2 py-2 ">
          <button className="text-[#F9F9F9]  font-normal ml-2 text-sm  flex items-center " onClick={onActivateAll}>
          <img src="activate-all.png" alt="activate" className="mr-2 " />
            <span>Active All</span>
           
          </button>
        </div>
        <div className="border-l border-gray-300  py-2 ">
          <button className="text-[#F9F9F9]  font-normal ml-3  text-sm  flex items-center " onClick={onShare}>
          <img src="share-white.png" alt="Share" className="mr-2 " />
            <span>Share</span>
           
          </button>
        </div>
        <div className="border-l border-gray-300 px-3 py-2 ">
          <button className="text-[#F9F9F9]  font-normal   text-sm  flex items-center " onClick={onDelete}>
          <img src="delete-white.png" alt="Delete" className="mr-2" />
            <span>Delete</span>
           
          </button>
        </div>
      </div>
    </div>
  );
};


const NormalPackageCards = ({ packages }) => {
  const [packageList, setPackageList] = useState(packages);
  const [selectedPackages, setSelectedPackages] = useState([]);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const handleToggleStatus = (index) => {
    const newPackageList = [...packageList];
    newPackageList[index].active = !newPackageList[index].active;
    setPackageList(newPackageList);
  };

  const toggleMenu = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  const handleSelectPackage = (index) => {
    const newPackageList = [...packageList];
    newPackageList[index].selected = !newPackageList[index].selected;
    setPackageList(newPackageList);

    const selected = newPackageList.filter(pkg => pkg.selected);
    setSelectedPackages(selected);
  };

  const handleInactivateAll = () => {
    const newPackageList = packageList.map(pkg => {
      if (pkg.selected) pkg.active = false;
      return pkg;
    });
    setPackageList(newPackageList);
  };

  const handleActivateAll = () => {
    const newPackageList = packageList.map(pkg => {
      if (pkg.selected) pkg.active = true;
      return pkg;
    });
    setPackageList(newPackageList);
  };

  const handleShare = () => {
    alert("Share functionality to be implemented");
  };

  const handleDelete = () => {
    const newPackageList = packageList.filter(pkg => !pkg.selected);
    setPackageList(newPackageList);
    setSelectedPackages([]);
  };

  return (
    <>
      {packageList.map((pkg, index) => (
        <tr key={pkg.id} className="relative h-36 mb-6  border border-b-8 border-[#F2F4F8] w-full">
            <td className="px-6 whitespace-nowrap">
            <input
              type="checkbox"
              className="accent-[#9747FF] size-4 transition-all duration-[800ms] ease-in-out"
              checked={pkg.selected || false}
              onChange={() => handleSelectPackage(index)}
            />
          </td>
          <td className="text-left text-[#222222] text-sm font-normal">{index + 1}.</td>
          <td className="flex items-center w-fit text-left mt-4 border border-[#E3E3E3] rounded-lg p-4">
            <img src="card-image-1.png" alt="Package" className="mr-4" />
            <div className="">
              <div className="font-semibold text-[#222222] text-sm items-center">{pkg.name}</div>
              <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-[#787878] font-normal flex items-center">
                <img src="midrange-icon.png" alt="Icon" className="mr-2" />
              Mid range</span>
                <span className="ml-4 text-[#FF0000] font-semibold text-xs">₹ 7,500</span>
              </div>
            </div>
          </td>
          <td className="text-left text-sm text-[#787878] font-normal">{pkg.date}</td>
          <td className="text-left text-sm text-[#222222] font-normal">{pkg.categories}</td>
          <td className="text-left text-sm text-[#4F55E4] font-medium">{pkg.destination}</td>
          <td className="text-left text-sm font-normal text-[#222222]">
            {pkg.type}
          </td>
          <td className="text-left">
            <div className="flex items-center justify-center">
              <input
                type="checkbox"
                name={`toggle${index}`}
                id={`toggle${index}`}
                className="toggle-checkbox absolute block w-0 h-0 overflow-hidden opacity-0 cursor-pointer"
                checked={pkg.active}
                onChange={() => handleToggleStatus(index)}
              />
              <label
                htmlFor={`toggle${index}`}
                className={`toggle-label block w-12 h-6 rounded-full cursor-pointer ${
                  pkg.active ? "bg-[#1ED760]" : "bg-[#787878]"
                }`}
              >
                <span
                  className={`toggle-button absolute w-6 h-6 rounded-full bg-white shadow-md transform duration-300 ease-in-out ${
                    pkg.active ? "translate-x-6 bg-green-800" : "translate-x-0 bg-gray-700"
                  }`}
                ></span>
              </label>
            </div>
            <span className="block mt-1 text-xs text-[#BABABA] font-medium text-center">
              {pkg.active ? "Active" : "Inactive"}
            </span>
            <div className="text-xs text-[#BABABA] font-medium italic absolute right-6 bottom-0 mb-2">
              Synced 1 hour ago at 04:50 p.m.
              <img src="trending-icon.png" alt="Trending" className="ml-20 inline" />
            </div>
          </td>
          <td className="text-center">
            <img src="delete-icon.png" alt="Delete" className="cursor-pointer w-4 ml-4" />
          </td>
          <td className="relative z-10">
            <button onClick={() => toggleMenu(index)} className="absolute -top-2 right-1 p-2 rounded-md">
              <FontAwesomeIcon icon={faEllipsisH} />
            </button>
            {openMenuIndex === index && (
              <div className="absolute top-4 right-0 w-40 bg-[#FFFFFF] rounded-md shadow-md">
                <ul className="py-1">
                  <li className="flex items-center mb-2 hover:bg-gray-100 cursor-pointer mb-2">
                    <img src="details-icon.png" alt="" className="mr-2 ml-1" />
                    View Details
                  </li>
                  <li className="flex items-center mb-2 hover:bg-gray-100 cursor-pointer mb-2">
                    <img src="edit-icon.png" alt="" className="mr-2 ml-2" />
                    Edit
                  </li>
                  <li className="flex items-center mb-2 hover:bg-gray-100 cursor-pointer mb-2">
                    <img src="share-icon.png" alt="" className="mr-2 ml-1" />
                    Share
                  </li>
                  <li className="flex items-center hover:bg-gray-100 cursor-pointer mb-2">
                    <img src="related-booking-icon.png" alt="" className="mr-2 ml-1" />
                    Related Booking
                  </li>
                </ul>
              </div>
            )}
          </td>
        </tr>
      ))}
      <BluePopup
        isOpen={selectedPackages.length > 0}
        selectedCount={selectedPackages.length}
        onInactivateAll={handleInactivateAll}
        onActivateAll={handleActivateAll}
        onShare={handleShare}
        onDelete={handleDelete}
      />
    </>
  );
};

export default NormalPackageCards;
