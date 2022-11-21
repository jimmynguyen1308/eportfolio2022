import { Helmet } from 'react-helmet'
import Logo from './logo.jpg'

interface MetaTagsProps {
  section?: string
  description: string
  image?: string
}

const SiteTitle = "JimmyNguyen1308"
const SiteUrl = "jimmynguyen1308.net"

export default function MetaTags(props: MetaTagsProps) {
  const { section, description, image } = props

  let title = section || "Home"
  let img = ""

  section && section!=="Home" ? title+=` | ${SiteTitle}` : title=`${SiteTitle}`
  image ? img = image : img = Logo

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="icon" href={Logo} />
      <link rel="apple-touch-icon" href={`/images/portrait-self.jpg`} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" viewport-fit="cover" />
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" itemProp="image" content={img} />
      <meta property="og:url" content={SiteUrl} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" itemProp="image" content={img} />
      <meta property="twitter:url" content={SiteUrl} />
    </Helmet>
  )
}
