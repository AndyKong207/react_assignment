import React, { memo } from 'react'
import classNames from 'classnames'
interface Props {
  current: number
  items: Array<string>
  onItemClick?: (current: number) => void
}

const Steps = memo((props: Props) => {
  const { items, current = 1, onItemClick } = props

  return (
    <ul className="grid grid-cols-4 divide-x-2 divide-black-500 border-2 border-black shadow-lg font-bold text-center mb-16">
      {items.map((item: string, index: number) => (
        <li
          onClick={() => onItemClick && onItemClick(index + 1)}
          key={index}
          className={classNames('cursor-default border-black ', {
            'bg-indigo-300': current === index + 1,
          })}
        >
          {item}
        </li>
      ))}
    </ul>
  )
})

Steps.displayName = 'Steps'

export default Steps
