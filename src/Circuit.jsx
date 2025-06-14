import React, { useState } from 'react'

const Circuit = () => {
    
    const [game, setGame] = useState(true);
    
    const MyGame = () => {
        return (
            <div>
                <h2>I like dd</h2>
            </div>
        )
    }
    
  return (
    <div>
        {/* <h2>dswad2we</h2> */}
        {game && <div>I like cricket</div>}
        {game && <MyGame/>}
    </div>
  )
}

export default Circuit