import { React, useState, useEffect } from 'react'

const userDetailsApi = "https://jsonplaceholder.typicode.com/posts"



const UserPage = () => {

    const [user, setUser] = useState([])

    const userHandler = async () => {
        const response = await fetch(userDetailsApi);
        console.log(response);
        const jsonData = await response.json()
        console.log(jsonData);
        setUser(jsonData)
    }

    useEffect(() => {
        console.log(userHandler());
    }, []);

    console.log(user);

    return (
        <div>
            
            {
                user.map((item) => {
                    return (
                        <div className="userSection">
                            <h2 style={{color: 'green'}}>{item.title}</h2>
                            <h3 style={{color: 'blue'}}>{item.body}</h3>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default UserPage