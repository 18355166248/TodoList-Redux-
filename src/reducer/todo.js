import { ADD } from '../action'

const todo = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, {
        id: action.id,
        text: action.text,
        completed: false
      }]
    default:
      return state
  }
}

export default todo