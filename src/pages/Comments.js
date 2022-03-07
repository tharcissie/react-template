import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../components/Header'
import CommentCard from '../components/CommentCard'
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { getComments, commentsSelector } from '../slices/CommentsSlice';
import { Box, LinearProgress } from '@material-ui/core';

const Comments = () => {

    const { id } = useParams()
    console.log('id', id)

    const dispatch = useDispatch()
    const { isFetching, comments } = useSelector(commentsSelector)


    console.log('comments', comments)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getComments());
    }, [dispatch]);

    return (
        <div>
            <Header />
            <Container className='mt-4'>
                <div>
                    <h2>Comments</h2>
                    <p> here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here </p>
                </div>

                {isFetching ? <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box> : <Row className='mt-2'>

                    {
                        comments.map((comment, i) => {
                            if (comment.postId == id) {
                                return (
                                    <Col key={i} className='md-4 mt-5'>
                                        <CommentCard name={comment.name} body={comment.body} email={comment.email} />
                                    </Col>)
                            }
                        })
                    }
                </Row>}
            </Container>
        </div>
    )
}

export default Comments