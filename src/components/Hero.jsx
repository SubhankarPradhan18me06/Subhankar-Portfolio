import { useEffect, useState, useRef } from 'react';
import { RESUME_DATA } from '../constants';
import profilePhoto from '../assets/Subhankar Image.jpg';

const ROLES = ['Full Stack Developer', 'React.js Specialist', 'Node.js Engineer', 'API Architect'];

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const currentRole = ROLES[roleIndex];

        const tick = () => {
            if (!isDeleting) {
                setDisplayText(currentRole.substring(0, displayText.length + 1));
                if (displayText.length + 1 === currentRole.length) {
                    timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
                    return;
                }
            } else {
                setDisplayText(currentRole.substring(0, displayText.length - 1));
                if (displayText.length - 1 === 0) {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % ROLES.length);
                    return;
                }
            }
        };

        timeoutRef.current = setTimeout(tick, isDeleting ? 50 : 100);
        return () => clearTimeout(timeoutRef.current);
    }, [displayText, isDeleting, roleIndex]);

    return (
        <section className="hero" id="hero">
            <div className="hero-bg">
                <div className="hero-bg-orb" />
                <div className="hero-bg-orb" />
                <div className="hero-bg-orb" />
                <div className="hero-grid" />
            </div>

            <div className="hero-content">
                <div className="hero-layout">
                    <div className="hero-text">
                        <div className="hero-badge">
                            <span className="hero-badge-dot" />
                            Available for opportunities
                        </div>

                        <h1 className="hero-name">
                            Hi, I'm{' '}
                            <span className="gradient-text">{RESUME_DATA.name}</span>
                        </h1>

                        <div className="hero-role-wrapper">
                            <span className="hero-role-typed">{displayText}</span>
                        </div>

                        <p className="hero-description">
                            {RESUME_DATA.summary[0]}
                        </p>

                        <div className="hero-actions">
                            <a href="#projects" className="btn-primary" onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                            }}>
                                View Projects ↓
                            </a>
                            <a href="#contact" className="btn-secondary" onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}>
                                Contact Me →
                            </a>
                        </div>
                    </div>

                    <div className="hero-photo-wrapper">
                        <div className="hero-photo-glow" />
                        <div className="hero-photo">
                            <img src={profilePhoto} alt="Subhankar Pradhan" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll" onClick={() =>
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }>
                <div className="hero-scroll-icon" />
                Scroll Down
            </div>
        </section>
    );
};

export default Hero;
