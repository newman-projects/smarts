import React, { useEffect, useRef } from 'react'
import signal from '../../assets/signal.svg'
import continuity from '../../assets/continuity.svg'
import costs from '../../assets/costs.svg'
import dissatisfaction from '../../assets/dissatisfaction.svg'
import '../styles/dark-section.css'

export default function Problem() {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
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
    if (subtitleRef.current) observer.observe(subtitleRef.current)
    itemsRef.current.forEach(item => {
      if (item) observer.observe(item)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const problemItems = [
    {
      icon: signal,
      title: "Signal Detection Gap",
      description: "Inner and small muscles. Muscle engagement"
    },
    {
      icon: continuity,
      title: "Continuity gap",
      description: "Setup complexity. Inconsistent initial conditions. Monitoring multiple muscles"
    },
    {
      icon: costs,
      title: "Costs",
      description: "Quality EMG Quality MMG - Hundreds $ vs Thousands $"
    },
    {
      icon: dissatisfaction,
      title: "Customer dissatisfaction",
      description: "EMG MMG invasive, sweat. Environmental noise. Inconvenience Not stable"
    }
  ]

  return (
    <div className='dark-container'>
      <h1 ref={titleRef} className='dark-title'>
        Problem
      </h1>
      <h2 ref={subtitleRef} className='dark-subtitle'>
        Across therapeutic care, rehabilitation and athletic training
      </h2>
      <div className="items-container">
        {problemItems.map((item, index) => (
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