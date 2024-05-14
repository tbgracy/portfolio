import './styles/App.scss'
import { Suspense, lazy } from 'react'
import Preloader from './components/Preloader'

const LazyMainPage = lazy(() => import('./pages/MainPage'))

function App() {
  return (
    <>
      <Suspense fallback={ <Preloader /> }>
        <LazyMainPage />
      </Suspense>
    </>
  )
}

export default App
