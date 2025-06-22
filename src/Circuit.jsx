import React, {useState} from 'react'

const Circuit = () => {
    
    const [game, setGame] = useState(true)
    
    const MyGame = ()=>{
        return(
            <div>
                <h2>i like Circket Dhoni</h2>
            </div>
        )
    }
    
    return (
        <div>
            {/* {game && <div>I like circket</div> } */}
            {game && <MyGame/>}
        </div>
    )
}

export default Circuit