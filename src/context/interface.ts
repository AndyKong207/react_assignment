export interface DropdownItemProps {
  id: string
  name: string
  [key: string]: any
}

type mealType = 'breakfast' | 'lunch' | 'dinner'

export interface DishProps {
  id: number
  name: string
  restaurant: string
  availableMeals: Array<mealType>
}

export interface SelectedDish {
  name: string
  count: number
}

export interface FormDataProps {
  meal: 'breakfast' | 'lunch' | 'dinner'
  peopleNum: number
  restaurant: string
  dishes: SelectedDish[]
}