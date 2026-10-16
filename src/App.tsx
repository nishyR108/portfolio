import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects } from './pages/ProjectPage/ProjectPage'
import './App.css'
import skillSet from './data/skills.json'

type Project = (typeof projects)[string]

const skills = Object.values(skillSet).flat()

const strengths = [
  ['01', 'Frontend', 'Building responsive and scalable interfaces with React, TypeScript and modern frontend patterns.'],
  ['02', 'Backend', 'Designing APIs and backend services with Node.js, Express, NestJS and database-driven architectures.'],
  ['03', 'Architecture', 'Working with authentication, microservices, API integrations, caching, queues and scalable application patterns.'],
]

const certifications = [
  { title: 'Getting Started with Node.js', issuer: 'MongoDB', date: '28th Dec 2022', credential: '4048005', image: '/Certifications/Node.js_Certificate.jpg', skills: ['Node.js','JavaScript','npm','Backend'], description: 'Certification covering the fundamentals of Node.js, including the runtime, modules, npm, asynchronous programming, file system operations, HTTP servers and backend applications.' },
  { title: 'MongoDB for JavaScript Developers', issuer: 'MongoDB', date: '18th Oct 2022', credential: 'M220JS', image: '/Certifications/M220JS_proof_of_completion.jpg', skills: ['MongoDB','JavaScript','Node.js','Mongoose'], description: 'Certification focused on MongoDB with JavaScript applications, including CRUD operations, data modeling, querying, aggregation, schema design and Node.js integration.' },
]

const sectionIds = ['home','about','projects','certifications','contact']

const reveal = { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0 } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }

