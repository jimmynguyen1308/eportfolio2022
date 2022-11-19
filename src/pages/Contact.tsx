import MainLayout from '../layouts/MainLayout'
import MetaTags from '../components/general/MetaTags'
import { sectionConst } from '../constants/route.const'

export default function Contact() {
  return (
    <MainLayout name={'contact-page'}>
      <MetaTags
        section={sectionConst.CONTACT}
        description={'Welcome! My name is Nhat K. "James" Nguyen.'}
      />
      <main>
        <h1>Contact</h1>
      </main>
    </MainLayout>
  )
}