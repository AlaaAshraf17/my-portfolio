'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { useReveal } from '../hooks/useReveal'

const Hero = () => {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section ref={ref} className="relative min-h-screen flex items-center py-20 overflow-hidden" id="home">
      {/* Animated background grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(74,222,128,0.04) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(74,222,128,0.04) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #4ade80 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full opacity-8"
          style={{ background: 'radial-gradient(circle, #4ade80 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-6 w-full items-center">
        {/* Text Content */}
        <div className="col-span-7 flex flex-col justify-center text-center sm:text-left">
          {/* Status badge */}
          <div className="reveal delay-100 inline-flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-green-400 text-sm font-mono tracking-widest uppercase">Available for work</span>
          </div>

          <p className="reveal delay-200 text-gray-400 text-lg mb-2 font-light tracking-wide">Hello, I'm</p>
          <h1 className="reveal delay-300 text-white mb-3 text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}>
            Alaa<br />
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #4ade80 0%, #22c55e 50%, #16a34a 100%)' }}>
            Ashraf<br />Ramadan
            </span>
          </h1>

          {/* Animated role */}
          <div className="reveal delay-400 flex items-center gap-3 mb-6 justify-center sm:justify-start">
            <span className="h-px w-8 bg-green-400"></span>
            <h3 className="text-gray-300 text-xl sm:text-2xl font-mono">
              <TypeAnimation
                sequence={[
                  'Frontend Developer',
                  2000,
                  'UI/UX Designer',
                  2000,
                  'React.js & Next.js Developer',
                  2000,
                  'React Native Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h3>
          </div>

          <p className="reveal delay-500 text-gray-400 text-base lg:text-lg mb-8 leading-relaxed max-w-xl mx-auto sm:mx-0">
            Building responsive web and mobile experiences with <span className="text-white font-medium">React.js and Next.js</span>,
            combining reliable frontend engineering with thoughtful <span className="text-green-400 font-medium">UI/UX design</span>.
          </p>

          {/* Stats row */}
          <div className="reveal delay-500 flex gap-8 mb-10 justify-center sm:justify-start">
            {[
              { num: '10+', label: 'LMS Screens' },
              { num: '20+', label: 'Admin Operations' },
              { num: '3', label: 'User Roles' },
            ].map(({ num, label }) => (
              <div key={label} className="text-center sm:text-left">
                <div className="text-2xl font-black text-green-400" style={{ fontFamily: "'Syne', sans-serif" }}>{num}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">{label}</div>
              </div>
            ))}
          </div>

          <div className="reveal delay-600 flex flex-wrap justify-center sm:justify-start gap-4">
            <a href="#contact">
              <button className="group relative px-8 py-3.5 font-semibold rounded-xl overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #4ade80, #16a34a)', color: '#000' }}>
                <span className="relative z-10 flex items-center gap-2">
                  Hire Me
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </a>
            <a href="/Alaa_Ashraf_frontend.pdf" download>
              <button className="group px-8 py-3.5 bg-transparent border border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-green-400 hover:text-green-400 transition-all duration-300 flex items-center gap-2">
                <svg className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                Download CV
              </button>
            </a>
          </div>

          {/* Social links */}
          <div className="reveal delay-600 flex gap-4 mt-8 justify-center sm:justify-start">
            <a href="https://github.com/AlaaAshraf17" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm group">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="group-hover:underline">AlaaAshraf17</span>
            </a>
            <a href="https://linkedin.com/in/alaa-ashraf-a74b31316/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors text-sm group">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="group-hover:underline">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="reveal-right delay-300 col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="relative">
            {/* Decorative rings */}
            <div className="absolute inset-0 rounded-full border border-green-400/10 scale-110 animate-pulse"></div>
            <div className="absolute inset-0 rounded-full border border-green-400/5 scale-125"></div>

            <div className="rounded-full w-[240px] h-[240px] lg:w-[380px] lg:h-[380px] relative mx-auto overflow-hidden"
              style={{ border: '2px solid rgba(74,222,128,0.2)', boxShadow: '0 0 60px rgba(74,222,128,0.1), inset 0 0 60px rgba(0,0,0,0.5)' }}>
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(74,222,128,0.05) 0%, transparent 60%)' }} />
              <Image
                src="/image.png"
                alt="Alaa Ashraf"
                className="rounded-full object-cover"
                fill
                style={{ objectPosition: 'center top' }}
              />
            </div>

            {/* Floating tech badge */}
            <div className="absolute -bottom-2 -right-2 lg:bottom-4 lg:right-0 bg-gray-900 border border-gray-700 rounded-xl px-3 py-2 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-green-400/10 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <div className="text-white text-xs font-semibold">React.js</div>
                  <div className="text-gray-500 text-xs">+ MERN Stack</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
