import { Box, LinearProgress } from '@material-ui/core'
import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import AlbumCard from '../components/AlbumCard'
import Header from '../components/Header'
import { albumsSelector, getAlbums } from '../slices/AlbumsSlice'


const Albums = () => {

    const { id } = useParams()
    console.log('id', id)

    const dispatch = useDispatch()
    const { isFetching, albums } = useSelector(albumsSelector)

    console.log('albums', albums)

    useEffect(() => {
        dispatch(getAlbums());
    }, [dispatch]);


    return (
        <div>
            <Header />
            <Container className='mt-4'>
                <div>
                    <h2>Albums</h2>
                    <p> here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here Project description goes here </p>
                </div>
                {isFetching ? <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box> :
                    <Row className='mt-2'>
                        {albums.map((album, i) => {
                            if (album.userId == id) {
                                return (
                                    <Col key={i} className='md-4 mt-5'>
                                        <AlbumCard title={album.title} />
                                    </Col>)
                            }
                        })}
                    </Row>}
            </Container>
        </div>
    )
}

export default Albums