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
    console.log("total user size: "+ user.length);

    return (
        <div>
            {user.map((item) => {
                return (
                    <div className='userSection'>
                       <h3>{item.userId}</h3>
                       <h3>{item.id}</h3>
                       <h2 style={{color:"blue"}}>{item.title}</h2> 
                       <h3 style={{color:"green"}}>{item.body}</h3>
                       
                    </div>
                )
            })}
        </div>
    )
};

export default UserPage