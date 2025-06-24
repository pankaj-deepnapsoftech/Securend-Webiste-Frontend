'use client';

import React from 'react';

const cardImages = [
  'tvm4.png',
  'tvm5.png',
  'tvm6.png',
  'tvm7.png',
  'tvm8.png',
  'tvm9.png',
  'tvm10.png',
  'tvm11.png',
];

export default function ThreatVulnerabilitySection() {
  return (
    <div>
      {/* Threat Vulnerability Management */}
      <section className='relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#23253d] to-[#212325] px-4 py-20 text-gray-200'>
        {/* Heading */}
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-extrabold'>
            Threat & Vulnerability <br />
            <span className='bg-gradient-to-r from-[#5486ed] to-[#3e4cd6] bg-clip-text text-transparent'>
              Management
            </span>
          </h2>
          <p className='mt-4 text-base md:text-lg text-gray-300 max-w-3xl mx-auto'>
            A holistic, continuous approach to managing cybersecurity risks
            through intelligent threat management and proactive vulnerability
            mitigation.
          </p>
        </div>

        {/* Top 2 Cards */}
        <div className='flex flex-col md:flex-row gap-6 justify-center items-center w-full max-w-6xl mb-6 px-4'>
          <img
            src='/Images/tvm1.png'
            alt='Threat Management'
            className='w-full md:w-1/2 rounded-xl shadow-lg'
          />
          <img
            src='/Images/tvm2.png'
            alt='Vulnerability Management'
            className='w-full md:w-1/2 rounded-xl shadow-lg'
          />
        </div>

        {/* Bottom Single Card */}
        <div className='w-full max-w-4xl px-4'>
          <img
            src='/Images/tvm3.png'
            alt='TVM Blends Both'
            className='w-full rounded-xl shadow-lg'
          />
        </div>
      </section>

      {/* The TVM Lifecycle  */}
      <section className='relative flex flex-col items-center justify-center w-full  bg-[conic-gradient(at_bottom_left,_#212329,_#252649_45%)] px-4 py-20 text-gray-200'>
        {/* Title */}
        <div className='text-center mb-12'>
          <div className='flex items-center justify-center gap-3'>
            <img
              src='/Icons/icon9.png'
              alt='refresh icon'
              className='w-7 h-7'
            />
            <h2 className='text-3xl md:text-4xl font-extrabold text-gray-200'>
              The TVM Lifecycle
            </h2>
          </div>
          <p className='mt-4 text-base md:text-lg text-gray-300 max-w-3xl mx-auto'>
            A comprehensive 8-step process for continuous threat and
            vulnerability management
          </p>
        </div>

        {/* Card Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full px-4'>
          {cardImages.map((img, idx) => (
            <div
              key={idx}
              className='relative rounded-xl overflow-hidden shadow-lg bg-[#0D0D1C]'
            >
              <img
                src={`/Images/${img}`}
                alt={`TVM Step ${idx + 1}`}
                className='w-full h-full object-cover'
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
