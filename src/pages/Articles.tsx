import MainLayout from '../layouts/MainLayout'
import MetaTags from '../components/general/MetaTags'
import { sectionConst } from '../constants/route.const'

// components
import Sidebar from '../components/general/Sidebar'

export default function Articles() {
  return (
    <MainLayout name={'articles-page'}>
      <MetaTags
        section={sectionConst.ARTICLES}
        description={'Welcome! My name is Nhat K. "James" Nguyen.'}
      />
      <div className='content-container aside'>
      <main>
        <h1>Articles</h1>
      </main>
        <Sidebar />
      </div>
    </MainLayout>
  )
}
