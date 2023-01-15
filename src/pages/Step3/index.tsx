import { Dropdown, NumberInput, AddButton } from 'src/components'
import React, { memo, useContext, useState } from 'react'
import Context from 'src/context'
import dishData from 'src/data/dishes.json'
import { DishProps, SelectedDish } from 'src/context/interface'

const Step2 = memo(() => {
  const { state, dispatch } = useContext(Context)
  const { dishes = [] } = state
  const [selectedDished, setSelectedDished] =
    useState<Array<SelectedDish>>(dishes)
  const [currentDish, setCurrentDish] = useState<DishProps>()
  const [servingsNo, setServingsNo] = useState(1)

  const { restaurant } = state
  const dishList = dishData.dishes as unknown as DishProps[]
  const filteredDishes = dishList.filter(
    (item: DishProps) => item.restaurant === restaurant
  )

  const handleDishSelect = (item: DishProps) => {
    setCurrentDish(item)
  }

  const handleNumChange = (num: number) => {
    setServingsNo(num)
  }

  const handleAddDish = () => {
    if (!currentDish) return
    const dishes = selectedDished.splice(0)

    const idx = dishes.findIndex((dish) => dish.name === currentDish?.name)
    if (idx > -1) {
      dishes[idx].count += servingsNo
    } else {
      dishes.push({
        name: currentDish?.name || '',
        count: servingsNo,
      })
    }

    setSelectedDished(dishes)
    dispatch({
      type: 'save',
      payload: {
        dishes,
      },
    })
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-16 mb-12">
        <div>
          <div className="mb-8 mt-8 select-none">Please Select a Dish</div>
          <Dropdown menu={filteredDishes} onChange={handleDishSelect} />
        </div>
        <div>
          <div className="mb-8 mt-8 select-none">
            Please enter no. of servings
          </div>
          <NumberInput onChange={handleNumChange} />
        </div>
      </div>
      <div className="mb-12">
        <AddButton onClick={handleAddDish} />
      </div>
      <ul className="border-2 border-black p-4">
        {selectedDished.map((item) => (
          <li key={item.name}>
            {item.name} - {item.count}
          </li>
        ))}
      </ul>
    </div>
  )
})

Step2.displayName = 'Step2'

export default Step2
