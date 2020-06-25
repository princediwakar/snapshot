import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = ({ handleClick }) => {
    
    return (
        <div className="flex flex-col md:flex-row justify-between md:max-w-120 mx-auto mt-10">
            <Link to="/mountain"><button onClick={e=>handleClick(e.target.name)} name="Mountain" className="bg-gray-800 hover:bg-gray-700 rounded-md px-8 my-2 text-white text-center">Mountain</button></Link>
            <Link to="/beach"><button onClick={e=>handleClick(e.target.name)} name="Beach" className="bg-gray-800 hover:bg-gray-700 rounded-md px-8 my-2 text-white text-center">Beaches</button></Link>
            <Link to="/bird"><button onClick={e=>handleClick(e.target.name)} name="Bird" className="bg-gray-800 hover:bg-gray-700 rounded-md px-8 my-2 text-white text-center">Birds</button></Link>
            <Link to="/food"><button onClick={e=>handleClick(e.target.name)} name="Food" className="bg-gray-800 hover:bg-gray-700 rounded-md px-8 my-2 text-white text-center">Food</button></Link>
        </div>
    )
}

export default Navigation
