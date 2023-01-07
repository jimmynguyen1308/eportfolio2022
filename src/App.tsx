import { Routes, Route, Navigate } from "react-router-dom"
import useRoutes, { routerProps } from "./hooks/useRoutes"
import BackToTop from "./components/general/BackToTop"
import Page404 from "./pages/Page404"

export default function App() {
  const router = useRoutes().router
  return (
    <div className={"app-container"}>
      <Routes>
        {router &&
          router.map((route: routerProps) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        <Route path="/" element={<Navigate to="/portfolio" />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <BackToTop />
    </div>
  )
}
