import React from 'react'
import ClickEvent from './ClickEvent'
import FormExample from './FormExample'

import "./App.css"
import SampleArray from './SampleArray'

export const App = () => {
  return (
    <div className= "contain">
      <h1>Welcome to react
        
        {/* <ClickEvent /> */}
      </h1>
      {/* <FormExample/> */}
      <SampleArray/>
    </div>
  )
}

export default App