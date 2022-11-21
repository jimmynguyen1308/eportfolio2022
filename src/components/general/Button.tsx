import React from 'react'

interface ButtonProps {
  buttonClass: string
  handleClick: Function
  text: string
  icon?: React.ReactNode
}

export default function Button(props: ButtonProps) {
  const { buttonClass, handleClick, text, icon } = props
  return (
    <button className={buttonClass + (icon ? ' has-icon' : '')} onClick={() => handleClick()}>
      <span>{text}</span>
      {icon}
    </button>
  )
}
