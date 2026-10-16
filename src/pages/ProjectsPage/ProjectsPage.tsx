import { Link } from 'react-router-dom'
import './ProjectsPage.css'

const projects = [
  {
    id: 'e-nursery',
    number: '01',
    name: 'E-Nursery',
    type: 'E-Commerce / Nursery Management',
    summary:
      'A full-stack nursery management and e-commerce platform for showcasing plants and products, managing customers, and supporting online purchasing workflows.',
    role: 'Full-Stack Developer',
    stack: ['React', 'Node.js', 'NestJS', 'DynamoDB'],
  },

  {
    id: 'sgi-connected',
    number: '02',
    name: 'SGI-Connected',
    type: 'IoT / Connected Web Application',
    summary:
      'An IoT management dashboard for smart industrial and commercial lighting systems. Developed the frontend architecture using React and Redux and integrated REST APIs while collaborating with backend and AWS teams.',
    role: 'Full-Stack Developer',
    stack: ['React', 'Redux', 'Node.js', 'REST APIs'],
  },

  {
    id: 'dasubhashitam',
    number: '03',
    name: 'Dasubhashitam',
    type: 'Telugu Audiobook & Digital Content Platform',
    summary:
      'A digital content and audiobook platform focused on Telugu literature, enabling users to discover, access, and listen to a wide range of Telugu audio content.',
    role: 'Full-Stack Developer',
    stack: ['Node.js', 'MongoDB', 'FlutterFlow'],
  },

  {
    id: 'futuretal',
    number: '04',
    name: 'FutureTal',
    type: 'Upskilling & Mentorship Platform',
    summary:
      'A web-based learning and mentorship platform supporting upskilling, access to learning resources, mentor interactions, and career development activities.',
    role: 'Front-End Developer',
    stack: ['React', 'Next.js'],
  },

  {
    id: 'upro-pen',
    number: '05',
    name: 'UPRO-Pen',
    type: 'B2B / Stationery Manufacturing Platform',
    summary:
      'A web platform for a global stationery manufacturer, supporting digital product presentation, business workflows, and customer engagement for stationery and writing products.',
    role: 'Front-End Developer',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },

  {
    id: 'kbt',
    number: '06',
    name: 'KBT (Printer Services)',
    type: 'Printer Services / Business Platform',
    summary:
      'A business-focused web application for printer and printing-related services, providing product and service information through a responsive digital platform.',
    role: 'Front-End Developer',
    stack: ['React', 'Java'],
  },

  {
    id: 'fsl',
    number: '07',
    name: 'FSL',
    type: 'Cloud-Based File Storage & Asset Management',
    summary:
      'A cloud-based file storage and digital asset management application for organizing, managing, and accessing business files and digital assets through a centralized platform.',
    role: 'Front-End Developer',
    stack: ['Angular', 'Node.js'],
  },

  {
    id: 'e-proctoring',
    number: '08',
    name: 'ExamHall e-Proctoring',
    type: 'Online Examination & Remote Proctoring',
    summary:
      'An online examination and e-proctoring solution supporting remote assessments, examination workflows, candidate monitoring, and digital evaluation.',
    role: 'Front-End Developer',
    stack: ['React', 'Node.js', 'REST APIs'],
  },

  {
    id: 'nanobi',
    number: '09',
    name: 'Nanobi',
    type: 'Big Data Analytics & Business Intelligence',
    summary:
      'A cloud-based analytics and business intelligence platform that helps organizations work with data, generate insights, and support data-driven decision-making.',
    role: 'Front-End Developer',
    stack: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
  },
];

function ProjectsPage() {
  return (
    <main className="projects-page">
      {/* Header */}
      <section className="projects-hero">
        <div className="projects-label">
          <span />
          Selected work
        </div>

        <h1>
          Things I've
          <br />
          <span>built & shipped.</span>
        </h1>

        <p>
          A selection of projects where I've worked across
          frontend, backend and application architecture to turn
          ideas into working products.
        </p>
      </section>

      {/* Projects */}
      <section className="project-list">
        {projects.map((project) => (
          <Link
            className="project-card"
            key={project.id}
            to={`/projects/${project.id}`}
          >
            {/* Project top */}
            <div className="project-top">
              <span className="project-number">
                {project.number}
              </span>

              <span className="project-type">
                {project.type}
              </span>

              <span className="project-arrow">
                ↗
              </span>
            </div>

            {/* Project content */}
            <div className="project-content">
              <h2>{project.name}</h2>

              <p>{project.summary}</p>
            </div>

            {/* Project bottom */}
            <div className="project-bottom">
              <div className="project-role">
                <span>Role</span>
                <strong>{project.role}</strong>
              </div>

              <div className="project-stack">
                {project.stack.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="projects-footer">
        <p className="eyebrow">More to come</p>

        <h2>
          Always building.
          <br />
          Always improving.
        </h2>

        <p>
          More projects and technical case studies will be added
          as I continue building and exploring new technologies.
        </p>
      </section>
    </main>
  )
}

export default ProjectsPage