
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero.jsx'
import Programs from './Components/Programs/Programs.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
// import Experience from './Components/Experience/Experience.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Programs />
      <Contact />
      <Footer />
    </div>
  )
}

export default App