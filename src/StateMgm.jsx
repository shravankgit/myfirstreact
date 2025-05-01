import React from 'react'
import { useState, useEffect } from 'react'



const StateMgm = () => {
    const [city, setCity] = useState("thorrur") //already

    // console.log(city);
    // setCity("Delhi")
    // console.log(city);

    useEffect(() => {
        if (city === "thorrur") {
            setCity("board")
        } else {
            setCity("Hanmakonda")
        }
    }, [])

    return (
        <div>
            <h1>I Live in {city} </h1>
        </div>
    )
}

export default StateMgm