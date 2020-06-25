import React, { useState } from 'react';
import Header from './Header';
import { BrowserRouter as Router} from 'react-router-dom';
import Navigation from './Navigation';
import Search from './Search';
import Gallery from './Gallery';
import {UNSPLASH_ACCESS_KEY} from '../api/config'
import { useUnsplashApi } from './useUnsplashApi';

const App = () => {
  const [query, setQuery] = useState('random')
  const [loading, error, imagesList] = useUnsplashApi(`https://api.unsplash.com/search/photos?client_id=${UNSPLASH_ACCESS_KEY}&query=${query}&per_page=24`)
  
  const handleClick = (searchText) => {
    setQuery(searchText)
  }

                          

  return (
      <Router>
        <Header />
        <Search handleClick={handleClick} />
        <Navigation handleClick={handleClick} />
        <Gallery query={query} loading={loading} error={error} imagesList={imagesList} />
      </Router>
  )
}

export default App;
