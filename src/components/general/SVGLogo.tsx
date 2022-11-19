interface SVGLogoProps {
  imgClass: string,
  path: string
}

export default function SVGLogo(props: SVGLogoProps) {
  const { imgClass, path } = props
  return (
    <img className={'svg-logo ' + imgClass} src={`/svgs/${path}.svg`} alt={path} />
  )
}
