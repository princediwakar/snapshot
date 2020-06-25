import React from 'react'
import Image from './Image';
import { toTitleCase } from '../helpers/toTitleCase';

const Gallery = ({ query, loading, error, imageResults }) => {
    const imagesList = imageResults.map(image => {
        let farm = image.farm;
        let server = image.server;
        let id = image.id;
        let secret = image.secret;
        let title = image.title;
        let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
        return { id, title, url }
    })
    return (
        <div>
            <h1 className="font-logo text-center text-3xl mt-10">{`${toTitleCase(query)} Images`}</h1>
            {loading && <p className="text-center mt-16">Loading...</p>}
            {!loading && error && <p className="text-center">Something went wrong...</p>}
            <ul className="flex flex-wrap justify-around max-w-5xl mx-auto mt-16">

                {  
                    !loading && imageResults && imagesList.map(image => (
                        <Image key={image.id} url={image.url} title={image.title} />
                    ))
                }
            </ul>
        </div>
    )
}

export default Gallery

