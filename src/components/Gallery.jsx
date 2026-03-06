import React, { useEffect, useState } from 'react';
import ProjectModal from './ProjectModal';
import './Gallery.css';

const galleryProjects = [
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
        title: 'Modern Minimalist Kitchen',
        category: 'Modular Kitchen',
        description: 'A sleek, handleless modern kitchen design featuring matte charcoal cabinetry, a beautiful Calacatta gold marble island, and state-of-the-art integrated appliances.'
    },
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
        title: 'Scandinavian Living Space',
        category: 'Living Room',
        description: 'An open-concept living area maximizing natural light. Features wide-plank oak flooring, neutral tones, and bespoke functional furniture built for family living.'
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=1200',
        title: 'Serene Master Suite',
        category: 'Bedroom',
        description: 'A luxurious master bedroom designed as a tranquil retreat. Highlights include a custom fluted headboard, ambient cove lighting, and textured wall finish.'
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200',
        title: 'Classic White Kitchen',
        category: 'Modular Kitchen',
        description: 'Timeless Shaker-style white kitchen featuring a large central island, brass hardware accents, and high-end quartz countertops.'
    },
    {
        id: 5,
        src: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=1200',
        title: 'Urban Luxury Condo',
        category: 'Full Home Interior',
        description: 'A sophisticated take on city living. We used dark walnut veneers alongside brushed brass to create a moody yet warm and inviting atmosphere.'
    },
    {
        id: 6,
        src: 'https://images.unsplash.com/photo-1600573472591-eeeb47f7d1b3?auto=format&fit=crop&q=80&w=1200',
        title: 'Contemporary Dining Room',
        category: 'Dining Space',
        description: 'An elegant dining setup featuring a customized marble-top table, velvet upholstery chairs, and a striking contemporary chandelier.'
    },
    {
        id: 7,
        src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200',
        title: 'Warm Wood Living Area',
        category: 'Living Room',
        description: 'A cozy family living room emphasizing natural wood textures, plush seating, and custom built-in entertainment units.'
    },
    {
        id: 8,
        src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1200',
        title: 'Elegant Bathroom Retreat',
        category: 'Bathroom',
        description: 'Spa-like bathroom complete with a freestanding soaking tub, floating vanity, and large-format porcelain stone tiling.'
    },
    {
        id: 9,
        src: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=1200',
        title: 'Premium Studio Apartment',
        category: 'Full Home Interior',
        description: 'Space-saving full home interior demonstrating how to maintain high-end luxury in a smaller footprint using clever zoning and reflective surfaces.'
    }
];

const Gallery = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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

        const items = document.querySelectorAll('.gallery-item');
        items.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    const openProject = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
        // Prevent background scrolling when modal is open
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
        // Restore scrolling
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            <section id="gallery" className="section gallery-section">
                <div className="container">
                    <h2 className="section-title fade-in">Our <span>Portfolio</span></h2>
                    <p className="gallery-subtitle fade-in">A glimpse into some of our finest transformative designs.</p>

                    <div className="gallery-grid">
                        {galleryProjects.map((project, index) => (
                            <div
                                className="gallery-item fade-in"
                                key={project.id}
                                style={{ transitionDelay: `${(index % 3) * 0.15}s` }}
                                onClick={() => openProject(project)}
                            >
                                <img src={project.src} alt={project.title} loading="lazy" />
                                <div className="gallery-overlay">
                                    <span>View Project</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </>
    );
};

export default Gallery;
