



import React from 'react'
import './App.css'
import FirstComp from './props_container/FirstComp'
import SecondComp from './props_container/SecondComp'
import ThirdComp from './props_container/ThirdComp'
import FourthComp from './props_container/FourthComp'

let a = "grap"
let b = "banana"


function App() {
  return (

    <div className="container">
      <FirstComp />
      <SecondComp />
      <ThirdComp />
      <FourthComp />
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
