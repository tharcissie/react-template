import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const AlbumCard = (props) => {
  return (
    <Card sx={{ width: '9cm' }}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props.title}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default AlbumCard