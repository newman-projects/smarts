import React, { useEffect, useRef } from 'react';
import '../styles/uniqueness.css';

const Uniqueness = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="uniqueness-section" ref={sectionRef}>
      <div className="uniqueness-container">
        <h2 className="section-title animate-on-scroll">The Uniqueness</h2>
        <p className="section-intro animate-on-scroll">
          Performing wearable muscle monitoring in a smart way, with high sensitivity, 
          non-invasively and without a shielded chamber
        </p>
        
        <div className="uniqueness-grid">
          <div className="unique-card animate-on-scroll">
            <div className="card-number">01</div>
            <div className="card-icon">🎯</div>
            <h3 className="card-title">Unmatched Precision</h3>
            <p className="card-description">
              MuscleSen is accurate enough to monitor even the tiniest muscles and 
              sensitive enough to pick up on the weakest signals - something our 
              competitors do not have a solution for
            </p>
          </div>

          <div className="unique-card animate-on-scroll">
            <div className="card-number">02</div>
            <div className="card-icon">💎</div>
            <h3 className="card-title">Superior Technology</h3>
            <p className="card-description">
              High sensitivity muscle monitoring performed non-invasively without 
              requiring a shielded chamber, making it practical for everyday use
            </p>
          </div>

          <div className="unique-card animate-on-scroll">
            <div className="card-number">03</div>
            <div className="card-icon">💰</div>
            <h3 className="card-title">Exceptional Value</h3>
            <p className="card-description">
              The product's cost and cost-benefit ratio are significantly lower than 
              those of competitors, making advanced muscle monitoring accessible to everyone
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Uniqueness;