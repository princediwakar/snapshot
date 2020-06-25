import React, { useState } from 'react'
import Search from './Search'
import Gallery from './Gallery'
import { apiKey } from '../api/config'
import Navigation from './Navigation'
import { useFlickrApi } from './hooks/useFlickrApi'



const FilterableGallery = () => {
    const [query, setQuery] = useState('mountain')
    const {imageResults, loading, error} = useFlickrApi(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)

    const handleClick = (searchText) => {
        setQuery(searchText)
    }

    return (
        <div>
            <Search handleClick={handleClick} />
            <Navigation handleClick={handleClick}/>
            <Gallery query={query} imageResults={imageResults} />
        </div>
    )
}

export default FilterableGallery



// const useFlickrApi = (apiKey, tag) => {
//     const [isLoading, setIsLoading] = useState(false)
//     const [images, setImages] = useState([])
//     const [error, setError] = useState(null)

//     useEffect(tag=> {
//         const runSearch =(tag) => {
//             axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`)
//             .then(response => {
//                 setImages(response.data.photos.photo)
//                 setIsLoading(false)
//             })
//             .catch(error => {
//                 setError(error)
//             })
//         }
//         return () => runSearch(tag)
//     })
//     return [{}]

// }