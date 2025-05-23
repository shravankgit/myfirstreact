import React, { useState } from 'react'

const FormExample = () => {

    const [userName, setUserName] = useState("warangal")
    
    const [newUserDetails,setNewUserdetails] = useState()

    // it is a anonimous function
    const getUserName = (event) => {
        //    console.log(event.target.value);
        console.log(event);
        
        setUserName(event.target.value)

        // method body
    }

    const userDetails=()=>{
        setNewUserdetails(userName)
    }  
    
    return (
        <section className='formSection' >
            <h2>Hello,{newUserDetails}</h2>
            <div className='inputDiv'>
                {/* <form onSubmit={userdetails}> */}
                    <input type="text" placeholder='Enter your Name' onChange={getUserName} />
                    <br></br>
                    <button className='submitBtn' type='submit' onClick={userDetails}>Submit</button>
                {/* </form> */}
            </div>
        </section>
    )
}

export default FormExample;