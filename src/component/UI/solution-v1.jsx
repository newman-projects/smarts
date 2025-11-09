import React, { useEffect, useRef, useState } from 'react';
import quantum from '../../assets/quantum.svg';
import Diagnostics from '../../assets/Diagnostics.svg';
import magnetically from '../../assets/magnetically.svg';
import diagnosis from '../../assets/diagnosis.svg'
import logo from '../../assets/chip-logo.png';
import '../styles/solution.css';

export default function SolutionV1() {
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const circleContainerRef = useRef(null);

  const solutionData = [
    {
      id: 1,
      image: quantum,
      title: "Quantum gradiometer sensor",
      description: "Precisely detects tiny variations in the magnetic field. Monitoring weak neuromuscular currents"
    },
    {
      id: 2,
      image: Diagnostics,
      title: "Diagnostics",
      description: "Dedicated algorithms and Edge AI through smartphone and AI cloud computing"
    },
    {
      id: 3,
      image: magnetically,
      title: "Magnetically Shielded environment",
      description: "No shielded chamber required. Uses built-in adaptive shielding"
    },
    { 
      id: 4, 
      image: diagnosis, 
      title: "Unique Diagnosis",
      description: 'Small and inner muscles, muscle engagement and neuromuscular junction', 
    },
    
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            if (entry.target === circleContainerRef.current && !isAnimated) {
              setIsAnimated(true);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (circleContainerRef.current) observer.observe(circleContainerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isAnimated]);

  const handleItemClick = (solution) => {
    setSelectedSolution(solution);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedSolution(null);
    document.body.style.overflow = 'auto';
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      handleCloseModal();
    }
  };

  return (
    <div className='business-container'>
      <div className="solution-content-wrapper">
        {/* Left side content */}
        <div className="solution-text-content">
          <h1 ref={titleRef} className='business-title'>
            Our Solution
          </h1>
          <p ref={subtitleRef} className='solution-subtitle'>
            To assist muscles development in neuromuscular therapy, rehabilitation, and physical training
          </p>
          <p className="solution-text-item">
            MuscleSen is not just another wearable. It is a leap forward in muscle and neuromuscular health tech
          </p>
          <p className="solution-text-item">
            Doing wearable muscle monitoring the smart, with high sensitivity, non-invasive way and no shielded chamber
          </p>
          <p className="solution-text-item solution-text-handwriting">
            MuscleSen sets a new standard for muscle and neuromuscular health solutions
          </p>
        </div>

        {/* Right side circle */}
        <div ref={circleContainerRef} className="circle-container">
          {/* Center Logo */}
          <img src={logo} alt="MuscleSen Logo" className='center-logo' />

          {/* Circle Items */}
          {solutionData.map((solution, index) => {
            const angle = (index * 360) / solutionData.length - 90;
            const radius = 280; // Increased radius to avoid touching logo
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            
            // Starting position (top)
            const startAngle = -90;
            const startX = Math.cos((startAngle * Math.PI) / 180) * radius;
            const startY = Math.sin((startAngle * Math.PI) / 180) * radius;
            
            // Calculate the rotation angle to travel clockwise
            let rotationAngle = angle - startAngle;
            if (index === 0) {
              rotationAngle = 360;
            } else {
              rotationAngle = rotationAngle < 0 ? rotationAngle + 360 : rotationAngle;
            }

            return (
              <div
                key={solution.id}
                className={`circle-item ${isAnimated ? 'animate-to-position' : ''}`}
                style={{
                  '--start-x': `${startX}px`,
                  '--start-y': `${startY}px`,
                  '--target-x': `${x}px`,
                  '--target-y': `${y}px`,
                  '--delay': `${index * 0.4}s`,
                  '--rotation-angle': `${rotationAngle}deg`,
                  '--radius': `${radius}px`
                }}
                onClick={() => handleItemClick(solution)}
              >
                <div className="circle-item-icon">
                  <img src={solution.image} alt={solution.title} />
                </div>
                <h3 className="circle-item-title">{solution.title}</h3>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedSolution && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <button className="modal-close" onClick={handleCloseModal}>
              ×
            </button>
            <div className="solution-modal">
              <img 
                src={selectedSolution.image} 
                alt={selectedSolution.title} 
                className="solution-image" 
              />
              <h3 className="solution-item-title">{selectedSolution.title}</h3>
              <p className="solution-description">{selectedSolution.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}