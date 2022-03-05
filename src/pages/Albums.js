import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AlbumCard from '../components/AlbumCard'
import Header from '../components/Header'

const Albums = () => {
  return (
    <div>
            <Header />
            <Container className='mt-4'>
                <div>
                    <h2>Albums</h2>
                    <p> here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here </p>
                </div>
                <Row className='mt-2'>
                    <Col className='md-4 mt-5'>
                        <AlbumCard/>
                    </Col>
                    <Col className='md-4 mt-5'>
                        <AlbumCard/>
                    </Col>
                    <Col className='md-4 mt-5'>
                        <AlbumCard/>
                    </Col>
                    <Col className='md-4 mt-5'>
                        <AlbumCard/>
                    </Col>
                    <Col className='md-4 mt-5'>
                        <AlbumCard/>
                    </Col>
                    <Col className='md-4 mt-5'>
                        <AlbumCard/>
                    </Col>
                </Row>
            </Container>
        </div>
  )
}

export default Albums