import React from 'react'

const ThirdComp = (props) => {
  console.log(props);
  
  return (
    <div>{props.name}</div>
  )
}

export default ThirdComp