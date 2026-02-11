import { RESUME_DATA } from '../constants';
import { useInView } from '../hooks/useInView';

const Contact = () => {
    const [ref, isInView] = useInView({ threshold: 0.2 });

    return (
        <section className="contact" id="contact" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <h2 className={`section-title ${isInView ? 'animate-in' : ''}`}>
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className={`section-subtitle ${isInView ? 'animate-in animate-in-delay-1' : ''}`}>
                        I'm open to new opportunities — let's connect!
                    </p>
                </div>

                <div className="contact-wrapper">
                    <div className="contact-cards">
                        <div className={`contact-card ${isInView ? 'animate-in animate-in-delay-2' : ''}`}>
                            <div className="contact-card-icon">✉️</div>
                            <div className="contact-card-label">Email</div>
                            <div className="contact-card-value">
                                <a href={`mailto:${RESUME_DATA.email}`}>{RESUME_DATA.email}</a>
                            </div>
                        </div>

                        <div className={`contact-card ${isInView ? 'animate-in animate-in-delay-3' : ''}`}>
                            <div className="contact-card-icon">📱</div>
                            <div className="contact-card-label">Phone</div>
                            <div className="contact-card-value">
                                <a href={`tel:${RESUME_DATA.phone}`}>{RESUME_DATA.phone}</a>
                            </div>
                        </div>
                    </div>

                    <div className={`certification-card ${isInView ? 'animate-in animate-in-delay-4' : ''}`}>
                        <div className="certification-badge">🏆</div>
                        <h3 className="certification-title">{RESUME_DATA.certification.title}</h3>
                        <p className="certification-institute">
                            {RESUME_DATA.certification.institute} • {RESUME_DATA.certification.year}
                        </p>
                        <p className="certification-credential">
                            Credential ID: {RESUME_DATA.certification.credentialId}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
