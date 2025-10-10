import React, { useEffect, useRef } from 'react'
import '../styles/solution.css'
import quantum from '../../assets/quantum.svg'
import Diagnostics from '../../assets/Diagnostics.svg'
import magnetically from '../../assets/magnetically.svg'
// Import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

export default function SolutionV1() {
  const swiperRef = useRef(null)
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

  const solutionData = [
    {
      id: 1,
      image: quantum,
      title: "Quantum gradiometer sensor",
      description: "Precisely detects tiny variations in the magnetic field. Monitoring weak neuromuscular currents."
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
      description: "No shielded chamber required. Uses built-in adaptive shielding."
    }
  ]

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop()
    }
  }

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start()
    }
  }

  return (
    <div className='business-container'>
      <h1 ref={titleRef} className='business-title'>
        Our Solution
      </h1>
      <p ref={subtitleRef} className='solution-subtitle'>
        To assist muscles development in neuromuscular therapy, rehabilitation, and physical training<br />MuscleSen is not just another wearable. It is a leap forward in muscle and neuromuscular health tech.
        Do wearable muscle monitoring the smart, with high sensitively, non-invasive way and no shielded chamber.
        MuscleSen sets a new standard for muscle and neuromuscular health solutions.

      </p>
      <div className="solution-content">
        <div 
          className="slider-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={800}
            navigation={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="solution-swiper"
          >
            {solutionData.map((solution) => (
              <SwiperSlide key={solution.id}>
                <div className="solution">
                  <img 
                    src={solution.image} 
                    alt={solution.title} 
                    className="solution-image" 
                  />
                  <h3 className="solution-item-title">{solution.title}</h3>
                  <p className="solution-description">{solution.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}