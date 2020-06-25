import React, { useState } from 'react'
import { BsDownload } from 'react-icons/bs'

const Image = ({ url, downloadUrl, altDescription }) => {


    return (
        <div className="relative flex w-full sm:w-1/2 md:w-1/3 hover:z-10">

            <img
                className="block p-2 object-cover transform transition duration-500 hover:scale-125"
                src={url} alt={altDescription} >
            </img>


            <button className="">
                <a
                    className="absolute right-0 bottom-0 m-4 bg-white px-4 py-3 z-1 rounded shadow"
                    href={downloadUrl} target="_blank" rel="noopener noreferrer">
                    {<BsDownload />}
                </a>
            </button>
        </div>

    )
}

export default Image
