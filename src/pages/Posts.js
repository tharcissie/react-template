import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../components/Header'
import PostCard from '../components/PostCard'

const Posts = () => {
  return (
    <div>
    <Header />
    <Container className='mt-4'>
        <div>
            <h2>Posts</h2>
            <p> here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here </p>
        </div>
        <Row className='mt-2'>
            <Col className='md-4 mt-5'>
                <PostCard/>
            </Col>
            <Col className='md-4 mt-5'>
                <PostCard/>
            </Col>
            <Col className='md-4 mt-5'>
                <PostCard/>
            </Col>
            <Col className='md-4 mt-5'>
                <PostCard/>
            </Col>
            <Col className='md-4 mt-5'>
                <PostCard/>
            </Col>
            <Col className='md-4 mt-5'>
                <PostCard/>
            </Col>
        </Row>
    </Container>
</div>
  )
}

export default Posts