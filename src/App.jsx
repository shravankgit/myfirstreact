



import React from 'react'
import './App.css'
import FirstComp from './props_container/FirstComp'
import SecondComp from './props_container/SecondComp'
import ThirdComp from './props_container/ThirdComp'
import FourthComp from './props_container/FourthComp'
import StateMgm from './StateMgm'

let a = "grap"
let b = "banana"

const user={
  name:"mounika",
  city:"nslpt",
  area:"busstop"
}

const myCar = {
  model: "maruti",
  year: 2024,
  dealer:"nixon",
  color: "black"
}

function App() {
  return (

    <div className="container">
      {/* <FirstComp name={user.name} />
      <SecondComp name={user.city} />
      <ThirdComp car={myCar} />
      <FourthComp name="Ashritha" /> */}
      
      <StateMgm />
      
      
      
    </div>


    // <section>
    //   <h1> I like {a},{b} </h1>
    // </section>

  )
}

export default App



// import logo from './logo.svg';
// import './App.css';
// import Apple from './Apple';
// import Sample from './example/Sample';
// import './sample.css'

// function App() {
//   return (
//     <div className="App">
//       <Apple></Apple>
//       <Sample></Sample>
//       <h1>This is sampl css file</h1>
//     </div>
//   );
// }

// export default App;
