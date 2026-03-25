'use client'
import React, { useRef } from 'react'
import { useTransition, useState } from 'react'
import TabButton from './TabButton'
import { useReveal } from '../hooks/useReveal'

const skills = [
  {
    category: 'Programming Languages',
    icon: '{ }',
    items: ['JavaScript (ES6+)', 'Python', 'SQL'],
  },
  {
    category: 'Frontend',
    icon: '▲',
    items: ['React.js', 'HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    category: 'State & Architecture',
    icon: '⬡',
    items: ['React Hooks', 'useState / useEffect', 'useContext', 'Component Architecture'],
  },
  {
    category: 'Backend & APIs',
    icon: '⚡',
    items: ['Node.js', 'REST APIs', 'Axios', 'Fetch API'],
  },
  {
    category: 'Database & DevTools',
    icon: '◈',
    items: ['MongoDB', 'Git & GitHub', 'Postman', 'VS Code'],
  },
  {
    category: 'Soft Skills',
    icon: '✦',
    items: ['Problem Solving', 'Team Collaboration', 'Mentoring', 'Time Management'],
  },
]

const Tab_Data = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map(({ category, icon, items }) => (
          <div
            key={category}
            className="group relative bg-gray-900/60 rounded-2xl p-6 border border-gray-800 hover:border-green-400/40 transition-all duration-300 overflow-hidden"
          >
            {/* hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: 'radial-gradient(circle at top left, rgba(74,222,128,0.05) 0%, transparent 70%)' }} />
            
            <div className="flex items-center gap-3 mb-4">
              <span className="text-green-400 text-lg font-mono font-bold w-7">{icon}</span>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">{category}</h4>
            </div>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400/60 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <div className="space-y-6 max-w-2xl mx-auto">
        <div className="relative bg-gray-900/60 rounded-2xl p-8 border border-gray-800">
          <div className="absolute top-0 left-8 w-16 h-0.5 bg-gradient-to-r from-green-400 to-transparent"></div>
          
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <div className="text-xs text-green-400 font-mono uppercase tracking-widest mb-2">University</div>
              <h4 className="text-white font-bold text-xl mb-1">Cairo University</h4>
              <p className="text-gray-400">Bachelor of Science in Computer Science</p>
              <p className="text-gray-500 text-sm mt-1">Egypt</p>
            </div>
            <div className="sm:text-right flex-shrink-0">
              <span className="inline-block bg-green-400/10 border border-green-400/30 text-green-400 text-sm font-mono px-3 py-1.5 rounded-lg">
                Expected 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <div className="space-y-5 max-w-3xl mx-auto">
        {[
          {
            org: 'Digital Egypt Pioneers Initiative',
            role: 'Frontend Developer Trainee',
            period: '2024 – 2025',
            points: [
              'Built web applications using HTML, CSS, JavaScript, and React.js through practical, production-level projects.',
              'Collaborated in team-based projects integrating REST APIs, following clean code practices and Agile-style workflows.',
              'Graduation project: ZayShop — a full-stack e-commerce app with 7+ UI screens, client-side routing, and API integration.',
            ],
          },
          {
            org: 'Information Technology Institute (ITI)',
            role: 'Web Development Trainee — React.js',
            period: '2024',
            points: [
              'Built reusable React components and implemented client-side routing using React Hooks and React Router.',
              'Improved UI responsiveness and code maintainability using modern JavaScript (ES6+) and structured state management.',
            ],
          },
        ].map(({ org, role, period, points }) => (
          <div key={org} className="relative bg-gray-900/60 rounded-2xl p-6 border border-gray-800 hover:border-green-400/30 transition-all duration-300">
            <div className="absolute top-0 left-8 w-12 h-0.5 bg-gradient-to-r from-green-400 to-transparent"></div>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div>
                <p className="text-xs text-green-400 font-mono uppercase tracking-widest mb-1">{org}</p>
                <h4 className="text-white font-bold text-lg">{role}</h4>
              </div>
              <span className="inline-block self-start bg-gray-800 border border-gray-700 text-gray-400 text-xs font-mono px-3 py-1.5 rounded-lg whitespace-nowrap">
                {period}
              </span>
            </div>
            <ul className="space-y-2">
              {points.map((pt, i) => (
                <li key={i} className="flex items-start gap-2.5 text-gray-400 text-sm leading-relaxed">
                  <span className="text-green-400 mt-1.5 flex-shrink-0">▸</span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ),
  },
]

const AboutSection = () => {
  const [tab, setTab] = useState('skills')
  const [isPending, startTransition] = useTransition()
  const ref = useRef(null)
  useReveal(ref)

  const handleTabChange = (id) => {
    startTransition(() => setTab(id))
  }

  return (
    <section ref={ref} className="text-white py-24 relative" id="about">
      {/* Subtle section accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 rounded-r-full"
        style={{ background: 'linear-gradient(to bottom, transparent, #4ade80, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="reveal mb-16">
          <p className="text-green-400 font-mono text-sm uppercase tracking-widest mb-2">Get to know me</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
            About Me
          </h2>
          <div className="flex items-start gap-6 max-w-4xl">
            <div className="hidden sm:block w-1 flex-shrink-0 self-stretch rounded-full"
              style={{ background: 'linear-gradient(to bottom, #4ade80, transparent)' }} />
            <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
              I'm a <span className="text-white font-medium">Frontend Developer</span> specializing in{' '}
              <span className="text-green-400 font-medium">React.js</span> and modern frontend technologies,
              with a sharp focus on clean code, performance, and attention to detail. I also have hands-on
              experience with the <span className="text-white font-medium">MERN stack</span>, giving me a solid
              understanding of how frontend and backend systems work together to deliver complete, production-ready applications.
              I'm continuously refining my craft — building practical, user-centered solutions that solve real problems.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="reveal delay-200 flex flex-wrap gap-3 mb-10">
          <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>Skills</TabButton>
          <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>Education</TabButton>
          <TabButton selectTab={() => handleTabChange('certifications')} active={tab === 'certifications'}>Certifications & Training</TabButton>
        </div>

        <div className="reveal delay-300 min-h-[420px] transition-all duration-300">
          {Tab_Data.find((t) => t.id === tab)?.content}
        </div>
      </div>
    </section>
  )
}

export default AboutSection