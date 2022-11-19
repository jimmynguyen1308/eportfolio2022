import Searchbar from './Searchbar'
import AboutMe from './AboutMe'
import SpotifyIframe from './SpotifyIframe'

export default function Sidebar() {
  return (
    <aside>
      <h1 id='title' className='prevent-highlight'>
        Sidebar
      </h1>
      <Searchbar />
      <AboutMe />
      <SpotifyIframe />
      
      {/* <iframe
        style={{ width: "100%", height: "800px" }}
        src="/pdfs/NhatNguyen-Resume.pdf"
      />
      <a
        href='/pdfs/NhatNguyen-Resume.pdf'
        target="_blank" rel="noopener noreferrer"
      >Download</a> */}
    </aside>
  )
}
