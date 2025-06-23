

import React, { useState } from 'react'

const Employee = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [dept, setDept] = useState("");

  // console.log(name, role, email,dept);

  const empDetails = { name, role, email, dept } 

  const empHandler = async (e) => {
    e.preventDefault()
    console.log(empDetails);

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
          <input type="text" name="name" onChange={(e) => setName(e.target.value)} /><br />
          <label>Employee Role</label><br />
          <input type="text" name="role" onChange={(e) => setRole(e.target.value)} /><br />
          <label>Employee Email</label><br />
          <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} /><br />
          <label>Employee Department</label><br />
          <input type="text" name="dept" onChange={(e) => setDept(e.target.value)} /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Employee