import React, { useEffect, useRef } from 'react'
import diagnosis from '../../assets/diagnosis.svg'
import sensitivity from '../../assets/sensitivity.svg'
import Prototype from '../../assets/Prototype.svg'
import Integrability from '../../assets/Integrability.svg'
import '../styles/dark-section.css'

export default function Product() {
  const titleRef = useRef(null)
  const itemsRef = useRef([])

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
    itemsRef.current.forEach(item => {
      if (item) observer.observe(item)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const productItems = [
    {
      icon: diagnosis,
      title: "Unique Diagnosis",
      description: "Small and inner muscles, muscle engagement and neuromuscular junction"
    },
    {
      icon: sensitivity,
      title: "Sensitivity",
      description: "Measure magnetic fields (pT) using a highly sensitive vector quantum gradiometer"
    },
    {
      icon: Prototype,
      title: "LAB Prototype",
      description: "Gradiometer sensor based on quantum physics principles"
    },
    {
      icon: Integrability,
      title: "Integrability",
      description: "Employing a real-time sensor array integrated with cardiac and nervous system activity"
    }
  ]

  return (
    <div className='dark-container'>
      <h1 ref={titleRef} className='dark-title' style={{marginBottom: '5%'}}>
        Product Overview
      </h1>
      <div className="items-container">
        {productItems.map((item, index) => (
          <div 
            key={index}
            className="dark-card"
            ref={el => itemsRef.current[index] = el}
          >
            <div className="card-inner">
              <img src={item.icon} alt={item.title} className="card-image" />
              <h3 className="card-heading">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}