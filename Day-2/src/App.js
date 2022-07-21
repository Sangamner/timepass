import  React from 'react'
import Navbar from './Component/Navbar/Navbar';
import {BrowserRouter} from "react-router-dom"
import Marquee from 'react-fast-marquee';
function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     </BrowserRouter>
    </div>
  )
}
export default App;