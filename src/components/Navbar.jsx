import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import {  NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-[#252729] text-white px-6 md:px-12 py-4 shadow-sm'>
      <div className='max-w-screen-xl mx-auto flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center gap-2'>
          <img src='/Logo/securend.png' alt='SecureEnd Logo' className='h-7' />
        </div>

        {/* Navigation Links */}
        <div className='hidden md:flex items-center space-x-8 ml-80 font-medium text-gray-400 text-base'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `relative ${isActive ? 'text-white after:block after:h-[2px] after:bg-[#4c6fff] after:scale-x-100 after:transition-transform after:duration-300 after:origin-left' : 'text-gray-400 hover:text-white'}`
            }
          >
            Home
          </NavLink>

          <button className='flex items-center gap-1 hover:text-white'>
            Platform <FaChevronDown className='text-xs' />
          </button>

          <NavLink
            to='/integration'
            className={({ isActive }) =>
              `relative ${isActive ? 'text-white after:block after:h-[2px] after:bg-[#4c6fff] after:scale-x-100 after:transition-transform after:duration-300 after:origin-left' : 'text-gray-400 hover:text-white'}`
            }
          >
            Integration
          </NavLink>

          <NavLink
            to='/contacts'
            className={({ isActive }) =>
              `relative ${isActive ? 'text-white after:block after:h-[2px] after:bg-[#4c6fff] after:scale-x-100 after:transition-transform after:duration-300 after:origin-left' : 'text-gray-400 hover:text-white'}`
            }
          >
            Contacts
          </NavLink>

          <NavLink
            to='/book-demo'
            className={({ isActive }) =>
              `relative ${isActive ? 'text-white after:block after:h-[2px] after:bg-[#4c6fff] after:scale-x-100 after:transition-transform after:duration-300 after:origin-left' : 'text-gray-400 hover:text-white'}`
            }
          >
            Book a Demo
          </NavLink>
        </div>

        {/* CTA Button */}
        <button className='ml-6 bg-gradient-to-br from-[#4c6fff] to-[#3f49ff] hover:opacity-90 text-white px-5 py-2 rounded-lg font-semibold shadow-md'>
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
