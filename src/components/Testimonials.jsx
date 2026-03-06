import React, { useEffect } from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const reviews = [
    {
        name: 'Priya Sharma',
        text: "Good staff, good work, reasonable price. They transformed our modular kitchen completely within our budget.",
        rating: 5
    },
    {
        name: 'Rahul Desai',
        text: "Good quality of work and great value for money. The team was highly professional and delivered on time.",
        rating: 5
    },
    {
        name: 'Sneha Patil',
        text: "Work quality is very nice, impressive design. We absolutely love our newly designed living room. Highly recommended!",
        rating: 5
    }
];

const Testimonials = () => {
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

        const cards = document.querySelectorAll('.testimonial-card, .google-badge');
        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="testimonials" className="section bg-secondary">
            <div className="container">
                <h2 className="section-title fade-in">Client <span>Testimonials</span></h2>

                <div className="google-badge fade-in">
                    <div className="google-logo">
                        <span style={{ color: '#4285F4' }}>G</span>
                        <span style={{ color: '#EA4335' }}>o</span>
                        <span style={{ color: '#FBBC05' }}>o</span>
                        <span style={{ color: '#4285F4' }}>g</span>
                        <span style={{ color: '#34A853' }}>l</span>
                        <span style={{ color: '#EA4335' }}>e</span>
                        <span className="review-text">Reviews</span>
                    </div>
                    <div className="rating-score">
                        <span className="score-number">4.8</span>
                        <div className="stars">
                            <Star fill="#fbbc04" color="#fbbc04" size={20} />
                            <Star fill="#fbbc04" color="#fbbc04" size={20} />
                            <Star fill="#fbbc04" color="#fbbc04" size={20} />
                            <Star fill="#fbbc04" color="#fbbc04" size={20} />
                            <Star fill="#fbbc04" color="#fbbc04" size={20} />
                        </div>
                        <span className="review-count">(79 reviews)</span>
                    </div>
                </div>

                <div className="testimonials-grid">
                    {reviews.map((review, index) => (
                        <div
                            className="testimonial-card fade-in"
                            key={index}
                            style={{ transitionDelay: `${index * 0.15}s` }}
                        >
                            <div className="testimonial-stars">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} fill="#fbbc04" color="#fbbc04" size={16} />
                                ))}
                            </div>
                            <p className="testimonial-text">"{review.text}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{review.name.charAt(0)}</div>
                                <div className="author-info">
                                    <h4>{review.name}</h4>
                                    <span>Verified Client</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
