import MainLayout from '../layouts/MainLayout'
import MetaTags from '../components/general/MetaTags'
import { sectionConst } from '../constants/route.const'

export default function Articles() {
  return (
    <MainLayout name={'articles-page'}>
      <MetaTags
        section={sectionConst.ARTICLES}
        description={'Welcome! My name is Nhat K. "James" Nguyen.'}
      />
      <h1>Articles</h1>
    </MainLayout>
  )
}
