import React from 'react';
import Sidebar from '../components/SideBarSection/Sidebar';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import placeholder from '../Assets/placeholder.png';
import { FaTwitter, FaUser } from 'react-icons/fa';
import { BsFillCalendarWeekFill } from 'react-icons/bs';
import { BsBalloon } from 'react-icons/bs';

const Account = () => {
  return (
    <div className="m-auto h-[700px] w-[750px] rounded-2xl shadow-2xl border-0 mr-10 justify-center items-center">
      <div>
        <div className="bg-neutral-200 h-44 relative"></div>
        <div className=" ml-5 flex-col items-start mt-[-3rem] relative">
          <img
            src={placeholder}
            alt="Profile Picture"
            className="h-28 w-28 rounded-full object-cover border-4 border-white"
          />
          <div className="mt-4">
            <h2 className="text-xl font-bold">Gaurav</h2>
            <p className="text-sm text-gray-600">@Hey_username</p>
          </div>
          
          <div className='p-4 relative z-1'>
            <p className='text-gray-600 z-1 relative'> bio........</p>
            <div className="flex items-center mt-4">
              <BsBalloon className="mr-2" />
              <p className="text-gray-600 text-sm z-1 relative">
                Date of birth
              </p>
              <BsFillCalendarWeekFill className="ml-4 mr-2" />
              <p className="text-gray-600 text-sm z-1 relative">
                Joined on: 31st July 2023
              </p>
            </div>
           
          </div>
        </div>
        <div className='border-b-[1px] border-neutral-100 pb-0.5'>
          <div className='flex justify-end p-2'></div>
        </div>
      </div>
    </div>
  );
};

export default Account;
