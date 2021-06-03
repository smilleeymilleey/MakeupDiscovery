import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import "../components/Home.css"

function Home() {
    return (
        <Container>
            <Row>
                <Col className="searchColumn">
                    <input className="searchbar"/>
                </Col>
                <Col className="productColumn">
                </Col>
            </Row>
        </Container>
    )
}

export default Home
