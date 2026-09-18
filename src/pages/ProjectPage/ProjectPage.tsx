import { Fragment } from 'react'
import { Link, useParams } from 'react-router-dom'
import './ProjectPage.css'

type ProjectData = {
  title: string
  category: string
  description: string
  role: string
  duration: string
  stack: string[]
  overview: string
  problem: string
  solution: string
  contribution: string[]
  features: string[]
  challenges: string[]
  architecture: string
  architectureFlow: string[]
  outcome: string
}

const projects: Record<string, ProjectData> = {
  'e-nursery': {
    title: 'E-Nursery',
    category: 'E-Commerce / Nursery Management',
    description:
      'A full-stack nursery management and e-commerce platform for showcasing plants and products, managing customers, and supporting online purchasing workflows.',
    role: 'Full-Stack Developer',
    duration: 'Project',
    stack: ['React', 'Node.js', 'NestJS', 'DynamoDB'],

    overview:
      'E-Nursery is a full-stack web application designed to combine nursery management capabilities with an online shopping experience. The platform provides a centralized interface for managing plants and products while supporting customer interactions and purchasing workflows.',

    problem:
      'Managing nursery products, customer information, and purchasing workflows through disconnected systems can make it difficult to maintain product information and provide a consistent customer experience.',

    solution:
      'I contributed to building a centralized web application that brings product presentation, customer workflows, and nursery management capabilities together through a responsive frontend and backend APIs.',

    contribution: [
      'Developed reusable React components and responsive user interfaces',
      'Implemented frontend business workflows and API integration',
      'Developed backend APIs using Node.js and NestJS',
      'Implemented database operations using DynamoDB',
      'Handled application loading, error, and empty states',
      'Integrated frontend and backend services',
    ],

    features: [
      'Plant and product management',
      'Product browsing and presentation',
      'Customer management workflows',
      'Online purchasing workflows',
      'REST API integration',
      'Responsive user interface',
    ],

    challenges: [
      'Managing frontend and backend responsibilities across different application workflows',
      'Keeping API integration consistent across the application',
      'Handling asynchronous operations and application states',
      'Designing reusable components for different product and management screens',
    ],

    architecture:
      'The application follows a client-server architecture. React provides the frontend interface, while Node.js and NestJS handle backend APIs and business logic. DynamoDB is used for persistent data storage.',

    architectureFlow: [
      'React',
      'REST API',
      'Node.js + NestJS',
      'DynamoDB',
    ],

    outcome:
      'The result is a full-stack platform that brings nursery management and e-commerce workflows into a centralized and maintainable application.',
  },

  'sgi-connected': {
    title: 'SGI-Connected',
    category: 'IoT / Connected Web Application',
    description:
      'An IoT management dashboard for smart industrial and commercial lighting systems, providing a web interface for monitoring and managing connected lighting environments.',

    role: 'Full-Stack Developer',
    duration: 'Project',
    stack: ['React', 'Redux', 'Node.js', 'REST APIs'],

    overview:
      'SGI-Connected is a connected web application focused on managing smart industrial and commercial lighting systems. The application provides users with a centralized dashboard for interacting with connected lighting environments.',

    problem:
      'Managing connected lighting devices and their operational data requires a centralized interface that can handle dynamic application state and communicate reliably with backend services.',

    solution:
      'I developed React-based interfaces and the frontend state-management architecture using Redux, integrated REST APIs, and worked closely with backend and AWS teams to connect the web application with the underlying services.',

    contribution: [
      'Developed responsive React-based application interfaces',
      'Designed and implemented Redux state management',
      'Integrated REST APIs with frontend workflows',
      'Implemented reusable React components',
      'Handled asynchronous API states and application errors',
      'Collaborated with backend and AWS teams',
    ],

    features: [
      'IoT management dashboard',
      'Connected lighting management',
      'Redux-based state management',
      'REST API integration',
      'Dynamic data handling',
      'Responsive dashboard interface',
    ],

    challenges: [
      'Managing complex application state across multiple dashboard components',
      'Handling frequently changing data and UI state',
      'Keeping Redux state predictable and maintainable',
      'Coordinating frontend integration with backend and AWS services',
    ],

    architecture:
      'The application uses React for the frontend with Redux for centralized state management. REST APIs provide communication between the frontend and backend services, with AWS services supporting the connected application ecosystem.',

    architectureFlow: [
      'React',
      'Redux',
      'REST API',
      'Node.js',
      'AWS Services',
    ],

    outcome:
      'The application provides a centralized web interface for managing connected lighting systems with a structured frontend architecture and predictable state management.',
  },

  dasubhashitam: {
    title: 'Dasubhashitam',
    category: 'Telugu Audiobook & Digital Content Platform',
    description:
      'A digital content and audiobook platform focused on Telugu literature, enabling users to discover, access, and listen to Telugu audio content.',

    role: 'Full-Stack Developer',
    duration: 'Project',
    stack: ['Node.js', 'MongoDB', 'FlutterFlow'],

    overview:
      'Dasubhashitam is a digital content platform focused on Telugu literature and audio content. The platform enables users to explore and access a wide range of Telugu audiobooks and digital content.',

    problem:
      'Traditional access to regional-language literature and audio content can be fragmented, making it difficult for users to discover and consume content through a single digital platform.',

    solution:
      'I contributed to developing the backend and application workflows required to manage digital content and provide users with an accessible platform for discovering and consuming Telugu audio content.',

    contribution: [
      'Developed backend functionality using Node.js',
      'Designed and implemented MongoDB data models',
      'Developed API endpoints for application workflows',
      'Integrated backend APIs with the application interface',
      'Worked with FlutterFlow for application development',
      'Handled data management and API-driven workflows',
    ],

    features: [
      'Telugu audiobook catalog',
      'Digital content discovery',
      'Audio content access',
      'Content management workflows',
      'MongoDB-based data management',
      'API-driven application architecture',
    ],

    challenges: [
      'Designing data structures for different types of digital content',
      'Managing content-related API workflows',
      'Maintaining consistency between application and backend data',
      'Handling dynamic content retrieval efficiently',
    ],

    architecture:
      'The application uses Node.js for backend services and MongoDB for persistent data storage. FlutterFlow is used for application development and communicates with backend APIs for content and data workflows.',

    architectureFlow: [
      'FlutterFlow',
      'REST API',
      'Node.js',
      'MongoDB',
    ],

    outcome:
      'The platform provides a centralized digital experience for discovering and consuming Telugu literature and audiobook content.',
  },

  futuretal: {
    title: 'FutureTal',
    category: 'Upskilling & Mentorship Platform',
    description:
      'A web-based platform designed to support upskilling, learning, mentorship, and career development through digital learning experiences.',

    role: 'Front-End Developer',
    duration: 'Project',
    stack: ['React', 'Next.js'],

    overview:
      'FutureTal is an upskilling and mentorship platform designed to connect users with learning resources, mentors, and career development opportunities through a modern web interface.',

    problem:
      'Learners often need a structured way to discover learning resources, interact with mentors, and manage their career-development journey from a single platform.',

    solution:
      'I developed frontend interfaces using React and Next.js, focusing on reusable components, responsive layouts, user interactions, and seamless navigation across different platform workflows.',

    contribution: [
      'Developed responsive React and Next.js interfaces',
      'Created reusable UI components',
      'Implemented page layouts and user workflows',
      'Integrated frontend screens with application APIs',
      'Handled form interactions and validation',
      'Optimized UI for different screen sizes',
    ],

    features: [
      'Learning resource discovery',
      'Mentorship workflows',
      'Career development content',
      'Responsive web interface',
      'Reusable component architecture',
      'API-driven frontend workflows',
    ],

    challenges: [
      'Building reusable components across different platform sections',
      'Maintaining consistent UI patterns',
      'Handling responsive layouts across devices',
      'Managing navigation and frontend application workflows',
    ],

    architecture:
      'The frontend is built using React and Next.js, following a component-based architecture to provide reusable UI elements and structured application pages.',

    architectureFlow: [
      'Next.js',
      'React',
      'API Integration',
    ],

    outcome:
      'The platform delivers a responsive digital experience for users exploring learning, mentorship, and career-development opportunities.',
  },

  'upro-pen': {
    title: 'UPRO-Pen',
    category: 'B2B / Stationery Manufacturing Platform',
    description:
      'A web platform developed for a global stationery manufacturer to digitally present products and support business and customer engagement workflows.',

    role: 'Front-End Developer',
    duration: 'Project',
    stack: ['HTML', 'CSS', 'JavaScript'],

    overview:
      'UPRO-Pen is a business-oriented web platform for a global stationery and writing-products manufacturer. The website focuses on presenting product information and supporting digital engagement with customers and business users.',

    problem:
      'A global product manufacturer needs a clear digital presence to present its product portfolio and communicate product information effectively to customers and business stakeholders.',

    solution:
      'I developed frontend interfaces using HTML, CSS, and JavaScript, focusing on responsive layouts, product presentation, navigation, and interactive website elements.',

    contribution: [
      'Developed responsive frontend pages',
      'Implemented product-focused UI components',
      'Created interactive website functionality using JavaScript',
      'Implemented responsive layouts using HTML and CSS',
      'Worked on cross-browser compatible interfaces',
      'Improved consistency across website pages',
    ],

    features: [
      'Product presentation',
      'Responsive website design',
      'Interactive UI elements',
      'Business-focused content presentation',
      'Cross-device compatibility',
      'Structured navigation',
    ],

    challenges: [
      'Creating responsive layouts for different screen sizes',
      'Maintaining consistent UI patterns across multiple pages',
      'Presenting product information in a clear structure',
      'Implementing interactive elements without compromising usability',
    ],

    architecture:
      'The website uses a traditional frontend architecture based on HTML, CSS, and JavaScript, with reusable UI patterns and responsive layouts for different devices.',

    architectureFlow: [
      'HTML',
      'CSS',
      'JavaScript',
      'Browser',
    ],

    outcome:
      'The platform provides a professional digital presence for presenting stationery products and supporting customer and business engagement.',
  },

  kbt: {
    title: 'KBT (Printer Services)',
    category: 'Printer Services / Business Platform',
    description:
      'A business-focused web application for printer and printing-related services, providing users with product and service information through a responsive digital platform.',

    role: 'Front-End Developer',
    duration: 'Project',
    stack: ['React', 'Java'],

    overview:
      'KBT is a business web application focused on printer and printing-related products and services. The platform provides users with information about available products and services through a responsive web interface.',

    problem:
      'Customers need an accessible digital platform to understand available printer products and services and navigate relevant business information easily.',

    solution:
      'I developed the frontend using React and integrated application workflows with backend services, focusing on responsive UI, reusable components, and clear presentation of product and service information.',

    contribution: [
      'Developed React-based frontend interfaces',
      'Created reusable UI components',
      'Integrated frontend with backend services',
      'Implemented responsive layouts',
      'Handled API-driven application workflows',
      'Worked on UI improvements and bug fixes',
    ],

    features: [
      'Printer product information',
      'Printing service information',
      'Responsive web interface',
      'Reusable React components',
      'Backend integration',
      'Structured business content',
    ],

    challenges: [
      'Maintaining reusable components across different pages',
      'Integrating frontend workflows with backend services',
      'Building responsive layouts',
      'Keeping product and service information easy to navigate',
    ],

    architecture:
      'The application uses React for the frontend and integrates with backend services developed using Java. The frontend follows a component-based architecture for reusable and maintainable UI development.',

    architectureFlow: [
      'React',
      'REST API',
      'Java Backend',
      'Database',
    ],

    outcome:
      'The platform provides a responsive digital interface for presenting printer-related products and services to customers and business users.',
  },

  fsl: {
    title: 'FSL',
    category: 'Cloud-Based File Storage & Asset Management',
    description:
      'A cloud-based file storage and digital asset management application for organizing, managing, and accessing business files and digital assets through a centralized platform.',

    role: 'Front-End Developer',
    duration: 'Project',
    stack: ['Angular', 'Node.js'],

    overview:
      'FSL is a cloud-based file storage and digital asset management application designed to provide users with a centralized environment for managing business files and digital assets.',

    problem:
      'Managing a large number of business files and digital assets across different locations can make it difficult to organize, locate, and access the required information efficiently.',

    solution:
      'I contributed to the frontend development of a centralized asset-management interface using Angular and integrated it with Node.js backend services for file and data operations.',

    contribution: [
      'Developed Angular-based frontend interfaces',
      'Created reusable components and application views',
      'Integrated frontend with Node.js APIs',
      'Implemented file and asset management workflows',
      'Handled loading, error, and empty states',
      'Worked on UI improvements and application usability',
    ],

    features: [
      'Cloud-based file management',
      'Digital asset organization',
      'File and folder workflows',
      'Backend API integration',
      'Centralized asset access',
      'Responsive user interface',
    ],

    challenges: [
      'Handling file and asset management workflows',
      'Managing asynchronous API operations',
      'Maintaining consistent application state',
      'Designing a user-friendly interface for large amounts of content',
    ],

    architecture:
      'The frontend is developed using Angular and communicates with Node.js backend services through APIs. The architecture separates presentation, application logic, API communication, and data management responsibilities.',

    architectureFlow: [
      'Angular',
      'REST API',
      'Node.js',
      'File / Data Storage',
    ],

    outcome:
      'The application provides a centralized interface for organizing and accessing business files and digital assets.',
  },

  'e-proctoring': {
    title: 'ExamHall e-Proctoring',
    category: 'Online Examination & Remote Proctoring',
    description:
      'An online examination and e-proctoring solution supporting remote assessments, examination workflows, candidate monitoring, and digital evaluation.',

    role: 'Front-End Developer',
    duration: 'Project',
    stack: ['React', 'Node.js', 'REST APIs'],

    overview:
      'ExamHall e-Proctoring is an online assessment platform designed to support remote examinations and digital assessment workflows. The application provides interfaces for examination management, candidate workflows, and remote assessment processes.',

    problem:
      'Remote examinations require a structured digital workflow for candidates, assessments, examination management, and monitoring while maintaining a consistent user experience.',

    solution:
      'I contributed to the frontend development using React, implementing examination-related interfaces and integrating them with Node.js REST APIs to support different assessment workflows.',

    contribution: [
      'Developed React-based examination interfaces',
      'Created reusable frontend components',
      'Integrated REST APIs with examination workflows',
      'Implemented form and assessment interactions',
      'Handled loading, validation, and error states',
      'Worked on responsive and user-friendly interfaces',
    ],

    features: [
      'Online examination workflows',
      'Remote assessment interface',
      'Candidate examination screens',
      'REST API integration',
      'Digital evaluation workflows',
      'Responsive frontend interface',
    ],

    challenges: [
      'Handling multiple examination states and workflows',
      'Maintaining a consistent user experience during assessments',
      'Managing API communication and error scenarios',
      'Building reliable interfaces for time-sensitive examination workflows',
    ],

    architecture:
      'The application uses React for the frontend and Node.js REST APIs for backend communication. The frontend follows a component-based architecture to support different examination and assessment workflows.',

    architectureFlow: [
      'React',
      'REST API',
      'Node.js',
      'Assessment Data',
    ],

    outcome:
      'The platform provides a structured digital environment for conducting and managing remote examination workflows.',
  },

  nanobi: {
    title: 'Nanobi',
    category: 'Big Data Analytics & Business Intelligence',
    description:
      'A cloud-based analytics and business intelligence platform that enables organizations to work with data, generate insights, and support data-driven decision-making.',

    role: 'Front-End Developer',
    duration: 'Project',
    stack: ['HTML', 'CSS', 'JavaScript', 'jQuery'],

    overview:
      'Nanobi is a business intelligence and analytics platform focused on helping organizations visualize and work with business data. The application provides interfaces for exploring information and presenting analytical insights.',

    problem:
      'Organizations working with large amounts of business data need intuitive interfaces to explore information, understand trends, and consume analytical insights efficiently.',

    solution:
      'I contributed to the frontend development of the analytics platform, building user interfaces and interactive components using HTML, CSS, JavaScript, and jQuery.',

    contribution: [
      'Developed frontend interfaces for analytics workflows',
      'Implemented interactive UI components',
      'Created responsive layouts using HTML and CSS',
      'Developed JavaScript and jQuery-based functionality',
      'Worked on data visualization-related interfaces',
      'Fixed UI issues and improved application usability',
    ],

    features: [
      'Business intelligence dashboards',
      'Data-driven interfaces',
      'Analytics and reporting workflows',
      'Interactive UI components',
      'Data visualization interfaces',
      'Responsive frontend layouts',
    ],

    challenges: [
      'Presenting complex data through intuitive interfaces',
      'Building interactive components for analytics workflows',
      'Maintaining frontend performance with data-heavy screens',
      'Creating consistent layouts across different dashboard views',
    ],

    architecture:
      'The application uses a frontend architecture based on HTML, CSS, JavaScript, and jQuery to provide interactive analytics and business intelligence interfaces.',

    architectureFlow: [
      'HTML / CSS',
      'JavaScript + jQuery',
      'Analytics APIs',
      'Data Services',
    ],

    outcome:
      'The platform provides users with an interactive interface for exploring business data and consuming analytics-driven insights.',
  },
}

