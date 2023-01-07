import MainLayout from "../layouts/MainLayout"
import MetaTags from "../components/general/MetaTags"
import Contacts from "../components/portfolio/Contact"
import { sectionConst } from "../constants/route.const"

export default function Contact() {
  return (
    <MainLayout name={"contact-page"} aside={false}>
      <MetaTags
        section={sectionConst.CONTACT}
        description={'Welcome! My name is Nhat K. "James" Nguyen.'}
      />
      <Contacts />
    </MainLayout>
  )
}
