import React, { useEffect, useRef } from 'react'
import '../styles/hero.css'
import musclesen from '../../assets/musclesen.png'

export default function Hero() {
  const titleRef = useRef(null)
  const infoRef = useRef(null)

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
        <div className="hero-content">
            <div className="title" ref={titleRef}>
                <h1>Smartsen.net</h1>
                <h4>info@smartsen.net</h4>
            </div>
            <div className="info" ref={infoRef}>
                <p>Imagine knowing your muscle development in real time…  monitoring & diagnosis by <br /> <span><img src={musclesen} alt="musclesen" /></span></p>
            </div>
        </div>
    </div>
  )
}