import React, { useState, useEffect } from 'react'

const userDetails = "https://jsonplaceholder111.typicode.com/posts"

const UserPage = () => {
    const [user, setUser] = useState([])

    const userHandler = async () => {

        try {
            const response = await fetch(userDetails)
            const newData = await response.json()
            setUser(newData)
        } catch (error) {
            console.log("error got: " + error);
            alert("error in  gettig data")
        }
    }

    useEffect(() => {
        console.log(userHandler());
    }, []);

    console.log(user);
    console.log("total user size: " + user.length);

    return (
        <div>
            {user.map((item) => {
                return (
                    <div className='userSection'>
                        <h3>{item.userId}</h3>
                        <h3>{item.id}</h3>
                        <h2 style={{ color: "blue" }}>{item.title}</h2>
                        <h3 style={{ color: "green" }}>{item.body}</h3>

                    </div>
                )
            })}
        </div>
    )
};

export default UserPage