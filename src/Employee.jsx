import React, { useState } from 'react';

const Employee = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [dept, setDept] = useState("");
  const [statusMessage, setStatusMessage] = useState(""); // New state for message
  const [isError, setIsError] = useState(false); // New state for error handling

  const empDetails = { name, role, email, dept };

  const empHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/emp/add-emp", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(empDetails)
      });

      if (response.ok) {
        setStatusMessage("Employee submitted successfully!");
        setIsError(false);
        // optionally, reset form
        setName(""); setRole(""); setEmail(""); setDept("");
      } else {
        setStatusMessage("Error: Unable to submit employee.");
        setIsError(true);
      }
    } catch (error) {
      setStatusMessage("Network error: Please try again later.");
      setIsError(true);
    }
  };

  return (
    <div className="empForm">
      <div className="section">
        <h2 className='empTitle'>Employee Registration Form</h2>
        <form onSubmit={empHandler}>
          <label>Employee Name</label><br />
          <input type="text" value={name} className="inputField" onChange={(e) => setName(e.target.value)} /><br />
          <label>Employee Role</label><br />
          <input type="text" value={role} className="inputField" onChange={(e) => setRole(e.target.value)} /><br />
          <label>Employee Email</label><br />
          <input type="email" value={email} className="inputField" onChange={(e) => setEmail(e.target.value)} /><br />
          <label>Employee Department</label><br />
          <input type="text" value={dept} className="inputField" onChange={(e) => setDept(e.target.value)} /><br />
          <button type="submit" className="submitBtn">Submit</button>
        </form>
        {/* Conditional message rendering */}
        {statusMessage && (
          <p style={{ color: isError ? "red" : "green", marginTop: "10px" }}>
            {statusMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Employee;
