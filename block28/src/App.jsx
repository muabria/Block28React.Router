import { useState } from 'react'
import './App.css'
import Navbar from './Directory/navBar'
import MainSection from './Directory/mainSection.jsx'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div id="container">
      <Navbar/>
      <MainSection/>
    </div>
  )
}

export default App
