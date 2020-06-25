import React from 'react'
import Image from './Image';
import { toTitleCase } from '../helpers/toTitleCase';

const Gallery = ({ query, loading, error, imagesList }) => {
    console.log("Receiving List",imagesList, query, loading, error)
    return (
        <div>
            <h1 className="font-logo text-center text-3xl mt-10">{`${toTitleCase(query)} Images`}</h1>


            {loading && <p className="text-center mt-16">Loading...</p>}
            {!loading && error && <p className="text-center">Something went wrong...</p>}

            <div className="flex flex-wrap justify-around w-11/12 mx-auto mt-16">
                {
                    !loading && !error && imagesList && imagesList.map(image => (
                        <Image key={image.id} url={image.urls.regular} altDescription={image.alt_description || 'Image'} />
                    ))
                }
            </div>
        </div>
    )
}

export default Gallery

