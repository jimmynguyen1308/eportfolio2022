interface SVGLogoProps {
  imgName: string,
  path: string
}

export default function SVGLogo(props: SVGLogoProps) {
  const { imgName, path } = props
  return (
    <img className={'svg-logo ' + imgName} src={`/svgs/${path}.svg`} alt={path} />
  )
}
