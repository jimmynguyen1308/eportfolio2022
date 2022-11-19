import MainLayout from '../layouts/MainLayout'
import MetaTags from '../components/general/MetaTags'
import { sectionConst } from '../constants/route.const'

export default function Home() {
  return (
    <MainLayout name={'home-page'}>
      <MetaTags
        section={sectionConst.HOME}
        description={'Welcome! My name is Nhat K. "James" Nguyen.'}
      />
      <h1>Home</h1>
    </MainLayout>
  )
}
