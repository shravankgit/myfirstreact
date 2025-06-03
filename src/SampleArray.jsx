import React, { use } from 'react'
import { userData } from './data';

let sampleList = ["apple", "mango", 35, { userName: "kalyan" }];

let fruits = ["apple", "mango"]

console.log(userData);


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

            {/* {players.map((item) => {
            return (
                <div>
                    <h2>my fav cri is {item.cricket}</h2>
                    <h2>my fav tenn is {item.tennis}</h2>
                 </div>
            )
        })} */}

            {userData.map((user) => {
                return (
                    <div style={{border: "1px solid blue"}}>
                        <div>{user.username} </div>
                        <div>{user.email} </div>
                        <div>{user.address.street} </div>
                    </div>
                )
            })}

        </div>
    )
}

export default SampleArray