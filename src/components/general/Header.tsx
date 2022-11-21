import { Link } from 'react-router-dom'
import Button from './Button'
import SVGLogo from './SVGLogo'

interface HeaderProps {
  handleClick: Function
}

export default function Header(props: HeaderProps) {
  return (
    <header>
      <div className='header-content prevent-highlight'>
        <div id={'brand-text'}>
          <Link to='/portfolio'>
            <h1>JAMES NGUYEN</h1>
            <p>@jimmynguyen1308</p>
          </Link>
        </div>
        <Button
          buttonClass='menu-btn'
          handleClick={props.handleClick}
          text={'Menu'}
          icon={<SVGLogo imgClass={'icon-menu'} path={'icon-menu'} />}
        />
      </div>
    </header>
  )
}
