import React from 'react'
import ClickEvent from './ClickEvent'
import FormExample from './FormExample'

import "./App.css"
import SampleArray from './SampleArray'
import TempLit from './TempLit'
import UserPage from './UserPage'
import Employee from './Employee'


export const App = () => {
  return (
    <div>
      <h1>Welcome to react
        
        {/* <ClickEvent /> */}
        {/* <FormExample/> */}
        {/* <SampleArray/> */}
        {/* <TempLit/> */}
        {/* <UserPage/> */}
        <Employee/>
      </h1>
    </div>
  )
}

export default App