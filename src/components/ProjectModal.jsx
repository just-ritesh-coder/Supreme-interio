import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import './ProjectModal.css';

const ProjectModal = ({ project, isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    if (!isOpen || !project) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send an API request
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', contact: '', message: '' });
            onClose();
        }, 3000);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Close modal">
                    <X size={28} />
                </button>

                <div className="modal-layout">
                    <div className="modal-image-container">
                        <img src={project.src} alt={project.title} className="modal-image" />
                    </div>

                    <div className="modal-sidebar">
                        <h2 className="modal-title">{project.title}</h2>
                        <p className="modal-category">{project.category}</p>
                        <p className="modal-description">{project.description}</p>

                        <div className="modal-inquiry">
                            <h3>Inquire About This Design</h3>
                            {isSubmitted ? (
                                <div className="success-message">
                                    Thank you! We will contact you shortly about this project.
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="inquiry-form">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="contact"
                                            placeholder="Phone or Email"
                                            value={formData.contact}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            name="message"
                                            placeholder="Hi, I'm interested in a design similar to this project..."
                                            rows="3"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-submit">
                                        Send Inquiry <Send size={16} />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
