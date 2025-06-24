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

const processSteps = [
  {
    id: 1,
    circle: '/Images/tvmcircle1.png',
    arrow: '/Icons/arrow1.png',
    card: '/Images/process1.png',
    align: 'left',
  },
  {
    id: 2,
    circle: '/Images/tvmcircle2.png',
    arrow: '/Icons/arrow2.png',
    card: '/Images/process2.png',
    align: 'right',
  },
  {
    id: 3,
    circle: '/Images/tvmcircle3.png',
    arrow: '/Icons/arrow3.png',
    card: '/Images/process3.png',
    align: 'left',
  },
  {
    id: 4,
    circle: '/Images/tvmcircle4.png',
    arrow: '/Icons/arrow4.png',
    card: '/Images/process4.png',
    align: 'right',
  },
  {
    id: 5,
    circle: '/Images/tvmcircle5.png',
    arrow: '/Icons/arrow5.png',
    card: '/Images/process5.png',
    align: 'left',
  },
  {
    id: 6,
    circle: '/Images/tvmcircle6.png',
    arrow: '/Icons/arrow6.png',
    card: '/Images/process6.png',
    align: 'right',
  },
];

const cards = ['matters1.png', 'matters2.png', 'matters3.png'];

export default function ThreatVulnerabilitySection() {
  return (
    <div>
      {/* Threat Vulnerability Management */}
      <section className='relative flex flex-col items-center justify-center bg-gradient-to-r from-[#23253d] to-[#212325] px-4 py-16 text-gray-200'>
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

      {/* Why it matters */}
      <section className='relative w-full px-4 py-20 text-white bg-gradient-to-r from-[#26264e] via-[#242643] to-[#212329]'>
        <div className='flex items-center justify-center gap-3 mb-12'>
          <img src='/Icons/icon10.png' alt='icon' className='w-7 h-7' />
          <h2 className='text-3xl md:text-4xl font-bold text-white'>
            Why It Matters
          </h2>
        </div>
        {/* Cards */}
        <div className='flex flex-col md:flex-row justify-center items-center gap-6 max-w-7xl mx-auto'>
          {cards.map((img, idx) => (
            <img
              key={idx}
              src={`/Images/${img}`}
              alt={`Why It Matters card ${idx + 1}`}
              className='w-full md:w-[30%] rounded-xl shadow-lg'
            />
          ))}
        </div>
      </section>

      <div className='relative bg-gradient-to-r from-[#272753] to-[#21232a] py-0 px-4 md:px-10 overflow-hidden'>
        {/* Process Steps */}
        <div className='relative z-10 flex flex-col gap-20'>
          {processSteps.map((step) => (
            <div
              key={step.id}
              className={`flex items-center justify-${step.align === 'left' ? 'start' : 'end'} relative`}
            >
              {step.align === 'left' && (
                <>
                  <img
                    src={step.circle}
                    alt={`circle-${step.id}`}
                    className='w-18 md:w-20'
                  />
                  <img
                    src={step.arrow}
                    alt={`arrow-${step.id}`}
                    className='w-8 md:w-10 mx-2'
                  />
                  <img
                    src={step.card}
                    alt={`card-${step.id}`}
                    className='max-w-[360px] md:max-w-[400px]'
                  />
                </>
              )}
              {step.align === 'right' && (
                <>
                  <img
                    src={step.card}
                    alt={`card-${step.id}`}
                    className='max-w-[360px] md:max-w-[400px]'
                  />
                  <img
                    src={step.arrow}
                    alt={`arrow-${step.id}`}
                    className='w-8 md:w-10 mx-2 rotate-180'
                  />
                  <img
                    src={step.circle}
                    alt={`circle-${step.id}`}
                    className='w-14 md:w-20'
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Best Practices */}
      <section className='w-full bg-gradient-to-r from-[#252743] to-[#212326] px-4 py-20 text-white'>
        {/* Title */}
        <div className='flex justify-center items-center gap-2 mb-12'>
          <img
            src='/Icons/icon11.png'
            alt='Best Practices Icon'
            className='w-6 h-6'
          />
          <h2 className='text-3xl md:text-4xl font-bold text-white'>
            Best Practices
          </h2>
        </div>

        {/* Cards Grid */}
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Row 1 */}
          <img
            src='/Images/practices1.png'
            alt='Practice 1'
            className='w-full rounded-xl shadow'
          />
          <img
            src='/Images/practices2.png'
            alt='Practice 2'
            className='w-full rounded-xl shadow'
          />

          {/* Row 2 */}
          <img
            src='/Images/practices3.png'
            alt='Practice 3'
            className='w-full rounded-xl shadow'
          />
          <img
            src='/Images/practices4.png'
            alt='Practice 4'
            className='w-full rounded-xl shadow'
          />

          {/* Row 3 */}
          <div className='md:col-span-2 flex justify-center'>
            <img
              src='/Images/practices5.png'
              alt='Practice 5'
              className='w-full rounded-xl shadow'
            />
          </div>
        </div>
      </section>

      {/* Modern Solutions  */}
      <section className='w-full h-[600px] bg-[#212325] px-4 py-20 text-white text-center'>
        {/* Title */}
        <div className='flex justify-center items-center gap-3 mb-4'>
          <img src='/Icons/icon12.png' alt='Lock Icon' className='w-7 h-7' />
          <h2 className='text-2xl md:text-4xl font-bold'>
            Modern Solutions Powered by TVM
          </h2>
        </div>

        <p className='text-gray-300 text-sm md:text-base mb-12'>
          Secure End Platform helps you implement comprehensive TVM strategies
        </p>

        {/* Full Image */}
        <div className='flex justify-center'>
          <img
            src='/Images/tvmlast.png'
            alt='Modern Solutions TVM'
            className='w-full max-w-6xl rounded-xl shadow-lg'
          />
        </div>
      </section>
    </div>
  );
}
