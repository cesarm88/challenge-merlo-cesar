import React from 'react';
import { NavLink } from 'react-router-dom';
import Arrow from '../components/icons/Arrow';

const AVATAR_URL =
  'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=6&m=1179420343&s=170667a&w=0&h=KVFsVQCZouanocPSvJbcMhPlfCWRMyjDp-4sWQiA8lw=';


const Header = () => {
  return (
    <header className="w-full bg-white py-6 px-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="w-9/12 md:w-4/12 flex justify-between items-center text-lg font-bold">
          <NavLink
            to="/review"
            className="text-gray-500"
            activeClassName="text-gray-800"
          >
            Review
          </NavLink>
          <Arrow className="text-gray-800" />
          <NavLink
            to="/confirmation"
            className="text-gray-500"
            activeClassName="text-gray-800"
          >
            Confirmation
          </NavLink>
        </nav>

        <div
          className="w-16 h-16 rounded-full"
          style={{ background: `url(${AVATAR_URL}) left/cover` }}
        ></div>
      </div>
    </header>
  );
};

export default Header;
