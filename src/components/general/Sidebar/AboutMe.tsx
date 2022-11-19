import ExternalLink from '../ExternalLink'
import SVGLogo from '../SVGLogo'
import { socialConst, iconConst } from '../../../constants/route.const'

export default function AboutMe() {
  const isHomepage: boolean = (window.location.pathname==='/')

  return (
    <div className='sidebar aboutme'>
      <h1>{isHomepage ? 'Socials' : 'About Me'}</h1>
      {isHomepage
        ? <p>Wanna get parasocial? You can have a quickie on these three (not too personal though)</p>
        : <p>My name is Nhat, but for those English speakers you can just call me James. I'm from Vietnam 🇻🇳 and currently I am living and working in Sydney, Australia 🇦🇺 as a frontend web developer.</p>
      }
      <ExternalLink href={socialConst.GITHUB}>
        <SVGLogo
          imgClass={'social-icon prevent-highlight'}
          path={iconConst.GITHUB}
        />
      </ExternalLink>
      <ExternalLink href={socialConst.LINKEDIN}>
        <SVGLogo
          imgClass={'social-icon prevent-highlight'}
          path={iconConst.LINKEDIN}
        />
      </ExternalLink>
      <ExternalLink href={socialConst.TWITTER}>
        <SVGLogo
          imgClass={'social-icon prevent-highlight'}
          path={iconConst.TWITTER}
        />
      </ExternalLink>
    </div>
  )
}
