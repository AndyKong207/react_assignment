import React, { memo } from 'react'

interface Props {
  onClick: () => void
}

const AddButton = memo((props: Props) => {
  const { onClick } = props
  return (
    <div
      onClick={onClick}
      className="rounded-full h-8 w-8 border-2 border-black flex items-center justify-center bg-gray-300 hover:bg-gray-100"
    >
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
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </div>
  )
})

AddButton.displayName = 'AddButton'

export default AddButton
