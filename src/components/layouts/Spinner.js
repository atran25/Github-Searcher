import React from 'react'
import spinner from './assets/spinner.jpg'

const Spinner = () => {
    return (
        <div className="w-100 mx-auto">
            <img witdth={150} className="text-center mx-auto" src={spinner} alt="Loading"/>
        </div>
    )
}

export default Spinner
