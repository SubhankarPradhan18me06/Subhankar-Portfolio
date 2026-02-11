const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-links">
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#experience">Experience</a>
                    <a href="#contact">Contact</a>
                </div>
                <p className="footer-copy">
                    © {year} <span className="gradient-text">Subhankar Pradhan</span>. Built with React & passion.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
