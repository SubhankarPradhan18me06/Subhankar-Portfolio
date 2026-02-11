import { RESUME_DATA } from '../constants';
import { useInView } from '../hooks/useInView';

const Skills = () => {
    const [ref, isInView] = useInView({ threshold: 0.1 });

    return (
        <section className="skills" id="skills" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <h2 className={`section-title ${isInView ? 'animate-in' : ''}`}>
                        Technical <span className="gradient-text">Skills</span>
                    </h2>
                    <p className={`section-subtitle ${isInView ? 'animate-in animate-in-delay-1' : ''}`}>
                        Technologies I work with every day
                    </p>
                </div>

                <div className="skills-grid">
                    {RESUME_DATA.skillCategories.map((cat, catIndex) => (
                        <div
                            key={cat.category}
                            className={`skill-category-card ${isInView ? `animate-in animate-in-delay-${catIndex + 1}` : ''}`}
                        >
                            <div className="skill-category-header">
                                <div className="skill-category-icon">{cat.icon}</div>
                                <h3 className="skill-category-name">{cat.category}</h3>
                            </div>

                            {cat.skills.map((skill) => (
                                <div className="skill-item" key={skill.name}>
                                    <div className="skill-info">
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-level">{skill.level}%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-bar-fill"
                                            style={{ width: isInView ? `${skill.level}%` : '0%' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
