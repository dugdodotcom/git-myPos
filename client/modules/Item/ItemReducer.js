import { ADD_ITEM, ADD_ITEMS, SET_ITEM, DELETE_ITEM } from './ItemActions'

// Initial State
const initialState = { 
  data: []
 }

const ItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        data: [action.item, ...state.data]
      }

    case SET_ITEM:
      const updatedIndex = state.data.findIndex(
        item => item.id === action.item.id
      )
      return {
        data: [
          ...state.data.slice(0, updatedIndex),
          action.item,
          ...state.data.slice(updatedIndex + 1)
        ]
      }

    case ADD_ITEMS:
      return {
        data: action.items
      }

    case DELETE_ITEM:
      return {
        data: state.data.filter(item => item.id !== action.id)
      }

    default:
      return state
  }
}

/* Selectors */

// Get all posts
export const getItems = state => state.items.data

// Get post by cuid
export const getItem = (state, id) => {
  const found = state.items.data.filter(item => {
    return item.id == id
  })[0]
  return found
}

// Export Reducer
export default ItemReducer
