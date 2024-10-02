import icon from '../../../../assets/icon.png';

const Navbar = () => {
  return (
    <div className="fixed w-full top-0 z-20 flex flex-row items-center bg-white p-2 border-b border-gray-200">
      {/* Logo */}
      <div className="flex-none w-48 flex flex-row items-center">
        <img src={icon} className="w-8 flex-none" alt="Logo" />
        <strong className="ml-1 text-sm">Mongo Lens</strong>
      </div>
      {/* End Logo */}

      {/* Navbar Content */}
      <div
        id="navbar"
        className="flex-1 pl-2 flex flex-row justify-between items-center"
      >
        {/* Left */}
        <div className="text-gray-600 flex space-x-4">
          {/* <a className="hover:text-gray-900" href="#" title="Email">
            <i className="fad fa-envelope-open-text"></i>
          </a>
          <a className="hover:text-gray-900" href="#" title="Messages">
            <i className="fad fa-comments-alt"></i>
          </a>
          <a className="hover:text-gray-900" href="#" title="Tasks">
            <i className="fad fa-check-circle"></i>
          </a>
          <a className="hover:text-gray-900" href="#" title="Calendar">
            <i className="fad fa-calendar-exclamation"></i>
          </a> */}
        </div>
        {/* End Left */}

        {/* Right */}
        <div className="flex flex-row-reverse items-center">
          {/* Notification Dropdown */}
          <div className="dropdown relative mr-4">
            <button className="text-gray-500 p-0 m-0 hover:text-gray-900">
              <i className="fad fa-bells"></i>
            </button>
            <div className="menu hidden rounded bg-white shadow-md absolute z-20 right-0 w-72 mt-4 py-2">
              <div className="px-3 py-2 flex flex-row justify-between text-sm">
                <h1>Notifications</h1>
                <div className="bg-teal-100 border border-teal-200 text-teal-500 text-xs rounded px-1">
                  <strong>5</strong>
                </div>
              </div>
              <hr />
              <a
                className="flex flex-row items-center px-3 py-3 text-sm hover:bg-gray-200"
                href="#"
              >
                <div className="px-2 py-1 rounded bg-gray-100 border border-gray-300 mr-2">
                  <i className="fad fa-birthday-cake text-sm"></i>
                </div>
                <div className="flex-1">
                  <h1 className="text-sm font-semibold">Poll..</h1>
                  <p className="text-xs text-gray-500">Text here also</p>
                </div>
                <div className="text-xs text-gray-500">4 min ago</div>
              </a>
              <div className="px-3 py-2">
                <a
                  href="#"
                  className="border border-gray-300 block text-center text-xs uppercase rounded p-1 hover:text-teal-500"
                >
                  View all
                </a>
              </div>
            </div>
          </div>
          {/* End Notification Dropdown */}

          {/* Messages Dropdown */}
          <div className="dropdown relative mr-4">
            <button className="text-gray-500 p-0 m-0 hover:text-gray-900">
              <i className="fad fa-comments"></i>
            </button>
            <div className="menu hidden rounded bg-white shadow-md absolute z-20 right-0 w-72 mt-4 py-2">
              <div className="px-3 py-2 flex flex-row justify-between text-sm">
                <h1>Messages</h1>
                <div className="bg-teal-100 border border-teal-200 text-teal-500 text-xs rounded px-1">
                  <strong>3</strong>
                </div>
              </div>
              <hr />
              <a
                className="flex flex-row items-center px-3 py-3 text-sm hover:bg-gray-200"
                href="#"
              >
                <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-300 mr-2">
                  <img
                    className="w-full h-full object-cover"
                    src="img/user1.jpg"
                    alt="User1"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="text-sm font-semibold">Mohamed Said</h1>
                  <p className="text-xs text-gray-500">Yeah I know</p>
                </div>
                <div className="text-xs text-gray-500">4 min ago</div>
              </a>
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