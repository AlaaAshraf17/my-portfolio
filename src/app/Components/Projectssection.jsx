'use client'
import React, { useState, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'

const projects = [
  {
    id: 1,
    title: 'Trendymart',
    subtitle: 'React E-Commerce SPA',
    description:
      'A single-page e-commerce application built with React.js featuring product browsing, cart management, and user authentication across 8+ interactive screens.',
    tags: ['React.js', 'React Hooks', 'REST APIs', 'Responsive Design', 'SPA'],
    highlights: [
      '99% mobile compatibility across all devices',
      '25% reduction in page re-renders via optimized Hooks',
      '8+ interactive screens with smooth client-side routing',
    ],
    github: 'https://github.com/AlaaAshraf17',
    color: '#4ade80',
    icon: '🛒',
  },
  {
    id: 2,
    title: 'ZayShop',
    subtitle: 'Full-Stack E-Commerce Platform',
    description:
      'Graduation project for the Digital Egypt Pioneers Initiative. A full-stack e-commerce web application enabling users to browse products, manage carts, and interact with a dynamic online store.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'REST APIs', 'MERN Stack'],
    highlights: [
      'Led frontend development with 7+ core UI screens',
      '15% smoother UI interactions via optimized state management',
      'Full-stack integration with RESTful API architecture',
    ],
    github: 'https://github.com/AlaaAshraf17',
    color: '#22c55e',
    badge: 'Graduation Project',
    icon: '🏪',
  },
]

const ProjectsSection = () => {
  const [hovered, setHovered] = useState(null)
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section ref={ref} className="py-24 relative" id="projects">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 rounded-r-full"
        style={{ background: 'linear-gradient(to bottom, transparent, #4ade80, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="text-green-400 font-mono text-sm uppercase tracking-widest mb-2">What I've built</p>
          <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              className={`reveal ${index === 0 ? 'delay-200' : 'delay-400'} group relative bg-gray-900/60 rounded-2xl border border-gray-800 hover:border-green-400/40 transition-all duration-300 overflow-hidden flex flex-col`}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(to right, transparent, ${project.color}, transparent)` }} />

              {/* Hover glow */}
              <div className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${hovered === project.id ? 'opacity-100' : 'opacity-0'}`}
                style={{ background: 'radial-gradient(circle at top left, rgba(74,222,128,0.04) 0%, transparent 60%)' }} />

              <div className="relative p-8 flex flex-col h-full">
                {/* Card header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{project.icon}</span>
                      <h3 className="text-white font-black text-2xl" style={{ fontFamily: "'Syne', sans-serif" }}>
                        {project.title}
                      </h3>
                      {project.badge && (
                        <span className="text-xs font-mono bg-green-400/10 border border-green-400/30 text-green-400 px-2 py-0.5 rounded-full">
                          {project.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-green-400 text-sm font-mono">{project.subtitle}</p>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 p-2 rounded-xl border border-gray-700 hover:border-green-400 hover:text-green-400 text-gray-500 transition-all duration-200"
                    title="View on GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-gray-400 text-sm">
                      <span className="text-green-400 flex-shrink-0 mt-0.5">▸</span>
                      {hl}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-800">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono bg-gray-800 text-gray-400 px-3 py-1 rounded-full border border-gray-700/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="reveal delay-500 mt-12 text-center">
          <a
            href="https://github.com/AlaaAshraf17"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors group"
          >
            <span className="text-sm font-mono">More projects on GitHub</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection