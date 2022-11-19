import { NavLink } from 'react-router-dom'
import SVGLogo from '../SVGLogo'

interface NavbtnProps {
  title: string,
  imgPath: string,
  navLink: string
}

export default function Navbtn(props: NavbtnProps) {
  const { title, imgPath, navLink } = props
  const pathname = window.location.pathname

  let BtnClass = 'nav-btn'
  if ((pathname.startsWith(navLink) && navLink!=='/')
    || (pathname==='/' && navLink==='/'))
    BtnClass+= ' active'

  return (
    <NavLink to={navLink}>
      <div className={BtnClass}>
        <SVGLogo
          imgName={'nav-icon ' + title}
          path={imgPath}
        />
        <span>{title}</span>
      </div>
    </NavLink>
  )
}
