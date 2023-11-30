import { useState } from 'react'
import Header from './components/Header'
import './components/styles.css'
import Home from './components/Home'
import Books from './components/Books'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'

function App() {
  return (
    <>
      <div id="templatemo_container">
        <Navigation />
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
        
        <Footer />
      </div>
    </>
  )
}

export default App
