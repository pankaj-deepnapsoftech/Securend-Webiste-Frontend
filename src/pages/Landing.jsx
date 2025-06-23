import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

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

const Landing = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className='relative overflow-hidden py-20 px-6 md:px-20 text-white bg-[#22242f] bg-no-repeat bg-cover'
        style={{ backgroundImage: "url('/Images/Vector.png')" }}
      >
        {/* Decorative Circles */}
        <img src='/Images/circle1.png' className='absolute top-5 left-80' />
        <img src='/Images/circle2.png' className='absolute top-14 left-50' />

        {/* Background Outline Text */}
        <img
          src='/Images/secure.png'
          alt='securend-bg'
          className='absolute left-1 top-80 w-[450px] h-[300px] md:w-[700px]  pointer-events-none select-none'
        />

        {/* Main Grid Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 items-center relative z-10'>
          {/* Left Side Text */}
          <div className='z-10 mb-20 space-y-6'>
            <h1 className='text-4xl md:text-5xl font-extrabold leading-tight'>
              AI Powered Risk <br /> Prioritization and <br /> Remediation
              Platform
            </h1>
            <p className='text-lg text-[#bcbcd7] leading-relaxed max-w-xl'>
              Enhance security with our intelligent AI-driven platform that
              identifies, prioritizes, and remediates risks efficiently.
              Streamline threat management, reduce vulnerabilities, and
              safeguard your business with actionable insights and automated
              solutions.
            </p>
            <button className='bg-gradient-to-r from-[#1e6bfa] to-[#3a9aff] text-white py-3 px-6 rounded-lg shadow-md font-semibold hover:scale-105 transition'>
              Get Started
            </button>
          </div>

          {/* Right Side: 3 Layered Images */}
          <div className='relative top-20 w-[480px] md:mt-0 flex justify-end ml-40'>
            <div className='relative w-full max-w-2xl h-[600px]'>
              {/* module3 - BACK */}
              <img
                src='/Images/module3.png'
                alt='dashboard 3'
                className='absolute top-0 right-20 w-[90%] rounded-xl shadow-lg z-10'
              />

              {/* module2 - MIDDLE */}
              <img
                src='/Images/module2.png'
                alt='dashboard 2'
                className='absolute top-16 right-10 w-[90%] rounded-xl shadow-lg z-20'
              />

              {/* module1 - FRONT */}
              <img
                src='/Images/module1.png'
                alt='dashboard 1'
                className='absolute top-32 right-0 w-[90%] rounded-xl shadow-lg z-30'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sliders Section */}
      <section className="relative flex flex-col md:flex-row min-h-[70vh] w-full bg-[#0F0F1A] text-white overflow-hidden">
        {/* Background Image (Vector) */}
        <img
          src="/Images/Vector2.png"
          alt="Background"
          className="absolute sm:h-[50%]  md:h-[80%] 2xl:h-[100%]   bottom-0 object-cover object-bottom-left z-0"
        />

        {/* Left Side Content */}
        <div className="w-full md:w-1/2 relative z-10 flex items-center px-6 md:px-12 py-12 md:py-20 text-center md:text-left">
          <div className="max-w-[520px] mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-4xl font-extrabold mb-4 leading-tight">
              Risk Operations Centre:
            </h1>
            <p className="text-base sm:text-lg text-[#d6d4ce] mb-6 leading-relaxed">
              Aggregation, integrated & Orchestrated risk management across all
              domains, providing a cohesive strategy to navigate this uncertainty.
            </p>
            <button className="bg-gradient-to-r from-[#1a5eff] to-[#2151f4] hover:from-[#0039d3] hover:to-[#2642d1] px-6 sm:px-8 py-3 rounded-xl text-white font-semibold shadow-lg transition duration-300">
              Know More
            </button>
          </div>
        </div>

        {/* Right Side - Dashboard Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-10 z-10">
          <img
            src="/Images/Slider1.png"
            alt="Dashboard Preview"
            className="w-full max-w-[90%] md:max-w-[850px] rounded-[20px] md:rounded-[30px] shadow-2xl object-contain"
          />
        </div>
      </section>


      {/* Features Section */}
      <section className='relative bg-gradient-to-r from-[#22242f] via-[#252643] to-[#21232c] text-gray-300 font-light py-20 h-screen overflow-hidden'>
        {/* Background circle */}
        <img
          src='/Images/Ellipse.png'
          alt='circle'
          className='absolute left-0 top-[10px] w-[500px] z-0'
        />

        <div className='max-w-screen-xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-16'>
          {/* Left Side Image */}
          <div className='w-full md:w-[40%]'>
            <img
              src='/Images/features.png'
              alt='Dashboard Illustration'
              className='w-full max-w-[400px] mx-auto'
            />
          </div>

          {/* Right Side Text */}
          <div className='w-full md:w-[60%]'>
            {/* Heading with background key image */}
            <div className='relative flex items-center justify-start mb-6'>
              <img
                src='/Images/key.png'
                alt='key'
                className='absolute left-0 top-[10%] -translate-y-1/2 w-32 z-0 h-14'
              />
              <h2 className='relative z-10 text-4xl font-bold text-white'>
                FEATURES
              </h2>
            </div>

            {/* Description */}
            <p className='text-gray-400 font-semibold mb-10 text-lg leading-relaxed max-w-xl'>
              SECURE& platform offers key features that set them apart from
              competitors, providing unique solutions to address real-time
              challenges faced by enterprises of all sizes, from small
              businesses to large corporations.
            </p>

            {/* Feature Cards */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              {/* Card 1 */}
              <div className='bg-gradient-to-br from-[#252b45] to-[#2b324d] p-4 rounded-2xl border border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 h-[280px] flex flex-col'>
                <div className='w-12 h-12 rounded-md flex items-center justify-center text-white mb-3'>
                  <img
                    src='/Icons/icon1.png'
                    alt='Icon 1'
                    className='w-10 h-10'
                  />
                </div>
                <h4 className='font-semibold text-base text-white mb-1 whitespace-nowrap'>
                  Unified Asset Inventory
                </h4>
                <p className='text-gray-400 text-sm leading-relaxed'>
                  Consolidation and contextualization of all your assets within
                  your organization to provide a single point of attack surface.
                </p>
              </div>

              {/* Card 2 */}
              <div className='bg-gradient-to-br from-[#252b45] to-[#2b324d] p-4 rounded-2xl border border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 h-[280px] flex flex-col'>
                <div className='w-12 h-12 rounded-md flex items-center justify-center text-white mb-3'>
                  <img
                    src='/Icons/icon2.png'
                    alt='Icon 2'
                    className='w-10 h-10'
                  />
                </div>
                <h4 className='font-semibold text-base text-white mb-1 whitespace-nowrap'>
                  Aggregated Findings
                </h4>
                <p className='text-gray-400 text-sm leading-relaxed'>
                  Normalization, correlation and enrichment of vulnerabilities
                  across all the technologies to provide actionable insights.
                </p>
              </div>

              {/* Card 3 */}
              <div className='bg-gradient-to-br from-[#252b45] to-[#2b324d] p-4 rounded-2xl border border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 h-[280px] flex flex-col'>
                <div className='w-12 h-12 rounded-md flex items-center justify-center text-white mb-3'>
                  <img
                    src='/Icons/icon3.png'
                    alt='Icon 3'
                    className='w-10 h-10'
                  />
                </div>
                <h4 className='font-semibold text-base text-white mb-1 whitespace-nowrap'>
                  Risk Orchestration
                </h4>
                <p className='text-gray-400 text-sm leading-relaxed'>
                  Risk scoring, prioritization, workflows and reporting to help
                  CIOs & CFOs bridge the gap from CISOs’ lens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Alignment Section */}
      <section className='bg-gradient-to-r from-[#242547] via-[#252747]  to-[#212327] py-20 px-4 text-white'>
        <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row gap-12'>
          {/* Left Title */}
          <div className='md:w-1/4 ml-5'>
            <h2 className='text-5xl font-bold leading-tight mb-4'>
              Business <br /> Alignment
            </h2>
            <p className='text-gray-400'>
              Secure& alignment for CIO & <br /> CFO from CISO’s lens
            </p>
          </div>

          {/* Right Cards */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-screen-xl mx-auto'>
            {features.map((item, idx) => (
              <div
                key={idx}
                className='bg-[#262d46] rounded-2xl border border-gray-700 p-6 text-gray-300 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 h-full flex flex-col justify-between min-h-[340px]'
              >
                <div>
                  <div
                    className={`w-14 h-14 rounded-md mb-4 flex items-center justify-center ${item.bg}`}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className='w-10 h-10'
                    />
                  </div>
                  <h4 className='text-white font-semibold mb-3 text-lg leading-snug'>
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
      <section className='min-h-[80vh] bg-gradient-to-r from-[#252748] via-[#222434] to-[#232431] text-gray-300 font-light px-8 py-16'>
        <div className='max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10'>
          {/* Form Section */}
          <div>
            <h2 className='text-4xl font-bold mb-4'>Get in Touch</h2>
            <p className='mb-10 leading-relaxed text-gray-200 max-w-xl'>
              We’d love to hear from you! Whether you have a question about our
              services, need assistance, or just want to give feedback — our
              team is ready to answer all your questions. Fill out the form
              below and we’ll get back to you as soon as possible.
            </p>
            <form className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <input
                  type='text'
                  placeholder='Your name *'
                  className='bg-gradient-to-b from-[#2a3051] to-[#232940] text-white px-4 py-3 rounded-md outline-none border border-gray-700 placeholder:text-gray-400'
                />
                <input
                  type='email'
                  placeholder='Your e-mail address *'
                  className='bg-gradient-to-b from-[#2a3051] to-[#232940] border border-gray-700  text-white px-4 py-3 rounded-md outline-none placeholder:text-gray-400'
                />
              </div>
              <textarea
                rows='5'
                placeholder='Project Description'
                className='w-full bg-gradient-to-b from-[#2a3051] to-[#232940] border border-gray-700 text-white px-4 py-3 rounded-md outline-none placeholder:text-gray-400'
              ></textarea>

              <div className='flex items-center gap-4'>
                <button
                  type='submit'
                  className='px-6 py-3 rounded-md text-white font-semibold bg-gradient-to-br from-[#4259f2] to-[#2b3ce2] shadow-xl hover:scale-105 transition-transform'
                >
                  Submit Request
                </button>
                <label className='inline-flex items-center text-sm text-gray-400'>
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

          {/* Contact Card */}
          <div className='bg-gradient-to-tl from-[#2a3249] to-[#232941] border border-gray-700 rounded-2xl p-8 text-gray-100'>
            <h3 className='text-2xl font-bold mb-6'>Contacts:</h3>
            <p className='mb-4'>
              <span className='text-gray-400'>Call Us:</span>{' '}
              <span className='text-white font-medium'>+91 9205404075</span>
            </p>
            <p className='mb-4'>
              <span className='text-gray-400'>Mail Us:</span>{' '}
              <span className='text-white'>enquiry@securend.ai</span>
            </p>
            <p className='mb-6'>
              <span className='text-gray-400'>Office:</span>{' '}
              <span className='text-white'>
                121 B, 2nd floor sector–31 HSIIDC Industrial Area Faridabad ,
                121003 Landmark– nearest sector–28 metro station
              </span>
            </p>
            <hr className='border-gray-700 my-6' />
            <div className='flex space-x-4'>
              <a
                href='#'
                className='w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform'
              >
                <FaFacebookF />
              </a>
              <a
                href='#'
                className='w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform'
              >
                <FaTwitter />
              </a>
              <a
                href='#'
                className='w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform'
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
