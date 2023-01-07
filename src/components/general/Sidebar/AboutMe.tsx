import ExternalLink from "../ExternalLink"
import SVGLogo from "../SVGLogo"
import { iconConst } from "../../../constants/route.const"
import { profileConst, socialConst } from "../../../constants/profile.const"

export default function AboutMe() {
  return (
    <div className="sidebar aboutme">
      <h1>About Me</h1>
      <p>
        My name is {profileConst.name}, but for those English speakers you can
        just call me {profileConst.altName}. I'm from {profileConst.origin} and
        currently I am living and working in {profileConst.location} as a{" "}
        {profileConst.occupation}.
      </p>
      <ExternalLink href={socialConst.GITHUB}>
        <SVGLogo
          imgClass={"social-icon prevent-highlight"}
          path={iconConst.GITHUB}
        />
      </ExternalLink>
      <ExternalLink href={socialConst.LINKEDIN}>
        <SVGLogo
          imgClass={"social-icon prevent-highlight"}
          path={iconConst.LINKEDIN}
        />
      </ExternalLink>
      <ExternalLink href={socialConst.TWITTER}>
        <SVGLogo
          imgClass={"social-icon prevent-highlight"}
          path={iconConst.TWITTER}
        />
      </ExternalLink>
    </div>
  )
}
