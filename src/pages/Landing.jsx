import React, { useEffect } from 'react';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Landing = () => {
  const location = useLocation();

  const features = [
    {
      title: 'Continuous Threat Exposure Management (CTEM)',
      description:
        'Continuously ingest, aggregate and monitor security findings from siloed, asset-specific tools across all environments, offering a unified view of risk posture in one platform for proactive risk response.',
      img: '/Icons/icon4.png',
    },
    {
      title: 'Cyber Risk Quantification (CRQ)',
      description:
        'Enrich and contextualize risk data with real-time intelligence and business context, quantifying cyber risks in financial terms, to justify investments, prioritize risks, and guide informed budgeting decisions.',
      img: '/Icons/icon5.png',
    },
    {
      title: 'Automated Compliance',
      description:
        'Automate compliance with continuous monitoring, policy enforcement, and automated remediation workflows, helping security & compliance teams stay audit-ready and meet regulatory standards.',
      img: '/Icons/icon6.png',
    },
    {
      title: 'Centralized Risk Management',
      description:
        'Unify fragmented risk management across security, IT, finance and compliance teams into one central unit, improving collaboration and prioritizing the most critical risks to take swift, coordinated action.',
      img: '/Icons/icon7.png',
    },
  ];

  useEffect(() => {
    if (location.state?.scrollTo) {
      const target = document.getElementById(location.state.scrollTo);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div>
      <div
        className='relative overflow-hidden py-16 px-4 sm:px-6 md:px-20 text-white bg-[#22242f] bg-no-repeat bg-cover'
        style={{ backgroundImage: "url('/Images/Vector.png')" }}
      >
        {/* Decorative Circles */}
        <img
          src='/Images/circle1.png'
          className='absolute top-5 left-40 md:left-80 w-20 sm:w-auto'
        />
        <img
          src='/Images/circle2.png'
          className='absolute top-14 left-24 md:left-50 w-20 sm:w-auto'
        />

        {/* Background Outline Text */}
        <img
          src='/Images/secure.png'
          alt='securend-bg'
          className='absolute left-1 top-60 md:top-80 w-[300px] md:w-[450px] h-[200px] md:h-[300px] pointer-events-none select-none'
        />

        <div className='grid grid-cols-1 md:grid-cols-2 items-center relative z-10'>
          <div className='z-10 mb-12 md:mb-20 space-y-6 px-2 md:px-0'>
            <h1 className='text-3xl md:text-5xl font-extrabold leading-tight'>
              AI Powered Risk <br /> Prioritization and <br /> Remediation
              Platform
            </h1>
            <p className='text-base md:text-lg text-[#bcbcd7] leading-relaxed max-w-xl'>
              Enhance security with our intelligent AI-driven platform that
              identifies, prioritizes, and remediates risks efficiently.
              Streamline threat management, reduce vulnerabilities, and
              safeguard your business with actionable insights and automated
              solutions.
            </p>
            <button className='relative text-white font-semibold px-8 md:px-14 py-2.5 rounded-md overflow-hidden shadow-lg hover:shadow-xl transition duration-300'>
              <span className='absolute inset-0 bg-[linear-gradient(345deg,#225cd2_50%,#2B4A77_50%,#307bfe_100%)] opacity-100 transition-opacity duration-300 hover:opacity-90'></span>
              <span className='relative z-10'>Get Started</span>
            </button>
          </div>

          {/* Right Side: 3 Layered Images */}
          <div className='relative top-10 md:top-20 w-full md:w-[480px] md:mt-0 flex justify-center md:justify-end ml-0 md:ml-40'>
            <div className='relative w-full max-w-sm md:max-w-2xl h-[400px] md:h-[600px]'>
              <img
                src='/Images/module3.png'
                alt='dashboard 3'
                className='absolute top-0 right-10 w-[80%] md:w-[90%] rounded-xl shadow-lg z-10'
              />
              <img
                src='/Images/module2.png'
                alt='dashboard 2'
                className='absolute top-10 right-5 w-[80%] md:w-[90%] rounded-xl shadow-lg z-20'
              />
              <img
                src='/Images/module1.png'
                alt='dashboard 1'
                className='absolute top-20 right-0 w-[80%] md:w-[90%] rounded-xl shadow-lg z-30'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sliders Section */}
      <section className='relative flex flex-col md:flex-row min-h-[70vh] w-full bg-[#0F0F1A] text-white overflow-hidden'>
        <img
          src='/Images/Vector2.png'
          alt='Background'
          className='absolute bottom-0 object-cover object-bottom-left z-0 h-40 sm:h-[50%] md:h-[80%] 2xl:h-[100%]'
        />

        <div className='w-full md:w-1/2 relative z-10 flex items-center px-4 sm:px-6 md:px-12 py-12 md:py-20 text-center md:text-left'>
          <div className='max-w-[520px] mx-auto'>
            <h1 className='text-2xl sm:text-3xl md:text-5xl 2xl:text-4xl font-extrabold mb-4 leading-tight'>
              Risk Operations Centre:
            </h1>
            <p className='text-sm sm:text-base text-[#d6d4ce] mb-6 leading-relaxed'>
              Aggregation, integrated & Orchestrated risk management across all
              domains, providing a cohesive strategy to navigate this
              uncertainty.
            </p>
            <button className='relative text-white font-semibold px-8 md:px-10 py-2 md:py-3 rounded-md overflow-hidden shadow-lg hover:shadow-xl transition duration-300'>
              <span className='absolute inset-0 bg-[linear-gradient(343deg,#225cd2_50%,#2B4A77_50%,#307bfe_100%)] opacity-100 transition-opacity duration-300 hover:opacity-90'></span>
              <span className='relative z-10'>Know More</span>
            </button>
          </div>
        </div>

        <div className='w-full md:w-1/2 flex items-center justify-center px-4 sm:px-6 py-10 z-10'>
          <img
            src='/Images/Slider1.png'
            alt='Dashboard Preview'
            className='w-full max-w-[90%] md:max-w-[850px] rounded-[20px] md:rounded-[30px] shadow-2xl object-contain'
          />
        </div>
      </section>

      {/* Features Section */}
      <section className='relative bg-gradient-to-r from-[#22242f] via-[#252643] to-[#21232c] text-gray-300 font-light py-16 md:py-20 min-h-[100vh] overflow-hidden'>
        <img
          src='/Images/Ellipse.png'
          alt='circle'
          className='absolute left-0 top-[10px] w-72 md:w-[500px] z-0'
        />

        <div className='max-w-screen-xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16'>
          <div className='w-full md:w-[40%]'>
            <img
              src='/Images/features.png'
              alt='Dashboard Illustration'
              className='w-full max-w-xs md:max-w-[400px] mx-auto'
            />
          </div>

          <div className='w-full md:w-[60%]'>
            <div className='relative flex items-center justify-start mb-4 md:mb-6'>
              <img
                src='/Images/key.png'
                alt='key'
                className='absolute left-0 top-[10%] -translate-y-1/2 w-20 md:w-32 z-0 h-10 md:h-14'
              />
              <h2 className='relative z-10 text-2xl md:text-4xl font-bold text-white'>
                FEATURES
              </h2>
            </div>
            <p className='text-gray-400 font-semibold mb-6 md:mb-10 text-base md:text-lg leading-relaxed max-w-xl'>
              SECURE& platform offers key features that set them apart from
              competitors, providing unique solutions to address real-time
              challenges faced by enterprises of all sizes, from small
              businesses to large corporations.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              {/* Feature cards already responsive */}
              {/* No change needed */}
            </div>
          </div>
        </div>
      </section>

      {/* Business Alignment Section */}
      <section className='bg-gradient-to-r from-[#242547] via-[#252747] to-[#212327] py-16 md:py-20 px-4 text-white'>
        <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row gap-10 md:gap-12'>
          <div className='md:w-1/4 ml-2 md:ml-5'>
            <h2 className='text-3xl md:text-5xl font-bold leading-tight mb-3 md:mb-4'>
              Business <br /> Alignment
            </h2>
            <p className='text-gray-400 text-sm md:text-base'>
              Secure& alignment for CIO & <br /> CFO from CISO’s lens
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-screen-xl mx-auto'>
            {features.map((item, idx) => (
              <div
                key={idx}
                className='bg-[#262d46] rounded-2xl border border-gray-700 p-4 sm:p-6 text-gray-300 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 h-full flex flex-col justify-between min-h-[340px]'
              >
                <div>
                  <div className='w-12 md:w-14 h-12 md:h-14 rounded-md mb-3 md:mb-4 flex items-center justify-center'>
                    <img
                      src={item.img}
                      alt={item.title}
                      className='w-8 md:w-10 h-8 md:h-10'
                    />
                  </div>
                  <h4 className='text-white font-semibold mb-2 md:mb-3 text-base md:text-lg leading-snug'>
                    {item.title}
                  </h4>
                  <p className='text-sm leading-relaxed text-gray-400'>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section
        id='navigation'
        className='min-h-[80vh] bg-gradient-to-r from-[#252748] via-[#222434] to-[#232431] text-gray-300 font-light px-4 md:px-8 py-12 md:py-16'
      >
        <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10'>
          <div>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Get in Touch
            </h2>
            <p className='mb-6 md:mb-10 leading-relaxed text-gray-200 text-sm md:text-base max-w-xl'>
              We’d love to hear from you! Whether you have a question about our
              services, need assistance, or just want to give feedback — our
              team is ready to answer all your questions.
            </p>
            <form className='space-y-4 md:space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
                <input
                  type='text'
                  placeholder='Your name *'
                  className='bg-gradient-to-b from-[#2a3051] to-[#232940] text-white px-4 py-2 md:py-3 rounded-md outline-none border border-gray-700 placeholder:text-gray-400'
                />
                <input
                  type='email'
                  placeholder='Your e-mail address *'
                  className='bg-gradient-to-b from-[#2a3051] to-[#232940] border border-gray-700 text-white px-4 py-2 md:py-3 rounded-md outline-none placeholder:text-gray-400'
                />
              </div>
              <textarea
                rows='4'
                placeholder='Project Description'
                className='w-full bg-gradient-to-b from-[#2a3051] to-[#232940] border border-gray-700 text-white px-4 py-2 md:py-3 rounded-md outline-none placeholder:text-gray-400'
              ></textarea>

              <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
                <button className='relative text-white font-semibold px-6 py-2 md:py-3 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300'>
                  <span className='absolute inset-0 bg-[linear-gradient(343deg,#225cd2_50%,#2B4A77_50%,#307bfe_100%)] opacity-100 transition-opacity duration-300 hover:opacity-90'></span>
                  <span className='relative z-10'>Submit Request</span>
                </button>
                <label className='inline-flex items-center text-xs md:text-sm text-gray-400'>
                  <input
                    type='checkbox'
                    className='appearance-none bg-gradient-to-br from-gray-600 to-gray-900 border border-gray-600 rounded-sm w-4 h-4 mr-2 checked:bg-blue-600 focus:ring-2 focus:ring-offset-0 focus:ring-blue-500 align-middle'
                  />
                  <span>
                    By submitting this form, you agree to our{' '}
                    <a href='#' className='text-[#c9a0fc] underline'>
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>
              </div>
            </form>
          </div>

          <div className='bg-gradient-to-tl from-[#2a3249] to-[#232941] border border-gray-700 rounded-2xl p-6 md:p-8 text-gray-100'>
            <h3 className='text-2xl font-bold mb-4 md:mb-6'>Contacts:</h3>
            <p className='mb-2 md:mb-4'>
              <span className='text-gray-400'>Call Us:</span>{' '}
              <span className='text-white font-medium'>+91 9205404075</span>
            </p>
            <p className='mb-2 md:mb-4'>
              <span className='text-gray-400'>Mail Us:</span>{' '}
              <span className='text-white'>enquiry@securend.ai</span>
            </p>
            <p className='mb-4 md:mb-6'>
              <span className='text-gray-400'>Office:</span>{' '}
              <span className='text-white'>
                121 B, 2nd floor sector–31 HSIIDC Industrial Area Faridabad,
                121003 Landmark– nearest sector–28 metro station
              </span>
            </p>
            <hr className='border-gray-700 my-4 md:my-6' />
            <div className='flex space-x-3 md:space-x-4'>
              {[FaTwitter, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href='#'
                  className='relative flex items-center justify-center text-white font-semibold w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition duration-300'
                >
                  <span className='absolute inset-0 bg-[linear-gradient(305deg,#225cd2_50%,#2B4A77_50%,#307bfe_100%)] opacity-100 transition-opacity duration-300 hover:opacity-90'></span>
                  <span className='relative z-10'>
                    <Icon />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
