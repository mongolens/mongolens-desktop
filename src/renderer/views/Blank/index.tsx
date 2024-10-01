import React from 'react';
import Navbar from '../../components/Layout/Navbar';
import Sidebar from '../../components/Layout/Sidebar';

const Blank: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="h-screen flex flex-row flex-wrap">
        <Sidebar />
        <div className="bg-gray-100 flex-1 p-6 md:mt-16">content here</div>
      </div>
    </div>
  );
};

export default Blank;
