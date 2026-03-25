'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['About', 'Projects', 'Contact']

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/70 backdrop-blur-xl border-b border-gray-800/50' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-1">
          <span className="text-green-400 font-mono text-2xl font-black">&lt;</span>
          <span className="text-white text-xl font-black tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
            Alaa
          </span>
          <span className="text-green-400 font-mono text-2xl font-black">/&gt;</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => (
            <li key={item}>
              <Link
                href={`/#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-white text-sm font-mono px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-200 relative group"
              >
                <span className="text-green-400 mr-1 opacity-0 group-hover:opacity-100 transition-opacity">#</span>
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="mailto:alaa123.1907@gmail.com"
          className="hidden md:flex items-center gap-2 text-xs font-mono bg-green-400/10 border border-green-400/30 text-green-400 px-4 py-2 rounded-lg hover:bg-green-400/20 transition-all duration-200">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400"></span>
          </span>
          Available for work
        </a>

        {/* Mobile toggle */}
        <button className="md:hidden text-white text-2xl p-1" onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur-xl border-b border-gray-800 px-6 pb-6">
          <ul className="flex flex-col gap-1 pt-4">
            {navLinks.map((item) => (
              <li key={item}>
                <Link
                  href={`/#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 text-gray-400 text-sm font-mono hover:text-green-400 py-3 px-2 rounded-lg hover:bg-green-400/5 transition-all"
                >
                  <span className="text-green-400">#</span>{item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar