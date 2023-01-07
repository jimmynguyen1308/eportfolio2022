import Image from "../general/Image"
import Button from "../general/Button"
import SVGLogo from "../general/SVGLogo"

export default function Cover() {
  return (
    <div className="homepage-cover">
      <Image imgClass="cover-img" folder="images" file="homepage-cover.jpg" />
      <div className="cover-text">
        <p>
          Greetings!
          <br />
          My name is <mark>Nhat K. "James" Nguyen</mark>.
        </p>
        <span>blogger | frontend developer | detail obsessor</span>
        <br />
        <br />
        <a
          href="/pdfs/NhatNguyen-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            buttonClass="download-resume-btn"
            handleClick={() => {}}
            text="Download My Resume"
            icon={<SVGLogo imgClass={"icon-resume"} path={"icon-pdf"} />}
          />
        </a>
      </div>
    </div>
  )
}
