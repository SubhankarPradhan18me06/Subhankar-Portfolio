import { RESUME_DATA } from '../constants';
import { useInView } from '../hooks/useInView';

const Experience = () => {
    const [ref, isInView] = useInView({ threshold: 0.2 });

    return (
        <section className="experience" id="experience" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <h2 className={`section-title ${isInView ? 'animate-in' : ''}`}>
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <p className={`section-subtitle ${isInView ? 'animate-in animate-in-delay-1' : ''}`}>
                        My professional journey so far
                    </p>
                </div>

                <div className="experience-timeline">
                    {RESUME_DATA.experience.map((exp, i) => (
                        <div
                            key={i}
                            className={`experience-item ${isInView ? `animate-in animate-in-delay-${i + 2}` : ''}`}
                        >
                            <div className="experience-dot" />
                            <div className="experience-card">
                                <div className="experience-period">{exp.period}</div>
                                <h3 className="experience-role">{exp.role}</h3>
                                <p className="experience-company">{exp.company}</p>
                                <p className="experience-location">📍 {exp.location}</p>
                                <ul className="experience-highlights">
                                    {exp.highlights.map((h, hi) => (
                                        <li key={hi}>{h}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}

                    {/* Education */}
                    <div className={`experience-item ${isInView ? 'animate-in animate-in-delay-4' : ''}`}>
                        <div className="experience-dot" style={{ background: 'var(--accent-purple)' }} />
                        <div className="education-card">
                            <div className="experience-period">{RESUME_DATA.education.period}</div>
                            <h3 className="education-degree">🎓 {RESUME_DATA.education.degree}</h3>
                            <p className="education-institution">{RESUME_DATA.education.institution}</p>
                            <p className="education-location">📍 {RESUME_DATA.education.location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
