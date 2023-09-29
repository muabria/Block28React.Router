import { useState } from 'react'
import './App.css'
import Navbar from './navbar'
import MainSection from './mainSection.jsx'

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
