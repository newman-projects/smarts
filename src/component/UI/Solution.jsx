import React, { useEffect, useRef } from 'react'
import quantum from '../../assets/quantum.svg'
import Diagnostics from '../../assets/Diagnostics.svg'
import magnetically from '../../assets/magnetically.svg'
import '../styles/solution.css'

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

  return (
    <div className='solution-container'>
        <h1 ref={titleRef}>Solution</h1>
        <h2 ref={subtitleRef}>To assist muscles development in neuromuscular therapy, rehabilitation, and physical training</h2>
        <div className="items-container">
            <div 
              className="item-two"
              ref={el => itemsRef.current[0] = el}
            >
                <img src={quantum} alt="quantum" />
                <h3>Quantum gradiometer sensor</h3>
                <p>Precisely detects tiny variations in the magnetic field. <br />Monitoring weak neuromuscular currents</p>
            </div>
            <div 
              className="item-two"
              ref={el => itemsRef.current[1] = el}
            >
                <img src={Diagnostics} alt="Diagnostics" />
                <h3>Diagnostics</h3>
                <p>Dedicated algorithms and AI through smartphone and cloud computing</p>
            </div>
            <div 
              className="item-two"
              ref={el => itemsRef.current[2] = el}
            >
                <img src={magnetically} alt="magnetically" />
                <h3>Magnetically Shielded environment</h3>
                <p>No need</p>
            </div>
        </div>
    </div>
  )
}