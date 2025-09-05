import React, { useEffect, useRef } from 'react'
import about from '../../assets/about.png'
import '../styles/about.css'

export default function About() {
  const titleRef = useRef(null)
  const paragraph1Ref = useRef(null)
  const paragraph2Ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    )

    if (titleRef.current) observer.observe(titleRef.current)
    if (paragraph1Ref.current) observer.observe(paragraph1Ref.current)
    if (paragraph2Ref.current) observer.observe(paragraph2Ref.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="about-container">
      <div className="content-wrapper">
        <div className="image-section">
          <div className="image-3d-container">
            <img 
              src={about} 
              alt="About MuscleSen" 
              className="about-image"
            />
          </div>
        </div>
        
        <div className="text-section">
          <div className="text">
            <h1 ref={titleRef}>About MuscleSen</h1>
            <p ref={paragraph1Ref}>
              The Muscle quantum Sensor monitors even slightest neuromuscular electrical activity…
            </p>
            <p ref={paragraph2Ref}>
              … by measuring extremely weak magnetic fields generated during muscle contraction and relaxation (Magnetomyography)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}