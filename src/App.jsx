import React from 'react'
import ClickEvent from './ClickEvent'
import FormExample from './FormExample'

import UserPage from './UserPage'

import "./App.css"
import SampleArray from './SampleArray'
import Template from './Template'
import TrainDataRender from './TrainDataRender'
import Employee from './Employee'
import Circuit from './Circuit'
import StudentRegistrationForm from './StudentRegistrationForm'
import MultiState from './MultiState'
import Counter from './Counter'
import  FirstPage from './routing/FirstPage'
import SecondPage from './routing/SecondPage'
import ThirdPage from './routing/ThirdPage'
import FourthPage from './routing/FourthPage'


export const App = () => {
  return (
    <div className= "contain">
      
      {/* <FormExample/> */}
      {/* <SampleArray/> */}
{/* <Template/> */}
      {/* <UserPage/> */}
      {/* <TrainDataRender/> */}
      {/* <Employee/> */}
      {/* <Circuit/> */}
      {/* <MultiState/> */}
      {/* <Counter/> */}
      <FirstPage/>
      <SecondPage/>
      <ThirdPage/>
      <FourthPage/>
      
      
       {/* <StudentRegistrationForm></StudentRegistrationForm> */}
    </div>
  )
}

export default App