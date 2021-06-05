import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import "../components/Home.css"
import SearchBar from "../components/SearchBar"
import Cards from "./Cards"


function Home() {
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
                console.log(allImages)
            }
        })     
    }

    return (
        <Container>
            <Row>
                <Col className="searchColumn" >
                    <input/>
                    <SearchBar />
                </Col>
                <Col className="productColumn">
                   <Cards getAllImages={getAllImages}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Home
