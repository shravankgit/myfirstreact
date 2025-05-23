import React, { useState } from 'react'

const FormExample = () => {
    
    const[userName,setUserName] =useState("")
    
    // it is a anonimous function
    const getUserName =(event)=>{
    //    console.log(event.target.value);
    setUserName(event.target.value)
        
        // method body
    }
    
    return (
        <section className='formSection' >
            <h2>userName</h2>
            <div className='inputDiv'>
                <input type="text" placeholder='Enter your Name' onChange={getUserName}/>
                <br></br>
                <button className='submitBtn'>Submit</button>
            </div>
        </section>
    )
}

export default FormExample;