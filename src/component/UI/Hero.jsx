import React, { useEffect, useRef } from 'react'
import '../styles/hero.css'
import musclesen from '../../assets/musclesen.png'
import SmartSen from '../../assets/smartsen.png'


export default function Hero() {
  const titleRef = useRef(null)
  const infoRef = useRef(null)

  // Generate flowing wave path - creates smooth sinusoidal waves (multiple wavelengths)
  const generateWavePath = (amplitude, yPosition, phase = 0, wavelength = 200) => {
    let path = `M0,${yPosition}`
    // Multiple wavelengths for consistent wave pattern
    for (let x = 0; x <= 1400; x += 8) {
      const y = yPosition + amplitude * Math.sin((x * 2 * Math.PI / wavelength) + phase)
      path += ` L${x},${y}`
    }
    return path
  }

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
    if (infoRef.current) observer.observe(infoRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className='hero-container'>
        {/* Flowing Glowing Waves */}
        <div className="light-waves">
          <div className="wave wave1">
            <svg viewBox="0 0 1400 600" preserveAspectRatio="none">
              <path d={generateWavePath(40, 200, 0, 180)} />
            </svg>
          </div>
          
          <div className="wave wave2">
            <svg viewBox="0 0 1400 600" preserveAspectRatio="none">
              <path d={generateWavePath(35, 260, Math.PI / 4, 200)} />
            </svg>
          </div>
        </div>

        {/* Smart-Sen Image on Right */}
        <div className="hero-image-wrapper">
          <img src={SmartSen} alt="Smart-Sen Device" className="hero-image" />
        </div>

        <div className="hero-content">
            <div className="title" ref={titleRef}>
              <h1>Monitoring and Diagnosis by MuscleSen</h1>
              <h4>info@smartsen.net</h4>
              <h2>Imaging Knowing your muscle development in real-time…  <br />monitoring & diagnosis by MuscleSen</h2>
            </div>
            <div className="info" ref={infoRef}>
              <p>
                MuscleSen sets a new standard for muscle and neuromuscular health solutions
              </p>
              <span className="musclesen-wrapper">
                <img src={musclesen} alt="musclesen" className="musclesen-logo" />
              </span>
            </div>
        </div>
    </div>
  )
}