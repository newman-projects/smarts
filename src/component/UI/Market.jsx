import React, { useEffect, useRef } from 'react';
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

  const customers = [
    'Clinics',
    'Physiotherapists',
    'Orthopedists',
    'Rehab Therapists',
    'Sports Centers',
    'Fitness Centers',
    'Athletes',
    'Home Patients'
  ];

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
                needing accurate feedback for faster recovery, safer training, and 
                stronger muscles.
              </p>
            </div>

            <div className="market-highlight">
              <h3 className="highlight-title">Market Advantage</h3>
              <p className="highlight-text">
                With lower cost, higher sensitivity, and wider usability, it addresses 
                a $3.5B muscle monitoring market, supporting rehabilitation, therapeutic 
                care, sports, and fitness.
              </p>
            </div>
          </div>

          <div className="market-right animate-on-scroll">
            <div className="market-stats">
              <div className="stat-value">$3.5B</div>
              <div className="stat-label">Market Opportunity</div>
              <div className="growth-badge">CAGR 14.5%</div>
            </div>

            <div className="customers-list">
              <h3 className="customers-title">Target Segments</h3>
              <div className="customer-tags">
                {customers.map((customer, index) => (
                  <span key={index} className="customer-tag">
                    {customer}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;