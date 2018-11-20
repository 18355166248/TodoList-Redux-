import { FILTER, VisibilityFilters } from '../action'

const Filter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type){
    case FILTER:
      return action.filter
    default:
      return state
  }
}

export default Filter