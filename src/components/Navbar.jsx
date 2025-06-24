import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-[#252729] text-white px-6 md:px-12 py-4 shadow-sm'>
      <div className='max-w-screen-xl mx-auto whitespace-nowrap gap-4 flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center gap-2'>
          <img src='/Logo/securend.png' alt='SecureEnd Logo' className='h-7' />
        </div>

        {/* Navigation Links */}
        <div className='hidden md:flex items-center space-x-8 ml-80 font-medium text-gray-400 text-base'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `relative ${
                isActive
                  ? 'text-white after:block after:h-[2px] after:bg-[#4c6fff] after:scale-x-100 after:transition-transform after:duration-300 after:origin-left'
                  : 'text-gray-400 hover:text-white'
              }`
            }
          >
            Home
          </NavLink>

          {/* Platform Dropdown */}
          <div className='relative group'>
            <button className='flex items-center gap-1 hover:text-white'>
              Platform <FaChevronDown className='text-xs' />
            </button>

            <div className='absolute top-full left-0 font-medium mt-2 bg-[#212325] text-gray-400 rounded-xl w-60 border border-gray-500 py-2 px-4 shadow-lg z-50 space-y-2
              opacity-0 invisible group-hover:visible group-hover:opacity-100 
              transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0
            '>
              <NavLink
                to='/roc'
                className='block cursor-pointer hover:text-white transition-colors duration-200 break-words whitespace-normal'
              >
                Risk Operation Centre (ROC)
              </NavLink>
              <NavLink
                to='/tvm-page'
                className='block cursor-pointer hover:text-white transition-colors duration-200 break-words whitespace-normal'
              >
                Threat & Vulnerability Management (TVM)
              </NavLink>
              <NavLink
                to='/remediation'
                className='block cursor-pointer hover:text-white transition-colors duration-200 break-words whitespace-normal'
              >
                Remediation Factory
              </NavLink>
              <NavLink
                to='/risk-sources'
                className='block cursor-pointer hover:text-white transition-colors duration-200 break-words whitespace-normal'
              >
                Risk Sources
              </NavLink>
            </div>
          </div>

          <NavLink
            to='/integration'
            className={({ isActive }) =>
              `relative ${
                isActive
                  ? 'text-white after:block after:h-[2px] after:bg-[#4c6fff] after:scale-x-100 after:transition-transform after:duration-300 after:origin-left'
                  : 'text-gray-400 hover:text-white'
              }`
            }
          >
            Integration
          </NavLink>

          <NavLink
            to='/contacts'
            className={({ isActive }) =>
              `relative ${
                isActive
                  ? 'text-white after:block after:h-[2px] after:bg-[#4c6fff] after:scale-x-100 after:transition-transform after:duration-300 after:origin-left'
                  : 'text-gray-400 hover:text-white'
              }`
            }
          >
            Contacts
          </NavLink>

          <NavLink
            to='/book-demo'
            className={({ isActive }) =>
              `relative ${
                isActive
                  ? 'text-white after:block after:h-[2px] after:bg-[#4c6fff] after:scale-x-100 after:transition-transform after:duration-300 after:origin-left'
                  : 'text-gray-400 hover:text-white'
              }`
            }
          >
            Book a Demo
          </NavLink>
        </div>

        {/* CTA Button */}
        <button className='relative text-white font-semibold px-5 py-2 rounded-md overflow-hidden shadow-lg hover:shadow-xl transition duration-300'>
          <span className='absolute inset-0 bg-[linear-gradient(343deg,#225cd2_50%,#2B4A77_50%,#307bfe_100%)] opacity-100 transition-opacity duration-300 hover:opacity-90'></span>
          <span className='relative z-10'>Get Started</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
