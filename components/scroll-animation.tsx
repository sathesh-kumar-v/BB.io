"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
  animation?:
    | "fade-up"
    | "card-reveal"
    | "scale-up"
    | "slide-horizontal"
    | "slide-left"
    | "slide-right"
    | "rotate-fade"
    | "stagger"
    | "zoom-out"
    | "blur-focus"
    | "holographic"
    | "glitch"
    | "cyber-scan"
    | "neon-glow"
    | "cube-flip"
    | "grid-reveal"
    | "particle-burst"
    | "warp-speed"
    | "quantum"
    | "stagger-glow"
}

export function ScrollAnimation({ children, className = "", delay = 0, animation = "fade-up" }: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("is-visible")
            }, delay)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const animationClass = {
    "fade-up": "animate-on-scroll",
    "card-reveal": "scroll-card-reveal",
    "scale-up": "scroll-scale-up",
    "slide-horizontal": "scroll-slide-horizontal",
    "slide-left": "scroll-slide-left",
    "slide-right": "scroll-slide-right",
    "rotate-fade": "scroll-rotate-fade",
    stagger: "scroll-stagger",
    "zoom-out": "scroll-zoom-out",
    "blur-focus": "scroll-blur-focus",
    holographic: "scroll-holographic",
    glitch: "scroll-glitch",
    "cyber-scan": "scroll-cyber-scan",
    "neon-glow": "scroll-neon-glow",
    "cube-flip": "scroll-cube-flip",
    "grid-reveal": "scroll-grid-reveal",
    "particle-burst": "scroll-particle-burst",
    "warp-speed": "scroll-warp-speed",
    quantum: "scroll-quantum",
    "stagger-glow": "scroll-stagger-glow",
  }[animation]

  return (
    <div ref={ref} className={`${animationClass} ${className}`}>
      {children}
    </div>
  )
}
