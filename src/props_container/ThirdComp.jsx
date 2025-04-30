import React from 'react'

const ThirdComp = (props) => {
  console.log(props);
  const {model,year,dealer,color} = props.car;
  
  return (
    <div>
      <div>Third Comp Starting...</div>
      <div>{model}</div>
      <div>{year}</div>
      <div>{dealer}</div>
      <div>{color}</div>
      <div>Third Comp Ending... </div>
    </div>
  )
}

export default ThirdComp