import React, { useEffect, useRef } from 'react'
import about from '../../assets/about.png'
import '../styles/about.css'

export default function About() {
  const titleRef = useRef(null)
  const paragraph1Ref = useRef(null)
  const paragraph2Ref = useRef(null)
  const paragraph3Ref = useRef(null) // Add new ref for first p element

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
    if (paragraph3Ref.current) observer.observe(paragraph3Ref.current) // Observe the new ref

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
            <h2 ref={paragraph1Ref}>
              The future of muscle health starts here
            </h2>
            <p ref={paragraph3Ref}>
              The MuscleSen quantum gradiometer sensor is here 
              <br /><span className="indented-text">to change the game for real-time feedback and diagnosis, accelerate recovery, track progress</span>
              <br /><span className="indented-text">in fitness and rehabilitation, and target specific muscles</span>
            </p>
            <p ref={paragraph2Ref}>
              The MuscleSen monitors even slightest neuromuscular electrical activity… 
              <br /><span className="indented-text">… by measuring extremely weak magnetic fields generated during muscle contraction and relaxation</span>
              <br /><span className="indented-text">(<b>M</b>agneto<b>m</b>yo<b>g</b>raphy)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}