import React, { useEffect, useState } from 'react'
import Spinner from '../layouts/Spinner'
import UserItem from './UserItem'

function UserResults() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
            }
        })

        const data = await res.json()
        setUsers(data)
        setIsLoading(false)
    }
    
    if (!isLoading) {
        return (
            <div className="grid grid-cols-4 gap-4">
                {users.map((user => (<UserItem key={user.id} user={user}/>)))}
            </div>
        )
    } else {
        return <Spinner/>
    }
}

export default UserResults
