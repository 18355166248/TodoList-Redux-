import React from 'react'
import { connect } from 'react-redux'
import { add } from '../action'

const AddTodo = ({ dispatch }) => {
  const btnStyle = {
    display: 'inline-block',
    padding: '5px 10px',
    backgroundColor: '#00c4ff',
    color: '#fff',
    borderRadius: '4px',
    cursor: 'pointer'
  }
  const inputStyle = {
    verticalAlign: 'middle',
    marginRight: '20px',
    height: '27px',
  }
  let input
  return (
    <div>
      <form action="" onSubmit={
        e => {e.preventDefault()
        if (!input.value.trim()) return false 
        dispatch(add(input.value))
        input.value = ''
        }}>
        <input type="text" style={inputStyle} ref={node => input = node}></input>
        <button style={btnStyle} >AddTodo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)