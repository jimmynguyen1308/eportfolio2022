import MainLayout from '../layouts/MainLayout'
import MetaTags from '../components/general/MetaTags'
import { sectionConst } from '../constants/route.const'

export default function Portfolio() {
  return (
    <MainLayout name={'portfolio-page'}>
      <MetaTags
        section={sectionConst.PORTFOLIO}
        description={'Welcome! My name is Nhat K. "James" Nguyen.'}
      />
      <main>
        <h1>Portfolio</h1>
      </main>
    </MainLayout>
  )
}
