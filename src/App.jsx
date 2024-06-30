import './App.css'
import { useState } from 'react'

function App() {
    const [heading,setHeading]=useState("Banana")
    function clickHandler(){
        setHeading("Mango")
    }
 return(
    <div>
        <button onClick={clickHandler}>Change Heading !</button>
    <h1>{heading}</h1>
    </div>
 )
}

export default App
