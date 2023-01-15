import React, { memo } from 'react'

interface Props {
  children: React.ReactNode
  onClick?: () => void
}
const Button = memo((props: Props) => {
  const { onClick } = props
  return (
    <div
      className="cursor-default text-center border-2 border-black w-20 shadow-lg hover:bg-indigo-300"
      onClick={onClick}
    >
      {props.children}
    </div>
  )
})

Button.displayName = 'Button'

export default Button
