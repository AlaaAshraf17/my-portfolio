'use client'
import React, { useRef, useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import { useReveal } from '../hooks/useReveal'

const skills = [
  { category: 'Languages', icon: '{ }', items: ['JavaScript (ES6+)', 'Python', 'SQL', 'Java'] },
  { category: 'Frameworks & Libraries', icon: '▲', items: ['React.js', 'Next.js', 'React Native', 'Node.js', 'Express.js'] },
  { category: 'Frontend', icon: '⬡', items: ['React Hooks', 'React Router', 'Context API', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { category: 'UI/UX Design', icon: '✦', items: ['Figma', 'Wireframing & Prototyping', 'Design Systems', 'User Research', 'Accessibility (WCAG)'] },
  { category: 'Databases & Tools', icon: '◈', items: ['MongoDB', 'Git & GitHub', 'Postman', 'VS Code', 'Vite', 'Expo Go'] },
  { category: 'Core Skills', icon: '⚡', items: ['REST API Integration', 'Responsive Design', 'State Management', 'Agile/Scrum'] },
]

const certs = [
  {
    img: '/ai-literacy-certificate.png',
    pdf: '/593_Alaa_Ashraf_Ramdan.pdf',
    org: 'AI Literacy',
    role: 'AI Literacy Certificate',
    period: 'June 2026',
  },
  {
    img: '/ux-design-fundamentals-certificate.png',
    pdf: '/UX_Design_Fundamentals_Certificate.pdf',
    org: 'Information Technology Institute (ITI)',
    role: 'UX Design Fundamentals',
    period: 'October 2026',
  },
  {
    img: '/c1.jpg',
    org: 'Digital Egypt Pioneers Initiative',
    role: 'Frontend Developer Trainee',
    period: '2024 – 2025',
  },
  {
    img: '/c2.jpg',
    org: 'Information Technology Institute (ITI)',
    role: 'Web Development Trainee — React.js',
    period: '2024',
  },
  {
    img: '/c3.jpg',
    org: 'National Telecommunication Institute (NTI)',
    role: 'Cybersecurity Academy',
    period: '2025',
  },
]

const SkillsContent = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    {skills.map(({ category, icon, items }) => (
      <div key={category} className="group relative bg-gray-900/60 rounded-2xl p-6 border border-gray-800 hover:border-green-400/40 transition-all duration-300 overflow-hidden">
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
)

const EducationContent = () => (
  <div className="space-y-6 max-w-2xl mx-auto">
    <div className="relative bg-gray-900/60 rounded-2xl p-8 border border-gray-800">
      <div className="absolute top-0 left-8 w-16 h-0.5 bg-gradient-to-r from-green-400 to-transparent"></div>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <div className="text-xs text-green-400 font-mono uppercase tracking-widest mb-2">University</div>
          <h4 className="text-white font-bold text-xl mb-1">Cairo University</h4>
          <p className="text-gray-400">B.Sc. in Computer Science</p>
          <p className="text-gray-500 text-sm mt-1">Egypt</p>
        </div>
        <div className="sm:text-right flex-shrink-0">
          <span className="inline-block bg-green-400/10 border border-green-400/30 text-green-400 text-sm font-mono px-3 py-1.5 rounded-lg">
            Graduated 2026
          </span>
        </div>
      </div>
    </div>
  </div>
)

const ExperienceContent = () => (
  <div className="space-y-4 max-w-3xl mx-auto">
    {[
      { role: 'UI/UX Designer', org: 'Sekna', period: 'Aug 2026 – Present', details: ['Design user flows, wireframes, and interactive Figma prototypes for client projects.', 'Build design systems and reusable component libraries.'] },
      { role: 'English Coding Instructor', org: 'Codk', period: 'Current Position', details: ['Teach JavaScript, Python, Data Science, and Machine Learning through hands-on sessions.', 'Mentor students and help them build independent debugging skills.'] },
      { role: 'Frontend Developer Intern', org: 'TechExpo', period: 'Jan 2025 – Mar 2025', details: ['Led frontend development of a Next.js Learning Management System, delivering 10+ screens in two months.', 'Built a modular admin dashboard for user management, reporting, and authentication across three roles.'] },
    ].map((job) => (
      <article key={job.org} className="bg-gray-900/60 rounded-2xl p-6 border border-gray-800">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div><h4 className="text-white font-bold text-lg">{job.role}</h4><p className="text-green-400 text-sm">{job.org}</p></div>
          <span className="text-gray-400 text-xs font-mono">{job.period}</span>
        </div>
        <ul className="space-y-2">{job.details.map((detail) => <li key={detail} className="text-gray-400 text-sm leading-relaxed">• {detail}</li>)}</ul>
      </article>
    ))}
  </div>
)

const CertificationsContent = () => {
  const [lightbox, setLightbox] = useState(null)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((cert, i) => (
          <div
            key={i}
            onClick={() => cert.pdf ? window.open(cert.pdf, '_blank', 'noopener,noreferrer') : setLightbox(cert)}
            className="group cursor-pointer bg-gray-900/60 rounded-2xl border border-gray-800 hover:border-green-400/40 transition-all duration-300 overflow-hidden"
          >
            {/* Certificate image */}
            <div className="relative w-full h-48 overflow-hidden bg-gray-800">
              {cert.img ? (
                <Image src={cert.img} alt={cert.role} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              ) : (
                <a href={cert.pdf} target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-green-400" aria-label={`Open ${cert.role}`}>
                  <span className="text-5xl">✧</span>
                  <span className="text-xs font-mono uppercase tracking-widest">Open certificate PDF</span>
                </a>
              )}
              {/* overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-green-400/90 text-black text-xs font-semibold px-3 py-1.5 rounded-full">
                  View Certificate
                </span>
              </div>
            </div>

            {/* Card info */}
            <div className="p-5">
              <p className="text-xs text-green-400 font-mono uppercase tracking-widest mb-1 truncate">{cert.org}</p>
              <h4 className="text-white font-bold text-sm mb-2">{cert.role}</h4>
              <span className="inline-block bg-gray-800 border border-gray-700 text-gray-400 text-xs font-mono px-2.5 py-1 rounded-lg">
                {cert.period}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-green-400 transition-all"
            >
              ✕
            </button>

            <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
              <Image
                src={lightbox.img}
                alt={lightbox.role}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-5 border-t border-gray-800">
              <p className="text-xs text-green-400 font-mono uppercase tracking-widest mb-1">{lightbox.org}</p>
              <div className="flex items-center justify-between">
                <h4 className="text-white font-bold">{lightbox.role}</h4>
                <span className="text-gray-400 text-xs font-mono">{lightbox.period}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

const Tab_Data = [
  { title: 'Skills', id: 'skills', content: <SkillsContent /> },
  { title: 'Experience', id: 'experience', content: <ExperienceContent /> },
  { title: 'Education', id: 'education', content: <EducationContent /> },
  { title: 'Certifications', id: 'certifications', content: <CertificationsContent /> },
]

const AboutSection = () => {
  const [tab, setTab] = useState('skills')
  const [isPending, startTransition] = useTransition()
  const ref = useRef(null)
  useReveal(ref)

  const handleTabChange = (id) => startTransition(() => setTab(id))

  return (
    <section ref={ref} className="text-white py-24 relative" id="about">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 rounded-r-full"
        style={{ background: 'linear-gradient(to bottom, transparent, #4ade80, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4">
        <div className="reveal mb-16">
          <p className="text-green-400 font-mono text-sm uppercase tracking-widest mb-2">Get to know me</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
            About Me
          </h2>
          <div className="flex items-start gap-6 max-w-4xl">
            <div className="hidden sm:block w-1 flex-shrink-0 self-stretch rounded-full"
              style={{ background: 'linear-gradient(to bottom, #4ade80, transparent)' }} />
            <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
              I'm a <span className="text-white font-medium">Frontend Developer and UI/UX Designer</span> building
              responsive web applications with <span className="text-green-400 font-medium">React.js</span> and{' '}
              <span className="text-green-400 font-medium">Next.js</span>. I focus on reusable components, thoughtful
              user flows, and polished interfaces, with hands-on experience across web, mobile, and full-stack projects.
            </p>
          </div>
        </div>

        <div className="reveal delay-200 flex flex-wrap gap-3 mb-10">
          <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>Skills</TabButton>
          <TabButton selectTab={() => handleTabChange('experience')} active={tab === 'experience'}>Experience</TabButton>
          <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>Education</TabButton>
          <TabButton selectTab={() => handleTabChange('certifications')} active={tab === 'certifications'}>Certifications</TabButton>
        </div>

        <div className="reveal delay-300 min-h-[420px] transition-all duration-300">
          {Tab_Data.find((t) => t.id === tab)?.content}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
