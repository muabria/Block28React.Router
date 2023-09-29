import { useState } from 'react'
import './App.css'
import Navbar from './Directory/navBar'
import MainSection from './Directory/mainSection.jsx'
import Footer from './Directory/footer'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div id="container">
      <Navbar/>
      <MainSection/>
      <Footer/>
    </div>
  )
}

export default App
