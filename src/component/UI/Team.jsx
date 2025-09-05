import React, { useEffect, useRef, useState } from 'react'
import shai from '../../assets/team/shai.jpg'
import eliran from '../../assets/team/eliran.jpg'
import yair from '../../assets/team/yair.png'
import vitali from '../../assets/team/vitali.png'
import '../styles/team.css'

export default function Team() {
	const titleRef = useRef(null)
	const subtitleRef = useRef(null)
	const itemsRef = useRef([])
	const [selectedMember, setSelectedMember] = useState(null)

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

	const TeamMembers = [
		{
			image: shai,
			name: "Shai Richter",
			title: "Co-founder, CEO",
			description: "Innovative product development leader with extensive experience in building successful tech companies and driving strategic vision."
		},
		{
			image: eliran,
			name: "Dr. Eliran Talker",
			title: "Chief Technical Officer",
			description: "Quantum Physics Expert with deep knowledge in advanced computational systems and cutting-edge technology development."
		},
		{
			image: yair,
			name: "Dr. Yair Richter",
			title: "VP R&D",
			description: "Algorithms and AI Expert specializing in machine learning, data science, and innovative research methodologies."
		},
		{
			image: vitali,
			name: "Dr. Vitali Kilimnik M.D",
			title: "Chief Medical Officer",
			description: "Orthopedic and surgical specialist bringing medical expertise and clinical insights to our innovative solutions."
		},
	]

	const openModal = (member) => {
		setSelectedMember(member)
		document.body.style.overflow = 'hidden'
	}

	const closeModal = () => {
		setSelectedMember(null)
		document.body.style.overflow = 'auto'
	}

	return (
		<section className="dark-container">
			<h1 ref={titleRef} className="dark-title">
				The Team
			</h1>
			<p ref={subtitleRef} className="dark-subtitle">
				Meet the brilliant minds behind our innovation, each bringing unique expertise and passion to drive our mission forward.
			</p>
			
			<div className="items-container">
				{TeamMembers.map((member, index) => (
					<div 
						key={index}
						ref={el => itemsRef.current[index] = el}
						className="team-card"
						onClick={() => openModal(member)}
					>
						<div className="team-card-inner">
							<div className="team-card-front">
								<img 
									src={member.image} 
									alt={member.name}
									className="team-member-image"
								/>
								<h3 className="team-member-name">{member.name}</h3>
							</div>
							<div className="team-card-back">
								<h3 className="team-member-title">{member.title}</h3>
								<p className="team-member-description">{member.description}</p>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Modal */}
			{selectedMember && (
				<div className="team-modal-overlay" onClick={closeModal}>
					<div className="team-modal" onClick={e => e.stopPropagation()}>
						<button className="team-modal-close" onClick={closeModal}>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
							</svg>
						</button>
						<div className="team-modal-content">
							<div className="team-modal-image">
								<img src={selectedMember.image} alt={selectedMember.name} />
							</div>
							<div className="team-modal-info">
								<h2 className="team-modal-name">{selectedMember.name}</h2>
								<h3 className="team-modal-title">{selectedMember.title}</h3>
								<p className="team-modal-description">{selectedMember.description}</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</section>
	)
}