import { useState } from 'react';
import './CertificationsPage.css';

type Certification = {
    id: number;
    title: string;
    issuer: string;
    date: string;
    credential?: string;
    skills: string[];
    description: string;
    image: string;
};

const certifications: Certification[] = [
    {
        id: 1,
        title: 'Getting Started with Node.js',
        issuer: 'MongoDB',
        date: '28th Dec 2022',
        credential: '4048005',
        image: '/Certifications/Node.js_Certificate.jpg',
        skills: ['Node.js', 'JavaScript', 'npm', 'Backend'],
        description:
            'Certification covering the fundamentals of Node.js, including the Node.js runtime, modules, npm, asynchronous programming, file system operations, HTTP servers, and building backend applications with JavaScript.',
    },
    {
        id: 2,
        title: 'MongoDB for JavaScript Developers',
        issuer: 'MongoDB',
        date: '18th Oct 2022',
        credential: 'M220JS',
        image: '/Certifications/M220JS_proof_of_completion.jpg',
        skills: ['MongoDB', 'JavaScript', 'Node.js', 'Mongoose'],
        description:
            'Certification focused on using MongoDB with JavaScript applications, including CRUD operations, data modeling, querying, aggregation, schema design, and integrating MongoDB with Node.js-based applications.',
    },
];

function CertificationsPage() {
    const [selectedCertification, setSelectedCertification] =
        useState<Certification | null>(null);

    const closeModal = () => {
        setSelectedCertification(null);
    };

    return (
        <main className="certifications-page">
            {/* =========================
                HERO
            ========================= */}

            <section className="certifications-hero">
                <div className="certifications-label">
                    <span />
                    Certifications
                </div>

                <div className="certifications-heading">
                    <h1>
                        Continuous
                        <span> learning.</span>
                    </h1>

                    <p>
                        A collection of certifications and professional
                        learning milestones that complement my hands-on
                        experience in software development.
                    </p>
                </div>
            </section>

            {/* =========================
                CERTIFICATIONS
            ========================= */}

            <section className="certifications-section">
                <div className="certifications-section-header">
                    <span>01</span>
                    <p>Professional Credentials</p>
                </div>

                <div className="certifications-grid">
                    {certifications.map((certification) => (
                        <article
                            className="certification-card"
                            key={certification.id}
                            onClick={() =>
                                setSelectedCertification(certification)
                            }
                        >
                            <div className="certification-card-top">
                                <span className="certification-number">
                                    {String(certification.id).padStart(2, '0')}
                                </span>

                                <span className="certification-arrow">
                                    ↗
                                </span>
                            </div>

                            <div className="certificate-icon">
                                <svg
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <rect
                                        x="8"
                                        y="6"
                                        width="32"
                                        height="36"
                                        rx="3"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />

                                    <path
                                        d="M15 15H33"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />

                                    <path
                                        d="M15 21H29"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />

                                    <circle
                                        cx="24"
                                        cy="31"
                                        r="5"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />

                                    <path
                                        d="M21.5 35L20 42L24 39.5L28 42L26.5 35"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <div className="certification-content">
                                <span className="certification-issuer">
                                    {certification.issuer}
                                </span>

                                <h2>{certification.title}</h2>

                                <p>{certification.description}</p>
                            </div>

                            <div className="certification-footer">
                                <span>{certification.date}</span>

                                <div className="certification-skills">
                                    {certification.skills
                                        .slice(0, 2)
                                        .map((skill) => (
                                            <span key={skill}>
                                                {skill}
                                            </span>
                                        ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* =========================
                BOTTOM STATEMENT
            ========================= */}

            <section className="certifications-bottom">
                <span className="bottom-label">
                    02 / APPROACH
                </span>

                <h2>
                    Certifications support
                    <span> experience.</span>
                </h2>

                <p>
                    I focus on applying what I learn to real-world products,
                    scalable architectures, and maintainable software rather
                    than collecting credentials alone.
                </p>
            </section>

            {/* =========================
                CERTIFICATE MODAL
            ========================= */}

            {selectedCertification && (
                <div
                    className="certificate-modal-overlay"
                    onClick={closeModal}
                    role="presentation"
                >
                    <div
                        className="certificate-modal"
                        onClick={(event) => event.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                        aria-label={selectedCertification.title}
                    >
                        <button
                            className="certificate-modal-close"
                            onClick={closeModal}
                            aria-label="Close certificate preview"
                            type="button"
                        >
                            ×
                        </button>

                        <span className="modal-label">
                            CERTIFICATION
                        </span>

                        <h2>{selectedCertification.title}</h2>

                        {/* =========================
                            CERTIFICATE IMAGE
                        ========================= */}

                        <div
                            className="certificate-preview"
                            onContextMenu={(event) =>
                                event.preventDefault()
                            }
                        >
                            <img
                                src={selectedCertification.image}
                                alt={`${selectedCertification.title} certificate`}
                                draggable={false}
                                onDragStart={(event) =>
                                    event.preventDefault()
                                }
                                onContextMenu={(event) =>
                                    event.preventDefault()
                                }
                            />

                            <div className="certificate-protection">
                                <span>Certificate Preview</span>
                            </div>
                        </div>

                        {/* =========================
                            META
                        ========================= */}

                        <div className="modal-meta">
                            <div>
                                <span>ISSUER</span>

                                <strong>
                                    {selectedCertification.issuer}
                                </strong>
                            </div>

                            <div>
                                <span>DATE</span>

                                <strong>
                                    {selectedCertification.date}
                                </strong>
                            </div>

                            <div>
                                <span>CREDENTIAL</span>

                                <strong>
                                    {selectedCertification.credential ||
                                        'Available on request'}
                                </strong>
                            </div>
                        </div>

                        {/* =========================
                            DESCRIPTION
                        ========================= */}

                        <p className="modal-description">
                            {selectedCertification.description}
                        </p>

                        {/* =========================
                            SKILLS
                        ========================= */}

                        <div className="modal-skills">
                            {selectedCertification.skills.map((skill) => (
                                <span key={skill}>{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

export default CertificationsPage;