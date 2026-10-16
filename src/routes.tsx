import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AboutPage, HomePage, ProjectPage, ProjectsPage, CertificationsPage, ContactPage } from './components/LazyPages'
import { ErrorPage, LazyPage } from './components/RouteStates'
import SiteLayout from './layouts/SiteLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SiteLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <LazyPage />,
        children: [
          { index: true, element: <HomePage /> },
          { path: 'about', element: <AboutPage /> },
          { path: 'projects', element: <ProjectsPage /> },
          { path: 'projects/:projectId', element: <ProjectPage /> },
          { path: 'certifications', element: <CertificationsPage /> },
          { path: 'contact', element: <ContactPage /> },
          { path: '*', element: <Navigate to="/" replace /> },
        ],
      },
    ],
  },
])