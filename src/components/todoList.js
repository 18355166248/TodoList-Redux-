import React from 'react'
import Li from './li'

const TodoList = ({list}) => {
  console.log(list)
  return (
    <ul style={{marginTop: '20px'}}>
      {
        list.map(v => 
          <Li {...v} key={v.id}></Li>
          )
      }
    </ul>
  )
}

export default TodoList