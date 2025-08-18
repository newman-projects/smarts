import React, { useEffect, useRef } from 'react'
import diagnosis from '../../assets/diagnosis.svg'
import sensitivity from '../../assets/sensitivity.svg'
import Prototype from '../../assets/Prototype.svg'
import Integrability from '../../assets/Integrability.svg'
import '../styles/prodact.css'

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

  return (
    <div className='product-container'>
        <h1 ref={titleRef}>Product Overview</h1>
        <div className="items-container">
            <div 
              className="item-three"
              ref={el => itemsRef.current[0] = el}
            >
                <img src={diagnosis} alt="diagnosis" />
                <h3>Unique Diagnosis</h3>
                <p>Small and inner muscles, muscle engagement and neuromuscular junction</p>
            </div>
            <div 
              className="item-three"
              ref={el => itemsRef.current[1] = el}
            >
                <img src={sensitivity} alt="sensitivity" />
                <h3>Sensitivity</h3>
                <p>Measure magnetic fields (pT) using a highly sensitive vector quantum gradiometer</p>
            </div>
            <div 
              className="item-three"
              ref={el => itemsRef.current[2] = el}
            >
                <img src={Prototype} alt="Prototype" />
                <h3>LAB Prototype</h3>
                <p>Gradiometer sensor based on quantum physics principles</p>
            </div>
            <div 
              className="item-three"
              ref={el => itemsRef.current[3] = el}
            >
                <img src={Integrability} alt="Integrability" />
                <h3>Integrability</h3>
                <p>Employing a real-time sensor array integrated with cardiac and nervous system activity</p>
            </div>
        </div>
    </div>
  )
}



