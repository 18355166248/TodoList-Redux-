import { combineReducers } from 'redux'
import todo from './todo'
import filter from './filter'

const TodoReducer = combineReducers({
  todo,
  filter
})

export default TodoReducer