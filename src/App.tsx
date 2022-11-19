import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeContext } from './contexts/ThemeContext'
import useRoutes, { routerProps } from './hooks/useRoutes'
import Page404 from './pages/Page404'

export default function App() {
  const themeData = useContext(ThemeContext)
  const router = useRoutes().router
  return (
    <div className={'app-container ' + themeData.theme}>
      <Routes>
        {router && router.map((route: routerProps) =>
          <Route key={route.path} path={route.path} element={route.element} />)}
        <Route path='*' element={<Page404 />} />
      </Routes>
    </div>
  )
}
