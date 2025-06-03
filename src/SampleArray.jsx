import React from 'react'

let sampleList = ["apple", "mango", 35, {userName: "kalyan"}];

let fruits = ["apple", "mango"]

let players = [
    {
        cricket: "dhoni",
        tennis: "sania"
    }
]

const SampleArray = () => {
  return (
    <div>
        {/* {sampleList[0]}
        <h2> {sampleList[1]} </h2>
        <h2> {sampleList[3]} </h2> */}
        
        {players.map((item) => {
            return (
                <div>
                    <h2>my fav cri is {item.cricket}</h2>
                    <h2>my fav tenn is {item.tennis}</h2>
                 </div>
            )
        })}
        
    </div>
  )
}

export default SampleArray