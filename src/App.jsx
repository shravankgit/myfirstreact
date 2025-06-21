import React from 'react'
import ClickEvent from './ClickEvent'
import FormExample from './FormExample'

import UserPage from './UserPage'

import "./App.css"
import SampleArray from './SampleArray'
import Template from './Template'

export const App = () => {
  return (
    <div className= "contain">
      <h1>Welcome to react
        
        {/* <ClickEvent /> */}
      </h1>
      {/* <FormExample/> */}
      {/* <SampleArray/> */}
{/* <Template/> */}
      <UserPage/>
    </div>
  )
}

export default App