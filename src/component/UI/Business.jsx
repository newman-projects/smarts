import React, { useEffect, useRef } from 'react'
import '../styles/business.css'
// Import relevant icons - you may need to replace these with actual business-related images
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

  return (
    <div className='business-container'>
        <h1 ref={titleRef}>Business Model</h1>
        <div className="items-container">
            <div 
              className="item-for"
              ref={el => itemsRef.current[0] = el}
            >
                <img src={quantum} alt="tech collaboration" />
                <h3>Technological and commercial collaborations</h3>
                <p>Collaborating with tech companies operating in our market, jointly funded development (as binational fund) and leveraging their marketing channels</p>
            </div>
            <div 
              className="item-for"
              ref={el => itemsRef.current[1] = el}
            >
                <img src={Diagnostics} alt="B2B" />
                <h3>B2B & B2B2C</h3>
                <p>Meeting consumer expectations for musculoskeletal health and the push for improved recovery speed and effectiveness</p>
            </div>
            <div 
              className="item-for"
              ref={el => itemsRef.current[2] = el}
            >
                <img src={magnetically} alt="marketing" />
                <h3>Marketing Penetration</h3>
                <p>Muscle sensors (MMG) have incredible potential in neuromuscular therapy, rehabilitation, and physical training</p>
            </div>
            <div 
              className="item-for"
              ref={el => itemsRef.current[3] = el}
            >
                <img src={Integrability} alt="product quality" />
                <h3>A reliable and high-quality product</h3>
                <p>Training the AI model for each muscle type, each muscle engagement pattern, and array sensors</p>
            </div>
        </div>
    </div>
  )
}