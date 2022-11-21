import MainLayout from '../layouts/MainLayout'
import MetaTags from '../components/general/MetaTags'
import { sectionConst } from '../constants/route.const'

// components
import Cover from '../components/portfolio/Cover'

export default function Portfolio() {
  return (
    <MainLayout name={'portfolio-page'} cover={<Cover />}>
      <MetaTags
        section={sectionConst.PORTFOLIO}
        description={'Welcome! My name is Nhat K. "James" Nguyen.'}
      />
    </MainLayout>
  )
}
