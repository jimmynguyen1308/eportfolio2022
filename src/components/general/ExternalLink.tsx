import React from 'react'
interface ExternalLinkProps {
  href: string
  children?: string | React.ReactNode
}

export default function ExternalLink(props: ExternalLinkProps) {
  const { href, children } = props
  return (
    <a href={href} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  )
}
