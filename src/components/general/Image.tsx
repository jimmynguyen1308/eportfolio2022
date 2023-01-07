interface ImageProps {
  imgClass: string
  folder: string
  file: string
  abbr?: string
}

export default function Image(props: ImageProps) {
  const { imgClass, folder, file, abbr } = props
  if (abbr)
    return (
      <abbr title={abbr}>
        <img
          className={"prevent-highlight " + imgClass}
          src={`/${folder}/${file}`}
          alt={file}
        />
      </abbr>
    )
  return (
    <img
      className={"prevent-highlight " + imgClass}
      src={`/${folder}/${file}`}
      alt={file}
    />
  )
}
