import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ isScrolled }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <div className="logo">
                    <a href="#home">Supreme Interiors</a>
                </div>

                {/* Desktop Nav */}
                <nav className="nav-desktop">
                    <ul className="nav-links">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Nav Toggle */}
                <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Menu */}
            <div className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>
                <ul className="nav-mobile-links">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} onClick={toggleMenu}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
