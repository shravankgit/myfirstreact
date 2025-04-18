
import React from 'react'

// Mango is a component
const Mango=()=>{
    return(
        <h2>Mangos are Sweet</h2>
    )
}


const Grapes=()=>{
    return(
        <h2>Grapes are gooood</h2>
    )
}

function Sample() {
  return (
    <h1>Sample
        <Mango></Mango>
        <Grapes></Grapes>
    </h1>
    
  )
}

export default Sample