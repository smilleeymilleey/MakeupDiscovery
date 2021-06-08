import React, { useState } from 'react'
import "../components/SearchBar.css"
require('dotenv').config()

//generates categories

function SearchBar() {
   
        const [button, setButton] = useState(0)
      
    return (
        <>
        
            <input></input>
            <button onClick={() => setButton(button +1)} className="btnSearch"> Click Here </button>
            <p>You clicked {button} times </p>

    
        </>
    )
}

export default SearchBar
