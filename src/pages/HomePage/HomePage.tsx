import { Link } from 'react-router-dom'
import './HomePage.css'

function HomePage() {
  const skills = [
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

  const metrics = [
    {
      value: '6.5+',
      label: 'Years in web development',
    },
    {
      value: '5+',
      label: 'Years with React.js',
    },
    {
      value: '3+',
      label: 'Years with Node.js',
    },
    {
      value: '10+',
      label: 'Projects delivered',
    },
  ]

  return (
    <main className="home-page">
      {/* Background decoration */}
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <section className="hero">
        {/* Availability */}
        <div className="availability">
          <span className="availability-dot" />
          <span>Open to Full-Stack Developer opportunities</span>
        </div>

        {/* Intro */}
        <div className="hero-content">
          <p className="eyebrow">
            React.js · Node.js · TypeScript
          </p>

          <h1>
            Full-Stack
            <span> Developer </span>
            building scalable web applications.
          </h1>

          <p className="hero-description">
            Hi, I'm <strong>Nishant Thakur</strong> — a Full-Stack
            Developer with 6.5+ years of experience in web development,
            specializing in React.js, JavaScript, TypeScript and Node.js.
            I build responsive, scalable and maintainable web applications
            with modern frontend, backend and cloud technologies.
          </p>

          {/* Skills */}
          <div className="skills">
            {skills.map((skill) => (
              <span className="skill-pill" key={skill}>
                {skill}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="page-actions">
            <Link className="primary-button" to="/projects">
              View my projects
              <span>↗</span>
            </Link>

            <Link className="secondary-button" to="/about">
              About me
            </Link>
          </div>
        </div>

        {/* Hero bottom */}
        <div className="hero-bottom">
          <div className="hero-statement">
            <span className="statement-line" />

            <div>
              <h2>
                From frontend interfaces
                <br />
                to backend services.
              </h2>

              <p>
                I work across the full application stack — developing
                React-based user interfaces, Node.js backend services,
                REST APIs, database integrations and cloud deployments.
              </p>
            </div>
          </div>

          {/* Metrics */}
          <div className="metrics">
            {metrics.map((metric, index) => (
              <div
                className="metric-card"
                key={metric.label}
                style={
                  {
                    '--animation-delay': `${index * 100}ms`,
                  } as React.CSSProperties
                }
              >
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage