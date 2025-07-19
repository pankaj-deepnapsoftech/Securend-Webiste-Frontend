import React from 'react';

const RiskOperationsSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className='relative min-h-[600px] bg-gradient-to-r from-[#25264c] to-[#232432] text-white py-16 px-4 md:py-24 md:px-10 overflow-hidden'>
        <div className='absolute top-32 md:top-40 left-1/2 transform -translate-x-1/2 z-10 w-[95%] md:w-[80%] max-w-5xl'>
          <div className='bg-gradient-to-l from-[#242c5e] to-[#242d61] border border-[#293e81] rounded-lg px-6 py-5 text-center text-sm md:text-base mt-60 font-medium text-white'>
            <span className=' text-gray-300'>
              It also serves to elevate proactive security to be on par with
              detection and response strategies represented by the SOC.
            </span>
          </div>
        </div>

        <div className='relative z-20 text-center max-w-4xl mx-auto px-4'>
          <h2 className='text-2xl md:text-5xl font-bold leading-snug'>
            Risk Operations <br />
            <span className='bg-gradient-to-r from-[#5382ec] to-[#4358db] bg-clip-text text-transparent font-bold'>
              Centre
            </span>
          </h2>
          <p className='mt-4 text-sm md:text-lg text-gray-400 leading-relaxed'>
            It is time for the Vulnerability Management discipline to evolve
            into a Risk Operations Center (ROC).
            <br />A proactive security approach that combines operational rigor,
            risk-based management of vulnerabilities and security policies
            across the entire attack surface, and business level communications
            about risk.
          </p>
        </div>
      </section>

      {/* Middle Blue-Green Split Section */}
      <section className='relative min-h-[900px] md:min-h-[1000px] bg-gradient-to-r from-[#272844] via-[#282a56] to-[#27252b] text-white px-4 md:px-10 overflow-visible'>
        <div className='text-center px-4 py-10'>
          <div className='flex items-center justify-center gap-2 mb-3 md:mb-5 text-white text-xl md:text-3xl font-bold'>
            <img
              src='/Icons/icon13.png'
              alt='Icon'
              className='w-6 h-6 md:w-8 md:h-8'
            />
            <span>Proactive to Reactive Security Model</span>
          </div>
          <p className='text-gray-300 text-xs md:text-base'>
            Understanding the shift from reactive threat detection to proactive
            risk management
          </p>
        </div>

        <section className='relative mx-auto border border-gray-700 rounded-2xl bg-[#232842] text-white py-10 px-4 w-full max-w-[95%] md:max-w-[1000px]'>
          {/* Heading */}
          <div className='text-center mb-6'>
            <h2 className='text-xl md:text-4xl font-bold text-white mb-1'>
              Risk Operations Center
            </h2>
            <p className='text-xs md:text-base text-white/70'>
              A new approach to managing exposures pre-attack
            </p>
          </div>

          {/* Two Columns: ROC and SOC */}
          <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-start md:items-center relative gap-10'>
            {/* Left (Green) Side */}
            <div className='flex-1 flex flex-col items-center gap-4'>
              <img
                src='/Images/green1.png'
                alt='ROC Icon'
                className='w-10 h-10 md:w-12 md:h-12'
              />
              <img
                src='/Images/green2.png'
                alt='Risk Operations Center'
                className='w-[90%] md:w-auto'
              />
              <img
                src='/Images/green3.png'
                alt='Risk-Based Prioritization'
                className='w-[90%] md:w-auto'
              />
              <img
                src='/Icons/greenarrow1.png'
                alt='Arrow Down 1'
                className='w-5 md:w-6'
              />
              <img
                src='/Images/green4.png'
                alt='Indicators of Exposure'
                className='w-[90%] md:w-auto'
              />
              <img
                src='/Icons/greenarrow2.png'
                alt='Green Side Arrow'
                className='w-5 md:w-6'
              />
            </div>

            {/* Middle Divider */}
            <div className='hidden md:flex relative mx-4'>
              <img
                src='/Icons/dotted.png'
                alt='Dotted Divider'
                className='h-full object-cover'
              />
            </div>

            {/* Right (Blue) Side */}
            <div className='flex-1 flex flex-col items-center gap-4'>
              <img
                src='/Images/blue1.png'
                alt='SOC Icon'
                className='w-10 h-10 md:w-12 md:h-12'
              />
              <img
                src='/Images/blue2.png'
                alt='Security Operations Center'
                className='w-[90%] md:w-auto'
              />
              <img
                src='/Images/blue3.png'
                alt='Threat Detection'
                className='w-[90%] md:w-auto'
              />
              <img
                src='/Icons/greenarrow1.png'
                alt='Arrow Down 1'
                className='w-5 md:w-6'
              />
              <img
                src='/Images/blue4.png'
                alt='Indicators of Compromise'
                className='w-[90%] md:w-auto'
              />
              <img
                src='/Icons/greenarrow2.png'
                alt='Arrow Down 1'
                className='w-5 md:w-6'
              />
            </div>
          </div>

          {/* Proactive/Reactive Section Image */}
          <div className='relative -top-8 md:-top-16 w-full max-w-[95%] mx-auto'>
            <img
              src='/Images/proactive.png'
              className='w-full object-contain'
              alt='Proactive Diagram'
            />
          </div>

          {/* Legend */}
          <div className='flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10 text-xs md:text-sm mt-6 md:mt-8'>
            <div className='flex items-center gap-2'>
              <img
                src='/Icons/greenarrow.png'
                alt='Proactive'
                className='w-3 h-3'
              />
              <span className='text-green-500'>Proactive Prevention</span>
            </div>
            <div className='flex items-center gap-2'>
              <img
                src='/Icons/bluearrow.png'
                alt='Reactive'
                className='w-3 h-3 transform rotate-180'
              />
              <span className='text-sky-400'>Reactive Detection</span>
            </div>
          </div>
        </section>
      </section>

      {/* Image Rows */}
      <section className='bg-gradient-to-r from-[#272750] to-[#212325] py-10 md:py-16 px-4'>
        <div className='max-w-6xl mx-auto flex flex-col gap-8 items-center'>
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

      {/* Diagram Section */}
      <section className='relative bg-gradient-to-r from-[#272844] via-[#282a56] to-[#27252b] text-white px-4 md:px-10 overflow-hidden'>
        <div className='text-center px-4 py-10'>
          <div className='flex items-center justify-center gap-2 mb-3 md:mb-5 text-white text-xl md:text-3xl font-bold'>
            <img src='/Icons/icon14.png' className='w-6 h-6 md:w-8 md:h-8' />
            <span>Risk Operations Center</span>
          </div>
          <p className='text-gray-300 text-xs md:text-base'>
            AI Powered & Human Consulted Remediation to Zero Down Your Risk
          </p>
        </div>
        <div>
          <img
            src='/Images/rocdiagraam.png'
            className='w-full max-w-6xl mx-auto'
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className='bg-gradient-to-r from-[#21232c] via-[#252646] to-[#212326] py-10 md:py-16 px-4 text-white'>
        <div className='max-w-7xl mx-auto text-center mb-8 md:mb-12'>
          <div className='flex justify-center items-center gap-2 md:gap-3 mb-3 md:mb-4'>
            <img
              src='/Icons/icon15.png'
              alt='Benefits Icon'
              className='w-5 h-5 md:w-6 md:h-6'
            />
            <h2 className='text-xl md:text-3xl font-bold'>
              Benefits of Implementing a Risk Operations Center
            </h2>
          </div>
          <p className='text-[#A0AEC0] text-xs md:text-base'>
            A ROC comes with numerous benefits to mature organizational security
            posture
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto'>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <img
              key={num}
              src={`/Images/benefits${num}.png`}
              alt={`Benefit ${num}`}
              className='w-full rounded-xl shadow-md object-contain'
            />
          ))}
        </div>
      </section>

      {/* Last Full Width Image */}
      <div className='flex bg-gradient-to-r from-[#24263e] to-[#212326] justify-center'>
        <img
          src='/Images/roclast.png'
          alt='Modern Solutions TVM'
          className='mx-4 md:mx-8 my-8 md:my-12 w-full max-w-6xl rounded-xl shadow-lg'
        />
      </div>
    </div>
  );
};

export default RiskOperationsSection;