function ProjectPage() {
  const { projectId } = useParams()

  const project = projectId ? projects[projectId] : undefined

  if (!project) {
    return (
      <main className="page project-page project-not-found">
        <p className="eyebrow">Project</p>

        <h1>Project not found</h1>

        <p className="lede">
          The project you're looking for doesn't exist.
        </p>

        <Link className="text-link" to="/projects">
          ← Back to projects
        </Link>
      </main>
    )
  }

  return (
    <main className="page project-page">
      <Link className="back-link" to="/projects">
        ← Back to projects
      </Link>

      <header className="project-hero">
        <div>
          <p className="eyebrow">
            Project / {String(projectId).replace('-', ' ')}
          </p>

          <h1>{project.title}</h1>

          <p className="project-category">{project.category}</p>
        </div>

        <p className="project-description">
          {project.description}
        </p>
      </header>

      <div className="project-info-grid">
        <div className="project-info">
          <span>Role</span>
          <strong>{project.role}</strong>
        </div>

        <div className="project-info">
          <span>Duration</span>
          <strong>{project.duration}</strong>
        </div>

        <div className="project-info project-info-stack">
          <span>Technologies</span>

          <div className="stack-list">
            {project.stack.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </div>

      <section className="project-section project-overview">
        <div className="section-label">
          <span>01</span>
          <p>Overview</p>
        </div>

        <div className="section-content">
          <h2>Building a practical full-stack solution.</h2>
          <p>{project.overview}</p>
        </div>
      </section>

      <section className="project-section">
        <div className="section-label">
          <span>02</span>
          <p>The problem</p>
        </div>

        <div className="section-content">
          <h2>What needed to be solved?</h2>
          <p>{project.problem}</p>
        </div>
      </section>

      <section className="project-section">
        <div className="section-label">
          <span>03</span>
          <p>The solution</p>
        </div>

        <div className="section-content">
          <h2>How I approached it.</h2>
          <p>{project.solution}</p>
        </div>
      </section>

      <section className="project-section">
        <div className="section-label">
          <span>04</span>
          <p>My contribution</p>
        </div>

        <div className="section-content">
          <h2>What I worked on.</h2>

          <ul className="project-list">
            {project.contribution.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="project-section">
        <div className="section-label">
          <span>05</span>
          <p>Key features</p>
        </div>

        <div className="section-content">
          <h2>Core functionality.</h2>

          <div className="feature-grid">
            {project.features.map((feature, index) => (
              <div className="feature-card" key={feature}>
                <span>0{index + 1}</span>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="project-section">
        <div className="section-label">
          <span>06</span>
          <p>Technical challenges</p>
        </div>

        <div className="section-content">
          <h2>Engineering decisions.</h2>

          <ul className="project-list">
            {project.challenges.map((challenge) => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="project-section">
        <div className="section-label">
          <span>07</span>
          <p>Architecture</p>
        </div>

        <div className="section-content">
          <h2>How the system works.</h2>

          <p>{project.architecture}</p>

          <div className="architecture-card">
            {project.architectureFlow.map((item, index) => (
              <Fragment key={item}>
                <div>{item}</div>

                {index < project.architectureFlow.length - 1 && (
                  <span>↓</span>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="project-section">
        <div className="section-label">
          <span>08</span>
          <p>Outcome</p>
        </div>

        <div className="section-content">
          <h2>What came out of it.</h2>
          <p>{project.outcome}</p>
        </div>
      </section>

      <section className="project-footer">
        <p className="eyebrow">Next project</p>

        <Link to="/projects" className="next-project">
          <span>View all projects</span>
          <span>↗</span>
        </Link>
      </section>
    </main>
  )
}

export default ProjectPage