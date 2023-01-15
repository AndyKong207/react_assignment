import React, { memo, useContext } from 'react'
import { Dropdown, NumberInput } from 'src/components'
import Context from 'src/context'

const Step1 = memo(() => {
  const { state, dispatch } = useContext(Context)
  const { meal, peopleNum } = state

  const handleSelect = (item: any) => {
    dispatch({
      type: 'save',
      payload: {
        meal: item.name,
      },
    })
  }

  const handleNumChange = (val: number) => {
    dispatch({
      type: 'save',
      payload: {
        peopleNum: val,
      },
    })
  }
  return (
    <div>
      <div className="mb-8 mt-8 select-none">Please Select a meal</div>
      <Dropdown
        menu={[
          {
            id: 'breakfast',
            name: 'breakfast',
          },
          {
            id: 'lunch',
            name: 'lunch',
          },
          {
            id: 'dinner',
            name: 'dinner',
          },
        ]}
        value={meal}
        onChange={handleSelect}
      />
      <div className="mb-8 mt-8 select-none">Please Enter Number of people</div>
      <NumberInput value={peopleNum} onChange={handleNumChange} />
    </div>
  )
})

Step1.displayName = 'Step1'

export default Step1
