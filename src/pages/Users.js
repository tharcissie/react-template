import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../components/Header'
import UserCard from '../components/UserCard'

const Users = () => {
    return (
        <div>
            <Header />
            <Container className='mt-4'>
                <div>
                    <h2>All Users</h2>
                    <p> here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here </p>
                </div>
                <Row className='mt-2'>
                    <Col className='md-4 mt-5'>
                        <UserCard/>
                    </Col>
                    <Col className='md-4 mt-5'>
                        <UserCard/>
                    </Col>
                    <Col className='md-4 mt-5'>
                        <UserCard/>
                    </Col>
                    <Col className='md-4 mt-5'>
                        <UserCard/>
                    </Col>
                    <Col className='md-4 mt-5'>
                        <UserCard/>
                    </Col>
                    <Col className='md-4 mt-5'>
                        <UserCard/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Users