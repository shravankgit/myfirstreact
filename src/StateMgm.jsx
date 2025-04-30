import React from 'react'
import { useState } from 'react'



const StateMgm = () => {
    const [city, setCity] = useState("thorrur") //already

    // console.log(city);
    // setCity("Delhi")
    // console.log(city);

    // if (city === "thorrur") { // if thorrur bus found
    //     setCity("board")
    // } else {
    //     setCity("Hanmakonda")
    // }
      
    return (
        <div>
            <h1>I Live in hbhb </h1>
        </div>
    )
}

export default StateMgm