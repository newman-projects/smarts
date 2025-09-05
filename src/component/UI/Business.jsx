import React, { useEffect, useRef } from 'react'
import '../styles/light-section.css'
// Import relevant icons - replace with your actual imports
import quantum from '../../assets/quantum.svg'
import Diagnostics from '../../assets/Diagnostics.svg'
import magnetically from '../../assets/magnetically.svg'
import Integrability from '../../assets/Integrability.svg'

export default function Business() {
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

  const businessItems = [
    {
      icon: quantum,
      title: "Technological and commercial collaborations",
      description: "Collaborating with tech companies operating in our market, jointly funded development (as binational fund) and leveraging their marketing channels"
    },
    {
      icon: Diagnostics,
      title: "B2B & B2B2C",
      description: "Meeting consumer expectations for musculoskeletal health and the push for improved recovery speed and effectiveness"
    },
    {
      icon: magnetically,
      title: "Marketing Penetration",
      description: "Muscle sensors (MMG) have incredible potential in neuromuscular therapy, rehabilitation, and physical training"
    },
    {
      icon: Integrability,
      title: "A reliable and high-quality product",
      description: "Training the AI model for each muscle type, each muscle engagement pattern, and array sensors"
    }
  ]

  return (
    <div className='business-container'>
      <h1 ref={titleRef} className='business-title' style={{marginBottom: '5%'}}>
        Business Model
      </h1>
      <div className="items-container">
        {businessItems.map((item, index) => (
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