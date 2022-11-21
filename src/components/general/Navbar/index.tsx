import useRoutes from '../../../hooks/useRoutes'
import Navbtn from './Navbtn'
import SVGLogo from '../SVGLogo'

interface NavbarProps {
  handleClick: Function
}

export default function Navbar(props: NavbarProps) {
  const router = useRoutes().router
  return (
    <nav id='nav-bar'>
      <SVGLogo
        imgClass={'menu-close prevent-highlight'}
        path={'icon-close'}
        handleClick={props.handleClick}
      />
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