function App() {
  const [active, setActive] = useState('home')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedCertificate, setSelectedCertificate] = useState<typeof certifications[number] | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('portfolio-theme')
    return saved === 'light' ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const element = document.getElementById(id)
      if (!element) return null
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActive(id)
      }, { rootMargin: '-35% 0px -55% 0px' })
      observer.observe(element)
      return observer
    })
    return () => observers.forEach((observer) => observer?.disconnect())
  }, [])

  useEffect(() => {
    document.body.style.overflow = selectedProject || selectedCertificate ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedProject, selectedCertificate])

  const projectList = useMemo(() => Object.entries(projects), [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <button className="brand" onClick={() => scrollTo('home')} aria-label="Go to home">
            <span className="brand-mark">N</span><span className="brand-name">Nishant Thakur</span>
          </button>
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">☰</button>
          <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
            {sectionIds.map((id) => <button key={id} className={`nav-link ${active === id ? 'active' : ''}`} onClick={() => scrollTo(id)}>{id[0].toUpperCase() + id.slice(1)}</button>)}
          </nav>
          <button
            className="theme-toggle"
            onClick={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
            <span className="theme-toggle-label">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-glow one" /><div className="hero-glow two" />
          <motion.div variants={stagger} initial="hidden" animate="visible" className="hero-inner">
            <motion.div variants={reveal} className="availability"><span className="availability-dot" /> Open to Full-Stack Developer opportunities</motion.div>
            <motion.div variants={reveal} className="hero-grid">
              <div>
                <p className="eyebrow">React.js · Node.js · TypeScript</p>
                <h1>Full-Stack <span>Developer</span> building scalable web applications.</h1>
                <p className="hero-description">Hi, I'm <strong>Nishant Thakur</strong> — a Full-Stack Developer with 6.5+ years of experience in web development, specializing in React.js, JavaScript, TypeScript and Node.js. I build responsive, scalable and maintainable web applications with modern frontend, backend and cloud technologies.</p>
                <div className="hero-actions"><button className="primary-btn" onClick={() => scrollTo('projects')}>View my work ↗</button><a className="secondary-btn" href="/Nishant_Thakur_Resume_FSD.pdf" download>Download Resume ↓</a></div>
              </div>
              <motion.div variants={reveal} className="hero-profile-card"><div className="profile-ring"><img src="/nishant-profile.png" alt="Nishant Thakur" /></div><span>FULL-STACK SOFTWARE DEVELOPER</span><strong>Building from UI to API.</strong></motion.div>
            </motion.div>
            <motion.div variants={reveal} className="skill-cloud">{skills.map((skill) => <span key={skill}>{skill}</span>)}</motion.div>
            <motion.div variants={stagger} className="metrics">{[['6.5+','Years in web development'],['5+','Years with React.js'],['3+','Years with Node.js'],['9+','Projects delivered']].map(([v,l]) => <motion.div variants={reveal} key={l}><strong>{v}</strong><span>{l}</span></motion.div>)}</motion.div>
          </motion.div>
        </section>

        <section id="about" className="section-pad about-section">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }} variants={stagger}>
            <motion.div variants={reveal} className="section-label">ABOUT ME</motion.div>
            <motion.h2 variants={reveal} className="section-title">I build software <span>that solves problems.</span></motion.h2>
            <div className="about-grid">
              <motion.article variants={reveal} className="story"><span className="section-number">01</span><div><h3>A little about me</h3><p>I enjoy taking complex requirements and turning them into simple, reliable software. Over the years I've worked across both frontend and backend development, which helps me understand a product from the user interface all the way to the underlying systems.</p><p>My day-to-day work involves building React applications, developing Node.js APIs, working with MongoDB and PostgreSQL, integrating third-party services, and improving application performance, reliability and maintainability.</p><p>I'm particularly interested in clean architecture, scalable systems, developer experience and solving problems that have a meaningful impact on the product.</p></div></motion.article>
              <motion.aside variants={reveal} className="experience-card"><span>EXPERIENCE</span><strong>6.5+</strong><p>years building web applications</p><div className="experience-line" /><span>PRIMARY STACK</span><p>React · Node.js · TypeScript</p></motion.aside>
            </div>
            <motion.div variants={stagger} className="strength-grid">{strengths.map(([n,t,d]) => <motion.article variants={reveal} key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></motion.article>)}</motion.div>
          </motion.div>
        </section>

        <section id="projects" className="section-pad projects-section">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .1 }} variants={stagger}>
            <motion.div variants={reveal} className="section-label">SELECTED WORK</motion.div>
            <motion.h2 variants={reveal} className="section-title">Things I've <span>built & shipped.</span></motion.h2>
            <motion.p variants={reveal} className="section-intro">A selection of projects where I've worked across frontend, backend and application architecture to turn ideas into working products.</motion.p>
            <div className="project-list">{projectList.map(([id, project], index) => <motion.article variants={reveal} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300 }} className="project-card" key={id} onClick={() => setSelectedProject(project)} tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}>
              <div className="project-top"><span>{String(index + 1).padStart(2,'0')}</span><small>{project.category}</small><b>↗</b></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-bottom"><span>{project.role}</span><div>{project.stack.map(s => <em key={s}>{s}</em>)}</div></div>
            </motion.article>)}</div>
          </motion.div>
        </section>

        <section id="certifications" className="section-pad cert-section">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }} variants={stagger}>
            <motion.div variants={reveal} className="section-label">CERTIFICATIONS</motion.div>
            <motion.h2 variants={reveal} className="section-title">Continuous <span>learning.</span></motion.h2>
            <motion.p variants={reveal} className="section-intro">Professional learning milestones that complement hands-on software development experience.</motion.p>
            <div className="cert-grid">{certifications.map((cert) => <motion.article variants={reveal} whileHover={{ y: -6 }} className="cert-card" key={cert.title} onClick={() => setSelectedCertificate(cert)}><div className="cert-image"><img src={cert.image} alt={cert.title} /></div><div><span>{cert.issuer}</span><h3>{cert.title}</h3><p>{cert.description}</p><small>{cert.date} · {cert.credential}</small></div><b>↗</b></motion.article>)}</div>
          </motion.div>
        </section>

        <section id="contact" className="section-pad contact-section">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={stagger}>
            <motion.div variants={reveal} className="section-label">LET'S TALK</motion.div>
            <motion.h2 variants={reveal} className="section-title">Let's build <span>something great.</span></motion.h2>
            <div className="contact-grid"><motion.div variants={reveal}><p className="contact-question">Have a project, an opportunity, or an idea you'd like to discuss? I'm always open to meaningful conversations and new opportunities.</p><a className="primary-btn" href="mailto:nishantthakur1505@gmail.com?subject=Let's work together">Send me an email ↗</a></motion.div><motion.div variants={stagger} className="contact-info">{[['EMAIL','nishantthakur1505@gmail.com','mailto:nishantthakur1505@gmail.com'],['PHONE','+91 87094 40079','tel:+918709440079'],['LOCATION','Pan India · In-office · Hybrid · Remote',''],['AVAILABILITY','Available for new opportunities','']].map(([label,value,href]) => <motion.div variants={reveal} key={label}><span>{label}</span>{href ? <a href={href}>{value}</a> : <strong>{value}</strong>}</motion.div>)}</motion.div></div>
          </motion.div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-status"><span className="availability-dot" /> Available for new opportunities</div>
        <span className="footer-copy">© {new Date().getFullYear()} Nishant Thakur</span>
        <div className="footer-socials" aria-label="Social links">
          <a className="social-link" href="https://www.linkedin.com/in/nishant-thakur-7a3745161" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.85c0-3.77-2-5.52-4.66-5.52-2.14 0-3.1 1.18-3.63 2.01V8.5H9.2V21h3.51v-6.19c0-1.63.31-3.21 2.33-3.21 1.99 0 2.01 1.87 2.01 3.32V21H21v-7.15Z"/></svg>
          </a>
          <a className="social-link" href="https://wa.me/918709440079" target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.1 11.1 0 0 0 12.6 0C6.5 0 1.55 4.94 1.55 11.02c0 1.95.51 3.85 1.48 5.52L1.5 22.5l6.1-1.5a11.1 11.1 0 0 0 5 1.19h.01c6.1 0 11.04-4.94 11.04-11.02 0-2.95-1.15-5.72-3.15-7.67ZM12.61 20.08h-.01a9.03 9.03 0 0 1-4.6-1.26l-.33-.2-3.62.89.97-3.53-.21-.36a9.01 9.01 0 0 1-1.38-4.81c0-4.98 4.07-9.03 9.08-9.03 2.42 0 4.69.94 6.4 2.64a8.96 8.96 0 0 1 2.65 6.39c0 4.99-4.07 9.03-8.95 9.03Zm4.96-6.77c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.46-.84-2-.22-.52-.45-.45-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26s.98 2.62 1.12 2.8c.14.18 1.92 2.94 4.65 4.12.65.28 1.15.45 1.54.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32Z"/></svg>
          </a>
          <a className="social-link" href="mailto:nishantthakur1505@gmail.com" aria-label="Email" title="Email">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.5l9 5.63 9-5.63V7H3Zm18 10V9.85l-8.47 5.3a1 1 0 0 1-1.06 0L3 9.85V17h18Z"/></svg>
          </a>
        </div>
      </footer>

      <AnimatePresence>{selectedProject && <Modal onClose={() => setSelectedProject(null)} wide><span className="modal-label">PROJECT CASE STUDY</span><h2>{selectedProject.title}</h2><p className="modal-lead">{selectedProject.description}</p><div className="modal-meta"><span><b>ROLE</b>{selectedProject.role}</span><span><b>STACK</b>{selectedProject.stack.join(' · ')}</span></div><Detail title="Overview" text={selectedProject.overview} /><Detail title="Problem" text={selectedProject.problem} /><Detail title="Solution" text={selectedProject.solution} /><div className="detail-columns"><DetailList title="Contribution" items={selectedProject.contribution} /><DetailList title="Features" items={selectedProject.features} /><DetailList title="Challenges" items={selectedProject.challenges} /></div><Detail title="Architecture" text={selectedProject.architecture} /><div className="flow">{selectedProject.architectureFlow.map((item,i)=><span key={item}>{item}{i < selectedProject.architectureFlow.length - 1 && ' → '}</span>)}</div><Detail title="Outcome" text={selectedProject.outcome} /></Modal>}{selectedCertificate && <Modal onClose={() => setSelectedCertificate(null)}><span className="modal-label">CERTIFICATION</span><h2>{selectedCertificate.title}</h2><img className="modal-cert-image" src={selectedCertificate.image} alt={selectedCertificate.title} /><div className="modal-meta"><span><b>ISSUER</b>{selectedCertificate.issuer}</span><span><b>DATE</b>{selectedCertificate.date}</span><span><b>CREDENTIAL</b>{selectedCertificate.credential}</span></div><p>{selectedCertificate.description}</p><div className="tag-list">{selectedCertificate.skills.map(s => <span key={s}>{s}</span>)}</div></Modal>}</AnimatePresence>
    </div>
  )
}

function Detail({ title, text }: { title: string; text: string }) { return <div className="detail"><h3>{title}</h3><p>{text}</p></div> }
function DetailList({ title, items }: { title: string; items: string[] }) { return <div className="detail"><h3>{title}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></div> }
function Modal({ children, onClose, wide = false }: { children: React.ReactNode; onClose: () => void; wide?: boolean }) { return <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}><motion.div className={`modal ${wide ? 'wide' : ''}`} initial={{ opacity: 0, y: 30, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: .98 }} transition={{ type: 'spring', damping: 26 }} onClick={e => e.stopPropagation()}>{children}<button className="modal-close" onClick={onClose} aria-label="Close">×</button></motion.div></motion.div> }

export default App
