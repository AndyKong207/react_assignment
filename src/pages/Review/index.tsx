import React, { memo, useContext } from 'react'
import Context from 'src/context'
import { SelectedDish } from 'src/context/interface'

interface DescProps {
  label: string
  children: React.ReactNode
}
const Description = ({ label, children }: DescProps) => (
  <div className="flex mt-4">
    <div className="w-1/2">{label}</div>
    <div className="w-1/2">{children}</div>
  </div>
)

const Review = memo(() => {
  const { state } = useContext(Context)
  const { meal, peopleNum, restaurant, dishes = [] } = state

  return (
    <div>
      <Description label="Meal">{meal}</Description>
      <Description label="No. of People">{peopleNum}</Description>
      <Description label="Restaurant">{restaurant}</Description>
      <Description label="Dishes">
        <ul className="border-2 border-black p-2">
          {dishes?.map((item: SelectedDish) => (
            <li key={item.name}>
              {item.name} - {item.count}
            </li>
          ))}
        </ul>
      </Description>
    </div>
  )
})

Review.displayName = 'Review'

export default Review
