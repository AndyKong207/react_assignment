import React, { memo, useEffect, useState } from 'react'

interface Props {
  value?: number
  onChange?: (num: number) => void
}
const NumberInput = memo((props: Props) => {
  const { onChange, value = 1 } = props
  const [num, setNum] = useState(value)

  useEffect(() => {
    onChange && onChange(num)
  }, [num])

  const handleNumChange = (isAdd: boolean) => {
    if (isAdd) {
      setNum((prevState) => (prevState < 10 ? (prevState += 1) : 10))
      return
    }
    setNum((prevState) => (prevState > 1 ? (prevState -= 1) : 1))
  }
  return (
    <div className="flex items-center border-2 border-black w-40">
      <div className="flex-1 pl-2 pr-2 text-right select-none">{num}</div>
      <div className="border-l-2 border-black">
        <span
          className="hover:bg-indigo-300 block pl-1 pr-1"
          onClick={() => handleNumChange(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </span>
        <span
          className="hover:bg-indigo-300 block pl-1 pr-1"
          onClick={() => handleNumChange(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>
    </div>
  )
})

NumberInput.displayName = 'NumberInput'

export default NumberInput
