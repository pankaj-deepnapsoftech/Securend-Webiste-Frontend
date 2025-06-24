import React from 'react';

const RiskOperationsSection = () => {
  return (
    <div>
      <section className='relative h-[600px] bg-gradient-to-r from-[#25264c] to-[#232432] text-white py-24 px-6 md:px-10 overflow-hidden'>
        {/* Background Image */}
        <img
          src='/Images/roc1.png'
          alt='ROC Highlight Box'
          className='absolute top-100 left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl z-10'
        />

        {/* Text Content */}
        <div className='relative z-20 text-center max-w-4xl mx-auto'>
          <h2 className='text-3xl md:text-5xl font-bold leading-snug'>
            Risk Operations <br />
            <span className='bg-gradient-to-r from-[#5382ec] to-[#4358db] bg-clip-text text-transparent font-bold'>
              Centre
            </span>
          </h2>

          <p className='mt-6 text-base md:text-lg text-gray-400 leading-relaxed'>
            It is time for the Vulnerability Management discipline to evolve
            into a Risk Operations Center (ROC).
            <br />
            A proactive security approach that combines operational rigor,
            risk-based management of <br /> vulnerabilities and security
            policies across the entire attack surface, and business level <br />{' '}
            communications about risk.
          </p>
        </div>
      </section>

      <section className='relative h-[400px] bg-gradient-to-r from-[#272844] via-[#282a56] to-[#27252b] text-white px-4 md:px-10 overflow-hidden'>
        <div className='text-center px-4 py-10'>
          <div className='flex items-center justify-center gap-2 mb-5 text-white text-2xl md:text-3xl font-bold'>
            <img src='/Icons/icon13.png' />
            <span>Proactive to Reactive Security Model</span>
          </div>
          <p className='text-gray-300 text-sm md:text-base'>
            Understanding the shift from reactive threat detection to proactive
            risk management
          </p>
        </div>
      </section>

      <section className='bg-gradient-to-r from-[#272750] to-[#212325] py-16 px-4'>
        <div className='max-w-6xl mx-auto flex flex-col gap-10 items-center'>
          <img
            src='/Images/roc2.png'
            alt='A Calculated Approach'
            className='w-full max-w-5xl rounded-2xl shadow-lg'
          />
          <img
            src='/Images/roc3.png'
            alt='Business-Centric Risk Communication'
            className='w-full max-w-5xl rounded-2xl shadow-lg'
          />
        </div>
      </section>

      <section className='relative h-[400px] bg-gradient-to-r from-[#272844] via-[#282a56] to-[#27252b] text-white px-4 md:px-10 overflow-hidden'>
        <div className='text-center px-4 py-10'>
          <div className='flex items-center justify-center gap-2 mb-5 text-white text-2xl md:text-3xl font-bold'>
            <img src='/Icons/icon14.png' />
            <span>Risk Operations Centre</span>
          </div>
          <p className='text-gray-300 text-sm md:text-base'>
            AI Powered & Human Consulted Remediation to Zero Down Your Risk
          </p>
        </div>
      </section>

      <section className='bg-gradient-to-r from-[#21232c] via-[#252646] to-[#212326] py-16 px-4 text-white'>
        <div className='max-w-7xl mx-auto text-center mb-12'>
          <div className='flex justify-center items-center gap-3 mb-4'>
            <img
              src='/Icons/icon15.png'
              alt='Benefits Icon'
              className='w-6 h-6'
            />
            <h2 className='text-2xl md:text-3xl font-bold'>
              Benefits of Implementing a Risk Operations Center
            </h2>
          </div>
          <p className='text-[#A0AEC0] text-sm md:text-base'>
            A ROC comes with numerous benefits to mature organizational security
            posture
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <img
              key={num}
              src={`/Images/benefits${num}.png`}
              alt={`Benefit ${num}`}
              className='w-full rounded-xl shadow-md'
            />
          ))}
        </div>
      </section>

      <div className='flex bg-gradient-to-r from-[#24263e] to-[#212326] justify-center'>
          <img
            src='/Images/roclast.png'
            alt='Modern Solutions TVM'
            className='mx-8 my-12 max-w-6xl rounded-xl shadow-lg'
          />
        </div>
    </div>
  );
};

export default RiskOperationsSection;
