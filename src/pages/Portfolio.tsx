import MainLayout from "../layouts/MainLayout"
import MetaTags from "../components/general/MetaTags"
import { sectionConst } from "../constants/route.const"

import Cover from "../components/portfolio/Cover"
import Summary from "../components/portfolio/Summary"
import MyWork from "../components/portfolio/MyWork"
import FAQ from "../components/portfolio/FAQ"
import Contact from "../components/portfolio/Contact"

export default function Portfolio() {
  return (
    <MainLayout name={"portfolio-page"} cover={<Cover />}>
      <MetaTags
        section={sectionConst.PORTFOLIO}
        description={'Welcome! My name is Nhat K. "James" Nguyen.'}
      />
      <Summary />
      <MyWork />
      <FAQ />
      <Contact />
    </MainLayout>
  )
}
