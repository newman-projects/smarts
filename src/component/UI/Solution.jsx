import React, { useEffect, useRef } from 'react'
import quantum from '../../assets/quantum.svg'
import Diagnostics from '../../assets/Diagnostics.svg'
import magnetically from '../../assets/magnetically.svg'
import '../styles/light-section.css'  // Changed from solution.css to business.css

export default function Solution() {
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

  const solutionItems = [
    {
      icon: quantum,
      title: "Quantum gradiometer sensor",
      description: "Precisely detects tiny variations in the magnetic field. Monitoring weak neuromuscular currents"
    },
    {
      icon: Diagnostics,
      title: "Diagnostics",
      description: "Dedicated algorithms and Edge AI through smartphone and AI cloud computing"
    },
    {
      icon: magnetically,
      title: "Magnetically Shielded environment",
      description: "No shielded chamber required. Uses built-in adaptive shielding."
    }
  ]

  return (
    <div className='business-container'>
      <h1 ref={titleRef} className='business-title'>
        Our Solution
      </h1>
      <p ref={subtitleRef} className='solution-subtitle'>
        To assist muscles development in neuromuscular therapy, rehabilitation, and physical training <br /> MuscleSen is not just another wearable. It is a leap forward in muscle and neuromuscular health tech.
        Do wearable muscle monitoring the smart, with high sensitively, non-invasive way and no shielded chamber.
        MuscleSen sets a new standard for muscle and neuromuscular health solutions.
      </p>
      <div className="items-container">
        {solutionItems.map((item, index) => (
          <div 
            key={index}
            className="business-card"
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