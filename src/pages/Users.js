import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header'
import UserCard from '../components/UserCard'
import { getUSers, usersSelector } from '../slices/UsersSlice';
import { useNavigate } from 'react-router-dom';
import { Box,  LinearProgress } from '@material-ui/core';

const Users = () => {

    const dispatch = useDispatch()
    const { isFetching, users } = useSelector(usersSelector)

    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getUSers());
    }, [dispatch]);

    return (
        <div>
            <Header />
            <Container className='mt-4'>
                <div>
                    <h2>All Users</h2>
                    <p> here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here </p>
                </div>
                {isFetching ? <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box> : <Row className='mt-2'>
                    {users.map((user, i) => {
                        return (
                            <Col className='md-4 mt-5' key={i}>
                                <UserCard
                                    name={user.name}
                                    email={user.email}
                                    city={user.address.city}
                                    street={user.address.street}
                                    phone={user.phone}
                                    onClickPosts={() => navigate(`/user/${user.id}/posts`)}
                                    onClickAlbums={() => navigate(`/user/${user.id}/albums`)} />
                            </Col>
                        )
                    })}
                </Row>}
            </Container>
        </div>
    )
}

export default Users