import { NavLink, Outlet } from 'react-router-dom'
import '../App.css'

function SiteLayout() {
    return (
        <div className="site-shell">
            {/* Header */}
            <header className="site-header">
                <div className="header-inner">
                    <NavLink className="brand" to="/">
                        <span className="brand-mark">N</span>
                        <span className="brand-name">
                            Nishant Thakur
                        </span>
                    </NavLink>

                    <nav
                        className="main-nav"
                        aria-label="Main navigation"
                    >
                        <NavLink
                            className={({ isActive }) =>
                                `nav-link ${isActive ? 'active' : ''}`
                            }
                            to="/"
                        >
                            Home
                        </NavLink>

                        <NavLink
                            className={({ isActive }) =>
                                `nav-link ${isActive ? 'active' : ''}`
                            }
                            to="/about"
                        >
                            About
                        </NavLink>

                        <NavLink
                            className={({ isActive }) =>
                                `nav-link ${isActive ? 'active' : ''}`
                            }
                            to="/projects"
                        >
                            Projects
                        </NavLink>
                    </nav>

                    <a
                        className="header-contact"
                        href="mailto:nishant@example.com"
                    >
                        Let's talk
                        <span>↗</span>
                    </a>
                </div>
            </header>

            {/* Page */}
            <div className="page-content">
                <Outlet />
            </div>

            {/* Footer */}
            <footer className="site-footer">
                <div className="footer-inner">
                    <div className="footer-left">
                        <span className="footer-dot" />

                        <span>
                            Available for new opportunities
                        </span>
                    </div>

                    <div className="footer-center">
                        © {new Date().getFullYear()} Nishant Thakur
                    </div>

                    <div
                        className="social-links"
                        aria-label="Social links"
                    >
                        <a
                            className="social-link"
                            href="https://wa.me/911234567890"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="WhatsApp"
                            title="WhatsApp"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M20.5 3.5A11.8 11.8 0 0 0 3.2 19.6L2 24l4.5-1.2A11.8 11.8 0 1 0 20.5 3.5Zm-8.3 17.1c-1.8 0-3.5-.5-5-1.5l-.3-.2-2.7.7.7-2.6-.2-.3a9.8 9.8 0 1 1 7.5 3.9Zm5.4-7.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.2l-.8 1c-.2.2-.4.2-.7.1a7.8 7.8 0 0 1-2.3-1.4 8.5 8.5 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.5s1 2.9 1.1 3.1c.1.2 2 3.1 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.3.2-.6.2-1.2.1-1.3-.1-.1-.3-.1-.5-.2Z" />
                            </svg>
                        </a>

                        <a
                            className="social-link"
                            href="https://www.linkedin.com/in/nishant-thakur"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            title="LinkedIn"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M5.2 3.3a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0ZM1.1 8h3.9v12.5H1.1V8Zm6.4 0h3.7v1.7h.1a4.1 4.1 0 0 1 3.7-2c4 0 4.7 2.6 4.7 6v6.8h-3.9v-6c0-1.4 0-3.3-2-3.3s-2.3 1.5-2.3 3.2v6.1H7.5V8Z" />
                            </svg>
                        </a>

                        <a
                            className="social-link"
                            href="mailto:nishant@example.com"
                            aria-label="Email Nishant Thakur"
                            title="Email"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M2.5 4h19A2.5 2.5 0 0 1 24 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-19A2.5 2.5 0 0 1 0 17.5v-11A2.5 2.5 0 0 1 2.5 4Zm0 2v.3l9.5 6.4 9.5-6.4V6h-19Zm19 11V8.7l-8.9 6a1.8 1.8 0 0 1-2.2 0l-8.9-6V17h20Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default SiteLayout