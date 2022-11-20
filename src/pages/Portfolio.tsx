import MainLayout from '../layouts/MainLayout'
import MetaTags from '../components/general/MetaTags'
import { sectionConst } from '../constants/route.const'

export default function Portfolio() {
  return (
    <MainLayout name={'portfolio-page'} aside={false}>
      <MetaTags
        section={sectionConst.PORTFOLIO}
        description={'Welcome! My name is Nhat K. "James" Nguyen.'}
      />
      <h1>Portfolio</h1>
    </MainLayout>
  )
}
