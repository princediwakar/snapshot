import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export const useFlickrApi = (url) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [imageResults, setImageResults] = useState([])

    useEffect(() => {
        setLoading(true)
        const getPhotos = async () => {
            await axios.get(url)
                .then(response => {
                    setImageResults(response.data.photos.photo);
                    setLoading(false)
                })
                .catch(error => {
                    setError(error)
                    setLoading(false)
                })
        };
        getPhotos()
    }, [url])

    return {loading, error, imageResults}

}
    
// setUrl(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchText}&per_page=24&format=json&nojsoncallback=1`)

                          
  // const imagesList = imageResults.map(image => {
  //   let farm = image.farm;
  //   let server = image.server;
  //   let id = image.id;
  //   let secret = image.secret;
  //   let title = image.title;
  //   let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
  //   return { id, title, url }
// })