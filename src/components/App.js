import React from 'react'
import AddTodo from '../containers/Addtodo'
import TodoList from '../containers/visibleTodoList'

const App = () => (
  <div style={{padding: '30px'}}>
    <AddTodo/>
    <TodoList/>
  </div>
)

export default App

