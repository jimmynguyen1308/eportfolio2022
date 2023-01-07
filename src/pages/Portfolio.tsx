import MainLayout from "../layouts/MainLayout"
import MetaTags from "../components/general/MetaTags"
import { sectionConst } from "../constants/route.const"

// components
import Cover from "../components/portfolio/Cover"
import Summary from "../components/portfolio/Summary"
import AboutMe from "../components/portfolio/AboutMe"

export default function Portfolio() {
  return (
    <MainLayout name={"portfolio-page"} cover={<Cover />}>
      <MetaTags
        section={sectionConst.PORTFOLIO}
        description={'Welcome! My name is Nhat K. "James" Nguyen.'}
      />
      <Summary />
      {/* <AboutMe /> */}
      {/* <h1>My Work</h1>
      <h1>About Me</h1> */}
    </MainLayout>
  )
}
