import React, { useContext } from 'react'
import Spinner from '../layouts/Spinner'
import UserItem from './UserItem'
import GithubContext from '../../context/github/GithubContext'

const UserResults = () => {
    const {users, isLoading} = useContext(GithubContext)
    console.log(isLoading)
    
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
