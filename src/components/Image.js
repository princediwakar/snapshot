import React from 'react'
import { BsDownload } from 'react-icons/bs'

const Image = ({ url, downloadUrl, altDescription }) => {
    return (
        <div className="relative flex w-1/3">
            <div className="absolute hover:bg-gray-900 hover:opacity-25 z-10 h-full w-full"></div>
            <img
                className="block p-2 object-cover"
                src={url} alt={altDescription} >
            </img>
            <a href={downloadUrl} target="_blank" rel="noopener noreferrer"
                className="absolute right-0 bottom-0 m-4 bg-white px-4 py-3 z-20 rounded shadow">
                {<BsDownload />}
            </a>
        </div>

    )
}

export default Image
