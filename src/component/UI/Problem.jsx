import React, { useEffect, useRef } from 'react'
import signal from '../../assets/signal.svg'
import continuity from '../../assets/continuity.svg'
import costs from '../../assets/costs.svg'
import dissatisfaction from '../../assets/dissatisfaction.svg'
import '../styles/problem.css'

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

  return (
    <div className='problem-container'>
        <h1 ref={titleRef}>Problem</h1>
        <h2 ref={subtitleRef}>Across therapeutic care, rehabilitation and athletic training</h2>
        <div className="items-container">
            <div 
              className="item-one" 
              ref={el => itemsRef.current[0] = el}
            >
                <img src={signal} alt="signal" />
                <h3>Signal Detection Gap</h3>
                <p>Inner and small muscles. <br />Muscle engagement</p>
            </div>
            <div 
              className="item-one"
              ref={el => itemsRef.current[1] = el}
            >
                <img src={continuity} alt="continuity" />
                <h3>Continuity gap</h3>
                <p>Setup complexity. Inconsistent initial conditions. Monitoring multiple muscles</p>
            </div>
            <div 
              className="item-one"
              ref={el => itemsRef.current[2] = el}
            >
                <img src={costs} alt="costs" />
                <h3>Costs</h3>
                <p>Quality EMG        Quality MMG <br />Hundreds $         Thousands $</p>
            </div>
            <div 
              className="item-one"
              ref={el => itemsRef.current[3] = el}
            >
                <img src={dissatisfaction} alt="dissatisfaction" />
                <h3>Customer dissatisfaction</h3>
                <p>EMG MMG<br />invasive, sweat. Environmental noise.<br />Inconvenience Not stable</p>
            </div>
        </div>
    </div>
  )
}


