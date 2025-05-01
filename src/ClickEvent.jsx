import React, { use } from 'react'
import { useState } from 'react'

const ClickEvent = () => {
    const [number, setNumber] = useState(5)

    const increament = () => {
        if (number < 12){
            setNumber(number + 1)
        }
        
    }

    const decreament = () => {
        if (number > 2) {
            setNumber(number - 1)

        }
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={increament}>Increament</button>
            <button onClick={decreament}>Decreament</button>

        </div>
    )
}

export default ClickEvent