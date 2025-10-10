import React, { useEffect, useRef } from 'react'
import '../styles/hero.css'
import musclesen from '../../assets/musclesen.png'
import smartsen from '../../assets/smartsen.mp4'


export default function Hero() {
  const titleRef = useRef(null)
  const infoRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }

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
    if (infoRef.current) observer.observe(infoRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className='hero-container'>
        <video 
          ref={videoRef}
          className="hero-video"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={smartsen} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
            <div className="title" ref={titleRef}>
              <h1>Smartsen.net</h1>
              <h4>info@smartsen.net</h4>
              <h2>Imaging Knowing your muscle development in real-time …  monitoring & diagnosis by MuscleSen</h2>
            </div>
            <div className="info" ref={infoRef}>
              <p>
                MuscleSen sets a new standard for muscle and neuromuscular health solutions <br />
                <span className="musclesen-wrapper">
                  <img src={musclesen} alt="musclesen" className="musclesen-logo" />
                </span>
              </p>
            </div>
        </div>
        <div className="hero-right-title">
          <h2>SmartSen</h2>
        </div>
    </div>
  )
}