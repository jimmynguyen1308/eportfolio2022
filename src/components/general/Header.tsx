import { Link } from 'react-router-dom'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header>
      <div className='header-content prevent-highlight'>
        <div id={'brand-text'}>
          <Link to='/'>
            <h1>JAMES NGUYEN</h1>
            <p>@jimmynguyen1308</p>
          </Link>
        </div>
        <Navbar />
      </div>
    </header>
  )
}
