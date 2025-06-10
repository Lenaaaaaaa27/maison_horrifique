import { Link } from 'react-router-dom';
import {useEffect, useState} from "react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-content">
                <Link to="/" className="navbar-brand">
                    La Maison Horrifique
                </Link>
                <div className="nav-links">
                    <Link to="/booking" className="nav-link">Réservation</Link>
                    <Link to="/sessions" className="nav-link">Sessions</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
