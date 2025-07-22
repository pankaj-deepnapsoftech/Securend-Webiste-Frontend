'use client';

import React from 'react';
import { HiArrowRight, HiArrowDown } from 'react-icons/hi';

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
    title: 'Planning',
    description: 'Define scope, tools, team roles, and update cadence.',
    number: '01',
    direction: 'right',
    bgColor: 'from-[#2CA7DD] to-[#207FE7]',
    arrow: '→',
    icon: '/Icons/process1.png',
  },
  {
    id: 2,
    title: 'Discovery',
    description: 'Identify assets and vulnerabilities continuously.',
    number: '02',
    direction: 'left',
    bgColor: 'from-[#EC4899] to-[#DB2777]',
    arrow: '←',
    icon: '/Icons/process2.png',
  },
  {
    id: 3,
    title: 'Prioritization',
    description: 'Score vulnerabilities using CVSS, MITRE, exploit data.',
    number: '03',
    direction: 'right',
    bgColor: 'from-[#F97316] to-[#EA580C]',
    arrow: '→',
    icon: '/Icons/process3.png',
  },
  {
    id: 4,
    title: 'Remediation',
    description: 'Apply patches, configs, virtual fixes; retest to confirm.',
    number: '04',
    direction: 'left',
    bgColor: 'from-[#22C55E] to-[#16A34A]',
    arrow: '←',
    icon: '/Icons/process4.png',
  },
  {
    id: 5,
    title: 'Monitoring',
    description: 'Use SIEM/EDR, asset monitoring to catch emerging threats.',
    number: '05',
    direction: 'right',
    bgColor: 'from-[#60A5FA] to-[#3B82F6]',
    arrow: '→',
    icon: '/Icons/process5.png',
  },
  {
    id: 6,
    title: 'Review',
    description:
      'Analyze metrics/report; refine policies and resource allocation.',
    number: '06',
    direction: 'left',
    bgColor: 'from-[#EF4444] to-[#DC2626]',
    arrow: '←',
    icon: '/Icons/process6.png',
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
          {/* Card 1: Threat Management */}
          <div className='w-full md:w-1/2 bg-[#1D1F3C] text-white p-6 rounded-2xl shadow-lg border border-sky-900'>
            <div className='flex items-start gap-4'>
              <img
                src='/Icons/tvm1.png'
                alt='Threat Icon'
                className='w-10 h-10'
              />

              <div>
                <h3 className='text-xl font-bold mb-2'>Threat Management</h3>
                <p className='text-sm text-gray-400'>
                  Focuses on understanding and countering active risks—such as
                  phishing, malware, insider threats—through intelligence,
                  threat hunting, and rapid response.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Vulnerability Management */}
          <div className='w-full md:w-1/2 bg-[#1D1F3C] text-white p-6 rounded-2xl shadow-lg border border-sky-900'>
            <div className='flex items-start gap-4'>
              <img
                src='/Icons/tvm2.png'
                alt='Vulnerability Icon'
                className='w-10 h-10'
              />

              <div>
                <h3 className='text-xl font-bold mb-2'>
                  Vulnerability Management
                </h3>
                <p className='text-sm text-gray-400'>
                  Centers on uncovering and mitigating weaknesses—like unpatched
                  software, misconfigurations, or zero-day flaws—by scanning,
                  prioritizing, patching, and verifying fixes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Blended Card */}
        <div className='w-full max-w-4xl px-4'>
          <div className='bg-gradient-to-br from-[#212a49] to-[#202a43] text-white p-4 rounded-xl shadow-lg border border-sky-900 text-center'>
            <p>
              <span className='font-bold text-gray-400'>TVM blends both</span>,
              ensuring defenses aren't only reactive but also proactively reduce
              exposure before threats strike.
            </p>
          </div>
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
      <section className='relative flex justify-center bg-gradient-to-r from-[#272753] to-[#21232a] py-16 px-4 md:px-10 overflow-hidden'>
        <div className='relative z-10 flex flex-col w-full max-w-6xl mx-auto'>
          {processSteps.map((step, index) => {
            const isLeft = step.direction === 'left';
            return (
              <div key={step.id} className='flex flex-col items-center w-full'>
                <div className='w-full flex justify-center'>
                  <div
                    className={`flex items-center gap-4 w-full max-w-4xl flex-col md:${
                      isLeft ? ' flex-row flex-row-reverse' : 'flex-row'
                    }`}
                  >
                    {/* Circle */}
                    <div
                      className={`flex-shrink-0 bg-gradient-to-br ${step.bgColor} text-white font-bold text-sm w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full shadow-lg`}
                    >
                      {step.number}
                    </div>

                    {/* Arrow */}
                    <div
                      className={`flex-shrink-0 w-6 h-6 md:w-10 md:h-10 rounded-lg flex items-center justify-center 
    bg-gradient-to-br from-[#07549b] to-[#21d4fd] shadow-md ${
      isLeft ? 'md:rotate-180' : ''
    }`}
                    >
                      {/* React Icons (down on mobile, right on desktop) */}
                      <div className='text-white text-xl md:text-2xl'>
                        <HiArrowDown className='block md:hidden' />
                        <HiArrowRight className='hidden md:block' />
                      </div>
                    </div>

                    {/* Card */}
                    <div className='flex-1 bg-gradient-to-br from-[#283251] to-[#2a3340] border border-gray-800 text-white p-4 sm:p-5 rounded-xl shadow-md w-full md:w-1/2'>
                      {/* Icon + Title */}
                      <div className='flex items-center gap-3 mb-2'>
                        <img
                          src={step.icon}
                          alt='icon'
                          className='w-6 h-6 sm:w-8 sm:h-8 object-contain'
                        />
                        <h3 className='font-semibold text-base sm:text-lg'>
                          {step.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className='text-sm text-gray-300'>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Vertical Divider */}
                {index !== processSteps.length - 1 && (
                  <div className='h-6 md:h-16 w-1 bg-gradient-to-b from-sky-800 to-purple-700'></div>
                )}
              </div>
            );
          })}
        </div>
      </section>

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

        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-white'>
          {/* Card 1 */}
          <div className='flex border border-gray-700 items-start gap-4 p-6 bg-gradient-to-br from-[#252e40] to-[#2a3340] rounded-xl shadow'>
            <img src='/Icons/icon22.png' alt='Eye Icon' className='w-10 h-10' />

            <div>
              <h3 className='font-semibold text-lg mb-1'>
                Single Pane of Glass
              </h3>
              <p className='text-sm text-gray-300'>
                Integrate scanning, risk scoring, patch tracking, and reporting.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className='flex items-start border border-gray-700  gap-4 p-6 bg-gradient-to-br from-[#252e40] to-[#2a3340] rounded-xl shadow'>
            <img
              src='/Icons/icon23.png'
              alt='Brain Icon'
              className='w-10 h-10'
            />
            <div>
              <h3 className='font-semibold text-lg mb-1'>
                Intelligence-led Prioritization
              </h3>
              <p className='text-sm text-gray-300'>
                Act on real-world exploit data over theory.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className='flex border border-gray-700  items-start gap-4 p-6 bg-gradient-to-br from-[#252e40] to-[#2a3340] rounded-xl shadow'>
            <img
              src='/Icons/icon24.png'
              alt='Repeat Icon'
              className='w-10 h-10'
            />
            <div>
              <h3 className='font-semibold text-lg mb-1'>Continuous Process</h3>
              <p className='text-sm text-gray-300'>
                Make TVM part of your daily operations, not an annual checkbox.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className='flex border border-gray-700  items-start gap-4 p-6 bg-gradient-to-br from-[#252e40] to-[#2a3340] rounded-xl shadow'>
            <img
              src='/Icons/icon25.png'
              alt='User Group Icon'
              className='w-10 h-10'
            />
            <div>
              <h3 className='font-semibold text-lg mb-1'>Engage All Staff</h3>
              <p className='text-sm text-gray-300'>
                Elevate awareness and ensure accountability across the
                organization.
              </p>
            </div>
          </div>

          {/* Card 5: Full width */}
          <div className='md:col-span-2 border border-gray-700  flex items-start gap-4 p-6 bg-gradient-to-br from-[#252e40] to-[#2a3340] rounded-xl shadow'>
            <img
              src='/Icons/icon26.png'
              alt='Chart Icon'
              className='w-10 h-10'
            />
            <div>
              <h3 className='font-semibold text-lg mb-1'>
                Adaptive Program Maturity
              </h3>
              <p className='text-sm text-gray-300'>
                Progress from ad-hoc to advanced models that include deeper
                metrics and predictive insights.
              </p>
            </div>
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

        <div className='max-w-6xl mx-auto rounded-2xl bg-gradient-to-r from-[#1F2A59] to-[#301C4D] py-10 px-6 md:px-10 shadow-xl'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center'>
            {/* Card 1 */}
            <div>
              <div className='flex justify-center mb-4'>
                <img
                  src='/Icons/icon19.png'
                  alt='Asset Icon'
                  className='w-12 h-12'
                />
              </div>
              <h3 className='font-semibold text-lg mb-2'>
                Comprehensive Asset Inventories
              </h3>
              <p className='text-sm text-gray-400'>
                Build complete visibility across your entire IT infrastructure
              </p>
            </div>

            {/* Card 2 */}
            <div>
              <div className='flex justify-center mb-4'>
                <img
                  src='/Icons/icon20.png'
                  alt='Risk Icon'
                  className='w-12 h-12'
                />
              </div>
              <h3 className='font-semibold text-lg mb-2'>
                Risk-Based Prioritization
              </h3>
              <p className='text-sm text-gray-400'>
                Prioritize vulnerabilities using advanced risk scoring
                algorithms
              </p>
            </div>

            {/* Card 3 */}
            <div>
              <div className='flex justify-center mb-4'>
                <img
                  src='/Icons/icon21.png'
                  alt='Workflow Icon'
                  className='w-12 h-12'
                />
              </div>
              <h3 className='font-semibold text-lg mb-2'>
                Integrated Workflows
              </h3>
              <p className='text-sm text-gray-400'>
                Integrate continuous scanning and penetration testing into
                workflows
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className='flex justify-center mt-10'>
            <button className='group bg-[#3B4FE2] hover:bg-[#3244c6] text-white font-semibold text-xs sm:text-sm md:text-base px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all duration-300 inline-flex items-center'>
              <span>Get Started with TVM </span>
              <span className='ml-2 transform transition-transform duration-300 group-hover:translate-x-1'>
                →
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
