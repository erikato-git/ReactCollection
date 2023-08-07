
import React, { useEffect, useState } from 'react'

function Users() {
    const [users,setUsers] = useState([])
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data)=> {
            setUsers(data)
        })
    },[])

    return (
        <div>
            <ul>
                {
                    users.map((user) => {
                        return <li key={user.email}>{user.username}, {user.email}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Users