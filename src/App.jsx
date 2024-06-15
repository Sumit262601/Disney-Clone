import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import ProductionHouse from './components/ProductionHouse'
import GenresMovieList from './components/GenresMovieList'

function App() {

  return (
    <div className=''>

      <Header />
      
      <Slider />
      
      <ProductionHouse />

      <GenresMovieList />
      
    </div>
  )
}

export default App
