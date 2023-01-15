import React, { useEffect, useState } from 'react'
import { Steps, Button } from './components'
import { Step1, Step2, Step3, Review } from './pages'
import Context from './context'
import { FormDataProps, SelectedDish } from './context/interface'
import { useStore } from './context/store'

const steps = [
  {
    title: 'Step1',
    content: <Step1 />,
  },
  {
    title: 'Step2',
    content: <Step2 />,
  },
  {
    title: 'Step3',
    content: <Step3 />,
  },
  {
    title: 'Review',
    content: <Review />,
  },
]

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const { state, dispatch } = useStore({} as FormDataProps)
  const { meal, peopleNum, restaurant, dishes } = state
  const [errorTips, setErrorTips] = useState('')

  useEffect(() => {
    setErrorTips('')
  }, [meal, peopleNum, restaurant, dishes, currentPage])

  const next = () => {
    if (getErrorTips()) {
      return
    }
    setCurrentPage(currentPage + 1)
  }

  const prev = () => {
    setCurrentPage(currentPage - 1)
  }

  const items = steps.map((item) => item.title)

  /**
   * submit data
   */
  const handleSubmit = () => {
    console.log(state)
  }

  const handleStepItemClick = (current: number) => {
    if (current > currentPage && getErrorTips()) return
    setCurrentPage(current)
  }

  const getErrorTips = () => {
    switch (currentPage) {
      case 1:
        if (!meal) {
          setErrorTips('Please select a meal')
          return true
        }
        break
      case 2:
        if (!restaurant) {
          setErrorTips('Please select a restaurant')
          return true
        }
        break
      case 3:
        if (!dishes || dishes.length === 0) {
          setErrorTips('Please select Dishes')
          return true
        }
        if (dishes && dishes.length > 0) {
          const total = dishes.reduce(
            (total: number, current: SelectedDish) => {
              return total + current.count
            },
            0
          )
          if (total < peopleNum) {
            setErrorTips(
              'The total number of dishes should be greater or equal to the number of people selected'
            )
            return true
          }
        }
        break

      default:
        break
    }
  }

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="container mx-auto m-8">
        <Steps
          items={items}
          current={currentPage}
          onItemClick={handleStepItemClick}
        />
        <div>{steps[currentPage - 1].content}</div>
        <div className="text-red-500 pt-16">{errorTips}</div>
        <div className="flex justify-end mt-16">
          {currentPage > 1 && <Button onClick={prev}>Previous</Button>}
          {currentPage < steps.length && (
            <div className="ml-auto">
              <Button onClick={next}>Next</Button>
            </div>
          )}
          {currentPage === steps.length && (
            <div className="ml-auto">
              <Button onClick={handleSubmit}>Submit</Button>
            </div>
          )}
        </div>
      </div>
    </Context.Provider>
  )
}

export default App
