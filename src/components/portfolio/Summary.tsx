import Image from "../general/Image"
import TechList from "./TechList"
import { profileConst } from "../../constants/profile.const"

export default function Summary() {
  return (
    <div className="portfolio-section portfolio-summary">
      <Image
        imgClass="summary-portrait"
        folder="images"
        file="portrait-self.jpg"
      />
      <h1>About Me</h1>
      <p>
        My name is <b>{profileConst.name}</b>, but for those English speakers
        you can just call me <b>{profileConst.altName}</b>. I'm from{" "}
        {profileConst.origin} and I am currently living and working in{" "}
        <b>{profileConst.location}</b> as a <b>{profileConst.occupation}</b>.
      </p>
      <p>
        For the last <b>{profileConst.experience} years</b>, I have been
        practicing and developing essentially <b>{profileConst.language}</b>{" "}
        with the persuit of the <b>web development carreer</b>. Having some
        rediculous attention to details, I enjoy building frontend elements to
        establish and/or enhance user interaction and experience towards the
        apps and websites.
      </p>
      <p>Some technologies used including:</p>
      <TechList />
    </div>
  )
}
