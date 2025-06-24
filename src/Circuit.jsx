import React, { useState } from 'react'

// const Circuit = () => {

//     const [game, setGame] = useState(true)

//     const MyGame = ()=>{
//         return(
//             <div>
//                 <h2>I like Circketer Dhoni</h2>
//             </div>
//         )
//     }

//     return (
//         <div>
//             {/* {game && <div>I like circket</div> } */}
//             {game && <MyGame/>}
//         </div>
//     )
// }




const one = ["apple", "mango"]
const two = ["grapes", "orange"]
const three = ["banana", "pinapple"]

const fruits = [...one, ...two, ...three]

console.log(fruits);


const obj1 = ["a:1", "b:2"]
const obj2 = ["c:3", "d:4"]
const obj3 = ["e:5", "f:6"]

const total = [...obj1, ...obj2, ...obj3]

console.log(total);


const Circuit = () => {
    return (
        <div>Circuit</div>
    )
}

export default Circuit