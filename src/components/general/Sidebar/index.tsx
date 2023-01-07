import Searchbar from "./Searchbar"
import RecentPosts from "./RecentPosts"
import AboutMe from "./AboutMe"

export default function Sidebar() {
  return (
    <aside>
      {/* <Searchbar /> */}
      <RecentPosts />
      <AboutMe />
    </aside>
  )
}
