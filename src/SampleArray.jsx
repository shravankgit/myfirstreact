import React from 'react'

import { userData } from './data';


let fruits = ["apple", "mango"]

console.log(userData);

let players = [
    {
        cricket: "Dhoni",
        tennis: "sania",
        chess: "anand",
        hockey: "dyan chand"
    },
    {
        cricket: "sachin",
        tennis: "manasa",
        chess: "anusha",
        hockey: "kalyani"
    },
    {
        cricket: "virat",
        tennis: "mmt",
        chess: "anandhi",
        hockey: "chandhu"
    }
];

console.log("list size: " + players.length);


// const SampleArray = () => {
//     return (
//         <div>

//             {players.map((item) => {
// console.log("item value: " + item);

//                 return (
//                     <div>
//                         <h2>my fav cricketer {item.cricket}</h2>
//                         <h2>my fav player in tennis {item.tennis}</h2>
//                         <h2>my fav player in chess {item.chess}</h2>
//                         <h2>my fav player in hockey {item.hockey}</h2>
//                     </div>
//                 )
//             })}

//             {players[0].chess} <br></br>
//             {players[1].tennis}  <br></br>
//             {players[2].hockey} <br></br>

//         </div>
//     )
// }


const SampleArray = () => {
    return (
        <div>
            {userData.map((user, index) => {
                return (
                    <div key={index} style={{ border: "1px solid blue" }}>
                        <div>{user.username}</div>
                        <div>{user.email}</div>
                        <div>{user.address.street}</div>

                    </div>
                )
            })}
        </div>
    )
}





export default SampleArray