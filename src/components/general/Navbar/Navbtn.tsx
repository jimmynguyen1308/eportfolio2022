import { NavLink } from 'react-router-dom'
import SVGLogo from '../SVGLogo'

interface NavbtnProps {
  title: string
  imgPath: string
  navLink: string
  note: string
}

export default function Navbtn(props: NavbtnProps) {
  const { title, imgPath, navLink, note } = props
  const pathname = window.location.pathname

  let BtnClass = 'prevent-highlight nav-btn'
  if ((pathname.startsWith(navLink) && navLink!=='/')
    || (pathname==='/' && navLink==='/'))
    BtnClass+= ' active'

  return (
    <>
      <NavLink to={navLink}>
        <div className={BtnClass}>
          <SVGLogo
            imgClass={'nav-icon ' + title}
            path={imgPath}
          />
          <span>{title}</span>
        </div>
      </NavLink>
      {note &&
        <div className={'nav-icon-note prevent-highlight'}>{note}</div>
      }
    </>
    
  )
}
