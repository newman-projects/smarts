import React, { useEffect, useRef } from 'react'
import '../styles/overview.css'
import continuity from '../../assets/continuity.svg'
import costs from '../../assets/costs.svg'
import diagnosis from '../../assets/diagnosis.svg'
import Diagnostics from '../../assets/Diagnostics.svg'
import dissatisfaction from '../../assets/dissatisfaction.svg'
import Integrability from '../../assets/Integrability.svg'
import magnetically from '../../assets/magnetically.svg'
import Prototype from '../../assets/Prototype.svg'
import quantum from '../../assets/quantum.svg'
import sensitivity from '../../assets/sensitivity.svg'
import signal from '../../assets/signal.svg'

const images = [
  { src: continuity, alt: 'continuity', name: 'Continuity' },
  { src: costs, alt: 'costs', name: 'Costs' },
  { src: diagnosis, alt: 'diagnosis', name: 'Diagnosis' },
  { src: Diagnostics, alt: 'diagnostics', name: 'Diagnostics' },
  { src: dissatisfaction, alt: 'dissatisfaction', name: 'Dissatisfaction' },
  { src: Integrability, alt: 'integrability', name: 'Integrability' },
  { src: magnetically, alt: 'magnetically', name: 'Magnetically' },
  { src: Prototype, alt: 'prototype', name: 'Prototype' },
  { src: quantum, alt: 'quantum', name: 'Quantum' },
  { src: sensitivity, alt: 'sensitivity', name: 'Sensitivity' },
  { src: signal, alt: 'signal', name: 'Signal' },
]

export default function OverView() {
  const scrollRef = useRef(null)

  // useEffect(() => {
  //   // Start animation immediately when component mounts
  //   if (scrollRef.current) {
  //     scrollRef.current.classList.add('animate-scroll')
  //   }

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add('animate-scroll')
  //         } else {
  //           // Optional: pause animation when not in view to save performance
  //           // entry.target.classList.remove('animate-scroll')
  //         }
  //       })
  //     },
  //     {
  //       threshold: 0.1,
  //       rootMargin: '0px 0px -10% 0px'
  //     }
  //   )

  //   if (scrollRef.current) observer.observe(scrollRef.current)

  //   return () => {
  //     observer.disconnect()
  //   }
  // }, [])

  return (
    <div className="infinite-scroll-container">
      <div className="scroll-wrapper" ref={scrollRef}>
        <div className="scroll-content animate-scroll">
          {/* First set of images */}
          {images.map((image, index) => (
            <div key={`first-${index}`} className="image-card">
              <img
                src={image.src}
                alt={image.alt}
                className="image"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {images.map((image, index) => (
            <div key={`second-${index}`} className="image-card">
              <img
                src={image.src}
                alt={image.alt}
                className="image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

