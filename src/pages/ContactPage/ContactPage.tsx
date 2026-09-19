// import { Link } from 'react-router-dom'
// import './ContactPage.css'

// function ContactPage() {
//     return (
//         <main className="contact-page">
//             <section className="contact-hero">
//                 <div className="contact-label">
//                     <span className="contact-label-dot" />
//                     LET'S TALK
//                 </div>

//                 <div className="contact-heading">
//                     <div>
//                         <h1>
//                             Have a project
//                             <br />
//                             <span>in mind?</span>
//                         </h1>
//                     </div>

//                     <div className="contact-intro">
//                         <p>
//                             Whether you're looking for a full-stack
//                             developer, need help with an existing
//                             product, or simply want to discuss an
//                             opportunity, I'd love to hear from you.
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             <section className="contact-content">
//                 <div className="contact-main">
//                     <p className="contact-question">
//                         Let's build something meaningful.
//                     </p>

//                     <a
//                         className="contact-primary"
//                         href="mailto:nishantthakur1505@gmail.com?subject=Let's work together"
//                     >
//                         <span>Start a conversation</span>

//                         <svg
//                             viewBox="0 0 20 20"
//                             fill="none"
//                             aria-hidden="true"
//                         >
//                             <path
//                                 d="M5 15L15 5M7 5H15V13"
//                                 stroke="currentColor"
//                                 strokeWidth="1.7"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                             />
//                         </svg>
//                     </a>
//                 </div>

//                 <div className="contact-details">
//                     <div className="contact-detail">
//                         <span className="contact-detail-label">
//                             EMAIL
//                         </span>

//                         <a href="mailto:nishantthakur1505@gmail.com">
//                             nishantthakur1505@gmail.com
//                         </a>
//                     </div>

//                     <div className="contact-detail">
//                         <span className="contact-detail-label">
//                             AVAILABILITY
//                         </span>

//                         <div className="availability">
//                             <span className="availability-dot" />
//                             <span>
//                                 Available for new opportunities
//                             </span>
//                         </div>
//                     </div>

//                     <div className="contact-detail">
//                         <span className="contact-detail-label">
//                             LOCATION
//                         </span>

//                         <span>India · Remote</span>
//                     </div>
//                 </div>
//             </section>

//             <section className="contact-bottom">
//                 <div className="contact-bottom-line" />

//                 <div>
//                     <span className="contact-bottom-label">
//                         LOOKING FORWARD
//                     </span>

//                     <h2>
//                         Let's create something
//                         <br />
//                         <span>great together.</span>
//                     </h2>
//                 </div>

//                 <Link
//                     className="contact-home-link"
//                     to="/"
//                 >
//                     Back to home
//                     <svg
//                         viewBox="0 0 20 20"
//                         fill="none"
//                         aria-hidden="true"
//                     >
//                         <path
//                             d="M5 15L15 5M7 5H15V13"
//                             stroke="currentColor"
//                             strokeWidth="1.7"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         />
//                     </svg>
//                 </Link>
//             </section>
//         </main>
//     )
// }

// export default ContactPage

import { Link } from 'react-router-dom'
import './ContactPage.css'

function ContactPage() {
    return (
        <main className="contact-page">
            {/* Hero */}
            <section className="contact-hero">
                <div className="contact-label">
                    <span className="contact-label-dot" />
                    LET'S TALK
                </div>

                <div className="contact-heading">
                    <h1>
                        Let's build
                        <br />
                        <span>something great.</span>
                    </h1>

                    <div className="contact-intro">
                        <p>
                            Have a project, an opportunity, or an idea
                            you'd like to discuss? I'm always open to
                            meaningful conversations and new
                            opportunities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Contact */}
            <section className="contact-main">
                <div className="contact-cta">
                    <span className="contact-cta-label">
                        START A CONVERSATION
                    </span>

                    <h2>
                        Have something
                        <br />
                        <span>in mind?</span>
                    </h2>

                    <a
                        className="contact-primary"
                        href="mailto:nishantthakur1505@gmail.com?subject=Let's work together"
                    >
                        <span>Send me an email</span>

                        <svg
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

                {/* Contact Information */}
                <div className="contact-info">
                    <div className="contact-info-item">
                        <span className="contact-info-label">
                            EMAIL
                        </span>

                        <a href="mailto:nishantthakur1505@gmail.com">
                            nishantthakur1505@gmail.com
                        </a>
                    </div>

                    <div className="contact-info-item">
                        <span className="contact-info-label">
                            PHONE
                        </span>

                        <a href="tel:+918709440079">
                            +91 87094 40079
                        </a>
                    </div>

                    <div className="contact-info-item">
                        <span className="contact-info-label">
                            LOCATION
                        </span>

                        <span>Pan India · In-office · Hybrid · Remote</span>
                    </div>

                    <div className="contact-info-item">
                        <span className="contact-info-label">
                            AVAILABILITY
                        </span>

                        <div className="availability">
                            <span className="availability-dot" />
                            <span>Available for new opportunities</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing */}
            <section className="contact-closing">
                <div className="contact-closing-line" />

                <div className="contact-closing-content">
                    <span className="contact-closing-label">
                        LOOKING FORWARD
                    </span>

                    <h2>
                        Let's turn an idea
                        <br />
                        <span>into something real.</span>
                    </h2>
                </div>

                <Link
                    className="contact-home-link"
                    to="/"
                >
                    Back to home

                    <svg
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
                </Link>
            </section>
        </main>
    )
}

export default ContactPage
