import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='min-h-[40vh] bg-gradient-to-r from-[#22242f] via-[#252643] to-[#21232c] text-gray-300 font-light'>
      {/* Main Grid */}
      <div className='max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-6 gap-10'>
        {/* Column 1: Logo + Tagline */}
        <div className='md:col-span-2'>
          <div className='flex items-center mb-4'>
            <img
              src='/Logo/securend.png'
              alt='Secure& Logo'
              className='h-10 mr-2'
            />
          </div>
          <p className='text-sm leading-[1.8] max-w-xs mt-2 overflow-hidden line-clamp-3'>
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
        <div>
          <h4 className='text-gray-200 font-medium mb-3'>Contact Us</h4>
          <p className='text-sm mb-2'>
            <strong>Call Us:</strong> +91 9205404075
          </p>
          <p className='text-sm'>
            <strong>Mail Us:</strong> enquiry@securend.ai
          </p>
        </div>

        {/* Column 5: Social */}
        <div>
          <h4 className='text-gray-200 font-medium mb-3'>Social</h4>
          <div className='flex space-x-4'>
            <a
              href="#"
              className="relative flex items-center justify-center text-white font-semibold w-10 h-10 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <span className="absolute inset-0 bg-[linear-gradient(305deg,#225cd2_50%,#2B4A77_50%,#307bfe_100%)] opacity-100 transition-opacity duration-300 hover:opacity-90"></span>
              <span className="relative z-10"><FaFacebookF /></span>
            </a>

            <a
              href="#"
              className="relative flex items-center justify-center text-white font-semibold w-10 h-10 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <span className="absolute inset-0 bg-[linear-gradient(305deg,#225cd2_50%,#2B4A77_50%,#307bfe_100%)] opacity-100 transition-opacity duration-300 hover:opacity-90"></span>
              <span className="relative z-10"><FaTwitter /></span>
            </a>
            <a
              href="#"
              className="relative flex items-center justify-center text-white font-semibold w-10 h-10 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <span className="absolute inset-0 bg-[linear-gradient(305deg,#225cd2_50%,#2B4A77_50%,#307bfe_100%)] opacity-100 transition-opacity duration-300 hover:opacity-90"></span>
              <span className="relative z-10"><FaYoutube /></span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='flex justify-center border-t border-gray-700'>
        <div className='w-full max-w-screen-xl px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-100'>
          <p className='text-center md:text-left'>
            © 2025 Secure& ~ All rights Reserved
          </p>
          <p className='mt-2 md:mt-0 text-gray-300 text-center md:text-right'>
            <a href='#' className='hover:text-gray-200'>
              Privacy Policy
            </a>{' '}
            |{' '}
            <a href='#' className='hover:text-gray-200'>
              Terms and Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
