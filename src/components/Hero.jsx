import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="home" className="hero" ref={heroRef}>
            <div className="hero-overlay"></div>
            <div className="container hero-container">
                <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
                    <p className="hero-subtitle">Welcome to Supreme Interiors</p>
                    <h1 className="hero-title">
                        Transforming Spaces Into <span>Luxurious</span> Sanctuaries
                    </h1>
                    <p className="hero-description">
                        Premium interior design services in Kalyan. We bring your vision to life with
                        elegance, minimalism, and exceptional craftsmanship.
                    </p>
                    <div className="hero-cta">
                        <a href="#contact" className="btn">Get Free Consultation</a>
                        <a href="#services" className="btn btn-outline">Explore Services</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
