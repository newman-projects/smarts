// OverView.jsx
import React, { useState, useRef } from 'react'
import '../styles/overview.css'
import continuity from '../../assets/continuity.svg'
import costs from '../../assets/costs.svg'
import diagnosis from '../../assets/diagnosis.svg'
import Diagnostics from '../../assets/Diagnostics.svg'
import dissatisfaction from '../../assets/dissatisfaction.svg'
import Integrability from '../../assets/Integrability.svg'
import magnetically from '../../assets/magnetically.svg'
import Prototype from '../../assets/Prototype.svg'
import quantum from '../../assets/quantum.svg'
import sensitivity from '../../assets/sensitivity.svg'
import signal from '../../assets/signal.svg'

const images = [
  { id: 1, title: "Continuity Gap", desc: 'Setup complexity. Inconsistent initial conditions. Monitoring multiple muscles', src: continuity, alt: 'continuity', name: 'Continuity' },
  { id: 2, title: "Costs", desc: 'Quality EMG Quality MMG - Hundreds $ vs Thousands $', src: costs, alt: 'costs', name: 'Costs' },
  { id: 3, title: "Unique Diagnosis", desc: 'Small and inner muscles, muscle engagement and neuromuscular junction', src: diagnosis, alt: 'diagnosis', name: 'Diagnosis' },
  { id: 4, title: "Diagnostics", desc: 'Dedicated algorithms and Edge AI through smartphone and AI cloud computing', src: Diagnostics, alt: 'diagnostics', name: 'Diagnostics' },
  { id: 5, title: "Customer dissatisfaction", desc: 'EMG MMG invasive, sweat. Environmental noise. Inconvenience Not stable', src: dissatisfaction, alt: 'dissatisfaction', name: 'Dissatisfaction' },
  { id: 6, title: "Integrability", desc: 'Employing a real-time sensor array integrated with cardiac and nervous system activity', src: Integrability, alt: 'integrability', name: 'Integrability' },
  { id: 7, title: "Magnetically Shielded", desc: 'No shielded chamber required. Uses built-in adaptive shielding.', src: magnetically, alt: 'magnetically', name: 'Magnetically' },
  { id: 8, title: "LAB Prototype", desc: 'Gradiometer sensor based on quantum physics principles', src: Prototype, alt: 'prototype', name: 'Prototype' },
  { id: 9, title: "Quantum gradiometer sensor", desc: 'Precisely detects tiny variations in the magnetic field. Monitoring weak neuromuscular currents', src: quantum, alt: 'quantum', name: 'Quantum' },
  { id: 10, title: "Sensitivity", desc: "Measure magnetic fields (pT) using a highly sensitive vector quantum gradiometer", src: sensitivity, alt: 'sensitivity', name: 'Sensitivity' },
  { id: 11, title: "Signal Detection Gap", desc: "Inner and small muscles. Muscle engagement", src: signal, alt: 'signal', name: 'Signal' },
]

export default function OverView() {
  const [selectedImage, setSelectedImage] = useState(null)
  const scrollRef = useRef(null)

  const openModal = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <>
      <div className={`infinite-scroll-container ${selectedImage ? 'blurred' : ''}`}>
        <div className="scroll-wrapper" ref={scrollRef}>
          <div className="scroll-content animate-scroll">
            {/* First set of images */}
            {images.map((image, index) => (
              <div 
                key={`first-${index}`} 
                className="image-card"
                onClick={() => openModal(image)}
              >
                <div className="card-content">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="image"
                  />
                  <h3 className="card-title-overview">{image.title}</h3>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {images.map((image, index) => (
              <div 
                key={`second-${index}`} 
                className="image-card"
                onClick={() => openModal(image)}
              >
                <div className="card-content">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="image"
                  />
                  <h3 className="card-title-overview">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="modal-image"
            />
            <h2 className="modal-title">{selectedImage.title}</h2>
            <p className="modal-description">{selectedImage.desc}</p>
          </div>
        </div>
      )}
    </>
  )
}