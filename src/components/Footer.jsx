import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className='min-h-[40vh] bg-gradient-to-r from-[#22242f] via-[#252643] to-[#21232c] text-gray-300 font-light'>
      {/* Main Grid */}
      <div className='max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8'>
        {/* Column 1: Logo + Tagline */}
        <div className='md:col-span-2'>
          <div className='flex items-center mb-4'>
            <img
              src='/Logo/securend.png'
              alt='SecureEnd Logo'
              className='h-10 mr-2'
            />
          </div>
          <p className='text-sm leading-relaxed max-w-xs'>
            Beyond Security: A Strategic Approach to turning protection into
            progress, risk into resilience, and defense into opportunity.
          </p>
        </div>

        {/* Column 2: Learn More */}
        <div>
          <h4 className='text-gray-200 font-medium mb-3'>Learn More</h4>
          <ul className='space-y-2 text-sm'>
            <li>
              <a href='#' className='hover:text-gray-200'>
                Pricing
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-gray-200'>
                Solutions
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-gray-200'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-gray-200'>
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h4 className='text-gray-200 font-medium mb-3'>Company</h4>
          <ul className='space-y-2 text-sm'>
            <li>
              <a href='#' className='hover:text-gray-200'>
                Partner with us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className='w-70'>
          <h4 className='text-gray-200 font-medium mb-3'>Contact Us</h4>
          <p className='text-sm mb-2'>
            <strong>Call Us:</strong> +91 9205404075
          </p>
          <p className='text-sm mb-2'>
            <strong>Mail Us:</strong> enquiry@securend.ai
          </p>
        </div>

        {/* Column 5: Social */}
        <div className='sm:col-span-2 md:col-span-1'>
          <h4 className='text-gray-200 font-medium ml-10 mb-3'>Social</h4>
          <div className='flex ml-10 space-x-4'>
            {/* Twitter */}
            <a
              href='#'
              className='relative flex items-center justify-center text-white font-semibold w-10 h-10 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition duration-300'
            >
              <span className='absolute inset-0 bg-[linear-gradient(305deg,#225cd2_50%,#2B4A77_50%,#307bfe_100%)] opacity-100 transition-opacity duration-300 hover:opacity-90'></span>
              <span className='relative z-10'>
                <SiX className='text-white' />
              </span>
            </a>

            {/* Linkdin */}
            <a
              href='#'
              className='relative flex items-center justify-center text-white font-semibold w-10 h-10 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition duration-300'
            >
              <span className='absolute inset-0 bg-[linear-gradient(305deg,#225cd2_50%,#2B4A77_50%,#307bfe_100%)] opacity-100 transition-opacity duration-300 hover:opacity-90'></span>
              <span className='relative z-10'>
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-gray-700'>
        <div className='w-full max-w-screen-xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-100 space-y-2 sm:space-y-0'>
          <p className='text-center sm:text-left'>
            © 2025 Secure& ~ All rights Reserved
          </p>
          <div className='text-center sm:text-right space-x-2'>
            <a href='#' className='hover:text-gray-200'>
              Privacy Policy
            </a>
            <span className=' text-gray-400'>|</span>
            <a href='#' className='hover:text-gray-200'>
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
