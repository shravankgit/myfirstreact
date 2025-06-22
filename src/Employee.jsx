

import React from 'react'

const Employee = () => {
  return (
    <div className="empForm">
        <div className="section">
            <form>
                <label>Employee Name</label>
                <input type="text"/>
                <label>Employee Role</label>
                <input type="text"/>
            </form>
        </div>
    </div>
  )
}

export default Employee