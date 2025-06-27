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
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-5xl font-extrabold'>
            Threat & Vulnerability <br />
            <span className='bg-gradient-to-r from-[#5486ed] to-[#3e4cd6] bg-clip-text text-transparent'>
              Management
            </span>
          </h2>
          <p className='mt-4 text-sm md:text-lg text-gray-300 max-w-3xl mx-auto'>
            A holistic, continuous approach to managing cybersecurity risks
            through intelligent threat management and proactive vulnerability
            mitigation.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-6 justify-center items-center w-full max-w-6xl mb-6 px-4'>
          <img
            src='/Images/tvm1.png'
            alt='Threat Management'
            className='w-full md:w-1/2 rounded-xl shadow-lg object-contain'
          />
          <img
            src='/Images/tvm2.png'
            alt='Vulnerability Management'
            className='w-full md:w-1/2 rounded-xl shadow-lg object-contain'
          />
        </div>

        <div className='w-full max-w-4xl px-4'>
          <img
            src='/Images/tvm3.png'
            alt='TVM Blends Both'
            className='w-full rounded-xl shadow-lg object-contain'
          />
        </div>
      </section>

      {/* The TVM Lifecycle */}
      <section className='relative flex flex-col items-center justify-center w-full bg-[conic-gradient(at_bottom_left,_#212329,_#252649_45%)] px-4 py-20 text-gray-200'>
        <div className='text-center mb-12'>
          <div className='flex items-center justify-center gap-3'>
            <img
              src='/Icons/icon9.png'
              alt='refresh icon'
              className='w-6 h-6 md:w-7 md:h-7'
            />
            <h2 className='text-2xl md:text-4xl font-extrabold text-gray-200'>
              The TVM Lifecycle
            </h2>
          </div>
          <p className='mt-4 text-sm md:text-lg text-gray-300 max-w-3xl mx-auto'>
            A comprehensive 8-step process for continuous threat and
            vulnerability management
          </p>
        </div>

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

      {/* Why It Matters */}
      <section className='relative w-full px-4 py-20 text-white bg-gradient-to-r from-[#26264e] via-[#242643] to-[#212329]'>
        <div className='flex items-center justify-center gap-3 mb-12'>
          <img
            src='/Icons/icon10.png'
            alt='icon'
            className='w-6 h-6 md:w-7 md:h-7'
          />
          <h2 className='text-2xl md:text-4xl font-bold text-white'>
            Why It Matters
          </h2>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center gap-6 max-w-7xl mx-auto'>
          {cards.map((img, idx) => (
            <img
              key={idx}
              src={`/Images/${img}`}
              alt={`Why It Matters card ${idx + 1}`}
              className='w-full md:w-[30%] rounded-xl shadow-lg object-contain'
            />
          ))}
        </div>
      </section>

      {/* Process Steps */}
      <div className='relative flex justify-center bg-gradient-to-r from-[#272753] to-[#21232a] py-0 px-4 md:px-10 overflow-hidden'>
        <div className='relative z-10 flex flex-col w-full max-w-6xl mx-auto'>
          {processSteps.map((step) => (
            <div key={step.id} className='flex flex-col items-center mb-6'>
              <div
                className={`flex items-center justify-center flex-nowrap gap-2 md:gap-4 w-full max-w-[95%] mx-auto`}
              >
                {step.align === 'left' ? (
                  <>
                    <img
                      src={step.circle}
                      alt={`circle-${step.id}`}
                      className='w-10 sm:w-12 md:w-20 object-contain'
                    />
                    <img
                      src={step.arrow}
                      alt={`arrow-${step.id}`}
                      className='w-5 sm:w-6 md:w-10 object-contain'
                    />
                    <img
                      src={step.card}
                      alt={`card-${step.id}`}
                      className='flex-1 max-w-[250px] sm:max-w-[300px] md:max-w-[400px] object-contain'
                    />
                  </>
                ) : (
                  <>
                    <img
                      src={step.card}
                      alt={`card-${step.id}`}
                      className='flex-1 max-w-[250px] sm:max-w-[300px] md:max-w-[400px] object-contain'
                    />
                    <img
                      src={step.arrow}
                      alt={`arrow-${step.id}`}
                      className='w-5 sm:w-6 md:w-10 rotate-180 object-contain'
                    />
                    <img
                      src={step.circle}
                      alt={`circle-${step.id}`}
                      className='w-10 sm:w-12 md:w-20 object-contain'
                    />
                  </>
                )}
              </div>

              <img src='/Icons/line.png' alt='' />
            </div>
          ))}
        </div>
      </div>

      {/* Best Practices */}
      <section className='w-full bg-gradient-to-r from-[#252743] to-[#212326] px-4 py-20 text-white'>
        <div className='flex justify-center items-center gap-2 mb-12'>
          <img
            src='/Icons/icon11.png'
            alt='Best Practices Icon'
            className='w-5 h-5 md:w-6 md:h-6'
          />
          <h2 className='text-2xl md:text-4xl font-bold text-white'>
            Best Practices
          </h2>
        </div>

        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
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
          <div className='md:col-span-2 flex justify-center'>
            <img
              src='/Images/practices5.png'
              alt='Practice 5'
              className='w-full rounded-xl shadow'
            />
          </div>
        </div>
      </section>

      {/* Modern Solutions */}
      <section className='w-full h-auto md:h-[600px] bg-[#212325] px-4 py-20 text-white text-center'>
        <div className='flex justify-center items-center gap-2 md:gap-3 mb-4'>
          <img
            src='/Icons/icon12.png'
            alt='Lock Icon'
            className='w-6 h-6 md:w-7 md:h-7'
          />
          <h2 className='text-2xl md:text-4xl font-bold'>
            Modern Solutions Powered by TVM
          </h2>
        </div>

        <p className='text-gray-300 text-sm md:text-base mb-8 md:mb-12'>
          Secure End Platform helps you implement comprehensive TVM strategies
        </p>

        <div className='flex justify-center'>
          <img
            src='/Images/tvmlast.png'
            alt='Modern Solutions TVM'
            className='w-full max-w-6xl rounded-xl shadow-lg object-contain'
          />
        </div>
      </section>
    </div>
  );
}
