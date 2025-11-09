import React, { useEffect, useRef } from 'react'
import prodact from '../../assets/prodact.png'

import '../styles/prodact.css'

export default function ProdactV1() {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const leftSectionRef = useRef(null)
  const productImageRef = useRef(null)

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
    if (subtitleRef.current) observer.observe(subtitleRef.current)
    if (leftSectionRef.current) observer.observe(leftSectionRef.current)
    if (productImageRef.current) observer.observe(productImageRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section className="modern-product">
      <div className="product-container">
        <h1 ref={titleRef} className="modern-title">
          The Product Technology
        </h1>
        <p ref={subtitleRef} className="modern-subtitle">
          Revolutionary quantum-based diagnostic solutions for next-generation healthcare
        </p>
        
        <div className="product-details">
          <div 
            ref={leftSectionRef}
            className="left-section"
          >
            <div className="section-topic">The Product Technology</div>
            <p className="section-description">
              Wearable MuscleSen detects ultra-weak neuromuscular currents by monitoring tiny magnetic fields 
              during muscle activity, contraction and relaxation, using AI-powered diagnostics and AI-driven cloud services
            </p>
            <p className="section-description">
              Our advanced quantum gradiometer technology utilizes highly sensitive sensors to measure magnetic fields at picoTesla (pT) precision levels
            </p>
            <p className="section-description">
              MuscleSen is based on core quantum physics concepts such as atomic vector magnetometer and electron spin dynamics
            </p>
            <p className="section-description handwriting-style">
              MuscleSen is the smart bet. The future of muscle health starts here
            </p>
          </div>
          
          <div 
            ref={productImageRef}
            className="product-image-container"
          >
            <img 
              src={prodact} 
              alt="MuscleSen Product" 
              className="product-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}