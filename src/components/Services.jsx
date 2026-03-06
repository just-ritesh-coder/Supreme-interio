import React, { useEffect, useRef } from 'react';
import './Services.css';

const servicesList = [
    {
        title: 'Modular Kitchen Interior',
        price: 'Starting ₹1,50,000',
        description: 'Transform your culinary space with our premium modular kitchen designs. Optimized for functionality and wrapped in luxury.',
        icon: '🍽️',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800'
    },
    {
        title: 'Living Room Interior',
        price: 'Starting ₹1,10,000',
        description: 'Create a stunning focal point for your home. We design living rooms that balance supreme comfort with elegant aesthetics.',
        icon: '🛋️',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800'
    },
    {
        title: 'Bedroom Interior',
        price: 'Custom Pricing',
        description: 'Turn your bedroom into a peaceful retreat. We focus on soothing color palettes, custom wardrobes, and perfect lighting.',
        icon: '🛏️',
        image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=800'
    },
    {
        title: 'Full Home Interior',
        price: 'Custom Pricing',
        description: 'A comprehensive design solution for your entire home. Cohesive themes, quality materials, and meticulous execution.',
        icon: '🏠',
        image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800'
    }
];

const Services = () => {
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

        const cards = document.querySelectorAll('.service-card');
        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="services" className="section bg-secondary" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title fade-in">Our <span>Services</span></h2>

                <div className="services-grid">
                    {servicesList.map((service, index) => (
                        <div
                            className="service-card fade-in"
                            key={index}
                            style={{ transitionDelay: `${index * 0.15}s` }}
                        >
                            <div className="service-image">
                                <img src={service.image} alt={service.title} />
                            </div>
                            <div className="service-content">
                                <div className="service-icon">{service.icon}</div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-desc">{service.description}</p>
                                <div className="service-price">{service.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
