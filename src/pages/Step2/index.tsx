import { Dropdown } from 'src/components'
import React, { memo, useContext } from 'react'
import Context from 'src/context'
import dishData from 'src/data/dishes.json'
import { DishProps } from 'src/context/interface'

const Step2 = memo(() => {
  const { state, dispatch } = useContext(Context)
  const { meal, restaurant } = state
  const dishSet = new Set<string>()
  const dishList = dishData.dishes as unknown as DishProps[]
  dishList.forEach((item: DishProps) => {
    if (item.availableMeals.includes(meal)) {
      dishSet.add(item.restaurant)
    }
  })

  const restaurants = Array.from(dishSet).map((item: string) => ({
    id: item,
    name: item,
  }))

  const handleSelect = (item: any) => {
    dispatch({
      type: 'save',
      payload: {
        restaurant: item.name,
      },
    })
  }

  return (
    <div>
      <div className="mb-8 mt-8 select-none">Please Select a Restaurant</div>
      <Dropdown value={restaurant} menu={restaurants} onChange={handleSelect} />
    </div>
  )
})

Step2.displayName = 'Step2'

export default Step2
