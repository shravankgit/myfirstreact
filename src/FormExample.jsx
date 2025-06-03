import { useState } from 'react'

/* 
input -onChange -> getUserName -> newUserDetails = userName(event.target.value)
submit -> getNewUserDetails -> newUserDetails
*/

const FormExample = () => {

    const [userName, setUserName] = useState("warangal")

    const [newUserDetails, setNewUserdetails] = useState("maha")

    // it is a anonimous function
    const getUserName = (event) => {
        //    console.log(event.target.value);
        console.log(event);
        setUserName(event.target.value)

        // method body
    }

    const getUserDetails = (e) => {
        e.preventDefault();
        // if (userName != "mamatha"){
        setNewUserdetails(userName)
        // }
    }

    return (
        <section className='formSection' >
            <h2>Hello,{newUserDetails}</h2>
            <div className='inputDiv'>
                <form>
                    <input type="text" placeholder='Enter your Name' onChange={getUserName} />
                    <br></br>
                    <button className='submitBtn' type='submit' onClick={getUserDetails}>Submit</button>
                </form>
            </div>
        </section>
    )
}

export default FormExample;