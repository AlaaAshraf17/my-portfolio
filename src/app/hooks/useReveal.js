'use client'
import { useEffect } from 'react'

/**
 * Attaches an IntersectionObserver to all elements matching `selector`
 * inside the given `containerRef`, adding the `visible` class when they enter the viewport.
 */
export function useReveal(containerRef, selector = '.reveal, .reveal-left, .reveal-right, .reveal-scale') {
  useEffect(() => {
    const container = containerRef?.current ?? document
    const els = container.querySelectorAll(selector)
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [containerRef, selector])
}
