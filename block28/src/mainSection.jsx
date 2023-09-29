import { Routes, Route, } from 'react-router-dom'
import Home from './home'
import Red from './red'
import Blue from './blue'

const mainSection = () => { 
    return (
<div id="main-section">
<Routes> 
<Route path="/home" element= {<Home/>}  />
<Route path="/blue" element= {<Blue/>}  />
<Route path="/red" element= {<Red/>} />
</Routes>
</div>
    )
}

export default mainSection;