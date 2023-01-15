import { useReducer } from 'react'
import { FormDataProps } from './interface'

const reducer = (
  state: FormDataProps,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case 'save':
      return {
        ...state,
        ...action.payload,
      }
  }
}
export const useStore = (initialState: FormDataProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return { state, dispatch }
}
