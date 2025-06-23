'use client';

import React from 'react';
import { FaStar } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineFilter } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import { MdViewModule } from 'react-icons/md';

export default function IntegrationPage() {
  return (
    <div className='bg-gradient-to-r from-[#24243e] via-[#25264e] to-[#21232a] text-white min-h-screen px-6 pb-20'>
      <header className='text-center py-16'>
        <h1 className='text-5xl font-bold'>
          Security <br />{' '}
          <span className='bg-gradient-to-r from-[#6190ee] to-[#4a59dd] bg-clip-text text-transparent'>
            Integrations
          </span>
        </h1>
        <p className='text-md text-gray-400 mt-6 max-w-xl mx-auto'>
          Connect your security tools and platforms to create a unified security
          operations center. Streamline workflows and enhance visibility across
          your security stack.
        </p>
      </header>

      <section>
        <h2 className='text-4xl font-bold px-4 mt-20 mx-100 mb-8 flex items-center gap-2'>
          <img src='/Images/Vector3.png' alt='Star Icon' className='w-6 h-6' />
          Popular Integrations
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4'>
          <img
            src='/Images/integration1.png'
            alt='Integration 1'
            className='rounded-xl'
          />
          <img
            src='/Images/integration2.png'
            alt='Integration 2'
            className='rounded-xl'
          />
          <img
            src='/Images/integration3.png'
            alt='Integration 3'
            className='rounded-xl'
          />
          <img
            src='/Images/integration4.png'
            alt='Integration 4'
            className='rounded-xl'
          />
          <img
            src='/Images/integration5.png'
            alt='Integration 5'
            className='rounded-xl'
          />
          <img
            src='/Images/integration6.png'
            alt='Integration 6'
            className='rounded-xl'
          />
          <img
            src='/Images/integration7.png'
            alt='Integration 7'
            className='rounded-xl'
          />
          <img
            src='/Images/integration8.png'
            alt='Integration 8'
            className='rounded-xl'
          />
        </div>
      </section>

      <section className='my-12 px-4'>
        <div className='flex items-center gap-4 bg-[#1B1F3B] rounded-xl px-6 py-4'>
          <BsSearch className='text-gray-400' />
          <input
            type='text'
            placeholder='Search integrations...'
            className='bg-transparent outline-none text-sm text-white flex-1 placeholder:text-gray-500'
          />
          <AiOutlineFilter className='text-gray-400' />
          <select className='bg-transparent text-white text-sm outline-none'>
            <option>All</option>
            <option>Popular</option>
            <option>Recent</option>
          </select>
          <MdViewModule className='text-gray-400' />
        </div>
      </section>

      <section className='px-4'>
        <h2 className='text-4xl font-bold px-4 mb-8 ml-40 flex items-center gap-2 whitespace-nowrap'>
          All Integrations
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4'>
          <img
            src='/Images/integration1.png'
            alt='Integration 9'
            className='rounded-xl'
          />
          <img
            src='/Images/integration10.png'
            alt='Integration 10'
            className='rounded-xl'
          />
          <img
            src='/Images/integration2.png'
            alt='Integration 11'
            className='rounded-xl'
          />
          <img
            src='/Images/integration3.png'
            alt='Integration 12'
            className='rounded-xl'
          />
          <img
            src='/Images/integration4.png'
            alt='Integration 13'
            className='rounded-xl'
          />
          <img
            src='/Images/integration14.png'
            alt='Integration 14'
            className='rounded-xl'
          />
          <img
            src='/Images/integration15.png'
            alt='Integration 15'
            className='rounded-xl'
          />
          <img
            src='/Images/integration16.png'
            alt='Integration 16'
            className='rounded-xl'
          />
          <img
            src='/Images/integration17.png'
            alt='Integration 17'
            className='rounded-xl'
          />
          <img
            src='/Images/integration18.png'
            alt='Integration 18'
            className='rounded-xl'
          />
          <img
            src='/Images/integration7.png'
            alt='Integration 19'
            className='rounded-xl'
          />
          <img
            src='/Images/integration8.png'
            alt='Integration 20'
            className='rounded-xl'
          />
          <img
            src='/Images/integration21.png'
            alt='Integration 21'
            className='rounded-xl'
          />
          <img
            src='/Images/integration22.png'
            alt='Integration 22'
            className='rounded-xl'
          />
          <img
            src='/Images/integration23.png'
            alt='Integration 23'
            className='rounded-xl'
          />
          <img
            src='/Images/integration24.png'
            alt='Integration 24'
            className='rounded-xl'
          />
          <img
            src='/Images/integration25.png'
            alt='Integration 25'
            className='rounded-xl'
          />
          <img
            src='/Images/integration26.png'
            alt='Integration 26'
            className='rounded-xl'
          />
          <img
            src='/Images/integration27.png'
            alt='Integration 27'
            className='rounded-xl'
          />
          <img
            src='/Images/integration28.png'
            alt='Integration 28'
            className='rounded-xl'
          />
        </div>
      </section>

      <section className='mt-20 bg-gradient-to-r from-[#252d73] to-[#272a62] rounded-xl py-10 text-center max-w-4xl mx-auto'>
        <img
          src='/Icons/icon8.png'
          alt='custom integration'
          className='mx-auto mb-4 w-12 h-12'
        />
        <h3 className='text-xl font-bold mb-2'>Need a Custom Integration?</h3>
        <p className='text-gray-400 text-sm max-w-lg mx-auto mb-6'>
          Don’t see the integration you need? Easily build custom connectors for
          your use case or reach out to our team.
  
        </p>
        <div className='flex justify-center gap-4'>
          <button className='bg-gradient-to-r from-[#2859e4] to-[#3336ce] text-white font-medium px-6 py-2 rounded-md shadow hover:opacity-90 transition-all'>
            Request Integration →
          </button>

          <button className='text-white border border-gray-500 font-medium px-6 py-2 rounded-md transition-all flex items-center gap-2'>
            View Documentation
            <FiExternalLink className='w-4 h-4' />
          </button>
        </div>
      </section>
    </div>
  );                                
}
