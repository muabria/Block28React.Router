import { Routes, Route, } from 'react-router-dom'
import Home from './home'
import Red from '../Colors/red'
import Blue from '../Colors/blue'
import Orange from '../Colors/orange'



const mainSection = () => { 
    return (
    <div id="main-section">
        <Routes> 
            <Route path="/home" element= {<Home/>} />
            <Route path="/blue" element= {<Blue/>} />
            <Route path="/red" element= {<Red/>} />
            <Route path="/orange" element= {<Orange/>} />
            
        </Routes>
    </div>
    )
}

export default mainSection;