import { useState } from 'react'
import './App.css'
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import About from "./components/About/About"
import Menu from "./components/menu/Menu"
import Contact from "./components/contact/Contact"
import Gallery from './components/gallery/Gallery'
import Specials from './components/specials/Specials'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'
function App() {

  return (
    <>
   <Header/>
  <Home/>
  <About/>
  <Menu/>
  <Contact/>
  <Gallery/>
  <Specials/>
  <Testimonials/>
  <Footer/>
    </>
  )
}

export default App