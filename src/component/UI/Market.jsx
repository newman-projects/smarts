import React, { useEffect, useRef } from 'react';
import MarketNurse from '../../assets/market-nurse.jpg';
import MarketWorkout from '../../assets/market-workout.png';
import MarketPhone from '../../assets/market-phone.png';
import '../styles/market.css';

const Market = () => {
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
    <section className="market-section" ref={sectionRef}>
      <div className="market-container">
        <h2 className="section-title animate-on-scroll">The Market</h2>
        <p className="section-intro animate-on-scroll">
          Muscle sensors (MMG) have incredible potential in neuromuscular therapy, 
          rehabilitation, and physical training
        </p>

        <div className="market-content">
          <div className="market-left animate-on-scroll">
            <div className="market-highlight">
              <h3 className="highlight-title">Our Customers</h3>
              <p className="highlight-text">
                Clinics, physiotherapists, orthopedists, rehabilitation therapists, 
                sports and fitness centers, athletes, and patients at home – anyone 
                needing accurate feedback <b>for faster recovery, safer training, and 
                stronger muscles</b>
              </p>
            </div>

            <div className="market-highlight">
              <h3 className="highlight-title">Market Advantage</h3>
              <p className="highlight-text">
                With lower cost, higher sensitivity, and wider usability, it addresses 
                a <b>$3.5B</b> muscle monitoring market, supporting rehabilitation, therapeutic 
                care, sports, and fitness <b>CAGR of 14.5%</b>
              </p>
            </div>
          </div>

          <div className="market-right animate-on-scroll">
            <div className="market-stats">
              <div className="image-container nurse-container">
                <img 
                  src={MarketWorkout}
                  alt="Healthcare Professional" 
                  className="market-image nurse-image"
                />
                <div className="image-overlay">
                  <div className="overlay-stat">$3.5B Market</div>
                  <div className="overlay-badge">CAGR 14.5%</div>
                </div>
              </div>
            </div>

            <div className="customers-list">
              <div className="images-grid">
                <div className="image-container workout-container">
                  <img 
                    src={MarketNurse}
                    alt="Workout Training" 
                    className="market-image workout-image"
                  />
                  <div className="image-label">Sports & Fitness</div>
                </div>
                <div className="image-container phone-container">
                  <img 
                    src={MarketPhone}
                    alt="Mobile Technology" 
                    className="market-image phone-image"
                  />
                  <div className="image-label">Smart Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;