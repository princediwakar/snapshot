import React from 'react'

const Image = ({url, altDescription}) => {
    return (
            <img
                className="p-2 w-1/3 align-middle object-cover"
                src={url} alt={altDescription} />
    )
}

export default Image
