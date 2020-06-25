import { useState, useEffect } from "react"
import Axios from "axios"

export const useUnsplashApi = (url) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [imagesList, setImagesList] = useState([])

    useEffect(()=>{
        const getImages = async() => {
          setLoading(true)
          await Axios(url)
                      .then(response=>{
                        setImagesList(response.data.results)
                        setLoading(false)
                      })
                      .catch(error => {
                        setError(error)
                        setLoading(false)
                      })
        }
        getImages()
      },[url])
    
    return [loading, error, imagesList]
}