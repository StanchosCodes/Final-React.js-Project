import { useState } from 'react'
import Header from './components/Header'
import './components/styles.css'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div id="templatemo_container">
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  )
}

export default App
