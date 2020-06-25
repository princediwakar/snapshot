import React, { useState } from 'react';
import Header from './Header';
import { Router } from 'react-router-dom';
import { useFlickrApi } from './hooks/useFlickrApi';
import Navigation from './Navigation';
import Search from './Search';
import Gallery from './Gallery';
import { apiKey } from '../api/config';

const App = () => {
  const [query, setQuery] = useState('mountain')
  const { imageResults, loading, error } = useFlickrApi(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)

  const handleClick = (searchText) => {
    setQuery(searchText)
  }
  return (
    <>
      <Header />
      <Search query={query} handleClick={handleClick} />
      <Navigation handleClick={handleClick} />
      <Gallery  query={query} loading={loading} error={error} imageResults={imageResults} />
    </>
  )
}

export default App;
