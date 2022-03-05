import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const PostCard = () => {
  return (
    <Card sx={{ width: '9cm' }}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard are weird
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button  style={{color:'#03045E'}}  size="small" color="primary">
     12<ChatBubbleIcon/>
      </Button>
    </CardActions>
  </Card>
  )
}

export default PostCard