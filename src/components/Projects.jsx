import { useState } from 'react';
import { RESUME_DATA } from '../constants';
import { useInView } from '../hooks/useInView';

const Projects = () => {
    const [expandedId, setExpandedId] = useState(null);
    const [ref, isInView] = useInView({ threshold: 0.1 });

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section className="projects" id="projects" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <h2 className={`section-title ${isInView ? 'animate-in' : ''}`}>
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className={`section-subtitle ${isInView ? 'animate-in animate-in-delay-1' : ''}`}>
                        Real-world applications I've built and shipped
                    </p>
                </div>

                <div className="projects-grid">
                    {RESUME_DATA.projects.map((project, i) => (
                        <div
                            key={project.id}
                            className={`project-card ${isInView ? `animate-in animate-in-delay-${i + 1}` : ''}`}
                            style={{ '--card-color': project.color }}
                            onClick={() => toggleExpand(project.id)}
                        >
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '3px',
                                background: project.color,
                                borderRadius: '20px 20px 0 0'
                            }} />

                            <div className="project-card-header">
                                <span className="project-number" style={{ color: project.color }}>
                                    0{project.id}
                                </span>
                                <span className="project-domain">{project.domain}</span>
                            </div>

                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-subtitle">{project.subtitle}</p>

                            <div className="project-meta">
                                <span className="project-meta-item">
                                    👥 Team of {project.teamSize}
                                </span>
                            </div>

                            <p className="project-description">{project.description}</p>

                            <div className="project-tech">
                                {project.tech.map((t) => (
                                    <span className="project-tech-pill" key={t}>{t}</span>
                                ))}
                            </div>

                            <button
                                className="project-expand-btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleExpand(project.id);
                                }}
                            >
                                {expandedId === project.id ? 'Hide Details' : 'View Contributions'}
                                <span className={`arrow ${expandedId === project.id ? 'rotated' : ''}`}>▾</span>
                            </button>

                            <ul className={`project-contributions ${expandedId === project.id ? 'expanded' : ''}`}>
                                {project.contributions.map((c, ci) => (
                                    <li key={ci}>{c}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
