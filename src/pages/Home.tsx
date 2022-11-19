import MainLayout from '../layouts/MainLayout'
import MetaTags from '../components/general/MetaTags'
import { sectionConst } from '../constants/route.const'

// components
import Cover from '../components/homepage/Cover'
import AboutMe from '../components/homepage/AboutMe'
import Sidebar from '../components/general/Sidebar'

export default function Home() {
  return (
    <MainLayout name={'home-page'}>
      <MetaTags
        section={sectionConst.HOME}
        description={'Welcome! My name is Nhat K. "James" Nguyen.'}
      />
      <Cover />
      <div className='content-container aside'>
        <main>
          <AboutMe />
        </main>
        <Sidebar />
      </div>
    </MainLayout>
  )
}
