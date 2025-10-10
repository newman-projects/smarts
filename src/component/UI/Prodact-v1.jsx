import React, { useEffect, useRef } from 'react'
import diagnosis from '../../assets/diagnosis.svg'
import sensitivity from '../../assets/sensitivity.svg'
import Prototype from '../../assets/Prototype.svg'
import Integrability from '../../assets/Integrability.svg'
import '../styles/prodact.css'

export default function ProdactV1() {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const leftSectionRef = useRef(null)
  const boxesRef = useRef([])

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
    boxesRef.current.forEach(box => {
      if (box) observer.observe(box)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const skillsData = [
    { 
			skill: "Unique Diagnosis", 
			img: diagnosis
		},
    { 
			skill: "Sensitivity", 
			img: sensitivity
		},
    { 
			skill: "LAB Prototype", 
			img: Prototype
		},
    { 
			skill: "Integrability", 
			img: Integrability
		},

  ]

  return (
    <section className="modern-product">
      <div className="product-container">
        <h1 ref={titleRef} className="modern-title">
          Product Overview
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
              Our advanced quantum gradiometer technology utilizes highly sensitive sensors to measure magnetic fields at picoTesla (pT) precision levels. 
            </p>
            <p className="section-description">
              MuscleSen is the smart bet. The future of muscle health starts here.
            </p>
            
            {/* Option 1: Accuracy/Precision Card */}
            {/* <div className="experience-card">
              <div className="experience-number">pT</div>
              <div className="experience-text">
                Precision<br />Sensitivity
              </div>
            </div> */}

            {/* Option 2: Technology Level Card */}
            {/* <div className="experience-card">
              <div className="experience-number">99.9%</div>
              <div className="experience-text">
                Diagnostic<br />Accuracy
              </div>
            </div> */}

            {/* Option 3: Innovation Card */}
            {/* <div className="experience-card">
              <div className="experience-number">1st</div>
              <div className="experience-text">
                Quantum<br />Innovation
              </div>
            </div> */}

            {/* Option 4: Real-time Processing */}
            {/* <div className="experience-card">
              <div className="experience-number">Real</div>
              <div className="experience-text">
                Time<br />Analysis
              </div>
            </div> */}
          </div>
          
          <div className="skills-grid">
            {skillsData.map((item, index) => (
              <div 
                key={index}
                className="skill-box"
                ref={el => boxesRef.current[index] = el}
              >
                <div className="skill-content">
									<img src={item.img} alt={item.skill} />
                  <div className="skill-name">{item.skill}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}