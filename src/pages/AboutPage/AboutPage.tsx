import './AboutPage.css'

function AboutPage() {
    const technologies = [
        'HTML5',
        'CSS3',
        'JavaScript',
        'TypeScript',
        'React.js',
        'Redux',
        'Context API',
        'Next.js',
        'Node.js',
        'Express.js',
        'NestJS',
        'REST APIs',
        'MongoDB',
        'PostgreSQL',
        'AWS',
        'Git',
    ]

    const strengths = [
        {
            number: '01',
            title: 'Frontend',
            description:
                'Building responsive and scalable interfaces with React, TypeScript and modern frontend patterns.',
        },
        {
            number: '02',
            title: 'Backend',
            description:
                'Designing APIs and backend services with Node.js, Express, NestJS and database-driven architectures.',
        },
        {
            number: '03',
            title: 'Architecture',
            description:
                'Working with authentication, microservices, API integrations, caching, queues and scalable application patterns.',
        },
    ]

    return (
        <main className="about-page">
            {/* Header */}
            <section className="about-hero">
                <div className="about-label">
                    <span />
                    About me
                </div>

                <h1>
                    I build software
                    <br />
                    <span>that solves problems.</span>
                </h1>

                <p className="about-intro">
                    I'm Nishant Thakur, a Full-Stack Developer with
                    6.5+ years of experience building modern web
                    applications. My primary focus is React and Node.js,
                    with experience across databases, APIs, cloud
                    infrastructure and application architecture.
                </p>
            </section>

            {/* Main content */}
            <section className="about-grid">
                {/* Story */}
                <article className="about-story">
                    <div className="section-number">01</div>

                    <div>
                        <h2>A little about me</h2>

                        <p>
                            I enjoy taking complex requirements and turning them
                            into simple, reliable software. Over the years I've
                            worked across both frontend and backend development,
                            which helps me understand a product from the user
                            interface all the way to the underlying systems.
                        </p>

                        <p>
                            My day-to-day work involves building React
                            applications, developing Node.js APIs, working with
                            MongoDB and PostgreSQL, integrating third-party
                            services, and improving application performance,
                            reliability and maintainability.
                        </p>

                        <p>
                            I'm particularly interested in clean architecture,
                            scalable systems, developer experience and solving
                            problems that have a meaningful impact on the product.
                        </p>
                    </div>
                </article>

                {/* Experience */}
                <aside className="experience-card">
                    <span className="card-label">Experience</span>

                    <strong>6.5+</strong>

                    <span className="experience-text">
                        years building
                        <br />
                        web applications
                    </span>

                    <div className="experience-divider" />

                    <div className="experience-row">
                        <span>Primary</span>
                        <span>React + Node.js</span>
                    </div>

                    <div className="experience-row">
                        <span>Databases</span>
                        <span>MongoDB + PostgreSQL</span>
                    </div>

                    <div className="experience-row">
                        <span>Cloud</span>
                        <span>AWS</span>
                    </div>
                </aside>
            </section>

            {/* What I do */}
            <section className="strengths-section">
                <div className="section-heading">
                    <div>
                        <p className="eyebrow">What I do</p>

                        <h2>
                            From interface
                            <br />
                            to infrastructure.
                        </h2>
                    </div>

                    <p>
                        I work across the stack, connecting user experience
                        with dependable backend systems and practical
                        engineering solutions.
                    </p>
                </div>

                <div className="strengths-grid">
                    {strengths.map((strength) => (
                        <article
                            className="strength-card"
                            key={strength.number}
                        >
                            <span className="strength-number">
                                {strength.number}
                            </span>

                            <div className="strength-content">
                                <h3>{strength.title}</h3>

                                <p>{strength.description}</p>
                            </div>

                            <span className="strength-arrow">↗</span>
                        </article>
                    ))}
                </div>
            </section>

            {/* Technology */}
            <section className="technology-section">
                <div className="technology-heading">
                    <p className="eyebrow">Technology</p>

                    <h2>Tools I work with.</h2>
                </div>

                <div className="technology-list">
                    {technologies.map((technology) => (
                        <div
                            className="technology-item"
                            key={technology}
                        >
                            <span className="tech-dot" />
                            {technology}
                        </div>
                    ))}
                </div>
            </section>

            {/* Closing */}
            <section className="about-closing">
                <span className="closing-line" />

                <div>
                    <p className="eyebrow">What's next</p>

                    <h2>
                        Always learning.
                        <br />
                        Always building.
                    </h2>

                    <p>
                        I'm open to opportunities where I can contribute to
                        meaningful products, work with strong engineering
                        teams and continue growing as a full-stack developer.
                    </p>
                </div>
            </section>
        </main>
    )
}

export default AboutPage