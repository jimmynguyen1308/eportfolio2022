import Searchbar from "./Searchbar"
import RecentPosts from "./RecentPosts"
import AboutMe from "./AboutMe"

export default function Sidebar() {
  return (
    <aside>
      {/* <Searchbar /> */}
      <RecentPosts />
      <AboutMe />

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
