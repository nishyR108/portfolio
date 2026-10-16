import { Suspense } from 'react'
import { Outlet, useRouteError } from 'react-router-dom'

export function LoadingPage() {
  return (
    <main className="route-loading">
      <div className="loading-content">
        <div className="loading-logo">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <p className="loading-label">Loading</p>

        <div className="loading-line">
          <span></span>
        </div>
      </div>
    </main>
  )
}

export function ErrorPage() {
  const error = useRouteError()
  const message = error instanceof Error ? error.message : 'Page not found.'

  return (
    <main className="route-status">
      <p className="eyebrow">Something went wrong</p>

      <h1>{message}</h1>

      <a className="button" href="/">
        Return home
      </a>
    </main>
  )
}

export function LazyPage() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Outlet />
    </Suspense>
  )
}