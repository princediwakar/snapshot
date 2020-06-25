import React from 'react'

const Image = ({url, title}) => {
    return (
        <li className="my-2 w-56 hover:z-10 ">
            <img
                className="w-56 h-40 object-cover transform duration-500 hover:scale-150 shadow-2xl"
                src={url} alt={title} />
        </li>
    )
}

export default Image
