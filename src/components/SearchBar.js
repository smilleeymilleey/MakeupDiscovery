import React, { useState, useEffect } from 'react'
require('dotenv').config()

// search bar api request for drop down menu

function SearchBar() {
    const [category, setCategory] = useState([])
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
    return (
        <>
            {category.map(category => 
                <p>
                    {category.name}
                </p>
            )}
        </>
    )
}

export default SearchBar
