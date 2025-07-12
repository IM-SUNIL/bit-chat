'use client'

import { useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import Screenshots from '@/components/Screenshots'
import FAQ from '@/components/FAQ'
import Whitepaper from '@/components/Whitepaper'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Add console logging for fun
    console.log(`
%c🪐 Bitchat Landing Page Loaded
%c
%cWelcome to the decentralized future of messaging!
%cBuilt with ❤️ for privacy advocates and mesh network enthusiasts.

%cKey Features:
%c• Bluetooth LE Mesh Networking
%c• End-to-End Encryption
%c• Offline Communication
%c• Privacy-First Design

%cReady to chat without the internet? Literally.
`,
'color: #39FF14; font-size: 20px; font-weight: bold; font-family: "Space Grotesk", monospace;',
'',
'color: #00ffff; font-size: 14px; font-family: "Space Grotesk", monospace;',
'',
'color: #39FF14; font-size: 16px; font-weight: bold; font-family: "Space Grotesk", monospace;',
'color: #ffffff; font-size: 14px; font-family: "Space Grotesk", monospace;',
'color: #39FF14; font-size: 14px; font-family: "Space Grotesk", monospace;',
'color: #39FF14; font-size: 14px; font-family: "Space Grotesk", monospace;',
'color: #39FF14; font-size: 14px; font-family: "Space Grotesk", monospace;',
'color: #39FF14; font-size: 14px; font-family: "Space Grotesk", monospace;',
'color: #00ffff; font-size: 16px; font-weight: bold; font-family: "Space Grotesk", monospace;'
    )

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .workflow-step, .screenshot-card, .faq-item, .whitepaper-section')
    animateElements.forEach(el => {
      observer.observe(el)
    })

    // Typing effect for hero title
    const heroTitle = document.querySelector('.hero-title')
    if (heroTitle) {
      const text = heroTitle.textContent || ''
      heroTitle.innerHTML = ''
      
      let i = 0
      const typeWriter = () => {
        if (i < text.length) {
          heroTitle.innerHTML += text.charAt(i)
          i++
          setTimeout(typeWriter, 50)
        }
      }
      
      // Start typing effect after a delay
      setTimeout(typeWriter, 1000)
    }

    // Glitch effect for hero background
    const glitchOverlay = document.querySelector('.glitch-overlay')
    if (glitchOverlay) {
      const interval = setInterval(() => {
        glitchOverlay.style.opacity = (Math.random() * 0.2).toString()
      }, 2000)

      return () => clearInterval(interval)
    }
  }, [])

  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <Screenshots />
      <FAQ />
      <Whitepaper />
      <Footer />
    </main>
  )
} 