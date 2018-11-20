export const ADD = 'ADD'
export const FILTER = 'FILTER'

let num = 0

export const add = text => ({
  type: ADD,
  id: num++,
  text
})

export const setFilter = filter => ({
  type: FILTER,
  filter
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}