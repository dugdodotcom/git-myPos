import {
  ADD_CATEGORY,
  ADD_CATEGORIES,
  SET_CATEGORY,
  DELETE_CATEGORY
} from './CategoryActions'

// Initial State
const initialState = { data: [] }

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        data: [action.category, ...state.data]
      }

    case SET_CATEGORY:
      const updatedIndex = state.data.findIndex(
        category => category.id === action.category.id
      )
      return {
        data: [
          ...state.data.slice(0, updatedIndex),
          action.category,
          ...state.data.slice(updatedIndex + 1)
        ]
      }

    case ADD_CATEGORIES:
      return {
        data: action.categories
      }

    case DELETE_CATEGORY:
      return {
        data: state.data.filter(category => category.id !== action.id)
      }

    default:
      return state
  }
}

/* Selectors */

// Get all posts
export const getCategories = state => state.categories.data

// Get post by cuid
export const getCategory = (state, id) => {
  const found = state.categories.data.filter(category => {
    return category.id == id
  })[0]
  return found
}

// Export Reducer
export default CategoryReducer
