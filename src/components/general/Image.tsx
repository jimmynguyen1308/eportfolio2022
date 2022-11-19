interface ImageProps {
  imgClass: string,
  folder: string,
  file: string,
}

export default function Image(props: ImageProps) {
  const { imgClass, folder, file } = props
  return (
    <img 
      className={'prevent-highlight ' + imgClass}
      src={`/${folder}/${file}`}
      alt={file}
    />
  )
}
