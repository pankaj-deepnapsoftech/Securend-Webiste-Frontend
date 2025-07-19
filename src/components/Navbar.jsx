import React, { useState } from 'react';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) setIsMobileDropdownOpen(false);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  const handleScrollToContactSection = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'navigation' } });
    } else {
      const section = document.getElementById('navigation');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobileMenuOpen) toggleMobileMenu();
  };

  return (
    <nav className='bg-[#252729] text-white px-6 md:px-12 py-4 shadow-sm relative z-50'>
      <div className='max-w-screen-xl mx-auto flex items-center justify-between flex-wrap lg:flex-nowrap'>
        <div className='flex items-center gap-2 flex-shrink-0'>
          <img src='/Logo/securend.png' alt='SecureEnd Logo' className='h-7' />
        </div>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex flex-wrap items-center justify-center gap-10 font-medium text-gray-400 text-base flex-1'>
          <NavLink to='/' className='hover:text-white'>
            Home
          </NavLink>

          <div className='relative group'>
            <button
              onClick={toggleMobileDropdown}
              className='flex items-center gap-1 w-full text-left hover:text-white font-semibold'
            >
              Platform
              <FaChevronDown className='text-xs' />
            </button>
            <div className='absolute top-full left-0 font-medium mt-2 bg-[#212325] text-gray-400 rounded-xl w-60 border border-gray-500 py-2 px-4 shadow-lg z-50 space-y-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0'>
              <NavLink to='/roc' className='block hover:text-white'>
                Risk Operation Centre (ROC)
              </NavLink>
              <NavLink to='/tvm-page' className='block hover:text-white'>
                Threat & Vulnerability Management (TVM)
              </NavLink>
              <NavLink to='/' className='block hover:text-white'>
                Remediation Factory
              </NavLink>
              <NavLink to='/' className='block hover:text-white'>
                Risk Sources
              </NavLink>
            </div>
          </div>

          <NavLink to='/integration' className='hover:text-white'>
            Integration
          </NavLink>
          <button
            onClick={handleScrollToContactSection}
            className='hover:text-white'
          >
            Contacts
          </button>
          <button
            onClick={handleScrollToContactSection}
            className='hover:text-white'
          >
            Book a Demo
          </button>
        </div>

        <a
          href='https://platform.securend.ai/sign-in'
          target='_blank'
          rel='noopener noreferrer'
          className='hidden lg:inline-block relative text-white font-semibold px-5 py-2 rounded-md overflow-hidden shadow-lg hover:shadow-xl transition duration-300'
        >
          <span className='absolute inset-0 bg-[linear-gradient(343deg,#225cd2_50%,#2B4A77_50%,#307bfe_100%)]'></span>
          <span className='relative z-10'>Get Started</span>
        </a>

        <button
          onClick={toggleMobileMenu}
          className='lg:hidden text-xl text-white'
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-[#252729] shadow-md px-6 py-4 space-y-4 text-gray-300 transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <NavLink
          to='/'
          onClick={toggleMobileMenu}
          className='block hover:text-white'
        >
          Home
        </NavLink>

        <div>
          <button
            onClick={toggleMobileDropdown}
            className='flex items-center gap-1 w-full hover:text-white'
          >
            Platform
          </button>
          {isMobileDropdownOpen && (
            <div className='ml-4 mt-2 space-y-2'>
              <NavLink
                to='/roc'
                onClick={toggleMobileMenu}
                className='block hover:text-white'
              >
                Risk Operation Centre (ROC)
              </NavLink>
              <NavLink
                to='/tvm-page'
                onClick={toggleMobileMenu}
                className='block hover:text-white'
              >
                Threat & Vulnerability Management (TVM)
              </NavLink>
              <NavLink
                to='/remediation'
                onClick={toggleMobileMenu}
                className='block hover:text-white'
              >
                Remediation Factory
              </NavLink>
              <NavLink
                to='/risk-sources'
                onClick={toggleMobileMenu}
                className='block hover:text-white'
              >
                Risk Sources
              </NavLink>
            </div>
          )}
        </div>

        <NavLink
          to='/integration'
          onClick={toggleMobileMenu}
          className='block hover:text-white'
        >
          Integration
        </NavLink>
        <button
          onClick={handleScrollToContactSection}
          className='block w-full text-left hover:text-white'
        >
          Contacts
        </button>
        <button
          onClick={handleScrollToContactSection}
          className='block w-full text-left hover:text-white'
        >
          Book a Demo
        </button>

        <a
          href='https://platform.securend.ai/sign-in'
          className='hidden lg:inline-block shrink-0 relative text-white font-semibold px-5 py-2 rounded-md overflow-hidden shadow-lg hover:shadow-xl transition duration-300'
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
