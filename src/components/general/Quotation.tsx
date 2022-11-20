interface QuotationProps {
  quoteClass: string,
  quote: string,
  author: string
}

export default function Quotation(props: QuotationProps) {
  const { quoteClass, quote, author } = props
  return (
    <blockquote className={'quotation ' + quoteClass}>
      {quote}
      <p>{author}</p>
    </blockquote>
  )
}
