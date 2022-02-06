import { lazy, Suspense } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import FifthPage from './components/pages/FifthPage'
import FourthPage from './components/pages/FourthPage'
import LastPage from './components/pages/LastPage'
import MainPage from './components/pages/MainPage'
import SecondPage from './components/pages/SecondPage'
import SixthPage from './components/pages/SixthPage'
import ThirdPage from './components/pages/ThirdPage'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'
import Preloader from './components/shared/Preloader'

const AdminPage = lazy(() => import('./components/pages/AdminPage'))

import './index.scss'

const AppLayout = () => {
  const location = useLocation()
  const transitions = useTransition(location, {
    initial: { position: 'absolute' },
    from: { position: 'absolute', transform: 'translateY(100%) scale(0)' },
    enter: { position: 'absolute', transform: 'translateY(0%) scale(1)' },
    leave: { position: 'absolute', transform: 'translateY(-100%) scale(0)' },
  })

  return transitions((props, item) => (
    <animated.div style={props} className='app'>
      <Header />
      <Routes location={item}>
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/step-2' element={<SecondPage />} />
        <Route path='/step-3' element={<ThirdPage />} />
        <Route path='/step-4' element={<FourthPage />} />
        <Route path='/step-5' element={<FifthPage />} />
        <Route path='/step-6' element={<SixthPage />} />
        <Route path='/step-7' element={<LastPage />} />
        <Route path='*' element={<MainPage />} />
      </Routes>
      <Footer />
    </animated.div>
  ))
}

render(
  <BrowserRouter>
    <Suspense fallback={<Preloader />}>
      <AppLayout />
    </Suspense>
  </BrowserRouter>,
  document.getElementById('root')
)
