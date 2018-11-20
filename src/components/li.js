import React from 'react'

const Li = ({text, completed}) => {
  return (
    <li style={{paddingBottom: '6px', textDecoration: completed ? 'line-through' : 'none'}}
    >{text}</li>
  )
}

export default Li
