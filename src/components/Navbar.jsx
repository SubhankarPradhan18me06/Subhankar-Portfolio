import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const { mode, toggleTheme } = useTheme();

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = ['contact', 'experience', 'projects', 'skills', 'about'];
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - 200) {
                    setActiveSection(id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleClick = (e, href) => {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-inner">
                <a
                    href="#"
                    className="navbar-logo"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                >
                    <span>SP</span>
                </a>

                <div className="navbar-right">
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
                        <a
                            key={link.href}
                            href={link.href}
                            className={activeSection === link.href.slice(1) ? 'active' : ''}
                            onClick={(e) => handleClick(e, link.href)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="navbar-cta"
                        onClick={(e) => handleClick(e, '#contact')}
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;