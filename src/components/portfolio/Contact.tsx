import ExternalLink from "../general/ExternalLink"
import SVGLogo from "../general/SVGLogo"
import { contactConst } from "../../constants/profile.const"

export default function Contact() {
  return (
    <div className="portfolio-section portfolio-contact">
      <h1>Contact</h1>
      <p>
        Want to reach out? There are few ways for you to contact me, just click
        on whichever you prefer:
      </p>
      <ExternalLink href={contactConst.PHONE[0]}>
        <SVGLogo imgClass="icon-contact prevent-highlight" path="icon-phone" />
        {contactConst.PHONE[1]}
      </ExternalLink>
      <ExternalLink href={contactConst.EMAIL[0]}>
        <SVGLogo imgClass="icon-contact prevent-highlight" path="icon-mail" />
        {contactConst.EMAIL[1]}
      </ExternalLink>
      <ExternalLink href={contactConst.LINKEDIN[0]}>
        <SVGLogo
          imgClass="icon-contact prevent-highlight"
          path="icon-linkedin"
        />
        {contactConst.LINKEDIN[1]}
      </ExternalLink>
      <ExternalLink href={contactConst.GITHUB[0]}>
        <SVGLogo imgClass="icon-contact prevent-highlight" path="icon-github" />
        {contactConst.GITHUB[1]}
      </ExternalLink>
      <ExternalLink href={contactConst.TWITTER[0]}>
        <SVGLogo
          imgClass="icon-contact prevent-highlight"
          path="icon-twitter"
        />
        {contactConst.TWITTER[1]}
      </ExternalLink>
    </div>
  )
}
