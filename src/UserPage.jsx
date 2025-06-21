import React, { useState, useEffect } from 'react'

const userDetails = "https://jsonplaceholder.typicode.com/posts"

// console.log("I am link from api", userDetails);


const UserPage = () => {
    const [user, setUser] = useState([])


    const userHandler = async () => {
        const response = await fetch(userDetails)
        const newData = await response.json()
        setUser(newData)

    }
    
            useEffect(() => {
            console.log(userHandler());
        }, []);

    console.log(user);

    return (
        <div>
            {user.map((item) => {
                return (
                    <div className='userSection'>
                        {item.title}
                    </div>
                )
            })}
        </div>
    )
};

export default UserPage