

import React, { useState } from 'react'

const Employee = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [dept, setDept] = useState("");

  // console.log(name, role, email,dept);
  // console.log("name: " + name + " role: " + role + " email: " + email + " dept: " + dept);
  

  const empDetails = { name, role, email, dept }

  const empHandler = async (e) => {
    e.preventDefault()
    console.log("json emp details: " + JSON.stringify(empDetails));

    const response = await fetch("http://localhost:5000/api/emp/add-emp", {
      method: "post",
      headers: {
        "content-Type": "application/json"
      },
      body:JSON.stringify(empDetails)

    })

  }

  return (
    <div className="empForm">
      <div className="section">
        <form onSubmit={empHandler}>
          <label>Employee Name</label><br />
          <input type="text" name="name" className="inputField" onChange={(e) => setName(e.target.value)} /><br />
          <label>Employee Role</label><br />
          <input type="text" name="role" className="inputField" onChange={(e) => setRole(e.target.value)} /><br />
          <label>Employee Email</label><br />
          <input type="email" name="email" className="inputField" onChange={(e) => setEmail(e.target.value)} /><br />
          <label>Employee Department</label><br />
          <input type="text" name="dept" className="inputField" onChange={(e) => setDept(e.target.value)} /><br />
          <button type="submit" className="submitBtn">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Employee