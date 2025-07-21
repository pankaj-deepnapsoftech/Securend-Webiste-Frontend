import React, { useEffect, useState } from 'react';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import { useLocation } from 'react-router-dom';

const Landing = () => {
  const location = useLocation();

  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [
    { src: '/Images/module1.png', alt: 'Risk Management Dashboard 1' },
    { src: '/Images/module2.png', alt: 'Risk Management Dashboard 2' },
    { src: '/Images/module3.png', alt: 'Risk Management Dashboard 3' },
    { src: '/Images/Slider1.png', alt: 'Risk Management Dashboard 4' },
  ];

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [sliderImages.length]);

  return (
    <div>
      <div
        className='relative overflow-hidden px-4 sm:px-6 md:px-20 text-white bg-[#22242f] bg-no-repeat bg-cover'
        style={{ backgroundImage: "url('/Images/Vector.png')" }}
      >
        {/* Decorative Circles */}
        <img
          src='/Images/circle1.png'
          className='absolute top-5 left-20 md:left-80 w-auto max-w-[80px] sm:max-w-none'
          alt='circle1'
        />
        <img
          src='/Images/circle2.png'
          className='absolute top-14 left-10 md:left-[200px] w-auto max-w-[80px] sm:max-w-none'
          alt='circle2'
        />

        {/* Background Outline Text */}
        <img
          src='/Images/secure.png'
          alt='securend-bg'
          className='absolute left-1 top-[40%] md:top-[50%] w-[250px] md:w-[450px] h-[150px] md:h-[300px] pointer-events-none select-none'
        />

        {/* Main Grid Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 items-center min-h-[80vh] relative z-10 gap-12'>
          {/* Left Side: Text */}
          <div className='space-y-6 px-2 sm:px-4'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight'>
              AI-Powered Risk <br /> Prioritization and <br /> Remediation
              Platform
            </h1>
            <p className='text-base md:text-lg text-[#bcbcd7] leading-relaxed max-w-xl'>
              Enhance security with our intelligent, AI-driven platform that
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

          {/* Right Side: Responsive Stacked Images */}
          <div className='relative flex justify-center md:justify-end w-full h-full items-center'>
            <div className='relative w-full max-w-[300px] sm:max-w-md md:max-w-xl h-[320px] sm:h-[420px] md:h-[520px]'>
              <img
                src='/Images/module3.png'
                alt='dashboard 3'
                className='absolute top-0 right-6 w-[85%] sm:w-[90%] rounded-xl shadow-lg z-10'
              />
              <img
                src='/Images/module2.png'
                alt='dashboard 2'
                className='absolute top-8 right-3 w-[85%] sm:w-[90%] rounded-xl shadow-lg z-20'
              />
              <img
                src='/Images/module1.png'
                alt='dashboard 1'
                className='absolute top-16 right-0 w-[85%] sm:w-[90%] rounded-xl shadow-lg z-30'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sliders Section */}
      <section className='relative flex flex-col md:flex-row min-h-[50vh] w-full bg-[#0F0F1A] text-white overflow-hidden'>
        <img
          src='/Images/Vector3 copy.png'
          alt='Background'
          className='absolute inset-0 w-full h-full object-cover z-0'
        />

        <div className='w-full md:w-1/2 relative z-10 flex items-center px-4 sm:px-6 md:px-12 py-12 md:py-20 text-center md:text-left'>
          <div className='max-w-[520px] mx-auto'>
            <h1 className='text-2xl sm:text-3xl md:text-5xl 2xl:text-4xl font-extrabold mb-4 leading-tight'>
              Risk Operations Centre
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

        <div className='w-full md:w-1/2 flex items-center justify-center px-2 sm:px-4 py-10 z-10'>
          <div className='relative w-full max-w-[98%] md:max-w-[1100px] flex items-center'>
            <div className='relative flex-1 overflow-hidden rounded-[20px] md:rounded-[30px] shadow-2xl'>
              {sliderImages.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-auto object-contain transition-all duration-500 ease-in-out ${
                    index === currentSlide
                      ? 'opacity-100 transform translate-x-0'
                      : 'opacity-0 transform translate-x-full absolute top-0 left-0'
                  }`}
                />
              ))}
            </div>

            <div className='ml-6 md:ml-12 flex flex-col items-start justify-center flex-shrink-0'>
              <div className='flex flex-col space-y-3'>
                {sliderImages.map((_, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-300 font-mono leading-none ${
                      index === currentSlide
                        ? 'text-white text-xl md:text-5xl font-light opacity-100'
                        : 'text-gray-500 text-xl md:text-4xl font-light opacity-60'
                    }`}
                  >
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='relative bg-gradient-to-r from-[#22242f] via-[#252643] to-[#21232c] text-gray-300 min-h-[90vh] font-light py-16 md:py-24 overflow-hidden'>
        {/* Background Ellipse */}
        <img
          src='/Images/Ellipse.png'
          alt='circle'
          className='absolute left-0 top-[10px] w-72 md:w-[500px] z-0'
        />

        <div className='max-w-screen-xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center md:items-start gap-16'>
          {/* Left Illustration */}
          <div className='w-full md:w-[45%] flex justify-center md:justify-start'>
            <img
              src='/Images/features.png'
              alt='Dashboard Illustration'
              className='w-full max-w-xs mt-10 md:max-w-[400px] md:ml-40'
            />
          </div>

          {/* Right Content */}
          <div className='w-full md:w-[55%]'>
            {/* Heading */}
            <div className='flex flex-col md:flex-row items-start gap-6 md:gap-10'>
              {/* Left Title Block */}
              <div className='flex items-center space-x-4 min-w-fit'>
                <div className='relative'>
                  <img
                    src='/Images/key.png'
                    alt='key'
                    className='absolute left-0 mt-2 top-1/2 -translate-y-1/2 w-20 md:w-32 h-10 md:h-14 z-0'
                  />
                  <h2 className='relative z-10 mt-16 text-2xl md:text-4xl font-bold text-white'>
                    FEATURES
                  </h2>
                </div>

                {/* Vertical Divider */}
                <div className='h-20 border-l mt-10 border-gray-600 ml-2' />
              </div>

              {/* Paragraph */}
              <p className='text-gray-400 mt-8 font-medium text-sm md:text-base leading-relaxed max-w-2xl'>
                SECUREND platform offers key features that set them apart from
                competitors, providing unique solutions to address real-time
                challenges faced by enterprises of all sizes, from small
                businesses to large corporations.
              </p>
            </div>

            {/* Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 mt-20 md:grid-cols-3 gap-6'>
              {/* Card 1 */}
              <div className='bg-gradient-to-r from-[#252c45] to-[#2b314c] border border-[#2F3147] hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 rounded-2xl p-6 text-white shadow-md'>
                <div className='mb-4'>
                  <div className='w-12 h-12 flex items-center justify-center rounded-lg'>
                    <img
                      src='/Icons/icon1.png'
                      alt='icon'
                      className='w-10 h-10'
                    />
                  </div>
                </div>
                <h3 className='text-lg font-semibold mb-2'>
                  Unified Asset Inventory
                </h3>
                <p className='text-gray-400 text-sm leading-relaxed'>
                  Consolidation and contextualization of all your assets within
                  your organization to provide a single attack surface.
                </p>
              </div>

              {/* Card 2 */}
              <div className='bg-gradient-to-r from-[#252c45] to-[#2b314c] border border-[#2F3147] hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 rounded-2xl p-6 text-white shadow-md'>
                <div className='mb-4'>
                  <div className='w-12 h-12 flex items-center justify-center rounded-lg'>
                    <img
                      src='/Icons/icon2.png'
                      alt='icon'
                      className='w-10 h-10'
                    />
                  </div>
                </div>
                <h3 className='text-lg font-semibold mb-2'>
                  Aggregated Findings
                </h3>
                <p className='text-gray-400 text-sm leading-relaxed'>
                  Normalization, correlation and enrichment of vulnerabilities
                  across all the technologies to provide actionable insights.
                </p>
              </div>

              {/* Card 3 */}
              <div className='bg-gradient-to-r from-[#252c45] to-[#2b314c] border border-[#2F3147] hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 rounded-2xl p-6 text-white shadow-md'>
                <div className='mb-4'>
                  <div className='w-12 h-12 flex items-center justify-center rounded-lg'>
                    <img
                      src='/Icons/icon3.png'
                      alt='icon'
                      className='w-10 h-10'
                    />
                  </div>
                </div>
                <h3 className='text-lg font-semibold mb-2'>
                  Risk Orchestration
                </h3>
                <p className='text-gray-400 text-sm leading-relaxed'>
                  Customized Risk Scoring, Prioritization, Risk Workflows &
                  Reporting to help CIOs & CFOs with Risk Quantification metrics
                  and bridge the gap through the CISO lens.
                </p>
              </div>
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
              Securend alignment for CIO & <br /> CFO from CISO’s lens
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
        className='min-h-[60vh] bg-gradient-to-r from-[#252748] via-[#222434] to-[#232431] text-gray-300 font-light px-4 md:px-8 py-12 md:py-16'
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
              {[SiX, FaLinkedinIn].map((Icon, i) => (
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
