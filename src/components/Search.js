import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = ({ handleClick }) => {
    const [searchText, setSearchText] = useState('')
    const handleSubmit = (e) => {
        handleClick(searchText)
        setSearchText('')
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center border border-gray-800 max-w-120 mx-auto mt-10 rounded-lg overflow-hidden">
            <input onChange={e=>setSearchText(e.target.value)} className="text-gray-900 focus:outline-none py-3 px-4 mx-auto block w-full appearance-none leading-normal" type="text" placeholder="Search..." />
            <button disabled={searchText?false:true} type="submit" className="bg-gray-800 hover:bg-gray-700 text-white py-4 px-6">{<FaSearch />}</button>
        </form>
    )
}

export default Search
