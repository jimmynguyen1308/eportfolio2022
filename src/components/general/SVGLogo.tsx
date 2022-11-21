interface SVGLogoProps {
  imgClass: string
  path: string
  handleClick?: Function
}

export default function SVGLogo(props: SVGLogoProps) {
  const { imgClass, path, handleClick } = props
  return (
    <img
      className={'svg-logo ' + imgClass}
      src={`/svgs/${path}.svg`} alt={path}
      onClick={() => {handleClick && handleClick()}}
    />
  )
}
