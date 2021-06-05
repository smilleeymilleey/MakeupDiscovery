import React, { useState, useEffect } from 'react'
import "../components/SearchBar.css"
require('dotenv').config()

//generates categories

function SearchBar() {
    const [category, setCategory] = useState([])
    const [allImages, setAllImages] = useState([])
    
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
    }, []);

    console.log(category)
    

        // get all images
    function getAllImages(id) {
        fetch(`https://api.thecatapi.com/v1/images/search/?categories_id=${id}`,
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ',
                'x-api-key': 'Bearer a8e933a9-9c1e-42ce-886f-933c67cf09a0'  
            },
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            if (response.length > 0) {
                setAllImages(response)
            }
        })     
    }

    
    return (
        <>
        <form>
            <input></input>
            <button type="submit">search</button>

        </form>
            {category.map(category => 
                <ul>
                 <li>
                    <button onClick={() => getAllImages(category.id)} className="buttons">
                        {category.name}
                    </button>
               
                  {allImages.map(images => 
                        <img className="categoryImages" src={images.url}></img>
                    )} 
                 </li>
                </ul>
            )}
        </>
    )
}

export default SearchBar
