import MainLayout from '../layouts/MainLayout'
import MetaTags from '../components/general/MetaTags'
import { sectionConst } from '../constants/route.const'

export default function Page404() {
  return (
    <MainLayout name={'notfound-page'}>
      <MetaTags
        section={sectionConst.NOTFOUND}
        description={'Oops! Looks like this page does not exist or it has been removed.'}
      />
      <main>
        <h1>404!</h1>
        <p>Oops! Looks like this page does not exist or it has been removed.</p>
      </main>
    </MainLayout>
  )
}
