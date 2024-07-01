import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import ViewAllPackages from './ViewAllPackages';

const SideNavbar = () => {
  const [dropdowns, setDropdowns] = useState({
    bookings: false,
    destinations: false,
    packages: false,
    clientprofile: false,
    landingpage: false,
  });
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedSubmenu, setSelectedSubmenu] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
    setSelectedMenu((prevState) => (prevState === menu ? null : menu));
  };

  const selectSubmenu = (submenu) => {
    setSelectedSubmenu(submenu);
  };

  const renderContent = () => {
    switch (selectedSubmenu) {
      case 'viewPackages':
        return <ViewAllPackages />;
      default:
        return <div></div>;
    }
  };

  return (
    <div className="flex h-screen">
      <nav className="w-64 bg-[#FFFFFF] text-black h-screen">
        <div className="p-4">
          <h1 className="text-sm text-[#404040] font-medium mb-6">MENU</h1>
          <div className="mb-6">
            <h2 className="flex items-center text-sm text-[#787878] font-normal">
              <img src="dashboard-icon.png" alt="Dashboard Icon" className="w-5 h-5 mr-2" />
              Dashboard
            </h2>
          </div>
          <div className="mb-2">
            <button
              onClick={() => toggleDropdown('bookings')}
              className={`w-full h-10 rounded-r-lg text-left flex justify-between items-center ${
                selectedMenu === 'bookings' ? 'bg-[#F7F7F7] text-[#157939] font-semibold border-l-[6px] border-[#1ED760]' : 'text-[#787878] font-normal'
              }`}
            >
              <div className="flex items-center text-sm">
                <img src="bookings-icon.png" alt="Bookings Icon" className="-ml-1" />
                <span>Bookings</span>
              </div>
              <FontAwesomeIcon
                className={`mr-2 transform transition-transform duration-500 ${dropdowns.bookings ? 'rotate-180 bg-white rounded-full p-1' : 'rotate-0 p-1'}`}
                icon={faChevronDown}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                dropdowns.bookings ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="ml-[2px] text-[#666666] text-sm font-normal border-l-2 border-[#157939] flex flex-col">
                <button
                  onClick={() => selectSubmenu('createBooking')}
                  className={`text-center h-10 rounded-r-lg ${
                    selectedSubmenu === 'createBooking' ? 'bg-[#DDFACF] text-[#222222]' : ''
                  }`}
                >
                  Create Booking
                </button>
                <button
                  onClick={() => selectSubmenu('viewBookings')}
                  className={`text-center h-10 rounded-r-lg ${
                    selectedSubmenu === 'viewBookings' ? 'bg-[#DDFACF] text-[#222222]' : ''
                  }`}
                >
                  View All Bookings
                </button>
              </div>
            </div>
          </div>

          <div className="mb-2">
            <button
              onClick={() => toggleDropdown('destinations')}
              className={`w-full h-10 rounded-r-lg text-left flex justify-between items-center ${
                selectedMenu === 'destinations' ? 'bg-[#F7F7F7] text-[#157939] font-semibold border-l-[6px] border-[#1ED760]' : 'text-[#787878] font-normal'
              }`}
            >
              <div className="flex items-center text-sm">
                <img src="destination-icon.png" alt="Destinations Icon" className="mr-2" />
                <span>Destinations</span>
              </div>
              <FontAwesomeIcon
                className={`mr-2 transform transition-transform duration-500 ${dropdowns.destinations ? 'rotate-180 bg-white rounded-full p-1' : 'rotate-0 p-1'}`}
                icon={faChevronDown}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                dropdowns.destinations ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="ml-[2px] text-[#666666] text-sm font-normal border-l-2 border-[#157939] flex flex-col">
                <button
                  onClick={() => selectSubmenu('createDestination')}
                  className={`text-center h-10 rounded-r-lg ${
                    selectedSubmenu === 'createDestination' ? 'bg-[#DDFACF] text-[#222222]' : ''
                  }`}
                >
                  Create Destination
                </button>
                <button
                  onClick={() => selectSubmenu('viewDestinations')}
                  className={`text-center h-10 rounded-r-lg ${
                    selectedSubmenu === 'viewDestinations' ? 'bg-[#DDFACF] text-[#222222]' : ''
                  }`}
                >
                  View All Destinations
                </button>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <button
              onClick={() => toggleDropdown('packages')}
              className={`w-full h-10 rounded-r-lg text-left flex justify-between items-center ${
                selectedMenu === 'packages' ? 'bg-[#F7F7F7] text-[#157939] font-semibold border-l-[6px] border-[#1ED760]' : 'text-[#787878] font-normal'
              }`}
            >
              <div className="flex items-center text-sm">
                <img src="packages-icon.png" alt="Packages Icon" className="mr-2" />
                <span>Packages</span>
              </div>
              <FontAwesomeIcon
                className={`mr-2 transform transition-transform duration-500 ${dropdowns.packages ? 'rotate-180 bg-white rounded-full p-1' : 'rotate-0 p-1'}`}
                icon={faChevronDown}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                dropdowns.packages ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="ml-[2px] text-[#666666] text-sm font-normal border-l-2 border-[#157939] flex flex-col">
                <button
                  onClick={() => selectSubmenu('createPackage')}
                  className={`text-center h-10 rounded-r-lg ${
                    selectedSubmenu === 'createPackage' ? 'bg-[#DDFACF] text-[#222222]' : ''
                  }`}
                >
                  Create Package
                </button>
                <button
                  onClick={() => selectSubmenu('viewPackages')}
                  className={`text-center h-10 rounded-r-lg ${
                    selectedSubmenu === 'viewPackages' ? 'bg-[#DDFACF] text-[#222222]' : ''
                  }`}
                >
                  View All Packages
                </button>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="flex items-center text-sm text-[#404040] font-medium">OTHERS</h2>
          </div>
          <div className="mb-2">
            <button
              onClick={() => toggleDropdown('clientprofile')}
              className={`w-full h-10 rounded-r-lg text-left flex justify-between items-center ${
                selectedMenu === 'clientprofile' ? 'bg-[#F7F7F7] text-[#157939] font-semibold border-l-[6px] border-[#1ED760]' : 'text-[#787878] font-normal'
              }`}
            >
              <div className="flex items-center text-sm">
                <img src="client-profile.png" alt="Client Profile Icon" className="w-5 h-5 mr-2" />
                <span>Client Profile</span>
              </div>
              <FontAwesomeIcon
                className={`mr-2 transform transition-transform duration-500 ${dropdowns.clientprofile ? 'rotate-180 bg-white rounded-full p-1' : 'rotate-0 p-1'}`}
                icon={faChevronDown}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                dropdowns.clientprofile ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="ml-[2px] text-[#666666] text-sm font-normal border-l-2 border-[#157939] flex flex-col">
                <button
                  onClick={() => selectSubmenu('createProfile')}
                  className={`text-center h-10 rounded-r-lg ${
                    selectedSubmenu === 'createProfile' ? 'bg-[#DDFACF] text-[#222222]' : ''
                  }`}
                >
                  Create Profile
                </button>
                <button
                  onClick={() => selectSubmenu('viewProfiles')}
                  className={`text-center h-10 rounded-r-lg ${
                    selectedSubmenu === 'viewProfiles' ? 'bg-[#DDFACF] text-[#222222]' : ''
                  }`}
                >
                  View All Profiles
                </button>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <button
              onClick={() => toggleDropdown('landingpage')}
              className={`w-full h-10 rounded-r-lg text-left flex justify-between items-center ${
                selectedMenu === 'landingpage' ? 'bg-[#F7F7F7] text-[#157939] font-semibold border-l-[6px] border-[#1ED760]' : 'text-[#787878] font-normal'
              }`}
            >
              <div className="flex items-center text-sm">
                <img src="landing-page.png" alt="Landing Page Icon" className="w-5 h-5 mr-2" />
                <span>Landing Page</span>
              </div>
              <FontAwesomeIcon
                className={`mr-2 transform transition-transform duration-500 ${dropdowns.landingpage ? 'rotate-180 bg-white rounded-full p-1' : 'rotate-0 p-1'}`}
                icon={faChevronDown}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                dropdowns.landingpage ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="ml-[2px] text-[#666666] text-sm font-normal border-l-2 border-[#157939] flex flex-col">
                <button
                  onClick={() => selectSubmenu('advertisements')}
                  className={`text-center h-10 rounded-r-lg ${
                    selectedSubmenu === 'advertisements' ? 'bg-[#DDFACF] text-[#222222]' : ''
                  }`}
                >
                  Advertisements
                </button>
                <button
                  onClick={() => selectSubmenu('landingDestinations')}
                  className={`text-center h-10 rounded-r-lg ${
                    selectedSubmenu === 'landingDestinations' ? 'bg-[#DDFACF] text-[#222222]' : ''
                  }`}
                >
                  Destinations
                </button>
                <button
                  onClick={() => selectSubmenu('heroSection')}
                  className={`text-center h-10 rounded-r-lg ${
                    selectedSubmenu === 'heroSection' ? 'bg-[#DDFACF] text-[#222222]' : ''
                  }`}
                >
                  Hero Section
                </button>
              </div>
            </div>
          </div>

          <div className="mt-auto mt-12">
            <button className="w-full text-left text-sm text-[#FF0000] font-normal flex items-center">
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2 text-[#FF0000] text-xl" />
              Log Out
            </button>
          </div>
        </div>
      </nav>
      <main className="flex-1 bg-[#F2F4F8]">
        {renderContent()}
      </main>
    </div>
  );
};

export default SideNavbar;