import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
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

        const elements = document.querySelectorAll('.contact-info, .contact-map, .footer-content');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title fade-in">Get in <span>Touch</span></h2>

                <div className="contact-grid">
                    <div className="contact-info fade-in">
                        <h3>Visit Our Studio</h3>
                        <p className="contact-desc">
                            Ready to transform your space? Contact us for a free consultation or visit our studio to explore materials and designs.
                        </p>

                        <ul className="contact-details">
                            <li>
                                <MapPin className="contact-icon" />
                                <div>
                                    <h4>Location</h4>
                                    <p>Gomati CHS Ltd, 401/D-2, Lok Gram,<br />Lokgram, Kalyan, Maharashtra 421306</p>
                                </div>
                            </li>
                            <li>
                                <Phone className="contact-icon" />
                                <div>
                                    <h4>Phone</h4>
                                    <p><a href="tel:+919920161633">099201 61633</a></p>
                                </div>
                            </li>
                            <li>
                                <Clock className="contact-icon" />
                                <div>
                                    <h4>Business Hours</h4>
                                    <p>Open daily, closes 9 PM</p>
                                </div>
                            </li>
                            <li>
                                <MapPin className="contact-icon" />
                                <div>
                                    <h4>Areas Served</h4>
                                    <p>Kalyan, Mulund West, and nearby areas</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="contact-map fade-in">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.2405898319693!2d73.1362804!3d19.2283344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795ca1ef0a693%3A0x6b772099eadd552a!2sLokgram%2C%20Kalyan%2C%20Maharashtra%20421306!5e0!3m2!1sen!2sin!4v1700940000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Map location of Supreme Interiors"
                        ></iframe>
                    </div>
                </div>
            </div>

            <footer className="footer bg-secondary fade-in">
                <div className="container footer-content">
                    <div className="footer-logo">Supreme Interiors</div>
                    <p className="footer-text">
                        © {new Date().getFullYear()} Supreme Interiors. All rights reserved. <br />
                        Premium Interior Design Services in Kalyan, Maharashtra.
                    </p>
                </div>
            </footer>
        </section>
    );
};

export default Contact;
