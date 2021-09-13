// import { SET_PRODUCTS, FETCH_PRODUCTS, DELETE_TODO } from "../types/types";

import * as TYPES from '../types/types'
export const productsInitialState = []
console.log('productsInitialState', productsInitialState)
const data = (state = productsInitialState, action) => {
  switch (action.type) {
    case TYPES.SET_PRODUCTS:
      return [...action.payload]
    case TYPES.FETCH_PRODUCTS:
      console.log('FETCH_PRODUCTS', action.payload.id)
      const todoIndex = state.findIndex(
        (updateTodo) => updateTodo.id === action.payload.id,
      )
      console.log('todoIndex', state[todoIndex].name)
      state[todoIndex].name = action.payload.todo
      return [...state]
    case TYPES.DELETE_TODO:
      const data = state.filter((todo) => todo.id !== action.payload)
      console.log('DELETE_TODO', data)
      return [...data]

    default:
      return state
  }
}

export default data
