import React, { useState, useEffect } from 'react'
import "../components/SearchBar.css"
require('dotenv').config()

//generates categories
function SearchBar() {
    const [category, setCategory] = useState([])
    const [image, setImage] = useState([])
    useEffect(() => {
        fetch(
            'https://api.thecatapi.com/v1/categories',
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'Bearer a8e933a9-9c1e-42ce-886f-933c67cf09a0'
              },
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            if (response.length > 0) {
                setCategory(response)
            }
        })  
    });

// get images 

function getImages() {
   
        fetch('https://api.thecatapi.com/v1/images',
            {   
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'Bearer a8e933a9-9c1e-42ce-886f-933c67cf09a0'
                },
            })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                if (response.length > 0) {
                    setImage(response)
                }
            })  
    
        }
    
    return (
        <>
            {category.map(category => 
                <ul>
                 <li>
                    <button onClick={getImages(image)} className="buttons">
                        {category.name}
                    </button>
                 </li>
                </ul>
            )}
        </>
    )
}

export default SearchBar
