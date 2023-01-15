import { DropdownItemProps } from 'src/context/interface'
import classNames from 'classnames'
import React, { memo, useState } from 'react'

interface Props {
  menu: Array<DropdownItemProps> | any
  value?: string
  onChange?: (item: any) => void
}
const Dropdown = memo((props: Props) => {
  const { menu, onChange, value = '---' } = props
  const [showList, setShowList] = useState(false)
  const [selectedItem, setSelectedItem] = useState()
  const [selectedValue, setSelectedValue] = useState('')

  const handleClick = () => {
    setShowList((prevState) => !prevState)
  }

  const handleChoose = (item: any) => {
    setSelectedItem(item)
    setSelectedValue(item['id'])
    setShowList(false)
    onChange && onChange(item)
  }

  return (
    <div className="relative">
      <div className="flex border-2 border-black" onClick={handleClick}>
        <div className="flex-1 pl-2 pr-2 select-none">
          {' '}
          {selectedItem ? selectedItem['name'] : value}
        </div>
        <div className="border-l-2 border-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      {showList && (
        <ul className="absolute bg-white shadow-lg border-2 border-black w-full">
          {menu.map((item: any) => {
            return (
              <li
                key={item['id']}
                className={classNames(
                  'p-2 cursor-pointer hover:bg-indigo-200',
                  { 'bg-indigo-200': selectedValue === item['id'] }
                )}
                onClick={() => handleChoose(item)}
              >
                {item['name']}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
})

Dropdown.displayName = 'Dropdown'

export default Dropdown
