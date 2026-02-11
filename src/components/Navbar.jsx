import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import resume from '../assets/Subhankar_Pradhan_resume.docx';

const NAV_LINKS = [
    { label: 'About', to: '/about' },
    { label: 'Skills', to: '/skills' },
    { label: 'Projects', to: '/projects' },
    { label: 'Experience', to: '/experience' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { mode, toggleTheme } = useTheme();
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-inner">
                <Link to="/" className="navbar-logo">
                    <span>Subhankar Pradhan</span>
                </Link>

                <div className="navbar-right">
                    <div
                        className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span />
                        <span />
                        <span />
                    </div>
                </div>

                <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={location.pathname === link.to ? 'active' : ''}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className={`navbar-cta ${location.pathname === '/contact' ? 'active' : ''}`}
                        onClick={() => setMenuOpen(false)}
                    >
                        Contact
                    </Link>
                    <a
                        href={resume}
                        download="Subhankar_Pradhan_Resume.docx"
                        className="navbar-resume"
                        onClick={() => setMenuOpen(false)}
                    >
                        Resume ↓
                    </a>
                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        title={mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    >
                        <span className="theme-toggle-icon">
                            {mode === 'dark' ? '☀️' : '🌙'}
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;