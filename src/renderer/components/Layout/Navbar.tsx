import React from 'react';

const Navbar = () => {
  return (
    <div className="md:fixed md:w-full md:top-0 md:z-20 flex flex-row flex-wrap items-center bg-white p-6 border-b border-gray-300">
      {/* Logo */}
      <div className="flex-none w-56 flex flex-row items-center">
        <img src="img/logo.png" className="w-10 flex-none" alt="Logo" />
        <strong className="capitalize ml-1 flex-1">Mongo Lens</strong>

        <button id="sliderBtn" className="flex-none text-right text-gray-900 hidden md:block">
          <i className="fad fa-list-ul"></i>
        </button>
      </div>
      {/* End Logo */}

      {/* Navbar Content Toggle */}
      <button id="navbarToggle" className="hidden md:block md:fixed right-0 mr-6">
        <i className="fad fa-chevron-double-down"></i>
      </button>
      {/* End Navbar Content Toggle */}

      {/* Navbar Content */}
      <div id="navbar" className="animated md:hidden md:fixed md:top-0 md:w-full md:left-0 md:mt-16 md:border-t md:border-b md:border-gray-200 md:p-10 md:bg-white flex-1 pl-3 flex flex-row flex-wrap justify-between items-center md:flex-col md:items-center">
        {/* Left */}
        <div className="text-gray-600 md:w-full md:flex md:flex-row md:justify-evenly md:pb-10 md:mb-10 md:border-b md:border-gray-200">
          <a className="mr-2 transition duration-500 ease-in-out hover:text-gray-900" href="#" title="Email">
            <i className="fad fa-envelope-open-text"></i>
          </a>
          <a className="mr-2 transition duration-500 ease-in-out hover:text-gray-900" href="#" title="Messages">
            <i className="fad fa-comments-alt"></i>
          </a>
          <a className="mr-2 transition duration-500 ease-in-out hover:text-gray-900" href="#" title="Tasks">
            <i className="fad fa-check-circle"></i>
          </a>
          <a className="mr-2 transition duration-500 ease-in-out hover:text-gray-900" href="#" title="Calendar">
            <i className="fad fa-calendar-exclamation"></i>
          </a>
        </div>
        {/* End Left */}

        {/* Right */}
        <div className="flex flex-row-reverse items-center">
          {/* User Dropdown */}
          <div className="dropdown relative md:static">
            <button className="menu-btn focus:outline-none focus:shadow-outline flex flex-wrap items-center">
              <div className="w-8 h-8 overflow-hidden rounded-full">
                <img className="w-full h-full object-cover" src="img/user.svg" alt="User" />
              </div>
              <div className="ml-2 capitalize flex">
                <h1 className="text-sm text-gray-800 font-semibold m-0 p-0 leading-none">moeSaid</h1>
                <i className="fad fa-chevron-down ml-2 text-xs leading-none"></i>
              </div>
            </button>

            <div className="text-gray-500 menu hidden md:mt-10 md:w-full rounded bg-white shadow-md absolute z-20 right-0 w-40 mt-5 py-2 animated faster">
              <a className="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out" href="#">
                <i className="fad fa-user-edit text-xs mr-1"></i>
                Edit my profile
              </a>
              <a className="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out" href="#">
                <i className="fad fa-inbox-in text-xs mr-1"></i>
                My inbox
              </a>
              <a className="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out" href="#">
                <i className="fad fa-badge-check text-xs mr-1"></i>
                Tasks
              </a>
              <a className="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out" href="#">
                <i className="fad fa-comment-alt-dots text-xs mr-1"></i>
                Chats
              </a>
              <hr />
              <a className="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out" href="#">
                <i className="fad fa-user-times text-xs mr-1"></i>
                Log out
              </a>
            </div>
          </div>
          {/* End User Dropdown */}

          {/* Notification Dropdown */}
          <div className="dropdown relative mr-5 md:static">
            <button className="text-gray-500 menu-btn p-0 m-0 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-all ease-in-out duration-300">
              <i className="fad fa-bells"></i>
            </button>
            <div className="menu hidden rounded bg-white md:right-0 md:w-full shadow-md absolute z-20 right-0 w-84 mt-5 py-2 animated faster">
              <div className="px-4 py-2 flex flex-row justify-between items-center capitalize font-semibold text-sm">
                <h1>Notifications</h1>
                <div className="bg-teal-100 border border-teal-200 text-teal-500 text-xs rounded px-1">
                  <strong>5</strong>
                </div>
              </div>
              <hr />
              {/* Notification Items */}
              <a className="flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">
                <div className="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
                  <i className="fad fa-birthday-cake text-sm"></i>
                </div>
                <div className="flex-1 flex flex-row">
                  <div className="flex-1">
                    <h1 className="text-sm font-semibold">Poll..</h1>
                    <p className="text-xs text-gray-500">Text here also</p>
                  </div>
                  <div className="text-right text-xs text-gray-500">
                    <p>4 min ago</p>
                  </div>
                </div>
              </a>
              <hr />
              {/* Add more notifications as needed */}
              <div className="px-4 py-2 mt-2">
                <a href="#" className="border border-gray-300 block text-center text-xs uppercase rounded p-1 hover:text-teal-500 transition-all ease-in-out duration-500">
                  View all
                </a>
              </div>
            </div>
          </div>
          {/* End Notification Dropdown */}

          {/* Messages Dropdown */}
          <div className="dropdown relative mr-5 md:static">
            <button className="text-gray-500 menu-btn p-0 m-0 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-all ease-in-out duration-300">
              <i className="fad fa-comments"></i>
            </button>
            <div className="menu hidden md:w-full md:right-0 rounded bg-white shadow-md absolute z-20 right-0 w-84 mt-5 py-2 animated faster">
              <div className="px-4 py-2 flex flex-row justify-between items-center capitalize font-semibold text-sm">
                <h1>Messages</h1>
                <div className="bg-teal-100 border border-teal-200 text-teal-500 text-xs rounded px-1">
                  <strong>3</strong>
                </div>
              </div>
              <hr />
              {/* Message Items */}
              <a className="flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out" href="#">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-100 border border-gray-300">
                  <img className="w-full h-full object-cover" src="img/user1.jpg" alt="User1" />
                </div>
                <div className="flex-1 flex flex-row">
                  <div className="flex-1">
                    <h1 className="text-sm font-semibold">Mohamed Said</h1>
                    <p className="text-xs text-gray-500">Yeah I know</p>
                  </div>
                  <div className="text-right text-xs text-gray-500">
                    <p>4 min ago</p>
                  </div>
                </div>
              </a>
              {/* Add more messages as needed */}
              <div className="px-4 py-2 mt-2">
                <a href="#" className="border border-gray-300 block text-center text-xs uppercase rounded p-1 hover:text-teal-500 transition-all ease-in-out duration-500">
                  View all
                </a>
              </div>
            </div>
          </div>
          {/* End Messages Dropdown */}
        </div>
      </div>
      {/* End Navbar Content */}
    </div>
  );
};

export default Navbar;