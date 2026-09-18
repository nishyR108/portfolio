import { Suspense } from 'react'
import { Outlet, useRouteError } from 'react-router-dom'

export function LoadingPage() {
  return <p className="route-status">Loading page...</p>
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