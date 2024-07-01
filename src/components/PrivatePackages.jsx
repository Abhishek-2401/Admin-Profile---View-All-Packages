import React, { useState } from 'react';
import {
 
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PrivatePackageCards = ({ packages }) => {
  const [packageList, setPackageList] = useState(packages);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const handleToggle = (index) => {
    const newPackageList = [...packageList];
    newPackageList[index].active = !newPackageList[index].active;
    setPackageList(newPackageList);
  };

  const toggleMenu = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  const handleCheckboxChange = (index) => {
    const newPackageList = [...packageList];
    newPackageList[index].selected = !newPackageList[index].selected;
    setPackageList(newPackageList);
  };

  return (
    <>
      {packageList.map((pkg, index) => (
        <tr key={pkg.id} className="relative h-36 mb-6 border border-b-8 border-[#F2F4F8] w-full">
          <td className="px-6 whitespace-nowrap">
            <input
              type="checkbox"
              className="accent-[#9747FF] size-4 transition-all duration-[800ms] ease-in-out"
              checked={pkg.selected || false}
              onChange={() => handleCheckboxChange(index)}
            />
          </td>
          <td className="text-left text-[#222222] text-sm font-normal">{index + 1}</td>
          <td className="text-left text-sm font-normal text-[#222222]">
            <div className="font-medium text-xs text-[#222222]  ">{pkg.clientId}</div>
            <div className="font-normal text-xs text-[#787878]">{pkg.clientName}</div>
          </td>
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
          <td className="text-left">
            <div className="text-xs text-[#BABABA] font-medium italic absolute bottom-0 right-6 mb-2">
              Synced 1 hour ago at 04:50 p.m.
            </div>
          </td>
          <td className="text-center">
            <img src="delete-icon.png" alt="Delete" className="cursor-pointer w-4" />
          </td>
          <td className="relative z-10">
            <button onClick={() => toggleMenu(index)} className="absolute -top-2 right-1 p-2 rounded-md">
              <FontAwesomeIcon icon={faEllipsisH} />
            </button>
            {openMenuIndex === index && (
              <div className="absolute top-6 right-0 w-36 bg-[#FFFFFF] rounded-md shadow-md">
                <ul className="py-1">
                  <li className="flex items-center mb-2 hover:bg-gray-100 cursor-pointer">
                    <img src="edit-icon.png" alt="" className="mr-2 ml-2" />
                    Edit
                  </li>
                  <li className="flex items-center mb-2 hover:bg-gray-100 cursor-pointer">
                    <img src="share-icon.png" alt="" className="mr-2 ml-1" />
                    Share
                  </li>
                  <li className="flex items-center mb-2 hover:bg-gray-100 cursor-pointer">
                    <img src="details-icon.png" alt="" className="mr-2 ml-1" />
                    View Details
                  </li>
                </ul>
              </div>
            )}
          </td>
        </tr>
      ))}
    </>
  );
};

export default PrivatePackageCards;
