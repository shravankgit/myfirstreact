import React, { useState } from 'react'

const FormExample = () => {

    const [userName, setUserName] = useState("warangal")

    // it is a anonimous function
    const getUserName = (event) => {
        //    console.log(event.target.value);
        console.log(event);
        
        setUserName(event.target.value)

        // method body
    }

    return (
        <section className='formSection' >
            <h2>Hello, {userName}</h2>
            <div className='inputDiv'>
                {/* <form onSubmit={userdetails}> */}
                    <input type="text" placeholder='Enter your Name' onChange={getUserName} />
                    <br></br>
                    <button className='submitBtn' type='submit'>Submit</button>
                {/* </form> */}
            </div>
        </section>
    )
}

export default FormExample;