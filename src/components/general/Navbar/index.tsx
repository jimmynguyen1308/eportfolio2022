import useRoutes from '../../../hooks/useRoutes'
import Navbtn from './Navbtn'

export default function Navbar() {
  const router = useRoutes().router
  return (
    <nav id='nav-bar'>
      {router.map((route: any) => {
        if (route.imgPath)
        return (
          <Navbtn
            key={route.name}
            title={route.name}
            imgPath={route.imgPath}
            navLink={route.path}
            note={route.note}
          />
        )}
      )}
    </nav>
  )
}
