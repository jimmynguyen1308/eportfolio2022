import MainLayout from '../layouts/MainLayout'
import MetaTags from '../components/general/MetaTags'
import { sectionConst } from '../constants/route.const'

// components
import Cover from '../components/homepage/Cover'

export default function Home() {
  return (
    <MainLayout name={'home-page'} cover={<Cover />}>
      <MetaTags
        section={sectionConst.HOME}
        description={'Welcome! My name is Nhat K. "James" Nguyen.'}
      />
    </MainLayout>
  )
}
