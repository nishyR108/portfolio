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

                    {/* Header Actions */}
                    <div className="header-actions">
                        <a
                            className="header-contact"
                            href="mailto:nishant@example.com"
                        >
                            Let's talk

                            {/* Clean arrow icon */}
                            <svg
                                className="contact-arrow"
                                viewBox="0 0 20 20"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M5 15L15 5M7 5H15V13"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                    </div>
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
                        {/* WhatsApp */}
                        <a
                            className="social-link"
                            href="https://wa.me/8709440079"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="WhatsApp"
                            title="WhatsApp"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    d="M12 2.25a9.75 9.75 0 0 0-8.44 14.63L2.3 21.7l4.94-1.24A9.75 9.75 0 1 0 12 2.25Zm0 17.7a7.9 7.9 0 0 1-4.03-1.1l-.29-.17-2.93.74.78-2.85-.19-.3A7.9 7.9 0 1 1 12 19.95Zm4.34-5.92c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.18-.7-.62-1.18-1.39-1.32-1.63-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"
                                />
                            </svg>
                        </a>

                        {/* LinkedIn */}
                        <a
                            className="social-link"
                            href="https://www.linkedin.com/in/nishant-thakur-7a3745161"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            title="LinkedIn"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M5.2 3.5A2.2 2.2 0 1 1 .8 3.5a2.2 2.2 0 0 1 4.4 0ZM1 8h4.2v12H1V8Zm6.6 0h4v1.64h.06c.56-1.06 1.92-2.18 3.96-2.18 4.24 0 5.02 2.79 5.02 6.42V20h-4.2v-5.43c0-1.3-.02-2.98-1.82-2.98-1.82 0-2.1 1.42-2.1 2.89V20H7.6V8Z" />
                            </svg>
                        </a>

                        {/* Email */}
                        <a
                            className="social-link"
                            href="mailto:nishantthakur1505@gmail.com"
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