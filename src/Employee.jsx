
import React, { useState } from 'react'

const Employee = () => {

    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [dept, setDept] = useState("");
    
    const empDetails = {
        name, role, email, dept
    }
    
    const dataHandler = (e) => {
        e.preventDefault();
        try {
            console.log("data posted successfully");
            console.log(0/0);
         } catch (error) {
            console.log(error);
            
            console.log("data posted unsuccessfull");
        }
        
        console.log(empDetails);
        
    };
    
    
    return (
        <div className="empForm">
            <div className="section">
                <form onSubmit={dataHandler}>
                    <label>Employee Name</label><br />
                    <input type='text' name='name' onChange={(e) => setName(e.target.value)}></input><br />
                    <label>Employee role</label><br />
                    <input type='text' name='role' onChange={(e) => setRole(e.target.value)}></input><br />

                    <label>Employee email</label><br />
                    <input type='text' name='email' onChange={(e) => setEmail(e.target.value)}></input><br />

                    <label>Employee dept</label><br />
                    <input type='text' name='dept' onChange={(e) => setDept(e.target.value)}></input><br />


                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Employee
