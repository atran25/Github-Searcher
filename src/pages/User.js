import React, { useEffect, useContext} from 'react'
import {FaCode, FaStore, FaUserFriends, FaUsers} from 'react-icons/fa'
import { useParams, Link } from 'react-router-dom'
import Spinner from '../components/layouts/Spinner'
import GithubContext from '../context/github/GithubContext'
import RepoList from '../components/repos/RepoList'
import { getUserInfo } from '../context/github/GithubActions'

const User = () => {
    const { user, repos, isLoading, dispatch} = useContext(GithubContext)

    const params = useParams()

    useEffect(() => {
        dispatch({type: 'SET_LOADING'})
        const getUserData = async () => {
            // const userData = await getUserData(params.login)
            // dispatch({type: 'GET_USER', payload: userData})
            // const userRepos = await getUserRepos(params.login)
            // dispatch({type: 'GET_REPOS', payload: userRepos})
            const userData = await getUserInfo(params.login)
            dispatch({ type: 'GET_USER_DATA', payload: userData})
        }
        getUserData()
    }, [dispatch, params.login])

    const {name, type, avatar_url, location, bio, blog, twitter_username, login, html_url, followers, following, public_repos, public_gists, hireable,} = user

    const fixedLink = (link) => {
        return link.startsWith("http://") || link.startsWith("https://") ?
        link
        : `http://${link}`
    }


    if (isLoading) {
        return <Spinner/>
    }

    return (
        <>
            <div className="w-full mx-auto lg:w-10/12">
                <div className="mb-6">
                    <Link to="/" className="btn btn-ghost">
                        Back to Search
                    </Link>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
                    <div className="custom-card-image mb-6 md:mb-0">
                        <div className="rounded-full drop-shadow-2xl card image-full">
                            <figure>
                                <img src={avatar_url}/>
                            </figure>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="mb-6">
                            <h1 className="text-3xl card-title">
                                {name}
                                <div className="ml-2 mr-1 badge badge-success">
                                    {type}
                                </div>
                                {hireable && (
                                    <div className="mx-1 badge badge-info">Hireable</div>
                                )}
                            </h1>
                            <p>{bio}</p>
                            <div className="mt-4 card-actions">
                                <a href={html_url} target='_blank' rel="noreferrer" className="btn btn-outline">Visit Github Profile</a>
                            </div>
                        </div>

                        <div className="w-full rounded-lg shadow-md bg-base-100 stats">
                            {location && (
                                <div className="stat">
                                    <div className="stat-title text-md">Location</div>
                                    <div className="text-lg stat-value">{location}</div>
                                </div>
                            )}
                            {blog && (
                                <div className="stat">
                                    <div className="stat-title text-md">Website</div>
                                    <div className="text-lg stat-value">
                                        <a href={fixedLink} target="_blank" rel="norefferer">{blog}</a>
                                    </div>
                                </div>
                            )}
                            {twitter_username && (
                                <div className="stat">
                                    <div className="stat-title text-md">Twitter</div>
                                    <div className="text-lg stat-value">
                                        <a href={`https://twitter.com/${twitter_username}`} target="_blank" rel="norefferer">{twitter_username}</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaUsers className="text-3xl md:text-5xl"/>
                        </div>
                        <div className="stat-title pr-5">
                            Followers
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">{followers}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaUserFriends className="text-3xl md:text-5xl"/>
                        </div>
                        <div className="stat-title pr-5">
                            Following
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">{following}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaCode className="text-3xl md:text-5xl"/>
                        </div>
                        <div className="stat-title pr-5">
                            Public Repositories
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">{public_repos}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaStore className="text-3xl md:text-5xl"/>
                        </div>
                        <div className="stat-title pr-5">
                            Gists
                        </div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">{public_gists}</div>
                    </div>
                </div>
                <RepoList repos={repos}/>
            </div>
        </>
    )
}

export default User
