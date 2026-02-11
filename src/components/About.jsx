import { RESUME_DATA } from '../constants';
import { useInView } from '../hooks/useInView';

const About = () => {
    const [ref, isInView] = useInView({ threshold: 0.2 });

    return (
        <section className="about" id="about" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <h2 className={`section-title ${isInView ? 'animate-in' : ''}`}>
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className={`section-subtitle ${isInView ? 'animate-in animate-in-delay-1' : ''}`}>
                        Passionate about building scalable solutions
                    </p>
                </div>

                <div className="about-grid">
                    <div className={`about-text ${isInView ? 'animate-in animate-in-delay-2' : ''}`}>
                        {RESUME_DATA.summary.map((text, i) => (
                            <p key={i}>{text}</p>
                        ))}
                    </div>

                    <div className="about-highlights">
                        {RESUME_DATA.highlights.map((item, i) => (
                            <div
                                className={`about-highlight-card ${isInView ? `animate-in animate-in-delay-${i + 2}` : ''}`}
                                key={item.label}
                            >
                                <div className="about-highlight-icon">{item.icon}</div>
                                <div className="about-highlight-value">{item.value}</div>
                                <div className="about-highlight-label">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
