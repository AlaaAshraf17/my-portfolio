'use client'
import Link from 'next/link'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        

        <Link
          href="/"
          className="text-5xl font-extrabold text-white tracking-wide"
        >
        <span className="text-green-400">/</span>Alaa<span className="text-green-400">/</span>
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {['About', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                href={`/#${item.toLowerCase()}`}
                className="text-[#ADB7BE] text-xl hover:text-white transition relative group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/90 px-6 pb-6">
          <ul className="flex flex-col gap-6 pt-4">
            {['About', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  href={`/#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block text-[#ADB7BE] text-lg hover:text-green-400 transition"
                >
                  {item}
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

