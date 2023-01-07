import Button from "../Button"
import SVGLogo from "../SVGLogo"

export default function BackToTop() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <Button
      buttonClass="back-to-top-btn"
      handleClick={handleClick}
      text=""
      icon={<SVGLogo imgClass={"icon-backtotop"} path={"icon-next-arrow"} />}
    />
  )
}
