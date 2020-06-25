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
    

