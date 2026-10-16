import { lazy } from 'react'

export const HomePage = lazy(() => import('../pages/HomePage/HomePage'))
export const AboutPage = lazy(() => import('../pages/AboutPage/AboutPage'))
export const ProjectsPage = lazy(() => import('../pages/ProjectsPage/ProjectsPage'))
export const ProjectPage = lazy(() => import('../pages/ProjectPage/ProjectPage'))
export const CertificationsPage = lazy(() => import('../pages/CertificationsPage/CertificationsPage'))
export const ContactPage = lazy(() => import('../pages/ContactPage/ContactPage'))