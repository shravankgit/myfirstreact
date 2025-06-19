import React, { useState } from 'react'

const userDetails = "https://jsonplaceholder.typicode.com/posts"

    console.log("I am link from api", userDetails);


const UserPage = () => {
    const [user, setUser] = useState([])


    const userHandler = async () => {
        const response = await fetch(userDetails)
        const newData = await response.json()
        setUser(newData)
    }

    console.log(userHandler());


    return (
        <div>UserPage</div>
    )
}

export default UserPage