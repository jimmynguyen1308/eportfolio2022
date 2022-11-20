import MainLayout from '../layouts/MainLayout'
import MetaTags from '../components/general/MetaTags'
import { sectionConst } from '../constants/route.const'

// components
import Cover from '../components/homepage/Cover'
import AboutMe from '../components/homepage/AboutMe'
import Quotation from '../components/general/Quotation'
import SectionIntro from '../components/homepage/SectionIntro'

export default function Home() {
  return (
    <MainLayout name={'home-page'} cover={<Cover />} aside={true}>
      <MetaTags
        section={sectionConst.HOME}
        description={'Welcome! My name is Nhat K. "James" Nguyen.'}
      />
      <AboutMe />
      <Quotation
        quoteClass={'homepage'}
        quote={'"Designers are meant to be loved, not to be understood."'}
        author={'Margaret Oscar, designer'}
      />
      <SectionIntro />
    </MainLayout>
  )
}
